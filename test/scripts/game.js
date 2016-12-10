var params = require('./modules/urlParams');
var _ = require('lodash');
var Phaser = require('phaser');
var utils = require('utils');
var {scope,game} = require('./main');

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
		switch(params.example){
			default :
			case '1':
				require('./example1')();
			break;
			// case '2':
			// 	require('./example2');
			// break;
		}
	}

	return state;
}
