import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import CarouselComponent from "../../carousel";

class TicketgangComponent extends Component {
    render() {
        const {t} = this.props;
        const media = [
            <img src={process.env.PUBLIC_URL + "/ticketgang/scan.png"} alt="scan"/>,
            <img src={process.env.PUBLIC_URL + "/ticketgang/create_profile.png"} alt="create profile"/>,
            <img src={process.env.PUBLIC_URL + "/ticketgang/saving_events.png"} alt="saving events"/>,
            <img src={process.env.PUBLIC_URL + "/ticketgang/check_profile.png"} alt="check profile"/>,
            <img src={process.env.PUBLIC_URL + "/ticketgang/choose_profile.png"} alt="choose profile"/>,
            <img src={process.env.PUBLIC_URL + "/ticketgang/manage_scancrew.png"} alt="manage scancrew"/>,
            <img src={process.env.PUBLIC_URL + "/ticketgang/qr.png"} alt="qr"/>,
            <img src={process.env.PUBLIC_URL + "/ticketgang/scanmanager_home.png"} alt="scanmanager home"/>,
            <img src={process.env.PUBLIC_URL + "/ticketgang/search.png"} alt="search"/>,
        ];
        return (
            <article>
                <h1>TicketGang</h1>
                <img src={process.env.PUBLIC_URL + "/ticketgang/ticketgang.jpg"} alt="TicketGang"/>
                <p className="p">{t("projects.ticketgang.pOne")}</p>
                <p className="p">{t("projects.ticketgang.pTwo")}</p>
                <p className="p">{t("projects.ticketgang.pThree")}</p>
                <p className="p">{t("projects.ticketgang.pFour")}</p>
                <CarouselComponent media={media} multiplier={2}/>
            </article>
        );
    }
}

export default withTranslation()(TicketgangComponent);