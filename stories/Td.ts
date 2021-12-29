export class Td extends HTMLTableCellElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerText = "cell";
  }
}

customElements.define("a-td", Td, { extends: "td" });
