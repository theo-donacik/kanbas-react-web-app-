import { FaBell, FaChartBar, FaCross, FaCrosshairs, FaFileImport, FaIndent, FaVolumeOff } from "react-icons/fa";
import ModuleList from "../Modules/List";
import "./index.css"
function Home() {
  const buttons = [
    {label: "Import existing content", icon: <FaFileImport className="fa-2 wd-icon"/>},
    {label: "Import from Commons", icon: <FaIndent className="fa-2 wd-icon"/>},
    {label: "Choose Home Page", icon: <FaCrosshairs className="fa-2 wd-icon"/>},
    {label: "View Course Stream", icon: <FaChartBar className="fa-2 wd-icon"/>},
    {label: "New Announcements", icon: <FaVolumeOff className="fa-2 wd-icon"/>},
    {label: "New Analytics", icon: <FaChartBar className="fa-2 wd-icon"/>},
    {label: "View Course Notifications", icon: <FaBell className="fa-2 wd-icon"/>},
  ]
  return (
    <div className="d-flex">
      <ModuleList />
      <div className=" me-2 d-none d-lg-block">
        <ul className="list-group wd-status">
          {buttons.map((item, index) => (
            <li className="list-group-item wd-entry">
              <div>
                {item.icon}
                {item.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Home;
