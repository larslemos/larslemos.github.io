/** *************Init JS*********************

    TABLE OF CONTENTS
	---------------------------
	1.Load function
	2.Set height-width function
	3.Larslemosresume function
	5.Ready function
 ** ***************************************/

 "use strict";
/*****Load function start*****/
$(window).load(function(){
	$(".preloader-it").delay(500).fadeOut("slow");
	if(window.location.href.indexOf("index.html#") > -1)
		$("html, body").animate({scrollTop: $(window.location.hash).offset().top - 50 }, 800);
});
/*****Load function* end*****/

/***** Set height-width function start *****/
var setHeightWidth = function () {
	var height = $(window).height();
	$('.full-height').css('min-height', (height));
	$('#map_canvas').height($('#form_card_height').height());
	$('.full-width-header').width($('.main-wrapper').width());
};
/***** Set height-width function end *****/

/***** Larslemosresume function start *****/
var larslemosResume = function () {
	/*SmoothScroll*/
	smoothScroll.init({
		speed: 800,
		easing: 'easeInOutCubic',
		offset: 50,
		updateURL: false,
		callbackBefore: function ( toggle, anchor ) {},
		callbackAfter: function ( toggle, anchor ) {},
	});

	/*Scrollspy*/
	var bodySel = $("#body");
	bodySel.scrollspy({ target: ".mdl-scroll-spy-1",offset:52 });
	var scollSpy2ActiveLI = "";
	bodySel.on('activate.bs.scrollspy', function () {
		if (scollSpy2ActiveLI != "") {
			scollSpy2ActiveLI.removeClass('active');
		}
		var activeTab = $('.mdl-scroll-spy-1 li.active a').attr('href');
		scollSpy2ActiveLI = $('.mdl-scroll-spy-2 li a[href="' + activeTab + '"]').parent();
		scollSpy2ActiveLI.addClass('active');
	})
	bodySel.trigger('activate.bs.scrollspy');

	/*Progressbar animation*/
	var progressBar = $('.progress-bar-graph div');
	for(var i = 0; i < progressBar.length; i++){
		$(progressBar[i]).appear(function(){
			var percent = $(this).find('span').attr('data-width');
			var $endNum = parseInt($(this).find('.bar-wrap strong i').text(),10);

			var $that = $(this);
			$(this).find('span').animate({
				'width' : percent + '%'
			},1600, function(){
			});
			$(this).find('.bar-wrap strong').animate({
				'opacity' : 1
			},1400);
			if(percent == '100'){
				$that.find('bar-wrap strong').addClass('full');
			}
		});
	}

	/* Map Initialization */
	if( $('#map_canvas').length > 0 ){
		var settings = {
			zoom: 11,
			center: new google.maps.LatLng(-25.960137, 32.5689788),
			styles:[
				{
					"stylers": [
						{
							"hue": "#007fff"
						},
						{
							"saturation": 89
						}
					]
				},
				{
					"featureType": "water",
					"stylers": [
						{
							"color": "#ffffff"
						}
					]
				},
				{
					"featureType": "administrative.country",
					"elementType": "labels",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				}
			]};
			var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
			google.maps.event.addDomListener(window, "resize", function() {
				var center = map.getCenter();
				google.maps.event.trigger(map, "resize");
				map.setCenter(center);
			});
			var contentString = '<div id="content-map-marker" style="text-align:left; padding-top:10px; padding-left:10px">'+
				'<div id="siteNotice">'+
				'</div>'+
				'<h4 id="firstHeading" class="firstHeading" style="color:#000; margin-bottom:0px;"><strong>Here I am!</strong></h4>'+
				'<div id="bodyContent">'+
				'<p style="font-family:Verdana; color:#999; font-size:12px; margin-bottom:10px">Lets have a coffee!</p>'+
				'</div>'+
				'</div>';
			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});

			var companyPos = new google.maps.LatLng(-25.960137, 32.5689788);
			var companyMarker = new google.maps.Marker({
				position: companyPos,
				map: map,
				title:"Our Office",
				zIndex: 3});
			google.maps.event.addListener(companyMarker, 'click', function() {
				infowindow.open(map,companyMarker);
			});
		}

	/*Slimscroll*/
	$('.nicescroll-bar').slimscroll({height:'100%',color: '#01c853',opacity:1,size:5});

};
/***** Larslemosresume function end *****/


/*****Ready function start*****/
$(document).ready(function(){
  larslemosResume();
});
/*****Ready function end*****/

/***** LightGallery init end*****/
