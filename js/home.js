$(window).load(function() {
    /**
     * Listen to scroll to change header opacity class
     */
    function checkScroll(){
        if(document.body.scrollTop !== 0){
            $('.navbar img').attr('src', './img/logo_nextcloud_blue.svg');
            $('.navbar').addClass('scrolled');
        } else {
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
     * Animations
     */
    var elements = [
        'community',
        'privacy',
        'flexibility'
    ];
    elements.forEach(function(key) {
        new Waypoint({
            element: document.getElementById('get-nextcloud-button'),
            handler: function() {
                anim.play();
            }
        });
        var animContainer = document.querySelectorAll('#why-nextcloud div [data-name='+key+']')[0];
        var params = {
            container: animContainer,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            autoloadSegments: false,
            path: 'img/home/'+key+'/data.json'// path to your data.json file you rendered from AE

        };
        var anim;
        anim = bodymovin.loadAnimation(params);
    });
});