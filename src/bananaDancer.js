var makeBananaDancer = function(top, left, timeBetweenSteps, className) {
  this.oldStep = MakeDancer.prototype.step;
  this.className = 'banana-dancer';
  MakeDancer.call(this, top, left, timeBetweenSteps, className);
};

makeBananaDancer.prototype = Object.create(MakeDancer.prototype);
makeBananaDancer.prototype.constructor = makeBananaDancer;


makeBananaDancer.prototype.step = function() {
  this.oldStep();
  this.$node.slideUp();
  this.$node.slideDown();
};

makeBananaDancer.prototype.setClassName = function() {
  this.oldStep();
};
