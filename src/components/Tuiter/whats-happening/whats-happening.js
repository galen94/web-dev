import React, {useState} from "react";
import {useDispatch} from "react-redux";
import "../PostList/post.css";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });
        console.log(whatsHappening);
    }
    return (
        <>
      <textarea
          className="w-100 border-0 wd-background-text-area"
          placeholder="What's happening?"
          value={whatsHappening}
                onChange={(event) =>
                    setWhatsHappening(event.target.value)}>
      </textarea>
                <div className="d-flex wrap-tuit">

                <div className="row">
                {/*<div className="col-10 ttr-font-size-150pc text-primary">*/}
                <div className="ttr-font-size-150pc text-primary">
                <i className="fa fa-portrait me-3"></i>
                    {/*<i className="far fa-bar-chart me-3"></i>*/}
                    {/*<i className="far fa-face-smile me-3"></i>*/}
                    <i className="far fa-calendar me-3"></i>
                </div>
            </div>
      {/*<div className="col-2">*/}
                <div className="wd-button-float">
            <button className=" btn btn-primary rounded-pill fa-pull-right fw-bold ps-4 pe-4" onClick={tuitClickHandler}>
                Tuit
            </button>
                </div>
      {/*</div>*/}
            </div>
        </>
    );
}
export default WhatsHappening;