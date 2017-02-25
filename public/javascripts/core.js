/**
 * Created by swpark on 2017. 2. 25..
 */
Crafty.init(500, 350, document.getElementById('game'));
Crafty.e('2D, Canvas, Color, Fourway')
    .attr({x:0, y:0, w:20, h:20})
    .color('green')
    .fourway(400);