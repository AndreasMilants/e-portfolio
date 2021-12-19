import React, {Component} from "react";
import {NavHashLink as Link} from 'react-router-hash-link';
import ContactComponent from "./contact/contactComponent";
import {withTranslation} from 'react-i18next';

class NavigationComponent extends Component {
    render() {
        const {t} = this.props;

        const links = [
            {href: "/#about", icon: "portrait", name: t('navigation.about')},
            {href: "/#projects", icon: "laptop", name: t('navigation.projects')},
            {href: "/#competences", icon: "category", name: t('navigation.competences')},
            {href: "/resume#top", icon: "school", name: t('navigation.resume')},
        ];
        return (
            <React.Fragment>
                <div id="content-hider" onClick={this.closeNav} className={this.props.open ? "open" : ""}/>
                <div id="nav" className={this.props.open ? "open" : ""}>
                    <ul>
                        {links.map(link => {
                            return this.getLink(link)
                        })}
                    </ul>
                    <ContactComponent/>
                </div>
            </React.Fragment>
        );
    }

    getLink(link) {
        return (
            <li key={link.href}><Link onClick={this.closeNav} to={link.href}><span
                className="material-icons">{link.icon}</span>{link.name}</Link></li>
        );
    }

    closeNav = (event) => {
        this.props.openAndClose(false);
    };
}

export default withTranslation()(NavigationComponent);