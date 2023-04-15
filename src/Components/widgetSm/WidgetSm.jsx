import { Visibility } from "@mui/icons-material";
import "./widgetSm.css";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://animecorner.me/wp-content/uploads/2022/01/roronoza-zoro-statue-in-japan.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUse">
            <span className="widgetSmUsername">Roronoa Zoro</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButtom">
            <Visibility  className="widgetSmIcon"/> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c2a4fd09-561a-4019-b2c9-6461fa3db151/demqze2-0428d9c3-881a-4b86-a121-df789eb9d950.jpg/v1/fill/w_916,h_872,q_70,strp/nami_wano_by_albertobuzz98_demqze2-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTIyIiwicGF0aCI6IlwvZlwvYzJhNGZkMDktNTYxYS00MDE5LWIyYzktNjQ2MWZhM2RiMTUxXC9kZW1xemUyLTA0MjhkOWMzLTg4MWEtNGI4Ni1hMTIxLWRmNzg5ZWI5ZDk1MC5qcGciLCJ3aWR0aCI6Ijw9OTY4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.K-E-EWtF9o_AyGlVgG4HVLjyYM3QRhFZFUTc-TmQ0s8"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUse">
            <span className="widgetSmUsername">Nami </span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButtom">
            <Visibility   className="widgetSmIcon"/> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://media.comicbook.com/2020/08/one-piece-usopp-wano-opening-23-1231730.jpeg?auto=webp&width=1200&height=628&crop=1200:628,smart"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUse">
            <span className="widgetSmUsername">Usopp </span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButtom">
            <Visibility  className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://64.media.tumblr.com/cbb8675044dc5f1110fbaa9492b3c9a4/b8c5220b231d7e2c-49/s1280x1920/a180f83a292131212d538463e8ffe3ca8f87e7df.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUse">
            <span className="widgetSmUsername">Sanji </span>
            <span className="widgetSmUserTitle">Software Enginer</span>
          </div>
          <button className="widgetSmButtom">
            <Visibility  className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/12/One-Piece-Chopper-wano-header.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUse">
            <span className="widgetSmUsername"> Tony Chopper </span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButtom">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
      </ul>
    </div>
  );
}
