import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopSection from "../../components/topSection";
import "./home.css";

toast.configure();

const Home = ({ account, mint, totalSupply, displayPrice, loadWeb3 }) => {
  return (
    <div>
      <TopSection
        mint={mint}
        totalSupply={totalSupply}
        price={displayPrice}
        account={account}
        loadWeb3={loadWeb3}
      />
    </div>
  );
};

export default Home;
