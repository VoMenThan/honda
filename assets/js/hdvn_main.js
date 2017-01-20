var wHeight = $(window).height();

var mySwiper, mobileSwiper;

var swiper, scroll_top, product_row, swiper_hp_pc;

var tl = new TimelineLite();

var tl_tab = new TimelineLite();

var wWidth, headerHeight;

var lastScrollTop = 0;

var resizeTimer;


// bao

var tl5 = new TimelineLite();

var tl6 = new TimelineLite();

var footer_pos, fixedls_pos;

var lastScrollTop2 = 0;

var yearIndex;

// end bao


/* start Nguyen */

var isAnimating = true;

var headerHeight, pHeight;

/* end Nguyen */

function Page() {

    var self = this;

    this.jqueryEvent = function(){

        /* popup login */
      $('.login').click(function(){
            $('.pupup-login').css('display','block');
        });
      $('.btn-lose').click(function(){
            $('.pupup-login').css('display','none');
        });

    /* popup search advance */
        $('.advanced-search-text').click(function () {
            $('.pupup-search-advance').css('display','block');
        });
        $('.btn-search').click(function () {
            $('.pupup-search-advance').css('display','none');
        });

    //    File upload
        $('.file-drop').change(function(){
            console.log(111);
            var $this = $(this);
            var name = this.files[0].name;
            var size = this.files[0].size;
            if(size < 1024){
                $('.upload-file .size').text(size+'byte');
            }else if(size > 1048576) {
                var size = this.files[0].size/1048576;
                size = Math.round(size * 100) / 100;
                $('.upload-file .size').text(size+' Mb');
            }else{
                var size = this.files[0].size/1024;
                size = Math.round(size * 100) / 100;
                $('.upload-file .size').text(size+' Kb');
            }

            $('.upload-file').addClass('has-file');
            $('.upload-file .name').text(name);

        })
    //    END File upload

    /* popup thong bao */
        $('.btn-edit').click(function () {
            $('.backgroud-popup').css('display','block');
        });
        $('.close-popup-request').click(function () {
            $('.backgroud-popup').css('display','none');
        });

        $( ".date-picker" ).datepicker();

        $('.date-pic').click(function(){
                var $this = $(this);
                $this.prev().focus();
        })

        // ( function( factory ) {
        //     if ( typeof define === "function" && define.amd ) {
        //
        //         // AMD. Register as an anonymous module.
        //         define( [ "../widgets/datepicker" ], factory );
        //     } else {
        //
        //         // Browser globals
        //         factory( jQuery.datepicker );
        //     }
        // }( function( datepicker ) {
        //
        //     datepicker.regional.vi = {
        //         closeText: "Đóng",
        //         prevText: "&#x3C;Trước",
        //         nextText: "Tiếp&#x3E;",
        //         currentText: "Hôm nay",
        //         monthNames: [ "Tháng 1,", "Tháng 2,", "Tháng 3,", "Tháng 4,", "Tháng 5,", "Tháng 6,",
        //             "Tháng 7,", "Tháng 8,", "Tháng 9,", "Tháng 10,", "Tháng 11,", "Tháng 12," ],
        //         dayNamesShort: [ "CN", "T2", "T3", "T4", "T5", "T6", "T7" ],
        //         dayNamesMin: [ "CN", "T2", "T3", "T4", "T5", "T6", "T7" ],
        //         weekHeader: "Tu",
        //         dateFormat: "dd/mm/yy",
        //         firstDay: 0,
        //         isRTL: false,
        //         showMonthAfterYear: false,
        //         yearSuffix: "" };
        //     datepicker.setDefaults( datepicker.regional.vi );
        //
        //     return datepicker.regional.vi;
        //
        // } ) );

    };

    this.loadAjaxImg = function () {

        $('.load_ajax_img').each(function (e) {

            $(this).attr('src', $(this).data('src')).attr('alt', $(this).data('alt'));

        });

    };
    this.popupContact = function () {
        $('.fancyboxContact').fancybox({
            padding: 0,
            margin: 20,
            fitToView: false,
            maxWidth: '100%',
            autoSize: false,
            autoHeight: true,
            closeBtn: false,
        });
    }


    this.init = function () {
        self.jqueryEvent();

        var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
        if (isSafari) {

            $(window).on('scroll', function () {

                scroll_top = $(window).scrollTop();

                if (scroll_top > lastScrollTop && scroll_top > 117) {

                    if ($('#header-pc').is(':hover') != 1) {

                        $('body').addClass('menu-hide');

                    }

                } else if (scroll_top < lastScrollTop) {

                    $("body").removeClass('menu-hide');

                }

                lastScrollTop = scroll_top;

            });
        }

        Page.scaleImage();

        this.backToTop();

        this.toggleSubMenuMB();

        this.toggleMenuMB();

        this.calcHeight();

        this.scrollReveal();

        this.mouseDown();

        this.initSwiper();

        $(window).load(function () {
            //swiper_hp_pc.destroy(true,true);
            //this.initSwiper();
        })

        this.popupContact();

        this.selectChange();

        this.detectMouseHoverSlide();

        this.fixedMenu();

        this.searchBox();

        this.threeRound();

        /* Nguyen define function */

        this.stopSideMenu();

        this.accordion();

        this.qmhdScroll();

        this.aboutClick();

        this.viewMoreClick();

        /* end Nguyen define function */


        $('.sel-change-url').on('change', function () {

            location.href = $(this).val();

        });


// bao

        $(window).load(function () {


            Page.scaleImage();


            if ($('#about-trangchu').is(":visible")) {

                block2_pos = $('.block2').offset().top - wHeight + 50;

                this.scrollRevealtrangchu();

            }


            if ($('#about-lichsu').is(":visible")) {

                footer_pos = $('#footer').offset().top - 360;

                fixedls_pos = $('.fixed-mn-left').offset().top;

                this.clickTimeline();

                this.scrollTimeline();

                this.yearSwiper();

            }


            if ($('.sidebar-menu').length > 0) {
                pHeight = $('.stop-side-menu').offset().top - 117;

                $('.sidebar-menu').css({height: pHeight});

            }

            if ($('.center-content .left-contentx').length > 0) {

                pHeight = $('.stop-side-menu').offset().top - 117;

                $('.center-content .left-contentx').css({height: pHeight});

            }

            if ($('.right-timeline').length > 0) {

                pHeight = $('.stop-side-menu').offset().top - 117;

                $('.right-timeline').css({height: pHeight});

            }

        })


// end bao

    };


// bao


    this.backToTop = function () {

        $(document).on('click', '#back-to-top', function () {

            $("html, body").animate({scrollTop: 0}, 'slow');

        })

        function btt() {

            wWidth = $(window).width();

            if (wWidth <= 767) {

                wHeight = $(window).height();

                $(window).on('scroll', function () {

                    scroll_top = $(window).scrollTop();

                    if (scroll_top >= wHeight) {

                        $('#back-to-top').fadeIn(300);

                    }

                    if (scroll_top < wHeight) {

                        $('#back-to-top').fadeOut(300);

                    }

                })

            }

            if (wWidth > 767) {

                $('#back-to-top').fadeOut(300);

            }

        }

        btt();

        $(window).resize(function () {

            btt();

        })

    }


    this.update_bootpag = function () {

        var li_last = $('.bootpag li:last');


        if ($('.bootpag li.active').next().attr('style') == 'display: none;') {

            li_last.addClass('disabled');

        } else if (li_last.prev().hasClass('active') && li_last.data('lp') < 5) {

            li_last.addClass('disabled');

        }

    };


    this.scaleImage = function () {

        function scaleThemAll() {

            setTimeout(function () {

                $('.scaled-image').each(function () {

                    var ratio1w = $(this).parent().width();

                    var ratio1h = $(this).parent().height();

                    var ratio2w = $(this).width();

                    var ratio2h = $(this).height();

                    var ratio1 = ratio1w / ratio1h;

                    var ratio2 = ratio2w / ratio2h;

                    var imgW2, imgH2, marTop, marLeft;


                    $(this).css({

                        'position': 'absolute',

                        'top': '0%',

                        'left': '0%',

                        'display': 'block',

                    });


                    if (ratio2 < ratio1) {

                        $(this).css({

                            'width': '100%',

                            'height': 'auto',

                        });

                        imgW2 = $(this).width();

                        imgH2 = $(this).height();

                        marTop = -1 * (imgH2 / 2);

                        marLeft = -1 * (imgW2 / 2);

                        $(this).css({

                            'top': '50%',

                            'left': '50%',

                            'margin-top': marTop,

                            'margin-left': marLeft,

                        });

                    }

                    if (ratio2 > ratio1) {

                        $(this).css({

                            'width': 'auto',

                            'height': '100%',

                        });

                        imgW2 = $(this).width();

                        imgH2 = $(this).height();

                        marTop = -1 * (imgH2 / 2);

                        marLeft = -1 * (imgW2 / 2);

                        $(this).css({

                            'top': '50%',

                            'left': '50%',

                            'margin-top': marTop,

                            'margin-left': marLeft,

                        });

                    }

                });

            }, 300);

        }


        scaleThemAll();


        var countervar = 0;
        setInterval(function () {
            if (++countervar < 3)
                scaleThemAll();
        }, 1000);


        $(window).resize(function () {

            scaleThemAll();

        });

    }


    this.searchResult = function () {

        $(document).on('click', '.support', function () {

            var $this = $(this).find('.short-cont');

            if (!$this.hasClass('activated')) {

                $('.support .activated').removeClass('activated');

                $this.addClass('activated');

                $('.support .short-cont').slideDown();

                $this.slideUp();

                $('.support .full-cont').slideUp();

                $this.next('.full-cont').slideDown();

            } else {

                $('.support .activated').removeClass('activated');

                $this.slideDown();

                $this.next('.full-cont').slideUp();
            }

        })


        $('.wrap-slide-album .close-album-hinh-anh').click(function () {

            $('.wrap-slide-album').fadeOut(300);

            $('.wrap-slide-album.video-album-pop .iframe-wrp').html('');

        })


        $(document).on('click', '.pop-video', function (e) {

            e.preventDefault();

            $('.wrap-slide-album.video-album-pop').fadeIn(300);

            var link = $(this).data('link-youtube');

            location.hash = 'id-youtube=' + link;

            $('.wrap-slide-album.video-album-pop .iframe-wrp').html("<iframe width='100%' height='100%' src='https://www.youtube.com/embed/" + link + "?autoplay=1&showinfo=0&rel=0'></iframe>");

        });

        $(document).on('click', '.video-cover img', function (e) {

            e.preventDefault();

            $('.wrap-slide-album.video-album-pop').fadeIn(300);

            var link = $(this).parent().parent().find('.pop-video').data('link-youtube');

            location.hash = 'id-youtube=' + link;

            $('.wrap-slide-album.video-album-pop .iframe-wrp').html("<iframe width='100%' height='100%' src='https://www.youtube.com/embed/" + link + "?autoplay=1&showinfo=0&rel=0'></iframe>");

        });


    }


    this.OpenSlideAlbumHinh = function () {

        console.log('called open album hinh');

        $('.wrap-slide-album').fadeIn(300);

        $('.wrap-slide-album .iframe-wrp').fadeOut(300);


        var swiperHinh = new Swiper('.swiper-container.album-hinh-anh', {

            nextButton: '.album-hinh-anh .swiper-button-next',

            prevButton: '.album-hinh-anh .swiper-button-prev',

            spaceBetween: 20

        });

    };


    this.trigger_popup_news = function () {

        var hash = location.hash;

        if (hash.indexOf("id-youtube") > -1) {

            var id = hash.replace('#id-youtube=', '');

            if (id != '') {

                $('.wrap-slide-album.video-album-pop').fadeIn(100);

                $('.wrap-slide-album.video-album-pop .iframe-wrp').html("<iframe width='100%' height='100%' src='https://www.youtube.com/embed/" + id + "?autoplay=1&showinfo=0&rel=0'></iframe>");

            }

        } else if (hash.indexOf("post-id-gallery") > -1) {

            var post_id = hash.replace('#post-id-gallery=', '');

            if (post_id != '') {

                $.ajax({

                    url: ajaxurl,

                    method: 'POST',

                    data: {

                        'action': 'ajax_data',

                        'security': ajax_nonce,

                        'module': 'tin-tuc',

                        'shortcode': "[load_detail_gallery post-id=" + post_id + "]"

                    },

                    success: function (data) {

                        // hide loading + show content

                        Page.hide_paging_loading();


                        $('.album-hinh-anh').html(data);


                        Page.OpenSlideAlbumHinh();


                        Page.load_img_quality();


                        loading_ajax = false;

                    },

                    error: function (errorThrown) {
                        loading_ajax = false;
                    }

                });

            }

        }


        location.hash = '';

    };


    this.news = function () {

        $(document).on('click', '.tab-header a', function () {

            var href = $(this).attr('href');

            location.href = href;

        });


        $(document).on('click', '.video-news', function () {

            $('.wrap-slide-album.video-album-pop').fadeIn(300);

            var link = $(this).attr('data-link-youtube');

            location.hash = 'id-youtube=' + link;

            $('.wrap-slide-album.video-album-pop .iframe-wrp').html("<iframe width='100%' height='100%' src='https://www.youtube.com/embed/" + link + "?autoplay=1&showinfo=0&rel=0'></iframe>");

        });


        $(document).on('click', '.news-item.video', function () {

            $('.wrap-slide-album.video-album-pop').fadeIn(300);

            var link = $(this).find('a').data('href');

            location.hash = 'id-youtube=' + link;

            $('.wrap-slide-album.video-album-pop .iframe-wrp').html("<iframe width='100%' height='100%' src='https://www.youtube.com/embed/" + link + "?autoplay=1&showinfo=0&rel=0'></iframe>");

        });


        $('.wrap-slide-album .close-album-hinh-anh').click(function () {

            $('.wrap-slide-album').fadeOut(300);

            $('.wrap-slide-album .iframe-wrp').fadeIn(300);

            $('.wrap-slide-album.video-album-pop .iframe-wrp').html('');

        })


        function fullImage() {

            $('#news-wrap a').each(function () {

                var ratio1w = $(this).width();

                var ratio1h = $(this).height();

                var ratio2w = $(this).find('img').width();

                var ratio2h = $(this).find('img').height();

                var ratio1 = ratio1w / ratio1h;

                var ratio2 = ratio2w / ratio2h;

                if (ratio2 < ratio1) {

                    $(this).find('img').removeClass('tall');

                    $(this).find('img').addClass('wide');

                }

                if (ratio2 > ratio1) {

                    $(this).find('img').removeClass('wide');

                    $(this).find('img').addClass('tall');

                }

            })

        }


        /*fullImage();*/


        $(window).resize(function () {

            /*fullImage();*/

        })


        var swiper = new Swiper('.tab-header', {

            slidesPerView: 'auto',

            paginationClickable: true,

            spaceBetween: 0,

            prevButton: '.swiper-nav .swiper-button-prev',

            nextButton: '.swiper-nav .swiper-button-next',

            onInit: function () {
                if ($('.swiper-nav .swiper-button-prev').hasClass('swiper-button-disabled') && $('.swiper-nav .swiper-button-next').hasClass('swiper-button-disabled')) {
                    $('.swiper-nav').css({
                        'display': 'none'
                    });
                    $('.tabs .tab-header .swiper-wrapper').addClass('center-cate');
                }
            }

        });


        setTimeout(function () {

            var toVal = $('.tab-header ul li .active').parent().index();

            swiper.slideTo(toVal, 400, false);

        }, 300)


        $('.news-item').matchHeight();


    };


    this.dknt = function () {

        $(document).on('keypress', '.email-dknt', function (e) {

            if (e.which == 13) {

                submit_form_dknt();

            }

        });


        $(document).on('click', '.btn-dknt', function () {

            submit_form_dknt();

        });


        function submit_form_dknt() {

            var chk, obj_msg = $('.msg-dknt');

            obj_msg.removeClass('msg-done').html('');


            var tax = parseInt($('.tax').val());

            var email = $.trim($('.email-dknt').val());


            chk = $('.email-dknt').validate({'name': 'Email', 'type': 'email', 'obj_msg': obj_msg});

            if (!chk)return false;


            if (tax < 1) {

                obj_msg.html('Bạn vui lòng chọn mục muốn nhận tin');

                return false;

            }


            /*Show loading*/


            $.ajax({

                url: ajaxurl,

                method: 'POST',

                data: {

                    'action': 'submit_form_dknt',

                    'security': ajax_nonce,

                    'email': email,

                    'tax': tax,

                },

                success: function (data) {

                    var data = JSON.parse(data);


                    if (data.st == 1) {

                        $('.email-dknt').val('');

                        $('.tax').val(0);

                        obj_msg.addClass('msg-done').html(data.msg);


                        setTimeout(function () {

                            obj_msg.removeClass('msg-done').html('');

                        }, 10000);

                    } else {

                        obj_msg.html(data.msg);

                    }


                    /*Hide loading*/


                },

                error: function (errorThrown) {
                }

            });

        }

    };


    this.load_popup_gallery = function () {

        $(document).on('click', '.album-news, .pop-hinh-anh', function (e) {

            if (loading_ajax) {

                return false;

            }


            loading_ajax = true;


            Page.show_paging_loading();


            var post_id = $(this).data('post-id');


            $.ajax({

                url: ajaxurl,

                method: 'POST',

                data: {

                    'action': 'ajax_data',

                    'security': ajax_nonce,

                    'module': 'tin-tuc',

                    'shortcode': "[load_detail_gallery post-id=" + post_id + "]"

                },

                success: function (data) {

                    // hide loading + show content

                    Page.hide_paging_loading();


                    $('.album-hinh-anh').html(data);


                    Page.OpenSlideAlbumHinh();


                    Page.load_img_quality();


                    loading_ajax = false;


                    location.hash = 'post-id-gallery=' + post_id;

                },

                error: function (errorThrown) {
                    loading_ajax = false;
                }

            });

        });

    };


    this.show_paging_loading = function () {

        var timePos = Math.floor(Math.random() * 30) + 40;
        var timePosx = timePos + "%";
        var timeDur = timePos * 10;

        $('.pagination-loading-2').fadeIn(20);

        $('.pagination-loading-2').animate({
            width: timePosx
        }, timeDur)

    };


    this.hide_paging_loading = function () {

        $('.pagination-loading-2').animate({
            width: '100%'
        }, 300)

        setTimeout(function () {
            $('.pagination-loading-2').fadeOut(20);
        }, 300)

        setTimeout(function () {
            $("html, body").animate({scrollTop: 0}, 'slow');
        }, 400)


        this.update_bootpag();

    };


    this.show_paging_loading_2 = function () {

        $('.pagination-loading').fadeIn(300);

    };


    this.hide_paging_loading_2 = function () {

        $('.pagination-loading').fadeOut(300);

        $("html, body").animate({scrollTop: 0}, 'slow');

        this.update_bootpag();

    };


    this.support = function () {

        $('.form-wrp').mCustomScrollbar({
            theme: "dark-thin",
        });

        wWidth = $(window).width();

        if (wWidth >= 768) {

            wHeight = $(window).height();

            ratio = wHeight / 768;


            if (wHeight < 650) {

                $('.form-wrp').css({

                    "-webkit-transform": "scale(" + ratio + ")",

                    "-moz-transform": "scale(" + ratio + ")",

                    "-ms-transform": "scale(" + ratio + ")",

                    "-o-transform": "scale(" + ratio + ")",

                    "transform": "scale(" + ratio + ")"

                })

            } else if (wHeight >= 650) {

                $('.form-wrp').css({

                    "-webkit-transform": "scale(1)",

                    "-moz-transform": "scale(1)",

                    "-ms-transform": "scale(1)",

                    "-o-transform": "scale(1)",

                    "transform": "scale(1)"

                })

            }

        }


        $('.danhsach .block').click(function () {

            var current = $(this);

            setTimeout(function () {

                console.log(222);

                var toVal = current.children('.heading').offset().top - 122;

                console.log(toVal);

                $("html, body").animate({scrollTop: toVal}, 'slow');

            }, 320);

        })


        self.accordion();

        wHeight = $(window).height();

        $('.send-question').click(function () {

            $('#asking-form').fadeIn(300);

            $('body').addClass('noscroll');

        });


        $('.close-pop').click(function () {

            $('.msg-questions').removeClass('msg-done').html('');

            $('#asking-form').fadeOut(300);

            $('body').removeClass('noscroll');

            setTimeout(function () {

                $('#asking-form').css({

                    'display': 'none'

                })

            }, 300);

        });


        $('#sel-term-support').on('change', function () {

            location.href = $(this).val();

        });

        var mhx = $('.main-list li.active .sub-list li').length;
        $('.main-list li.active .sub-list').css({
            'max-height': mhx * 50,
        })

        $(document).on('click', '.main-list > li.has-child > i', function () {
            mhx = $(this).parent().find('.sub-list li').length;

            if (($(this).parent().hasClass('active')) == true) {
                $(this).parent().removeClass('active');
                $(this).parent().find('.sub-list').animate({
                    'max-height': 0,
                }, 300)
            } else {
                $('.main-list > li.active > .sub-list > li.active').removeClass('active');
                $('.main-list > li.active').find('.sub-list').animate({
                    'max-height': 0,
                }, 300)
                $('.main-list > li.active').removeClass('active');
                $(this).parent().addClass('active');
                $(this).parent().find('.sub-list').animate({
                    'max-height': mhx * 50,
                }, 300)
            }
        })

        $(document).on('click', '.main-list > li.no-child > i', function () {
            var href = $(this).parent().find('.link-to').attr("href");
            location.href = href;
        });


    };


    this.social_activities = function () {

        // banner slider

        if ($("#hdxh-slider").length > 0) {

            if ($('#hdxh-slider .swiper-container .swiper-slide').length > 1) {

                swiper = new Swiper('#hdxh-slider .swiper-container', {

                    autoplay: 3000,

                    pagination: '#hdxh-slider .swiper-pagination',

                    paginationClickable: true,

                    nextButton: '#hdxh-slider .next-button',

                    prevButton: '#hdxh-slider .prev-button',

                    speed: 500,

                    slidesPerView: 1,

                    autoplayDisableOnInteraction: false,

                    loop: true,

                });

            } else if ($('#hdxh-slider .swiper-container .swiper-slide').length = 1) {
                $('#hdxh-slider .nav-buttons').fadeOut(100);
                $('#hdxh-slider .swiper-pagination').fadeOut(100);
            }

        }


        if ($("#hdxh-slider-mob").length > 0) {

            if ($('#hdxh-slider-mob .swiper-container .swiper-slide').length > 1) {

                swiper = new Swiper('#hdxh-slider-mob .swiper-container', {

                    autoplay: 3000,

                    pagination: '#hdxh-slider-mob .swiper-pagination',

                    paginationClickable: true,

                    nextButton: '#hdxh-slider-mob .next-button',

                    prevButton: '#hdxh-slider-mob .prev-button',

                    speed: 500,

                    slidesPerView: 1,

                    autoplayDisableOnInteraction: false,

                    loop: true,

                });

            } else if ($('#hdxh-slider-mob .swiper-container .swiper-slide').length = 1) {
                $('#hdxh-slider-mob .nav-buttons').fadeOut(100);
                $('#hdxh-slider-mob .swiper-pagination').fadeOut(100);
            }

        }


        // cal img width - height

        function calcHeightImg() {

            var valH = $('.img-wrp').width();

            wWidth = window.innerWidth;

            if (wWidth <= 1024 && wWidth >= 751) {

                $('.img-wrp').css({

                    'height': valH

                })

                $('.img-wrp').parent().find('.item').css({

                    'height': valH

                })

            }

            if (wWidth <= 767) {

                $('.img-wrp').css({

                    'height': 'auto',

                })

                $('.img-wrp').parent().find('.item').css({

                    'height': 'auto'

                })

            }

            else if (wWidth > 1024) {

                $('.img-wrp').parent().find('.item').css({

                    'height': '100%'

                })
            }

        }


        // calcHeightImg();

        $(window).resize(function () {

            // calcHeightImg();

        })

    };


    this.social_activities_list = function () {

        self.stopSideMenu();

        $('.main-list .block').matchHeight();

    };


    $(window).load(function () {


        this.yearSwiper = function () {

            var swiper;

            function blabla() {

                wHeight = $(window).height();

                swiper = new Swiper('.right-content .swiper-container', {

                    nextButton: '.swiper-button-next',

                    prevButton: '.swiper-button-prev',

                    spaceBetween: 0,

                    simulateTouch: false,

                    speed: 500,

                    onInit: function () {

                        if ($(window).width() <= 1024) {

                            $('#about-lichsu').css({'min-height': wHeight});

                            $('.year').css({'display': 'none'});

                            $('.year.ac').css({'display': 'block'});

                        } else if ($(window).width() > 1024) {

                            $('.year').css({'display': 'block'});

                        }

                    },

                    onSlideChangeStart: function () {

                        swiper.lockSwipes();

                        $('.swiper-slide .overlay').show(0);

                        $('.select-year').val(swiper.activeIndex);

                        $('.year.ac').fadeOut(490);

                        setTimeout(function () {

                            $('.year.ac').removeClass('ac');

                        }, 490)

                    },

                    onSlideChangeEnd: function () {

                        $('.year').eq(swiper.activeIndex).fadeIn(500);

                        setTimeout(function () {

                            $('.year').eq(swiper.activeIndex).addClass('ac');

                        }, 500)

                        setTimeout(function () {

                            swiper.unlockSwipes();

                            $('.swiper-slide .overlay').hide(0);

                        }, 520)

                    },

                });

            }


            blabla();


            $(window).resize(function () {

                if ($(window).width() <= 1024) {

                    $('.year').css({'display': 'none'});

                    $('.year.ac').css({'display': 'block'});

                } else if ($(window).width() > 1024) {

                    $('.year').css({'display': 'block'});

                }

            })


            $(".select-year").on('change', function () {

                var slide_or_not = $(this).find('option:selected').attr('slide-val');

                var the_chosen_one = $(this).find('option:selected').attr('value');

                if (slide_or_not == 'nam')

                    swiper.slideTo(the_chosen_one);

                else

                    location.href = the_chosen_one;

            });

        }


        this.scrollRevealtrangchu = function () {

            //$(window).load(function(){

            tl5.staggerTo(".block1 .block", 0.8, {opacity: 1, 'margin-top': 0}, 0.2);

            scroll_top = $(window).scrollTop();

            if (scroll_top > block2_pos) {

                tl6.staggerTo(".block2 .block", 0.8, {opacity: 1, 'margin-top': 0}, 0.2);

            }

            $(window).on('scroll', function () {

                scroll_top = $(window).scrollTop();

                if (scroll_top > block2_pos) {

                    tl6.staggerTo(".block2 .block", 0.8, {opacity: 1, 'margin-top': 0}, 0.2);

                }

            });

            //})

        };


        this.scrollTimeline = function (e) {

            var num = $('.time-line li').length;

            $('.time-line .gray-1').css({

                'height': num * 39 - 29

            })

            function runthis() {

                var x1 = $('.time-line').offset().top;

                var x2 = $('.time-line').height() - 35;

                var x3;

                if ($('body').hasClass('menu-hide')) {
                    x3 = x1 + x2 - 50;
                } else {
                    x3 = x1 + x2 - 115;
                }

                if ($(window).width() > 1024) {

                    if ($('.time-line').length > 0) {

                        var scrollPos = $(document).scrollTop();

                        $('.time-line li a').each(function () {

                            var currLink = $(this);

                            var refElement = $(currLink.attr("href"));

                            if (x3 >= refElement.position().top && x3 <= refElement.position().top + refElement.height()) {

                                if (currLink.parent().hasClass("ac") != 1) {

                                    var prevNum = $('.time-line li.ac').index() - 3;

                                    $('.time-line li').removeClass("ac");

                                    currLink.parent().addClass("ac");

                                    var currNum = $('.time-line li.ac').index() - 3;

                                    if (prevNum < currNum) {

                                        $('.time-line .red').animate({

                                            'height': currNum * 39 + 10

                                        }, 200);

                                        $('.time-line .gray-2').animate({

                                            'height': currNum * 39

                                        }, 350);

                                    } else if (prevNum > currNum) {

                                        $('.time-line .red').animate({

                                            'height': currNum * 39 + 10

                                        }, 350);

                                        $('.time-line .gray-2').animate({

                                            'height': currNum * 39

                                        }, 200);

                                    }

                                }

                            }

                        });

                    }

                }

            }

            $(document).on("mousewheel DOMMouseScroll", function () {

                runthis();

            });

            $(document).keydown(function (e) {

                switch (e.which) {

                    case 38: // up

                        runthis();

                        break;


                    case 40: // down

                        runthis();

                        break;


                    default:
                        return; // exit this handler for other keys

                }

            });

        };


        this.clickTimeline = function () {

            $('.time-line li a').click(function () {

                if ($(this).parent().index() == 0) {

                    $('html, body').animate({

                        scrollTop: 0

                    }, 500);

                } else {

                    $('html, body').animate({

                        scrollTop: $($.attr(this, 'href')).offset().top - 117

                    }, 500);

                }

                var currLink = $(this);

                var refElement = $(currLink.attr("href"));

                if (currLink.parent().hasClass("ac") != 1) {

                    var prevNum = $('.time-line li.ac').index() - 3;

                    $('.time-line li').removeClass("ac");

                    currLink.parent().addClass("ac");

                    var currNum = $('.time-line li.ac').index() - 3;

                    if (prevNum < currNum) {

                        $('.time-line .red').animate({

                            'height': currNum * 39 + 10

                        }, 200);

                        $('.time-line .gray-2').animate({

                            'height': currNum * 39

                        }, 350);

                    } else if (prevNum > currNum) {

                        $('.time-line .red').animate({

                            'height': currNum * 39 + 10

                        }, 350);

                        $('.time-line .gray-2').animate({

                            'height': currNum * 39

                        }, 200);

                    }

                }


                return false;

            });

        }


    });


// end bao

    this.toggleMenuMB = function () {


        $('#header-mb .menu-icon').click(function () {

            if ($(this).hasClass('active')) {

                $(this).removeClass('active');

                $(this).addClass('inactive');

                $('html').css({'overflow': 'visible'})

                setTimeout(function () {

                    $("#header-mb").removeClass('open');

                }, 300);


                $('#header-mb .menu-mb').stop().slideUp(300);

            } else {

                $(this).addClass('active');

                $(this).removeClass('inactive');

                $('html').css({'overflow': 'hidden'})

                $("#header-mb").addClass('open');

                $('#header-mb .menu-mb').stop().slideDown(300);

            }


        });

    };

    this.toggleSubMenuMB = function () {

        $('.list-holder h3 .click-to-expand').click(function () {

            $this = $(this).parent().parent();

            console.log($this.html());

            if ($this.hasClass('active')) {

                $this.find('div').stop().slideUp(300);

                setTimeout(function () {

                    $this.removeClass('active');

                }, 300);

                return false;


            } else {

                $('.list-holder.active div').stop().slideUp(300);

                $this.find('div').stop().slideDown(300);

                setTimeout(function () {

                    $('.list-holder.active').removeClass('active');

                    $this.addClass('active');

                }, 300);

                return false;

            }

        });

    };

    this.calcHeight = function () {

        if ($('#homepage-slider').length > 0) {

            if ($(window).width() > 980) {

                wHeight = $(window).height();

                if ($(window).width() > 980) {

                    headerHeight = $('#header-pc').height();

                } else {

                    headerHeight = $('#header-mb').height();

                }

                $('#homepage-slider').css('height', wHeight - headerHeight);

            } else {

                $('#homepage-slider').removeAttr('style');

            }

        }

    };

    this.calcMbMenu = function () {

        if ($(window).width() <= 1024) {

            var mbHeight = $('.menu-mb').height();

            var other_h = $('.menu-mb .other').height();

            var wHeight = $(window).height();

            if (mbHeight + other_h > wHeight) {

                $('.menu-mb').css({'min-height': wHeight - other_h, 'padding-bottom': other_h});

                $('.menu-mb .other').css({'bottom': other_h});

            } else {

                $('.menu-mb').css({'min-height': wHeight - other_h, 'padding-bottom': other_h});

                $('.menu-mb .other').css({'bottom': other_h});

            }

        }

    }


    this.scrollReveal = function () {

        if ($('.product-row').length > 0) {

            wWidth = $(window).width();

            if (wWidth > 1024) var margin = -98;

            else if (wWidth < 1024 && wWidth > 640) var margin = -55;

            else var margin = -35;

            tl.staggerTo(".product-row  .block", 0.6, {marginTop: margin, opacity: 1}, 0.2).stop();

            if (wWidth > 1024) {

                product_row = $('.product-row').offset().top;

                scroll_top = $(window).scrollTop();


                if (scroll_top > 200 && wWidth > 780) {

                    tl.play();
                    $('.mouse-down').css({bottom: "22.942%"});
                    $('#homepage-slider .swiper-pagination').css({bottom: "21.1876%"});
                }

                else if (scroll_top < 200 && wWidth > 780) {

                    tl.reverse();
                    $('.mouse-down').css({bottom: "50px"});
                    $('#homepage-slider .swiper-pagination').css({bottom: "50px"});
                }

            }

            $(window).on('scroll', function () {

                if (wWidth > 1024) {

                    product_row = $('.product-row').offset().top;

                    scroll_top = $(window).scrollTop();


                    if (scroll_top > 200 && wWidth > 780) {

                        tl.play();
                        $('.mouse-down').css({bottom: "22.942%"});
                        $('#homepage-slider .swiper-pagination').css({bottom: "21.1876%"});

                    }

                    else if (scroll_top < 200 && wWidth > 780) {

                        tl.reverse();
                        $('.mouse-down').css({bottom: "50px"});
                        $('#homepage-slider .swiper-pagination').css({bottom: "50px"});

                    }

                }

            });

        }

    };

    this.mouseDown = function () {

        if ($('.mouse-down').length > 0) {

            TweenMax.to(".mouse-down img", 0.8, {bottom: "10px", yoyo: true, repeat: -1});

        }

    };

    this.initSwiper = function () {
        $('.selectUniform').uniform({selectAutoWidth: false});
        if ($("#bottom-slider").length > 0) {

            mySwiper = new Swiper('.bottom-swiper-container', {

                pagination: '#desktop-swiper-pagination',

                slidesPerView: "auto",

                paginationClickable: true,

                spaceBetween: 30,

                width: 980,

                loop: true,

                simulateTouch: false,

                nextButton: '.button-next',

                prevButton: '.button-prev',

                autoplay: 5000,

                speed: 500,

                loopedSlides: 5,

                autoplayDisableOnInteraction: false,

            });

            $(window).resize(function () {

                if ($("#bottom-slider").length > 0) {
                    mySwiper.slideTo(1);
                }

            });

            mobileSwiper = new Swiper('.mobile-swiper-container', {

                pagination: '#mobile-swiper-pagination',

                paginationClickable: true,

                spaceBetween: 30,

                loop: true,

                autoplay: 5000,

                speed: 500,

                autoplayDisableOnInteraction: false

            });

        }

        if ($("#homepage-slider").length > 0) {

            swiper_hp_pc = new Swiper('#homepage-slider .swiper-container.desktop-version', {
                pagination: '.desktop-version .swiper-pagination',
                paginationClickable: true,
                nextButton: '.desktop-version .next-button',
                prevButton: '.desktop-version .prev-button',
                autoplay: 5000,
                simulateTouch: false,
                speed: 500,
                effect: "fade",
                fade: {
                    crossFade: true
                },
                slidesPerView: 1,
                autoplayDisableOnInteraction: false,
                loop: false,
                loopAdditionalSlides: 0,

                onInit: function (swiper) {
                    // setTimeout(function(){
                    //     swiper_hp_pc.update(true);
                    // }, 300);
                    if ($('.swiper-slide-active .video-slide').length > 0) {
                        videojs("video_0").ready(function () {
                            var myPlayer = this;
                            myPlayer.currentTime(0);
                            if ($(window).width() >= 1025) {
                                myPlayer.play();
                            }
                            myPlayer.on('ended', function () {
                                swiper_hp_pc.slideNext();
                            });
                        });
                    }
                },

                onTransitionEnd: function () {
                    if ($('.swiper-slide-active .video-slide').length > 0) {
                        videojs("video_" + swiper_hp_pc.activeIndex).ready(function () {
                            var myPlayer = this;
                            myPlayer.currentTime(0);
                            if ($(window).width() >= 1025) {
                                myPlayer.play();
                            }
                            myPlayer.on('ended', function () {
                                swiper_hp_pc.slideNext();
                            });
                        });
                    }
                }

            });

            swipertbl = new Swiper('#homepage-slider .swiper-container.tablet-version', {

                pagination: '.tablet-version .swiper-pagination',

                paginationClickable: true,

                nextButton: '.tablet-version .next-button',

                prevButton: '.tablet-version .prev-button',

                autoplay: 5000,

                speed: 500,

                effect: "fade",

                fade: {

                    crossFade: true

                },

                slidesPerView: 1,

                autoplayDisableOnInteraction: false,

                loop: false,

                loopAdditionalSlides: 0,

                onInit: function (swiper) {

                    setTimeout(function () {

                        swiper.update(true);

                    }, 300);

                }

            });

            swipermb = new Swiper('#homepage-slider .swiper-container.mobile-version', {

                pagination: '.mobile-version .swiper-pagination',

                paginationClickable: true,

                nextButton: '.mobile-version .next-button',

                prevButton: '.mobile-version .prev-button',

                autoplay: 5000,

                speed: 500,

                effect: "fade",

                fade: {

                    crossFade: true

                },

                slidesPerView: 1,

                autoplayDisableOnInteraction: false,

                loop: false,

                loopAdditionalSlides: 0,

                onInit: function (swiper) {

                    setTimeout(function () {

                        swiper.update(true);

                    }, 300);

                }

            });

        }

    };

    this.selectChange = function () {

        $('.select-wrp select').on('change', function () {

            $(this).css({color: "#000"})

        });

    };

    this.detectMouseHoverSlide = function () {

        $('.bottom-swiper-container .button-prev').mouseenter(function () {

            $('.bottom-swiper-container .swiper-slide-prev').addClass('changed');

        }).mouseleave(function () {

            $('.bottom-swiper-container .swiper-slide-prev').removeClass('changed');

        });


        $('.bottom-swiper-container .button-next').mouseenter(function () {

            $('.bottom-swiper-container .swiper-slide-next').addClass('changed');

        }).mouseleave(function () {

            $('.bottom-swiper-container .swiper-slide-next').removeClass('changed');

        });


        $('.bottom-swiper-container .button-prev').click(function () {

            $('.bottom-swiper-container .swiper-slide.changed').removeClass('changed');

            $('.bottom-swiper-container .swiper-slide-prev').addClass('changed');

        });

        $('.bottom-swiper-container .button-next').click(function () {

            $('.bottom-swiper-container .swiper-slide.changed').removeClass('changed');

            $('.bottom-swiper-container .swiper-slide-next').addClass('changed');

        });

    };

    this.fixedMenu = function () {

        wWidth = $(window).width();

        if (wWidth > 980 && (navigator.userAgent.match(/iPad/i) == null)) {


            $(window).on('scroll', function () {

                scroll_top = $(window).scrollTop();

                if (scroll_top > lastScrollTop) {

                    if ($('#header-pc').is(':hover') != 1) {

                        $('body').addClass('menu-hide');

                    }

                } else if (scroll_top < lastScrollTop) {

                    $("body").removeClass('menu-hide');

                }

                lastScrollTop = scroll_top;

            });

        }

        if (wWidth > 980 && (navigator.userAgent.match(/iPad/i) != null)) {

            $(window).on('scroll', function () {

                scroll_top = $(window).scrollTop();


                if (scroll_top > lastScrollTop && scroll_top > 117) {

                    if ($('#header-pc').is(':hover') != 1) {

                        $('body').addClass('menu-hide');

                    }

                } else if (scroll_top < lastScrollTop) {

                    $("body").removeClass('menu-hide');

                }

                lastScrollTop = scroll_top;

            });

        }

        if (wWidth <= 980 && wWidth > 700) {

            $(window).on('scroll', function () {

                scroll_top = $(window).scrollTop();

                if (scroll_top > lastScrollTop && scroll_top > 120) {

                    if ($('#header-pc').is(':hover') != 1) {

                        $('body').addClass('menu-hide');

                    }

                } else if (scroll_top < lastScrollTop) {

                    $("body").removeClass('menu-hide');

                }

                lastScrollTop = scroll_top;

            });

        }

        if (wWidth <= 700) {

            $(window).on('scroll', function () {

                scroll_top = $(window).scrollTop();


                if (scroll_top > lastScrollTop && scroll_top > 100) {

                    if ($('#header-pc').is(':hover') != 1) {

                        $('body').addClass('menu-hide');

                    }

                } else if (scroll_top < lastScrollTop) {

                    $("body").removeClass('menu-hide');

                }

                lastScrollTop = scroll_top;

            });

        }

    };

    this.searchBox = function () {

        $('.search').on('click', function () {

            if (seg0 == 'tim-kiem') {

                $('.search-bar-wrp input[type=text]').val('').focus().attr('placeholder', 'Nhập từ khóa');

            } else {

                $('.searchbox').stop().slideToggle();

                if ($('.search-icon').hasClass('inactive')) {

                    $('.search-icon').stop().removeClass('inactive');

                    $('.search-icon').stop().addClass('active opened');

                } else {

                    $('.search-icon').stop().addClass('inactive');

                    $('.search-icon').stop().removeClass('active opened');

                }

                setTimeout(function () {

                    $('#txt_search_pc').focus();

                }, 500)

            }

        });

    };

    /* start JS by Nguyen */

    this.threeRound = function () {

        $('.three-round-inner a').on('click', function (e) {

            e.preventDefault();

            if (!$(this).hasClass('active') && isAnimating) {

                isAnimating = false;

                $('.three-round-inner a.active').removeClass('active');

                var position = parseInt($(this).attr('data-position'));

                var target = $(this).attr('href');

                $('.block-quote .active').stop().fadeOut(300);

                $('.block-quote').removeClass('active');


                setTimeout(function () {

                    $(target).stop().fadeIn(500, function () {

                        isAnimating = true;

                    });

                    $(target).addClass('active');

                }, 400)


                if (position == 2) {

                    TweenMax.to("a[data-position=2]", 0.5, {left: 65, top: 0});

                    TweenMax.to("a[data-position=1]", 0.5, {left: 0, top: "112px"});

                    TweenMax.to("a[data-position=3]", 0.5, {
                        left: 129, top: 112, onComplete: function () {


                        }
                    });

                    setTimeout(function () {

                        $('.three-round-inner a').each(function () {

                            var position_new = parseInt($(this).attr('data-position'));

                            if (position_new == 2) $(this).attr('data-position', 1);

                            if (position_new == 3) $(this).attr('data-position', 2);

                            if (position_new == 1) $(this).attr('data-position', 3);

                        });


                    }, 500)

                } else if (position == 3) {

                    TweenMax.to("a[data-position=3]", 0.5, {left: 65, top: 0});

                    TweenMax.to("a[data-position=2]", 0.5, {left: 0, top: "112px"});

                    TweenMax.to("a[data-position=1]", 0.5, {
                        left: 129, top: 112, onComplete: function () {


                        }
                    });

                    setTimeout(function () {

                        $('.three-round-inner a').each(function () {

                            var position_new = parseInt($(this).attr('data-position'));

                            if (position_new == 3) $(this).attr('data-position', 1);

                            if (position_new == 2) $(this).attr('data-position', 3);

                            if (position_new == 1) $(this).attr('data-position', 2);

                        });


                    }, 500)

                }

                $(this).addClass('active');

                isAnimating = false;

                return false;

            }

        })

    };

    this.stopSideMenu = function () {

        $(window).scroll(function () {

            if ($('.stop-side-menu').length > 0 && $(window).width() > 1024) {

                // calculate header height

                if ($('body').hasClass('menu-hide')) headerHeight = 50;

                else headerHeight = 120;

                var bigDaddyHeight = $('.big-daddy').height();

                var fixedMenuHeight = $('.fixed-mn-left').height();

                var TimelineHeight = $('.time-line').height();

                var anchor_pos = $('.stop-side-menu').offset().top - fixedMenuHeight - 115;

                var anchor_pos2 = $('.stop-side-menu').offset().top - TimelineHeight - 115;

                var bottom_pos = bigDaddyHeight - $('.stop-side-menu').offset().top + 115 + 40;

                var bottom_pos2 = bigDaddyHeight - $('.stop-side-menu').offset().top + 115 + 27;

                if ($(window).scrollTop() >= anchor_pos) {

                    $('.fixed-mn-left').removeClass('fixed');

                    $('.fixed-mn-left').addClass('anchor');

                    $('.fixed-mn-left').css({

                        bottom: bottom_pos

                    });

                }
                if ($(window).scrollTop() >= anchor_pos2) {

                    $('.time-line').removeClass('fixed-tl');

                    $('.time-line').addClass('anchor');

                    $('.time-line').css({

                        bottom: bottom_pos2

                    });

                }
                if ($(window).scrollTop() < anchor_pos) {

                    $('.fixed-mn-left').removeClass('anchor');

                    $('.fixed-mn-left').addClass('fixed');

                    $('.fixed-mn-left').removeAttr('style');

                }
                if ($(window).scrollTop() < anchor_pos2) {

                    $('.time-line').removeClass('anchor');

                    $('.time-line').addClass('fixed-tl');

                    $('.time-line').removeAttr('style');

                }

            }

        });

    };

    this.accordion = function () {

        $('.block').click(function (event) {

            $this = $(this);

            if ($this.hasClass('ac')) {

                $this.find('.cont').stop().slideUp(300);

                setTimeout(function () {

                    $this.removeClass('ac');

                }, 300);

                $(this).find('.plus').removeClass('expand');

                $(this).find('.plus').addClass('collapse')

            } else {

                $this.parent().find('.block.ac .cont').stop().slideUp(300);

                $this.find('.cont').stop().slideDown(300);

                setTimeout(function () {

                    $this.parent().find('.block.ac').removeClass('ac');

                    $this.addClass('ac');

                }, 300);


                $this.parent().find('.plus').addClass('collapse');

                $this.parent().find('.plus').removeClass('expand');


                $(this).find('.plus').addClass('expand');

                $(this).find('.plus').removeClass('collapse');

                //Update views

                $.ajax({

                    url: ajaxurl,

                    method: 'POST',

                    data: {

                        'action': 'ajax_update_views_post',

                        'post-id': $(this).data('post-id')

                    },

                    success: function (data) {

                        // console.log(data);

                    },

                    error: function (errorThrown) {
                    }

                });

            }

            if ($('#about-gioithieu').is(":visible")) {

                if ($('.sidebar-menu').length > 0) {

                    pHeight = $('.stop-side-menu').offset().top - 169;

                    $('.sidebar-menu').css({height: pHeight});

                }

                if ($('.center-content .left-content').length > 0) {

                    pHeight = $('.stop-side-menu').offset().top - 169;

                    $('.center-content .left-content').css({height: pHeight});

                }

                if ($('.right-timeline').length > 0) {

                    pHeight = $('.stop-side-menu').offset().top - 169;

                    $('.right-timeline').css({height: pHeight});

                }

            }

        });

    };

    this.qmhdScroll = function () {
        setTimeout(function () {

            if ($('.image-quymo').hasClass('not-ac')) {


                TweenMax.to('.count', 0.3, {opacity: 1});

                $('.block1-num').each(function () {

                    $(this).prop('Counter', 0).animate({

                        Counter: $(this).text()

                    }, {

                        duration: 2000,

                        easing: 'swing',

                        step: function (now) {

                            $(this).text(Math.ceil(now));

                            $(this).css({display: "block"});

                        }

                    });

                });


                $('.block3-num').each(function () {

                    $(this).prop('Counter', 0).animate({

                        Counter: $(this).text()

                    }, {

                        duration: 2000,

                        easing: 'swing',

                        step: function (now) {

                            $(this).text(Math.ceil(now));

                            $(this).css({display: "block"});

                        }

                    });

                });


                $('.block2-num').each(function () {

                    $(this).prop('Counter', 0).animate({

                        Counter: $(this).text()

                    }, {

                        duration: 2000,

                        easing: 'swing',

                        step: function (now) {

                            $(this).text(now.toFixed(3));

                            $(this).css({display: "block"});

                        }

                    });

                });


                $('.block4-num').each(function () {

                    $(this).prop('Counter', 0).animate({

                        Counter: $(this).text()

                    }, {

                        duration: 2000,

                        easing: 'swing',

                        step: function (now) {

                            now = now.toFixed(1);

                            now = now.replace(".", ",")

                            $(this).text(now);

                            $(this).css({display: "block"});

                        }

                    });

                });


                $('.block5-num').each(function () {

                    $(this).prop('Counter', 0).animate({

                        Counter: $(this).text()

                    }, {

                        duration: 2000,

                        easing: 'swing',

                        step: function (now) {

                            $(this).text(now.toFixed(3))

                            $(this).css({display: "block"});

                        }

                    });

                });


                $('.image-quymo').removeClass('not-ac');

            }

        }, 800)

    };

    this.aboutClick = function () {

        $('.danhsach .block').click(function () {

            var current = $(this);

            setTimeout(function () {

                var toVal = current.children('.heading').offset().top - 122;

                $("html, body").animate({scrollTop: toVal}, 'slow');

            }, 320);

        })

        $('.sidemenu-scroll a').click(function (e) {

            e.preventDefault();

            var target = $(this).attr('href');

            var from_top = $(target).offset().top;

            if ($(window).scrollTop() > from_top) {

                var padding_top = 118

            } else var padding_top = 60

            $('html, body').animate({

                scrollTop: from_top - padding_top - 35

            }, 1000)

        });

        $(window).scroll(function () {

            if ($('.gioithieu').length > 0) {

                var scrollPos = $(document).scrollTop();

                $('.fixed-mn-left .sidemenu-scroll li a').each(function () {

                    var currLink = $(this);

                    var refElement = $(currLink.attr("href"));

                    if (refElement.position().top <= scrollPos && (refElement.position().top + refElement.height() + 48) > scrollPos) {

                        $('.fixed-mn-left .sidemenu-scroll li').removeClass("ac");

                        currLink.parent().addClass("ac");

                    }

                    else {

                        currLink.parent().removeClass("ac");

                    }

                });

            }

        });

    };

    this.viewMoreClick = function () {

        $('.gt-text .view-more').on('click', function (e) {

            e.preventDefault();

            if ($(this).hasClass('expand')) {

                $(this).prev('.invi-content').stop().slideUp();

                $(this).removeClass('expand');

                $(this).html("Xem thêm <i class='fa fa-chevron-down'></i>");

            } else {

                $(this).prev('.invi-content').stop().slideDown();

                $(this).addClass('expand');

                $(this).html("Thu gọn <i class='fa fa-chevron-up'></i>");

            }


        });

    };

    /* end JS by Nguyen */


    this.fb_share = function (name, link, picture, caption, description) {

        FB.ui({

                method: 'feed',

                name: name,

                link: link,

                picture: picture,

                description: description,

                caption: caption

            }, function (response) {
            }
        );

    }


    this.load_img_quality = function () {

        if ($('.img_quality').length > 0) {

            var img;


            $('.img_quality').each(function (e) {

                img = new Image();

                var this_img = $(this);


                img.onload = function () {

                    this_img.attr('src', this_img.data('src'));

                    //console.log(this_img.data('src'));

                };


                img.src = this_img.data('src');

            });

        }

    };


    this.search_hd = function () {

        $(document).on('keypress', '#txt_search_pc', function (e) {

            if (e.which == 13) {

                $('.btn-search-hd-pc').trigger('click');

                return false;

            }

        });

        $(document).on('keypress', '#txt_search_mob', function (e) {

            if (e.which == 13) {

                $('.btn-search-hd-mb').trigger('click');

                return false;

            }

        });


        $('.btn-search-hd-pc, .btn-search-hd-mb').on('click', function () {

            var obj_txt = $(this).prev();

            var q = $.trim(obj_txt.val());

            if (q == '') {

                obj_txt.attr('placeholder', 'Bạn vui lòng nhập từ khóa tim kiếm').focus();

                return;

            }


            if (q.length < 3) {

                obj_txt.val('').attr('placeholder', 'Từ khóa phải có ít nhất 3 ký tự').focus();

                return;

            }

            setTimeout(function () {
                location.href = home_url + '/tim-kiem?q=' + q;
            }, 300);

            return false;
        });

    };

};


Page = new Page;

$(document).ready(function () {

    wWidth = $(window).width();

    Page.init();

    setTimeout(function () {

        Page.loadAjaxImg();

    }, 1000);

    new WOW().init();

    $('.wow').removeClass('hidden-wow');


    Page.load_img_quality();

    Page.search_hd();

    Page.dknt();

    $('.image img, .normal-image, .large-left img').each(function (e) {

        $(this).attr('src', $(this).data('src')).attr('alt', $(this).data('alt'));

    });

});


$(window).resize(function () {

    Page.calcHeight();

    Page.scrollReveal();

    if (swiper) {

        if (resizeTimer) {

            clearTimeout(resizeTimer);   // clear any previous pending timer

        } else {

        }

        // set new timer

        resizeTimer = setTimeout(function () {

            resizeTimer = null;


            swiper.update(true);

            swiper.startAutoplay();

        }, 500);

    }


});