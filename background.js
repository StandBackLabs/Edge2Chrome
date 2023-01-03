"use strict";
const rex_ua = /Edg\/[0-9\.]+/gi
const rex_ch_ua_list = /"Microsoft Edge";v="[^"]+"/gi
const rex_chr_ver = /^.+"Chromium";v="([0-9\.]+)".+$/gi

function modify_headers(e) {
    var chrome_ver = "";
    var ch_ua_version_idx = -1;

  var idx = 0;
  for (const header of e.requestHeaders) {
    var nm = header.name.toLowerCase();
    if (nm === "user-agent") {
      header.value = header.value.replace(rex_ua,"");
    }
    else if (nm === "sec-ch-ua-full-version-list") {
      chrome_ver = header.value.replace(rex_chr_ver, "$1");
      //TODO: check that chrome_ver is well formatted
      header.value = header.value.replace(rex_ch_ua_list, '"Google Chrome";v="' + chrome_ver + '"');
    }
    else if (nm === "sec-ch-ua") {
      header.value = header.value.replace("Microsoft Edge", "Google Chrome");
    }
    else if (nm === "sec-ch-ua-full-version") {
      ch_ua_version_idx = idx;
    }
    idx++;
  }

  if (ch_ua_version_idx >= 0) {
    e.requestHeaders[ch_ua_version_idx].value = chrome_ver;
  }
  
  return { requestHeaders: e.requestHeaders };
}

chrome.webRequest.onBeforeSendHeaders.addListener(
  modify_headers,
  {urls:["*://*.google.com/*",
  "*://*.gstatic.com/*",
  "*://*.googleusercontent.com/*",
  "*://*.ytimg.com/*",
  "*://*.youtube.com/*",
  "*://*.googleapis.com/*"]},
  ["blocking", "requestHeaders"]
);