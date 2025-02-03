import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

import ConnectWallet from '../components/ConnectWallet/ConnectWallet';

import "../sass/all.scss";
import "../index.scss";

export default function ConnectWalletPage() {
  return (
    <>
      <Header />
      <Main>
        <ConnectWallet/>
      </Main>
      <Footer />
    </>
  );
}