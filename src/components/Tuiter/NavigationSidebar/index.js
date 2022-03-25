
import React from "react";
import {Link, useLocation} from "react-router-dom";
import './Navigation.css';

const NavigationSidebar = () => {
    // {active = ''}

//wd-list-style
    // let params = useParams();
    //id="main-nav"

   // const location = useLocation().pathname.split("/");
    //const location = useLocation().pathname.replace(/[^a-zA-Z0-9\/]/g, '').split("/")
    //const match = location[location.length-1];

    const location = useLocation().pathname.split("/");
    const newLocation = location.filter(element => element != "");
    const match = newLocation[newLocation.length-1];

    return(
        <div>
            <ul className="list-group">
                <li className="list-unstyled wd-navigation-rounded-corners-top">
                    <Link to="/labs" className="list-group-item ">
                        <i className="fab fa-twitter"></i>
                    </Link>
                </li>
                <li className="list-unstyled">
                    <Link to="" className={`list-group-item list-group-item-action ${match === "tuiter" ? "list-group-item-active" : ""}`}>
                    <i className="wd-icon-padding-right-navigation fa fa-home"></i>
                    <span className="wd-hide-words">Home</span>
                    </Link>
                </li>
               <li className="list-unstyled">
                   <Link to="explore" className={`list-group-item list-group-item-action ${match === "explore" ? "list-group-item-active" : ""}`}>
                    <i className="wd-icon-padding-right-navigation fa fa-hashtag"></i>
                    <span className="wd-hide-words">Explore</span>
                   </Link>
               </li>
               <li className="list-unstyled"> <a href="#" className={`list-group-item list-group-item-action ${match === "notifications" ? "list-group-item-active" : ""}`}>
                    <i className="wd-icon-padding-right-navigation fa fa-bell"></i>
                    <span className="wd-hide-words">Notifications</span></a>
                    </li>
               <li className="list-unstyled"> <a href="#" className={`list-group-item list-group-item-action ${match === "messages" ? "list-group-item-active" : ""}`}>
                    <i className="wd-icon-padding-right-navigation fa fa-envelope"></i>
                    <span className="wd-hide-words">Messages</span></a>
                    </li>
                <li className="list-unstyled"><a href="#" className={`list-group-item list-group-item-action ${match === "bookmarks" ? "list-group-item-active" : ""}`}>
                    <i className="wd-icon-padding-right-navigation fa fa-bookmark"></i>
                    <span className="wd-hide-words">Bookmarks</span></a>
                    </li>
               <li className="list-unstyled"> <a href="#" className={`list-group-item list-group-item-action ${match === "lists" ? "list-group-item-active" : ""}`}>
                    <i className="wd-icon-padding-right-navigation fa fa-list"></i>
                    <span className="wd-hide-words">Lists</span></a>
                    </li>
               <li className="list-unstyled">
                   <Link to="profile" className={`list-group-item list-group-item-action ${match === "profile" ? "list-group-item-active" : ""}`}>
                    <i className="wd-icon-padding-right-navigation fa fa-user"></i>
                   <span className="wd-hide-words">Profile</span></Link>
               </li>
                <li className="list-unstyled wd-navigation-rounded-corners-bottom"><a href="#" className={`list-group-item list-group-item-action ${match === "more" ? "list-group-item-active" : ""}`}>
                    <i className="wd-icon-padding-right-navigation fa fa-circle"></i>
                    <span className="wd-hide-words">More</span></a>
                    </li>
            </ul>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
            </div>

       );
}
export default NavigationSidebar;