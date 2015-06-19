(function(window){

    SVGanim.prototype.constructor = SVGanim;
    
    function SVGanim(){
    	ref = this;
    	this.centerOrigin = [];
    }

	var s, icons, svg, svgBounds, height, width,m, XY, XYstart;
	var multiplier = 3;
	var svgSelector = '.svg-wrap svg';
	var iconGroupSelector = '#layer1 > g';
	var XY = [], XYnorm , XYstart = [];

	SVGanim.prototype.init = function() {

		s = Snap(svgSelector);
		icons = s.selectAll(iconGroupSelector);

	    var viewBox = s.attr('viewBox');

		// cords for new origin center center of svg, not upper left corner
		ref.centerOrigin['x'] = viewBox.width / 2;
		ref.centerOrigin['y'] = viewBox.height / 2;
		
		for ( var i = icons.length - 1; i >= 0; i--) {
			
			bounds = icons[i].getBBox();

			// group origin middle of group, not upper left corner
			XY['x'] = bounds.x + (bounds.width / 2);
			XY['y'] = bounds.y + (bounds.height / 2);
			
			// bring the groups cords to center center origin				
			XYnorm = ref.transformToCenterOrigin(XY);

			// the slope
			m = XYnorm['y'] / XYnorm['x']; 

			// calculate starting point of animation and bring it to svg coordinate system
			XYstart['x'] = XYnorm['x'] * multiplier;
			XYstart['y'] = m * XYstart['x']; 
			XYstart = ref.transformToSVGOrigin(XYstart);

			// ref.renderHelpers(s,XY['x'],XY['y'],XYstart['x'],XYstart['y']);
			
			$(icons[i].node).velocity({ 
			properties : {
					translateZ: 0, // Force HA by animating a 3D property
					translateX: [ 0,"easeOutSine",XYstart['x'] - XY['x'] ],
					translateY: [ 0,"easeOutSine",XYstart['y'] - XY['y'] ],
					opacity: [ 1, "easeOutSine", 0 ]
				},
			options : { duration : 1500 }
			});
		}
	};

	SVGanim.prototype.calcInitalCoords = function( mode, coords) {
		
		var InitalCoords; 
		switch(mode) {
			case 'circular':
				InitalCoords = cords; 
			break;
			default:
		}

		return InitalCoords; 
	}

	SVGanim.prototype.transformToCenterOrigin = function(cords) {
		var newcords = [];
		newcords['x'] = cords['x'] - ref.centerOrigin['x'];
		newcords['y'] = cords['y'] - ref.centerOrigin['y'];
		return newcords;
	
	}

	SVGanim.prototype.transformToSVGOrigin = function(cords) {
		var newcords = [];
		newcords['x'] = cords['x'] + ref.centerOrigin['x'];
		newcords['y'] = cords['y'] + ref.centerOrigin['y'];
		return newcords;
	}


	SVGanim.prototype.renderHelpers = function(s,x,y,x1,y1) {

		var dot = s.circle(x , y , 4);
		var dot1 = s.circle(x1 , y1 , 2);

		dot.attr({
			fill: "green"
		});

		dot1.attr({
			fill: "red"
		});

		var line = s.line(x , y , x1, y1 );
		// var line = s.line(x , y , 0 , 0);

		line.attr({
			'stroke' : "red",
			'stroke-width' : "1"
		});
	}

    window.SVGanim = SVGanim;

}(window));

	