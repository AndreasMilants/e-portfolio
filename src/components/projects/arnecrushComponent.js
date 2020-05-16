import React, {Component} from "react";
import {withTranslation} from "react-i18next";

class ArnecrushComponent extends Component {
    render() {
        const {t} = this.props;
        return (
            <article>
                <h1>Arnecrush</h1>
                <img src={process.env.PUBLIC_URL + "/arnecrush/logo.png"} alt="logo"/>
                <p className="p">{t("projects.arnecrush.pOne")}</p>
                <p className="p">{t("projects.arnecrush.pTwo")}</p>
                <section className="gallery">
                    <img src={process.env.PUBLIC_URL + "/arnecrush/pattern.jpg"} alt="pattern"/>
                    <img src={process.env.PUBLIC_URL + "/arnecrush/arnecrush_composition.jpg"} alt="banner"/>
                    <img src={process.env.PUBLIC_URL + "/arnecrush/home.jpg"} alt="homepage V1"/>
                    <video src={process.env.PUBLIC_URL + "/arnecrush/emoji.mp4"} autoPlay muted loop/>
                    <video src={process.env.PUBLIC_URL + "/arnecrush/arnebomber3.mp4"} autoPlay muted loop/>
                    <video src={process.env.PUBLIC_URL + "/arnecrush/fourinarow.mp4"} autoPlay muted loop/>
                    <img src={process.env.PUBLIC_URL + "/arnecrush/home2.jpg"} alt="homepage V2"/>
                    <img src={process.env.PUBLIC_URL + "/arnecrush/auction.jpg"} alt="auction"/>
                    <img src={process.env.PUBLIC_URL + "/arnecrush/create_theme.jpg"} alt="create theme"/>
                </section>
            </article>
        );
    }
}

export default withTranslation()(ArnecrushComponent);