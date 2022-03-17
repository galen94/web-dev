
import React from "react";
import './Navigation.css';
import {Link, useParams} from "react-router-dom";

const NavigationSidebar = ({active = ''}) => {

    const {id} = useParams();
    return(
        <div>
            <ul id="main-nav" className="list-group wd-list-style ">
                <li className="wd-navigation-rounded-corners-top">
                    <Link to="/labs" className="list-group-item ">
                        <i className="fab fa-twitter"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/tuiter/" className={`list-group-item list-group-item-action ${id === 'home' ? 'active' : ''}`}>
                    {/*<a href="#" className="list-group-item " >*/}
                    {/*<i className="fab fa-twitter"></i></a>*/}
                    {/*<a href="../HomeScreen/home.html" className={`list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}`}>*/}
                    <i className="wd-icon-padding-right-navigation fa fa-home"></i>
                    <span className="wd-hide-words">Home</span>
                    {/*</a>*/}
                    </Link>
                </li>
               <li>
                   <Link to="/tuiter/explore" className={`list-group-item list-group-item-action  ${id === 'explore' ? 'active' : ''}`}>
                   {/*<a href="../ExploreScreen/explore.html" className={`list-group-item list-group-item-action  ${active === 'explore' ? 'active' : ''}`}>*/}
                    <i className="wd-icon-padding-right-navigation fa fa-hashtag"></i>
                    <span className="wd-hide-words">Explore</span>
               {/*</a>*/}
                   </Link>
                    </li>
               <li> <a href="#" className={`list-group-item list-group-item-action ${id === 'notifications' ? 'active' : ''}`}>
                    <i className="wd-icon-padding-right-navigation fa fa-bell"></i>
                    <span className="wd-hide-words">Notifications</span></a>
                    </li>
               <li> <a href="#" className={`list-group-item list-group-item-action ${id === 'messages' ? 'active' : ''}`}>
                    <i className="wd-icon-padding-right-navigation fa fa-envelope"></i>
                    <span className="wd-hide-words">Messages</span></a>
                    </li>
                <li><a href="#" className={`list-group-item list-group-item-action ${id === 'bookmarks' ? 'active' : ''}`}>
                    <i className="wd-icon-padding-right-navigation fa fa-bookmark"></i>
                    <span className="wd-hide-words">Bookmarks</span></a>
                    </li>
               <li> <a href="#" className={`list-group-item list-group-item-action ${id === 'lists' ? 'active' : ''}`}>
                    <i className="wd-icon-padding-right-navigation fa fa-list"></i>
                    <span className="wd-hide-words">Lists</span></a>
                    </li>
               <li>  <Link to="/tuiter/profile" className={`list-group-item list-group-item-action ${id === 'profile' ? 'active' : ''}`}>
                    <i className="wd-icon-padding-right-navigation fa fa-user"></i>
                   <span className="wd-hide-words">Profile</span></Link>
                    </li>
                <li className="wd-navigation-rounded-corners-bottom"><a href="#" className={`list-group-item list-group-item-action ${id === 'more' ? 'active' : ''}`}>
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