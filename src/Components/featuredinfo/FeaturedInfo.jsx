import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import "./featuredInfo.css";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTit">Revanue</span>
        <div className="featuredMoneyContaine">
          <span className="featuredMoney"> ₹2,415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcons negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to Last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTit">Sales</span>
        <div className="featuredMoneyContaine">
          <span className="featuredMoney"> ₹2,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcons negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to Last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTit">Cost</span>
        <div className="featuredMoneyContaine">
          <span className="featuredMoney"> ₹2,4215</span>
          <span className="featuredMoneyRate">
            +13.4 <ArrowUpward className="featuredIcons " />
          </span>
        </div>
        <span className="featuredSub">Compared to Last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
