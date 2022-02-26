import PostItem from "./PostItem.js";
import post from "./FullPosts.js";

const PostList = () => {
    return (`
            <ul class="list-group">
                ${
        post.map(post => {
            return(PostItem(post));
        }).join('')
    }
                
            <!-- continue here -->
            </ul>
`);

}
export default PostList;