/**
 * Created by swpark on 2017. 2. 25..
 */
Crafty.init(600, 550, document.getElementById('game'));

//여러 이미지 하나로 합치기로

var assetsObj = {
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
		}
    }
};

//Crafty.viewport.scale(2);

Crafty.load(assetsObj, function(){
	var count=0;
	var movearr = [];
	
	npc.draw();
	user.draw();
	
	
	
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