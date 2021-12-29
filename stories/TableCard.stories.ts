import { html } from "lit-html";

import { Story, Meta } from "@storybook/web-components";
import { TableCard } from "./TableCard";
import { Table } from "./Table";
import { Tr } from "./Tr";
import { Td } from "./Td";

export default {
  title: "Reproduction/Table Card",
} as Meta;

const Template: Story<Partial<any>> = (args) => html`
  <div>This should display a table.</div>
  <a-tablecard></a-tablecard>
`;

export const Primary = Template.bind({});
Primary.args = {};
