(function ($) {
  var $el = {},
    _screenWidth,
    _screenHeight,
    _footerHeight;
  $(document).ready(domReady);
  function cacheDom() {
    $el.htmlNbody = $("body, html");
    $el.siteLoader = $(".site-loader");
    $el.header = $("header");
    $el.siteBody = $(".site-body");
    $el.footer = $("footer");
    $el.gotoTop = $("#gotoTop");
    $el.wrapper = $(".wrapper");
    $el.pushDiv = $el.wrapper.find(".push");
  }
  function domReady() {
    cacheDom();
    setEvents();
    handleSplashScreen();
    screenResize();
    $(".formidable .element input, .formidable .element textarea").each(
      function () {
        $(this).focusin(function () {
          $(this).parents(".input").prev("label").addClass("focus");
        });
        $(this).focusout(function () {
          if ($(this).val().length < 1) {
            $(this).parents(".input").prev("label").removeClass("focus");
          }
        });
      }
    );
  }
  function setEvents() {
    $(window)
      .load(handleWidgetsLoading)
      .resize(screenResize)
      .scroll(windowScroll);
    $el.header.find(".mobile-menu").on("click", handleMobileMenu);
    $el.gotoTop.click(function () {
      $("body,html").animate({ scrollTop: 0 });
    });
    $(".ie-overlay span").click(function () {
      $(".ie-overlay").fadeOut("slow");
    });
  }
  function screenResize() {
    _screenWidth = $(window).width();
    _screenHeight = $(window).height();
    _footerHeight = $el.footer.outerHeight();
    $el.wrapper.css("margin-bottom", -_footerHeight);
    $el.pushDiv.height(_footerHeight);
  }
  function windowScroll() {
    $el.gotoTop.toggleClass(
      "active",
      $(window).scrollTop() > _screenHeight / 2
    );
  }
  function handleMobileMenu() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
  }
  function handleSplashScreen() {
    $(".logo-middle").fadeIn(500);
    $el.siteLoader.delay(1500).fadeOut(500);
  }
  function handleWidgetsLoading() {}
  (function init() {
    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
      $("body").addClass("ios-device");
    }
    if (navigator.userAgent.match(/Android/i)) {
      $("body").addClass("android-device");
    }
    if (navigator.appVersion.indexOf("Win") != -1) {
      $("body").addClass("win-os");
    }
    if (navigator.appVersion.indexOf("Mac") != -1) {
      $("body").addClass("mac-os");
    }
    if (
      navigator.userAgent.indexOf("MSIE") !== -1 ||
      navigator.appVersion.indexOf("Trident/") > 0
    ) {
      $("html").addClass("ie10");
    }
    if (/Edge\/\d./i.test(navigator.userAgent)) {
      $("html").addClass("ieEdge");
    }
    if ($("html").hasClass("ie8")) {
      var imgPath = "/themes/theedge/images/";
      $("header .logo a img,.loading-screen img").attr(
        "src",
        imgPath + "logo.png"
      );
    }

  })();
})(jQuery);
function showFormErrors($form, errors) {
  if (
    !$form ||
    !($form instanceof jQuery) ||
    $form.length < 1 ||
    !errors ||
    errors.constructor !== Array ||
    errors.length < 1
  ) {
    return;
  }
  var $errors = $("<ul>").attr({ class: "ccm-error" });
  errors.forEach(function (error) {
    $errors.append($("<li>").text(error));
  });
  $form.before($errors);
}
function removeFormErrors($form) {
  if (!$form || !($form instanceof jQuery) || $form.length < 1) {
    return;
  }
  $form.prevAll(".ccm-error").remove();
}
var windowWidth = $(window).width();
if (windowWidth > 767) {
  var $window = $(window);
  var scrollTime = 1000;
  var scrollDistance = 300;
  $window.on("mousewheel DOMMouseScroll", function (event) {
    event.preventDefault();
    var delta =
      event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
    var scrollTop = $window.scrollTop();
    var finalScroll = scrollTop - parseInt(delta * scrollDistance);
    TweenMax.to($window, scrollTime, {
      scrollTo: { y: finalScroll, autoKill: true },
      ease: Power1.easeOut,
      autoKill: true,
      overwrite: 5,
    });
  });
}
$(window).load(function () {
  var types = ["DOMMouseScroll", "mousewheel"];
  if ($.event.fixHooks) {
    for (var i = types.length; i; ) {
      $.event.fixHooks[types[--i]] = $.event.mouseHooks;
    }
  }
  $.event.special.mousewheel = {
    setup: function () {
      if (this.addEventListener) {
        for (var i = types.length; i; ) {
          this.addEventListener(types[--i], handler, false);
        }
      } else {
        this.onmousewheel = handler;
      }
    },
    teardown: function () {
      if (this.removeEventListener) {
        for (var i = types.length; i; ) {
          this.removeEventListener(types[--i], handler, false);
        }
      } else {
        this.onmousewheel = null;
      }
    },
  };
  $.fn.extend({
    mousewheel: function (fn) {
      return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    unmousewheel: function (fn) {
      return this.unbind("mousewheel", fn);
    },
  });
  function handler(event) {
    var orgEvent = event || window.event,
      args = [].slice.call(arguments, 1),
      delta = 0,
      returnValue = true,
      deltaX = 0,
      deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    if (orgEvent.wheelDelta) {
      delta = orgEvent.wheelDelta / 120;
      
    }
    if (orgEvent.detail) {
      delta = -orgEvent.detail / 3;
   
    }
    deltaY = delta;
    if (
      orgEvent.axis !== undefined &&
      orgEvent.axis === orgEvent.HORIZONTAL_AXIS
    ) {
      deltaY = 0;
      deltaX = -1 * delta;
    }
    if (orgEvent.wheelDeltaY !== undefined) {
      deltaY = orgEvent.wheelDeltaY / 120;
    }
    if (orgEvent.wheelDeltaX !== undefined) {
      deltaX = (-1 * orgEvent.wheelDeltaX) / 120;
    }
    args.unshift(event, delta, deltaX, deltaY);
    return ($.event.dispatch || $.event.handle).apply(this, args);
  }

});
var windowWidth = $(window).width();
if (windowWidth > 767) {
  $.js = function (el) {
    return $("[data-js=" + el + "]");
  };
  var mainWrapper = $.js("main-wrapper");
  var sectionWrapper = $.js("sections-wrapper");
  var section = $.js("sections");
  var vW = $(window).width();
  mainWrapper.mousewheel(function (event, delta) {
    if ($(".mac-os").length > 0) {
      this.scrollLeft += delta * 2;
    } else {
      console.log("dddd")
      this.scrollLeft += delta * 40;
    }
    if (this.scrollLeft > 100) {
    }
    event.preventDefault();
  });
}
function setWidth() {
  var section = $.js("section");
  var totalWidth = 0;
  section.each(function () {
    totalWidth += parseInt($(this).width(), 10);
  });
  sectionWrapper.css("width", "" + (totalWidth + 70) + "px");
}
if (windowWidth > 767) {
  setWidth();
  $(window).on("resize", function () {
    setWidth();
  });
}
$(window).load(function () {
  setTimeout(function () {
    $(".flying-text.txt-1").css({ bottom: "22%", left: "10%" });
    $(".flying-text.txt-2").css({ top: "22%", left: "20%" });
    $(".flying-text.txt-3").css({ bottom: "18%", left: "33%" });
    $(".flying-text.txt-4").css({ top: "18%", left: "60%" });
    $(".flying-text.txt-5").css({ bottom: "22%", right: "20%" });
    $(".flying-text.txt-6").css({ top: "22%", right: "10%" });
  }, 200);
  setTimeout(function () {
    $("#section-2 .slide-top .left").css({ transform: "scale(0,1)" });
    $("#section-1 .hero").fadeIn();
    $("header").css({ top: "0" });
    $(".rotate-txt").css({ bottom: "0", opacity: "1" });
    $(".play-btn").css({ transform: "scale(1)" });
  }, 1000);
  setTimeout(function () {
    $("#section-2 .slide-bottom .left").css({ transform: "scale(0,1)" });
  }, 1500);
  setTimeout(function () {
    $(".play-btn span").css({ left: "0", opacity: "1" });
  }, 1200);
  setTimeout(function () {
    $(".heading-animated-text").addClass("rightin");
  }, 1500);
  setTimeout(function () {
    $("#section-2 .slide-top img").css({ transform: "scale(1.1)" });
  }, 2600);
  setTimeout(function () {
    $("#section-2 .slide-bottom img").css({ transform: "scale(1.1)" });
  }, 2800);
  var windowWidth = $(window).width();
  if (windowWidth > 767) {
    var controller = new ScrollMagic.Controller({ vertical: false });
   
  } else {
    console.log("sssss")
    var controller = new ScrollMagic.Controller({ vertical: true });
  }

  var touchDevice = navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/);
  if (!touchDevice) {
    var tween1 = TweenLite.to(
      "#section-1",
      1,
      { x: 400, z: 0.01 },
      { x: "-=200", z: 0.01, ease: Linear.easeNone }
    );
    var tween2 = TweenLite.to("#section-2 .top-mask", 1, {
      top: "-100%",
      ease: Linear.easeNone,

    });
    var tween4 = TweenLite.to("#section-2 .bottom-mask", 1, {
      bottom: "-100%",
      ease: Linear.easeNone,
    });
    var tween3 = TweenLite.to("#section-2 .slide-top .right", 1, {
      width: 0,
      ease: Linear.easeNone,
    });
    var tween5 = TweenLite.to("#section-2 .slide-bottom .right", 1, {
      width: 0,
      ease: Linear.easeNone,
    });
    var tween6 = TweenLite.to("#section-2 .slide-top img", 1, {
      scale: 1.3,
      ease: Linear.easeNone,
    });
    var tween7 = TweenLite.to("#section-2 .slide-bottom img", 1, {
      scale: 1.3,
      ease: Linear.easeNone,
    });
    if (windowWidth > 767) {
      var tween8 = TweenLite.to("#section-1 .heading-animated-text", 1, {
        left: "-=300",
        ease: Linear.easeNone,
      });
    }
    var tween9 = TweenLite.to("#section-2 .heading-animated-text span", 1, {
      right: 0,
      ease: Linear.easeNone,
    });
    var tween10 = TweenLite.to("#section-2 .heading-animated-text a", 1, {
      left: 0,
      ease: Linear.easeNone,
    });
    var tween11 = TweenLite.from("#section-3 img", 1, { ease: Linear.easeNone });
    
    var tween12 = TweenLite.from("#section-3 .heading-animated-text span", 3, {
      right: 0,

      ease: Linear.easeNone,
    });
    var tween13 = TweenLite.from("#section-3 .heading-animated-text a", 1, {
      left: 0,
      ease: Linear.easeNone,
    });
    var tween14 = TweenLite.from("#section-4 img", 1, { ease: Linear.easeNone });
    var tween15 = TweenLite.from("#section-4 .heading-animated-text span", 1, {
      right: 0,
      ease: Linear.easeNone,
    });
    var tween16 = TweenLite.from("#section-4 .heading-animated-text a", 1, {
      left: 0,
      ease: Linear.easeNone,
    });
    var tween17 = TweenLite.from("#section-5 img", 1, { ease: Linear.easeNone });
    var tween18 = TweenLite.from("#section-5 .heading-animated-text span", 1, {
      right: 0,
      ease: Linear.easeNone,
    });
    var tween19 = TweenLite.from("#section-5 .heading-animated-text a", 1, {
      left: 0,
      ease: Linear.easeNone,
    });

    var tween20 = TweenLite.to("#section-7", 1, { ease: Linear.easeNone });
    //new

    var tween21 = TweenLite.to("#section-6 img", 1, { ease: Linear.easeNone });
    var tween22 = TweenLite.to("#section-6 .heading-animated-text span", 1, {
      right: 0,
      ease: Linear.easeNone,
    });
    var tween23 = TweenLite.to("#section-6 .heading-animated-text a", 1, {
      left: 0,
      ease: Linear.easeNone,
    });

    var active_1 = TweenLite.to("#section-2", 1, { ease: Linear.easeNone });
    var active_2 = TweenLite.to("#section-3", 1, { ease: Linear.easeNone });
    var active_3 = TweenLite.to("#section-4", 1, { ease: Linear.easeNone });
    var active_4 = TweenLite.to("#section-5", 1, { ease: Linear.easeNone });
    var active_5 = TweenLite.to("#section-6", 1, { ease: Linear.easeNone });
  }

  var scene1 = new ScrollMagic.Scene({
    triggerElement: "#section-1 img",
    triggerHook: 0.1,
    duration: 1000,
    offset: 500,
  })
    .setTween(tween1)
    .addTo(controller);


  // var scene2 = new ScrollMagic.Scene({
  //   triggerElement: "#section-2",
  //   duration: "60%",
  //   triggerHook: 0.8,

  //   offset: 400,
  // })
  //   .setTween(tween2)
  //   .addTo(controller);


  // var scene3 = new ScrollMagic.Scene({
  //   triggerElement: "#section-2",
  //   duration: "40%",
  //   triggerHook: 0.7,
  // })
  //   .setTween(tween3)
  //   .addTo(controller);


  // var scene4 = new ScrollMagic.Scene({
  //   triggerElement: "#section-2",
  //   duration: "40%",
  //   triggerHook: 0.7,
  //   offset: 400,
  // })
  //   .setTween(tween4)
  //   .addTo(controller);


  // var scene5 = new ScrollMagic.Scene({
  //   triggerElement: "#section-2",
  //   duration: "40%",
  //   triggerHook: 0.7,
  // })
  //   .setTween(tween5)
  //   .addTo(controller);


  // var scene6 = new ScrollMagic.Scene({
  //   triggerElement: "#section-2 img",
  //   duration: "40%",
  //   triggerHook: 0.7,
  // })
  //   .setTween(tween6)
  //   .addTo(controller);


  // var scene7 = new ScrollMagic.Scene({
  //   triggerElement: "#section-2 img",
  //   duration: "50%",
  //   triggerHook: 0.7,
  // })
  //   .setTween(tween7)
  //   .addTo(controller);


  if (windowWidth > 767) {
    var scene8 = new ScrollMagic.Scene({
      triggerElement: "#section-1",
      triggerHook: 0.4,
      duration: 300,
      offset: 1000,
    })
      .setTween(tween8)
      .addTo(controller);
  }
  var scene9 = new ScrollMagic.Scene({
    triggerElement: "#section-2",
    triggerHook: 0.7,
    duration: "20%",
    offset: 200,
  })
    .setTween(tween9)
    .addTo(controller);
  var scene10 = new ScrollMagic.Scene({
    triggerElement: "#section-2",
    triggerHook: 0.7,
    duration: "20%",
    offset: 200,
  })
    .setTween(tween10)
    .addTo(controller);
  var scene11 = new ScrollMagic.Scene({
    triggerElement: "#section-3",
    triggerHook: 0.7,
    duration: "20%",
    offset: 200,
  })
    .setTween(tween11)    
    .addTo(controller);

  var scene12 = new ScrollMagic.Scene({
    triggerElement: "#section-3",
    triggerHook: 0.1,
    duration: "20%",
    offset: 200,
  })
    .setTween(tween12)
    .addTo(controller);

   
  var scene13 = new ScrollMagic.Scene({
    triggerElement: "#section-3",
    triggerHook: 0.1,
    duration: "20%",
    offset: 200,
  })
    .setTween(tween13)
    .addTo(controller);
    scene13.reverse();
  var scene14 = new ScrollMagic.Scene({
    triggerElement: "#section-4",
    triggerHook: 0.1,
    duration: "20%",
    offset: 200,
  })
    .setTween(tween14)
    
  var scene15 = new ScrollMagic.Scene({
    triggerElement: "#section-4",
    triggerHook: 0.1,
    duration: "20%",
    offset: 200,
  })
    .setTween(tween15)
    .addTo(controller);
  var scene16 = new ScrollMagic.Scene({
    triggerElement: "#section-4",
    triggerHook: 0.1,
    duration: "20%",
    offset: 200,
  })
    .setTween(tween16)
    .addTo(controller);

  var scene17 = new ScrollMagic.Scene({
    triggerElement: "#section-5",
    triggerHook: 0.1,
    duration: "20%",
  })
    .setTween(tween17)
    .addTo(controller);

  var scene18 = new ScrollMagic.Scene({
    triggerElement: "#section-5",
    triggerHook: 0.1,
    duration: "20%",
  })
    .setTween(tween18)
    .addTo(controller);


  var scene19 = new ScrollMagic.Scene({
    triggerElement: "#section-5",
    triggerHook: 0.1,
    duration: "20%",
  })
    .setTween(tween19)
    .addTo(controller);

  var scene20 = new ScrollMagic.Scene({
    triggerElement: "#section-6",
    triggerHook: 0.7,
    duration: "20%",
  })
    .setTween(tween21)
    .addTo(controller);

    var scene21 = new ScrollMagic.Scene({
        triggerElement: "#section-6",
        triggerHook: 0.7,
        duration: "20%",
      })
        .setTween(tween22)
        .addTo(controller);

        var scene22 = new ScrollMagic.Scene({
            triggerElement: "#section-6",
            triggerHook: 0.7,
            duration: "20%",
          })
            .setTween(tween23)
            .addTo(controller);

  var scene23 = new ScrollMagic.Scene({
    triggerElement: "#section-2",
    duration: "100%",
    triggerHook: 0.5,
  })
    .setClassToggle("#section-2", "active")
    .setTween(active_1)
    .addTo(controller);


  var scene24 = new ScrollMagic.Scene({
    triggerElement: "#section-3",
    duration: "100%",
    triggerHook: 0.5,

  })
    .setClassToggle("#section-3", "active")
    .setTween(active_2)
    .addTo(controller);


  var scene25 = new ScrollMagic.Scene({
    triggerElement: "#section-4",
    duration: "100%",
    triggerHook: 0.5,
  })
    .setClassToggle("#section-4", "active")
    .setTween(active_3)
    .addTo(controller);


  var scene26 = new ScrollMagic.Scene({
    triggerElement: "#section-5",
    duration: "100%",
    triggerHook: 0.5,
  })
    .setClassToggle("#section-5", "active")
    .setTween(active_4)
    .addTo(controller);

  var scene27 = new ScrollMagic.Scene({
    triggerElement: "#section-6",
    duration: "100%",
    triggerHook: 0.5,
  })
  .setClassToggle("#section-6", "active")
  .setTween(active_5)
  .addTo(controller);

var scene30 = new ScrollMagic.Scene({
  triggerElement: "#section-7",
  triggerHook: 0.5,
  duration: "100%",
  offset: 1000,
})
    .setClassToggle("#section-7", "active")
    .setTween(tween20)
    .addTo(controller);



  jarallax(document.querySelectorAll(".hero-video"));
  $(".scroll-down").on("click", function () {
    $("html, body").animate(
      { scrollTop: $("#section-2").offset().top + 300 },
      1000
    );
  });
  var span = $("#section-2 .heading-animated-text span").first().innerHeight();

  var headingContainer = span * 2;
  if ($(".mac-os").length > 0) {
    $("#section-1 .heading-animated-text").css("height", headingContainer - 50);
  } else {
    $("#section-1 .heading-animated-text").css("height", headingContainer);
  }
  // var myvid = $(".hero-video video")[0];
  // mainWrapper.mousewheel(function (event, delta) {
  //   if (this.scrollLeft > 300) {
  //     myvid.pause();
  //   } else {
  //     myvid.play();
  //   }
  // }, 100);
  event.preventDefault();
});
$(document).ready(function () {
  if ($(".ios-device").length > 0 || $(".android-device").length > 0) {
    $(".hero-video").remove();
    $(".hero img.jarallax-img").css("display", "block !important");
  } else {
    $(".hero img.jarallax-img").hide();
  }
});

