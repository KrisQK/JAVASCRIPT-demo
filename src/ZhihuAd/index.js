// ==UserScript==
// @name         Zhihu
// @namespace    https://zhuanlan.zhihu.com/
// @version      2024-05-01
// @description  try to take over the world!
// @author       You
// @match        https://zhuanlan.zhihu.com/*
// @icon         https://static.zhihu.com/heifetz/assets/logo_zhihu.a0ab1a46.png
// @grant        none
// ==/UserScript==
(function () {
  "use strict";
  const closeBtn1 = document.getElementsByClassName(
    "Button Modal-closeButton Button--plain"
  );
  function closeFirst(callback) {
    setTimeout(() => {
      closeBtn1[0].click();
      console.log("关闭弹窗1");
      callback();
    }, 100);
  }
  function closeSecond() {
    setTimeout(() => {
      console.log("正在关闭弹窗2");
      const closeBtn2 = document.getElementsByClassName("css-nk32ej");
      closeBtn2[0].style.display = "none";
      console.log("关闭弹窗2");
    }, 5000);
  }
  if (document.readyState === `loading`) {
    console.log("等等");
  } else {
    closeFirst(() => {
      closeSecond();
    });
  }
})();
