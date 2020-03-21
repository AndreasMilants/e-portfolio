import React, {Component} from "react";

class StarsComponent extends Component {
    render() {
        return (
            <article>
                <h2>Stars 4 Everyone!</h2>
                <section className="gallery">
                    <img src={process.env.PUBLIC_URL + "/stars4everyone/table.jpg"} alt="programming"/>
                    <img src={process.env.PUBLIC_URL + "/stars4everyone/scrum.jpg"} alt="scrumboard"/>
                </section>
            </article>
        );
    }
}

export default StarsComponent;