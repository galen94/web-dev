import PostSummaryItem from "./PostSummaryItem.js";
import post from "./posts.json";
import './posts.css';
import React from "react";

const PostSummaryList = () => {
    return (
        <div>
            <ul className="list-group">
                {
        post.map(post => {
            return(
                <PostSummaryItem post={post} />
        );
        })
    }
            </ul>
        </div>
);

}
export default PostSummaryList;
