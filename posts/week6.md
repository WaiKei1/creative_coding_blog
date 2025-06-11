---
title: Week 6
published_at: 2025-04-08
snippet: Three.js
disable_html_sanitization: true
allow_math: true
---

| [W1](https://waikei1-creative-co-63.deno.dev/week1) | [W2](https://waikei1-creative-co-63.deno.dev/week2) | [W3](https://waikei1-creative-co-63.deno.dev/week3) | [W4](https://waikei1-creative-co-63.deno.dev/week4) | [W5](https://waikei1-creative-co-63.deno.dev/week5) | [W7](https://waikei1-creative-co-63.deno.dev/week7) | [W8](https://waikei1-creative-co-63.deno.dev/week8) | [W9](https://waikei1-creative-co-63.deno.dev/week9) | [W10](https://waikei1-creative-co-63.deno.dev/week10) | [W11](https://waikei1-creative-co-63.deno.dev/week11) | [W12](https://waikei1-creative-co-63.deno.dev/week12) |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| [A1](https://waikei1-creative-co-63.deno.dev/A1)    | [A2](https://waikei1-creative-co-63.deno.dev/A2)    | [A3](https://waikei1-creative-co-63.deno.dev/A3)    |

### INDEX

- [Notes](https://waikei1-creative-co-63.deno.dev/week6#notes)

  - [requestAnimationFrame()](https://waikei1-creative-co-63.deno.dev/week6#requestanimationframe)
  - [three.js](https://waikei1-creative-co-63.deno.dev/week6#threejs)
  - [Bare Specifier](https://waikei1-creative-co-63.deno.dev/week6#bare-specifier)
  - [Signal Envelopes in Three.js (a dynamic function)](https://waikei1-creative-co-63.deno.dev/week6#signal-envelopes-in-threejs-a-dynamic-function)
  - [JavaScript Modules (ESM)](https://waikei1-creative-co-63.deno.dev/week6#javascript-modules-esm)
  - [npm (Node Package Manager)](https://waikei1-creative-co-63.deno.dev/week6#npm-node-package-manager)

- [Homework](https://waikei1-creative-co-63.deno.dev/week6#homework)

  - [Session 1: 8 Apr](https://waikei1-creative-co-63.deno.dev/week6#session-1-8-apr)
  - [Session 2: 10 Apr](https://waikei1-creative-co-63.deno.dev/week6#session-2-10-apr)

---

# Notes

### [requestAnimationFrame()](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame)

A method that tell the browser to perform an animation and requests the browser to call a specified function before the next repaint.

**Syntax**

Start: `requestAnimationFrame(callback)`

1. callback: the function to invoke before the next repaint

2. returns a requestId (a long integer) that can be used to cancel the request with cancelAnimationFrame()

Stop: `cancelAnimationFrame(requestId)`

---

### three.js

Three.js is a popular JavaScript library used to create and display 3D graphics in web browsers. It is built on top of WebGL, a low-level API for rendering 3D graphics in the browser, but simplifies the process by providing a higher-level, more intuitive interface.

---

### Bare Specifier

A bare specifier is a way to import modules in JavaScript without specifying a full path or file extension. Instead of using relative paths (./module.js) or absolute paths (/src/module.js), you reference a module by its name (e.g., three or react).

---

### Signal Envelopes in Three.js (a dynamic function)

#### Signal

A signal is typically a continuous stream of data that changes over time. It can represent any kind of fluctuating value, such as a wave, sound, light intensity, or even a visual property like position or color.

In creative coding or sound design, signals can be mathematical functions (like sine waves) or procedural algorithms that generate data that evolves over time. For example, a sine wave signal will oscillate between values in a smooth, continuous manner.

---

#### Envelope

An envelope is a signal that specifically describes how a value changes over time in a defined shape or pattern. Envelopes are typically used to modulate or control other signals (such as controlling the amplitude of a sound or the size of an object).

Envelopes often have specific phases, such as:

- Attack (how the signal increases)

- Decay (how it decreases)

- Sustain (a steady level)

- Release (how it fades out)

Envelopes are often used in audio (like sound synthesis) to describe the dynamics of a sound over time (e.g., how the loudness of a note changes after it’s played).

---

A signal envelope is essentially a time-varying function that alters (modulates) a value over time. This is commonly used in:

- **Audio visualization**: (e.g., reacting to sound frequencies)

- **Animation curves**: (e.g., smooth transitions)

- **Procedural generation**: (e.g., terrain or wave patterns)

**Summary**

- Signal: A continuous stream of data that changes over time, like a sine wave or any fluctuating value (e.g., sound, light, position).

- Envelope: A signal that controls how another signal evolves over time, typically defining phases like attack, decay, sustain, and release. It's often used to shape the dynamics of a signal (e.g., how sound volume changes).

- Signal + Envelope: When an envelope modulates or controls a signal, shaping how it changes over time (e.g., controlling the volume of a sound wave with an envelope).

---

### [JavaScript Modules (ESM)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

Modules are reusable pieces of code that encapsulate functionality (variables, functions, classes) and expose only what’s needed.

They help avoid global scope pollution, manage dependencies, and improve code maintainability.

**ESM (ECMAScript Modules)**
(ECMAScript = the real name for JavaScript)

- **export**

  Lets you share code (like functions or variables) from one file.

  - Named exports (export const foo = ...;)

  - Default export (export default function() {...})

- **import**

  lets you bring shared code into another file. (loads exported values from another module)

TL;DR: JavaScript Modules (import/export) help you write cleaner, modular, and maintainable code by scoping dependencies and avoiding globals. Essential for modern JS development.

**Example**

1. Without Modules

```html
<script src="path-to/q5.min.js"></script>
<script src="path-to/c2.min.js"></script>
<script src="path-to/svg.min.js"></script>
```

2. With Modules

```javascript
import q5 from "./path-to/q5.module.js";
import c2 from "./path-to/c2.module.js";
import { SVG } from "./path-to/svg.module.js";
```

**Quick key:**

- script src="..." = old way (automatic global access, no import)

- import ... from '...' = module way (modern, cleaner, but needs module support)

- **If a library is not written as an "ES Module", you cannot just import it with a simple line inside a JavaScript module.**

---

### [esm.sh](https://esm.sh/)

esm.sh is a CDN (Content Delivery Network) that provides ESM-compatible versions of JavaScript libraries.

It allows you to import JavaScript libraries in ES Modules format directly into your project, even if those libraries were originally not packaged for this format.

How it works: When you access a library via esm.sh, the CDN will convert the library into an ES Module format that is compatible with modern JavaScript projects.

It is useful for quickly importing libraries that don’t have native ES Module versions or when you want to use them directly in the browser without additional bundling or configuration.

**Example**

`import { something } from 'https://esm.sh/some-library';
`

---

- ESM is the native module system in JavaScript that allows for clean and modular coding using import and export.

- esm.sh is a CDN that lets you quickly import JavaScript libraries as ES Modules, even if those libraries weren’t originally in that format.

---

### npm (Node Package Manager)

A tool you use to install and manage packages (libraries, code others made) for JavaScript projects.

It also refers to the website (https://www.npmjs.com/) where all the packages are stored and shared.

**Why do we need npm?**

Before npm, if you wanted a library (like q5.js, c2.js, or SVG.js), you had to:

- Manually download the file

- Add it to your project folder

- Link it yourself

Now, with npm, you can just type one command, and it will:

- Download the correct version

- Put it in a special node_modules folder

- Keep track of it automatically (in a file called package.json)

**Example**

Instead of downloading SVG.js yourself, you just type:

`npm install @svgdotjs/svg.js`

---

# Homework

### Session 1: 8 Apr

![hw5b_1](/w06s1/hw5b_1.png)

The three.js example that I picked is [lights / spotlight](https://threejs.org/examples/#webgl_lights_spotlight)

Importing a Three.js model is pretty much the same as loading an image—you just need to use a bare specifier and double-check your file paths.

To keep the 3D object from taking over my main post, I’ve given it its own entry. Feel free to check it out here: [Embedded Object](https://waikei1-creative-co-63.deno.dev/w6s1hw).

---

![hw5b_2](/w06s1/hw5b_2.png)

Sabato Visconti's glitch artwork - [GIF Sticker Pack One#2 (Black rose)](https://www.sabatobox.com/gif-sticker-pack-one#2) presents a looping black rose in GIF format. From my perspective, the looping process pixelizes the transformation of a flower bud into a fully bloomed flower, and then reverses it, collapsing the bloom back into a bud.

**Aesthetic register**

This process captures the natural beauty of a flower blooming while simultaneously incorporating glitch effects — pixelated distortions that repeat and overlay the organic transformation with a sense of technological failure. Therefore, the aesthetic register of this artwork blends the romanticism of nature with the cold, unpredictable breakdowns associated with digital media.

**Effective Complexity**

In terms of effective complexity, the artwork balances order and chaos. Order is found in the spinning, symmetrical form of the flower, which follows a predictable, natural motion. Chaos emerges through the pixelization, where parts of the flower flash, disappear, or fragment unexpectedly.

**How it works, under the hood**

I think this artwork might work under the hood by manipulating the data directly. If this were done in a coding-based method, first it would require a fully bloomed rose model and a second version of a flower bud. The bud could be created either by deleting the petals from the fully bloomed rose or by modeling a new, smaller version of the flower.

Then, a pixelizing or glitch effect could be implemented as a "bridge" to connect the two roses, creating the illusion of the flower blooming and collapsing. Finally, a spinning effect would be added, with careful control over the rotation speed to keep the loop feeling smooth.

---

### Session 2: 10 Apr

![hw6a_1](/w06s2/hw6a_1.png)

- [q5.js](https://q5js.org/home/)

  q5.js is an open-source JavaScript library similar to p5.js but smaller and more lightweight. It offers a wide range of creative coding tools, with extensive learning resources, examples, and clear explanations available on its site. It is designed to make coding interactive visuals more accessible while maintaining a smaller library footprint.

  General creative coding (smaller alternative to p5.js) — focus on sketches, interactive visuals.

- [c2.js](https://c2js.org/)

  c2.js is a JavaScript library focused on computational geometry, physics simulations, evolutionary algorithms, and related modules. It is particularly useful for projects involving shapes, patterns, and mathematical simulations. The library provides many references and tutorials geared toward creative explorations of geometric forms and physical behaviors.

  More specialized — focuses on shapes, simulations, and computational geometry.

- [SVG.js](https://svgjs.dev/docs/3.2/)

  SVG.js is a lightweight JavaScript library specifically for manipulating and animating SVG (Scalable Vector Graphics). It offers simple, powerful tools for creating, modifying, and animating SVG elements, making it a go-to resource when working with vector-based web animations and dynamic illustrations.

  Specializes in manipulating and animating SVG graphics — vector-focused animations.

---

![hw6a_2](/w06s2/hw6a_2.png)

According to these three websites, I'm aware that we cannot use **q5.js** and the **c2.js** libraries directly within an ESM (ECMAScript Module) because they are primarily designed to be used with the traditional script tag in HTML, not for import via JavaScript modules. They don't natively support ESM imports, as they are not packaged for this format.

But we can use **SVG.js** within a JavaScript module because it supports installation through npm, which means it’s packaged for use in both ESM and CommonJS formats. This allows you to import it directly into an ESM module.

A tool like esm.sh is useful when you want to import libraries or packages that were not originally packaged as ESM. It acts as a bridge, allowing you to import these libraries in the ESM format by serving them in a compatible way. This is helpful when the original libraries don't support ESM imports directly but you still want to use them in modern JavaScript workflows.

---

![hw6a_3](/w06s2/hw6a_3.png)

Same with the earlier one, I make another post for this one as well. Here is the link to access [usagi circles](https://waikei1-creative-co-63.deno.dev/w6s2hw).

This one honestly took me quite a bit of time to figure out. I got stuck at the import part at first, but after seeing some of my classmates having the same problem, I realized it might be easier to just import the whole library directly. That way, I could spend more time actually playing around with the code instead of just fixing links.

For this project, I experimented a lot with the math side — especially using radius and angles — to get the Usagi image to expand out in circles over time. I wanted to make it feel like the icons are drawing full circles, layer by layer, and slowly building up the a circular pattern.

---

![hw6a_4](/w06s2/hw6a_4.png)

Here is a brief summary of the following articles:

**1. Information & Thinking by Michel Serres**

Serres is trying to say that everything that exists is information — the existence itself is information, and it's about how we read or interpret it. Humans, in the latest society, mainly deal with information through networking and digital networks. He claims that innovation is very precious and can be found through how we use and create with information. But passing information alone isn’t innovation — true thinking involves creating new ideas, not just transmitting data. Humans have always been networkers, from oral to written to digital times, but real invention and creativity come when we think beyond just the network and actively produce new connections and meanings.

**2. What Is It Like to Be A Fungus? by Merlin Sheldrake**

The author uses fungi as a metaphor to encourage us to rethink how we live and perceive intelligence. We often associate intelligence and skills with the brain, but the author points to an experiment involving slime molds—organisms without brains—that can find the most efficient path through obstacles. This challenges our traditional ideas about intelligence and suggests that it’s not just about the brain.

The author also questions the concept of individuality, noting that humans are made up of a vast network of microbes, which play a significant role in our health. This suggests that the idea of a single, isolated individual is misleading, as we are part of a much larger system. This challenges our conventional understanding of what it means to be an individual.

**3. Xenofemenism: A Politics for Alienation by Laboria Cuboniks**

Xenofeminism is a community aiming for a more just and fair future. They talk about the unfairness and discrimination that comes from society creating rules tied to gender for a long time. They believe we should break away from these fixed ideas about gender. Xenofeminism argues that science and technology can help expand our freedom, because through advances like hormone therapy, we can invent new ways to move beyond the limits that nature and society have set for us. Importantly, they are not trying to erase the differences between genders, but instead are trying to break the social rules and labels that have been added to people based on gender. This is not a one-time change — it’s an ongoing and continuous process that pushes for a fairer, more equal future.

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
