import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

import "./topbar.css";

export default function Topbar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  }
  return (
    <div className="top">
      <div className="topLeft">
     
          <Link className="link topIcon" to="/">
            HOME
          </Link>
        <Link className="link topIcon" to="/write">
          Blog Here
        </Link>
       </div>
      <div className="topCenter">
      <h2 className="text-center">DEVELOPER'S BLOG</h2>

        
      </div>
      <div className="topRight mr-2">
        {user ? (
           <Link className="link" to="">
          
         </Link>

        ) : (
          <ul className="topList ml-2">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <ul className="topList ml-2">
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
        </div>
    </div>
  );
}