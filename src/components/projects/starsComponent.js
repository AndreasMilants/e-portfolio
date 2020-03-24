import React, {Component} from "react";
import {HashLink as Link} from "react-router-hash-link";

class StarsComponent extends Component {
    render() {
        return (
            <article>
                <h2>Stars 4 Everyone!</h2>
                <img src={process.env.PUBLIC_URL + "/stars4everyone/stars.png"} alt="Stars 4 Everyone!"/>
                <section className="gallery">
                    <img src={process.env.PUBLIC_URL + "/stars4everyone/table.jpg"} alt="programming"/>
                    <img src={process.env.PUBLIC_URL + "/stars4everyone/scrum.jpg"} alt="scrumboard"/>
                </section>
            </article>
        );
    }
}

export default StarsComponent;