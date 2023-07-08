import { c as create_ssr_component, v as validate_component, a as each, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { B as ButtonRow } from "../../../chunks/ButtonRow.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-1diulpp{margin-top:-8px}.div.svelte-1diulpp{height:300px;width:320px}.outerdiv.svelte-1diulpp{width:auto;display:flex;flex-direction:row;justify-content:flex-start;gap:20px;padding-left:50px;flex-wrap:wrap}.channelicon.svelte-1diulpp{height:50px;border-radius:50%}.worddiv.svelte-1diulpp{display:flex;flex-direction:column;line-height:20px}.vidtitle2.svelte-1diulpp{padding-top:5px;padding-left:7px;text-align:left;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2;color:white}.channelname.svelte-1diulpp{padding-left:7px;text-align:left;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;line-clamp:1;color:white}.side.svelte-1diulpp{background-color:rgb(52, 52, 52);padding:4px;height:100vh;position:fixed}.sidepanel.svelte-1diulpp{display:flex;flex-direction:row;gap:20px}",
  map: null
};
function hourString(int) {
  let num = int.toString().split(".")[0];
  if (Math.floor(num) >= 24) {
    int = int / 24;
    let num2 = int.toString().split(".")[0];
    let astring = "Stream ended " + num2 + " days ago";
    return astring;
  }
  if (Math.floor(num) > 1) {
    let astring = "Streamed ended " + num + " hours ago";
    return astring;
  } else if (Math.floor(num) == 1) {
    let astring = "Streamed ended " + num + " hour ago";
    return astring;
  } else if (Math.floor(num) == 0) {
    int = int / 100 * 60;
    let astring = "Streamed ended " + int.toString().substring(2, 4) + " mins ago";
    return astring;
  }
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let now = /* @__PURE__ */ new Date();
  for (let i = 0; i < data.archive.length; i++) {
    let utcDate = data.archive[i]["actualEndTime"];
    let localDate = new Date(utcDate);
    data.archive[i]["localTime"] = localDate.toISOString().substring(11, 19);
    const hourDiff = Math.abs(now.getTime() - localDate.getTime()) / 36e5;
    data.archive[i]["timeLive"] = hourString(hourDiff);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<main><div class="sidepanel svelte-1diulpp"><div class="side svelte-1diulpp">${validate_component(ButtonRow, "ButtonRow").$$render($$result, {}, {}, {})}</div> <div style="margin-left: 140px"><div><h1 style="text-align: center" data-svelte-h="svelte-dxue45">Archives</h1> <div class="outerdiv svelte-1diulpp">${each(data.archive, (dt) => {
    return `<div class="div svelte-1diulpp"><a${add_attribute("href", dt.videolink, 0)}><img${add_attribute("src", dt.thumbnail, 0)} alt="thumbnail"></a> <div style="display:flex; flex-direction:rowl"><img class="channelicon svelte-1diulpp" style="margin: auto 0;" alt="thumbnail"${add_attribute("src", dt.channelThumbnail, 0)}> <div class="worddiv svelte-1diulpp"><p class="vidtitle2 svelte-1diulpp"><a style="color: white;" target="_blank"${add_attribute("href", dt.videolink, 0)}>${escape(dt.title)}</a></p> <p class="channelname svelte-1diulpp">${escape(dt.channelTitle)}</p> <p class="channelname svelte-1diulpp" style="color: grey;">${escape(dt.timeLive)}</p> </div></div> </div>`;
  })}</div></div></div></div> </main>`;
});
export {
  Page as default
};
