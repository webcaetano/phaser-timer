var _ = require('lodash');
var Phaser = require('phaser');

module.exports = function(labelTop,doneLabel){
	var {scope,game,timer,craft} = require('./main');

	timer.repeatTimes(5,500,function(i){
		labelTop.text = i;
	},function(){
		// console.log('done');
		doneLabel.visible = true;
	});
}
