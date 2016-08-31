$(window).load(function() {

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