---
title: Week 4
published_at: 2025-03-25
snippet: Introducing Canvas API
disable_html_sanitization: true
allow_math: true
---

| [W1](https://waikei1-creative-co-63.deno.dev/week1) | [W2](https://waikei1-creative-co-63.deno.dev/week2) | [W3](https://waikei1-creative-co-63.deno.dev/week3) | [W5](https://waikei1-creative-co-63.deno.dev/week5) | [W6](https://waikei1-creative-co-63.deno.dev/week6) | [W7](https://waikei1-creative-co-63.deno.dev/week7) | [W8](https://waikei1-creative-co-63.deno.dev/week8) | [W9](https://waikei1-creative-co-63.deno.dev/week9) | [W10](https://waikei1-creative-co-63.deno.dev/week10) | [W11](https://waikei1-creative-co-63.deno.dev/week11) | [W12](https://waikei1-creative-co-63.deno.dev/week12) |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| [A1](https://waikei1-creative-co-63.deno.dev/A1)    | [A2](https://waikei1-creative-co-63.deno.dev/A2)    | [A3](https://waikei1-creative-co-63.deno.dev/A3)    |

### INDEX

- [Notes](https://waikei1-creative-co-63.deno.dev/week4#notes)

  - [Canvas API](https://waikei1-creative-co-63.deno.dev/week4#canvas-api)
  - [High and Low Compressibility](https://waikei1-creative-co-63.deno.dev/week4#high-and-low-compressibility)
  - [High effective complexity](https://waikei1-creative-co-63.deno.dev/week4#high-effective-complexity)
  - [Generative Art](https://waikei1-creative-co-63.deno.dev/week4#generative-art)

- [Homework](https://waikei1-creative-co-63.deno.dev/week4#homework)

  - [Session 1: 25 Mar](https://waikei1-creative-co-63.deno.dev/week3#session-1-25-mar)
  - [Session 2: 27 Mar](https://waikei1-creative-co-63.deno.dev/week3#session-2-27-mar)

---

# Notes

### Canvas API

The basic setup for Canvas API is a HTML file and a JavaScript file (script.js). More information can be found in [Canvas API](https://blog.science.family/240320_canvas_api).

---

### High and Low Compressibility

Compressibility refers to how much a given set of data can reduced in size (compressed) without losing information.

**High Compressibility (simple, repeatable)**

Data that can be significantly reduced due to clear patterns and repetition.

- **Characteristics**

  Orderly, patterned, organized → Easier to compress (e.g., copying/repeating code).

- **Visual Metaphor**

  A tidy LEGO set, where all bricks are sorted by color and size. You don’t need to describe each piece, just say “10 red blocks, 5 blue ones.”

---

**Low Compressibility (messy, unpredictable)**

Data that resists size reduction because it lacks predictable patterns (high randomness or uniqueness).

- **Characteristics**

  Messy, unpredictable, and hard to reduce

- **Visual Metaphor**

  A junk drawer filled with random objects. Since nothing’s organized, you’d need to list every item one by one - no shortcuts.

---

### High effective complexity (best of both worlds)

A meaningful blend of order and randomness — complex but not completely chaotic.

- **Characteristics**

  Enough structure to recognize patterns, but enough randomness to keep it interesting.

- **Visual Metaphor**

  A LEGO castle with random toys glued to it. The base (castle) is structured, while the toys add surprise and uniqueness.

---

### Generative Art

Generative art is art created using rules, algorithms, or systems where the artist designs a process, and the artwork emerges from it (often with randomness or variation)

In Philip Galanter's 2003 paper "What is Generative Art? Complexity Theory as a Context for Art Theory", Galanter argues generative art is not just about tools (code, algorithms) but about systemic creativity

Generative Art = Art that grows itself. It is like planting a seed and letting a garden grow unpredictably.

It is a full work, but split into two layers. Artist's labour is to design the system and the system executes while adding randomness sometimes. Think of it like chess: The rules are fixed, but every game is unique. The artist designs the board; the system plays the game.

---

# Homework

### Session 1: 25 Mar

![Hw4a_1](/w04s1/homework4a_1.png)

For these three compositions, I'm trying to viusalise the metaphor that I stated for each of them.

**A. High Compressibility: Toy Store Shelf**

<iframe id="high compressibility" src="https://editor.p5js.org/WaiKei1/full/gLx-bWb2V"></iframe>

<script type="module">

    const iframe  = document.getElementById (`high compressibility`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16 + 42

</script>

All identical teddy bears neatly lined up in a grid.

Everything is organized and predictable. Since the same toy repeats in a structured way, it’s easy to describe and compress — like saying "10 teddy bears in 5 rows" instead of listing each one.

**B. Low Compressibility: Junk Drawer of Toys**

For this low compressibility composition, I try to use the Canvas API to code.

<canvas id="canvas" width="400" height="400"></canvas>

  <script>
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const toys = ["🧸", "🚗", "🪀", "🪁", "🧃", "🎲", "🦕", "🪆", "🎯", "🪓"];

    ctx.font = "24px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (let i = 0; i < 50; i++) {
      let toy = toys[Math.floor(Math.random() * toys.length)];
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      ctx.fillText(toy, x, y);
    }
  </script>

```javascript
<canvas id="canvas" width="400" height="400"></canvas>

<script>
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const toys = ["🧸", "🚗", "🪀", "🪁", "🧃", "🎲", "🦕", "🪆", "🎯", "🪓"];

    ctx.font = "24px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (let i = 0; i < 50; i++) {
    let toy = toys[Math.floor(Math.random() * toys.length)];
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    ctx.fillText(toy, x, y);
    }
</script>
```

All kinds of random toys tossed everywhere.

No pattern, no order, just chaos. Every item is unique and placed unpredictably, like a messy junk drawer. You can’t summarize it without listing each toy and its location.

**C. High Effective Complexity – “Organized Toy Shelf with Surprises**

<iframe id="High Effective Complexity" src="https://editor.p5js.org/WaiKei1/full/xDX4XF0Vv"></iframe>

<script type="module">

    const iframe  = document.getElementById (`High Effective Complexity`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16 + 42

</script>

A toy shelf with a structured layout, but each spot holds a different toy.

There’s a clear underlying structure (like shelves or grid), but the contents are diverse. This balance between order and variation makes the composition interesting, neither too simple nor too chaotic.

---

![Hw4a_2](/w04s1/homework4a_2.png)

Galanter’s idea is particularly useful in generative art because it allows artists to explore how structure can emerge alongside randomness. It acknowledges that structure isn't always fixed as it can be perceived differently by different viewers.

In my first and second compositions (high and low compressibility), the contrast is clear. The high compressibility piece has a very obvious and rigid structure — neat rows of identical teddy bears but it lacks the surprise or variation that randomness brings. On the other hand, the low compressibility piece is entirely random, with no visible order. The structure is nearly invisible, making it harder to interpret or predict.

But in my third composition, it was a combinition of the first and the second feature. This is where Galanter’s point about subjective structure really shows. The layout follows a clear grid (structure), but each position contains a different toy (randomness). It’s visually organized, yet still engaging because of the variation.

In this sense, the grid logic in the code provides the structure, while randomized toy selection introduces unpredictability. It creates a balance between order and chaos.

---

![Hw4a_3](/w04s1/homework4a_3.png)

I chose the video artwork [r = θ](https://sodeoka.com/r-t) by Yoshi Sodeoka.

As the title suggests, the artist uses the mathematical formula r = θ as a structural foundation, offering a mathematical lens through which to view the world. This formula generates spiral patterns.

![r = θ](/w04s1/r%20=%20θ.png)

Sodeoka takes this structure and overlays it onto real-world footage, creating a unique perspective that blends reality with mathematical abstraction.

Throughout the video, the visuals constantly shift between natural imagery and abstract, mathematical representations. This back-and-forth creates a sense of randomness and chaos, contrasting with the orderly structure of the spiral. It feels like the artist is showing us how the world might look if we could see the hidden patterns and equations behind everything around us. This balance between structure and randomness creates a rich, layered experience that feels visually engaging.

---

### Session 2: 27 Mar

_(No class)_

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
- [Week 5](https://waikei1-creative-co-63.deno.dev/week5)
- [Week 6](https://waikei1-creative-co-63.deno.dev/week6)
- [Week 7](https://waikei1-creative-co-63.deno.dev/week7)
- [Week 8](https://waikei1-creative-co-63.deno.dev/week8)
- [Week 9](https://waikei1-creative-co-63.deno.dev/week9)
- [Week 10](https://waikei1-creative-co-63.deno.dev/week10)
- [Week 11](https://waikei1-creative-co-63.deno.dev/week11)
- [Week 12](https://waikei1-creative-co-63.deno.dev/week12)

---
