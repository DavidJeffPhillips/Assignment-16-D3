// @TODO: YOUR CODE HERE!
//  SVG setup
var svgWidth = 1200;
var svgHeight = 800;
var margin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50
};
var height = svgHeight - margin.top - margin.bottom;
var width = svgWidth - margin.left - margin.right;
var svgarea = d3.select("#scatter")
    .append("svg")
    .attr("height", height)
    .attr("width", width);
//  data
d3.csv("assets/data/data.csv", function (data) {
data.forEach(function(d) {
    d.id = +d.id;
    d.poverty = +d.poverty;
    d.povertyMoe = +d.povertyMoe;
    d.age = +d.age;
    d.ageMoe = +d.ageMoe;
    d.income = +d.income;
    d.incomeMoe = + d.incomeMoe;
    d.healthcare = +d.healthcare;
    d.healthcareLow = +d.healthcareLow;
    d.healthcareHigh = +d.healthcareHigh;
    d.obesity = +d.obesity;
    d.obesityLow = + d.obesityLow;
    d.obesityHigh = +d.obesityHigh;
    d.smokes = +d.smokes;
    d.smokesLow = d.smokesLow;
    d.smokesHigh = d.smokesHigh;
    return d;
});
data.forEach(function(d) {
    console.log(d.abbr);
});
});
