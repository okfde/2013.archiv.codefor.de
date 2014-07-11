/**
 * Author: gnomjogson
 * Date: 17.06.14
 * Created: 13:16
 **/
(function(window){

    PackeryGrid.prototype.constructor = PackeryGrid;

    var ref, $container, itemClass, itemGutterClass, $items,initialized, $loading;
    function PackeryGrid(pContainerClass,pItemClass, pItemGutterClass){

        ref = this;
        itemClass = pItemClass;
        itemGutterClass = pItemGutterClass;
        $container = $(pContainerClass);
        $items = $(itemClass);
        $loading = $('.loading');

        ref.layout();


    };

    PackeryGrid.prototype.layout = function()
    {
        /*
        ref.pack();
        $items.each(function(i){
            var $img = $('img');
            var $that = $(this);
            var length = $img.length;
            if(length>0){
                $img.load(function(){
                    length--;
                    if(length === 0){
                        ref.pack();
                        $that.css('display','block');
                    };
                });
            } else {
                //no image
                $that.css('display','block');
            }

        });*/

        $container.imagesLoaded( function() {
            $container.packery({
                // options...
                itemSelector: itemClass,
                columnWidth: itemGutterClass
            }).packery('bindResize').css({visibility: 'visible'});
            $loading.css({display: 'none'});
            initialized=true;
        });
    }

    /*
    PackeryGrid.prototype.pack = function()
    {
        if(initialized)$container.packery('destroy');
        $container.packery({
            // options...
            itemSelector: itemClass,
            columnWidth: itemGutterClass
        }).packery('bindResize');
        initialized=true;
    }*/

    window.PackeryGrid = PackeryGrid;

}(window));
