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
                    <img src={process.env.PUBLIC_URL + "/arnecrush/pattern.png"} alt="pattern"/>
                    <img src={process.env.PUBLIC_URL + "/arnecrush/banner2.png"} alt="banner"/>
                    <img src={process.env.PUBLIC_URL + "/arnecrush/home.png"} alt="homepage V1"/>
                    <video src={process.env.PUBLIC_URL + "/arnecrush/emoji.mp4"} autoPlay muted loop/>
                    <video src={process.env.PUBLIC_URL + "/arnecrush/arnebomber3.mp4"} autoPlay muted loop/>
                    <video src={process.env.PUBLIC_URL + "/arnecrush/fourinarow.mp4"} autoPlay muted loop/>
                    <img src={process.env.PUBLIC_URL + "/arnecrush/home2.png"} alt="homepage V2"/>
                    <img src={process.env.PUBLIC_URL + "/arnecrush/auction.png"} alt="auction"/>
                    <img src={process.env.PUBLIC_URL + "/arnecrush/create_theme.png"} alt="create theme"/>
                </section>
            </article>
        );
    }
}

export default withTranslation()(ArnecrushComponent);