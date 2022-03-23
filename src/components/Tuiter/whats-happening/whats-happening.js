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
            <div className="wd-container-post  wd-what-happening-top-part">

            <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"
                 className="wd-whats-happening-left-margin wd-avatar-picture-post"/>
                <div className="wd-borders-icons-part">
      <textarea
          className="border-0 wd-background-text-area "
          placeholder="What's happening?"
          value={whatsHappening}
                onChange={(event) =>
                    setWhatsHappening(event.target.value)}>
      </textarea>
                </div>
            </div>

                <div className="d-flex wrap-tuit ">

                <div className="row wd-icons-below ">
                {/*<div className="col-10 ttr-font-size-150pc text-primary">*/}
                <div className="ttr-font-size-150pc text-primary ">
                    <i className="fas fa-image me-3"></i>
                    <i className="fa fa-chart-bar me-3"></i>
                    <i className="far fa-smile me-3"></i>
                    <i className="far fa-calendar me-3"></i>
                </div>
                </div>
                {/*</div>*/}
      {/*<div className="col-2">*/}
                <div className="wd-button-float">
            <button className=" btn btn-primary rounded-pill fa-pull-right fw-bold ps-4 pe-4" onClick={tuitClickHandler}>
                Tuit
            </button>
                </div>
      </div>
            {/*</div>*/}
        </>
    );
}
export default WhatsHappening;