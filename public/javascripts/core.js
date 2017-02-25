/**
 * Created by swpark on 2017. 2. 25..
 */
Crafty.init(500, 350, document.getElementById('game'));

var assetsObj = {
    "sprites": {
        "assets/cat_sprite.png": {
            tile: 64,
            tileh: 64,
            map: {
                idle_start: [0, 0]
            }
        }
    }
};

Crafty.viewport.scale(2);

Crafty.load(assetsObj, function(){
	var count=0;
	var keyarr = [];
	var walker = Crafty.e('2D, Canvas, idle_start, SpriteAnimation, Fourway, Keybord')
		.reel("idle_Left", 1000, [
			[15, 0], [14, 0], [13, 0], [12, 0]
		])
		.reel("idle_Right", 1000, [
			[1, 0], [2, 0], [3, 0]
		])
		.reel("walking_Left", 1000, [
			[15, 1], [14, 1], [13, 1], [12, 1], [11, 1],
			[10, 1], [9, 1], [8, 1]
		])
		.reel("walking_Right", 1000, [
			[0, 1], [1, 1], [2, 1], [3, 1], [4, 1]
			, [5, 1], [6, 1], [7, 1]
		])
		.animate("idle_Right", -1)
    	.fourway(100)
		.bind('KeyDown', function(e) {
			/*keyboard[e.keyCode] = true;
			if(keyboard[Crafty.keys.LEFT_ARROW]) {
    			count++;
				if(!keyboard[Crafty.keys.RIGHT_ARROW])
					this.animate("walking_Left",-1);
    		} else if (keyboard[Crafty.keys.RIGHT_ARROW]) {
    			count++;
				if(!keyboard[Crafty.keys.LEFT_ARROW])
					this.animate("walking_Right",-1);
    		} else if (keyboard[Crafty.keys.DOWN_ARROW] || keyboard[Crafty.keys.UP_ARROW]) {
				count++;
				if(this.getReel().id.indexOf("Left") != -1){
					this.animate("walking_Left",-1);
				}else{
					this.animate("walking_Right",-1);
				}
    		}
			*/
			keyarr.push(e.key);
			move(this,keyarr);
			
  		})
		.bind('KeyUp', function(e) {
			/*keyboard[e.keyCode] = false;
			if (e.key == Crafty.keys.LEFT_ARROW ||e.key == Crafty.keys.RIGHT_ARROW 
				||e.key == Crafty.keys.DOWN_ARROW || e.key == Crafty.keys.UP_ARROW) {
				count--;
			}
			
			if(!count){
				
			}
			*/
			var delkey = keyarr.indexOf(e.key);
			if(delkey != -1){
				keyarr.splice(delkey,1);
				if(keyarr.length < 1){
					if(this.getReel().id == "walking_Left"){
						this.animate("idle_Left",-1);
					}else if(this.getReel().id == "walking_Right"){
						this.animate("idle_Right",-1);
					}
				}else{
					move(this,keyarr);
				}
			}else{
				console.log("키보드 이벤트 에러");
			}
			
		});
	
	
	function move(ent,keyarray){
		if(keyarray[0] == Crafty.keys.LEFT_ARROW) {
				ent.animate("walking_Left",-1);
    	} else if (keyarray[0] == Crafty.keys.RIGHT_ARROW) {
				ent.animate("walking_Right",-1);
    	} else if (keyarray[0] == Crafty.keys.DOWN_ARROW || keyarray[0] == Crafty.keys.UP_ARROW) {	
			var left = keyarray.indexOf(Crafty.keys.LEFT_ARROW);
			var right = keyarray.indexOf(Crafty.keys.LEFT_ARROW);
			console.log(left + ":" + right);
			if(left != -1 && right != -1){
				if(left > right){
					ent.animate("walking_Right",-1);	
				}else{
					ent.animate("walking_Left",-1);
				}
			}else if(left != -1){
				ent.animate("walking_Left",-1);
			}else if(right != -1){
				ent.animate("walking_Right",-1);
			}else{
				if(ent.getReel().id.indexOf("Left") != -1){
					ent.animate("walking_Left",-1);
				}else{
					ent.animate("walking_Right",-1);
				}
			}
    	}
	}
});
var keyboard = [];
