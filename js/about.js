!(function (t) {
  var e,
    o,
    i = {};
  function n() {
    t(window).width(),
      (e = t(window).height()),
      (o = i.footer.outerHeight()),
      i.wrapper.css("margin-bottom", -o),
      i.pushDiv.height(o);
  }
  function s() {
    i.gotoTop.toggleClass("active", t(window).scrollTop() > e / 2);
  }
  function l() {
    t(this).hasClass("active")
      ? t(this).removeClass("active")
      : t(this).addClass("active");
  }
  function a() {}
  t(document).ready(function () {
    (i.htmlNbody = t("body, html")),
      (i.siteLoader = t(".site-loader")),
      (i.header = t("header")),
      (i.siteBody = t(".site-body")),
      (i.footer = t("footer")),
      (i.gotoTop = t("#gotoTop")),
      (i.wrapper = t(".wrapper")),
      (i.pushDiv = i.wrapper.find(".push")),
      t(window).load(a).resize(n).scroll(s),
      i.header.find(".mobile-menu").on("click", l),
      i.gotoTop.click(function () {
        t("body,html").animate({ scrollTop: 0 });
      }),
      t(".ie-overlay span").click(function () {
        t(".ie-overlay").fadeOut("slow");
      }),
      t(".logo-middle").fadeIn(500),
      i.siteLoader.delay(1500).fadeOut(500),
      n(),
      t(".formidable .element input, .formidable .element textarea").each(
        function () {
          t(this).focusin(function () {
            t(this).parents(".input").prev("label").addClass("focus");
          }),
            t(this).focusout(function () {
              t(this).val().length < 1 &&
                t(this).parents(".input").prev("label").removeClass("focus");
            });
        }
      );
  }),
    (function () {
      if (
        (navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
          t("body").addClass("ios-device"),
        navigator.userAgent.match(/Android/i) &&
          t("body").addClass("android-device"),
        -1 != navigator.appVersion.indexOf("Win") &&
          t("body").addClass("win-os"),
        -1 != navigator.appVersion.indexOf("Mac") &&
          t("body").addClass("mac-os"),
        (-1 !== navigator.userAgent.indexOf("MSIE") ||
          0 < navigator.appVersion.indexOf("Trident/")) &&
          t("html").addClass("ie10"),
        /Edge\/\d./i.test(navigator.userAgent) && t("html").addClass("ieEdge"),
        t("html").hasClass("ie8"))
      ) {
        t("header .logo a img,.loading-screen img").attr(
          "src",
          "/themes/theedge/images/logo.png"
        );
      }
      if (t("html").hasClass("ie9")) {
        var e = t(
          '<div class="no-support"> You are using outdated browser. Please <a href="https://browsehappy.com/" target="_blank">update</a> your browser or <a href="https://browsehappy.com/" target="_blank">install</a> modern browser like Google Chrome or Firefox.<div>'
        );
        t("body").prepend(e);
      }
    })();
})(jQuery),
  (function ($) {
    function numberRoller(e) {
      var t = $(".roller-title-number-" + e).attr("data-min"),
        o = $(".roller-title-number-" + e).attr("data-max"),
        i = $(".roller-title-number-" + e).attr("data-delay");
      numberRoll(
        e,
        t,
        o,
        $(".roller-title-number-" + e).attr("data-increment"),
        (1e3 * i) / (o - t)
      );
    }
    function numberRoll(slno, min, max, increment, timeout) {
      min <= max
        ? ($(".roller-title-number-" + slno).html(min),
          (min = parseInt(min) + parseInt(increment)),
          setTimeout(function () {
            numberRoll(
              eval(slno),
              eval(min),
              eval(max),
              eval(increment),
              eval(timeout)
            );
          }, timeout))
        : $(".roller-title-number-" + slno).html(max);
    }
    $(window).on("load", function () {
      $(document).scrollzipInit(), $(document).rollerInit();
    }),
      $(window).on("load scroll resize", function () {
        $(".numscroller").scrollzip({
          showFunction: function () {
            numberRoller($(this).attr("data-slno"));
          },
          wholeVisible: !1,
        });
      }),
      ($.fn.scrollzipInit = function () {
        $("body").prepend(
          "<div style='position:fixed;top:0px;left:0px;width:0;height:0;' id='scrollzipPoint'></div>"
        );
      }),
      ($.fn.rollerInit = function () {
        var e = 0;
        $(".numscroller").each(function () {
          e++,
            $(this).attr("data-slno", e),
            $(this).addClass("roller-title-number-" + e);
        });
      }),
      ($.fn.scrollzip = function (e) {
        var o = $.extend(
          {
            showFunction: null,
            hideFunction: null,
            showShift: 0,
            wholeVisible: !1,
            hideShift: 0,
          },
          e
        );
        return this.each(function (e, t) {
          return (
            $(this).addClass("scrollzip"),
            $.isFunction(o.showFunction) &&
              !$(this).hasClass("isShown") &&
              $(window).outerHeight() +
                $("#scrollzipPoint").offset().top -
                o.showShift >
                $(this).offset().top +
                  (o.wholeVisible ? $(this).outerHeight() : 0) &&
              $("#scrollzipPoint").offset().top +
                (o.wholeVisible ? $(this).outerHeight() : 0) <
                $(this).outerHeight() + $(this).offset().top - o.showShift &&
              ($(this).addClass("isShown"), o.showFunction.call(this)),
            $.isFunction(o.hideFunction) &&
              $(this).hasClass("isShown") &&
              ($(window).outerHeight() +
                $("#scrollzipPoint").offset().top -
                o.hideShift <
                $(this).offset().top +
                  (o.wholeVisible ? $(this).outerHeight() : 0) ||
                $("#scrollzipPoint").offset().top +
                  (o.wholeVisible ? $(this).outerHeight() : 0) >
                  $(this).outerHeight() + $(this).offset().top - o.hideShift) &&
              ($(this).removeClass("isShown"), o.hideFunction.call(this)),
            this
          );
        });
      });
  })(jQuery),
  $(document).ready(function () {
    var e = $(window).width();
    if (767 < e) {
      var t = new ScrollMagic.Controller({ vertical: !0 }),
        o = TweenMax.fromTo(
          "#section-img",
          1,
          { left: 0 },
          { left: "-=40%", ease: Linear.easeNone }
        );
      new ScrollMagic.Scene({
        triggerElement: "#about",
        duration: 300,
        offset: 0,
        triggerHook: 0,
      })
        .setPin("#section-img")
        .setTween(o)
        .addTo(t);
    }
    if (767 < e && e < 1700) {
      var i = $("#section-img"),
        n = $("#section-img img").height(),
        s = $(".top-stopper");
      if ((console.log(n), i.offset())) {
        var l = i.innerHeight(),
          a = i.offset().top,
          r = s.offset().top - 1e3 - l - 0,
          d = r + 0;
        $(window).scroll(function () {
          var e = $(window).scrollTop();
          r < e
            ? i.css({ position: "absolute", top: d })
            : a < e + 0
            ? i.css({ position: "fixed", top: 0 })
            : i.css({ position: "absolute", top: "initial" });
        });
      }
    }
    AOS.init({
      offset: 120,
      delay: 0,
      easing: "ease",
      duration: 1e3,
      disable: !1,
      once: !1,
      startEvent: "DOMContentLoaded",
    });
  });
