<template>
  <canvas ref="canvas"></canvas>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const displayWidth = ref(0);
const displayHeight = ref(0);
const timer = ref(0);
const wait = ref(1);
const count = ref(0);
const numToAddEachFrame = ref(4);
const particleList = ref({} as any);
const recycleBin = ref({} as any);
const particleAlpha = ref(1);
const fLen = ref(256);
const m = ref(0);
const projCenterX = ref(0);
const projCenterY = ref(0);
const zMax = ref(0);
const turnAngle = ref(0);
const turnSpeed = ref((2 * Math.PI) / 1600);
const sphereRad = ref(256);
const sphereCenterX = ref(0);
const sphereCenterY = ref(0);
const sphereCenterZ = ref(-3 - 256);
const particleRad = ref(2.5);
const zeroAlphaDepth = ref(-750);
const randAccelX = ref(0.1);
const randAccelY = ref(0.1);
const randAccelZ = ref(0.1);
const gravity = ref(0);
const rgbString = ref('');
const p = ref({} as any);
const outsideTest = ref(false);
const nextParticle = ref({} as any);
const sinAngle = ref(0);
const cosAngle = ref(0);
const rotX = ref(0);
const rotZ = ref(0);
const depthAlphaFactor = ref(0);
const i = ref(0);
const theta = ref(0);
const phi = ref(0);
const x0 = ref(0);
const y0 = ref(0);
const z0 = ref(0);

onMounted(() => {
  init();
});

function init() {
  wait.value = 1;
  count.value = wait.value - 1;
  numToAddEachFrame.value = 4;

  // Particle color
  let rgb = this.$refs.canvas.dataset.rgb;
  rgbString.value = `rgba(${rgb}, `; // Partial string for color which will be completed by appending alpha value
  particleAlpha.value = 1; // Maximum alpha

  displayWidth.value = this.$refs.canvas.width;
  displayHeight.value = this.$refs.canvas.height;

  fLen.value = 256;

  // Projection center coordinates set location of origin
  projCenterX.value = displayWidth.value / 2;
  projCenterY.value = displayHeight.value / 2;

  // We will not draw coordinates if they have too large of a z-coordinate (which means they are very close to the observer)
  zMax.value = fLen.value - 2;

  particleList.value = {};
  recycleBin.value = {};

  // Random acceleration factors - causes some random motion
  randAccelX.value = 0.1;
  randAccelY.value = 0.1;
  randAccelZ.value = 0.1;

  gravity.value = 0;

  particleRad.value = 2.5;
  sphereRad.value = 256;
  sphereCenterX.value = 0;
  sphereCenterY.value = 0;
  sphereCenterZ.value = -3 - sphereRad.value;

  // Alpha values will lessen as particles move further back, causing depth-based darkening:
  zeroAlphaDepth.value = -750;

  turnSpeed.value = (2 * Math.PI) / 1600; // The sphere will rotate at this speed (one complete rotation every 1600 frames).
  turnAngle.value = 0; // Initial angle

  timer.value = setInterval(onTimer, 1000 / 24);
}

