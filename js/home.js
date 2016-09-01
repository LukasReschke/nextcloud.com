$(window).load(function() {
    /**
     * Listen to scroll to change header opacity class
     */
    function checkScroll(){
        var startY = $('.navbar').height() * 2;

        if($(window).scrollTop() > startY){
            $('.navbar img').attr('src', './img/logo_nextcloud_blue.svg');
            $('.navbar').addClass('scrolled');
        }else{
            $('.navbar img').attr('src', './img/logo_nextcloud_white.svg');
            $('.navbar').removeClass('scrolled');
        }
    }

    if($('.navbar').length > 0){
        $(window).on('scroll load resize', function(){
            checkScroll();
        });
    }

    /**
     * Animation
     */
    var waypoint = new Waypoint({
        element: document.getElementById('get-nextcloud-button'),
        handler: function(direction) {
          anim.play();
        }
    });
    var animContainer = document.getElementById('bodymovin');
    var params = {
        container: animContainer,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        autoloadSegments: false,
        path: 'img/home/community/data.json'// path to your data.json file you rendered from AE

    };
    var anim;
    anim = bodymovin.loadAnimation(params);
});