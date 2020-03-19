import React, {Component} from "react";
import { HashLink as Link } from 'react-router-hash-link';
import ContactComponent from "./contact/contactComponent";
class NavigationComponent extends Component {
    render() {
        const links = [
            {href: "/#about", icon: "portrait", name: "Over mij"},
            {href: "/#competences", icon: "category", name: "Competenties"},
            {href: "/#projects", icon: "laptop", name: "Projecten"},
            {href: "/resume#resume", icon: "school", name: "CV"},
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
            <li><Link onClick={this.closeNav} to={link.href}><span
                className="material-icons">{link.icon}</span>{link.name}</Link></li>
        );
    }

    closeNav = (event) => {
        this.props.openAndClose(false);
    };
}

export default NavigationComponent;