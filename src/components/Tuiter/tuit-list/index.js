import React, {useEffect, useState} from "react";
//import tuits from "./tuits.json";
import TuitListItem from "./TuitListItem.js";
import {useDispatch, useSelector} from "react-redux";
//import './tuits.css';
import * as service
    from '../../../services/tuits-service';
import {createTuit, deleteTuit, findAllTuits, updateTuit}
    from "../../../actions/tuits-actions";


const TuitList = () => {
    const tuits = useSelector(
        state => state.tuits);
    const dispatch = useDispatch();
    // const findAllTuits = async () => {
    //     const tuits = await service.findAllTuits();
    //     dispatch({
    //         type: 'FIND_ALL_TUITS',
    //         tuits: tuits
    //     });
    // }
    // useEffect(findAllTuits, []);
    useEffect(() =>
            findAllTuits(dispatch),
        []);
    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit'});


    return (
        <ul className="list-group">
            <li className="list-group-item">
                <button onClick={() =>
                    createTuit(dispatch, newTuit)}
                        className="btn btn-primary float-end">
                    Tuit
                </button>


    <textarea className="form-control w-75"
              onChange={(e) =>
                  setNewTuit({...newTuit,
                      tuit: e.target.value})}></textarea>
            </li>

            {tuits.map(tuit =>
                <li key={tuit._id} className="list-group-item">
            <i className="fa fa-window-close float-end"
               onClick={() => deleteTuit(dispatch, tuit)}></i>
                    {tuit.postedBy.username + " "}@{tuit.postedBy.username}

                    <br/>
                    <br/>

                    {tuit.tuit}
                    <br/>
                    <br/>
            <div>
                Likes: {tuit.likes}
                <i onClick={() => updateTuit(dispatch, {
                    ...tuit,
                    likes: tuit.likes + 1
                })} className="far fa-thumbs-up ms-2"></i>
            </div>
                    <div>
                        Dislikes: {tuit.dislikes}
                        <i onClick={() => updateTuit(dispatch, {
                            ...tuit,
                            dislikes: tuit.dislikes + 1
                        })} className="far fa-thumbs-down ms-2"></i>
                    </div>

                </li>)
            }
        </ul>
    );
}

export default TuitList;