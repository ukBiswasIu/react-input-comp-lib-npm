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
        <header class="mdc-top-app-bar app-bar" id="app-bar">
          <div class="mdc-top-app-bar__row">
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
              <a href="#" class="demo-menu material-icons mdc-top-app-bar__navigation-icon">menu</a>
              <span class="mdc-top-app-bar__title">Dismissible Drawer</span>
            </section>
          </div>
        </header>
        <aside class="mdc-drawer mdc-drawer--dismissible mdc-top-app-bar--fixed-adjust">
          <div class="mdc-drawer__content">
            <div class="mdc-list">
              <a class="mdc-list-item mdc-list-item--activated" href="#" aria-current="page">
                <i class="material-icons mdc-list-item__graphic" aria-hidden="true">dashboard</i>
                <span class="mdc-list-item__text">Dashboard</span>
              </a>
              <a class="mdc-list-item" href="#">
                <i class="material-icons mdc-list-item__graphic" aria-hidden="true">videocam</i>
                <span class="mdc-list-item__text">LiveStream</span>
              </a>
              <a class="mdc-list-item" href="#">
                <i class="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>
                <span class="mdc-list-item__text">Downstreams</span>
              </a>
              <a class="mdc-list-item" href="#">
                <i class="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>
                <span class="mdc-list-item__text">Upstream</span>
              </a>
              <a class="mdc-list-item" href="#">
                <i class="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>
                <span class="mdc-list-item__text">Devices</span>
              </a>
            </div>
          </div>
        </aside>

        <div class="mdc-drawer-app-content mdc-top-app-bar--fixed-adjust">
          <main class="main-content" id="main-content">
            App Content
          </main>
        </div>
      </div>
    );
  }
}

export default Drawer;