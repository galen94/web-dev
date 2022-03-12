import "./post.css";
import React from "react";


const PostItem = ({
                      post = {
                          "name": "Elon Musk",
                          "handle": "@elonmusk",
                          "time": "23h",
                          "title": "Amazing show about <a href='#' class='wd-no-underline'> @Inspiration4x </a> mission!",
                          "avatarImage": "https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg",
                          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp4hUyzq17t8S_lqTa1Py1jKGUOz9C2yT1Ng&usqp=CAU",
                          "comments": "4.2K" ,
                          "shares": "3.5K",
                          "likes": "37.5K",
                          "postTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
                          "postText": "From training to launch to landing, this all-access docuseries rides <br> along with the Inspiration4 crew on the first all-civilian oribital space... <br><i class='fa fa-link'></i> netflix.com",

                      }
                  }) => {
    return(
< >
<li className=" list-group-item wd-post-background-color">
<div className="wd-container-post  ">
    <a href="#"><i className="fa fa-ellipsis-h wd-ellipses-post wd-padded-top-post"></i></a>
    <img className="wd-avatar-picture-post" src=  {post.avatarImage} />
    <div className="wd-padded-top-post wd-User-Name-styling-post wd-name-circle-margin"> {post.name}</div>
    <i className="wd-name-circle-margin fa fa-circle"></i>
    <div className="wd-padded-top-post wd-handle-styling-post"> {post.handle} -  {post.time}</div>
    <div className="wd-margin-left-main-content-post">
        <div className=" wd-main-content-post">  {post.title}
    </div>
    
     {post.postTitle ?
         <>
          <img className='wd-border-thin-post wd-border-solid-post wd-border-gray-post wd-post-image-post' src= {post.image} />
        <div className='wd-border-top-color-black-post wd-post-text-area-post wd-rounded-text-area wd-border-thin-post wd-border-solid-post wd-border-gray-post'>
        <div className='wd-image-title-under-post'>{post.postTitle}
        </div>
        <div className="wd-image-text-under">{post.postText}
        </div>
        </div> </> : <img className='wd-border-thin-post wd-border-solid-post wd-border-gray-post wd-post-image-post-without'
                       src={post.image} />  }
     
    <div className="">
        <ul className="wd-icon-menu-start-post">
            <li className="wd-first-icon-post"><a href="#"><i className="far fa-comment wd-react-icon-style-post"></i></a></li>
            <li className="wd-numbers-gray-post"> {post.comments}</li>
            <li className="wd-icon-menu-post"><a href="#"><i className="fa fa-retweet wd-react-icon-style-post"></i></a></li>
            <li className="wd-numbers-gray-post"> {post.shares}</li>
            <li className="wd-icon-menu-post"><a href="#"><i className="far fa-heart wd-react-icon-style-post"></i></a></li>
            <li className="wd-numbers-gray-post"> {post.likes}</li>
            <li className="wd-icon-menu-post"><a href="#"><i className="fa fa-share wd-react-icon-style-post"></i></a></li>
        </ul>
    </div>
    </div>
</div>
</li>
</>
    );
}



export default PostItem;
