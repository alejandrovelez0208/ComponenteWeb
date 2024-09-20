import { LitElement, html, css } from "lit-element";
import "@vaadin/vaadin-text-field";
import { component} from "../css/component";

class ControlTipo extends LitElement {
  render() {
    return html`
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <div class="container">
        <iframe cols="25%, 75%"></iframe>
          <div class="row">
              <div class="col md-5">
                  <vaadin-text-field id="textField" class="btn-input" label="${this.customLabel}"></vaadin-text-field>
              </div>
              <div class="col md-5">
              <vaadin-text-field id="textField" class="btn-input" label="${this.customLabel}"></vaadin-text-field>
              </div>
              <div class="col md-5">
                  <vaadin-text-field id="textField" class="btn-input" label="${this.customLabel}"></vaadin-text-field>
              </div>
              <div class="col md-5">
              <vaadin-text-field id="textField" class="btn-input" label="${this.customLabel}"></vaadin-text-field>
              </div>
              <div class="col md-5">
                  <vaadin-text-field id="textField" class="btn-input" label="${this.customLabel}"></vaadin-text-field>
              </div>
              <div class="col md-5">
              <vaadin-text-field id="textField" class="btn-input" label="${this.customLabel}"></vaadin-text-field>
              </div>
          </div>
      </div>  
    
    
    
`;
  }

  constructor() {
    super();
    this.customLabel = "";
  }

  static get properties() {
    return {
      customLabel: { type: String },
    };
  }

  static get styles() {
    return [component];
  }
}
customElements.define("control-tipo", ControlTipo);