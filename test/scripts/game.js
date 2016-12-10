var params = require('./modules/urlParams');
var _ = require('lodash');
var Phaser = require('phaser');
var utils = require('utils');
var {scope,game,craft} = require('./main');

var assets = {
	images:{
		phaserDude:'images/phaser-dude.png'
	},
	sprites:{},
	audio:{},
	atlas:{}
}
var scope = {};

module.exports = function(){
	var state = {};

	state.init = function(){
	}

	state.preload = function(){
		game.stage.disableVisibilityChange = false;
		game.stage.backgroundColor = '#262626';
		utils.loadAssets(game,assets);
		game.load.start();
	}

	state.create = function(){
		var examples = _.transform([
			'repeatEach',
			'loopEach',
		],function(resp,val,i){
			resp[val] = require('./'+val);
		},{});


		var labelTop = craft.$text('0',{
			size:60,
			color:'#FFFFFF'
		}).$set({
			x:0,
			y:game.height*0.19,
			textBounds:new Phaser.Rectangle(0,0,game.width,0),
			boundsAlignH:'center'
		});

		var doneLabel = craft.$text('done',{
			size:30,
			color:'#22FF38'
		}).$set({
			x:0,
			y:game.height*0.49,
			visible:false,
			textBounds:new Phaser.Rectangle(0,0,game.width,0),
			boundsAlignH:'center'
		});

		if(!params.example){
			require('./repeatEach')(labelTop,doneLabel);
		} else {
			examples[params.example](labelTop,doneLabel);
		}
	}

	return state;
}
