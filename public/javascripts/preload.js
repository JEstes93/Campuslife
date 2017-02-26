Crafty.init(600, 500, document.getElementById('game'));

//여러 이미지 하나로 합치기로

var assetsObj = {
	"audio":{
		"peaceful" : "assets/gogosi.mp3" //오디오
	},
    "sprites": {
        "assets/cat_sprite.png": {
            tile: 64,
            tileh: 64,
            map: {
                user_idle_start: [0, 0]
            }
        },
		"assets/spin.png": {
            tile: 514,
            tileh: 450,
            map: {
                npc_idle_start: [0, 0]
            }
        },
		"assets/mon.png":{
			tile: 64,
			tileh: 64,
			map: {
				mon_attack_start: [0, 2]
			}
		},
		"assets/nyan.png":{
			tile: 147,
			tileh: 72,
			map: {
				nyan_idle: [0,0]
			}
		}
    }
};

//Crafty.viewport.scale(2);

Crafty.scene("Loading", function () {
	Crafty.e("2D, DOM, Text")
		.attr({ w: 100, h: 20, x: 280, y: 270 })
		.text("Loading...")
		.css({ "text-align": "center" });
	Crafty.e("2D, DOM, ProgressBar")
		.attr({ x: 250, y : 230, w: 100, h: 25, z: 100 })
		// progressBar(Number maxValue, Boolean flipDirection, String emptyColor, String filledColor)
		.progressBar(100, false, "blue", "green")
		.bind("LOADING_PROGRESS", function(percent) {
			// updateBarProgress(Number currentValue)
			this.updateBarProgress(percent);
		});

	Crafty.load(assetsObj, function(){
		Crafty.scene("Main");
	}, function(e){
		/*console.log(e);
		console.log(e.loaded);
		console.log(e.total);
		console.log(e.percent);
		console.log(e.src);
		*/
		//procress
	}, function(error){
		//error
	});
});

Crafty.scene("Loading");