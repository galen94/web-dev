import "../PostList/post.css";
import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "../TuitStats/tuit-stats";

const TuitlistItem = ({tuit, likeTuit}) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };

    return(
        < >
            <li className=" list-group-item wd-post-background-color">
                <div className="wd-container-post  ">
                    <i onClick={() =>
                        deleteTuit(tuit)}
                    className="fa fa-ellipsis-h fa-pull-right">
                </i>
                    <img className="wd-avatar-picture-post" src=  {tuit["avatar-image"]} />
                    <div className="wd-padded-top-post wd-User-Name-styling-post wd-name-circle-margin"> {tuit.postedBy.username}</div>
                    <i className="wd-name-circle-margin fa fa-circle"></i>
                    <div className="wd-padded-top-post wd-handle-styling-post"> @{tuit.handle} -  {tuit.time}</div>
                    <div className="wd-margin-left-main-content-post">
                        <div className=" wd-main-content-post">  {tuit.tuit}
                        </div>

                        {tuit.attachments ?
                            <>
                            <img className='wd-border-thin-post wd-border-solid-post wd-border-gray-post wd-post-image-post-without' src={tuit.attachments.image}/>
                            </> : ""}

                        {/*{tuit.postTitle ?*/}
                        {/*    <>*/}
                        {/*        <img className='wd-border-thin-post wd-border-solid-post wd-border-gray-post wd-post-image-post' src= {tuit.image} />*/}
                        {/*        <div className='wd-border-top-color-black-post wd-post-text-area-post wd-rounded-text-area wd-border-thin-post wd-border-solid-post wd-border-gray-post'>*/}
                        {/*            <div className='wd-image-title-under-post'>{tuit.postTitle}*/}
                        {/*            </div>*/}
                        {/*            <div className="wd-image-text-under">{tuit.postText}*/}
                        {/*            </div>*/}
                        {/*        </div> </> : <img className='wd-border-thin-post wd-border-solid-post wd-border-gray-post wd-post-image-post-without'*/}
                        {/*                          src={tuit.image} />  }*/}

                        <div className="">
                            <ul className="wd-icon-menu-start-post">
                                <li className="wd-first-icon-post"><a href="#"><i className="far fa-comment wd-react-icon-style-post"></i></a></li>
                                <li className="wd-numbers-gray-post"> {tuit.stats.comments}</li>
                                <li className="wd-icon-menu-post"><a href="#"><i className="fa fa-retweet wd-react-icon-style-post"></i></a></li>
                                <li className="wd-numbers-gray-post"> {tuit.stats.retuits}</li>
                                <li className="wd-first-icon-post"> <TuitStats tuit={tuit} likeTuit={likeTuit}/></li>
                                {/*<li className="wd-icon-menu-post"><a href="#"><i className="far fa-heart wd-react-icon-style-post"></i></a></li>*/}
                                {/*<li className="wd-numbers-gray-post"> {tuit.stats.likes}</li>*/}
                                <li className="wd-icon-menu-post"><a href="#"><i className="fa fa-share wd-react-icon-style-post"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
}



export default TuitlistItem;