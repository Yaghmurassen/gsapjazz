document.addEventListener("DOMContentLoaded", () => {
  let controller = new ScrollMagic.Controller();

  let timeline = new TimelineMax({ onComplete: traveling });
  timeline
    // .to("#sixth", 8, {
    //   y: -700,
    //   scale: 1.4
    // })

    .fromTo(
      "#fifth",
      8,
      {
        y: 0,
        scale: 1,
        bottom: "-18.7%",
        opacity: 0.9,
        webkitMaskBoxImage: "linear-gradient(black 50%, transparent 120%)"
        // ease: Power1.easeInOut
        // delay: 3
      },
      {
        bottom: "-21%",
        y: -190,
        scale: 1.2,
        opacity: 1,
        webkitMaskBoxImage: "linear-gradient(black 100%, transparent 100%)"
        // ease: Power1.easeInOut
        // position: "fixed"
      },
      "-=5"
    )
    .to(
      "#forth",
      8,
      {
        y: -200,
        // width: "120%",
        transformOrigin: "center",
        scale: 1.2,
        opacity: 0.3
      },
      "-=8"
    )
    .to(
      "#third",
      8,
      {
        y: -200,
        // width: "120%",
        transformOrigin: "center",
        scale: 1.2,
        opacity: 0.3
      },
      "-=8"
    )
    .to(
      "#second",
      8,
      {
        y: -200
      },
      "-=8"
    )
    .to(
      "#first",
      8,
      {
        y: -100
      },
      "-=8"
    )
    .to(
      ".content, .blur",
      8,
      {
        top: "0%"
      },
      "-=8"
    )
    .to(
      ".title, nav, .footer-wrapper",
      8,
      {
        y: "-100%",
        opacity: 0
      },
      "-=8"
    );
  // .from(
  //   ".one",
  //   3,
  //   {
  //     top: "40px",
  //     autoAlpha: 0
  //   },
  //   "-=4"
  // )
  // .from(
  //   ".two",
  //   3,
  //   {
  //     top: "40px",
  //     autoAlpha: 0
  //   },
  //   "-=3.5"
  // )
  // .from(
  //   ".three",
  //   3,
  //   {
  //     top: "40px",
  //     autoAlpha: 0
  //   },
  //   "-=3.5"
  // )
  // .from(
  //   ".four",
  //   3,
  //   {
  //     top: "40px",
  //     autoAlpha: 0
  //   },
  //   "-=3.5"
  // )
  // .from(
  //   ".text",
  //   3,
  //   {
  //     y: 60,
  //     autoAlpha: 0
  //   },
  //   "-=4"
  // );

  let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: 5000,
    triggerHook: 0
  })
    .setTween(timeline)
    .setPin("section")
    .addTo(controller);
});

// traveling = () => {
//   console.log("ARHALOULOULOU");
//   let timeline = new TimelineMax();
//   timeline.to(".image-wrapper img", 2, {
//     height: "120vh",
//     width: "100%",
//     position: "absolute",
//     top: "-175px"
//   });
// };

traveling = () => {
  console.log("ARHALOULOULOU");
  // new TimelineMax().set(".image-wrapper img", { className: "+=bat-fix" });
  // new TimelineMax().set(".hide", { className: "+=show" });
};

// const btnOpen = document.querySelector(".btn-open");
// console.log(btnOpen);
// const tl = new TimelineMax({ paused: true });

// tl.fromTo(
//   ".cover",
//   2,
//   {
//     top: "-100%",
//     opacity: 0,
//     ease: Power2.easeOut
//   },
//   {
//     y: 100,
//     top: 0,
//     opacity: 1,
//     ease: Power2.easeOut
//   }
// );

// $(".btn-open").click(() => {
//   const tl = new TimelineMax({ paused: true });
//   tl.fromTo(
//     ".cover",
//     2,
//     {
//       top: "-100%",
//       opacity: 0,
//       ease: Power2.easeOut
//     },
//     {
//       y: 100,
//       top: 0,
//       opacity: 1,
//       ease: Power2.easeOut
//     }
//   );
//   tl.play();
//   console.log("CLIQUEZ BANDE DE SALOPES!!!!!!!");
// });

// btnOpen.addEventListener("click", () => {
//   tl.play();
//   console.log("CLIQUEZ BANDE DE SALOPES!!!!!!!");
// });
