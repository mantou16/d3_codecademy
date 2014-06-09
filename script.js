/**
 * @author Mei, Zhiyong
 */

d3.selectAll("circle").attr("r", function(d,i){return (i+1)*10;});

var draw_data = function(data)
{
	var svg = d3.select("svg");
	var circle = svg.selectAll("circle").data(data);
	
	circle.enter().append("circle")
		.attr("cx", function(d, i) {return 40*(i+1);})
		.attr("cy", function(d, i) {return 30*(i+1);})
		.attr("r", 0);
	
	circle.transition()
		.duration(750)
		.attr("r", function(d){return Math.sqrt(d);})
		.attr("cx", function(d, i){return 40*(i+1);})
		.attr("cy", function(d, i){return 30*(i+1);})
		.attr("r", function(d){return Math.sqrt(d*0.3);});
		
	circle.exit()
		.transition()
		.duration(750)
		.remove();
};

setTimeout(function(){draw_data([1000, 2000, 3000]);}, 2000);
setTimeout(function(){draw_data([100, 200, 300, 400]);}, 4000);
setTimeout(function(){draw_data([500, 700, 600]);}, 6000);
setTimeout(function(){draw_data([1200, 1000]);}, 8000);


//example
// You can replace selectAll("circle") by selectALL("something") to see what happends
// if you try that click hint to see some explaination.
var circle = d3.select("#example").selectAll("circle")
    .data([50,60,70,80]);
    
circle.enter().append("circle")
    .attr("cx",function(d){return d})
    .attr("cy",function(d){return d})
    .attr("r",20);

//write your own code here
var circle2 = d3.select("#exercise").selectAll("circle")
    .data([60,70,80,90]);
    
circle2.enter().append("circle")
    .attr("cx", function(d){return d})
    .attr("cy", function(d){return d})
    .attr("r", function(d){return d/2});
