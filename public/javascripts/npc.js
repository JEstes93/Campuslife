var npc = {}; // 이거
npc.create = function(option){
	var defaultValue = {
		name: "noName",
		spriteImg: false,
		animate: [],
		speed: 1000,
		isMove: false
	};
	$.extend(this, defaultValue, option);
	if(this.spriteImg){
		this.entity = Crafty.e('2D, Canvas,'+this.spriteImg+',SpriteAnimation')
							.reel("idle", this.speed, this.animate)
							.animate("idle", -1);
	}
	if(this.isMove){
		
	}
};
npc.draw = function(){
	var myNpc = new npc.create({name:"spin", spriteImg: "npc_idle_start", 
								animate: [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],
										  [0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],
										 [0,2],[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],
										 [0,3],[1,3],[2,3],[3,3],[4,3],[5,3],[6,3],
										 [0,4],[1,4],[2,4],[3,4],[4,4],[5,4],[6,4],
										 [0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],
										 [0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6],
										 [0,7],[1,7],[2,7],[3,7]]});

	var mon = new npc.create({name:"ekfueh", spriteImg: "mon_attack_start",
							 animate: [[0,2],[1,2],[2,2],[3,2]], speed: 500});
};

var user = {};
user.create = function(options){
	var defaultValue = {
		name: "noname",
		initX:10, //캐릭터 만들고, 게임 처음 상태 
		initY:10,  //나중엔 DB에서가져와
		spriteImg: false,  //DB 에서 가져와
	};	
	$.extend(this, defaultValue, options);
	
	var movearr=[];
	
	if(this.spriteImg){
		this.entity = Crafty.e('2D, Canvas,' + this.spriteImg + ', SpriteAnimation, Fourway, Keybord')
			.attr({x: this.initX, y: this.initY})
			.reel("idle_Left", 1000, [
				[15, 0], [14, 0], [13, 0], [12, 0]
			])
			.reel("idle_Right", 1000, [
				[0, 0],[1, 0], [2, 0], [3, 0]
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
				move(this,e.key,movearr,'KeyDown');	
			})
			.bind('KeyUp', function(e) {
				move(this,e.key,movearr,'KeyUp');
			});
	}
	
	//관련 함수 정의부
	function move(ent,key,keyarray,event){
		if (key == Crafty.keys.LEFT_ARROW || key == Crafty.keys.RIGHT_ARROW 
				||key == Crafty.keys.DOWN_ARROW || key == Crafty.keys.UP_ARROW) {

			if(event == "KeyDown"){
				movearr.push(key);
			}else{
				var delkey = keyarray.indexOf(key);
				if(delkey != -1){
					keyarray.splice(delkey,1);
					if(keyarray.length < 1){
						if(ent.getReel().id == "walking_Left"){
							ent.animate("idle_Left",-1);
						}else if(ent.getReel().id == "walking_Right"){
							ent.animate("idle_Right",-1);
						}
						return;
					}
				}else{
					console.log("키보드 이벤트 에러");
					return;
				}	
			}

			if(keyarray[0] == Crafty.keys.LEFT_ARROW) {
					ent.animate("walking_Left",-1);
			} else if (keyarray[0] == Crafty.keys.RIGHT_ARROW) {
					ent.animate("walking_Right",-1);
			} else if (keyarray[0] == Crafty.keys.DOWN_ARROW 
					   || keyarray[0] == Crafty.keys.UP_ARROW) {	
				var left = keyarray.indexOf(Crafty.keys.LEFT_ARROW);
				var right = keyarray.indexOf(Crafty.keys.RIGHT_ARROW);
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
	}
};

user.draw = function(){
	var my= new user.create({name:"me", spriteImg: "user_idle_start"});
	Crafty.viewport.clampToEntities = false;
	Crafty.viewport.follow(my.entity,0,0);
};