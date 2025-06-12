---
title: Week 9
published_at: 2025-05-08
snippet:
disable_html_sanitization: true
allow_math: true
---

| [W1](https://waikei1-creative-co-63.deno.dev/week1) | [W2](https://waikei1-creative-co-63.deno.dev/week2) | [W3](https://waikei1-creative-co-63.deno.dev/week3) | [W4](https://waikei1-creative-co-63.deno.dev/week4) | [W5](https://waikei1-creative-co-63.deno.dev/week5) | [W7](https://waikei1-creative-co-63.deno.dev/week7) | [W8](https://waikei1-creative-co-63.deno.dev/week8) | [W9](https://waikei1-creative-co-63.deno.dev/week9) | [W10](https://waikei1-creative-co-63.deno.dev/week10) | [W11](https://waikei1-creative-co-63.deno.dev/week11) | [W12](https://waikei1-creative-co-63.deno.dev/week12) |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| [A1](https://waikei1-creative-co-63.deno.dev/A1)    | [A2](https://waikei1-creative-co-63.deno.dev/A2)    | [A3](https://waikei1-creative-co-63.deno.dev/A3)    |

### INDEX

- [Notes](https://waikei1-creative-co-63.deno.dev/week9#notes)

  - [Vibe Coding](https://waikei1-creative-co-63.deno.dev/week9#vibe-coding)
  - [Challenges of AI Coding Agents](https://waikei1-creative-co-63.deno.dev/week9#challenges-of-ai-coding-agents)
  - [Two Brains (Human + AI Synergy)](https://waikei1-creative-co-63.deno.dev/week9#two-brains-human--ai-synergy)
  - [Multiple Agents](https://waikei1-creative-co-63.deno.dev/week9#multiple-agents)
  - [Understand AI fundamentals (tokens, context windows)](https://waikei1-creative-co-63.deno.dev/week9#understand-ai-fundamentals-tokens-context-windows)
  - [LLMs (Large Language Models)](https://waikei1-creative-co-63.deno.dev/week9#llms-large-language-models)

- [Homework](https://waikei1-creative-co-63.deno.dev/week9#homework)

  - [Session 1: 8 May](https://waikei1-creative-co-63.deno.dev/week9#session-1-8-may)
  - [Session 2: 12 May](https://waikei1-creative-co-63.deno.dev/week9#session-2-12-may)

---

# Notes

This week slides introduce AI tools for coding and how to effectively collaborate with AI coding agents so that we can use these agents for A3.

And these notes is being made for me to understand how things work.

---

### Vibe Coding

Vibe Coding is a modern, flexible approach to programming that prioritizes intuition, creativity, and flow over rigid structure.

It emphasizes feeling over rules which writing code that "feels right" rather than strictly following conventions

TL;DR: Coding with flow intuition, and fun - not just strict logic.

---

### Challenges of AI Coding Agents

They could be over-enthusistic like a toddler which lead to bad decisions, over complicated or bloated code, etc.

**HOW TO AVOID??**

Verify AI's understanding, break works into parts, test & review the code, and ask AI explain and make sure to understand what is being made.

---

### Two Brains (Human + AI Synergy)

Working with AI agent, you will be more powerful than working alone. It is a skill that improves with practice.

---

### Multiple Agents

Different AI agents have different strengths. Make sure to understand and choose wisely.

---

### Understand AI fundamentals (tokens, context windows)

These AI fundamentals help us to control well

**Reference Folder**

This is a way to guide the AI. By providing more details (like coding style, existing code, etc), basically treat them like a innocent baby and tell them what to do.

It is a folder or files named `/reference/` and fill it with snippets of the preferred code style, pattern, or structure. After that point it to these files so it can generate something accurately.

_Make sure to keep them short and focused_

---

**Context Window**

This is the "memory" of an AI model - how much text the AI can process at once.

For example: If the context window is 8k token then the AI can "see" about 6,000 words of code + the prompt.

It is matter because if the codebase is larger than the context winder then the AI will loses track of the earlier parts. Better use smaller files, summaries and break tasks into parts.

---

**Token**

The smallest unit of text the AI understand. The longer code = more tokens = slower/expensive AI responnses.

- Avoid overly verbose variable names

---

**Parameter**

Adjustable settings in an AI model that shape its behaviour. It matters because high temperature might make code unreliable, while low temperature keeps it focused but less flexible.

For example:

1. Temperature: Controls randomness (low = predictable; high = creative)
2. Max tokens: limits response length

---

### LLMs (Large Language Models)

These are AI models trained on vast text/code dataset like Claude, GPT-4, and Llama 2.

---

# Homework

### Session 1: 8 May

![hw9a_1](/w09s1/hw9a_1.png)

For this homework, I downloaded Ollama and ran LLaMA in the terminal to ask for feedback on my idea. As mentioned earlier, I plan to work on a **UI/UX feedback generator**. The target audience is designers, and the goal of this project is to provide them with fun, easy-to-understand feedback on their designs.

This is just a general concept for the assignment, and I'm still unsure how to bring it to life. I wasn’t sure whether it would be better to develop it as a website or a plugin, so I asked for suggestions.

The response recommended using GitHub for version control and collaboration, and suggested that building a website version would be more realistic given my current skills and circumstances.

---

### Session 2: 12 May

![hw9b_1](/w09s2/hw9b_1.png)

I chose **ComfyUI**. Here's a brief explaination of this GPL:

**ComfyUI** is a graph-based (node-based) interface for creating and running image generation pipelines using Stable Diffusion models. It allows you to build complex generative art workflows without writing code — everything is done through connected visual nodes.

---

![hw9b_2](/w09s2/hw9b_2.png)

I found this tutorial playlist of this GPL.

<iframe id="Tutorial" src="https://www.youtube.com/embed/videoseries?si=r2mD16Kx8QR38sqz&amp;list=PL-pohOSaL8P9kLZP8tQ1K1QWdZEgwiBM0" title="Final A3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<script type="module">

    console.log (`hello world! 🚀`)

    const iframe  = document.getElementById (`Tutorial`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16

</script>

---

![hw9b_3](/w09s2/hw9b_3.png)

![hw9b_4](/w09s2/hw9b_4.png)

**Why I Chose ComfyUI**

I chose ComfyUI because I’m deeply interested in generative art and how artificial intelligence can be harnessed creatively. As someone working in UI/UX and digital media, I often look for tools that enable visual experimentation and rapid prototyping without needing to write extensive code. ComfyUI offers a node-based visual interface to work with Stable Diffusion models, making it easier to explore the possibilities of image generation without diving deep into Python or command-line operations.

**How I might use this GPL**

As a digital media student focusing on UI/UX, I see ComfyUI as a tool that can be integrated into:

- Moodboarding and visual prototyping for app design

- Creating custom graphics for interfaces without relying on stock imagery

- Exploring speculative design, by generating concept art for fictional futures or glitch-based visuals

- Building assets for interactive installations or media art projects

**ComfyUI vs Others**

| Feature              | ComfyUI                   | TouchDesigner       | Unity Visual Scripting |
| -------------------- | ------------------------- | ------------------- | ---------------------- |
| Focus                | AI image generation       | Real-time visuals   | Game dev / logic       |
| Learning Curve       | Moderate (model concepts) | Steep but rewarding | Beginner friendly      |
| Extensibility        | High (custom nodes)       | Very High           | High                   |
| Performance          | Depends on GPU            | GPU optimized       | CPU/GPU mix            |
| Code-free experience | Fully visual              | Mostly visual       | Visual w/ scripting    |

**Strengths & Weaknesses of ComfyUI**

**Strengths:**

- Intuitive node system for non-coders

- Seamless integration with Stable Diffusion

- Open-source and community supported

- Customizable with new models and extensions

**Weaknesses:**

- Requires a powerful GPU to run smoothly

- UI can feel cluttered with large workflows

- Less flexibility for non-image tasks

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
