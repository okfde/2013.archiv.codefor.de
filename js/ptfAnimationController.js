/**
 * Author: CReich
 * Company: Rainbow Unicorn
 * Date: 29.02.2016
 * Created: 18:47
 **/
(function(window){

    AnimationController.prototype.constructor = AnimationController;
    AnimationController.prototype = {
        val0 : '',
        val1 : ''
    };

    var ref, center, $animationWrap, $animation, $pRed, $pBlue, $applyBorder, $applyBorderBlue, $logoText, $millionText, $apply, timeline,
        $applyBlue, $applyTextWhite, $applyTextBlack;
    function AnimationController(){
        ref = this;

        Logger.useDefaults();
        //Logger.setLevel(Logger.OFF);
        
        center = "1000 400";
        

    };

    AnimationController.prototype.init = function(){

        $animationWrap = $('.svg-animation-wrap');

        ref.load();
    };

    AnimationController.prototype.load = function(){
        var preload = [];
        $('.svg-element').each(function(){
            var job = {};
            job.url = $(this).attr('data-src');
            job.type = $(this).prop('nodeName');
            job.$elem = $(this);
            preload.push(job);
        });
        ref.loadBatch(preload);
    };

    AnimationController.prototype.loadBatch = function(preload){
        var promises = [];
        for (var i = 0; i < preload.length; i++) {
            (function(job, promise) {

                Logger.log("job.type == " + job.type);

                job.$elem[0].addEventListener('load', function() {

                    Logger.log("OBJECT loaded: " + job.url);

                    promise.resolve();
                }, true);
                job.$elem.attr('data',job.url);

            })(preload[i], promises[i] = $.Deferred());
        }
        $.when.apply($, promises).done(function() {
            ref.onBatchLoaded();
        });
    };

    AnimationController.prototype.onBatchLoaded = function(){

        //set references

        var animSVG = document.getElementById("ptf-svg");
        if(animSVG) var svgDoc = animSVG.contentDocument;

        Logger.log("svgDoc -> " + svgDoc);

        $animation = $(svgDoc.getElementById("animation"));

        $pRed = $('#red',$animation);
        $pBlue = $('#blue',$animation);
        $logoText = $('#logo-text',$animation);
        $millionText = $('#million-text',$animation);
        $apply = $('#apply',$animation);
        $applyBlue = $('#apply-blue',$animation);
        $applyBorder = $('#apply-border',$animation);
        $applyBorderBlue = $('#apply-border-blue',$animation);
        $applyTextWhite = $('#text-white',$animation);
        $applyTextBlack = $('#text-black',$animation);

        timeline = new TimelineMax({delay:0, onComplete:ref.animationFinished})
            .set([$pRed, $pBlue, $logoText, $millionText, $apply, $applyBlue, $applyBorderBlue, $applyTextWhite],{opacity:0})
            .set($pBlue,{svgOrigin:center, scale:0})
            .set($pRed,{svgOrigin:center, x:'-15%', y:'-3%'})
            .set($animationWrap,{className:'-=ptf-hidden', opacity:1})
            .to($pBlue, 1, {scale: 1, opacity:1, ease:Back.easeOut},'start')
            .to($pRed, 1, {opacity:1, x:'0%', y:'0%', ease:Sine.easeInOut},'start+=0.5')
            .set($logoText,{y:'10%'})
            .to($logoText,0.75,{delay:1.5, opacity:1, y:'0%'}, 'go')
            .to($pRed,0.75,{delay:1, opacity:0}, 'go')
            .set($millionText,{x:'500%',opacity:1})
            .to([$pRed,$pBlue,$logoText],0.75,{delay:2.5, x:'-500%'}, 'slide')
            .to($millionText,0.75,{delay:2.5, x:'0%'}, 'slide')
            .to($millionText,1,{delay:2.5, x:'-300%'},'slideOut')
            .set($apply,{svgOrigin:center, scale:0},'slideOut+=2.75')
            .set($applyBlue,{scaleX:0,opacity:1},'slideOut+=2.75')
            .to($apply,1,{opacity:1, scale:1, ease:Back.easeOut},'slideOut+=2.75')
            .to($applyTextWhite,0.1,{opacity:1},'changeColorIn')
            .to($applyTextBlack,0.1,{opacity:0},'changeColorIn')
            .set($applyBorder,{opacity:0})
            .set($applyBorderBlue,{opacity:1})
            .to($applyBlue,0.25,{scaleX:1, ease:Sine.easeIn})
            .to($applyBlue,0.25,{delay:1.5, scaleX:0, ease:Sine.easeOut},'changeColorOut')
            .to($applyTextWhite,0.1,{delay:1.5, opacity:0},'changeColorOut')
            .to($applyTextBlack,0.1,{delay:1.5, opacity:1},'changeColorOut')
            .set($applyBorder,{opacity:1})
            .set($applyBorderBlue,{opacity:0})
            .to($apply,0.5,{delay:1, opacity:1, scale:0, ease:Back.easeIn})

    };

    AnimationController.prototype.animationFinished = function(){
        Logger.log("animationFinished");
        timeline.play(0);
    };

    window.AnimationController = AnimationController;

}(window));
