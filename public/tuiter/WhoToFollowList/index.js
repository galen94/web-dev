import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
                <li class="list-group-item">
                    <span class="">Who to follow</span>
                </li>
                ${
        who.map(who => {
            return(WhoToFollowListItem(who));
        }).join('')
    }
                
            <!-- continue here -->
            </ul>
`);

}
export default WhoToFollowList;

