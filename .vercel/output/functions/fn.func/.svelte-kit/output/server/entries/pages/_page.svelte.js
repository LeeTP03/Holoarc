import { c as create_ssr_component, v as validate_component, a as each, b as add_attribute, e as escape } from "../../chunks/ssr.js";
import { B as ButtonRow } from "../../chunks/ButtonRow.js";
const LiveStreamApp_svelte_svelte_type_style_lang = "";
const UpcomingStreamApp_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".side.svelte-14a3923{background-color:rgb(52, 52, 52);padding:4px;position:fixed;height:100vh}.sidepanel.svelte-14a3923{display:flex;flex-direction:row;gap:20px}p.svelte-14a3923{margin-top:-8px}.div.svelte-14a3923{height:300px;width:320px}.outerdiv.svelte-14a3923{width:auto;display:flex;flex-direction:row;justify-content:flex-start;gap:20px;padding-left:50px;flex-wrap:wrap}.channelicon.svelte-14a3923{height:50px;border-radius:50%}.worddiv.svelte-14a3923{display:flex;flex-direction:column;line-height:20px}.vidtitle2.svelte-14a3923{padding-top:5px;padding-left:7px;text-align:left;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2;color:white}.channelname.svelte-14a3923{padding-left:7px;text-align:left;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;line-clamp:1;color:white}.live.svelte-14a3923{color:rgb(249, 71, 71);padding-left:7px;padding-right:7px}",
  map: null
};
function hourString(int) {
  if (Math.floor(int) >= 10) {
    return int.toString().substring(0, 2) + " hours";
  }
  if (Math.floor(int) > 1) {
    return int.toString().substring(0, 1) + " hours";
  } else if (Math.floor(int) == 1) {
    return int.toString().substring(0, 1) + " hour";
  } else if (Math.floor(int) == 0) {
    int = int / 100 * 60;
    return int.toString().substring(2, 4) + " mins";
  }
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let now = /* @__PURE__ */ new Date();
  for (let i = 0; i < data.live.length; i++) {
    let utcDate = data.live[i]["actualStartTime"];
    let localDate = new Date(utcDate);
    data.live[i]["localTime"] = localDate.toISOString().substring(11, 19);
    const hourDiff = Math.abs(now.getTime() - localDate.getTime()) / 36e5;
    data.live[i]["timeLive"] = "for " + hourString(hourDiff);
  }
  for (let i = 0; i < data.upcoming.length; i++) {
    let utcDate = data.upcoming[i]["scheduledStartTime"];
    let localDate = new Date(utcDate);
    const hourDiff = Math.abs(now.getTime() - localDate.getTime()) / 36e5;
    data.upcoming[i]["timeDiff"] = "Starts in " + hourString(hourDiff);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<main><div class="sidepanel svelte-14a3923"><div class="side svelte-14a3923">${validate_component(ButtonRow, "ButtonRow").$$render($$result, {}, {}, {})}</div> <div style="margin-left: 140px;"><div><h1 style="text-align:center;" data-svelte-h="svelte-1glkk4q">Live!</h1> <div class="outerdiv svelte-14a3923">${each(data.live, (dt) => {
    return `<div class="div svelte-14a3923"><a${add_attribute("href", dt.videolink, 0)}><img${add_attribute("src", dt.thumbnail, 0)} alt="thumbnail"></a> <div style="display:flex; flex-direction:rowl"><img class="channelicon svelte-14a3923" style="margin: auto 0;" alt="thumbnail"${add_attribute("src", dt.channelThumbnail, 0)}> <div class="worddiv svelte-14a3923"><p class="vidtitle2 svelte-14a3923"><a style="color: white;" target="_blank"${add_attribute("href", dt.videolink, 0)}>${escape(dt.title)}</a></p> <p class="channelname svelte-14a3923">${escape(dt.channelTitle)}</p> <div style="display:flex"><p class="live svelte-14a3923" data-svelte-h="svelte-5a0x59">Live now</p> <p class="svelte-14a3923">${escape(dt.timeLive)}</p> <p style="color:grey; padding-left: 7px" class="svelte-14a3923">${escape(dt.concurrentViewers)} viewers</p></div> </div></div> </div>`;
  })}</div></div> <div><h1 style="text-align: center;" data-svelte-h="svelte-1an84hq">Upcoming Streams</h1> <div class="outerdiv svelte-14a3923">${each(data.upcoming, (dt) => {
    return `<div class="div svelte-14a3923"><a${add_attribute("href", dt.videolink, 0)}><img${add_attribute("src", dt.thumbnail, 0)} alt="thumbnail"></a> <div style="display:flex; flex-direction:rowl"><img class="channelicon svelte-14a3923" style="margin:auto 0;" alt="thumbnail"${add_attribute("src", dt.channelThumbnail, 0)}> <div class="worddiv svelte-14a3923"><p class="vidtitle2 svelte-14a3923"><a style="color: white;" target="_blank"${add_attribute("href", dt.videolink, 0)}>${escape(dt.title)}</a></p> <p class="channelname svelte-14a3923">${escape(dt.channelTitle)}</p> <p class="channelname svelte-14a3923">${escape(dt.timeDiff)}</p> </div></div> </div>`;
  })}</div></div></div></div> </main>`;
});
export {
  Page as default
};
