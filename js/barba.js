let FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    /**
     * This function is automatically called as soon the Transition starts
     * this.newContainerLoading is a Promise for the loading of the new container
     * (Barba.js also comes with an handy Promise polyfill!)
     */

    // As soon the loading is finished and the old page is faded out, let's fade the new page
    Promise.all([this.newContainerLoading, this.fadeOut()]).then(
      this.fadeIn.bind(this)
    );
  },

  fadeOut: function() {
    /**
     * this.oldContainer is the HTMLElement of the old Container
     */

    return $(this.oldContainer)
      .animate({ opacity: 0 })
      .promise();
  },

  fadeIn: function() {
    /**
     * this.newContainer is the HTMLElement of the new Container
     * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
     * Please note, newContainer is available just after newContainerLoading is resolved!
     */
    $(window).scrollTop(0);

    let _this = this;
    let $el = $(this.newContainer);

    $(this.oldContainer).hide();

    $el.css({
      visibility: "visible",
      opacity: 0
    });

    $el.animate({ opacity: 1 }, 400, function() {
      /**
       * Do not forget to call .done() as soon your transition is finished!
       * .done() will automatically remove from the DOM the old Container
       */

      _this.done();
    });
  }
});

/**
 * Next step, you have to tell Barba to use the new Transition
 */

Barba.Pjax.getTransition = function() {
  let tl = new TimelineMax();
  tl.to(".screen-wipe-top", 0.5, { y: "50%", repeat: 1, yoyo: true });
  tl.to(
    ".screen-wipe-bottom",
    0.5,
    { y: "-50%", repeat: 1, yoyo: true },
    "-=1"
  );

  return FadeTransition;
};

Barba.Pjax.start();

document.addEventListener("DOMContentLoaded", () => {
  $(".reload").click(() => {
    // document.location.href("/");
    // window.location.href = "/";
    console.log(window.location.href);

    let oldlink = document.getElementsByTagName(
      "link[href='./assets/output/barba.css']"
    );

    let newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", "./assets/output/main.css");

    oldlink.replaceChild(newlink, oldlink);
  });
});
