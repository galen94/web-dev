import React from "react";
import Classes from "./Classes";
import {Link} from "react-router-dom";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./ToDo/ToDoList.js";
import ReduxExamples from "./redux-examples";
const Labs = () => {
    return(
        // <>
            <div>
        <h1>Labs</h1>


    {/*<Link to="/hello">*/}
    {/*    Hello*/}
    {/*</Link> |*/}
    {/*<Link to="/tuiter">*/}
    {/*    Tuiter*/}
    {/*</Link>*/}

                <Link to="/hello">
                    Hello
                </Link> |
                <Link to="/tuiter/">
                    Tuiter
                </Link>

                <ReduxExamples/>
                {/*<ConditionalOutput/>*/}
                {/*<Styles/>*/}
                {/*<Classes/>*/}
                {/*<TodoList/>*/}
            </div>

)
};

export default Labs;
