(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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
// helper functions:

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


(lib.トゥイーン2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#920883").s().p("AgYBaIAAgBQAPABAAgMIAAhRIgthJQgHgMgJAAIAAgCIArAAIAAACQgGAAAAAFQAAACADAFIAkA8IAqhAIABgEQAAgEgEAAIgBAAIAAgCIAbAAIAAACQgGABgCACQgDACgFAGIgtBDIAABSQABALACADQACADAJAAIAAABg");
	this.shape.setTransform(215.6152,-6.7556,2.6386,2.6386);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#920883").s().p("AgXBeIAAgCQAJgBACgCQADgEAAgJIAAidIguAAIgJABQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIABAFIgCAAIgIgWIACAAQABAEADACIAJABIB4AAIAKgBQADgCABgEIACAAIgIAWIgCAAIAAgFQAAgBAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgGgBIgvAAIAACbQAAAJABAEQACAEACAAIAJABIAAACg");
	this.shape_1.setTransform(171.485,-7.6131,2.6386,2.6386);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#920883").s().p("AgXBaIAAgBQAJAAACgDQACgEAAgMIAAiJQAAgNgCgEQgCgEgJAAIAAgCIAvAAIAAACIgIABQgEACgBADIgBANIAACKQAAALABADQABACADACQACACAHAAIAAABg");
	this.shape_2.setTransform(137.7112,-6.7556,2.6386,2.6386);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#920883").s().p("Ag9BaIAAgBQAIAAADgDQACgEAAgIIAAiSQAAgIgCgEQgCgDgKgBIAAgCIAxAAIAAACQgHAAgCACIgEAEIgBCJQAAARAIAGQAIAHASAAIAWAAQARAAAGgIQAIgJABgVIACAAIAAArg");
	this.shape_3.setTransform(105.2566,-6.7556,2.6386,2.6386);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#920883").s().p("AArBcIAAgBQAGAAAAgFQAAgDgDgHIgbhEIg1AAIgbBFIgCAJQAAAEAFABIAAABIgbAAIAAgBQAGAAADgDQAEgDAEgLIBDilIACAAIBGCrQAEALAKAAIAAABgAggAEIAxAAIgYg9g");
	this.shape_4.setTransform(60.0709,-7.1514,2.6386,2.6386);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#920883").s().p("Ag2BMQgQgPAAgbIAAhrQAAgKgCgDQgDgDgIAAIAAgBIAwAAIAAABQgHAAgEADQgDACAAAJIAABjQAAAfAOANQAPAOATAAQAdAAAWgbIAAh5QAAgRgDgDQgCgDgHAAIgCAAIAAgBIAwAAIAAABQgIABgDACQgCADAAAHIAACSIABAMQABADACABQADACAGAAIAAACIgiAAIAAgcQgbAdgiAAQgbAAgQgPg");
	this.shape_5.setTransform(7.1674,-6.5577,2.6386,2.6386);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#920883").s().p("AAeBqQgegOgdgaQgpAAgXgZQgWgaAAgfQAAgYALgZQAMgYAXgPQAXgQAgAAQAmAAAYAYQAYAXAAAjQAAAjgTAcQgTAdgkAJIAWAQQAQAMANAGQAQAIAKADQANAEAOAAIAOgBIAAABQgHAEgLACIgQADQgTAAghgPgAhQhaQgWAVAAAeQAAAmAbAdQAbAdAiAAQASAAARgKQATgKAKgSQALgRAAgSQAAgbgPgWQgPgWgWgLQgVgMgTAAQgaAAgXAUg");
	this.shape_6.setTransform(-43.9551,0.4345,2.6386,2.6386);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#920883").s().p("Ag9BaIAAgBQAIgBABgBQAEgCAAgJIAAiSQAAgKgCgDQgBgFgKAAIAAgCIBxAAIAAAaIgCAAQgEgPgCgCQgCgDgKABIg7AAIAABRIA3AAQAIAAACgBQABgBABgEIACAAIAAAQIgCAAQAAgEgDgBIgIgBIg4AAIAAA4QAAANACAGQADAFAFABIAuACQARAAACgCQAFAAADgDQADgDACgLIABAAIAAAYg");
	this.shape_7.setTransform(-99.0355,-6.7556,2.6386,2.6386);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#920883").s().p("Ag+g9IAACFQAAAHABACQAAABABABQAAAAAAABQAAAAABABQAAAAABAAIAJADIAAABIgjAAIAAgBQAKAAACgEQACgCAAgOIAAh5QAAgQgEgLQgFgKgQABIAAgCIAiAAICHCQIAAh/QAAgKgEgDQgEgCgFAAIAAgCIAjAAIAAACQgIABgDACQgEADAAAKIAAClg");
	this.shape_8.setTransform(-150.4878,-6.4258,2.6386,2.6386);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#920883").s().p("AgXBaIAAgBQAJAAACgDQACgEAAgMIAAiJQAAgNgCgEQgDgEgIAAIAAgCIAvAAIAAACIgIABQgEACgBADIgBANIAACKQAAALABADQABACADACQACACAHAAIAAABg");
	this.shape_9.setTransform(-190.0005,-6.7556,2.6386,2.6386);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#920883").s().p("Ag4BaIAAgBQAIAAACgDQADgEgBgFIAAiVQABgJgDgDQgEgEgGAAIAAgCIByAAIAAAVIgDAAIAAgBQgCgKgEgCQgFgBgJAAIg5AAIAABQIA1AAIAKgBQACgCAAgEIACAAIAAARIgCAAQAAgHgIAAIg5AAIAABJQAAAKADADQADADAHAAIAAABg");
	this.shape_10.setTransform(-219.3547,-6.7556,2.6386,2.6386);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-234.5,-32.3,468.9,64.6);


(lib.gradmask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,0.231],0,-93.9,0,94).s().p("As4OsIAA9XIZxAAIAAdXg");
	this.shape.setTransform(-1,1.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gradmask, new cjs.Rectangle(-83.5,-92.4,165,188), null);


