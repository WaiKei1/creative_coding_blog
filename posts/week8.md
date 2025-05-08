---
title: Week 8
published_at: 2025-04-25
snippet: continue to work on A2 (midsembreak)
disable_html_sanitization: true
allow_math: true
---

| [W1](https://waikei1-creative-co-63.deno.dev/week1) | [W2](https://waikei1-creative-co-63.deno.dev/week2) | [W3](https://waikei1-creative-co-63.deno.dev/week3) | [W4](https://waikei1-creative-co-63.deno.dev/week4) | [W5](https://waikei1-creative-co-63.deno.dev/week5) | [W7](https://waikei1-creative-co-63.deno.dev/week7) | [W8](https://waikei1-creative-co-63.deno.dev/week8) | [W9](https://waikei1-creative-co-63.deno.dev/week9) | [W10](https://waikei1-creative-co-63.deno.dev/week10) | [W11](https://waikei1-creative-co-63.deno.dev/week11) | [W12](https://waikei1-creative-co-63.deno.dev/week12) |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| [A1](https://waikei1-creative-co-63.deno.dev/A1)    | [A2](https://waikei1-creative-co-63.deno.dev/A2)    | [A3](https://waikei1-creative-co-63.deno.dev/A3)    |

---

# Homework

![hw8_1](/w08/hw8_1.png)

**What do you think she means by this?**

McKenzie Wark’s line, “Unlike the interesting, the zany really works against its constraint,” suggests that the zany is chaotic, playful, and unpredictable. While the “interesting” still invites exploration, it usually stays within a certain structure or frame. The zany, on the other hand, pushes beyond that—it’s like the interesting pushed to its limit, but with unexpected, sometimes ridiculous energy.

---

**In what ways would you consider the chaotic and the zany to be similar? In what ways are they different?**

Zany and chaotic both feel messy, unexpected, and disorienting. They can overwhelm the audience or catch them off guard. But emotionally, they’re quite different: zany tends to be more funny, exaggerated, or even endearing, while chaos can feel uncomfortable, tense, or intense. Chaos lacks control, while zaniness performs the lack of control in an entertaining or absurd way.

---

**In what ways would you consider your AT2 to be zany? What might be some ways to make your AT2 more zany?**

I’d say my AT2 project is already a bit zany—especially in the fracture stage. The spores don’t just connect peacefully—they bounce and glitch like they’re overperforming the act of connection. It feels dramatic and unnecessarily intense, which adds that zany energy. To make it even zanier, I could exaggerate those moments of failure—like spores trying too hard and missing, or glitching in a way that feels silly or frantic.

---

![hw8_2](/w08/hw8_2.png)

**Examples of how and where it uses:**

**1. Variables**

Variables are used throughout to store and track dynamic values such as `let mode = "scatter"`

---

**2. Iteration**

A for loop in p.setup() creates multiple spore objects:

```javascript
for (let i = 0; i < 50; i++) {
  spores.push(new Spore(p.width / 2, p.height / 2));
}
```

---

**3. Functions**

Functions are being used through all the entire sketch.

- p.setup(), p.draw(), p.mousdPressed
- custom functions: handleFractureMode() and handleReformMode()
- spore class also uses the custom methods `.update()` and `.display()`

---

**4. Boolean logic**

- `if (!audioStarted) { ... }` to ensure audio only starts once
- conditional statement (mode changes)

```javascript
  if (mode === "scatter") { ... }
  else if (mode === "fracture") { ... }
```

---

**5. Arrays**

- `let spores = [];` - spores arrat holds all individual spore objects

- `p.random([255, 255, 0, 0])` - random colour selection

---

**6. Classes**

spore class

```javascript
class Spore {
  constructor(x, y) { ... }
  update() { ... }
  display() { ... }
}
```

---

**7. Recursion**

    A form of recursive structure is mimicked visually in the reform mode:

    - The `lerp()` function slowly pulls spores toward each other over time, gradually forming connections.

    As spores move closer, they create new connections, which visually resembles recursive network growth. The cyclical looping and spatial relationships create the recursive visual logic.

---

**How it responds to the chosen text**

My idea for A2 is inspired by these 4 chosen passages:

> **“Slime molds... can find the shortest route through a maze, make decisions based on past experiences, and solve complex problems—all without a brain.”**

> **“Fungi form vast, branching networks of mycelium that weave through soil and wood, connecting and communicating across long distances.”**

> **“We are ecosystems, composed of and maintained by countless microbes. The idea of an individual starts to fray when viewed through the lens of microbial life.”**

> **Fungi are metabolic wizards that can explore, scavenge, and salvage ingeniously, and their mycelial networks can fuse, fracture, and re-form**

The first three passages helped shape the concept behind my work. I wanted to highlight the intelligence of fungi—even though they don’t have a brain, they can solve complex problems and adapt based on past experiences. They also build massive, interconnected networks through mycelium, which can be compared to how microbes connect and sustain our own bodies as humans. It shows that we, too, are made up of networks, not just as individuals but as ecosystems.

So I decided to represent that idea by visualising a mycelial network—how it grows, breaks, and comes together again. That part connects with the fourth quote, which specifically mentions the behaviour of fungi networks: they can scatter, fracture, and reform. That inspired the three-phase cycle in my work.

---

**Why you consider it to be post-digital**

I'd consider my work to be post-digital because it doesn’t just use digital tools—it critically engages with them to explore deeper, entangled relationships between humans and nature.

In this project, the digital medium becomes a means to visualize the invisible intelligence of the mycelial network, not as a gimmick, but as a conceptual framework. The fungi's interconnected system acts as a metaphor for the complexity of human identity—challenging the idea of the individual as separate or isolated.

This approach aligns with post-digital thinking, where technology is no longer the focus, but a quiet, embedded layer that supports a more nuanced exploration of life, networks, and systems. It’s about shifting attention from the tools themselves to the ideas they help us uncover.

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
