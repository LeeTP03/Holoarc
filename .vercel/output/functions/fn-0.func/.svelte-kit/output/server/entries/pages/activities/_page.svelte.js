import { c as create_ssr_component, v as validate_component, a as each, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { B as ButtonRow } from "../../../chunks/ButtonRow.js";
const YTEmbed_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".videochatbox.svelte-pxb7sr{display:flex;flex-direction:row}.iframeinner.svelte-pxb7sr{padding-bottom:50px;align-items:center;justify-content:center;padding-left:50px}",
  map: null
};
const YTEmbed = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<main data-svelte-h="svelte-141dov7"><div style="height: 100vh;"><div class="videochatbox svelte-pxb7sr"><iframe class="iframeinner svelte-pxb7sr" width="1060" height="596" id="ytvidembed" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> <iframe height="596" id="chatbox" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></div> </main>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".side.svelte-jla3iy{background-color:rgb(52, 52, 52);padding:4px;height:100vh;position:fixed}.sidepanel.svelte-jla3iy{display:flex;flex-direction:row;gap:20px}p.svelte-jla3iy{margin-top:-8px}.div.svelte-jla3iy{height:300px;width:320px}.outerdiv.svelte-jla3iy{width:1310px;display:flex;flex-direction:row;justify-content:flex-start;gap:60px;flex-wrap:wrap;padding-left:150px}.channelicon.svelte-jla3iy{height:50px;border-radius:50%}.worddiv.svelte-jla3iy{display:flex;flex-direction:column;line-height:20px}.vidtitle2.svelte-jla3iy{padding-top:5px;padding-left:7px;text-align:left;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2;color:white}.channelname.svelte-jla3iy{padding-left:7px;text-align:left;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;line-clamp:1;color:white}.live.svelte-jla3iy{color:rgb(249, 71, 71);padding-left:7px;padding-right:7px}",
  map: null
};
function hourString(int) {
  if (Math.floor(int) >= 10) {
    let astring = "for " + int.toString().substring(0, 2) + " hours";
    return astring;
  }
  if (Math.floor(int) > 1) {
    let astring = "for " + int.toString().substring(0, 1) + " hours";
    return astring;
  } else if (Math.floor(int) == 1) {
    let astring = "for " + int.toString().substring(0, 1) + " hour";
    return astring;
  } else if (Math.floor(int) == 0) {
    int = int / 100 * 60;
    let astring = "for " + int.toString().substring(2, 4) + " mins";
    return astring;
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
    data.live[i]["timeLive"] = hourString(hourDiff);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<main><div class="sidepanel svelte-jla3iy"><div class="side svelte-jla3iy">${validate_component(ButtonRow, "ButtonRow").$$render($$result, {}, {}, {})}</div> <div style="margin-left: 140px"><div><h1 style="text-align: center" data-svelte-h="svelte-p9a8o9">Watch</h1> ${validate_component(YTEmbed, "YtEmbed").$$render($$result, {}, {}, {})} <h1 style="text-align: center;" data-svelte-h="svelte-rzlxb7">Select Stream</h1> <h3 style="padding-left: 150px;" data-svelte-h="svelte-6iad6i">Click stream to watch</h3> <div class="outerdiv svelte-jla3iy">${each(data.live, (dt) => {
    return `<div class="div svelte-jla3iy"><button${add_attribute("id", dt.id, 0)} onclick="embedvid(this.id)"><img${add_attribute("src", dt.thumbnail, 0)} alt="thumbnail"> <div style="display:flex; flex-direction:rowl"><img${add_attribute("id", dt.videolink, 0)} class="channelicon svelte-jla3iy" style="margin: auto 0;" alt="thumbnail"${add_attribute("src", dt.channelThumbnail, 0)}> <div class="worddiv svelte-jla3iy"><p class="vidtitle2 svelte-jla3iy">${escape(dt.title)}</p> <p class="channelname svelte-jla3iy">${escape(dt.channelTitle)}</p> <div style="display:flex"><p class="live svelte-jla3iy" data-svelte-h="svelte-5a0x59">Live now</p> <p class="svelte-jla3iy">${escape(dt.timeLive)}</p> <p style="color:grey; padding-left: 7px" class="svelte-jla3iy">${escape(dt.concurrentViewers)} viewers</p> </div></div> </div></button> </div>`;
  })}</div> <script data-svelte-h="svelte-1x68tut">function embedvid(element_id){
          document.getElementById("ytvidembed").src = "https://www.youtube.com/embed/" + element_id;
          document.getElementById("chatbox").src = "https://www.youtube.com/live_chat?v=" + element_id + "&embed_domain=local_host:5173/index3.html";
      }<\/script></div></div></div> </main>`;
});
export {
  Page as default
};
