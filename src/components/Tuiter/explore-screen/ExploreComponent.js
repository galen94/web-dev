import React from "react";

import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(
        <>
             <div className="wrap-search wd-spacing ">
                <div className="input-group input-group-rounded">
                    <span className="input-group-text" id="basic-addon1"><i className="wd-glass-color-JS-version fa fa-search"></i></span>
                    <input className="form-control input-group-field " type="text" placeholder="Search Twitter"/>
                </div>
                <div>
                    <a href="explore-settings.html"><i className=" fa fa-cog fa-2x"></i></a>
                </div>
            </div>
           <ul className="nav mb-2 nav-tabs">
            <li className="nav-item wd-nav-active wd-blue-nav-tab-borders">
                    <a className="nav-link active " href="for-you.html"><span className="wd-white-words-normal">For you</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="trending.html"><span className="wd-white-words-normal">Trending</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="news.html"><span className="wd-white-words-normal">News</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="sports.html"><span className="wd-white-words-normal">Sports</span></a>
                </li>
                <li className="nav-item d-none d-md-block">
                    <a className="nav-link " tabindex="-1" href="entertainment.html"><span className="wd-white-words-normal">Entertainment</span></a>
                </li>
           </ul>
           <div className="position-relative wd-container ">
                <img className="wd-post-main-image" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"/>
                <div className="position-absolute wd-bottom-left">SpaceX's Starship</div>
            </div>

           <PostSummaryList />
        </>
    );
}
export default ExploreComponent;
