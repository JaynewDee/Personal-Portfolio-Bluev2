const properNoun = document.getElementById('nametag');

window.addEventListener('load', (event) => {
     setInterval(frame, 13);

     let position = 0;
     let speed = 0;
     let fade = 0.0;
     let clear = null;
     let stopper = properNoun.style.opacity;
     console.log(stopper)
     function frame() {
          if (position < 175) {
               position++;
               $('#nametag').css({'margin-left': `${speed}px`, 'opacity': `${fade}`});
               fade += 1/200;
               speed++;}

          
}})
