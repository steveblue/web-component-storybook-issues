export class Table extends HTMLTableElement {
  constructor() {
    super();
  }
}

customElements.define("a-table", Table, { extends: "table" });
