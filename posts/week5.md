---
title: Week 5
published_at: 2025-04-1
snippet: Introducing RiTa.js
disable_html_sanitization: true
allow_math: true
---

| [W1](https://waikei1-creative-co-63.deno.dev/week1) | [W2](https://waikei1-creative-co-63.deno.dev/week2) | [W3](https://waikei1-creative-co-63.deno.dev/week3) | [W4](https://waikei1-creative-co-63.deno.dev/week4) | [W6](https://waikei1-creative-co-63.deno.dev/week6) | [W7](https://waikei1-creative-co-63.deno.dev/week7) | [W8](https://waikei1-creative-co-63.deno.dev/week8) | [W9](https://waikei1-creative-co-63.deno.dev/week9) | [W10](https://waikei1-creative-co-63.deno.dev/week10) | [W11](https://waikei1-creative-co-63.deno.dev/week11) | [W12](https://waikei1-creative-co-63.deno.dev/week12) |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| [A1](https://waikei1-creative-co-63.deno.dev/A1)    | [A2](https://waikei1-creative-co-63.deno.dev/A2)    | [A3](https://waikei1-creative-co-63.deno.dev/A3)    |

### INDEX

- [Notes](https://waikei1-creative-co-63.deno.dev/week5#notes)

  - [Chaos](https://waikei1-creative-co-63.deno.dev/week5#chaos)
  - [Net Art](https://waikei1-creative-co-63.deno.dev/week5#net-art)
  - [Glitch](https://waikei1-creative-co-63.deno.dev/week5#glitch)
  - [Beauty of the Glitch](https://waikei1-creative-co-63.deno.dev/week5#beauty-of-the-glitch)
  - [Chaotic Aesthetic Register](https://waikei1-creative-co-63.deno.dev/week5#chaotic-aesthetic-register)
  - [Post-Digital](https://waikei1-creative-co-63.deno.dev/week5#post-digital)
  - [APIs and Libraries in JavaScript](https://waikei1-creative-co-63.deno.dev/week5#what-are-apis-and-libraries-in-javascript)
  - [DOM (Document Object Model)
    ](https://waikei1-creative-co-63.deno.dev/week5#dom-document-object-model)
  - [RiTa.js Library](https://waikei1-creative-co-63.deno.dev/week5#ritajs-library)
  - [Base64](https://waikei1-creative-co-63.deno.dev/week5#base64)

- [Homework](https://waikei1-creative-co-63.deno.dev/week5#homework)

  - [Session 1: 1 Apr](https://waikei1-creative-co-63.deno.dev/week5#session-1-1-apr)
  - [Session 2: 3 Apr](https://waikei1-creative-co-63.deno.dev/week5#session-2-3-apr)

---

# Notes

### Chaos

A state of utter disorder, randomness, and unpredictability where patterns are obscured or non-existent.

- In art: Used to challenge traditional notions of control and harmony.

---

### Net Art

Net Art (internet art), is art created specifically for and existing primarily on the internet, often leveraging digital tools, interactivity, or networked platforms.

_\* Cannot Exist Offline (born-digital)_

---

### Glitch

A visual or functional error caused by technical malfunctions, often producing unintended distortions.

**Artistic Value**

- Reveals hidden structures of digital systems (e.g., corrupted files exposing code).
- Challenges perfectionism in digital media.

---

### Beauty of the glitch

The aesthetic appreciation of errors as meaningful or poetic disruptions.

**Why It Matters:**

- Humanizes technology: Shows fragility beneath sleek interfaces.
- Creates uniqueness: No two glitches are identical.

---

### Chaotic Aesthetic Register

A visual language embracing disorder, dissonance, and unpredictability as formal qualities.

- Glitch art: Data corruption, pixel sorting.

- Generative algorithms: Noise, fractals, emergent patterns.

---

### Post-Digital

The post-digital refers to an artistic and cultural stance that no longer sees digital tech as new or exceptional but instead engages with its contradictions, failures, and embeddedness in everyday life.

- Rejects "clean" digital perfection (utopianism) in favor of glitches, artifacts, and obsolete tech.

- Blurs digital/analog boundaries (e.g., treating pixels as material).

- Critiques the myths of digital progress while still using digital tools.

* Post-Digital artist is an artist who works in a cultural and creative landscape where digital technologies are no longer new, revolutionary, or separate from "real life"—instead, they are mundane, flawed, and deeply entangled with physical existence.

(they treat digital tech as normal not special)

- Post-digital art makes work about digital culture, without being impressed by it.

---

### What are APIs and Libraries in JavaScript?

- Library = a box of ready-to-use tools

  A library is a collection of pre-written code (functions, objects, etc.) that you can plug into your own code to make life easier.

- API = a set of rules/tools you can use to interact with a system

  An API (Application Programming Interface) lets you talk to a system or browser in a controlled way.

- It’s not a library, but it gives you access to tools like:

---

### DOM (Document Object Model)

This is a programming interface for web documents. It represents the structure of a web page (HTML or XML) as a tree-like model where each node is an object representing part of the document (e.g., elements, attributes, text). This allows programs (like JavaScript) to dynamically access, modify, and manipulate the content, structure, and style of a webpage.

- **Tree Structure**

  The DOM represents a document as a hierarchy of nodes (parent, child, sibling relationships).

- **DOM Manipulation with JavaScript**

  Using DOM manipulation with JavaScript, changes appear instantly without requiring the user to refresh the page. Without this manipulation, the user need to refresh the webpage to reflect the changes.

  The DOM is always created by the browser, even if you don’t use JavaScript. JavaScript just gives you tools to modify it (`document.getElementById()`, `element.appendChild()`, etc.)

  When javaScript is disabled, the DOM still exists (since the browser parses HTML). But no dynamic updates can happen.

---

### RiTa.js Library

- [Get To Know RiTa.js Library](https://youtu.be/lIPEvh8HbGQ)

**What is RiTa.js?**

RiTa.js is a JavaScript library for generative poetry, text manipulation, and computational creativity. It’s designed for artists, writers, and coders to create algorithm-driven text art, chatbots, or glitch poetry.

TL;DR: This is a "poetry engine" for post-digital writing, an open source project that you can find on [GitHub](https://github.com/dhowe/ritajs).

---

### Base64

Base64 is a method of encoding binary data (like images, files, or raw bytes) into a text format using only 64 ASCII characters. This makes it safe for transmission over text-based systems (e.g., emails, HTML, URLs).

Every image has unique binary data (originally raw binary data).

The reason that we need to encode binary as text (Base64) is because binary data is unsafe for text-based systems as it may contain invisible control characters (e.g., NULL, line endings) that break protocols like HTTP, JSON, or email and some systems (like databases) only accept **ASCII** [^2] text.

[^2]: **ASCII** is a subset (a standard encoding for text in computers)

Base64 solves this by converting binary into a text string using only these 64 safe characters. This format is safe because it did not have risky characters like <>, &, or spaces that could confuse parsers. **Base64 is the "translator" that lets binary data travel safely in text-only worlds.**

**ASCII**

Base64 uses a subset of ASCII characters (a standard encoding for text in computers). Here’s how they connect:

ASCII assigns a number (0–127) to each character (e.g., A = 65, a = 97).

Base64 only uses these 64 safe ASCII characters:

A-Z (26)

a-z (26)

0-9 (10)

"+" and / (2)

= (padding, not part of the 64).

**How it works**

1. Takes the binary data

2. Splits into 6-bit chunks

3. Converts to ASCII

4. Padding with =

(this step is to ensure that the final encoded data has a length that's a multiple of 4 characters. This is done by adding one or two = signs at the end of the Base64 string if needed.)

**Why Padding is Necessary**
Base64 works by converting 3 bytes (24 bits) of binary data → 4 characters (each representing 6 bits).

If the input binary data isn’t divisible by 3, padding (=) fills the gap to make it work. Think of = as a "placeholder" to keep the structure intact, like adding silence to complete a musical measure.

**Why "64"**

There are 64 possible characters in the Base64 alphabet (enough to represent 6 bits per character). Math: 2^6 = 64 (each character encodes 6 bits of binary data).

---

# Homework

### Session 1: 1 Apr

![hw4b_1](/w05s1/hw4b_1.png)

<canvas id="glitch_self_portrait"></canvas>

<script type="module">

   const cnv = document.getElementById (`glitch_self_portrait`)
   cnv.width = cnv.parentNode.scrollWidth
   cnv.height = cnv.width * 9 / 16
   cnv.style.backgroundColor = `deeppink`

   const ctx = cnv.getContext (`2d`)

   let img_data

   const draw = i => ctx.drawImage (i, 0, 0, cnv.width, cnv.height)

   const img = new Image ()
   img.onload = () => {
      cnv.height = cnv.width * (img.height / img.width)
      draw (img)
      img_data = cnv.toDataURL ("image/jpeg")
      add_glitch ()
   }
   img.src = `w05s1/me.jpg`;

   const rand_int = max => Math.floor (Math.random () * max)

   const glitchify = (data, chunk_max, repeats) => {
      const chunk_size = rand_int (chunk_max / 4) * 4
      const i = rand_int (data.length - 24 - chunk_size) + 24
      const front = data.slice (0, i)
      const back = data.slice (i + chunk_size, data.length)
      const result = front + back
      return repeats == 0 ? result : glitchify (result, chunk_max, repeats - 1)
   }

   const glitch_arr = []

   const add_glitch = () => {
      const i = new Image ()
      i.onload = () => {
         glitch_arr.push (i)
         if (glitch_arr.length < 12) add_glitch ()
         else draw_frame ()
      }
      i.src = glitchify (img_data, 96, 6)
   }

   let is_glitching = false
   let glitch_i = 0

   const draw_frame = () => {
      if (is_glitching) draw (glitch_arr[glitch_i])
      else draw (img)

      const prob = is_glitching ? 0.05 : 0.02
      if (Math.random () < prob) {
         glitch_i = rand_int (glitch_arr.length)
         is_glitching = !is_glitching
      }

      requestAnimationFrame (draw_frame)
   }

</script>

```html
<canvas id="glitch_self_portrait"></canvas>
```

```javascript
<script type="module">

  const cnv = document.getElementById (`glitch_self_portrait`)
  cnv.width = cnv.parentNode.scrollWidth
  cnv.height = cnv.width * 9 / 16
  cnv.style.backgroundColor = `deeppink`

  const ctx = cnv.getContext (`2d`)

  let img_data
  //declaring a variable to store original image data

  const draw = i => ctx.drawImage (i, 0, 0, cnv.width, cnv.height)
  //function to draw the image on canvas

  const img = new Image ()
  //load the image

  img.onload = () => {
    //adjust canvas height to match image ratio
    cnv.height = cnv.width * (img.height / img.width)

    // draw the image
    draw (img)

    //save as JPEG data url
    img_data = cnv.toDataURL ("image/jpeg")

    //add the glitch effect
    add_glitch ()
   }

  //path to the self-portrait image
  img.src = `w05s1/me.jpg`;

  // generate a random number from 0 up to but not including max
  // using Math.floor to round down to whole numbers
  // this is a function that generates random integers between 0 and max -1
  // math.random() genreates a random decimal between 0 and exclusive 1
  const rand_int = max => Math.floor (Math.random () * max)

  // set a glitchify function in order to edit the glitch effect
  // data to store and process the image data
  // chunk max is the maximum size of the chunk to remove from the data
  // repeats is hoe many times to repeat the chunk-removal process
  // (more repeats = more corruption)
  const glitchify = (data, chunk_max, repeats) => {

    // ensures the chunk sizes is a multiple of 4
    // (to avoid breaking Base64 encoding)
    const chunk_size = rand_int (chunk_max / 4) * 4

    // rand_int(...): generates a random integer
    // random interger: between 0 and this calculated maximum
    // - 24: reserves space for the header
    // - chunk_size: ensures we don't select a position too close to the end
    // + 24: shifts the position past the header
    // (to only affect the actual image data)
    // skipping the header (-24 +24):
    // (damaging this would make the file unreadable)
    // the +24 ensures we only modify the Base64-encoded image data
    const i = rand_int (data.length - 24 - chunk_size) + 24

    // slicing the data
    // takes everything from the start (0) up to (but not including) position i
    // preserves the header and unglitched portion
    const front = data.slice (0, i)

    // takes everything from i + chunk_size to the end
    // skips over chunk_size bytes starting at position i
    const back = data.slice (i + chunk_size, data.length)

    // combines the two slices while omitting the middle chunk
    // this is where the actual data corruption occurs
    const result = front + back

    // base case:
    // (if repeats reaches 0, return the current glitched result)
    // recursive case:
    // (apply glitchify again to the already-glitched data)
    return repeats == 0 ? result : glitchify (result, chunk_max, repeats - 1)
    }

    // stores multiple glitched versions of the image for animation
    const glitch_arr = []

    // creates multiple glitched versions of your original image
    // and stores them in an array (glitch_arr)
    const add_glitch = () => {

      // creates a blank image object that we can load data into
      const i = new Image ()

      // When the image finishes loading (onload)
      i.onload = () => {

        // Adds the loaded image to glitch_arr
        glitch_arr.push (i)

        // Once 12 glitched versions are created
        if (glitch_arr.length < 12) add_glitch ()

        // it starts the animation loop (draw_frame)
        else draw_frame ()
        }

      // takes the original image data (img_data)
      // applies the glitch effect using glitchify()
      // chunk_max = 96 (maximum size of chunks to remove)
      // repeats = 6 (how many times to repeat the glitch process)
      i.src = glitchify (img_data, 96, 6)
    }

    // state variables
    // tracks if we're currently showing a glitch
    let is_glitching = false

    // index of current glitch variant
    let glitch_i = 0

    const draw_frame = () => {

      // draw either glitched or normal image
      // switching between glitched and normal
      if (is_glitching) draw (glitch_arr[glitch_i])
      else draw (img)

      // ? is the conditional (ternary) operator
      // which is a shorthand way to write an if-else statement
      // when is_glitching = true
      // sets prob = 0.05
      // (5% chance per frame to stop glitching)
      // when is_glitching = false
      // sets prob = 0.02
      // (2% chance per frame to start glitching)
      const prob = is_glitching ? 0.05 : 0.02

      // compares the random number against prob
      // a probability threshold
      // if the random number is less than prob
      // the condition is true
      if (Math.random () < prob) {

        // when the condition is true
        // select a random index from your array of glitched images
        glitch_i = rand_int (glitch_arr.length)

        // !: logical NOT operator
        // flip a boolean value
        // toggles the value of is_glitching
        // if is_glitching was true
        // it becomes false
        // vice versa
        is_glitching = !is_glitching
      }

      // runs at ~60fps for smooth animation
      // self-perpetuating loop
      requestAnimationFrame (draw_frame)
  }

</script>
```

---

![hw4b_2](/w05s1/hw4b_2.png)

Rendering my likeness through glitch aesthetics produces a sense of effective complexity. I'm going to expand the dicussion from different perspectives:

1. **From Glitch Readings**

   By corrupting my self-portrait with randomly deleted chunks of image data, the glitch effect destabilizes the image while still preserving its form. This intentional distortion transforms the portrait into an evolving, unstable self-representation. As Legacy Russell argues in Glitch Is Skin (2020), glitch is not error but “second skin”—a deliberate layer that invites alternative selves to emerge. In the same spirit, Rosa Menkman’s A Phenomenology of Glitch Art (2011) shows how glitches rupture information flow to reveal the medium’s materiality; my code’s “chunk-removal” makes that rupture visible.

2. **Net Art Readings**

   Ippolito’s Ten Myths of Internet Art (2002) celebrates the ongoing nature of net-based works, rejecting notions of a “finished” object. My animated portrait—constantly toggling between intact and corrupted frames—enacts this process-based ethos. Wolfe’s Reflections on Art and Posthumanism (2021) further situates the posthuman self as fragmented and networked, perfectly mirrored by a glitch that refuses a stable, singular identity.

3. **The Concept of Effective Complexity**

   Effective complexity thrives at the intersection of structure and chaos. By controlling chunk size, repetition count, and glitch-toggle probability, the portrait remains legible yet unpredictably corrupted.

4. **Ngai's three aesthethic registers**

   Sianne Ngai’s three registers capture the affective range of glitch:

   - **Zany:**

     The erratic flip between normal and corrupted frames channels hyperactive performance under pressure.

   - **Cute:**

     The twitching, almost playful corruption softens raw errors into an endearing, “glitchy pet.”

   - **Interesting:**

     Viewers lean in to decode the malfunction and wonder about the underlying algorithm.

---

### Session 2: 3 Apr

![hw5a_1](/w05s2/hw5a_1.png)

**Post-Digital Artist: Cory Arcangel**

Work: [Super Mario Clouds (2002)](https://whitney.org/collection/works/20588)

In this work, Cory Arcangel hacked the game Super Mario Bros., erasing all gameplay elements and leaving only the endlessly scrolling blue sky and clouds.

Cramer argues that post-digital art abandons the “wow” factor. Arcangel’s manipulation of the game’s code demonstrates this approach—treating the digital medium not as a spectacle, but as raw material to be deconstructed and reimagined.

The piece exists as both a downloadable ROM and a physical cartridge in the Whitney Museum further dissolving the boundaries between virtual and physical space.

Other than that, the work is in an incomplete state (missing Mario, enemies, etc) also reflects the digital dysfunction.

---

![hw5a_2](/w05s2/hw5a_2.png)

The artist is using programming and video technology to alter the game’s code by removing the elements in the game.

If the artwork was recreated using JavaScript (recreated the endlessly scrolling blue sky and clouds), technologies, APIs, and libraries that could be used:

1. **Canvas API / p5.js**

   These would be more than sufficient to create the basic visual effects. (draw and animate the scrolling clouds and sky)

2. **Web Audio API**

   control over sound elements. (AudioContext?)

---

![hw5a_3](/w05s2/hw5a_3.png)

Before coding the poem, I first drafted it in Chinese, where I can express myself most fluently, and then translated it into English. Having the text ready before I touched any code made it much easier to work with.

    《云的故障牧歌》

    卡带在遗忘，
    城堡沉入无尽碧。

    沙沙声。
    像一段被跳过的
    通关音乐。

    而云始终在，
    用慢动作的笔迹,
    修改天空的剧本。

Here's the English version:

    Clouds Erasure

      The cartridge forgets,
      castles dissolving
      into endless azure.

      Static.
      Like a victory theme
      left on skip.

      Yet the clouds remain,
      rewriting the sky's script
      in slow-motion calligraphy.

---

<style>
  #generateBtn {
    background-color: #ffffff;
    color:rgb(129, 192, 255);
    border: 2px solid rgb(129, 192, 255);
    padding: 5px 10px;
    font-size: 13px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  #generateBtn:hover {
    background-color:rgb(159, 207, 255);
    color: white;
  }
</style>

<button id="generateBtn">GENERATE</button>

<canvas id="poemCanvas" width="800" height="400"></canvas>

<script type="module">

  import { RiTa } from "https://esm.sh/rita";

  const canvas = document.getElementById("poemCanvas");
  const ctx = canvas.getContext("2d");
  const btn = document.getElementById("generateBtn");

  const words = {
    action: ["forgets", "corrupts", "erases"],
    objects: ["clouds", "pixels", "castles"],
    themes: ["victory theme", "game over tone", "glitchy lullaby"],
    endings: [
      "rewriting the sky's script",
      "left on infinite loop",
      "in slow-motion calligraphy",
      "echoing through memory",
    ]
  };

  function drawPoem() {
    // Generate poem lines with random words
    const title = "Clouds Erasure";
    const line1 = `The cartridge ${RiTa.random(words.action)},`;
    const line2 = `${RiTa.random(words.objects)} dissolving`;
    const line3 = `into endless azure.`;
    const line4 = ``;
    const line5 = `Static.`;
    const line6 = `Like a ${RiTa.random(words.themes)}`;
    const line7 = `left on skip.`;
    const line8 = ``;
    const line9 = `Yet the clouds remain,`;
    const line10 = `${RiTa.random(words.endings)}.`;

    const poemLines = [
      title,
      "",
      line1,
      line2,
      line3,
      "",
      line5,
      line6,
      line7,
      "",
      line9,
      line10
    ];

    // Draw background
    ctx.fillStyle = "#87CEEB"; // sky blue
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Title styling
    ctx.fillStyle = "#fff";
    ctx.font = "bold 24px Georgia";
    ctx.fillText(poemLines[0], 30, 30);

    // Poem body styling
    ctx.font = "20px Georgia";
    let y = 70;
    for (let i = 1; i < poemLines.length; i++) {
      ctx.fillText(poemLines[i], 30, y);
      y += 30;
    }
  }

  // Initial poem draw
  drawPoem();

  // Regenerate poem on button click
  btn.addEventListener("click", drawPoem);
</script>

Initially, I struggled to harness RiTa’s methods within the Canvas API, until I discovered that defining a clear set of rules is the essential first step. By establishing grammatical and structural rules up front, the generation engine can “understand” what I expect and assemble coherent lines.

I also borrowed a flipping-page interaction technique from the example that I found on Youtube that is using the [RiTa with p5js](https://www.youtube.com/watch?v=YO-OxXyceZs&t=88s) (here is the [code example](https://editor.p5js.org/shfitz/sketch...)) but instead of tying it to a page turn, I attached it to a “Generate” button. Each click recombines sentence fragments and rule-based patterns to produce a fresh poem, giving the user a playful, ever-shifting reading experience.

---

## Quick Links

### Assignments:

- [Assignment 1: Cute!](https://waikei1-creative-co-63.deno.dev/A1)
- [Assignment 2: Chaos!](https://waikei1-creative-co-63.deno.dev/A2)
- [Assignment 3: Interesting!](https://waikei1-creative-co-63.deno.dev/A3)

---

### Weekly Study Journey:

- [Week 1](https://waikei1-creative-co-63.deno.dev/week1)
- [Week 2](https://waikei1-creative-co-63.deno.dev/week2)
- [Week 3](https://waikei1-creative-co-63.deno.dev/week3)
- [Week 4](https://waikei1-creative-co-63.deno.dev/week4)
- [Week 6](https://waikei1-creative-co-63.deno.dev/week6)
- [Week 7](https://waikei1-creative-co-63.deno.dev/week7)
- [Week 8](https://waikei1-creative-co-63.deno.dev/week8)
- [Week 9](https://waikei1-creative-co-63.deno.dev/week9)
- [Week 10](https://waikei1-creative-co-63.deno.dev/week10)
- [Week 11](https://waikei1-creative-co-63.deno.dev/week11)
- [Week 12](https://waikei1-creative-co-63.deno.dev/week12)

---

```

```
