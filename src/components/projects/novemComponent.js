import React, {Component} from "react";
import {HashLink as Link} from "react-router-hash-link";

class NovemComponent extends Component {
    render() {
        return (
            <article>
                <h2>Novem</h2>
                <img src={process.env.PUBLIC_URL + "/novem/novem.png"} alt="Novem"/>
            </article>
        );
    }
}

export default NovemComponent;