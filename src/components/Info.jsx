import Image from 'next/image'
import logo2 from '../../public/img/Logo2.png'
import { BsBank, BsCheckSquareFill } from 'react-icons/bs'
import { FaMoneyBillAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Info = () => {
  const dailyPercent = useSelector((state) => state.dailyPercent)
  const apr = useSelector((state) => state.apr)
  console.log(dailyPercent)
  return (
    <section className="flex justify-center items-center border-[6px] border-blue rounded-md bg-bg">
      <div className="flex flex-col w-full p-[50px]">
        <div className="flex justify-around items-center text-center">
          <div>
            <Image src={logo2} height={175} width={175} />
          </div>
          <div className="flex flex-col justify-center items-center space-y-3">
            <h2 className="text-[64px] text-black font-bold leading-10">
              Welcome to
            </h2>
            <h3 className="text-stroke font-bold">The FTM Crops Farmer.</h3>
            <h4>
              A smart and sustainable way to grow your FTM <br /> on the Fantom
              Chain.
            </h4>
          </div>
        </div>

        <div className="flex">
          <div className="flex w-1/2 flex-col p-4 text-blue space-y-3">
            <h4 className="text-3xl font-bold tracking-wider border-b pb-2">
              Statistics
            </h4>
            <div className="flex justify-start items-center space-x-2 card">
              <BsBank className="w-[18px] h-[18px]" />
              <div>
                <div className="text-xl font-semibold">Total Stacked</div>
                <div className="text-3xl font-bold">-</div>
              </div>
            </div>
            <div className="flex justify-start items-center space-x-2 card">
              <BsBank className="w-[18px] h-[18px]" />
              <div>
                <div className="text-xl font-semibold">Total Referral</div>
                <div className="text-3xl font-bold">-</div>
              </div>
            </div>
            <div className="flex justify-start items-center space-x-2 card">
              <BsBank className="w-[18px] h-[18px]" />
              <div>
                <div className="text-xl font-semibold">Contract Balance</div>
                <div className="text-3xl font-bold">-</div>
              </div>
            </div>
            <div className="flex justify-start items-center space-x-2 card">
              <BsBank className="w-[18px] h-[18px]" />
              <div>
                <div className="text-xl font-semibold">Total Farmers</div>
                <div className="text-3xl font-bold">-</div>
              </div>
            </div>
            <div className="flex p-2 space-x-2 text-white">
              <a href="https://bit.ly/3ME8Y1D" target="_blank">
                <div className="flex px-6 py-4 border border-white rounded-xl text-center items-center cursor-pointer hover:text-blue hover:border-blue">
                  <FaMoneyBillAlt className="w-[24px] h-[24px]" />
                  <span>BUSD CROPS</span>
                </div>
              </a>

              <a href="https://bit.ly/3Kqjpoa" target="_blank">
                <div className="flex px-6 py-4 border border-white rounded-xl text-center items-center cursor-pointer hover:text-blue hover:border-blue">
                  <FaMoneyBillAlt className="w-[24px] h-[24px]" />
                  <span>USDC CROPS</span>
                </div>
              </a>
              <a href="https://bit.ly/3rVfWY8" target="_blank">
                <div className="flex px-6 py-4 border border-white rounded-xl text-center items-center cursor-pointer hover:text-blue hover:border-blue">
                  <FaMoneyBillAlt className="w-[24px] h-[24px]" />
                  <span>BNB CROPS</span>
                </div>
              </a>
            </div>
          </div>
          <div className="flex w-1/2 flex-col p-4 text-blue space-y-3">
            <h4 className="text-3xl font-bold tracking-wider border-b pb-2">
              Benefits
            </h4>
            <div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <BsCheckSquareFill className="mr-2" />
                  <span className="text-white">{`Up to ${dailyPercent}% Daily ~ ${apr}% APR`}</span>
                </li>
                <li className="flex items-center">
                  <BsCheckSquareFill className="mr-2" />
                  <span className="text-white">2% Compound Bonus</span>
                </li>
                <li className="flex items-center">
                  <BsCheckSquareFill className="mr-2" />
                  <span className="text-white">7% Referrals</span>
                </li>
                <li className="flex items-center">
                  <BsCheckSquareFill className="mr-2" />
                  <span className="text-white">12 Hours Compound Timer</span>
                </li>
                <li className="flex items-center">
                  <BsCheckSquareFill className="mr-2" />
                  <span className="text-white">4 Hours Withdraw Cooldown</span>
                </li>
                <li className="flex items-center">
                  <BsCheckSquareFill className="mr-2" />
                  <span className="text-white">
                    48 Hours Rewards Accumulation Cut-Off
                  </span>
                </li>
                <li className="flex items-center">
                  <BsCheckSquareFill className="mr-2" />
                  <span className="text-white">
                    10 Times Mandatory Compound Feature
                  </span>
                </li>
                <li className="flex items-center">
                  <BsCheckSquareFill className="mr-2" />
                  <span className="text-white">
                    80% Feedback Tax For Early Withdrawals.
                  </span>
                </li>
                <li className="flex items-center">
                  <BsCheckSquareFill className="mr-2" />
                  <span className="text-white">Anti-Bot Launch</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
