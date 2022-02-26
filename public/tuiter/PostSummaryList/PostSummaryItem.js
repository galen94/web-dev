const PostSummaryItem = (post) => {
    return(`
           <li class=" list-group-item ">
            <div id="append-new-elements">
                <img class="wd-post-image wd-rounded-corners-all-around" src=${post.image} />

                ${post.booleantopic ? <span class='wd-gray-words wd-margin-left'> ${post.topic}</span>: ""}
<!--                 <span class="wd-gray-words wd-margin-left "> {post.topic}</span>-->
<!--                 <br>-->
                <span class="wd-white-words wd-margin-left "> ${post.userName}</span>
                <i class="wd-white-circle fa fa-circle"></i>
                <span class="wd-gray-words"> - ${post.time}</span>
                <br>
                <span class="wd-margin-left wd-white-words">${post.title}</span>

            </div>
            </li>
    `);
}



export default PostSummaryItem;
