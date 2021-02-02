import React, {Component} from "react";
import i18next from "i18next";
import {withTranslation} from "react-i18next";

class AppbarComponent extends Component {
    render() {
        document.documentElement.lang = i18next.languages[0];

        return (
            <React.Fragment>
                <div id="appbar">
                    <span>Andreas Milants</span>
                    <div>
                        <div style={{display: "flex"}}>
                            <a onClick={this.changeLang}
                               className={i18next.languages[0] === 'en' ? 'active' : ''}>en</a>
                            <a onClick={this.changeLang}
                               className={i18next.languages[0] === 'fr' ? 'active' : ''}>fr</a>
                            <a onClick={this.changeLang}
                               className={i18next.languages[0] === 'nl' ? 'active' : ''}>nl</a>
                        </div>
                        {this.props.navigationOpen ?
                            <span className="material-icons menu-button" onClick={this.closeNav}>arrow_right</span> :
                            <span className="material-icons menu-button" onClick={this.openNav}>menu</span>}
                    </div>
                </div>
            </React.Fragment>
        );
    }

    changeLang = (e) => {
        i18next.changeLanguage(e.currentTarget.innerHTML);
    };

    openNav = (event) => {
        this.props.openAndCloseNav(true);
    };

    closeNav = (event) => {
        this.props.openAndCloseNav(false);
    };
}

export default withTranslation()(AppbarComponent);