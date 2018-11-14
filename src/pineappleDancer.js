var makePineappleDancer = function(top, left, timeBetweenSteps, className) {
  this.className = 'pineapple-dancer';
  MakeDancer.call(this, top, left, timeBetweenSteps, className);
};

makePineappleDancer.prototype = Object.create(MakeDancer.prototype);
makePineappleDancer.prototype.constructor = makePineappleDancer;


makePineappleDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);

  this.$node.fadeOut();
  this.$node.fadeIn();
  this.$node.animate('width', '30px');
};