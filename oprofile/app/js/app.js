require('jquery.scrollex');

var app = {
  $header: $('.header__nav'),

  init: function() {
    console.log('init');

    $('.header').scrollex({
      enter: app.enterBanner,
      leave: app.leaveBanner
    });
  },

  enterBanner: function() {
    app.$header
      .removeClass('header__nav--fixed')
      .css('top', '') // On supprime le style en ligne sur la propriété top
    ;
  },

  leaveBanner: function() {
    app.$header
      .addClass('header__nav--fixed')
      .animate( // Transition avec jQuery
        { // l'objet des modifications des propriétés CSS
          top: 0
        },
        250 // la durée de l'animation en ms
      )
    ;
  }
};

$(app.init);
