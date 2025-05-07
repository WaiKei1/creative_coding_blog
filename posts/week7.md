---
title: Week 7
published_at: 2025-04-15
snippet: shaders, moire and A2 draft
disable_html_sanitization: true
allow_math: true
---

| [W1](https://waikei1-creative-co-63.deno.dev/week1) | [W2](https://waikei1-creative-co-63.deno.dev/week2) | [W3](https://waikei1-creative-co-63.deno.dev/week3) | [W4](https://waikei1-creative-co-63.deno.dev/week4) | [W5](https://waikei1-creative-co-63.deno.dev/week5) | [W7](https://waikei1-creative-co-63.deno.dev/week7) | [W8](https://waikei1-creative-co-63.deno.dev/week8) | [W9](https://waikei1-creative-co-63.deno.dev/week9) | [W10](https://waikei1-creative-co-63.deno.dev/week10) | [W11](https://waikei1-creative-co-63.deno.dev/week11) | [W12](https://waikei1-creative-co-63.deno.dev/week12) |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| [A1](https://waikei1-creative-co-63.deno.dev/A1)    | [A2](https://waikei1-creative-co-63.deno.dev/A2)    | [A3](https://waikei1-creative-co-63.deno.dev/A3)    |

### INDEX

- [Notes](https://waikei1-creative-co-63.deno.dev/week6#notes)

  - [Shaders](https://waikei1-creative-co-63.deno.dev/week7#shaders)
  - [Moiré](https://waikei1-creative-co-63.deno.dev/week7#moiré)

- [Homework](https://waikei1-creative-co-63.deno.dev/week7#homework)

  - [Session 1: 15 Apr](https://waikei1-creative-co-63.deno.dev/week7#session-1-15-apr)
  - [Session 2: 17 Apr](https://waikei1-creative-co-63.deno.dev/week7#session-2-17-apr)

---

# Notes

### [Shaders](https://blog.science.family/250413_shaders)

**Conclusion:**

Shaders are small programs that run on the GPU to control how graphics are rendered, especially how shapes and pixels appear on the screen. While they can be used to create moving colors or dynamic effects, shaders are not just "colors that move" — they are powerful tools for generating visuals, including lighting, textures, animations, and interactive patterns. By using programming languages like GLSL, developers can make real-time visual effects that respond to time, user input, and more.

---

### Moiré

Moiré is a visual effect that occurs when two or more repetitive patterns—such as lines, dots, or grids—overlap and interfere with each other, creating a new, often wavy or rippling pattern that wasn’t in the original images.

#### Moiré vs. Glitch Effects

**Moiré**

Moiré is a structured, pattern-based distortion (e.g., wavy lines, rainbow ripples) caused by physical or optical interference (like overlapping grids or sensor limitations). It’s often repetitive and predictable in its appearance.

Example: A finely striped shirt on camera creates swirling waves.

**Glitch Effects**

Glitch effects are unpredictable, chaotic digital errors (e.g., pixel tears, color noise, fragmented images) caused by data corruption, signal loss, or intentional manipulation. They feel "broken" or unstable.

Example: A corrupted JPEG has random pixel blocks or a VHS tape skips violently.

---

# Homework

### Session 1: 15 Apr

![hw6b_1](/w07s1/hw6b_1.png)

I looked into this as a tutorial reference

<iframe id="homework6b: simple shader" src="https://editor.p5js.org/WaiKei1/full/U6MuO3gtg"></iframe>

<script type="module">

    const iframe  = document.getElementById (`homework6b: simple shader`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16 + 42

</script>

---

![hw6b_2](/w07s1/hw6b_2.png)

**A: pick three passages from the text that speak to you the loudest**

> **“Slime molds... can find the shortest route through a maze, make decisions based on past experiences, and solve complex problems—all without a brain.”**

This challenges the traditional idea that intelligence must be linked to a brain. It shows that fungi, despite not having a nervous system, can still solve problems and adapt to their environment. In a way, it proves that fungi have their own kind of intelligence—just not in the form we’re used to recognizing.

(indicate fungi are smart - solve problems and adapt)

---

> **“Fungi form vast, branching networks of mycelium that weave through soil and wood, connecting and communicating across long distances.”**

Fungi are far more present in our world than we usually notice. These mycelium networks stretch through the soil and forests, forming connections and even communicating over long distances. It suggests that fungi are not isolated organisms but part of a much larger, living system that surrounds and supports us.

(Their mycelium networks spread everywhere, silently connecting and communicating across long distances)

---

> **“We are ecosystems, composed of and maintained by countless microbes. The idea of an individual starts to fray when viewed through the lens of microbial life.”**

This makes me rethink what it means to be an individual. If our bodies are made up of and kept alive by trillions of microbes, can we really consider ourselves a single entity? It blurs the boundary between self and other and reminds us that life is much more interconnected than we might think.

(Like fungal networks, we as individuals are made up of countless connections—microbial ecosystems that challenge the idea of being just one.)

---

**B: pick at least two techniques we have covered over the course of this unit:**

I choose signal / envelopes and glitch techniques.

---

**C: combine the passages and techniques you have chosen into a rudimentary rough draft for your AT2.**

_\* One more passage to support my idea_

> **Fungi are metabolic wizards that can explore, scavenge, and salvage ingeniously, and their mycelial networks can fuse, fracture, and re-form**

---

**Summary of my idea**

I want to create an abstract mycelial network that visualizes the life of fungi. The network will shift through different modes to represent each stage of fungal behavior: **scatter → fuse → fracture → reform**.

Each mode highlights a different aspect of fungal intelligence showing how they move, connect, adapt, and grow. This network isn’t just about fungi, though. It reflects the idea of non-human intelligence, how something without a brain can still solve problems and communicate.

At the same time, the entire cycle acts as a metaphor for how individuals are formed. Like fungi, we’re not just one thing—we’re made up of countless connections, microbial ecosystems, and invisible systems that shape who we are.

**Techniques:**

- I will use signals/envelopes to control the transitions between each stage of the network’s behavior—guiding the way forms scatter, come together, break apart, and reform smoothly or chaotically, mimicking natural processes.

- I will incorporate glitch techniques to represent the moment of connection between different parts of the network. When new links form, they will visually bounce and glitch—creating a sense of unstable, flickering energy—as if the system is actively searching, reaching, and locking into new pathways.

---

![hw6b_3](/w07s1/hw6b_3.png)

![hw6b_4](/w07s1/hw6b_4.png)

**Feedback Summary:**

I think the way you’ve tied your piece to the text about fungi and non-human intelligence works really well. The idea that fungi can adapt and solve problems without a brain seems to connect perfectly to your approach with the shifting, interconnected mycelial network. The reference to microbial life further strengthens the idea of intelligence being more distributed than we usually think, which is spot on.

It’s definitely post-digital! By incorporating glitch aesthetics, you’re showing how digital systems don’t always behave in the clean, predictable ways we expect. The glitching as the mycelial connections form makes the process of connection itself feel uncertain and unpredictable, which ties into the whole idea of technology’s chaotic nature. I like that you're not just using digital techniques for the sake of it, but to make a statement about how systems behave.

I really like how you’re using chaotic aesthetics to express the complexity of the natural world. The mycelial network isn’t static—it’s constantly evolving. This mirrors nature's real complexity, where things aren't always easy to understand but work together in ways we can’t always predict. The glitch elements add to the unpredictability, but they don’t overwhelm the piece. You’ve found a good balance between chaos and coherence.

---

### Session 2: 17 Apr

![hw7a_1](/w07s2/hw7a_1.png)

For my AT2 sound design, I’ll reflect the shifting phases of the fungi lifecycle using a chaotic sonic aesthetic. The phases are **scatter → fracture → reform → scatter**. The phases will loop continuously, showing how spores move, interact, and reorganize. Each stage will have its own looping sound environment. I’ve removed the “fuse” phase, as it felt too similar to “reform,” and I want each stage to feel distinct, both visually and sonically.

I will create three looping sound environments, each designed to evoke a different quality of movement and transformation in the fungal system.

- **Stage 1: Scatter – Calm Chaos**

  This stage shows spores drifting randomly. The sound will be soft and ambient, like natural chaos—similar to **MyNoise Jungle or Fire**, with scattered textures and no strong structure. It represents calm unpredictability and sits between noise and sound, encouraging listeners to rethink how we hear “movement.”

- **Stage 2: Fracture – Unstable Connections**

  As the spores start glitching and bouncing to connect, the sound becomes sharper and tighter. I’ll use high-pitched glitches. It’s unstable and chaotic, showing the tension in making connections.

- **Stage 3: Reform – Nervous Convergence**

  Spores begin to come together and reposition. The sound here is nervous and fast, with twitchy rhythms and slight structure—but still unstable. It suggests a fragile order that never fully settles, showing how systems try to come together but remain in constant motion.

In the sonic domain, chaos doesn’t mean total randomness—it means unpredictability within a system that still holds shape. That’s the essence of effective complexity, where the richness of the sound arises from its refusal to fully conform to order or dissolve into noise.

By using sound to mirror fungal intelligence, I want to challenge traditional listening habits—blurring distinctions between noise and music, nature and machine, self and system. Through de-familiarisation (as Natalie Loveless discusses), I hope to reframe fungi as more than background organisms—inviting audiences to experience their agency and strangeness through shifting, layered, and unstable sounds.

---

![hw7a_2](/w07s2/hw7a_2.png)

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
