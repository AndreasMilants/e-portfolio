import React, {Component} from "react";
import {Link} from "react-router-dom";

class ProjectsComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <article>
                    <span id="projects" className="link"/>
                    <h2>Projecten</h2>
                    <ul id="projects-list">
                        <li>
                            <Link to="/snake">
                                <video src={process.env.PUBLIC_URL + "/snake2.mp4"} autoPlay muted loop/>
                                <h3 className="contrast">Snake AI</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to="arnecrush">
                                <img src={process.env.PUBLIC_URL + "/arnecrush.png"} alt="Arnecrush"/>
                                <h3>Arnecrush</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to="abc-cooking">
                                <img src={process.env.PUBLIC_URL + "/ABC Cooking.png"} alt="ABC Cooking"/>
                                <h3 className="contrast">ABC cooking</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to="novem">
                                <img src={process.env.PUBLIC_URL + "/novem.png"} alt="Novem"/>
                                <h3 className="contrast">Novem</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to="ticketgang">
                                <img src={process.env.PUBLIC_URL + "/ticketgang/ticketgang.png"} alt="TicketGang"/>
                                <h3>TicketGang</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to="start">
                                <img src={process.env.PUBLIC_URL + "/stars.png"} alt="Stars 4 Everyone!"/>
                                <h3 className="contrast">Stars 4 Everyone!</h3>
                            </Link>
                        </li>
                    </ul>
                </article>
            </React.Fragment>
        );
    }
}

export default ProjectsComponent;