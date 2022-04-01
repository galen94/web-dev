/* eslint-env jquery */

import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
import PostList from "../PostList/PostList.js";
import React from "react";
import TuitList from "../tuit-list/index.js";
import WhatsHappening
    from "../whats-happening/whats-happening.js";



const HomeScreen = () => {
    return(
        <div>
            {/*<h2>Home</h2>*/}
            {/*<h3>Tuit list</h3>*/}
            {/*<WhatsHappening/>*/}
            <TuitList/>
        </div>
    );
};
export default HomeScreen;

    // <div className="row mt-2">
    //         <div className="col-2 col-md-2 col-lg-1 col-xl-2">
    //             <NavigationSidebar active="home" />
    //         </div>
    //         <div className="col-10 col-md-10 col-lg-7 col-xl-6">
    //             <PostList/>
    //         </div>
    //         <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
    //             <PostSummaryList/>
    //         </div>
    //     </div>

