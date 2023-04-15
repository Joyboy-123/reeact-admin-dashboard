import Chart from "../../charts/Chart";
import FeaturedInfo from "../../featuredinfo/FeaturedInfo";
import "./home.css";
import { Userdata } from "../../../data";
import WidgetSm from "../../widgetSm/WidgetSm";
import WidgetLg from "../../widgetLg/WidgetLg";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={Userdata} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
};

export default Home;
