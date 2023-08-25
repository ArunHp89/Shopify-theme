var getSlug = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
$('body').addClass('page--' + getSlug);
// Product Tabs
$('ul.nav.nav-tabs a').click(function(e) {
    $($(this).attr('href')).addClass('active').siblings().removeClass('active')
    $("ul.nav.nav-tabs a.active").removeClass("active");
    $(this).addClass("active");
    e.preventDefault();
    e.stopPropagation();
    return false;
})
AOS.init({
  duration: 900,
})
// 
    var button = document.getElementById("mobile-show-contents");
    var navigation = document.getElementById("toc");
    var content = document.getElementById("page-cst_guide-content");

  //   button.addEventListener('click', ShowNavigation);
  //   var visible = false;

  //   function ShowNavigation() {
  //   if (visible == false){
  //       content.classList.add('move_up');
  //       navigation.classList.add('nav__active');
  //       button.classList.add('navigation__active');
  //       visible = true;
  //   } else {
  //       content.classList.remove('move_up');
  //       navigation.classList.remove('nav__active');
  //       button.classList.remove('navigation__active');
  //       visible = false;
  //   }
  // };  


