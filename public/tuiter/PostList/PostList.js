import PostItem from "./PostItem.js";
import post from "./posts.js";

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