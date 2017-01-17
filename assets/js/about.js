var hdvn_pos, hdxm_pos, hdoto_pos, quymo_pos, nam2015_pos, nam2014_pos, nam2013_pos, nam2012_pos, nam2011_pos, fixedls_pos, block2_pos, footer_pos;
var tl1 = new TimelineLite();
var tl2 = new TimelineLite();
var tl3 = new TimelineLite();
var tl4 = new TimelineLite();
var tl5 = new TimelineLite();
var tl6 = new TimelineLite();
var lastScrollTop = 0;
var lastScrollTop2 = 0;

var wHeight = $(window).height();

$(window).load(function(){
    if($('#about-trangchu').is(":visible")){
        block2_pos = $('.block2').offset().top - wHeight + 50;
    }

    if($('#about-gioithieu').is(":visible")){
        fixed_pos = $('.fixed-mn-left').offset().top;
        hdvn_pos = $('.image-hdvn').offset().top;
        hdxm_pos = $('.image-hdxm').offset().top;
        hdoto_pos = $('.image-hdoto').offset().top - wHeight + 50;
        quymo_pos = $('.image-quymo').offset().top - wHeight + 50;
        footer_pos = $('#footer').offset().top - 560;
    }

    if($('#about-lichsu').is(":visible")){
        footer_pos = $('#footer').offset().top - 360;
        fixedls_pos = $('.menu-fixed-left').offset().top;
        nam2015_pos = $('.nam2015').offset().top;
        nam2014_pos = $('.nam2014').offset().top;
        nam2013_pos = $('.nam2013').offset().top;
        nam2012_pos = $('.nam2012').offset().top;
        nam2011_pos = $('.nam2011').offset().top;
    }
})

