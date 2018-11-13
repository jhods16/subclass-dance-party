var makeBananaDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = MakeDancer.prototype.step;
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="bananaDancer"></span>');

};

makeBananaDancer.prototype = Object.create(MakeDancer.prototype);
makeBananaDancer.prototype.constructor = makeBananaDancer;


makeBananaDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
};