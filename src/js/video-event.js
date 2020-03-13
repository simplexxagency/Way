var player;
// var curplayer;
// var tag = document.createElement('script');

// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script') [0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



var playerInfoList = [];

var players = document.getElementsByClassName('player');
var playersId = [];
var plays = document.getElementsByClassName('play');
var playsId = [];
for (let i = 0; i < players.length; i++) {
    players[i].id = "player" + i;
    playersId.push(players[i].id);

    plays[i].id = "play" + i;
    playsId.push(plays[i].id);

    playerInfoList.push({
        plId: plays[i].id,
        id: players[i].id,
        height: '480',
        width: '840',
        videoId: '26ufc8SCCvw'
    })
}



function onYouTubeIframeAPIReady() {
    if (typeof playerInfoList === 'undefined')
        return;

    for (let i = 0; i < playerInfoList.length; i++) {
        player = createPlayer(playerInfoList[i]);
    }
}

function createPlayer(playerInfo) {
    return new YT.Player(playerInfo.id, {
        height: playerInfo.height,
        width: playerInfo.width,
        videoId: playerInfo.videoId,
        playerVars: {
            autoplay: 0,
            controls: 0,
            rel: 0,
            fs: 0,
            showinfo: 0,
            modestbranding: 1
        },

        events: {
            'onReady': function (event) {

                document.getElementById(playerInfo.plId).onclick = function () {
                    event.target.playVideo();

                };
            }

        }
    });
}
