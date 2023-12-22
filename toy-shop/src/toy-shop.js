import { LitElement, html, css } from 'lit';
import './header-lit'
import './card-lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class ToyShop extends LitElement {
  static properties = {
    header: { type: String },
  }


  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <!-- <header-lit></header-lit> -->
      <card-lit></card-lit>

    `;
  }
}

customElements.define('toy-shop', ToyShop);