(function () {
    let seeMoreEl = document.getElementById("see-more");
    let lazyIndex = 0;
    seeMoreEl.onclick = function () {
        const lazyImages = document.querySelectorAll(".lazyimg");
        const nextLazyIndex =
            lazyIndex + 10 > lazyImages.length ? lazyImages.length : lazyIndex + 10;
        for (let i = lazyIndex; i < nextLazyIndex; i++) {
            lazyImages[i].setAttribute("src", lazyImages[i].getAttribute("data-src"));
        }
        lazyIndex = nextLazyIndex;
        console.log("lazyIndex:", lazyIndex);
        console.log("lazyImages.length:", lazyImages.length);

        if (lazyIndex >= lazyImages.length) seeMoreEl.remove();
    };
})();
