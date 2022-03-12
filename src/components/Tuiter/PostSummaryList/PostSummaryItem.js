import React from "react";
import './posts.css';

const PostSummaryItem = ({
                               post = {
                                   "topic": "Web Development",
                                   "userName": "ReactJS",
                                   "time": "2h",
                                   "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                   "image": "../../../images/react-blue.png"
                               }
                           }
) => {
    return(
        <>
           <li className=" list-group-item ">
            <div id="append-new-elements">
                <img className="wd-post-image wd-rounded-corners-all-around" src={post.image} />
                {post.topic ? <div className='wd-gray-words wd-margin-left '>{post.topic}</div> : ""}
                <span className="wd-white-words wd-margin-left wd-name-circle-margin"> {post.userName}</span>
                <i className="wd-white-circle fa fa-circle"></i>
                <span className="wd-gray-words"> - {post.time}</span>
                <br/>
                <span className="wd-margin-left wd-white-words">{post.title}</span>

            </div>
            </li>
        </>
    );
}



export default PostSummaryItem;
