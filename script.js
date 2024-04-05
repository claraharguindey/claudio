window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const totalImages = 30;
  const imageIndex =
    (Math.floor(
      (scrollPosition / (document.body.clientHeight - window.innerHeight)) *
        totalImages
    ) %
      totalImages) +
    1;
  document.getElementById("scrollImage").src = `image${imageIndex}.jpg`;
});
