var makePineappleDancer = function(top, left, timeBetweenSteps, className) {
  this.oldStep = MakeDancer.prototype.step;
  this.className = 'pineapple-dancer';
  MakeDancer.call(this, top, left, timeBetweenSteps, className);
};

makePineappleDancer.prototype = Object.create(MakeDancer.prototype);
makePineappleDancer.prototype.constructor = makePineappleDancer;


makePineappleDancer.prototype.step = function() {
  this.oldStep();

  this.$node.fadeOut();
  this.$node.fadeIn();
};