const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const articleHearts = document.getElementsByClassName('like-glyph');

function likeCallback(event) {
  const heart = event.target;
  mimicServerCall('sampleURL')
  .then( () => {
    if(heart.textContent === EMPTY_HEART){
      heart.textContent = FULL_HEART;
      heart.className = 'activated-heart';
    } else {
      heart.textContent = EMPTY_HEART;
      heart.className = '';
    }
  })
  .catch( error => {
      const modal = document.getElementById('modal');
      modal.className = '';
      modal.textContent = error;
      setTimeout( () => {modal.className = 'hidden'}, 3000);
  });
}

articleHearts.forEach(glyph => {
  glyph.addEventListener('click', likeCallback)
});

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
