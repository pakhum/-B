(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 775,
	height: 160,
	fps: 120,
	color: "#FFFFFF",
	manifest: [
		{src:"images/ส่วนหัว_1.jpg", id:"ส่วนหัว_1"}
	]
};



// symbols:



(lib.ส่วนหัว_1 = function() {
	this.initialize(img.ส่วนหัว_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,180);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.302)","#000000"],[0,1],2.5,7,0,2.5,7,105.5).s().p("AmxtuIDsg/IJ3b6IkKBhg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.5,-94.2,87,188.5);


// stage content:
(lib.ส่วนหัว = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// เงา
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(-50.5,98,1,1.149,0,-0.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:825.1},185).wait(1));

	// Layer 1
	this.instance_1 = new lib.ส่วนหัว_1();
	this.instance_1.setTransform(-1.8,-1,0.97,0.905);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(186));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(292.4,69.8,869.1,216.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;