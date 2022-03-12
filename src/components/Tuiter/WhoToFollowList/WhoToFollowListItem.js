
import React from "react";
import './WhoToFollow.css';

const WhoToFollowListItem = ({
                                  who = {
                                      avatarIcon: "data:image/jpeg;base64,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",
                                      userName: 'NASA',
                                      handle: '@NASA',
                                  }
                              }) => {
    return(
        <div>
            <li className=" list-group-item wd-user-parent">
                    <div className="wrap">
                    <div >
                         <img className=" wd-rounded-user-image wd-margin-right-user-images wd-rounded-corners-all-around" src= {who.avatarIcon} />
                    </div>
                        <div>
                            <span className="wd-white-words wd-name-circle-margin">{who.userName}</span>
                            <i className="wd-white-circle fa fa-circle"></i>
                            <br/>
                            <span className="wd-white-handles">{who.handle}</span>
                    </div>
                    <div>
                        <button className="wd-user-child override-follow btn-primary">
                            <span className="wd-follow-color">Follow</span>
                        </button>
                    </div>
                    </div>
            </li>
        </div>
    );
}


export default WhoToFollowListItem;
