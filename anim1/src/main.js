// configuration

import test from './test';

console.log("test = " + test);

var conf = {
  colors: [
    'lightgrey', 'lightgreen', 'lightblue', 'lightyellow', 'lightpink', 'lightorange', 'lightsalmon', 'red', 'aqua', 'cyan', 'coral', 'crimson'
  ],
  easings: [
    'ease', 'ease-in-out', 'ease-in', 'ease-out', 'linear'
  ],
  nbBalls: 15,
  maxDuration: 8
}

// DOM elements
var main = document.querySelector('#main')
var template = document.querySelector('#ball-template').content

class Ball {
  constructor() {
    this.color = _.sample(conf.colors)
    this.top = Ball.lastTop += 120;
    // this.duration = rand();
    this.duration = _.random(1000, (conf.maxDuration * 1000));
    let newBall = template.cloneNode(true);
    let divInTemplate = newBall.querySelector('div');
    divInTemplate.style['background-color'] = this.color;
    divInTemplate.style['top'] = this.top + 'px';
    divInTemplate.style.transition = 'transform ' + this.duration + 'ms ' + _.sample(conf.easings);
    this.DOMElement = divInTemplate;
  }
  launchInterval() {
    let ball = this;
    setInterval(function () {
      ball.DOMElement.classList.toggle('anim');
    }, ball.duration);
    
    // var anim = function(){
    //   ball.DOMElement.classList.toggle('anim');
    //   requestAnimationFrame(anim);
    // };
    // requestAnimationFrame(anim);
  }
}

// propriété statique de la classe Ball
Ball.lastTop = -120;

var balls = [];

for (var i = 0; i < conf.nbBalls; i++) {
  balls.push(new Ball());
}

balls.forEach(function (ball) {
  main.appendChild(ball.DOMElement);
});

balls.forEach(function (ball) {
  ball.launchInterval();
})