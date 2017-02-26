var npc = {}; // 이거
npc.create = function(option){
	var defaultValue = {
		name: "noName",
		spriteImg: false,
		animate: [],
		speed: 1000,
		initX: 0,
		initY: 0,
		isMove: false
		//is위치랜덤?
	};
	$.extend(this, defaultValue, option);
	if(this.spriteImg){
		this.entity = Crafty.e('2D, Canvas,'+this.spriteImg+',SpriteAnimation')
							.attr({x:this.initX, y:this.initY})  //is위치랜덤?위치랜덤
							.reel("idle", this.speed, this.animate)
							.animate("idle", -1);
	}
	if(this.isMove){
		
	}
};
npc.list = [];
npc.draw = function(){
	npc.list.push(new npc.create({name:"spin", spriteImg: "npc_idle_start",   //배열 생성자 고민
								animate: [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],
										  [0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],
										 [0,2],[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],
										 [0,3],[1,3],[2,3],[3,3],[4,3],[5,3],[6,3],
										 [0,4],[1,4],[2,4],[3,4],[4,4],[5,4],[6,4],
										 [0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],
										 [0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6],
										 [0,7],[1,7],[2,7],[3,7]], speed: 1400, initX:130, initY:-300})
				  );

	npc.list.push(new npc.create({name:"ekfueh", spriteImg: "mon_attack_start",
							 animate: [[0,2],[1,2],[2,2],[3,2]], speed: 500, initX: rand(), initY:rand()})
				  );
	npc.list.push(new npc.create({name:"ekfueh", spriteImg: "mon_attack_start",
							 animate: [[0,2],[1,2],[2,2],[3,2]], speed: 500, initX: rand(), initY:rand()})
				  );
	npc.list.push(new npc.create({name:"ekfueh", spriteImg: "mon_attack_start",
							 animate: [[0,2],[1,2],[2,2],[3,2]], speed: 500, initX: rand(), initY:rand()})
				  );
	npc.list.push(new npc.create({name:"nyan", spriteImg: "nyan_idle",
								 animate: [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0]], speed: 300, initX: -300, initY:-50})
				 );
};