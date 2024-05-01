(function () {
  "use strict";
  function main() {
    const closeBtn1 = document.getElementsByClassName(
      "Button Modal-closeButton Button--plain"
    );

    closeBtn1[0].click();
    console.log("关闭弹窗1");
    setTimeout(closetoy, 1000);
  }
  function closetoy() {
    const closeBtn2 = document.getElementsByClassName("ZXmark16DI--");
    closeBtn2[0].click();
    console.log("关闭弹窗2");
  }
  if (document.readyState === `loading`) {
    console.log("等等");
  } else {
    setTimeout(main, 500);
  }
})();
