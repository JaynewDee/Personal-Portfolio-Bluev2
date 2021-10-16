const properNoun = document.getElementById('nametag');

window.addEventListener('load', (event) => {
     setInterval(frame, 15);
     let pos = 0;
     let speed = 0;
     let fade = 1;
     function frame() {
          if (pos == 180) {
               return;
          } else {
               pos++;
               properNoun.setAttribute('style', `margin-left: ${speed}px`)
               // properNoun.setAttribute('style', `opacity: ${fade}`);
               // fade - (1/10);
               speed++;
          }
     }
})