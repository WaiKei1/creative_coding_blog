---
title: Weekly Study Posts!
published_at: 2025-03-04
snippet: A summary of what I've learned each week, including notes and homework.
disable_html_sanitization: true
allow_math: true
---

# Week 1

## Session 1

<h3>Notes<h3>
This is the first class that we had for creative coding, our lecturer introduced p5, a javascript web editor. Here's some notes of basic coding: 
1. Don't need semicolon ";" in the code, semicolon doesn't really effect the code 
2. The code need to consistent
3. "//" "/* blablabla */" comments, these are for us to read, the computer will ignore this (to explain how your code is going to work/happen)
4. curly bracket {} is defining the scope, outside the canvas had a big curly bracket
5. (x, y, z) is a parameters/arguements
6. javascript read the instructions by order, from top to down
7. console. log, a built-in function that allows you to output messages or values to the console, commonly used for understanding what is happening in your code
8. the string is important to let the code work (")
9. everything start at zero
10. understand each line of the code will help us understand how to code
11. str = string

<h3>Homework<h3>
1.

/\*
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

\*/
