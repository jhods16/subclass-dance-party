var makeBananaDancer = function(top, left, timeBetweenSteps, className) {
  this.className = 'banana-dancer';
  MakeDancer.call(this, top, left, timeBetweenSteps, className);
};

makeBananaDancer.prototype = Object.create(MakeDancer.prototype);
makeBananaDancer.prototype.constructor = makeBananaDancer;


makeBananaDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.slideUp();
  this.$node.slideDown();
};

makeBananaDancer.prototype.setClassName = function() {
  this.oldStep();
};