function onTimer() {
  count.value++;
  if (count.value >= wait.value) {
    count.value = 0;
    for (i.value = 0; i.value < numToAddEachFrame.value; i.value++) {
      theta.value = Math.random() * 2 * Math.PI;
      phi.value = Math.acos(Math.random() * 2 - 1);
      x0.value = sphereRad.value * Math.sin(phi.value) * Math.cos(theta.value);
      y0.value = sphereRad.value * Math.sin(phi.value) * Math.sin(theta.value);
      z0.value = sphereRad.value * Math.cos(phi.value);

      // We use the addParticle function to add a new particle. The parameters set the position and velocity components.
      // Note that the velocity parameters will cause the particle to initially fly outwards away from the sphere center (after
      // it becomes unstuck).
      p.value = addParticle(
        x0.value,
        sphereCenterY.value + y0.value,
        sphereCenterZ.value + z0.value,
        0.002 * x0.value,
        0.002 * y0.value,
        0.002 * z0.value,
      );

      // We set some "envelope" parameters which will control the evolving alpha of the particles
      p.value.attack = 50;
      p.value.hold = 50;
      p.value.decay = 160;
      p.value.initValue = 0;
      p.value.holdValue = particleAlpha.value;
      p.value.lastValue = 0;

      // The particle will be stuck in one place until this time has elapsed
      p.value.stuckTime = 80 + Math.random() * 20;

      p.value.accelX = 0;
      p.value.accelY = gravity.value;
      p.value.accelZ = 0;
    }
  }

  // Update viewing angle
  turnAngle.value = (turnAngle.value + turnSpeed.value) % (2 * Math.PI);
  sinAngle.value = Math.sin(turnAngle.value);
  cosAngle.value = Math.cos(turnAngle.value);

  // Background fill
  let bg = this.$refs.canvas.dataset.bg;
  context.fillStyle = bg;
  context.fillRect(0, 0, displayWidth.value, displayHeight.value);

  // Update and draw particles
  p.value = particleList.value.first;
  while (p.value != null) {
    // Before list is altered record next particle
    nextParticle.value = p.value.next;

    // Update age
    p.value.age++;

    // If the particle is past its "stuck" time, it will begin to move
    if (p.value.age > p.value.stuckTime) {
      p.value.velX +=
        p.value.accelX + randAccelX.value * (Math.random() * 2 - 1);
      p.value.velY +=
        p.value.accelY + randAccelY.value * (Math.random() * 2 - 1);
      p.value.velZ +=
        p.value.accelZ + randAccelZ.value * (Math.random() * 2 - 1);

      p.value.x += p.value.velX;
      p.value.y += p.value.velY;
      p.value.z += p.value.velZ;
    }

    /*
    We are doing two things here to calculate display coordinates.
    The whole display is being rotated around a vertical axis, so we first calculate rotated coordinates for
    x and z (but the y coordinate will not change).
    Then, we take the new coordinates (rotX, y, rotZ), and project these onto the 2D view plane.
    */
    rotX.value =
      cosAngle.value * p.value.x +
      sinAngle.value * (p.value.z - sphereCenterZ.value);
    rotZ.value =
      -sinAngle.value * p.value.x +
      cosAngle.value * (p.value.z - sphereCenterZ.value) +
      sphereCenterZ.value;
    m.value = fLen.value / (fLen.value - rotZ.value);
    p.value.projX = rotX.value * m.value + projCenterX.value;
    p.value.projY = p.value.y * m.value + projCenterY.value;

    // Update alpha according to envelope parameters
    if (p.value.age < p.value.attack + p.value.hold + p.value.decay) {
      if (p.value.age < p.value.attack) {
        p.value.alpha =
          ((p.value.holdValue - p.value.initValue) / p.value.attack) *
            p.value.age +
          p.value.initValue;
      } else if (p.value.age < p.value.attack + p.value.hold) {
        p.value.alpha = p.value.holdValue;
      } else if (p.value.age < p.value.attack + p.value.hold + p.value.decay) {
        p.value.alpha =
          ((p.value.lastValue - p.value.holdValue) / p.value.decay) *
            (p.value.age - p.value.attack - p.value.hold) +
          p.value.holdValue;
      }
    } else {
      p.value.dead = true;
    }

    // See if the particle is still within the viewable range
    if (
      p.value.projX > displayWidth.value ||
      p.value.projX < 0 ||
      p.value.projY < 0 ||
      p.value.projY > displayHeight.value ||
      rotZ.value > zMax.value
    ) {
      outsideTest.value = true;
    } else {
      outsideTest.value = false;
    }

    if (outsideTest.value || p.value.dead) {
      recycle(p.value);
    } else {
      // Depth-dependent darkening
      depthAlphaFactor.value = 1 - rotZ.value / zeroAlphaDepth.value;
      depthAlphaFactor.value =
        depthAlphaFactor.value > 1
          ? 1
          : depthAlphaFactor.value < 0
          ? 0
          : depthAlphaFactor.value;
      context.fillStyle =
        rgbString.value + depthAlphaFactor.value * p.value.alpha + ')';

      // Draw
      context.beginPath();
      context.arc(
        p.value.projX,
        p.value.projY,
        m.value * particleRad.value,
        0,
        2 * Math.PI,
        false,
      );
      context.closePath();
      context.fill();
    }

    p.value = nextParticle.value;
  }
}

function addParticle(x0, y0, z0, vx0, vy0, vz0) {
  var newParticle;

  // Check recycle bin for available drop:
  if (recycleBin.value.first != null) {
    newParticle = recycleBin.value.first;
    // Remove from bin
    if (newParticle.next != null) {
      recycleBin.value.first = newParticle.next;
      newParticle.next.prev = null;
    } else {
      recycleBin.value.first = null;
    }
  } else {
    // If the recycle bin is empty, create a new particle (a new ampty object):
    newParticle = {};
  }

  //add to beginning of particle list
  if (particleList.value.first == null) {
    particleList.value.first = newParticle;
    newParticle.prev = null;
    newParticle.next = null;
  } else {
    newParticle.next = particleList.value.first;
    particleList.value.first.prev = newParticle;
    particleList.value.first = newParticle;
    newParticle.prev = null;
  }

  // Initialize
  newParticle.x = x0;
  newParticle.y = y0;
  newParticle.z = z0;
  newParticle.velX = vx0;
  newParticle.velY = vy0;
  newParticle.velZ = vz0;
  newParticle.age = 0;
  newParticle.dead = false;
  if (Math.random() < 0.5) {
    newParticle.right = true;
  } else {
    newParticle.right = false;
  }
  return newParticle;
}

function recycle(p) {
  // Remove from particleList
  if (particleList.value.first == p) {
    if (p.next != null) {
      p.next.prev = null;
      particleList.value.first = p.next;
    } else {
      particleList.value.first = null;
    }
  } else {
    if (p.next == null) {
      p.prev.next = null;
    } else {
      p.prev.next = p.next;
      p.next.prev = p.prev;
    }
  }
  // Add to recycle bin
  if (recycleBin.value.first == null) {
    recycleBin.value.first = p;
    p.prev = null;
    p.next = null;
  } else {
    p.next = recycleBin.value.first;
    recycleBin.value.first.prev = p;
    recycleBin.value.first = p;
    p.prev = null;
  }
}
</script>

<style>
/* Add your styles here */
</style>
