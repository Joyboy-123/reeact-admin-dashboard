import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transaction</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c2a4fd09-561a-4019-b2c9-6461fa3db151/dempy1s-17a174ed-775a-4b33-94c9-3598b2a72246.jpg/v1/fill/w_1068,h_748,q_70,strp/nico_robin_wano_by_albertobuzz98_dempy1s-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTIxIiwicGF0aCI6IlwvZlwvYzJhNGZkMDktNTYxYS00MDE5LWIyYzktNjQ2MWZhM2RiMTUxXC9kZW1weTFzLTE3YTE3NGVkLTc3NWEtNGIzMy05NGM5LTM1OThiMmE3MjI0Ni5qcGciLCJ3aWR0aCI6Ijw9MTMxNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.WipNQj6sHzLTBBBsBfUs2orCecf3zALl8GCirIyRQEw"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Nico Robin</span>
          </td>
          <td className="widgetLgDate">2 Jun 2023</td>
          <td className="widgetLgAmount">₹ 122</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://wallpaperaccess.in/public/uploads/preview/jinbe-wano-wallpaper-one-piece-wano-arc-jimbei-2.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Jinbe</span>
          </td>
          <td className="widgetLgDate">2 Jun 2023</td>
          <td className="widgetLgAmount">₹ 122</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://64.media.tumblr.com/cf60a4c078ff8c3ca422c87af6a27131/d0ab9056f528a867-c8/s640x960/d280bee69bb106a6854544b1aacf425283f8f1ae.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Carrot </span>
          </td>
          <td className="widgetLgDate">2 Jun 2023</td>
          <td className="widgetLgAmount">₹ 122</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://12dimension.files.wordpress.com/2022/05/one_piece_-_1006_12.32.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">yamato</span>
          </td>
          <td className="widgetLgDate">2 Jun 2023</td>
          <td className="widgetLgAmount">₹ 122</td>
          <td className="widgetLgStatus">
            <Button type="pending" />
          </td>
        </tr>
      </table>
    </div>
  );
}
