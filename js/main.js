document.addEventListener("DOMContentLoaded", () => {
  let controller = new ScrollMagic.Controller();

  let timeline = new TimelineMax({
    onComplete: function() {
      $(".blur").addClass("hide");
      console.log(" Marche ?");
    },
    onStart: function() {
      $(".blur").removeClass("hide");
    }
  });
  timeline
    .to(
      "#four",
      6,
      {
        y: -700
      },
      "-=6"
    )
    .to(
      "#three",
      6,
      {
        y: -500
      },
      "-=6"
    )
    .to(
      "#two",
      6,
      {
        y: -350
      },
      "-=6"
    )
    .to(
      "#one",
      6,
      {
        y: -150
      },
      "-=6"
    )
    .to(
      ".content, .blur",
      6,
      {
        top: "0%"
      },
      "-=6"
    )
    .to(
      ".img-max",
      6,
      {
        top: "20%"
      },
      "-=6"
    )
    .to(
      ".title, nav, .footer-wrapper",
      6,
      {
        y: "-100%",
        opacity: 0
      },
      "-=6"
    );

  let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "200%",
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
  new TimelineMax().set(".blur", { className: "+=hide" });
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
