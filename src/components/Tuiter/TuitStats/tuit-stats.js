import {useDispatch} from "react-redux";
import "../PostList/post.css";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return (
    <span className="wd-numbers-gray-post" onClick={likeTuit}>
    {
        tuit.liked &&
        <i className=" fas fa-heart me-1 wd-react-icon-style-post"
           style={{color: 'red'}}></i>
    }
        {
            !tuit.liked &&
            <i className=" far fa-heart me-1 wd-react-icon-style-post"></i>
        }
        {tuit.stats && tuit.stats.likes}
    </span>
);
}
export default TuitStats;