import React, {Component} from "react";
import {HashLink as Link} from "react-router-hash-link";

class SnakeComponent extends Component {
    render() {
        return (
            <article>
                <h2>Snake AI</h2>
                <video src={process.env.PUBLIC_URL + "/snake/snake.mp4"} autoPlay muted loop/>
            </article>
        );
    }
}

export default SnakeComponent;