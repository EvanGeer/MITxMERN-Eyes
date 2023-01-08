const eyeballs = document.getElementsByClassName("eyeball");

function update(eyeball, x, y) {
  eyeball.style.left = x;
  eyeball.style.top = y;
  eyeball.transform = `translate(-${x},-${y})`;
}

document.onmousemove = (moveMoveEvent) => {

  const x = (moveMoveEvent.clientX * 100) / window.innerWidth;
  
  // Note: Math.min sets a lower bound for the eyeballs so that they don't go below the socket
  // Note: the height is scaled by 65% since to account for the location of the sockets
  const y = Math.min(100, (moveMoveEvent.clientY * 100) / (window.innerHeight  * .65));
  console.log('x: ' + x);
  console.log('y: ' + y);
  console.log(eyeballs);

  for (i = 0; i < eyeballs.length; i++) {
    update(eyeballs[i], `${x}%`, `${y}%`);
  } 
};
