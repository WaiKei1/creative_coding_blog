---
title: Week 2
published_at: 2025-03-11
snippet: ideation of assignment 1
disable_html_sanitization: true
allow_math: true
---

| [W1](https://waikei1-creative-co-63.deno.dev/week1) | [W3](https://waikei1-creative-co-63.deno.dev/week3) | [W4](https://waikei1-creative-co-63.deno.dev/week4) |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| [A1](https://waikei1-creative-co-63.deno.dev/A1)    |

# Notes

**Aesthetic Register**

Aesthetic Register is more specific concept that refer to the tone, style, or mode inwhich an aesthetic is expressed or communicates. It is about the delivery / expression of an aesthetic, rather than the aesthetic itself. Aesthetic (noun) defines the overall look and feel and aesthetic register (noun, verb) defines how that look and feel is expressed or experienced.

It helps us to decide the tone of the work and communicate the ideas or emotions more effectively.

---

**Kindred Spirit**

- A best friend / soulmate / sidekick

---

**Function**

- function setup = happen once and only once (the moment the sketch begins)

- function draw = happen forever "loop"

---

**[Array](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Arrays)**

An array is a special variable that can store multiple values in a single variable. (arrays use zero-based indexing, meaning the first item is at index 0)

Example:

let fruits = ["apple", "banana", "orange"];

---

# Homework

### Session 1: 11 Mar

![homework2a](/static/w02s1/homework2a.png)

**My Kindred Spirit: Plushie Bear**

For my AT1 project, I have chosen my plushie bear as my kindred spirit. This choice will perfectly embodies both cute and a personal connection to me.

Here is how I will achieve cuteness in three domains:

1. **Cute Visual**

   A round, fluffy bear face wth big eyes in the middle of the canvas. The colour of the bear face will be soft brown pastel colours.

- Techniques:

  - Draw the Bear Expressions by using Procreate (Neutral, Sleeping, Happy)

  - Colours

    - Bear Face

      Soft pastel browns

    - Background Canvas

    Change according to the bear's emotion

2. **Cute Sounds**

   Clicking on the bear's face will trigger different sound effects corresponding to its expressions.

   For example:

   - Neutral Expression: baby mumbling sound
   - Happy Expression: baby giggling sound
   - Sleeping Expression: Lullaby music

- Techniques:
  - sound library [(Freesounds)](https://freesound.org/)
  - Make sure the sounds are short and match the expression

3. **Cute Interactions**

   When the mouse clicks on the bear face, it will change to different expressions, sound, and background colour

- Techniques:
  - mousePressed or mouseClicked to apply the clickling interaction
  - Canvas background colour change when along with the expression after clicking

---

### A1: Ideation Sketch

<iframe id="A1: Ideation Sketch" src="https://editor.p5js.org/WaiKei1/full/ELzwIInyR"></iframe>

<script type="module">

    const iframe  = document.getElementById (`A1: Ideation Sketch`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16 + 42

</script>

**Desciption of my plan:**

The canvas will be sized to fit the screen, with a round bear face displayed in the center. Initially, the bear will have a neutral expression with a pink background. When the user clicks on the bear’s face, the expression will change to a different emotion, accompanied by a corresponding sound effect. The background color will also update to match the emotion. Other than that, the background will include some elements that related to each expressions, for example:

- Screen 1 (Neutral): Pink background
- Screen 2 (Sleeping): Blue background
- Screen 3 (Happy): Yellow background

Each click will cycle through these expressions in order, creating an interactive experience.

---

### Session 2: 13 Mar

![homework2b](/static/w02s2/homework2b_1.png)

- **What is the context of your kinship?**

My plushie bear has been with me for a long time. Personally, she is not just a stuffed toy but a cherished companion, gifted to me by my family and blessed with their love. Whenever I need emotional support, she is always there. Hugging her provides a sense of security and comfort, easing my worries and making me feel safe.

- **What is your common purpose?**

Both my plushie bear and I share the purpose of bringing comfort and joy. Her cuteness has a healing effect on me, lifting my mood whenever I’m feeling down. That’s why I want to create something that represents my appreciation for her. Through my sketch, I aim to capture her cuteness and how meaningful she is to me.

- **Who or what is your shared challenge / adversary?**

Our shared challenge is stress and exhaustion. As my companion, she has always been there to help me face challenges, whether it’s meeting deadlines or dealing with overwhelming days. She is my escape from negativity, providing me with calmness, softness, and happiness.

---

![homework2b](/static/w02s2/homework2b_2.png)

As I mentioned above, the bear plushie play the role of a campanion in my life. My sketch offering reflects this bond, the changable expression just like how she acts and lift my spirits in real life.

### A1: Sketch 1 (Attempt 1)

<iframe id="A1: Sketch 1 (Attempt 1)" src="https://editor.p5js.org/WaiKei1/full/6W820i-0B"></iframe>

<script type="module">

    const iframe  = document.getElementById (`A1: Sketch 1 (Attempt 1)`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16 + 42

</script>

- **How my plushie bear relates to the visual elements**

She meant to be cute and comforting. The cuteness of its visual heals me. Therefore my visual will focus on crating a simple, warm, friendly and approachable aesthetic that reflects the meaningful characteristic that she had in my life.

The visual approach that I have to express the cuteness and friendly are using the pastal colour, round, fluffy features. Through these features, she might recognize the bear face is her and she might realize the expression and the reaction are what she make me feel in real life.

- **How my plushie bear relates to the sonic elements**

Even though my plushie bear can't really make sounds, but I image that if she could express herself, she would do in a gentle way. These sound effects would reflect how she will react to when she had that specific emotions.

- **How my plushie bear relates to the interactive elements**

The interactivity also bring her to life. She would respond to my touch with different emotion just like how my mood changes when I hug her.

---

![homework2b_3](/static/w02s2/homework2b_3.png)

<iframe id="Falling Falling" src="https://editor.p5js.org/WaiKei1/full/Yg8V2JyTa"></iframe>

<script type="module">

    const iframe  = document.getElementById (`Falling Falling`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16 + 42

</script>

**Code that I don't understand:**

      // assign .curves attribute into faller
        faller.curves = new Array (7).fill ().map (rand_curve)
        faller.phase  = 0
        fallers.push (Object.assign ({}, faller))
        bg = rand_col ()
      }

      function draw() {
        background (bg)
        if (frameCount % 40 == 0) {
          const new_faller = Object.assign ({}, faller)
          new_faller.colours = [ bg, rand_col () ]
          new_faller.curves = new Array (7).fill ().map (rand_curve)

          fallers.unshift (new_faller)
          bg = rand_col ()
        }
        const redundant = []
        fallers.forEach ((f, i) => {
          colorMode (RGB)
          fill (lerpColor (f.colours[0], f.colours[1], f.phase))
          beginShape ()
          vertex (0, height)
          f.start_points.forEach ((s, i) => {
            const p = find_point (s, f.end_points[i], f.phase ** f.curves[i])
            vertex (p.x, p.y)
          })
          vertex (width, height)
          endShape ()
          f.phase += 0.008
          if (f.phase > 1) redundant.push (i)
        })
        redundant.forEach (n => fallers.splice (n, 1))
      }

      function find_point (start, end, phase) {
        const delt = {
          x: end.x - start.x,
          y: end.y - start.y
        }
        const x = start.x + delt.x * phase
        const y = start.y + delt.y * phase
        return { x, y }
      }

      function rand_col () {
        colorMode (HSB)
        const h = floor (random () * 360)
        return color (h, 100, 100)
      }

      function rand_curve () {
        return random () * 2 + 1
      }

---

## Quick Links

### Assignments:

- [Assignment 1: Cute!](https://waikei1-creative-co-63.deno.dev/A1)

---

### Weekly Study Journey:

- [Week 1](https://waikei1-creative-co-63.deno.dev/week1)
- [Week 3](https://waikei1-creative-co-63.deno.dev/week3)
- [Week 4](https://waikei1-creative-co-63.deno.dev/week4)

---
