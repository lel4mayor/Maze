var boxtop = 234;
var boxleft = 10;

'use strict';

document.addEventListener('keydown', (event) => {
  const keyName = event.key;

  if(keyName == 'ArrowDown') {
      movePlayer(1,0);
    
  } else if(keyName === 'ArrowUp') {
      movePlayer(-1,0);

  } else if(keyName === 'ArrowLeft') {
      movePlayer(0,-1);

  } else if(keyName === 'ArrowRight') {
      movePlayer(0,1);
      
  }



});