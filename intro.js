(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"intro_atlas_1", frames: [[0,109,950,125],[952,109,974,72],[0,0,1939,107]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_411 = function() {
	this.initialize(ss["intro_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_484 = function() {
	this.initialize(ss["intro_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_483 = function() {
	this.initialize(ss["intro_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_482 = function() {
	this.initialize(img.CachedBmp_482);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2212,597);


(lib.CachedBmp_481 = function() {
	this.initialize(img.CachedBmp_481);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4152,1947);


(lib.Tween143 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_411();
	this.instance.setTransform(-287.45,-42.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-287.4,-42.4,475,62.5);


// stage content:
(lib.intro = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Tween143("synched",0);
	this.instance.setTransform(1658.45,769.15);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).wait(1).to({regX:-49.9,regY:-11.2,scaleX:0.9746,scaleY:0.9746,x:1623.05,y:764.55},0).wait(1).to({scaleX:0.9491,scaleY:0.9491,x:1637.6,y:771.1},0).wait(1).to({scaleX:0.9237,scaleY:0.9237,x:1652.1,y:777.7},0).wait(1).to({scaleX:0.8982,scaleY:0.8982,x:1666.65,y:784.35},0).wait(1).to({scaleX:0.8728,scaleY:0.8728,x:1681.15,y:790.9},0).wait(1).to({scaleX:0.8473,scaleY:0.8473,x:1695.65,y:797.5},0).wait(1).to({scaleX:0.8219,scaleY:0.8219,x:1710.2,y:804.15},0).wait(1).to({scaleX:0.7964,scaleY:0.7964,x:1724.7,y:810.75},0).wait(1).to({scaleX:0.771,scaleY:0.771,x:1739.25,y:817.3},0).wait(1).to({scaleX:0.7456,scaleY:0.7456,x:1753.75,y:823.95},0).wait(1).to({scaleX:0.7201,scaleY:0.7201,x:1768.25,y:830.55},0).wait(1).to({scaleX:0.6947,scaleY:0.6947,x:1782.8,y:837.1},0).wait(1).to({scaleX:0.6692,scaleY:0.6692,x:1797.3,y:843.75},0).wait(1).to({scaleX:0.6438,scaleY:0.6438,x:1811.85,y:850.35},0).wait(1).to({scaleX:0.6183,scaleY:0.6183,x:1826.35,y:856.9},0).wait(1).to({scaleX:0.5929,scaleY:0.5929,x:1840.85,y:863.55},0).to({_off:true},1).wait(26));

	// Layer_1
	this.instance_1 = new lib.Tween143("synched",0);
	this.instance_1.setTransform(1658.45,769.15);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({alpha:1},11).to({_off:true},4).wait(17).to({_off:false,scaleX:0.5929,scaleY:0.5929,x:1870.45,y:870.2},0).wait(26));

	// background
	this.instance_2 = new lib.CachedBmp_484();
	this.instance_2.setTransform(29.45,856.65,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_483();
	this.instance_3.setTransform(560.9,526.8,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_482();
	this.instance_4.setTransform(477.85,218.95,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_481();
	this.instance_5.setTransform(-27.35,-27.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(61));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(980.7,434.1,1067.9999999999998,512);
// library properties:
lib.properties = {
	id: '4883887DF5CA440297D921ECC46FE5A3',
	width: 2016,
	height: 923,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_482.png", id:"CachedBmp_482"},
		{src:"images/CachedBmp_481.png", id:"CachedBmp_481"},
		{src:"images/intro_atlas_1.png", id:"intro_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4883887DF5CA440297D921ECC46FE5A3'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;