var makePineappleDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = MakeDancer.prototype.step;
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer pineappleDancer"></span>');

};

makePineappleDancer.prototype = Object.create(MakeDancer.prototype);
makePineappleDancer.prototype.constructor = makePineappleDancer;


makePineappleDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
};