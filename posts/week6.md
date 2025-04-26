---
title: Week 6
published_at: 2025-04-8
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

- [Homework](https://waikei1-creative-co-63.deno.dev/week6#homework)

  - [Session 1: 8 Apr](https://waikei1-creative-co-63.deno.dev/week6#session-1-8-apr)
  - [Session 2: 10 Apr](https://waikei1-creative-co-63.deno.dev/week3#session-2-10-apr)

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

A signal envelope is essentially a time-varying function that alters (modulates) a value over time. This is commonly used in:

- **Audio visualization**: (e.g., reacting to sound frequencies)

- **Animation curves**: (e.g., smooth transitions)

- **Procedural generation**: (e.g., terrain or wave patterns)

**Summary**

- Envelopes = Time-varying functions that modify values (scale, position, etc.)

- Prebuilt patterns (sine, lerp, ADSR) save coding time

- Combine with Three.js for dynamic scenes

---

# Homework

### Session 1: 8 Apr

![hw5b_1](/w06s1/hw5b_1.png)

The three.js example that I picked is [lights / spotlight](https://threejs.org/examples/#webgl_lights_spotlight)

Importing a Three.js model is pretty much the same as loading an image—you just need to use a bare specifier and double-check your file paths.

To keep the 3D object from taking over my main post, I’ve given it its own entry. Feel free to check it out here: [Embedded Object](ttps://waikei1-creative-co-63.deno.dev/w6s1hw).

---

---

![hw5b_2](/w06s1/hw5b_2.png)

---

### Session 2: 10 Apr

Next session will be doing some activities os read the essay

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
