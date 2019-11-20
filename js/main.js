document.addEventListener("DOMContentLoaded", () => {
  let controller = new ScrollMagic.Controller();

  let timeline = new TimelineMax({
    onComplete: function() {
      $(".blur").addClass("hide");
      console.log(" Marche ?");
      $(".btn-test").css("display", "block");
    },
    onStart: function() {
      $(".blur").removeClass("hide");
    }
  });
  timeline
    .fromTo(
      "#four",
      10,
      {
        bottom: -470
      },
      { y: -1145, bottom: -595 },
      "-=10"
    )
    .to(
      "#three",
      10,
      {
        y: -700
      },
      "-=10"
    )
    .fromTo(
      "#two",
      10,
      {
        y: 80,
        height: "105vh"
        // transform: "scale(1.34)"
      },
      {
        y: -400
      },
      "-=10"
    )
    .fromTo(
      "#one",
      10,
      {
        y: 0
      },
      {
        // y: -350,
        transform: "scale(1.3)"
      },
      "-=10"
    )
    .fromTo(
      "#one",
      10,
      {
        y: 0
      },
      {
        y: -350
      },
      "-=10"
    )
    .to(
      ".content, .blur",
      6,
      {
        top: "-53%"
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
    )
    .from(
      ".un",
      3,
      {
        top: "40px",
        autoAlpha: 0
      },
      "-=4"
    )
    .from(
      ".deux",
      3,
      {
        top: "40px",
        autoAlpha: 0
      },
      "-=3.5"
    )
    .from(
      ".trois",
      3,
      {
        top: "40px",
        autoAlpha: 0
      },
      "-=3.5"
    )
    .from(
      ".quatre",
      3,
      {
        top: "40px",
        autoAlpha: 0
      },
      "-=3.5"
    )
    .from(
      ".text",
      3,
      {
        y: 60,
        autoAlpha: 0
      },
      "-=4"
    );

  let scene = new ScrollMagic.Scene({
    triggerElement: "body",
    duration: "100%",
    triggerHook: 0
  })
    .setTween(timeline)
    .setPin("section")
    .addTo(controller);

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
    // $("#first-section").css("position", "absolute");
    $("body").addClass("hide-body");
    $(".scrollmagic-pin-spacer").addClass("hide-spacer");

    $(".btn-opacity").click(() => {
      // $("body").toggle(".hide-body");
      // $("#first-section").css("position", "fixed");
      $("body").removeClass("hide-body");
      $(".row-menu").css("z-index", "999999");
      $(".row-menu").addClass("z");
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
    });
  });

  $(".btn-menu").click(() => {
    const timelineMenu = new TimelineMax({
      paused: true,
      onComplete: function() {
        $(".fscreen").css("height", "100vh");
        // $(".btn-menu").click(() => {
        // timelineMenu.reverse();
        // timelineMenu.staggerFrom(
        //   ".menu-container ul li",
        //   1,
        //   { x: -200, opacity: 0, ease: Expo.easeOut },
        //   0.3
        // );
        // });
        // $(".fscreen").css("height", "200vh");
        // $("#first-section").hide();
      }
    });

    timelineMenu
      .to(".menu-container", 0.5, {
        ease: Power2.easeInOut,
        opacity: 1,
        zIndex: 1
      })
      .staggerFrom(
        ".menu-container ul li",
        1,
        { x: 0, opacity: 0, ease: Expo.easeOut },
        0.3
      );

    timelineMenu.play();

    $("body").addClass("hide-body");
    $(".scrollmagic-pin-spacer").addClass("hide-spacer");
    $(".btn-menu").addClass("btn-menu-toggle");
    // console.log($(".btn-menu-toggle").length === 1);
    // if ($(".btn-menu-toggle").length === 1) {
    //   $(".btn-menu").toggleClass("btn-menu-toggle");
    // }

    // if ($(".btn-menu").hasClass(".btn-menu-toggle"))
    $(".btn-menu").click(() => {
      timelineMenu
        .to(".menu-container", 0.5, {
          ease: Power2.easeInOut,
          opacity: 0,
          zIndex: -1
        })
        .staggerFrom(
          ".menu-container ul li",
          0.5,
          { x: 0, opacity: 0, ease: Expo.easeOut },
          0.3
        );
      timelineMenu.play();

      // timelineMenu.reverse();
    });
  });

  $(".btn-test").click(() => {
    const timelineFirstScreen = new TimelineMax({ paused: true });
    // e.preventDefault;

    timelineFirstScreen.to(".first-screen", 2, {
      top: 0,
      left: 0,
      ease: Power2.easeInOut
    });
    timelineFirstScreen.play();
    $(".row-menu").addClass("z");
    $(".menu-container").css("z-index", "-1 !important");

    console.log("click!!!");
  });

  if ($(".active").length == 1) {
    console.log("eshhh");
    $(".fscreen").css("height", "100vh");
    $(".row-menu").css("display", "none");
  }

  // TweenMax.defaultEase = Linear.easeOut;

  // new fullpage("#fullpage", {
  //   //options here
  //   autoScrolling: true,
  //   navigation: true,
  //   onLeave: (origin, destination, direction) => {
  //     const section = destination.item;
  //     const title = section.querySelector("h1");
  //     const tl = new TimelineMax({ delay: 0.5 });
  //     tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
  //     if (destination.index === 1) {
  //       const chairs = document.querySelectorAll(".chair");
  //       const description = document.querySelector(".description");
  //       tl.fromTo(chairs, 0.7, { x: "100%" }, { x: "-10%" })
  //         .fromTo(
  //           description,
  //           0.5,
  //           { opacity: 0, y: "50" },
  //           { y: "0", opacity: 1 }
  //         )
  //         .fromTo(chairs[0], 1, { opacity: 1 }, { opacity: 1 })
  //         .fromTo(chairs[1], 1, { opacity: 0 }, { opacity: 1 })
  //         .fromTo(chairs[2], 1, { opacity: 0 }, { opacity: 1 });
  //     }
  //   }
  // });

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

  // $("#fullpage").fullpage({
  //   //options here
  //   autoScrolling: true,
  //   scrollHorizontally: true,
  //   onLeave: (origin, destination, direction) => {
  //     const section = destination.item;
  //     const title = section.querySelector("h1");
  //     const tl = new TimelineMax({ delay: 0.5 });
  //     tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
  //     if (destination.index === 1) {
  //       const chairs = document.querySelectorAll(".chair");
  //       const description = document.querySelector(".description");
  //       tl.fromTo(chairs, 0.7, { x: "100%" }, { x: "-10%" })
  //         .fromTo(
  //           description,
  //           0.5,
  //           { opacity: 0, y: "50" },
  //           { y: "0", opacity: 1 }
  //         )
  //         .fromTo(chairs[0], 1, { opacity: 1 }, { opacity: 1 })
  //         .fromTo(chairs[1], 1, { opacity: 0 }, { opacity: 1 })
  //         .fromTo(chairs[2], 1, { opacity: 0 }, { opacity: 1 });
  //     }
  //   }
  // });

  // //methods
  // // $.fn.fullpage.setAllowScrolling(false);
});

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

