import {Link} from "react-router-dom";
import ExploreScreen from "./explore-screen/ExploreScreen.js";
import HomeScreen from "./home-screen/HomeScreen";
//import NavigationSidebar from "./NavigationSidebar/index.js";
//import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem.js";
//import WhoToFollowList from "./WhoToFollowList/WhoToFollowList";
//import PostSummaryItem from './PostSummaryList/PostSummaryItem.js';
//import PostSummaryList from "./PostSummaryList/PostSummaryList";
//import ExploreComponent from "./ExploreScreen/ExploreComponent";
//import "./tuiter.css";

import React from "react";
import {Outlet} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar/index.js";
import WhoToFollowList
    from "./WhoToFollowList/WhoToFollowList.js";
import tuitsReducer from "./reducers/tuits-reducer.js";
import whoReducer from "./reducers/who-reducer.js";
import profileReducer from "./reducers/profile-reducer.js";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
// const reducer = combineReducers({
//     tuits: tuitsReducer, who: whoReducer
// });
const reducer = combineReducers({
    tuits: tuitsReducer, who: whoReducer, profile: profileReducer
});
const store = createStore(reducer);


const Tuiter = (active) => {
    return(
        <Provider store={store}>
        <div className="row mt-2">
            <div className="col-2 col-lg-1 col-xl-2">
                <NavigationSidebar/>
            </div>
            <div className="col-10 col-lg-7 col-xl-6">
                <Outlet/>
            </div>
            <div className="d-none d-lg-block col-lg-4 col-xl-4">
                {/*<h2>Who to follow</h2>*/}
                <WhoToFollowList/>
            </div>
        </div>
        </Provider>
    // <>
    //
    //     <h1>Tuiter</h1>
    //         <Link to="/hello">
    //             Hello
    //         </Link> |
    //         <Link to="/labs">
    //             Labs
    //         </Link>
    //
    //         <ExploreScreen />
    //         <HomeScreen/>
    //         {/*<NavigationSidebar active="home"/>*/}
    //         {/*<ExploreComponent />*/}
    //         {/*<WhoToFollowList />*/}
    //         {/*<PostSummaryList />*/}
    //         {/*<PostSummaryItem post={{*/}
    //         {/*    "topic": "Web Development",*/}
    //         {/*    "userName": "",*/}
    //         {/*    "title": "jQuery",*/}
    //         {/*    "time": "last week",*/}
    //         {/*    "image": "../../../images/jquery.png",*/}
    //         {/*    "tweets": "122K"*/}
    //         {/*}}/>*/}
    //         {/*<WhoToFollowListItem who={{*/}
    //         {/*    avatarIcon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZtIhbVtleOrSG1YNgIlig3tF54evwuTekg&usqp=CAU',*/}
    //         {/*    userName: 'Virgin Galactic',*/}
    //         {/*    handle: 'virgingalactic',*/}
    //         {/*}}/>*/}
        //</>
    );
};

export default Tuiter;
