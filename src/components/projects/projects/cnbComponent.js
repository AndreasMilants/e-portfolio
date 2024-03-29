import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import CarouselComponent from "../../carousel";

class CnbComponent extends Component {
    render() {
        const {t} = this.props;
        const media = [
            <img src={process.env.PUBLIC_URL + "/cnb/account_update.png"} alt="start"/>,
            <img src={process.env.PUBLIC_URL + "/cnb/photo_detail.png"} alt="start"/>,
            <img src={process.env.PUBLIC_URL + "/cnb/admin_home.png"} alt="start"/>,
            <img src={process.env.PUBLIC_URL + "/cnb/calendar_edit.png"} alt="start"/>,
            <img src={process.env.PUBLIC_URL + "/cnb/photo_list.png"} alt="start"/>,
            <img src={process.env.PUBLIC_URL + "/cnb/post_add.png"} alt="start"/>
        ];
        return (
            <article>
                <h1>Chiro Nemas Binkom</h1>
                <img src={process.env.PUBLIC_URL + "/cnb/homepage.png"} alt="homepage"/>
                <p className="p">{t("projects.cnb.pOne")}</p>
                <p className="p">{t("projects.cnb.pTwo")}</p>
                <p className="p">{t("projects.cnb.pThree")}</p>
                <p className="p">
                    {t("projects.cnb.pFourOne")}
                    <a href="https://chironemas.be">chironemas.be</a>
                    {t("projects.cnb.pFourTwo")}
                </p>
                <CarouselComponent media={media}/>
            </article>
        );
    }
}

export default withTranslation()(CnbComponent);