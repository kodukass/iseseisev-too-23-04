var player = videojs('my-video', {
    aspectRatio: '9:16'
  });

var myFullpage = new fullpage('#fullpage', {
    // Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors:["section1","section2","section3","section4","section5","section6","section7","section8","section9"],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ["Emma Mae Roodla","Oskused","Kontakt","Joonistused","Hobid","Cosplay","Vibusport","Lemmik muusika","Mäng"],
    showActiveTooltip: true,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',

    // Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 600,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: true,
    scrollOverflowMacStyle: false,
    scrollOverflowReset: false,
    touchSensitivity: 15,
    bigSectionsDestination: null,

    // Accessibility
    keyboardScrolling: false,
    animateAnchor: true,
    recordHistory: true,

    // Design
    controlArrows: false,
    controlArrowsHTML: [
        '<div class="fp-arrow"></div>', 
        '<div class="fp-arrow"></div>'
    ],
    verticalCentered: true,
    sectionsColor : ['#ccc', '#fff'],
    //paddingTop: '3em',
    //paddingBottom: '10px',
    fixedElements: '#header, .footer',
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
    dropEffect: false,
    dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999},
    waterEffect: false,
    waterEffectOptions: { animateContent: true, animateOnMouseMove: true},
    cards: false,
    cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

    // Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    lazyLoading: true,
    observer: true,
    credits: { enabled: true, label: 'Made with fullPage.js', position: 'right'},

    // Events
    beforeLeave: function(origin, destination, direction, trigger){},
    onLeave: function(origin, destination, direction, trigger){},
    afterLoad: function(origin, destination, direction, trigger){},
    afterRender: function(){},
    afterResize: function(width, height){},
    afterReBuild: function(){},
    afterResponsive: function(isResponsive){},
    afterSlideLoad: function(section, origin, destination, direction, trigger){},
    onSlideLeave: function(section, origin, destination, direction, trigger){},
    onScrollOverflow: function(section, slide, position, direction){}
});

