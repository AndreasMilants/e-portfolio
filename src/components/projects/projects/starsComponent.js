import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import CarouselComponent from "../../carousel";

class StarsComponent extends Component {
    render() {
        const {t} = this.props;
        const media = [
            <img src={process.env.PUBLIC_URL + "/stars4everyone/table.jpg"} alt="programming"/>,
            <img src={process.env.PUBLIC_URL + "/stars4everyone/scrum.jpg"} alt="scrumboard"/>
        ];

        return (
            <article>
                <h2>Stars 4 Everyone!</h2>
                <img src={process.env.PUBLIC_URL + "/stars4everyone/stars.png"} alt="Stars 4 Everyone!"/>
                <p className="p">{t("projects.stars_4_everyone.pOne")}</p>
                <p className="p">{t("projects.stars_4_everyone.pTwo")}</p>
                <CarouselComponent media={media}/>
            </article>
        );
    }
}

export default withTranslation()(StarsComponent);