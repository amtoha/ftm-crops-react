import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ethers } from "ethers";
import {
  abi,
  mainContractAddress,
  secondContractAddress,
} from "../utils/constans";

export function readableBNB(amount, decimals) {
  const num = amount / 1e18;
  if (num < 1) {
    decimals = 4;
  }
  return parseFloat(num.toFixed(decimals));
}
export const fetchSiteInfo = createAsyncThunk(
  "contract/fetchSiteInfo",
  async (_, { getState }) => {
    const { mainContract } = getState();
    const response = await mainContract.getSiteInfo();
    const balance = await mainContract.getBalance();
    let siteInfo = {};
    siteInfo.totalStacked = readableBNB(response._totalStaked, 4);
    siteInfo.totalFarmers = Number(response._totalDeposits);
    siteInfo.contractBalance = readableBNB(balance, 4);
    siteInfo.totalReferral = readableBNB(response._totalRefBonus, 4);
    return siteInfo;
  }
);

export const fetchUserInfo = createAsyncThunk(
  "contract/fetchUserInfo",
  async (currentAddr, { getState }) => {
    const { secondContract, provider } = getState();
    const userData = await secondContract.getUserInfo(currentAddr);
    const userBalance = await provider.getBalance(currentAddr);

    let user = {};
    user.initialDeposit = readableBNB(userData._initialDeposit, 4);
    user.userDeposit = readableBNB(userData._userDeposit, 4);
    user.miners = Number(userData._miners);
    user.totalWithdrawn = readableBNB(userData._totalWithdrawn, 4);
    user.lastHatch = Number(userData._lastHatch);
    user.referrals = Number(userData._referrals);
    user.referralEggRewards = readableBNB(userData._referralEggRewards, 4);
    user.dailyCompoundBonus = Number(userData._dailyCompoundBonus);
    user.farmerCompoundCount = Number(userData._farmerCompoundCount);
    user.lastWithdrawTime = Number(userData._lastWithdrawTime);
    user.balance = readableBNB(userBalance, 4);

    if (user.miners > 0) {
      const userAvailableEarrings = await secondContract.getAvailableEarnings(
        currentAddr
      );
      const eggsPerDay = await secondContract.calculateEggSellForYield(
        24 * 60 * 60 * user.miners,
        ethers.utils.parseEther("1")
      );
      user.eggsPerDay = readableBNB(eggsPerDay, 4);
      user.availableEarnings = readableBNB(userAvailableEarrings, 4);
    }

    return user;
  }
);

export const contractSlice = createSlice({
  name: "contract",
  initialState: {
    siteInfo: {
      totalStacked: "-",
      totalReferral: "-",
      contractBalance: "-",
      totalFarmers: "-",
    },
    userInformation: {
      balance: "-",
      initialDeposit: "-",
      userDeposit: "-",
      miners: "-",
      totalWithdrawn: "-",
      lastHatch: 0,
      referrals: 0,
      referralEggRewards: "-",
      dailyCompoundBonus: 0,
      farmerCompoundCount: 0,
      lastWithdrawTime: 0,
      availableEarnings: 0,
      eggsPerDay: "-",
    },
    config: {
      cutoffStep: 172800,
      compoundStep: 43200,
      withdrawCooldown: 14400,
      claimTimer: "--:--:--",
      compoundTimer: "--:--:--",
      cooldownTimer: "",
      withdrawAttr: true,
      reinvestAttr: true,
    },
    provider: null,
    mainContract: null,
    secondContract: null,
  },

  reducers: {
    createContract(state, { payload }) {
      state.provider = payload;
      const signer = state.provider.getSigner();
      state.mainContract = new ethers.Contract(
        mainContractAddress,
        abi,
        signer
      );
      state.secondContract = new ethers.Contract(
        secondContractAddress,
        abi,
        signer
      );
    },
    setClaimTimer(state, { payload }) {
      state.config.claimTimer = payload;
    },
    setCompoundTimer(state, { payload }) {
      state.config.compoundTimer = payload;
    },
    setCooldownTimer(state, { payload }) {
      state.config.cooldownTimer = payload;
    },
    setReinvestAttr(state, { payload }) {
      state.config.reinvestAttr = payload;
    },
    setWithdrawAttr(state, { payload }) {
      state.config.withdrawAttr = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSiteInfo.fulfilled, (state, { payload }) => {
        state.siteInfo = { ...state.siteInfo, ...payload };
      })
      .addCase(fetchUserInfo.fulfilled, (state, { payload }) => {
        state.userInformation = { ...state.userInformation, ...payload };
      });
  },
});

export const {
  createContract,
  setClaimTimer,
  setCompoundTimer,
  setReinvestAttr,
  setCooldownTimer,
  setWithdrawAttr,
} = contractSlice.actions;
export default contractSlice.reducer;
