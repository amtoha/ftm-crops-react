import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { useEffect } from "react";
import { hooks, metaMask } from "./utils/connectors";
import { defaultChain } from "./utils/chains";
import { switchChain } from "./utils/utils";
import {
  createContract,
  fetchSiteInfo,
  fetchUserInfo,
} from "./app/contractSlice";
import { useDispatch } from "react-redux";
import Info from "./components/Info";
import Dashboard from "./components/Dashboard";
import FAQ from "./components/FAQ";

const App = () => {
  const { useIsActive, useIsActivating, useChainId, useAccount, useProvider } =
    hooks;
  const account = useAccount();
  const isActive = useIsActive();
  const isActivating = useIsActivating();
  const chainId = useChainId();
  const provider = useProvider();
  const dispatch = useDispatch();

  useEffect(() => {
    if (provider) {
      dispatch(createContract(provider));
      dispatch(fetchSiteInfo());
      dispatch(fetchUserInfo(account));
    }
  }, [provider, account]);

  useEffect(() => {
    void metaMask.connectEagerly();
  }, []);

  useEffect(() => {
    if (chainId && defaultChain.chainId !== chainId) {
      // eslint-disable-next-line no-restricted-globals
      confirm("Wrong network selected, change ?") &&
        switchChain().then(() => console.log("Network changed"));
    }
  }, [chainId]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header
        account={account}
        isActive={isActive}
        isActivating={isActivating}
      />
      <main className="container flex flex-col mx-auto px-[100px] pt-[200px] pb-[60px] space-y-[60px]">
        <Info />
        <Dashboard />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
