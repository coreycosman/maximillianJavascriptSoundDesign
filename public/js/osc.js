var maximJs;
var maxiAudio = new maximJs.maxiAudio();
var myWave = new maximJs.maxiOsc();

var sineOne = function() {
  maxiAudio.init();
  maxiAudio.play = function() {
    this.output = myWave.sinewave(250);
  };
};

$('[name=sine__button]').on('click', function(e) {
  // e.preventDefault();
  sineOne();
  console.log('test');
});
