const block = document.getElementsByClassName("js-gallery");
Array.from(block, (el) =>
  el.addEventListener("click", (e) => {
    if (el.classList.contains("block")) {
      el.classList.remove("block");
      el.classList.add("block-big");
      let grid = el.parentNode;
      const blockBig = document.querySelector(".block-big");
      grid.replaceChild(el, blockBig);
      grid.append(blockBig);
      blockBig.classList.remove("block-big");
      blockBig.classList.add("block");
    }
  })
);
