import { BsBank } from 'react-icons/bs'
import { RiCoinsLine } from 'react-icons/ri'
import { MdAccountBalanceWallet } from 'react-icons/md'
import { GiMiner, GiSandsOfTime } from 'react-icons/gi'
import { GoClock } from 'react-icons/go'

const Dashboard = () => {
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
            <strong className="font-semibold text-5xl leading-[35px]">0</strong>
            <strong>FTM</strong>
          </div>
          <div className="flex flex-col justify-center items-center rounded-xl p-2 text-blue space-y-2 card">
            <div className="flex items-center">
              <BsBank className="mr-2" /> Total Deposit
            </div>
            <strong className="font-semibold text-5xl leading-[35px]">0</strong>
            <strong>FTM</strong>
          </div>
          <div className="flex flex-col justify-center items-center rounded-xl p-2 text-blue space-y-2 card">
            <div className="flex items-center">
              <BsBank className="mr-2" /> Withdrawn
            </div>
            <strong className="font-semibold text-[56px] leading-[35px]">
              0
            </strong>
            <strong>FTM</strong>
          </div>
          <div className="flex flex-col justify-center items-center rounded-xl p-2 text-blue space-y-2 card">
            <div className="flex items-center">
              <BsBank className="mr-2" /> Referrals (0)
            </div>
            <strong className="font-semibold text-5xl leading-[35px]">0</strong>
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
              <span>100 FTM = 0 Farmers</span>
              <span className="flex items-center">
                <RiCoinsLine className="mr-1" /> Daily Yield: 0 FTM
              </span>
            </div>
            <div className="flex flex-col border border-white rounded-xl py-2 px-8 text-blue">
              <span className="flex items-center">
                <MdAccountBalanceWallet className="mr-1" />
                Wallet
              </span>
              <span>0</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="flex items-center">
              <GiSandsOfTime className="mr-1" />
              Cart will be full in
            </span>
            <span className="text-blue">00:00:00</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="flex items-center">
              <GoClock className="mr-1" />
              Time until next hire bonus is activated:
            </span>
            <span className="text-blue">--:--:--</span>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="text-blue">
              Deposit FTM{' '}
              <span className="text-xs">
                <span className="text-white">( min </span> 0,{' '}
                <span className="text-white">max</span> 0 )
              </span>
            </div>
            <input
              className="bg-bg border border-white rounded-md py-2 px-4 text-xl"
              placeholder="1"
            />
            <button className="bg-blue w-full rounded-md py-2 hover:bg-cyan-900">
              Hire 0 Farmers
            </button>
          </div>
        </div>

        <div className="card flex flex-col w-1/2 items-center space-y-4 justify-between p-4">
          <div className="flex items-center text-blue text-xl">
            <GiMiner className="mr-1" />0 Farmers
          </div>
          <div className="flex items-center text-blue text-2xl font-bold">
            <RiCoinsLine className="mr-1" />0 FTM
          </div>
          <div className="flex flex-col text-center">
            <span>Estimated daily yield:</span>
            <span className="text-blue text-xl font-bold">0 FTM</span>
          </div>
          <div className="flex flex-col text-center">
            <span>Compound Count:</span>
            <span className="text-blue text-xl font-bold">0 Times</span>
          </div>
          <div className="space-y-4">
            <button className="bg-blue w-full rounded-md py-2 hover:bg-cyan-900">
              Sell Crops in 00:00:00
              <span className="text-red-900 ml-2 text-xs font-bold">
                -80% tax
              </span>
            </button>
            <button className="bg-blue w-full rounded-md py-2 hover:bg-cyan-900">
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
        Earn 0% when someone uses your referral link!
        <div className="flex justify-center items-center w-full">
          <input
            value={`https://ftm.cropsfarmer.online?ref=`}
            className="bg-bg border border-white rounded-md py-1 px-2 text-lg w-3/4"
            readOnly
          />
        </div>
      </div>
    </section>
  )
}

export default Dashboard
