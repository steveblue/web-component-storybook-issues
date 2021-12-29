export class Tr extends HTMLTableRowElement {
  constructor() {
    super();
  }
}

customElements.define("a-tr", Tr, { extends: "tr" });
