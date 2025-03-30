---
title: Week 3
published_at: 2025-03-04
snippet: trying to understand the basic
disable_html_sanitization: true
allow_math: true
---

# Week 3

## Notes (In class)

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

- **With regard to your AT1, and using embedded p5 sketches, explain how you plan on achieving the aesthetic register of cute:**

  - Visually

  - Sonically

  - Interactively

### Session 2: 20 Mar

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
