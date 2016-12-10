var Phaser = require('phaser');


module.exports = function(game){
	var self = {};

	self.repeatEach = function(data,delay,callback=_.noop,onComplete=null,playAtStart=false){
		var timer = game.time.create(false);
		var i = 0;
		var tick = function(){
			callback.apply(null,[data[i],i]);
			i++;
		}

		if(playAtStart) tick();
		timer.repeat(delay,data.length-(playAtStart ? 1 : 0),tick)
		timer.start();
		timer.onComplete.addOnce(function(){
			if(onComplete) onComplete();
			timer.destroy();
		});

		return timer;
	}

	self.loopEach = function(data,delay,callback=_.noop,playAtStart=false){
		var timer = game.time.create(false);
		var i = 0;
		var tick = function(){
			callback.apply(null,[data[i],i]);
			i = (i+1)%data.length;
		}

		if(playAtStart) tick();
		timer.loop(delay,tick)
		timer.start();

		return timer;
	}

	self.repeatTimes = function(amount,delay,callback=_.noop,onComplete=null,playAtStart=false){
		var timer = game.time.create(false);
		var i = 0;
		var tick = function(){
			callback.apply(null,[i]);
			i++;
		}

		if(playAtStart) tick();
		timer.repeat(delay,amount-(playAtStart ? 1 : 0),tick)
		timer.start();
		timer.onComplete.addOnce(function(){
			if(onComplete) onComplete();
			timer.destroy();
		});

		return timer;
	}

	self.loopTimes = function(amount,delay,callback=_.noop,playAtStart=false){
		var timer = game.time.create(false);
		var i = 0;
		var tick = function(){
			callback.apply(null,[i]);
			i = (i+1)%amount;
		}

		if(playAtStart) tick();
		timer.loop(delay,tick)
		timer.start();

		return timer;
	}

	return self;
}
