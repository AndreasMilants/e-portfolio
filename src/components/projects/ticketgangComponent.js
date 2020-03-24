import React, {Component} from "react";
import {HashLink as Link} from "react-router-hash-link";

class TicketgangComponent extends Component {
    render() {
        return (
            <article>
                <h2>TicketGang</h2>
                <img src={process.env.PUBLIC_URL + "/ticketgang/ticketgang.jpg"} alt="TicketGang"/>
            </article>
        );
    }
}

export default TicketgangComponent;