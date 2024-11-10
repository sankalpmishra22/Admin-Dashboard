import Cards from "../Cards/Cards";
import Report from "../Report/Report";
import Transactions from "../Transactions/Transactions";
import "./ContentMain.css";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
        <div className="content-grid-one">
            <Cards />
            <Transactions />
            <Report />
        </div>
        <div className="content-grid-two">
          
        </div>
    </div>
  )
}

export default ContentMain