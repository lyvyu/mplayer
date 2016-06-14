

var player,time_update_interval = 0,thumb;

function onYouTubeIframeAPIReady() {
	createPlayer('FKWwdQu6_ok')
}

function createPlayer(videoId) {
	player = new YT.Player('video', {
		width: 600,
		height: 400,
		videoId: videoId,
		events: {
			onReady: initialize,
			onStateChange: onPlayerStateChange
		}
	});
}

function onPlayerStateChange(event) {
	if (event.data == 0) {
		clearInterval(time_update_interval);
		// $('#pause').find('.fa').removeClass('fa-pause').addClass('fa-play');
		// $('#pause').attr("id",'play')
		player.loadVideoById({videoId: 'jZNtDlpuUUU'})
		thumb = Youtube.thumb('jZNtDlpuUUU', 'big');
		$r.val(0).change();
		$('.fill-bg').css('background-image','url(' + thumb + ')')
		time_update_interval = setInterval(function () {
			updateProgressBar();
		}, 500);

	}
		$('.player-song-name').text(player.getVideoData().title)
		
}

function initialize(){

    // Update the controls on load
    // updateTimerDisplay();
    updateProgressBar();

    // Clear any old interval.
    clearInterval(time_update_interval);

    // Start interval to update elapsed time display and
    // the elapsed part of the progress bar every second.
    time_update_interval = setInterval(function () {
    	// updateTimerDisplay();
    	updateProgressBar();
    }, 500);

    thumb = Youtube.thumb('FKWwdQu6_ok', 'big');

    $('.fill-bg').css('background-image','url(' + thumb + ')')
    $('.player-info-text .player-song-name').text(player.getVideoData().title)


    $('#volume-input').val(Math.round(player.getVolume()));
}

var Youtube = (function () {
	'use strict';

	var video, results;

	var getThumb = function (url, size) {
		if (url === null) {
			return '';
		}
		size    = (size === null) ? 'big' : size;
		results = url.match('[\\?&]v=([^&#]*)');
		video   = (results === null) ? url : results[1];

		if (size === 'small') {
			return 'http://img.youtube.com/vi/' + video + '/2.jpg';
		}
		return 'http://img.youtube.com/vi/' + video + '/0.jpg';
	};

	return {
		thumb: getThumb
	};
}());

// Playback

$('body').on('click','#play',function() {
	player.playVideo();
	$(this).find('.fa').removeClass('fa-play').addClass('fa-pause');
	$(this).attr("id",'pause')
})

$('body').on('click','#pause',function() {
	player.pauseVideo();
	$(this).find('.fa').removeClass('fa-pause').addClass('fa-play');
	$(this).attr("id",'play')
})

// $(document).ready(function() {
	// Initialize
	var $r = $('input[type="range"]');

	$r.rangeslider({
		polyfill: false,

	    // Default CSS classes
	    rangeClass: 'rangeslider',
	    disabledClass: 'rangeslider--disabled',
	    horizontalClass: 'rangeslider--horizontal',
	    verticalClass: 'rangeslider--vertical',
	    fillClass: 'rangeslider__fill',
	    handleClass: 'rangeslider__handle',

	    // Callback function
	    onInit: function() {
	    	console.log('init')
	    },

	    // Callback function
	    onSlide: function(position, value) {
	    },

	    // Callback function
	    onSlideEnd: function(position, value) {
	    	var newTime = player.getDuration() * (value / 100);

	    	player.seekTo(newTime);
	    	// console.log(position, value)

	    }
	});

// });


// This function is called by initialize()
function updateProgressBar(){
    // Update the value of our progress bar accordingly.
    var seek = (player.getCurrentTime() / player.getDuration()) * 100;
    if (!isNaN(seek)) {
    	$r.val(seek).change();
    } else {
    	$r.val(0).change();
    }
}

    //Image fill div proportionally
    // var imgSrc = $('.img-stretch').map(function () {
    //     return $(this).attr('src')
    // }).get();

    // $('img.img-stretch').remove();
    // $('.player-cover').prepend('<div class="fill-bg"></div>');
    // $('.fill-bg').each(function (index, value) {
    //     $(this).css({
    //         'background-image': 'url(' + imgSrc[index] + ')'
    //     });
    // })




























