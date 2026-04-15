document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Flip,GSDevTools)
  
  const pageLoader = document.querySelector(".page-loader");
  const introSection = document.querySelector(".section-intro");
  const van = document.getElementById("sipdirtyVan");
  const vanTyres = van.querySelectorAll(".van_tyres");

  function pageLoaderAnimation() {
    const tl = gsap.timeline({ defaults: { duration: 0.5, ease: "power2.inOut" } });

    tl.to(pageLoader, { autoAlpha: 1 })
      .to(pageLoader, { autoAlpha: 0 });

    return tl;
  }

  gsap.set(van, { transformOrigin: "center", autoAlpha: 1, scale: 0.25, right: "-70%", bottom: "50%" });
  gsap.set(vanTyres, { transformOrigin: "center" });

  function introAnimation() {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.inOut" } });
    
    tl
      .to(van, { right: "70%", duration: 1 })
      .to(van, { rotationY: 180, duration: 0 })
      .to(van, { right: "-100%", bottom: "40%", duration: 1.5, scale: 0.5 })
      .to(van, { rotationY: 0, duration: 0 })
      .to(van, { right: "0%", bottom: "50%", duration: 1.5, scale: 1 })
      .to(vanTyres, { rotation: "-=360", repeat: 4.25, ease: "none" }, 0)
      .to(van, {scale: 5, transformOrigin: "76% 22.5%", ease: "power2.in"}, "+=0.5")
      .to(introSection, { autoAlpha: 0 });

    return tl;
  }

  const masterTimeline = gsap.timeline();
  masterTimeline
    .add(pageLoaderAnimation())
    .add(introAnimation());

  // GSDevTools.create(); 
});