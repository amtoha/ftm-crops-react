import twitter from '/public/img/twitter.svg'
import telegram from '/public/img/telegram.svg'
import bscscan from '/public/img/logo-ftmscan.svg'

import { ImSpinner9 } from 'react-icons/im'

import NavItem from './NavItem'
import { switchChain } from '../utils/utils'

const Header = ({ accounts, isActive, isActivating }) => {
  return (
    <header className="flex justify-center w-full py-4 bg-black text-sm font-bold bg-opacity-80 fixed z-10">
      <div className="container flex">
        <nav className="flex justify-center items-center w-full space-x-10 container flex-1">
          <NavItem
            url="/The BUSD Crops Farmer.pdf"
            image="/img/ccs-audit.png"
            text="Audited by CyberCrimeShield™"
          />
          <NavItem
            url="https://testnet.ftmscan.com/address/0x63be9aea58c297d023690a78de92996adbddee5d"
            image={bscscan}
            text="Contract™"
          />
          <NavItem
            url="https://twitter.com/BUSDCropFarmer"
            image={twitter}
            text="Twitter™"
          />
          <NavItem
            url="https://t.me/busdcropfarmer"
            image={telegram}
            text="Telegram™"
          />
        </nav>

        {isActive ? (
          <button className="px-[20px] py-[8px] border border-blue rounded-[5px] flex space-x-4 items-center mr-[100px] w-[200px] justify-center h-[40px]">
            <span>
              {`${accounts[0].substring(0, 6)}...${accounts[0].substring(
                accounts[0].length - 4
              )}`}
            </span>
          </button>
        ) : (
          <button
            className="px-[20px] py-[8px] border border-blue rounded-[5px] flex space-x-4 items-center mr-[100px] w-[200px] justify-center h-[40px]"
            onClick={() => {
              switchChain()
            }}
          >
            {isActivating ? (
              <ImSpinner9 className="w-[18px] h-[18px] animate-spin" />
            ) : (
              <span className="hover:text-blue">Connect Wallet</span>
            )}
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
