export class TableCard extends HTMLElement {
  constructor() {
    super();
    const shadowRoot: ShadowRoot = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");
    template.innerHTML = `<table is="a-table">
    <thead></thead>
    <tbody>
        <tr is="a-tr"><td is="a-td"></td> <td is="a-td"></td> <td is="a-td"></td> <td is="a-td"></td></tr>
        <tr is="a-tr"><td is="a-td"></td> <td is="a-td"></td> <td is="a-td"></td> <td is="a-td"></td></tr>
        <tr is="a-tr"><td is="a-td"></td> <td is="a-td"></td> <td is="a-td"></td> <td is="a-td"></td></tr>
        <tr is="a-tr"><td is="a-td"></td> <td is="a-td"></td> <td is="a-td"></td> <td is="a-td"></td></tr>
        <tr is="a-tr"><td is="a-td"></td> <td is="a-td"></td> <td is="a-td"></td> <td is="a-td"></td></tr>
    </tbody>
    </table>`;
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("a-tablecard", TableCard);
