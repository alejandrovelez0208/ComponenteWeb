import { LitElement, html } from "lit-element";
import "@vaadin/button";
import "@vaadin/vaadin-icon/vaadin-icon";
import "@vaadin/vaadin-icons/vaadin-iconset";
import { nav_css } from "../css/nav-css.js";
import { va_boton } from "../css/va-boton-css.js";
import { panel_css } from "../css/panel-css.js";

class PanelMain extends LitElement {
  render() {
    return html`
<div class="main">
  <nav class="navbar">
    <div class="navbar-left">
      <vaadin-button class="theme size" @click="${this.handleClick}">
        <vaadin-icon icon="vaadin:align-justify"></vaadin-icon></vaadin-icon>
      </vaadin-button>
      <label>My App</label>
    </div>
    <div class="navbar-right">
      <vaadin-button class="theme size">Cuenta
        <vaadin-icon icon="vaadin:clipboard-user"></vaadin-icon></vaadin-icon>
      </vaadin-button>
    </div>
  </nav>
  <section class="seccion">
    <div class="drawer side-nav ${this.estiloClase}">
      <ul>
        <li>
          <a href="/dashboard">
            <vaadin-icon icon="vaadin:panel" slot="prefix"></vaadin-icon>
            Dashboard
          </a>
        </li>
        <li>
          <a href="/agregar">
            <vaadin-icon icon="vaadin:file-add" slot="prefix"></vaadin-icon>
            Agregar
          </a>
        </li>
        <li>
          <a href="/buscar">
            <vaadin-icon icon="vaadin:search" slot="prefix"></vaadin-icon>
            Buscar
          </a>
        </li>
        <li>
          <a href="/estadisticas">
            <vaadin-icon icon="vaadin:bar-chart" slot="prefix"></vaadin-icon>
            Estadisticas
          </a>
        </li>
      </ul>
    </div>
    <div class="info">
      <div id="menu"><div>
    </div>
  </section>

</div>
`;
  }

  toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
    if (this.drawerOpen) {
      this.estiloClase = "targetOpen";
    } else {
      this.estiloClase = "targetClose";
    }
  }

  handleClick() {
    this.toggleDrawer();
  }

  static get styles() {
    return [nav_css, va_boton, panel_css];
  }

  static get properties() {
    return {
      drawerOpen: { type: Boolean },
      estiloClase: { type: String },
    };
  }

  constructor() {
    super();
    this.drawerOpen = true;
    this.estiloClase = "";
  }
}
customElements.define("panel-main", PanelMain);
