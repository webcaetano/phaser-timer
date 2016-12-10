var _ = require('lodash');
var Phaser = require('phaser');

module.exports = function(labelTop,doneLabel){
	var {scope,game,timer,craft} = require('./main');

	timer.loopTimes(10,100,function(i){
		labelTop.text = i;
	},);
}
