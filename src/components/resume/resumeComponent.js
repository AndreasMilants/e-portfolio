import React, {Component} from "react";
import MainComponent from "./mainComponent";
import ResumeSidebarComponent from "./resumeSidebarComponent";

class ResumeComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <article>
                    <span id="resume" className="link"/>
                    <section id="resume">
                        <section className="header">
                            <img src={process.env.PUBLIC_URL + "/profiel_foto.jpg"} alt="Andreas Milants"/>
                            <div>
                                <h3>Andreas Milants</h3>
                                <p>
                                    <span>Programmeur - België</span>
                                    <span>5-dec-1997</span>
                                </p>
                            </div>
                        </section>
                        <div>
                            <MainComponent/>
                            <ResumeSidebarComponent/>
                        </div>
                    </section>
                </article>
            </React.Fragment>
        );
    }
}

export default ResumeComponent;