// btnOpen.addEventListener("click", () => {
//   tl.play();
//   console.log("CLIQUEZ BANDE DE SALOPES!!!!!!!");
// });

// $(".box").each(function(index, element) {
//   //create a timeline for each box
//   var tl = new TimelineLite({ paused: true });
//   tl.to(this, 0.2, { width: 100 }).to(this, 0.2, { text: "active" });
//   //assign an animation property to the box
//   this.animation = tl;

//   $(this).click(function() {
//     if (currentAnimation) {
//       //if there is a currentAnimation reverse it
//       currentAnimation.reverse();
//     }
//     //play this box's animation
//     this.animation.play();
//     //set current animation to this box's animtion
//     currentAnimation = this.animation;
//   });
// })

// TweenMax.defaultEase = Linear.easeOut;

// jQuery(document).ready(function($) {

// });

// new fullpage("#fullpage", {
//   //options here
//   autoScrolling: true,
//   navigation: true,
// onLeave: (origin, destination, direction) => {
//   const section = destination.item;
//   const title = section.querySelector("h1");
//   const tl = new TimelineMax({ delay: 0.5 });
//   tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
//   if (destination.index === 1) {
//     const chairs = document.querySelectorAll(".chair");
//     const description = document.querySelector(".description");
//     tl.fromTo(chairs, 0.7, { x: "100%" }, { x: "-10%" })
//       .fromTo(description, 0.5, { opacity: 0, y: "50" }, { y: "0", opacity: 1 })
//       .fromTo(chairs[0], 1, { opacity: 1 }, { opacity: 1 })
//       .fromTo(chairs[1], 1, { opacity: 0 }, { opacity: 1 })
//       .fromTo(chairs[2], 1, { opacity: 0 }, { opacity: 1 });
//   }
// };
// });
