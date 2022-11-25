import { useModal } from "../utils/ModalContext";
import GlobalStyles from "../assets/styles/GlobalStyles";
import Layout from "../components/layout";
import Header from "../layout/header";
import Banner from "../layout/banner";
import CoinInfoSlider from "../layout/coinInfoSlider";
import About from "../layout/about";
import Features from "../layout/features";
import Portfolio from "../layout/portfolio";
import RoadMap from "../layout/roadmap";
import Team from "../layout/team";
import FAQ from "../layout/faq";
import Footer from "../layout/footer"; 
import MintNowModal from "../components/modal/mintNowModal";
import WalletModal from "../components/modal/walletModal/WalletModal";
import MetamaskModal from "../components/modal/metamaskModal/MetamaskModal";
import ConnectWallet from "../components/modal/metamask/ConnectWallet";

const Home = () => {
  const {
    visibility,
    walletModalvisibility, 
    metamaskModalVisibility, 
    connectWalletModal,  
  } = useModal();
  return (
    <>
      <Layout>
        <GlobalStyles /> 
        {visibility && <MintNowModal />}
        {walletModalvisibility && <WalletModal />}
        {metamaskModalVisibility && <MetamaskModal/> }
        {connectWalletModal && <ConnectWallet/> }
        <Header />
        <Banner />
        <CoinInfoSlider />
        <About />
        <Features />
        <Portfolio />
        <RoadMap />
        <Team />
        <FAQ />
        <Footer />
      </Layout>
    </>
  );
};

export default Home;
