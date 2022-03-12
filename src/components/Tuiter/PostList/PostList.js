import PostItem from "./PostItem.js";
import post from "./posts.json";
import React from "react";
import './post.css';



const PostList = () => {
    return (
        <div>
            <ul className="list-group ">
                {
        post.map(post => {
            return(
                <PostItem post={post} />
        );
        })
    }
                
            </ul>
        </div>
);

}
export default PostList;

