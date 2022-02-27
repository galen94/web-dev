

const WhoToFollowListItem = (who) => {
    return(`
            <li class=" list-group-item wd-user-parent">
                    <div class="wrap">
                    <div >
                         <img class=" wd-rounded-user-image wd-margin-right-user-images wd-rounded-corners-all-around" src= ${who.avatarIcon} />
                    </div>
                        <div>
                            <span class="wd-white-words">${who.userName}</span>
                            <i class="wd-white-circle fa fa-circle"></i>
                            <br>
                            <span class="wd-white-handles">${who.handle}</span>
                    </div>
                    <div>
                        <button class="wd-user-child override-follow btn-primary">
                            <span class="wd-follow-color">Follow</span>
                        </button>
                    </div>
                    </div>
            </li>
    `);
}


export default WhoToFollowListItem;

