const properNoun = document.getElementById('nametag');

window.addEventListener('load', (event) => {
     setInterval(frame, 13);
     let pos = 0;
     let speed = 0;
     let fade = 0.0;
     function frame() {
          
          if (pos < 180) {
               pos++;
               $('#nametag').css({'margin-left': `${speed}px`, 'opacity': `${fade}`});
               fade += 1/200;
               speed++;
          } else {
               return;
          }
     }
})
