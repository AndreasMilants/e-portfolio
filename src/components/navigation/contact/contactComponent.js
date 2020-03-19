import React, {Component} from "react";

class ContactComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <section>
                    <ul id="contact-info">
                        <li>
                            <span className={"material-icons icon"}>call</span>
                            <span>+32476 67 50 50</span>
                        </li>
                        <li>
                            <span className={"material-icons icon"}>email</span>
                            <a href="andreas.milants@gmail.com">andreas.milants@gmail.com</a>
                        </li>
                        <li>
                            <img className={"icon"} src={process.env.PUBLIC_URL + "/GitHub-Mark-120px-plus.png"}
                                 alt="Github Logo"/>
                            <a href="https://github.com/AndreasMilants/">github.com/AndreasMilants</a>
                        </li>
                        <li>
                            <img className={"icon"} src={process.env.PUBLIC_URL + "/LI-In-Bug.png"}
                                 alt="LinkedIn Logo"/>
                            <a href="https://www.linkedin.com/in/andreasmilants/">linkedin.com/in/andreasmilants</a>
                        </li>
                    </ul>
                </section>
            </React.Fragment>
        );
    }
}

export default ContactComponent;