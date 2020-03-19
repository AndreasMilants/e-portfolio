import React, {Component} from "react";

class AppbarComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="appbar">
                    <span>Andreas Milants</span>
                    {this.props.navigationOpen ?
                        <span className="material-icons menu-button" onClick={this.closeNav}>arrow_right</span> :
                        <span className="material-icons menu-button" onClick={this.openNav}>menu</span>}

                </div>
            </React.Fragment>
        );
    }

    openNav = (event) => {
        this.props.openAndCloseNav(true);
    };

    closeNav = (event) => {
        this.props.openAndCloseNav(false);
    };
}

export default AppbarComponent;