$(function () {

    "use strict";

    //===== Prealoder

    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });


  //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".header_navbar").removeClass("sticky");
        } else {
            $(".header_navbar").addClass("sticky");
        }
    });
    
    
    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 73;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });
    
    
    //===== close navbar-collapse when a  clicked

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });    


    ///===== Progress Bar

    if ($('.progress_line').length) {
        $('.progress_line').appear(function () {
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width', percent + '%');
        }, {
            accY: 0
        });
    }


    //===== Counter Up

    $('.counter').counterUp({
        delay: 10,
        time: 1600,
    });


    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


    //===== Portfolio Highlights (rendered via JS)
    var portfolioHighlights = [
        {
            title: 'Moreooo Company Profile',
            description: 'Corporate profile site with a landing page, service catalog, and lead-capture form.',
            image: 'assets/images/project-7.png',
            url: 'https://apw-marieooo.pages.dev/'
        },
        {
            title: 'AI Meeting Assistant',
            description: 'A smart assistant that summarizes meetings, tracks action items, and shares follow-ups automatically.',
            image: 'assets/images/project-10.png',
            url: '#'
        },
        {
            title: 'SkillMate',
            description: 'A web platform that lets users exchange skills, learn from each other, and grow together.',
            image: 'assets/images/project-3.jpg',
            url: '#'
        },
        
        {
            title: 'Mobile Journal App',
            description: 'A mobile app to track daily activities, journaling, and spiritual routines.',
            image: 'assets/images/project-1.jpg',
            url: '#'
        },
        {
            title: 'Learning Management Platform',
            description: 'A web platform to manage courses, track student progress, and deliver online learning.',
            image: 'assets/images/project-4.jpg',
            url: '#'
        },
        {
            title: 'Coffee Melekk Company Profile',
            description: 'Corporate profile site with a landing page, service catalog, and lead-capture form.',
            image: 'assets/images/project-8.png',
            url: 'https://apw-coffee-melekk.pages.dev/'
        },
        {
            title: 'E-Commerce Platform',
            description: 'A web platform that allows users to buy, sell, and manage products seamlessly online.',
            image: 'assets/images/project-5.jpg',
            url: '#'
        },
        {
            title: 'Inventory Management System',
            description: 'A system that helps businesses track, manage, and optimize their inventory efficiently.',
            image: 'assets/images/project-6.jpg',
            url: '#'
        },
        
        {
            title: 'Financial Report App',
            description: 'A mobile app that helps users track, analyze, and visualize their finances on the go.',
            image: 'assets/images/project-2.jpg',
            url: '#'
        },
        {
            title: 'TBM Company Profile',
            description: 'Corporate profile site with a landing page, service catalog, and lead-capture form.',
            image: 'assets/images/project-9.png',
            url: 'https://apw-tbm-merah-putih.pages.dev/'
        },
    ];

    var buildPortfolioHighlights = function (items) {
        var $portfolioList = $('#portfolio-list');

        if (!$portfolioList.length) {
            return;
        }

        $portfolioList.empty();

        items.forEach(function (item) {
            var hasUrl = item.url && item.url !== '#';
            var linkAttrs = hasUrl ? ' href="' + item.url + '" target="_blank" rel="noopener noreferrer"' : ' href="#"';
            var projectTitle = '<a' + linkAttrs + '>' + item.title + '</a>';
            var template = ''
                + '<div class="col-lg-4">'
                + '    <div class="single_project">'
                + '        <div class="project_image">'
                + '            <img src="' + item.image + '" alt="' + item.title + '">'
                + '        </div>'
                + '        <div class="project_content">'
                + '            <h4 class="project_title">' + projectTitle + '</h4>'
                + '            <p>' + item.description + '</p>'
                + '        </div>'
                + '    </div>'
                + '</div>';

            $portfolioList.append(template);
        });
    };

    buildPortfolioHighlights(portfolioHighlights);


    //===== Slick Project

    $('.project_active').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: '<span class="prev"><i class="lni lni-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="lni lni-chevron-right"></i></span>',
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
        ]
    });


    //===== Slick Project

    $('.testimonial_active').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
        ]
    });


    //=====  WOW active
    
    var wow = new WOW({
        boxClass: 'wow', //
        mobile: false, // 
    })
    wow.init();







});
