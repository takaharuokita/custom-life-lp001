
$(function(){
  var setAnim = $('.animate');
  $(window).on('scroll resize',function(){
    var setHeight = 300;
    setAnim.each(function(){
      var setThis = $(this),
          setElm = $(this).find('.animate-elm');
      elmTop = setThis.offset().top,
      scrTop = $(window).scrollTop(),
      winHeight = $(window).height();
      if (scrTop > elmTop - winHeight + setHeight){
        setElm.addClass('show');
      }
    });
  });
});
