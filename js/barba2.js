Barba.Pjax.start();
Barba.Prefetch.init();

let transitionAnimation = Barba.BaseTransition.extend({
  start: function() {
    Promise.all([this.newContainerLoading, this.startTransition()]).then(
      this.fadeIn.bind(this)
    );
  },

  startTransition: function() {
    let transitionPromise = new Promise(function(resolve) {
      let outTransition = new TimelineMax();

      outTransition

        .to(".title", 1, { y: -50, autoAlpha: 0, ease: Power2.easeOut })
        // .to("#barber-wrapper", 1, { autoAlpha: 0, ease: Power2.easeOut })
        .set(".color-wipe", { display: "block" }, "-=0.7")
        .staggerFromTo(
          ".color-wipe",
          1,
          { x: "0%" },
          { x: "100%", ease: Expo.easeOut },
          2,
          "-=0.7"
        )

        .to(".loader", 1.5, {
          autoAlpha: 1,
          onComplete: function() {
            resolve();
          }
        })

        .staggerFromTo(
          ".color-wipe",
          1.5,
          { x: "100%" },
          { x: "200%", ease: Expo.easeIn },
          0.2,
          "-=0.5"
        )
        .set(".color-wipe", { display: "none" });
    });

    return transitionPromise;
  },

  fadeIn: function() {
    $(window).scrollTop(0);

    let _this = this;
    let $el = $(this.newContainer);

    TweenMax.set($(this.oldContainer), { display: "none" });
    TweenMax.set($el, { visibility: "visible", opacity: 0 });

    TweenMax.to(".loader", 1, { y: -50, autoAlpha: 0, ease: Expo.easeOut });
    TweenMax.fromTo(
      ".title",
      1.5,
      { y: 30, autoAlpha: 0 },
      { delay: 0.8, autoAlpha: 1, ease: Expo.easeOut }
    );

    TweenMax.fromTo(
      ".title-barba",
      2,
      {
        transform: "translateX(-40vh)",
        opacity: 0,
        ease: Power2.easeInOut
      },
      {
        transform: "translateX(38vh)",
        opacity: 1,
        ease: Power2.easeInOut,
        delay: 0.5
      }
    );

    TweenMax.fromTo(
      "#barba-wrapper",
      2,
      {
        autoAlpha: 0,
        ease: Power2.easeInOut
      },
      {
        autoAlpha: 1,
        ease: Power2.easeInOut
      }
    );

    TweenMax.to(".sax", 4, {
      left: "80%",
      opacity: 1,
      transform: "rotate(180deg)",
      ease: Power2.easeInOut,
      delay: 1
    });

    TweenMax.to($el, 0.1, {
      opacity: 1,
      onComplete: function() {
        _this.done();

        //////////////////////////////////// Disabled reload on the same page
        if (window.location.href.match("page4")) {
          // $(".page4").attr("disabled", true);
          $(".page4").click(e => {
            e.preventDefault();
            // alert("You're already on the page 4");
          });
        }
        if (window.location.href.match("page5")) {
          $(".page5").click(e => {
            e.preventDefault();
          });
        }

        let controller = new ScrollMagic.Controller();

        let timeline = new TimelineMax({
          onComplete: function() {
            // $(".blur").addClass("hide");
            // $(".btn-test").css("display", "block");
            console.log("onComplete");
            $(".scrollmagic-pin-spacer").css("height", "unset !important");
          },
          onStart: function() {
            // $(".blur").removeClass("hide");
          }
        });
        timeline
          .fromTo(
            "#four",
            10,
            {
              bottom: "-70vh"
            },
            { y: -933, bottom: -675 },
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
              y: 130
              // height: "105vh"
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
          .to(
            ".btn-concert, .btn-goodcase, .btn-contact",
            6,
            {
              opacity: 1
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
      }
    });
  }
});

Barba.Pjax.getTransition = function() {
  /**
   * Here you can use your own logic!
   * For example you can use different Transition based on the current page or link...
   */
  // if (window.location.href.match("page4")) {
  //   if ($(".page4").click()) {
  //     return transitionAnimation;
  //   }
  // }
  // if (window.location.href.match("page5")) {
  //   if ($(".page5").click()) {
  //     return transitionAnimation;
  //   }
  // }
  return transitionAnimation;
};
