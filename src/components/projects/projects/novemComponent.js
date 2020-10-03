import React, {Component} from "react";
import {withTranslation} from "react-i18next";

class NovemComponent extends Component {
    render() {
        const {t} = this.props;
        return (
            <article>
                <h2>Novem</h2>
                <img src={process.env.PUBLIC_URL + "/novem/novem.png"} alt="Novem"/>
                <p className="p">{t("projects.novem.pOne")}</p>
                <p className="p">{t("projects.novem.pTwo")}</p>
                <p className="p">{t("projects.novem.pThree")}</p>
                <p className="p"><a href="https://github.com/AndreasMilants/novem">github.com/AndreasMilants/novem</a></p>
            </article>
        );
    }
}

export default withTranslation()(NovemComponent);