// stage content:
(lib.fq_grad_logo_ok_ = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(74));

	// text
	this.instance = new lib.トゥイーン2("synched",0);
	this.instance.setTransform(326.8,367.05);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({y:428.35,alpha:1},34).wait(1));

	// white_mask
	this.instance_1 = new lib.gradmask();
	this.instance_1.setTransform(406.35,477.75,4.7884,5.0693,180,0,0,-1.3,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-1.2,regY:1.8,scaleY:0.1157,x:405.9,y:-18.05},59).wait(15));

	// mark
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#EBEDF7","#D2D6EC","#B4BCDF"],[0.004,0.549,1],10.4,13.9,0,10.4,13.9,78.7).s().p("AnYQ+QhfgMhTglQhbgpAFgnQADgTAggOQATgIA9gRQCWgpBVg2QDJh/CJkiQCDkYADkXQACh7geiLIg2jZQgch1AAhGQABhdAwhLQATgdAMgOQAVgXAYgKQBRgfCCBjQCFBlBtC1QB6DKAqDjQAwEIhID3Qg8DQiMC0Qh/ClixB5QinByixA2QiDAohxAAQgmAAgkgEg");
	this.shape.setTransform(568.5893,427.4356,2.6389,2.6389);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#F8D1E2","#F5BAD3"],[0.004,0.49,1],0,0,0,0,0,115.4).s().p("AGjV0QiFgEiFgmQjHg5jFiaQjHibiSjXQicjlg+j6QhEkSA2kFQBBk4DpkIQDIjkEjidQEDiNDwgoQDrgmBXBNQAZAXANAlQAIAWAGAqQAQBtg7BnQgsBOhyBxIjTDSQiACJhNCIQiwE3gGF7QgGGJC3D3QBOBpCrB+QBGA0AUATQAhAhgJAXQgRAqh9AAIgWAAg");
	this.shape_1.setTransform(260.7702,385.398,2.6389,2.6389);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#E1F3FC","#BAE3F9","#A6D4F2"],[0.412,0.776,1],-1.4,1.6,0,1.9,2.9,101.2).s().p("AhhSpQirgOipioQicibhtjuQhtjtgUjiQgVjzBdiVQBDhtCdhSQAzgbEDhpQDJhRBvhRQCfhzBOiqQAkhZARgjQAcg6AkgEQAygGBCBOQA/BLA8CEQCIErASE1QAOD+hOEWQhLEKiLDjQiNDkinB+QiiB6iXAAIgggCg");
	this.shape_2.setTransform(393.2553,395.4726,2.6389,2.6389);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(74));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(409.7,371.1,390.3,582.6999999999999);
// library properties:
lib.properties = {
	id: 'D9CBE07F6AC98844873213BAACECB79B',
	width: 800,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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