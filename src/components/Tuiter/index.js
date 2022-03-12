import React from "react";
import {Link} from "react-router-dom";
import ExploreScreen from "./explore-screen/ExploreScreen.js";
import HomeScreen from "./home-screen/HomeScreen";
//import NavigationSidebar from "./NavigationSidebar/index.js";
//import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem.js";
//import WhoToFollowList from "./WhoToFollowList/WhoToFollowList";
//import PostSummaryItem from './PostSummaryList/PostSummaryItem.js';
//import PostSummaryList from "./PostSummaryList/PostSummaryList";
//import ExploreComponent from "./ExploreScreen/ExploreComponent";

const Tuiter = () => {
    return(
        <>

        <h1>Tuiter</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/labs">
                Labs
            </Link>

            <ExploreScreen />
            <HomeScreen/>
            {/*<NavigationSidebar active="home"/>*/}
            {/*<ExploreComponent />*/}
            {/*<WhoToFollowList />*/}
            {/*<PostSummaryList />*/}
            {/*<PostSummaryItem post={{*/}
            {/*    "topic": "Web Development",*/}
            {/*    "userName": "",*/}
            {/*    "title": "jQuery",*/}
            {/*    "time": "last week",*/}
            {/*    "image": "../../../images/jquery.png",*/}
            {/*    "tweets": "122K"*/}
            {/*}}/>*/}
            {/*<WhoToFollowListItem who={{*/}
            {/*    avatarIcon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZtIhbVtleOrSG1YNgIlig3tF54evwuTekg&usqp=CAU',*/}
            {/*    userName: 'Virgin Galactic',*/}
            {/*    handle: 'virgingalactic',*/}
            {/*}}/>*/}
        </>
    )
};

export default Tuiter;
