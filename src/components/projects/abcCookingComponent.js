import React, {Component} from "react";
import {withTranslation} from "react-i18next";

class AbcCookingComponent extends Component {
    render() {
        const {t} = this.props;
        return (
            <article>
                <h1>ABC Cooking</h1>
                <img src={process.env.PUBLIC_URL + "/abc_cooking/com.png"} alt="logo"/>
                <p className="p">{t("projects.abc_cooking.pOne")}</p>
                <p className="p">{t("projects.abc_cooking.pTwo")}</p>
                <p className="p">{t("projects.abc_cooking.pThree")}</p>
                <p className="p">{t("projects.abc_cooking.pFour")}</p>
                <section className="gallery bg-gr">
                    <img src={process.env.PUBLIC_URL + "/abc_cooking/start.png"} alt="start"/>
                    <img src={process.env.PUBLIC_URL + "/abc_cooking/home.png"} alt="home"/>
                    <img src={process.env.PUBLIC_URL + "/abc_cooking/speech.png"} alt="speech"/>
                    <img src={process.env.PUBLIC_URL + "/abc_cooking/spaghetti.png"} alt="spaghetti"/>
                    <img src={process.env.PUBLIC_URL + "/abc_cooking/shopping.png"} alt="shop"/>
                    <img src={process.env.PUBLIC_URL + "/abc_cooking/cook.png"} alt="cook"/>
                    <img src={process.env.PUBLIC_URL + "/abc_cooking/topdown.jpg"} alt="sfeer"/>
                    <img src={process.env.PUBLIC_URL + "/abc_cooking/topdown2.jpg"} alt="sfeer"/>
                    <img src={process.env.PUBLIC_URL + "/abc_cooking/topdown3.jpg"} alt="sfeer"/>
                </section>
            </article>
        );
    }
}

export default withTranslation()(AbcCookingComponent);