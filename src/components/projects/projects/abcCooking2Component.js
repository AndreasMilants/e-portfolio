import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import CarouselComponent from "../../carousel";

class AbcCooking2Component extends Component {
    render() {
        const {t} = this.props;
        const media = [
            <img src={process.env.PUBLIC_URL + "/abc_cooking2/budget_overview.png"} alt="budget"/>,
            <img src={process.env.PUBLIC_URL + "/abc_cooking2/home.png"} alt="home"/>,
            <img src={process.env.PUBLIC_URL + "/abc_cooking2/speaking.png"} alt="speech"/>,
            <img src={process.env.PUBLIC_URL + "/abc_cooking2/loading.png"} alt="loading"/>,
            <img src={process.env.PUBLIC_URL + "/abc_cooking2/cooking.png"} alt="cooking"/>,
        ];
        return (
            <article>
                <h1>ABC Cooking</h1>
                <img src={process.env.PUBLIC_URL + "/abc_cooking2/com.png"} alt="logo"/>
                <p className="p">{t("projects.abc_cooking2.pOne")}</p>
                <p className="p">{t("projects.abc_cooking2.pTwo")}</p>
                <CarouselComponent multiplier={2} media={media}/>
            </article>
        );
    }
}

export default withTranslation()(AbcCooking2Component);