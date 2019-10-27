document.addEventListener("DOMContentLoaded", () => {
  let controller = new ScrollMagic.Controller();

  let timeline = new TimelineMax({
    // onComplete: function() {
    //   $(".blur").addClass("hide");
    //   console.log(" Marche ?");
    // },
    // onStart: function() {
    //   $(".blur").removeClass("hide");
    // }
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
        y: -250
      },
      "-=6"
    )
    .to(
      ".img-max",
      6,
      {
        top: "47%",
        autoAlpha: 1
      },
      "-=6"
    )
    .to(
      ".content, .blur",
      6,
      {
        top: "19%"
      },
      "-=6.2"
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
    duration: 2000,
    triggerHook: 0
  })
    .setTween(timeline)
    .setPin("section")
    .addTo(controller);
  // scene.offset(975);

  $(".btn-test").click(() => {
    const timelineFirstScreen = new TimelineMax({
      paused: true,
      onComplete: function() {
        $(".fscreen").css("height", "200vh");
        // $("#first-section").hide();
        // $("body,html").animate(
        //   {
        //     scrollTop: 0 // Scroll to top of body
        //   },
        //   500
        // );
        // console.log(" ca hide le container sans pression ?");
      }
    });
    // e.preventDefault;

    timelineFirstScreen
      .to(".fscreen", 0.5, {
        // top: 0,
        // left: 0,
        // top: "100%",
        ease: Power1.easeIn,
        opacity: 1,
        zIndex: 1,
        height: "100vh"
        // display: "block"
        // scrollTo: 100
        // skew: -90
      })
      .to(
        ".scrollmagic-pin-spacer",
        0.5,
        {
          opacity: 0,
          ease: Power1.easeInOut
        },
        "-=1"
      );
    timelineFirstScreen.play();
    // $("body").toggle(".hide-body");
    // $("#first-section").css("position", "absolute");
    $("body").addClass("hide-body");
    $(".scrollmagic-pin-spacer").addClass("hide-spacer");

    $(".btn-opacity").click(() => {
      // $("body").toggle(".hide-body");
      // $("#first-section").css("position", "fixed");
      $("body").removeClass("hide-body");
      $(".scrollmagic-pin-spacer").removeClass("hide-spacer");
      timelineFirstScreen.reverse();
      $("#first-section").show();
      timelineFirstScreen.to(
        ".scrollmagic-pin-spacer",
        0.5,
        {
          opacity: 1,
          ease: Power1.easeInOut
        },
        "-=1"
      );
      // $("#first-section").animate(
      //   {
      //     scrollTop: "-300px" // Scroll to top of body
      //   },
      //   500
      // );
      console.log(" ca hide le container sans pression ?");
      // $(".btn-test").css({ bottom: "-100%", "margin-bottom": "500px" });
    });
  });
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

// traveling = () => {
//   console.log("ARHALOULOULOU");
//   // new TimelineMax().set(".image-wrapper img", { className: "+=bat-fix" });
//   new TimelineMax().set(".blur", { className: "+=hide" });
// };

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
