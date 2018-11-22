window.makePineappleDancer = class makePineappleDancer extends MakeDancer {


  constructor(top, left, timeBetweenSteps, className, $node) {
    super(top, left, timeBetweenSteps, className, $node);
  }

  step() {
  
    super.step();

    this.$node.fadeOut();
    this.$node.fadeIn();
  }

}