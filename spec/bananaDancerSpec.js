describe('bananaDancer', function() {

  var bananaDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bananaDancer = new makeBananaDancer(10, 20, timeBetweenSteps, 'banana-dancer');
  });

  it('should have a jQuery $node object', function() {
    expect(bananaDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node slide up and down', function() {
    sinon.spy(bananaDancer.$node, 'slideUp');
    sinon.spy(bananaDancer.$node, 'slideDown');
    bananaDancer.step();
    expect(bananaDancer.$node.slideUp.called).to.be.true;
    expect(bananaDancer.$node.slideDown.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(bananaDancer, 'step');
      expect(bananaDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(bananaDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bananaDancer.step.callCount).to.be.equal(2);
    });
    // it('should set the class for each dancer', function() {
    //   sinon.spy(bananaDancer, 'setClass');
    //   expect(bananaDancer.setPosition.called).to.be.true;
    // });
  });
});