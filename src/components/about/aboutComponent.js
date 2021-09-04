import React, {Component} from "react";
import {withTranslation} from 'react-i18next';


class AboutComponent extends Component {
    render() {
        const {t} = this.props;

        return (
            <React.Fragment>
                <article id="about-me">
                    <span id="about" className="link"/>
                    <h2>{t("about.title")}</h2>
                    <div>
                        <div>
                            <img src={process.env.PUBLIC_URL + "/profiel_foto.jpg"} alt="Andreas Milants"/>
                        </div>
                        <div>
                            <p>{t("about.pOne")}</p>
                            <p>{t("about.pTwo")}</p>
                            <p>{t("about.pThree")}</p>
                        </div>
                    </div>
                </article>
            </React.Fragment>
        );
    }
}

export default withTranslation()(AboutComponent);