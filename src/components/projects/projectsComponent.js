import React, {Component} from "react";
import {HashLink as Link} from "react-router-hash-link";
import {withTranslation} from "react-i18next";

class ProjectsComponent extends Component {
    render() {
        const {t} = this.props;
        return (
            <React.Fragment>
                <article>
                    <span id="projects" className="link"/>
                    <h2>{t("projects.title")}</h2>
                    <ul id="projects-list">
                        <li>
                            <Link to="/cnb#top">
                                <img src={process.env.PUBLIC_URL + "/cnb/homepage_small.png"} alt="Chiro Nemas Binkom"/>
                                <h3>Chiro Nemas</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to="/arnecrush#top">
                                <img src={process.env.PUBLIC_URL + "/arnecrush/logo.png"} alt="Arnecrush"/>
                                <h3>Arnecrush</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to="/abc-cooking#top">
                                <img src={process.env.PUBLIC_URL + "/abc_cooking/com.png"} alt="ABC Cooking"/>
                                <h3>ABC cooking</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to="/abc-cooking-mobile#top">
                                <img src={process.env.PUBLIC_URL + "/abc_cooking2/com.png"} alt="ABC Cooking mobile"/>
                                <h3>ABC cooking 2.0</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to="/snake#top">
                                <video src={process.env.PUBLIC_URL + "/snake/snake_small.mov"} autoPlay muted loop/>
                                <h3>Snake AI</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to="/novem#top">
                                <img src={process.env.PUBLIC_URL + "/novem/novem.png"} alt="Novem"/>
                                <h3>Novem</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to="/ticketgang#top">
                                <img src={process.env.PUBLIC_URL + "/ticketgang/ticketgang.jpg"} alt="TicketGang"/>
                                <h3>TicketGang</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to="/stars#top">
                                <img src={process.env.PUBLIC_URL + "/stars4everyone/stars.png"} alt="Stars 4 Everyone!"/>
                                <h3>Stars 4 Everyone!</h3>
                            </Link>
                        </li>
                    </ul>
                </article>
            </React.Fragment>
        );
    }
}

export default withTranslation()(ProjectsComponent);