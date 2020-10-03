import React, {Component} from "react";
import {withTranslation} from "react-i18next";

class SnakeComponent extends Component {
    render() {
        const {t} = this.props;
        return (
            <article>
                <h2>Snake AI</h2>
                <video src={process.env.PUBLIC_URL + "/snake/snake.mp4"} autoPlay muted loop/>
                <p className="p">{t("projects.snake.pOne")}</p>
                <p className="p">{t("projects.snake.pTwo")}</p>
            </article>
        );
    }
}

export default withTranslation()(SnakeComponent);