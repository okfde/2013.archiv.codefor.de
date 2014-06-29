/**
 * Author: gnomjogson
 * Date: 17.06.14
 * Created: 13:16
 **/
(function(window){

    PackeryGrid.prototype.constructor = PackeryGrid;

    var ref, $container, itemClass, itemGutterClass;
    function PackeryGrid(pContainerClass,pItemClass, pItemGutterClass){

        ref = this;
        itemClass = pItemClass;
        itemGutterClass = pItemGutterClass;
        $container = $(pContainerClass);
        ref.layout();

    };

    PackeryGrid.prototype.layout = function()
    {
        $container.imagesLoaded( function() {
            $container.packery({
                // options...
                itemSelector: itemClass,
                columnWidth: itemGutterClass
            }).packery('bindResize').css({opacity: 1});
        });
    }

    window.PackeryGrid = PackeryGrid;

}(window));
