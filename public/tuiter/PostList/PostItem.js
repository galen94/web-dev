const PostItem = (post) => {
    return(`
<li class=" list-group-item wd-post-background-color">
<div class="wd-container-post  ">
    <a href="#"><i class="fa fa-ellipsis-h wd-ellipses-post wd-padded-top-post"></i></a>
    <img class="wd-avatar-picture-post" src=  ${post.avatarImage} />
    <div class="wd-padded-top-post wd-User-Name-styling-post"> ${post.name}</div>
    <i class="fa fa-circle"></i>
    <div class="wd-padded-top-post wd-handle-styling-post"> ${post.handle} -  ${post.time}</div>
    <div class="wd-margin-left-main-content-post">
        <div class=" wd-main-content-post">  ${post.title}
    </div>
    
     ${post.postTitle ? 
        ` <img class="wd-border-thin-post wd-border-solid-post wd-border-gray-post wd-post-image-post"
      src= ${post.image} />
        <div class="wd-border-top-color-black-post wd-post-text-area-post wd-rounded-text-area wd-border-thin-post wd-border-solid-post wd-border-gray-post">
        <div class="wd-image-title-under-post">${post.postTitle}
        </div>
        <div class="wd-image-text-under">${post.postText}
        </div>
        </div>` : `<img class="wd-border-thin-post wd-border-solid-post wd-border-gray-post wd-post-image-post-without"
                       src=${post.image} />`  }
     
    <div>
        <ul class="wd-icon-menu-start-post">
            <li class="wd-first-icon-post"><a href="#"><i class="fa fa-comment wd-react-icon-style-post"></i></a></li>
            <li class="wd-numbers-gray-post"> ${post.comments}</li>
            <li class="wd-icon-menu-post"><a href="#"><i class="fa fa-retweet wd-react-icon-style-post"></i></a></li>
            <li class="wd-numbers-gray-post"> ${post.shares}</li>
            <li class="wd-icon-menu-post"><a href="#"><i class="fa fa-heart wd-react-icon-style-post"></i></a></li>
            <li class="wd-numbers-gray-post"> ${post.likes}</li>
            <li class="wd-icon-menu-post"><a href="#"><i class="fa fa-share wd-react-icon-style-post"></i></a></li>
        </ul>
    </div>
</div>
</li>
    `);
}



export default PostItem;
