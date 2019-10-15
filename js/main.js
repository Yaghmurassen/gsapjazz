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
    // .to(
    //   "#four",
    //   6,
    //   {
    //     y: -700
    //   },
    //   "-=6"
    // )
    .fromTo(
      "#three",
      6,
      {
        y: "74%",
        autoAlpha: 1
      },
      { y: -250, ease: Power1.easeInOut },
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
    triggerElement: "first-section",
    duration: "100%",
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
        $("#first-section").hide();
        $("body,html").animate(
          {
            scrollTop: 0 // Scroll to top of body
          },
          500
        );
        console.log(" ca hide le container sans pression ?");
      }
    });
    // e.preventDefault;

    timelineFirstScreen.to(".first-screen", 0.5, {
      top: 0,
      left: 0,
      ease: Power2.easeInOut,
      scrollTo: 100
    });
    timelineFirstScreen.play();

    $(".btn-reverse").click(() => {
      timelineFirstScreen.reverse();
      $("#first-section").show();
      $(".btn-test").hide();
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

$(".btn-test").click(() => {
  const timelineFirstScreen = new TimelineMax({ paused: true });
  // e.preventDefault;

  timelineFirstScreen.to(".first-screen", 2, {
    top: 0,
    left: 0,
    ease: Power2.easeInOut
  });
  timelineFirstScreen.play();
  console.log("click!!!");
});

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
// });
