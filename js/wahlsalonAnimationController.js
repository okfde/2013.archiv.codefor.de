(function(window){

  wsac.prototype.constructor = wsac;
  
  function wsac(){
		ref = this;
		this.init();
  }

	wsac.prototype.init = function( args ) {
		
		$(window).bind('scroll',function(e){
		    ref.parallaxScroll();
		});
	};

	wsac.prototype.parallaxScroll = function() {
    
    var scrolled = $(window).scrollTop();

    // $('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
    //$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
    //$('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');

    var offsets = [	
			(0-(scrolled*.1)),
			(0-(scrolled*.2)),
			(0-(scrolled*.3))
    ];

    var positionCss = offsets[0] + 'px,' + offsets[1] + 'px,' + offsets[2] + 'px';
    
    $('.ws-page-wrap').css('background-position-y',positionCss);

	};

  window.wsac = wsac;

}(window));

