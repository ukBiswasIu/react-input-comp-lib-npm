import React, { Component } from 'react';

// import drawer, top-app-bar
import { MDCDrawer } from "@material/drawer";
import { MDCTopAppBar } from "@material/top-app-bar";
import { MDCRipple } from "@material/ripple";
import { MDCList } from "@material/list";


class Drawer extends Component {

  componentDidMount() {
    const drawer = MDCDrawer.attachTo(document.querySelector(".mdc-drawer"));
    const topAppBar = MDCTopAppBar.attachTo(document.getElementById("app-bar"));
    topAppBar.setScrollTarget(document.getElementById("main-content"));
    topAppBar.listen("MDCTopAppBar:nav", () => {
      drawer.open = !drawer.open;
    });

    const list = new MDCList(document.querySelector(".mdc-list"));
    const listItemRipples = list.listElements.map(
      listItemEl => new MDCRipple(listItemEl)
    );
  }


  render() {
    return (
      <div className="drawer-wrapper">
        <header className="mdc-top-app-bar app-bar" id="app-bar">
          <div className="mdc-top-app-bar__row">
            <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
              <a href="#" className="demo-menu material-icons mdc-top-app-bar__navigation-icon">menu</a>
              <span className="mdc-top-app-bar__title">Dismissible Drawer</span>
            </section>
          </div>
        </header>
        <aside className="mdc-drawer mdc-drawer--dismissible mdc-top-app-bar--fixed-adjust">
          <div className="mdc-drawer__content">
            <div className="mdc-list">
              <a className="mdc-list-item mdc-list-item--activated" href="#" aria-current="page">
                <i className="material-icons mdc-list-item__graphic" aria-hidden="true">dashboard</i>
                <span className="mdc-list-item__text">Dashboard</span>
              </a>
              <a className="mdc-list-item" href="#">
                <i className="material-icons mdc-list-item__graphic" aria-hidden="true">videocam</i>
                <span className="mdc-list-item__text">LiveStream</span>
              </a>
              <a className="mdc-list-item" href="#">
                <i className="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>
                <span className="mdc-list-item__text">Downstreams</span>
              </a>
              <a className="mdc-list-item" href="#">
                <i className="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>
                <span className="mdc-list-item__text">Upstream</span>
              </a>
              <a className="mdc-list-item" href="#">
                <i className="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>
                <span className="mdc-list-item__text">Devices</span>
              </a>
            </div>
          </div>
        </aside>

        <div className="mdc-drawer-app-content mdc-top-app-bar--fixed-adjust">
          <main className="main-content" id="main-content">
            App Content
          </main>
        </div>
      </div>
    );
  }
}

export default Drawer;