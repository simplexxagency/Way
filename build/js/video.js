'use strict';

var player;




window.onYouTubeIframeAPIReady = function () {
    console.log('6');

    player = new YT.Player('video-placeholder', {
        width: 280,
        height: 360,
        videoId: '26ufc8SCCvw',

        playerVars: {
            autoplay: 0,
            controls: 0,
            rel: 0,
            fs: 0,
            showinfo: 0,
            modestbranding: 1
        },

        events: {
            'onReady': onPlayerReady
        }

    });

};

function onPlayerReady(event) {

    document.getElementById('play').onclick = function () {
        player.playVideo();

    };

    document.getElementById('show-bg').onclick = function () {
        player.pauseVideo();

    };

    document.getElementById('stop-2').onclick = function () {
        player.pauseVideo();

    };
}