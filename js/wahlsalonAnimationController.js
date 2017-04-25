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


    this.browser = this.getBrowser();
    $('html').addClass(ref.browser.name.toLowerCase()).addClass('version-' + ref.browser.version.toLowerCase());

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

  wsac.prototype.getBrowser = function()
  {
      var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
      if(/trident/i.test(M[1])){
          tem=/\brv[ :]+(\d+)/g.exec(ua) || [];
          return {name:'IE',version:(tem[1]||'')};
      }
      if(M[1]==='Chrome'){
          tem=ua.match(/\bOPR\/(\d+)/)
          if(tem!=null)   {return {name:'Opera', version:tem[1]};}
      }
      M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
      if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
      return {
          name: M[0],
          version: M[1]
      };
  };

  window.wsac = wsac;

}(window));

