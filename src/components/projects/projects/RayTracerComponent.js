import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import CarouselComponent from "../../carousel";

class RayTracerComponent extends Component {
    render() {
        const {t} = this.props;
        const media = [
            <img src={process.env.PUBLIC_URL + "/ray_tracer/bunny.png"} alt="bunny render"/>,
            <img src={process.env.PUBLIC_URL + "/ray_tracer/dalmatian.png"} alt="dalmatian render"/>,
            <img src={process.env.PUBLIC_URL + "/ray_tracer/voronoi.png"} alt="voronoi render"/>,
        ];
        return (
            <article>
                <h1>Map drawing</h1>
                <img src={process.env.PUBLIC_URL + "/ray_tracer/dalmatian.png"} alt="dalmatian ball render" style={{width: "100%"}}/>
                <p className="p">{t("projects.rayTracer.pOne")}</p>
                <CarouselComponent media={media}/>
            </article>
        );
    }
}

export default withTranslation()(RayTracerComponent);