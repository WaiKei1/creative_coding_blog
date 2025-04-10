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

- [Group Task](https://waikei1-creative-co-63.deno.dev/week5#group-task)

- [Homework](https://waikei1-creative-co-63.deno.dev/week4#homework)

  - [Session 1: 25 Mar](https://waikei1-creative-co-63.deno.dev/week3#session-1-25-mar)
  - [Session 2: 27 Mar](https://waikei1-creative-co-63.deno.dev/week3#session-2-27-mar)

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

### RiTa.js Library

- [Get To Know RiTa.js Library](https://youtu.be/lIPEvh8HbGQ)

**What is RiTa.js?**

RiTa.js is a JavaScript library for generative poetry, text manipulation, and computational creativity. It’s designed for artists, writers, and coders to create algorithm-driven text art, chatbots, or glitch poetry.

TL;DR: This is a "poetry engine" for post-digital writing, an open source project that you can find on [GitHub](https://github.com/dhowe/ritajs).

**Ri String**

**Ri Lexicon**

Giant list of words, a dictionary, NLP compromise

---

# Group Task

1.  ![gw1](/w05s1/gw1.png)

**Explaination:**

- declaring w2h (width to height) into 2 arguements (\_, i)

- using the arrow function (a shorthand for writing function)

- return [^2]  
  [^2]: **return** is used to send values back from functions (serving a finished dish), without return is like recipes with no output (pointless)

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

    <canvas id="glitch_self_portrait"></canvas>

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

    //
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

---

![hw4b_2](/w05s1/hw4b_2.png)

---

![hw4b_3](/w05s1/hw4b_3.png)

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
