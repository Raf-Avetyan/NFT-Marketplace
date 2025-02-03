import Header from "../components/Header/Header";
import Main from '../components/Main/Main';
import Footer from "../components/Footer/Footer";

import GetStarted from "../components/GetStarted/GetStarted";
import TrendingCollection from "../components/Collection/TrendingCollection";
import TopCreators from "../components/TopCreators/TopCreators";
import Categories from "../components/Categories/Categories";
import TrendNFTs from "../components/TrendNFTs/TrendNFTs";
import AuctionEnd from "../components/AuctionEnd/AuctionEnd";
import StartOfWork from "../components/StartOfWork/StartOfWork";
import JoinForm from "../components/JoinForm/JoinForm";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <GetStarted />
        <TrendingCollection />
        <TopCreators />
        <Categories />
        <TrendNFTs />
        <AuctionEnd />
        <StartOfWork />
        <JoinForm />
      </Main>
      <Footer />
    </>
  );
}
