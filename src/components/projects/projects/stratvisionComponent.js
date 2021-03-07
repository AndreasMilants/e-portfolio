import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import CarouselComponent from "../../carousel";

class StratvisionComponent extends Component {
    render() {
        const {t} = this.props;
        const media = [
            <img src={process.env.PUBLIC_URL + "/stratvision/report.png"} alt="Report"/>,
            <img src={process.env.PUBLIC_URL + "/stratvision/report-graphs.png"} alt="Graphs"/>,
            <img src={process.env.PUBLIC_URL + "/stratvision/report-editor.png"} alt="Report editor"/>,
            <img src={process.env.PUBLIC_URL + "/stratvision/node-editor-2.png"} alt="Node editor"/>,
            <img src={process.env.PUBLIC_URL + "/stratvision/decision-form.png"} alt="Decision form"/>,
            <img src={process.env.PUBLIC_URL + "/stratvision/winner-admin.png"} alt="Winner"/>,
            <img src={process.env.PUBLIC_URL + "/stratvision/round-closed-admin.png"} alt="Manage market"/>,
            <img src={process.env.PUBLIC_URL + "/stratvision/node-editor-detail.png"} alt="Node editor detail"/>,
        ];
        return (
            <article>
                <h2>Stratvision</h2>
                <img src={process.env.PUBLIC_URL + "/stratvision/node-editor.png"} alt="Node editor"/>
                <p className="p">{t("projects.stratvision.pOne")}</p>
                <p className="p">{t("projects.stratvision.pTwo")}</p>
                <p className="p">{t("projects.stratvision.pThree")}</p>
                <p className="p">{t("projects.stratvision.pFour")}</p>
                <CarouselComponent media={media}/>
            </article>
        );
    }
}

export default withTranslation()(StratvisionComponent);