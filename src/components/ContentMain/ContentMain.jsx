import Cards from "../Cards/Cards";
import Transactions from "../Transactions/Transactions";
import "./ContentMain.css";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
        <div className="content-grid-one">
            <Cards />
            <Transactions />
        </div>
    </div>
  )
}

export default ContentMain