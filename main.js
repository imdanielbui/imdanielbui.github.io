// Confetti Canvas
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];

class Confetti {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height - canvas.height;
    this.size = Math.random() * 5 + 3;
    this.speedY = Math.random() * 3 + 2;
    this.speedX = (Math.random() - 0.5) * 2;
    this.rotation = Math.random() * Math.PI;
    this.rotationSpeed = (Math.random() - 0.5) * 0.1;
    this.color = ['#ff6b6b', '#4ecdc4', '#ffd700', '#ff85c0', '#9d84b7', '#fff'][Math.floor(Math.random() * 6)];
  }

  update() {
    this.y += this.speedY;
    this.x += this.speedX;
    this.rotation += this.rotationSpeed;
    
    if (this.y > canvas.height) {
      this.y = -10;
      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.fillStyle = this.color;
    ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
    ctx.restore();
  }
}

// Create confetti
for (let i = 0; i < 100; i++) {
  confetti.push(new Confetti());
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  confetti.forEach(particle => {
    particle.update();
    particle.draw();
  });
  
  requestAnimationFrame(animateConfetti);
}

animateConfetti();

// Handle window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Add sound effect on page load
window.addEventListener('load', () => {
  playBirthdayMusic();
});

// Create a simple beep sound using Web Audio API
function playBirthdayMusic() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  
  // Play a simple melody
  const notes = [
    { frequency: 262, duration: 0.3 },  // C
    { frequency: 262, duration: 0.3 },  // C
    { frequency: 294, duration: 0.3 },  // D
    { frequency: 262, duration: 0.3 },  // C
    { frequency: 349, duration: 0.3 },  // F
    { frequency: 330, duration: 0.6 },  // E
  ];
  
  let time = audioContext.currentTime;
  
  notes.forEach(note => {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = note.frequency;
    gainNode.gain.setValueAtTime(0.3, time);
    gainNode.gain.exponentialRampToValueAtTime(0.01, time + note.duration);
    
    oscillator.start(time);
    oscillator.stop(time + note.duration);
    
    time += note.duration;
  });
}

// Add click animation to emojis
document.querySelectorAll('.emoji').forEach(emoji => {
  emoji.addEventListener('click', function() {
    this.style.animation = 'none';
    setTimeout(() => {
      this.style.animation = '';
    }, 10);
  });
});

// Create particles on click
document.addEventListener('click', (e) => {
  for (let i = 0; i < 5; i++) {
    const particle = new Confetti();
    particle.x = e.clientX;
    particle.y = e.clientY;
    particle.speedY = (Math.random() - 0.5) * 5;
    particle.speedX = (Math.random() - 0.5) * 5;
    confetti.push(particle);
  }
});
camera.position.z = 15;
function animate() {
  controls.update();
  requestAnimationFrame(animate);
  planeMesh.rotation.z += 0.001;
  renderer.render(scene, camera);
}

requestAnimationFrame(animate);

const containerEl = document.getElementById("container");

function addElement(x = "0", y = "0") {
  const element = document.createElement("div");
  element.className = "mouse-event1";
  element.textContent = x;
  containerEl.appendChild(element);
  addH4(containerEl, "Mouse X Position (px)");

  const element2 = document.createElement("div");
  element2.className = "mouse-event2";
  element2.textContent = y;
  containerEl.appendChild(element2);
  addH4(containerEl, "Mouse Y Position (px)");
}

addElement();

function addH4(parent, text) {
  const element = document.createElement("h4");
  element.textContent = text;
  parent.appendChild(element);
}

window.addEventListener("mousemove", (event) => {
  const mouseX = document.getElementsByClassName("mouse-event1")[0];
  const mouseY = document.getElementsByClassName("mouse-event2")[0];
  mouseX.textContent = event.clientX;
  mouseY.textContent = event.clientY;
});
