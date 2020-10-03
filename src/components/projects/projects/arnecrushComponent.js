import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import CarouselComponent from "../../carousel";

class ArnecrushComponent extends Component {
    render() {
        const {t} = this.props;
        const media = [
            <img src={process.env.PUBLIC_URL + "/arnecrush/pattern.jpg"} alt="pattern"/>,
            <img src={process.env.PUBLIC_URL + "/arnecrush/arnecrush_composition.jpg"} alt="banner"/>,
            <img src={process.env.PUBLIC_URL + "/arnecrush/home.jpg"} alt="homepage V1"/>,
            <video src={process.env.PUBLIC_URL + "/arnecrush/arnebomber3.mov"} autoPlay muted loop/>,
            <video src={process.env.PUBLIC_URL + "/arnecrush/fourinarow.mov"} autoPlay muted loop/>,
            <img src={process.env.PUBLIC_URL + "/arnecrush/home2.jpg"} alt="homepage V2"/>,
            <img src={process.env.PUBLIC_URL + "/arnecrush/auction.jpg"} alt="auction"/>,
            <video src={process.env.PUBLIC_URL + "/arnecrush/emoji.mov"} autoPlay muted loop/>,
            <img src={process.env.PUBLIC_URL + "/arnecrush/create_theme.jpg"} alt="create theme"/>
        ];
        return (
            <article>
                <h1>Arnecrush</h1>
                <img src={process.env.PUBLIC_URL + "/arnecrush/logo.png"} alt="logo"/>
                <p className="p">{t("projects.arnecrush.pOne")}</p>
                <p className="p">{t("projects.arnecrush.pTwo")}</p>
                <CarouselComponent media={media}/>
            </article>
        );
    }
}

export default withTranslation()(ArnecrushComponent);