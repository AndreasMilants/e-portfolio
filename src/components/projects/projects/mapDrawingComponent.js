import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import CarouselComponent from "../../carousel";

class MapDrawingComponent extends Component {
    render() {
        const {t} = this.props;
        const media = [
            <img src={process.env.PUBLIC_URL + "/map_drawing/cupcake_map.png"} alt="cupcake"/>,
            <img src={process.env.PUBLIC_URL + "/map_drawing/map_example.png"} alt="map example"/>,
            <img src={process.env.PUBLIC_URL + "/map_drawing/map_example_2.png"} alt="map example 2"/>,
        ];
        return (
            <article>
                <h1>Map drawing</h1>
                <img src={process.env.PUBLIC_URL + "/map_drawing/cupcake_with_map.png"} alt="map example" style={{width: "100%"}}/>
                <p className="p">{t("projects.mapDrawing.pOne")}</p>
                <p className="p">{t("projects.mapDrawing.pTwo")}</p>
                <CarouselComponent media={media}/>
            </article>
        );
    }
}

export default withTranslation()(MapDrawingComponent);