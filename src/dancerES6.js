// Creates and returns a new dancer object that can step
class MakeDancer {
  // use jQuery to create an HTML <span> tag
  constructor(top, left, timeBetweenSteps, className) {
    this.$node = $('<div class="dancer"></div>');
    this.top = top;
    this.left = left;
    this.timeBetweenSteps = timeBetweenSteps;
    this.className = className;

    this.step();
    this.setPosition(this.top, this.left);
    this.setClass(); 
  }

  step() {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }

  setPosition(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };

    this.$node.css(styleSettings);
  }

  setClass() {
    this.$node.addClass(this.className);
  }
};



