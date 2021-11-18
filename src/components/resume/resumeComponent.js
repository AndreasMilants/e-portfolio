import React, {Component} from "react";
import MainComponent from "./mainComponent";
import ResumeSidebarComponent from "./resumeSidebarComponent";
import {withTranslation} from "react-i18next";

class ResumeComponent extends Component {
    render() {
        const {t} = this.props;
        return (
            <React.Fragment>
                <article>
                    <span id="resume" className="link"/>
                    <section id="resume">
                        <section className="header">
                            <img src={process.env.PUBLIC_URL + "/profielfoto.jpg"} alt="Andreas Milants"/>
                            <div>
                                <h3>Andreas Milants</h3>
                                <p>
                                    <span>{t("resume.under_header")}</span>
                                    <span>5-dec-1997</span>
                                </p>
                            </div>
                        </section>
                        <button className="hide-in-print print-button" onClick={this.print}>Print</button>
                        <MainComponent/>
                        <ResumeSidebarComponent/>
                    </section>
                </article>
            </React.Fragment>
        );
    }

    print = () => {
        window.print();
    }
}

export default withTranslation()(ResumeComponent);