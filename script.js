document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Flip,GSDevTools)
  
  const pageLoader = document.querySelector(".page-loader");
  const introSection = document.querySelector(".section-intro");
  const van = document.getElementById("sipdirtyVan");
  const vanTyres = van.querySelectorAll(".van_tyres");
  const vanMenu = van.querySelectorAll(".van_menu");

  function pageLoaderAnimation() {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.inOut" } });
    gsap.set("body", { overflow: "hidden" });
    gsap.set(pageLoader, { autoAlpha: 1 });

    tl.to(pageLoader, { autoAlpha: 0 });

    return tl;
  }

  gsap.set(van, { transformOrigin: "center", autoAlpha: 1, scale: 0.25, right: "-70%", bottom: "50%" });
  gsap.set(vanTyres, { transformOrigin: "center" });

  function introAnimation() {
    const tl = gsap.timeline();
    
    tl
      .to(van, { right: "70%", duration: 1.5, ease: "power1.out" })
      .to(vanTyres, { rotation: "-=1080", duration: 1.5, ease: "power1.out" }, "<")
      .to(van, { rotationY: 180, duration: 0 })
      .to(van, { right: "-100%", bottom: "40%", duration: 1.5, scale: 0.5, ease: "power2.in" })
      .to(vanTyres, { rotation: "-=1080", duration: 1.5, ease: "power2.out" }, "<")
      .to(van, { rotationY: 0, bottom: "50%", scale: 0.8, duration: 0 })
      .to(van, { right: "0%", duration: 1.5, scale: 1, ease: "back.out(0.55)" }, "+=1")
      .to(vanTyres, { rotation: "-=720", duration: 1.5, ease: "back.out(0.55)" }, "<")
      .to(van, { rotation: 0.25, duration: 0.5, ease: "power1.in" }, ">-0.5")
      .to(van, { rotation: 0, duration: 1, ease: "power1.out" }, ">")
      // .to(van, {scale: 5, transformOrigin: "76% 22.5%", duration: 2, ease: "power2.inOut"}, "-=0.5")
      // .to(introSection, { duration: 1.5, autoAlpha: 0 }, "+=0.25")
      .to(van, {scale: 7.5, transformOrigin: "73.75% 25%", duration: 2, ease: "power2.inOut"}, "-=0.5")
      .to(introSection, { duration: 0.75, autoAlpha: 0 }, "<+1")
      .to("body", { overflow: "" });

    return tl;
  }

  const masterTimeline = gsap.timeline();
  masterTimeline
    .add(pageLoaderAnimation())
    .add(introAnimation());

  // GSDevTools.create(); 
});