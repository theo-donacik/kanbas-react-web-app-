import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaClock, FaRegWindowMaximize, FaLaptop, FaExternalLinkAlt, FaQuestion } from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2 wd-account-icon" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",  icon: <FaInbox className="fs-2" /> },
    { label: "History",  icon: <FaClock className="fs-2" /> },
    { label: "Studio",  icon: <FaLaptop className="fs-2" /> },
    { label: "Commons",  icon: <FaExternalLinkAlt className="fs-2" /> },
    { label: "Help",  icon: <FaQuestion className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <div className="d-flex">
      <div className="d-none d-md-block">
    <ul className="wd-kanbas-navigation ">
      <img className="wd-northeastern-logo" src="/images/N.png"/>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon}<br/>{link.label} </Link>
        </li>
      ))}
    </ul>
    </div>
    </div>
  );
}
export default KanbasNavigation;