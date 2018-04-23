
/*顶部导航 active */
$('.top-nav-link .nav li').click(function(){
    $('.top-nav-link .nav li').removeClass('active');
    $(this).addClass('active')
})

/*侧栏导航 active */
$('.left-nav li').click(function(){
    $('.left-nav li').removeClass('left-nav-active');
    $(this).addClass('left-nav-active');
})


