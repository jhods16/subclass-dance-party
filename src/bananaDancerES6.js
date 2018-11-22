window.makeBananaDancer = class makeBananaDancer extends MakeDancer {


  constructor(top, left, timeBetweenSteps, className, $node) {
    super(top, left, timeBetweenSteps, className, $node);
  }

  step() {
  
    super.step();

    this.$node.slideUp();
    this.$node.slideDown();
  }


}