(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"fq_grad_atlas_1", frames: [[124,99,75,96],[201,99,66,96],[411,98,80,99],[359,99,25,96],[227,0,90,97],[331,99,26,96],[124,0,101,97],[319,0,90,97],[0,0,122,127],[269,99,60,96],[411,0,89,96]]}
];


(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_372 = function() {
	this.initialize(ss["fq_grad_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_369 = function() {
	this.initialize(ss["fq_grad_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_371 = function() {
	this.initialize(ss["fq_grad_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_370 = function() {
	this.initialize(ss["fq_grad_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_368 = function() {
	this.initialize(ss["fq_grad_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_364 = function() {
	this.initialize(ss["fq_grad_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_365 = function() {
	this.initialize(ss["fq_grad_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_363 = function() {
	this.initialize(ss["fq_grad_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_366 = function() {
	this.initialize(ss["fq_grad_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_362 = function() {
	this.initialize(ss["fq_grad_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_367 = function() {
	this.initialize(ss["fq_grad_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_359 = function() {
	this.initialize(img.CachedBmp_359);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1177,1780);


(lib.CachedBmp_361 = function() {
	this.initialize(img.CachedBmp_361);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1673,1906);


(lib.CachedBmp_358 = function() {
	this.initialize(img.CachedBmp_358);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1689,1905);


(lib.CachedBmp_360 = function() {
	this.initialize(img.CachedBmp_360);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2139,2218);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.トゥイーン1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.CachedBmp_372();
	this.instance.setTransform(201.25,-30.6,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_371();
	this.instance_1.setTransform(155.8,-32.25,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_370();
	this.instance_2.setTransform(135.9,-30.6,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_369();
	this.instance_3.setTransform(93.4,-30.6,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_368();
	this.instance_4.setTransform(42.3,-31.3,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_367();
	this.instance_5.setTransform(-10.1,-30.6,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_366();
	this.instance_6.setTransform(-69.55,-31.3,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_365();
	this.instance_7.setTransform(-129.5,-30.6,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_364();
	this.instance_8.setTransform(-149.9,-30.6,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_363();
	this.instance_9.setTransform(-202.5,-31.3,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_362();
	this.instance_10.setTransform(-238.55,-30.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-238.5,-32.2,477.3,64.4);


(lib.gradmask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.CachedBmp_361();
	this.instance.setTransform(-83.45,-92.35,0.0986,0.0986);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gradmask, new cjs.Rectangle(-83.4,-92.3,165,188), null);


(lib.R = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgXXA1nQksglkGh1QkgiBARh7QAIg9BlgtQA9gaDCg2QDag8CDgwQDahRCvhuQE9jHEZlgQELlODLmxQDGmnBvnJQBwnOAFmtQAEmEhcm2QggiXg2jQQg7jggbhpQhclxACjdQADknCZjsQA9heAngrQBChKBLgcQA4gWBDAAQCMAACwBaQCuBZC6ClQGSFlE0IuQFbJyBtKtQB+MUjXLmQi/KSm5I6QmTIIoxF/QoOFpoxCrQmhCAlmAAQh3AAhxgPg");
	mask.setTransform(512.2805,547.8063);

	// レイヤー_3
	this.instance = new lib.CachedBmp_360();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.R, new cjs.Rectangle(279.3,203.3,465.99999999999994,689.0999999999999), null);


(lib.L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAUrBE8QmlgMmjh4Qp3i0punmQp2nrnOqoQnsrUjFsWQjYthCss6QCts+IorZQHnqBLbn3QKMnALPkCQKijxICAAQDHAACVAoQCYApBaBQQBRBIAoB0QAXBFAUCIQAzFXi6FHQiLD1loFlIlFE8QjMDHiMCWQmSGxj0GvQkNHbiWI6QiTIzgKI9QgKJKCJIAQCPIaEiGGQCgDYDrDOQCNB8D6C4QDdCjA/A/QBoBmgcBIQgdBKiRAiQhvAZimAAIhEgBg");
	mask.setTransform(307.4614,441.2993);

	// レイヤー_3
	this.instance = new lib.CachedBmp_359();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.L, new cjs.Rectangle(40.3,0,534.4000000000001,882.6), null);


(lib.C = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgE1A69QodgtoXoTQnunrlZrwQlYrug9rLQhCsBEknYQDWlaHwkCQC6hhEdh1QClhDFWiGQEth7DQhoQEQiJDQiWQH4lsD2oZQAehBA5iPQAzh+Acg6QBbi3BxgOIAXgCQCfAADMD+QDED1C5GdQC+GnB8HgQCFIGAbHZQAuMjj4NzQjrNHm6LOQm7LRoSGQQn+GBniAAQgyAAgygFg");
	mask.setTransform(440.0693,470.1566);

	// レイヤー_5
	this.instance = new lib.CachedBmp_358();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.C, new cjs.Rectangle(175.9,92.4,528.4,755.5), null);


// stage content:
(lib.fq_grad_logo = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(74));

	// TEXT
	this.instance = new lib.トゥイーン1("synched",0);
	this.instance.setTransform(322.9,402.95);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({y:427.95,alpha:1},34).wait(1));

	// white_mask
	this.instance_1 = new lib.gradmask();
	this.instance_1.setTransform(406.35,477.75,4.7884,5.0693,180,0,0,-1.3,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-1.2,regY:1.8,scaleY:0.1157,x:405.9,y:-18.05},59).wait(15));

	// L
	this.instance_2 = new lib.L();
	this.instance_2.setTransform(251.55,388.25,0.8324,0.8324,0,0,0,294.4,445.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(74));

	// R
	this.instance_3 = new lib.R();
	this.instance_3.setTransform(588.25,427.75,0.8324,0.8324,0,0,0,535,549.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(74));

	// C
	this.instance_4 = new lib.C();
	this.instance_4.setTransform(375.75,400.05,0.8324,0.8324,0,0,0,417.6,476.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(74));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(406.5,370.7,626.7,582.8);
// library properties:
lib.properties = {
	id: 'D9CBE07F6AC98844873213BAACECB79B',
	width: 800,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_359.png", id:"CachedBmp_359"},
		{src:"images/CachedBmp_361.png", id:"CachedBmp_361"},
		{src:"images/CachedBmp_358.png", id:"CachedBmp_358"},
		{src:"images/CachedBmp_360.png", id:"CachedBmp_360"},
		{src:"images/fq_grad_atlas_1.png", id:"fq_grad_atlas_1"}
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
an.compositions['D9CBE07F6AC98844873213BAACECB79B'] = {
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
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;