function Page(){
    var self= this;

    this.init= function() {
        this.fixedMenu();

        if($('#about-trangchu').is(":visible")){
            this.scrollRevealtrangchu();
        }

        if($('#about-gioithieu').is(":visible")){
            this.scrollReveal();
            this.arcodion();
            this.clickMenu();
        }

        if($('#about-lichsu').is(":visible")){
            this.clickTimeline();
            this.scrollTimeline();
        }
    };

    this.fixedMenu= function(){
        $(window).on('scroll', function(){
            scroll_top = $(window).scrollTop();
            
            if (scroll_top > lastScrollTop){
                if($('#header-pc').is(':hover') != 1){
                    $('body').addClass('menu-hide');
                }
            } else if (scroll_top < lastScrollTop){
                $("body").removeClass('menu-hide');
            }    
            lastScrollTop = scroll_top;
        });        
    }

    this.scrollRevealtrangchu= function(){
        tl5.staggerTo(".block1 .block", 0.8, {opacity: 1, 'margin-top': 0}, 0.2);
        $(window).on('scroll', function(){
            scroll_top = $(window).scrollTop();
            if(scroll_top > block2_pos){
                tl6.staggerTo(".block2 .block", 0.8, {opacity: 1, 'margin-top': 0}, 0.2);
            }
        });
    };

    this.scrollReveal = function(){
        setTimeout(function(){
            tl1.to('.image-hdvn', 0.8,{opacity: 1, 'margin-top': 0});
            tl2.to('.image-hdxm', 0.8,{delay: 0.6, opacity: 1, 'margin-top': 0});
            tl2.to('.danhsach', 0.8,{opacity: 1}, '=-0.2');
        },300)
        $(window).on('scroll', function(){
            hdvn_pos = $('.image-hdvn').offset().top;
            hdxm_pos = $('.image-hdxm').offset().top;
            hdoto_pos = $('.image-hdoto').offset().top - wHeight + 50;
            quymo_pos = $('.image-quymo').offset().top - wHeight + 50;
            footer_pos = $('#footer').offset().top - 560;
            scroll_top = $(window).scrollTop();
            if(scroll_top > hdoto_pos){
                tl3.to('.image-hdoto', 0.8,{opacity: 1, 'margin-top': 0});
            }
            if(scroll_top > quymo_pos){
                tl4.to('.image-quymo', 0.8,{opacity: 1, 'margin-top': 0});
                setTimeout(function(){
                    if($('.image-quymo').hasClass('not-ac')){

                        TweenMax.to('.count',0.3,{opacity:1});
                        $('.block1-num').each(function () {
                            $(this).prop('Counter',0).animate({
                                Counter: $(this).text()
                            }, {
                                duration: 2000,
                                easing: 'swing',
                                step: function (now) {
                                    $(this).text(Math.ceil(now));
                                }
                            });
                        });

                    
                            $('.block3-num').each(function () {
                                $(this).prop('Counter',0).animate({
                                    Counter: $(this).text()
                                }, {
                                    duration: 2000,
                                    easing: 'swing',
                                    step: function (now) {
                                        $(this).text(Math.ceil(now));
                                    }
                                });
                            });
                        

                        
                            $('.block2-num').each(function () {
                                $(this).prop('Counter',0).animate({
                                    Counter: $(this).text()
                                }, {
                                    duration: 2000,
                                    easing: 'swing',
                                    step: function (now) {
                                        $(this).text(now.toFixed(3));
                                    }
                                });
                            });
                        

                        
                            $('.block4-num').each(function () {
                                $(this).prop('Counter',0).animate({
                                    Counter: $(this).text()
                                }, {
                                    duration: 2000,
                                    easing: 'swing',
                                    step: function (now) {
                                        $(this).text(now.toFixed(1));
                                    }
                                });
                            });
                        

                        
                            $('.block5-num').each(function () {
                                $(this).prop('Counter',0).animate({
                                    Counter: $(this).text()
                                }, {
                                    duration: 2000,
                                    easing: 'swing',
                                    step: function (now) {
                                        $(this).text(now.toFixed(3));
                                    }
                                });
                            });
                        

                        $('.image-quymo').removeClass('not-ac');
                    }
                }, 800)
            }
            if(scroll_top >= fixed_pos && scroll_top < quymo_pos + wHeight - 378){
                $('.fixed-mn-left').removeClass('anchor');
                $('.fixed-mn-left').addClass('fixed');
            }else if(scroll_top == 0){
                // $('.fixed-mn-left').removeClass('fixed');
            }else if(scroll_top >= quymo_pos + wHeight - 242){
                $('.fixed-mn-left').removeClass('fixed');
                $('.fixed-mn-left').addClass('anchor');
            }
            if($(window).scrollTop() >= 0 && $(window).scrollTop() < (hdxm_pos - 200))
            {
                $('.fixed-mn-left li.ac').removeClass('ac');
                $('.fixed-mn-left li.mn-vn').addClass('ac');
            }else if($(window).scrollTop() >= (hdxm_pos - 200) && $(window).scrollTop() < (hdoto_pos + wHeight - 200))
            {
                $('.fixed-mn-left li.ac').removeClass('ac');
                $('.fixed-mn-left li.mn-xm').addClass('ac');
            }else if($(window).scrollTop() >= (hdoto_pos + wHeight - 250) && $(window).scrollTop() < (quymo_pos + wHeight - 200))
            {
                $('.fixed-mn-left li.ac').removeClass('ac');
                $('.fixed-mn-left li.mn-oto').addClass('ac');
            }
        });
    };

    this.arcodion= function(){
        // $('.block').click(function(event) {
        //     $this = $(this);
        //     if($this.hasClass('ac')){
        //         $this.find('.cont').stop().slideUp(300);
        //         setTimeout(function(){
        //             $this.removeClass('ac');
        //         },300);             
        //     }else{
        //         $this.parent('.danhsach').find('.cont').stop().slideUp(300);
        //         $this.find('.cont').stop().slideDown(300);
        //         setTimeout(function(){
        //             $this.parent('.danhsach').find('.block.ac').removeClass('ac');
        //             $this.addClass('ac');
        //         },300)              
        //     }
        // });
    }

    this.clickMenu= function(){
        $('.mn-vn').click(function(event) {
            $('html, body').animate({scrollTop:0}, 'slow');
        });
        $('.mn-xm').click(function(event) {
            hdxm_pos = $('.image-hdxm').offset().top - 80;
            setTimeout(function(){
                $('html, body').animate({scrollTop:hdxm_pos}, 'slow'); 
            }, 200)
        });
        $('.mn-oto').click(function(event) {
            hdoto_pos = $('.image-hdoto').offset().top - 80;
            setTimeout(function(){
                $('html, body').animate({scrollTop:hdoto_pos}, 'slow');   
            }, 200)
        });
    }

    this.clickTimeline= function(){
        $('.time-line .tl15').click(function(event) {
            $('html, body').animate({scrollTop:0}, 'slow');
        });
        $('.time-line .tl14').click(function(event) {
            nam2014_pos = $('.nam2014').offset().top;
            $('html, body').animate({scrollTop:nam2014_pos}, 'slow');
        });
        $('.time-line .tl13').click(function(event) {
            nam2013_pos = $('.nam2013').offset().top;
            $('html, body').animate({scrollTop:nam2013_pos}, 'slow');
        });
        $('.time-line .tl12').click(function(event) {
            nam2012_pos = $('.nam2012').offset().top;
            $('html, body').animate({scrollTop:nam2012_pos}, 'slow');
        });
        $('.time-line .tl11').click(function(event) {
            nam2011_pos = $('.nam2011').offset().top;
            $('html, body').animate({scrollTop:nam2011_pos}, 'slow');
        });
    }

    this.scrollTimeline= function(){
        $(window).on('scroll', function(){
            scroll_top = $(window).scrollTop();
            if(scroll_top >= fixedls_pos && scroll_top < nam2011_pos - 385){
                $('.menu-fixed-left').removeClass('anchor-mn-left');
                $('.menu-fixed-left').addClass('fixed-mn-left');
                $('.time-line').removeClass('anchor-tl');
                $('.time-line').addClass('fixed-tl');
            }else if(scroll_top == 0){
                // $('.menu-fixed-left').removeClass('fixed-mn-left');
                // $('.time-line').removeClass('fixed-tl');
            }else if(scroll_top >= nam2011_pos - 270){
                $('.menu-fixed-left').removeClass('fixed-mn-left');
                $('.menu-fixed-left').addClass('anchor-mn-left');
                $('.time-line').removeClass('fixed-tl');
                $('.time-line').addClass('anchor-tl');
            }
            if(scroll_top >= 0 && scroll_top < (nam2014_pos - 100)){
                $('.time-line li.ac').removeClass('ac');
                $('.time-line li.tl15').addClass('ac');
                if (scroll_top > lastScrollTop2){
                    $('.time-line').removeClass('ac11 ac12 ac13 ac14');
                    $('.time-line').addClass('ac15');
                    setTimeout(function(){
                        $('.time-line').removeClass('acb11 acb12 acb13 acb14');
                        $('.time-line').addClass('acb15');
                    },300);
                } else if (scroll_top < lastScrollTop2){
                    $('.time-line').removeClass('acb11 acb12 acb13 acb14');
                    $('.time-line').addClass('acb15');
                    setTimeout(function(){
                        $('.time-line').removeClass('ac11 ac12 ac13 ac14');
                        $('.time-line').addClass('ac15');
                    },300);
                }  

            }else if(scroll_top >= (nam2014_pos - 100) && scroll_top < (nam2013_pos - 100)){
                $('.time-line li.ac').removeClass('ac');
                $('.time-line li.tl14').addClass('ac');

                if (scroll_top > lastScrollTop2){
                    $('.time-line').removeClass('ac11 ac12 ac13');
                    $('.time-line').addClass('ac14');
                    setTimeout(function(){
                        $('.time-line').removeClass('acb11 acb12 acb13');
                        $('.time-line').addClass('acb14');
                    },300);
                } else if (scroll_top < lastScrollTop2){
                    $('.time-line').removeClass('acb11 acb12 acb13');
                    $('.time-line').addClass('acb14');
                    setTimeout(function(){
                        $('.time-line').removeClass('ac11 ac12 ac13');
                        $('.time-line').addClass('ac14');
                    },300);
                }

            }
            else if(scroll_top >= (nam2013_pos - 100) && scroll_top < (nam2012_pos - 100)){
                $('.time-line li.ac').removeClass('ac');
                $('.time-line li.tl13').addClass('ac');
                
                if (scroll_top > lastScrollTop2){
                    $('.time-line').removeClass('ac11 ac12');
                    $('.time-line').addClass('ac13');
                    setTimeout(function(){
                        $('.time-line').removeClass('acb11 acb12');
                        $('.time-line').addClass('acb13');
                    },300);
                } else if (scroll_top < lastScrollTop2){
                    $('.time-line').removeClass('acb11 acb12');
                    $('.time-line').addClass('acb13');
                    setTimeout(function(){
                        $('.time-line').removeClass('ac11 ac12');
                        $('.time-line').addClass('ac13');
                    },300);
                }

            }
            else if(scroll_top >= (nam2012_pos - 100) && scroll_top < (nam2011_pos - 100)){
                $('.time-line li.ac').removeClass('ac');
                $('.time-line li.tl12').addClass('ac');

                if (scroll_top > lastScrollTop2){
                    $('.time-line').removeClass('ac11');
                    $('.time-line').addClass('ac12');
                    setTimeout(function(){
                        $('.time-line').removeClass('acb11');
                        $('.time-line').addClass('acb12');
                    },300);
                } else if (scroll_top < lastScrollTop2){
                    $('.time-line').removeClass('acb11');
                    $('.time-line').addClass('acb12');
                    setTimeout(function(){
                        $('.time-line').removeClass('ac11');
                        $('.time-line').addClass('ac12');
                    },300);
                }
                
            }
            else if(scroll_top >= (nam2011_pos - 100)){
                $('.time-line li.ac').removeClass('ac');
                $('.time-line li.tl11').addClass('ac');

                if (scroll_top > lastScrollTop2){
                    $('.time-line').addClass('ac11');
                    setTimeout(function(){
                        $('.time-line').addClass('acb11');
                    },300);
                } else if (scroll_top < lastScrollTop2){
                    $('.time-line').addClass('acb11');
                    setTimeout(function(){
                        $('.time-line').addClass('ac11');
                    },300);
                }
                
            }
            lastScrollTop2 = scroll_top;
        });
    };
    
}

Page = new Page;
$(window).load(function(){
    Page.init();
});
