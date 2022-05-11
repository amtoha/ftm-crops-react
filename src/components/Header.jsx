import twitter from "../img/twitter.svg";
import telegram from "../img/telegram.svg";
import bscscan from "../img/logo-ftmscan.svg";
import ccs from "../img/ccs-audit.png";

import { ImSpinner9 } from "react-icons/im";

import NavItem from "./NavItem";
import { switchChain } from "../utils/utils";

const Header = ({ account, isActive, isActivating }) => {
  return (
    <header className="flex justify-center w-full py-4 bg-black text-sm font-bold bg-opacity-80 fixed z-10">
      <div className="container flex">
        <nav className="flex justify-center items-center w-full space-x-10 container flex-1">
          <NavItem
            url="/The BUSD Crops Farmer.pdf"
            image={ccs}
            text="Audited by CyberCrimeShield™"
          />
          <NavItem
            url="https://ftmscan.com/address/0x23993031b967efe4046b1ff8f1d0e3b6f453621a"
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
              {`${account.substring(0, 6)}...${account.substring(
                account.length - 4
              )}`}
            </span>
          </button>
        ) : (
          <button
            className="px-[20px] py-[8px] border border-blue rounded-[5px] flex space-x-4 items-center mr-[100px] w-[200px] justify-center h-[40px]"
            onClick={() => {
              switchChain();
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
  );
};

export default Header;
