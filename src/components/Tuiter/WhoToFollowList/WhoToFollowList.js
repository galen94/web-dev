import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.json";
import './WhoToFollow.css';
import React from "react";

const WhoToFollowList = () => {
    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item">
                    <span className="">Who to follow</span>
                </li>
                {
        who.map(who => {
            return(
                <WhoToFollowListItem who={who}/>
            );
        })
    }
            </ul>
        </div>
);

}
export default WhoToFollowList;