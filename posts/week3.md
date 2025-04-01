---
title: Week 3
published_at: 2025-03-04
snippet:
disable_html_sanitization: true
allow_math: true
---

| [W1](https://waikei1-creative-co-63.deno.dev/week1) | [W2](https://waikei1-creative-co-63.deno.dev/week2) | [W4](https://waikei1-creative-co-63.deno.dev/week4) |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| [A1](https://waikei1-creative-co-63.deno.dev/A1)    |

# Notes (In class)

**Functions**

(essentially behaviours) are like recipe,
arguements are ingredients,
if you give a pumpkin recipe and pumpkin, it will make a pumpkin cake

Variables are data

Differences between variables and attributes, attributes always live with an object

Object have both data and behaviour

Example:
const _sqr_ _(objects)_ = { x : 150, y : 150, s : 100 } (three attributes)

Classes (defining the shape of the object)
parameters

vector: start from the origans and like an arrow

forEach, change the center of the gravity could change the velocity of the squares

arrow in js dealing with a function definition

Code Style

Code Comment

**Differences between the different numbers of equal signs (=,==,===)**

1. Single equal (=): assignment

assign a value to a variable

**Example:**

let x = 0;

bgColors = [#xxxxx]

2. Double equals (==): loose comparison

compare values after type conversion

3. Triple equals (===):

## Homework

### Session 1: 18 Mar

![homework3a_1](/static/w03s1/homework3a_1.png)

**Visual**

My sketch brings my plushie bear to life through three emotional states—neutral, sleeping, and happy—each with a soft pastel color palette. I’ve designed additional elements for each scene, such as floating "ZZZ" symbols for the sleeping state and balloons for the happy state, though I haven’t imported all of them yet.

**Sonic**

Since my plushie can’t actually speak, I’ve imagined gentle, baby-like sounds to express each emotion. The audio is designed to feel like a cute, playful reaction, as if she’s responding with tiny coos and hums

**Interactivity**

Interaction is simple—clicking cycles through her expressions, mimicking how her mood changes when I play with her in real life. I’m still working on adding looping animations in the background (like ZZZs for her sleeping state) to make it feel even more alive and cute.

### Session 2: 20 Mar

![homework3b_1](/static/w03s2/homework3b_1.png)

Here's how my assignment 1 uses these concept:

**1. Variables**

I use

![homework3b_2](/static/w03s2/homework3b_2.png)

Example

---

![a drippy lemon](logo.svg)

^ images are written like this: `![description](file_path/file_name.png)`

## This is h2

_This is italic._[^1]

[^1]: This is a footnote, _which can also be italic_.

**This is bold.**

Hyperlinks can be written like this: `[text](https://URL)`

You can find a markdown cheat-sheet [here](https://www.markdownguide.org/cheat-sheet/).

## Maths:

... which can be written inline, like this: $\{ x, y, z \} \in \N$

... or block, like this:

$$ x^2 + y^2 = z^2 $$

Visit [ $\KaTeX$ ](https://katex.org/docs/supported#fractions-and-binomials) for more information about writing maths.

## Embedding video:

<iframe id="coding_train_video" src="https://www.youtube.com/embed/rI_y2GAlQFM?si=RDgjkpunxk1mQzMI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<script type="module">

    console.log (`hello world! 🚀`)

    const iframe  = document.getElementById (`coding_train_video`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16

</script>

## Embedding p5 sketches:

<iframe id="falling_falling" src="https://editor.p5js.org/capogreco/full/Fkg05m7aA"></iframe>

<script type="module">

    const iframe  = document.getElementById (`falling_falling`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16 + 42

</script>

## Canvas API

<canvas id="canvas_example"></canvas>

<script type="module">
    const cnv = document.getElementById (`canvas_example`)
    cnv.width = cnv.parentNode.scrollWidth
    cnv.height = cnv.width * 9 / 16 

    const ctx = cnv.getContext (`2d`)
    const pos = {
        x: -100,
        y: cnv.height / 2 - 50
    }
    
    function draw_frame () {
        ctx.fillStyle = `turquoise`
        ctx.fillRect (0, 0, cnv.width, cnv.height)

        ctx.fillStyle = `hotpink`
        ctx.fillRect (pos.x, pos.y, 100, 100)

        pos.x += 2

        if (pos.x > cnv.width) {
            pos.x = -100
        }

        requestAnimationFrame (draw_frame)
    }

    draw_frame ()
</script>
