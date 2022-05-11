import { BsBank } from "react-icons/bs";
import { RiCoinsLine } from "react-icons/ri";
import { MdAccountBalanceWallet } from "react-icons/md";
import { GiMiner, GiSandsOfTime } from "react-icons/gi";
import { GoClock } from "react-icons/go";
import { hooks } from "../utils/connectors";
import { useSelector } from "react-redux";
import {
  startCutoffTimer,
  startCompoundTimer,
  startCooldownTimer,
} from "../utils/utils";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

const Dashboard = () => {
  const { useAccount, useProvider } = hooks;
  const account = useAccount();

  const {
    initialDeposit,
    userDeposit,
    totalWithdrawn,
    referralEggRewards,
    referrals,
    miners,
    balance,
    lastHatch,
    farmerCompoundCount,
    availableEarnings,
    eggsPerDay,
  } = useSelector((state) => state.userInformation);

  const {
    claimTimer,
    cutoffStep,
    compoundStep,
    compoundTimer,
    reinvestAttr,
    withdrawCooldown,
    cooldownTimer,
    withdrawAttr,
  } = useSelector((state) => state.config);
  const contract = useSelector((state) => state.secondContract);

  useEffect(() => {
    startCutoffTimer(lastHatch, cutoffStep);
    startCompoundTimer(lastHatch, compoundStep);
    startCooldownTimer(lastHatch, withdrawCooldown);
  }, [lastHatch]);

  const [deposit, setDeposit] = useState("");
  const [canSell, setCanSell] = useState(true);

  const currentURL = window.location.origin;

  const hireFarmers = () => {
    const amt = ethers.utils.parseEther(deposit);
    if (deposit > 15000) {
      alert(`you cannot deposit more than 15000 FTM`);
      return;
    }
    if (deposit > balance) {
      alert("you do not have " + deposit + " FTM in your wallet");
      return;
    }

    const queryParams = new URLSearchParams(window.location.search);
    let ref = queryParams.get("ref");

    if (deposit > 0) {
      if (!ethers.utils.isAddress(ref)) {
        ref = account;
      }
      contract
        .hireFarmers(ref, { value: amt })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setDeposit("");
  };

  const hireMoreFarmers = async () => {
    if (canSell) {
      setCanSell(false);
      await contract.hireMoreFarmers(true);
      startCutoffTimer(lastHatch, cutoffStep);
      startCompoundTimer(lastHatch, compoundStep);
      startCooldownTimer(lastHatch, withdrawCooldown);
      setTimeout(function () {
        setCanSell(true);
      }, 10000);
    } else {
      console.log("Cannot hatch yet...");
    }
  };

  const sellCrops = async () => {
    if (canSell) {
      setCanSell(false);
      await contract.sellCrops();
      startCutoffTimer(lastHatch, cutoffStep);
      startCompoundTimer(lastHatch, compoundStep);
      startCooldownTimer(lastHatch, withdrawCooldown);
      setTimeout(function () {
        setCanSell(true);
      }, 10000);
    } else {
      console.log("Cannot sell yet...");
    }
  };

  return (
    <section className="flex flex-col justify-center items-center border-[6px] border-blue rounded-md bg-bg p-8 space-y-4">
      <div className="flex flex-col w-full p-[50px] ">
        <div className="text-blue text-3xl font-bold !font-[cursive] mb-[30px] text-center border-b pb-2">
          Farmer Dashboard
        </div>
        <div className=" mb-8 flex justify-around">
          <div className="flex flex-col justify-center items-center rounded-xl p-2 text-blue space-y-2 card">
            <div className="flex items-center">
              <BsBank className="mr-2" /> Initial Deposit
            </div>
            <strong className="font-semibold text-5xl leading-[35px]">
              {initialDeposit}
            </strong>
            <strong>FTM</strong>
          </div>
          <div className="flex flex-col justify-center items-center rounded-xl p-2 text-blue space-y-2 card">
            <div className="flex items-center">
              <BsBank className="mr-2" /> Total Deposit
            </div>
            <strong className="font-semibold text-5xl leading-[35px]">
              {userDeposit}
            </strong>
            <strong>FTM</strong>
          </div>
          <div className="flex flex-col justify-center items-center rounded-xl p-2 text-blue space-y-2 card">
            <div className="flex items-center">
              <BsBank className="mr-2" /> Withdrawn
            </div>
            <strong className="font-semibold text-[56px] leading-[35px]">
              {totalWithdrawn}
            </strong>
            <strong>FTM</strong>
          </div>
          <div className="flex flex-col justify-center items-center rounded-xl p-2 text-blue space-y-2 card">
            <div className="flex items-center">
              <BsBank className="mr-2" /> {`Referrals(${referrals})`}
            </div>
            <strong className="font-semibold text-5xl leading-[35px]">
              {referralEggRewards}
            </strong>
            <strong>FTM</strong>
          </div>
        </div>
        <p>
          <span className="text-blue font-semibold">Disclaimer: </span>
          Funds that are used to initially hire farmers (including re-hire)
          cannot be withdrawn, however your farmers will indefinitely work and
          grow crops for you. Please use the application at your own risk.
        </p>
      </div>

      <div className="flex space-x-2 w-full">
        <div className="card flex flex-col w-1/2 space-y-4 p-4">
          <div className="flex justify-between p-2">
            <div className="flex flex-col text-blue">
              <span className="font-semibold">Hiring Example</span>
              <span>100 FTM = 126 Farmers</span>
              <span className="flex items-center">
                <RiCoinsLine className="mr-1" />
                Daily Yield: 5.99 FTM
              </span>
            </div>
            <div className="flex flex-col border border-white rounded-xl py-2 px-8 text-blue">
              <span className="flex items-center">
                <MdAccountBalanceWallet className="mr-1" />
                Wallet
              </span>
              <span>{balance}</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="flex items-center">
              <GiSandsOfTime className="mr-1" />
              Cart will be full in
            </span>
            <span className="text-blue">{claimTimer}</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="flex items-center">
              <GoClock className="mr-1" />
              Time until next hire bonus is activated:
            </span>
            <span className="text-blue">{compoundTimer}</span>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="text-blue">
              Deposit FTM{" "}
              <span className="text-xs text-white">
                ( min
                <span className="text-blue">10</span>) max
                <span className="text-blue">15000</span>)
              </span>
            </div>
            <input
              className="bg-bg border border-white rounded-md py-2 px-4 text-xl"
              value={deposit}
              onChange={(e) => setDeposit(e.target.value)}
              min={10}
              max={15000}
            />
            <button
              className="bg-blue w-full rounded-md py-2 hover:bg-cyan-900"
              onClick={() => hireFarmers()}
            >
              Hire Farmers
            </button>
          </div>
        </div>

        <div className="card flex flex-col w-1/2 items-center space-y-4 justify-between p-4">
          <div className="flex items-center text-blue text-xl">
            <GiMiner className="mr-1" />
            {`${miners} Farmers`}
          </div>
          <div className="flex items-center text-blue text-2xl font-bold">
            <RiCoinsLine className="mr-1" />
            {`${availableEarnings} FTM`}
          </div>
          <div className="flex flex-col text-center">
            <span>Estimated daily yield:</span>
            <span className="text-blue text-xl font-bold">{eggsPerDay}</span>
          </div>
          <div className="flex flex-col text-center">
            <span>Compound Count:</span>
            <span className="text-blue text-xl font-bold">{`${farmerCompoundCount} Times`}</span>
          </div>
          <div className="space-y-4">
            <button
              className={`bg-blue w-full rounded-md py-2 ${
                farmerCompoundCount < 10
                  ? "hover:bg-red-500"
                  : "hover:bg-cyan-900"
              }`}
              disabled={withdrawAttr}
              onClick={() => sellCrops()}
            >
              {`
              Sell Crops ${cooldownTimer}`}
              {farmerCompoundCount < 10 && (
                <span className="text-red-900 ml-2 text-xs font-bold">
                  -80% tax
                </span>
              )}
            </button>
            <button
              className="bg-blue w-full rounded-md py-2 hover:bg-cyan-900 disabled:bg-gray-500 disabled:cursor-default"
              disabled={reinvestAttr}
              onClick={() => hireMoreFarmers()}
            >
              Hire More Farmers (+2%)
            </button>
          </div>
        </div>
      </div>
      <div className="text-center">
        Every time you compound without withdrawing, your compound bonus grows
        by 2% (max +20%). <br /> Withdrawing will reset your bonus to 0.
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        {`Earn 7% when someone uses your referral link!`}
        <div className="flex justify-center items-center w-full">
          <input
            value={`${currentURL}?ref=${account}`}
            className="bg-bg border border-white rounded-md py-1 px-2 text-lg w-3/4"
            readOnly
          />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
