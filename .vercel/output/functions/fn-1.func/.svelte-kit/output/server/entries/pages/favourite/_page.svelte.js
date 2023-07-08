import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { B as ButtonRow } from "../../../chunks/ButtonRow.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".side.svelte-19n8cbb{background-color:rgb(52, 52, 52);padding:4px;height:100vh;position:fixed}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="side svelte-19n8cbb">${validate_component(ButtonRow, "ButtonRow").$$render($$result, {}, {}, {})}</div> <h1 style="padding-left: 200px;" data-svelte-h="svelte-uo7i9j">Work in progress, i have no idea how to do this ngl</h1>`;
});
export {
  Page as default
};
