import PostSummaryItem from "./PostSummaryItem.js";
import post from "./posts.js";

const PostSummaryList = () => {
    return (`
            <ul class="list-group">
                ${
        post.map(post => {
            return(PostSummaryItem(post));
        }).join('')
    }
                
            <!-- continue here -->
            </ul>
`);

}
export default PostSummaryList;
