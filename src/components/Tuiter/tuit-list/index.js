import React from "react";
//import tuits from "./tuits.json";
import TuitListItem from "./TuitListItem.js";
import {useSelector} from "react-redux";
//import './tuits.css';

const TuitList = () => {
    const tuits = useSelector(
        state => state.tuits);
    return (
        <ul className="ttr-tuits list-group">
            {
                tuits.map && tuits.map(tuit =>
                    <TuitListItem key={tuit._id}
                                  tuit={tuit}/>)
            }
        </ul>
    );
}

export default TuitList;