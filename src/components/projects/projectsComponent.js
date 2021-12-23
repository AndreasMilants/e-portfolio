import React, {Component} from "react";
import {HashLink as Link} from "react-router-hash-link";
import {withTranslation} from "react-i18next";

class ProjectsComponent extends Component {
    render() {
        const {t} = this.props;

        const projects = [
            {
                link: "/stratvision",
                img: "/stratvision/node-editor.png",
                title: "Stratvision",
            },
            {
                link: "/cnb",
                img: "/cnb/homepage_small.png",
                title: "Chiro Nemas",
            },
            {
                link: "/arnecrush",
                img: "/arnecrush/logo.png",
                title: "Arnecrush",
            },
            {
                link: "/abc-cooking",
                img: "/abc_cooking/com.png",
                title: "ABC Cooking",
            },
            {
                link: "/snake-ai",
                video: "/snake_ai/snake_ai.mov",
                title: "Snake AI interactive",
                className: "two-cols",
                interactive: true
            },
            {
                link: "/ray-tracer",
                img: "/ray_tracer/dalmatian.png",
                title: "Ray tracing",
            },
            {
                link: "/abc-cooking-mobile",
                img: "/abc_cooking2/com.png",
                title: "ABC cooking 2.0",
            },
            {
                link: "/novem",
                img: "/novem/novem.png",
                title: "Novem",
            },
            {
                link: "/ticketgang",
                img: "/ticketgang/ticketgang.jpg",
                title: "TicketGang",
            },
            {
                link: "/scrabble",
                img: "/scrabble/scrabble.png",
                title: "Scrabble solver",
                className: "two-cols",
                interactive: true
            },
            {
                link: "/map-drawing",
                img: "/map_drawing/cupcake.gif",
                title: "Map drawing",
            },
            {
                link: "/snake",
                video: "/snake/snake_small.mov",
                title: "Snake AI",
            },
        ];

        return (
            <React.Fragment>
                <article>
                    <span id="projects" className="link"/>
                    <h2>{t("projects.title")}</h2>
                    <ul id="projects-list">
                        {projects.map(p => this.getProjectLink(p))}
                    </ul>
                </article>
            </React.Fragment>
        );
    }

    getProjectLink({link, img, video, title, className, interactive}) {
        return <li className={className}>
            <Link to={link + "#top"}>
                {this.getMedia({img, video, title})}
                <h3>{title}</h3>
                {interactive ? <span className="material-icons interactive">gamepad</span> : ""}
            </Link>
        </li>;
    }

    getMedia({img, video, title}) {
        if (img) {
            return <div className="img" style={{backgroundImage: "url('" + process.env.PUBLIC_URL + img + "')"}}></div>;
        }
        return <React.Fragment>
            <div className="img-container">
                <div className="img"></div>
                <video src={process.env.PUBLIC_URL + video} autoPlay muted loop/>
            </div>
        </React.Fragment>;

    }
}

export default withTranslation()(ProjectsComponent);