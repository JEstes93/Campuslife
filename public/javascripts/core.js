/**
 * Created by swpark on 2017. 2. 25..
 */
Crafty.scene("Main", function () {
	npc.draw();
	user.draw();
	Crafty.audio.play("peaceful",-1,0.01);
	
	npc.list[4].entity.bind("EnterFrame",function(){
		if(this.x < -299){
			this.flag = 6;
			this.unflip();		
		}else if(this.x > 100){
			this.flag = -6;
			this.flip();
		}
		this.x = this.x + this.flag;
	});
	
	//80때 토글, 0때 토글 
	
	setInterval(function(){
		npc.list[1].entity.x = user.list[0].entity.x - rand();
		npc.list[1].entity.y = user.list[0].entity.y - rand();
		npc.list[2].entity.x = user.list[0].entity.x - rand();
		npc.list[2].entity.y = user.list[0].entity.y - rand();
		npc.list[3].entity.x = user.list[0].entity.x - rand();
		npc.list[3].entity.y = user.list[0].entity.y - rand();
	},100);
});