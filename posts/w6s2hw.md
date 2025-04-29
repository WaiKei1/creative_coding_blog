---
title: W6 q5.js (Usagi Circles)
published_at: 2025-04-10
snippet: week 6 session 2 homework
disable_html_sanitization: true
allow_math: true
---

<canvas id="hws2_3" width="0" height="0"></canvas>

<script type="module">
   import q5 from "./scripts/q5.js"

   const cnv = document.getElementById("hws2_3");
   const q = new q5("instance")
   console.log(q)

   const centerX = 400;
   const centerY = 200;
   const radiusIncrement = 50;  // How much bigger each new circle is
   const batchCircleCount = 6; // 6 circles per batch

   let usagi;
   let circles = []; // Store all completed circles
   let batchCounter = 0; // Count how many circles in current batch

   let currentCircle = {
      images: [],
      radius: 100,
      imagesPerCircle: 8,
      angleOffset: 0,
   };

   let frameCounter = 0;
   const delayFrames = 20; // Delay between each new image

   q.preload = () => {
      usagi = q.loadImage("./w06s2/usagi.png");
   }

   q.setup = () => {
      q.createCanvas(800, 400);
      q.imageMode(q.CENTER);
   }

   q.draw = () => {
      q.background("skyblue");

      if (usagi) {
         // Draw center fixed image
         q.image(usagi, centerX, centerY, 80, 80);

         // Draw all frozen circles
         for (let circle of circles) {
            for (let angle of circle.images) {
               const x = centerX + circle.radius * Math.cos(angle + circle.angleOffset);
               const y = centerY + circle.radius * Math.sin(angle + circle.angleOffset);
               q.image(usagi, x, y, 50, 50);
            }
         }

         // Add new images to current growing circle
         frameCounter++;
         if (frameCounter >= delayFrames) {
            frameCounter = 0;
            const nextAngle = (q.TWO_PI / currentCircle.imagesPerCircle) * currentCircle.images.length;
            currentCircle.images.push(nextAngle);

            // If the circle is full
            if (currentCircle.images.length >= currentCircle.imagesPerCircle) {
               circles.push({...currentCircle}); // Freeze it (make a copy)
               batchCounter++;

               if (batchCounter >= batchCircleCount) {
                  // After 6 circles, start a new batch
                  batchCounter = 0;
                  currentCircle = {
                     images: [],
                     radius: 100,
                     imagesPerCircle: 8,
                     angleOffset: Math.random() * q.TWO_PI, // random offset
                  };
               } else {
                  // Otherwise, just continue outward
                  currentCircle = {
                     images: [],
                     radius: currentCircle.radius + radiusIncrement,
                     imagesPerCircle: currentCircle.imagesPerCircle + 4,
                     angleOffset: currentCircle.angleOffset, // keep same offset inside batch
                  };
               }
            }
         }

         // Draw current growing circle
         for (let angle of currentCircle.images) {
            const x = centerX + currentCircle.radius * Math.cos(angle + currentCircle.angleOffset);
            const y = centerY + currentCircle.radius * Math.sin(angle + currentCircle.angleOffset);
            q.image(usagi, x, y, 50, 50);
         }
      }
   }

   q.preload();
</script>
