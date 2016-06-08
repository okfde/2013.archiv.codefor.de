/**
 * Author: gnomjogson
 * Date: 30.09.13
 * Created: 13:29
 **/
 (function(window){

    Application.prototype.constructor = Application;
    Application.prototype = {
        speed_add: 55,
        speed_remove: 15,
        delay_before_fadein: 500,
        delay_before_start: 3000,
        delay_before_add: 500,
        delay_before_remove: 3000
    }

    var ref, headline, $container, $subline, index, initialText, $header, $beneath, $cookie,
    currentText, currentIndex, currentState, interval, markerText,
    initialized, minHeight, faq_open, resetting;
    function Application(){
        ref = this;
    };

    Application.prototype.init = function( pHeroData )
    {   

        ref.headline = pHeroData.headline;
        ref.claims = pHeroData.claims;

        if (!Modernizr.svg) {
            $(".navbar-brand img").attr("src", "img/logo.png");
        }

        $('.cfg-cities li').bind('click', function() {
            $('#mce-ORT').val($(this).html());
        });

        index = 0;
        $container = $('.animated-claim', '.hero-container');
        $subline = $('.cta-sub', '.hero-container');
        
        headline = ref.headline;
        currentIndex = ref.claims[0].split('').length;
        initialized=false;

        minHeight = $container.outerHeight();
        $container.css({minHeight: minHeight});
        initialText = $container.html();

        $(window).resize(function() {
            resetting=true;
            clearTimeout(this.id);
            this.id = setTimeout(ref.reset, 200);
        });

        setTimeout(function() {
            $container.fadeIn( 'slow', function(){
                setTimeout(function() {
                    ref.removeClaim();
                }, ref.delay_before_start);
            });
        }, ref.delay_before_fadein);

    };

    Application.prototype.initMenu = function() {
        console.log('Menu Init');
        var toggles = document.querySelectorAll(".mobile-menu-toggle");

        for (var i = toggles.length - 1; i >= 0; i--) {
          var toggle = toggles[i];
          toggleHandler(toggle);
        };

        function toggleHandler(toggle) {
          toggle.addEventListener( "click", function(e) {
            e.preventDefault();
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
            $('body').toggleClass('mobile-menu-open');
            });
        }
  };

  Application.prototype.reset = function()
  {
    clearInterval(interval);

    $container.css({visibility: 'hidden', minHeight: '', height: ''});
    $container.html(initialText);

    minHeight = $container.outerHeight();
    $container.css({minHeight: minHeight, height:minHeight});

    setTimeout(function() {
        resetting=false;
        $container.css('visibility','visible');
        ref.displayClaim();
    }, 250);


}

Application.prototype.displayClaim = function()
{
    currentText = ref.claims[index].split('');
    currentState = headline;
    currentIndex = 0;

    clearInterval(interval);
    interval = setInterval(ref.addChar,ref.speed_add);
}

Application.prototype.addChar = function()
{
    if(resetting) return;
    var char = currentText[currentIndex];

    if(char){
        currentIndex++;
        $container.html(currentState + char);
        currentState = $container.html();
        if(currentIndex == currentText.length) {
            clearInterval(interval);

            if(!initialized){
                $subline.fadeIn( 'slow', function(){
                    initialized=true;
                    setTimeout(function() {
                        ref.removeClaim();
                    }, ref.delay_before_remove);
                });
            } else {
                if(!resetting){
                    setTimeout(function() {
                        ref.removeClaim();
                    }, ref.delay_before_remove);
                }
            }
        }
    }
}

Application.prototype.removeClaim = function()
{
    markerText = "";
    currentState = ref.claims[index];

    clearInterval(interval);
    interval = setInterval(ref.removeChar,ref.speed_remove);
}

Application.prototype.removeChar = function()
{
    if(resetting) return;
    var lastchar = currentState.substr(currentState.length-1);
    var remains = currentState.substr(0,currentState.length-1);

    markerText = lastchar + markerText;
    currentState = remains;

    $container.html(headline + remains + '<span class="marker">' + markerText + '</span>');

    currentIndex--;

    if(currentIndex == 0){
        clearInterval(interval);
        setTimeout(function() {
            if(index < ref.claims.length-1){ index++;} else index = 0;
            ref.displayClaim();
        }, ref.delay_before_add);
    }
}

window.Application = Application;

}(window));
