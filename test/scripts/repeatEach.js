var _ = require('lodash');
var Phaser = require('phaser');

module.exports = function(labelTop,doneLabel){
	var {scope,game,timer,craft} = require('./main');

	timer.repeatEach([1,2,3,4,5],500,function(val,i){
		// console.log(val,i)
		labelTop.text = val;
	},function(){
		// console.log('done');
		doneLabel.visible = true;
	});
}
