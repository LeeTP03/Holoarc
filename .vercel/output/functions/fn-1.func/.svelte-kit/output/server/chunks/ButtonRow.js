import { c as create_ssr_component, a as each, b as add_attribute, e as escape } from "./ssr.js";
import { b as base } from "./paths.js";
const ButtonRow_svelte_svelte_type_style_lang = "";
const css = {
  code: ".logo.svelte-7fv03j{width:120px;height:auto;margin-left:auto;margin-right:auto;padding-bottom:50px}.button.svelte-7fv03j{background-color:rgb(52, 52, 52);width:100%;padding-top:5px;padding-bottom:5px;text-align:center}.button.svelte-7fv03j:hover{background-color:grey}.flexbox.svelte-7fv03j{padding-top:20px;display:flex;flex-direction:column}",
  map: null
};
const ButtonRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let button = [
    { "name": "Home", "link": base + "/" },
    {
      "name": "Activities",
      "link": base + "/activities"
    },
    {
      "name": "Favourite",
      "link": base + "/favourite"
    },
    {
      "name": "Archives",
      "link": base + "/archive"
    }
  ];
  $$result.css.add(css);
  return `<main><div class="flexbox svelte-7fv03j"><img class="logo svelte-7fv03j" alt="company logo" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Hololive_Production.png"> ${each(button, (btn) => {
    return `<a style="color: white;"${add_attribute("href", btn.link, 0)}><div class="button svelte-7fv03j">${escape(btn.name)}</div></a>`;
  })}</div> </main>`;
});
export {
  ButtonRow as B
};
