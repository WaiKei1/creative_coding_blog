---
title: Week 1
published_at: 2025-03-04
snippet: trying to understand the basic
disable_html_sanitization: true
allow_math: true
---

# Week 1

## Notes (In class)

This is the first class that we had for creative coding, our lecturer introduced p5, a javascript web editor. Here's some notes of basic coding:

1. Don't need semicolon ";" in the code, semicolon doesn't really effect the code
2. The code need to consistent
3. "//" "/_ blablabla _/" comments, these are for us to read, the computer will ignore this (to explain how your code is going to work/happen)
4. curly bracket {} is defining the scope, outside the canvas had a big curly bracket
5. (x, y, z) is a parameters/arguements
6. javascript read the instructions by order, from top to down
7. console. log, a built-in function that allows you to output messages or values to the console, commonly used for understanding what is happening in your code
8. the string is important to let the code work (")
9. everything start at zero
10. understand each line of the code will help us understand how to code
11. str = string

---

### Understanding the _for_ loop

A _for_ loop in Javascript consists three parts (initialization, condition, and update). They usually appear together in a single line to control the loop's behaviour.

![for loop syntax](/static/w01s1/for%20loop%20syntax.png)

for (initialization; condition; update)

for (**starting point, ending point** _(loop runs while this is true)_, **how it moves** _(change the loop variable each time the loop runs)_)

**Example 1**

    for (let i = 0; i < 5; i++)

    * It wil start from 0 and increase 1 each time until

**Example 2**

    for (let i = 2; i < total_squares - 2; i += 2)

    * It will start from 2 and stop 2 columns early and skips every other column

---

### Undestanding _frameCount_ and _frameRate_?

- frameCount

  Count how many frames have passed since the sktech started, increases by 1 per frame

- frameRate

  Control how many frames per second (FPS) the sketch runs. Default = 60 FPS

**Example**

    function setup() {
        frameRate(30);
        }

    * slow down animation (30 FPS instead of 60)

---

### What is _const_ ?

const = constant, a fixed variable that **cannot be change after it's declared**. it is best used for values that stay the same throughout the code.

- **Example**
  - const total_sqaure = 10
  - const total_rows = 6

---

### Summary

- The _for_ loop repeats code based on conditions
- _const_ stores fixed values that don't change
- _frameCount_ counts frames; _frameRate_ controls speed

## Homework

### Session 1: 4 Mar

![homework 1.](/static/w01s1/homework%201..png)

**Attempt 1:**

![grid loop attempt 1](/static/w01s1/grid%20loop%20attempt%201.png)

In my first attempt, I resized the canvas to fit the screen and set the total number of rows to 6, which means I'll have 10 columns and 6 rows.

To achive this, I used nested for loops with the let keyword. Here's how it worked:

- Outer Loop (i): Controls the horizontal (X-axis) placement of the squares, iterating over the columns.

- Inner Loop (j): Controls the vertical (Y-axis) placement of the squares, iterating over the rows.

The inner loop starts at 0, ends at 6, and increments by 1 for each row. However, after running the code, I noticed that the grid looked the same as before. This made me realize that I needed to refine the logic for positioning and sizing the squares.

The 0.5 in (i + 0.5) and (j + 0.5) is used to center the squares within each grid cell. Without +0.5, the square would be positioned at the top-left corner of each grid cell.

**[Attempt 2:](https://editor.p5js.org/WaiKei1/full/6l36fWFn-)**

In my second attempt, I improved the code by positioning each squares and animating the square sizes dynamically. Here's the updated code:

    function setup() {
        createCanvas(innerWidth, innerWidth * 9 / 16); // resize the height of the canva
        colorMode (HSB)
        rectMode (CENTER)
        noStroke ()
    }

    function draw() {
        const t = frameCount / 25
        background(`turquoise`);
        fill (`deeppink`)
        const total_squares = 10
        const total_row = 6 // set the total row = 6
        const size = width / total_squares

        for (let i = 0; i < total_squares; i++) {
            for (let j = 0; j < total_row; j++)
             //create loop for the row, start with 0 end with 6 and increment = 1

            square (width * (i + 0.5) / total_squares, height * (j + 0.5) / total_row, t * (i + j + 1) % size)
            //set the position (x-axis, y-axis) and the size animation
            }
    }

The first attempt failed because I didn't define the size of the squares and didn't position them properly. The position line was quite similar to the previous one but I'm stuck by the size animation line.

To better understand this, I researched on W3Schools and consulted ChatGPT to confirm my understanding. Through this process, I identified the missing component: a formula to control the size animation effectively.

The Key Formula: t \* (i + j + 1) % size. This formula ensures each square changes size dynamically over time. Here’s how it works:

- t = frameCount / 25 (time-based animation effect.)

- (i + j + 1)

      Grid position factor, ensuring each square animates differently based on its row (j) and column (i).

* +1 offsets

  Prevents the result from being 0px. If without +1, some squares might have a size of 0, making them disappear.

- % size

  Keeps the size variation within the allowed square size.

<iframe id="for_loop_grid_attempt1" src="https://editor.p5js.org/WaiKei1/full/6l36fWFn-"></iframe>

<script type="module">

    const iframe  = document.getElementById (`for_loop_grid_attempt1`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16 + 42

</script>

**Resources**

Besides the resources that provided on Canvas, here's some other resources that I looked for while doing the homework.

- [Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

- [JavaScript For Loop](https://www.w3schools.com/js/js_loop_for.asp#gsc.tab=0)

- [JavaScript Variables](https://www.w3schools.com/js/js_variables.asp)

- [JavaScript Syntax](https://www.w3schools.com/js/js_syntax.asp)

- [Coding for Visual Learners: Learning JavaScript from Scratch](https://www.linkedin.com/learning/coding-for-visual-learners-learning-javascript-from-scratch-16124466/environment-setup?resume=false&u=2104756)

---

![homework 2.](/static/w01s1/homework%202..png)

I chose the work ["pages"](https://www.newrafael.com/pages/).

**1. What's happening under the hood?**

![pages](/static/w01s1/pages.png)

This interactive website features a flipping page animation where users can click to trigger color transitions. The flipping effect is composed of various geometric shapes, including rectangles, lines, and arcs, which contribute to the dynamic movement and visual experience.

- Visual Elements

  - Shapes (rectangle, arcs)
  - Colours (colours change each time when clicking on the page)
  - Flipping Page Animation (clockwise, counterclockwise)

- Interactivity
  - Mouse Clicking
  - Transitions (flipping and colour change)

**2. A list of concepts that I need to learn in order to replicate in p5.js**

- Animation (Flipping effect)
- Iteration (Loops, repeat the shapes and page effects)
- Interaction (To change colour when clicking)
- Shapes (pages shapes)
- Position (clockwise and counterclockwise)
- Colour Modes (apply colour changes)

**3. A list of resources that might help in learning those concepts**

- [Custom Shapes and Smooth Curves](https://p5js.org/tutorials/custom-shapes-and-smooth-curves/)
- [Colors](https://p5js.org/reference/p5/color/)
- [colorMode](https://p5js.org/reference/p5/colorMode/)
- [lerpColor](https://p5js.org/reference/p5/lerpColor/)
- [Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [JavaScript For Loop](https://www.w3schools.com/js/js_loop_for.asp#gsc.tab=0)
- [mouseClicked](https://p5js.org/reference/p5/mouseClicked/)

---

## Session 2: 6 Mar

![homework2](/static/w01s2/homework2.png)

**Conclusion of the discussion with my classmates**

1. Through our discussion, we concluded that _Pages_ is an interactive website where pages are constructed by using different shapes. The main interactivity comes from clicking on the page will trigger a colour transition and changes the looping direction of the animation.

2. - Interaction (clicking)
     Clicking on the page will affects colour and sometime alters the animation direction too
   - Pages Shape
     The pages are formed using rectangle and rc
   - Colour Transitions
     Each page features a different color

3. The focus should be on constructing the page shapes and using for loops to create the flipping effect. Additionally, look for the colour mode to create the colour transitions. The links that I mentioned earlier are some good resources that I could look for.

---

![homework3](/static/w01s2/homework3.png)

I want to go with the interactivity concept by making the colors change when the user clicks on a shape.

---

# Week 2

## Notes (In class)

**Aesthetic Register**

Aesthetic Register is more specific concept that refer to the tone, style, or mode inwhich an aesthetic is expressed or communicates. It is about the delivery / expression of an aesthetic, rather than the aesthetic itself. Aesthetic (noun) defines the overall look and feel and aesthetic register (noun, verb) defines how that look and feel is expressed or experienced.

It helps us to decide the tone of the work and communicate the ideas or emotions more effectively.

**Kindred Spirit**

- A best friend / soulmate / sidekick

**Variables** (as symbolic names for values in your application)

1. Declaring Variables

with the keyworf

**Function**

- function setup = happen once and only once (the moment the sketch begins)

- function draw = happen forever "loop"

**[Array](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Arrays)**

An array is a special variable that can store multiple values in a single variable. (arrays use zero-based indexing, meaning the first item is at index 0)

Example:

let fruits = ["apple", "banana", "orange"];

## Homework

### Session 1: 11 Mar

**My Kindred Spirit: Plushie Bear**

For my AT1 project, I have chosen my plushie bear as my kindred spirit. This choice will perfectly embodies both cute and a personal connection to me.

Here is how I will achieve cuteness in three domains:

1. Cute Visual
   A round, fluffy bear face wth big eyes in the middle of the canvas. The colour of the bear face will be soft brown pastel colours.

- Techniques:

  - Shape

    1. Use ellipse/round shape to create the bear's face, ears and eyes.

    2. Use arc/line for the bear's different expression (smiling, frowning, yawning, etc)

  - Colours

    - Bear Face

      Soft pastel browns (face and ears)

    - Details,

    Black (nose, eyes), pink/yellow (for rection)

    - Background Canvas

    Change according to the bear's emotion

2. Cute Sounds
   Clicking on the bear's face will trigger different sound effects corresponding to its expressions.

   For example:

   - A yawning sound when the bear looks sleepy.
   - A "pop" or "boop" sound for a surprised expression.

- Techniques:
  - sound library
  - Make sure the sounds are short and match the expression

3. Cute Interactions
   When the mouse clicks on the bear face, it will change to different expressions, sound, and background colour

- Techniques:
  - mousePressed or mouseClicked to apply the clickling interaction
  - Canvas background colour change when along with the expression after clicking

Desciption of my plan:

A screen size canvas and a round bear face will be in the middle. The expression will be neutral before clicking. When the user clicks at the bear's face, it will change to another emotional expression along with the certain sound effect. The background colour of the canvas will be change accordingly as well.

---

### Session 2: 13 Mar

- **What is the context of your kinship?**

My plushie bear has been with me for a long time. Personally, she is not just a stuffed toy but a cherished companion, gifted to me by my family and blessed with their love. Whenever I need emotional support, she is always there. Hugging her provides a sense of security and comfort, easing my worries and making me feel safe.

- **What is your common purpose?**

Both my plushie bear and I share the purpose of bringing comfort and joy. Her cuteness has a healing effect on me, lifting my mood whenever I’m feeling down. That’s why I want to create something that represents my appreciation for her. Through my sketch, I aim to capture her cuteness and how meaningful she is to me.

- **Who or what is your shared challenge / adversary?**

Our shared challenge is stress and exhaustion. As my companion, she has always been there to help me face challenges, whether it’s meeting deadlines or dealing with overwhelming days. She is my escape from negativity, providing me with calmness, softness, and happiness.

---

As I mentioned above, the bear plushie play the role of a campanion in my life. My sketch offering reflects this bond, the changable expression just like how she acts and lift my spirits in real life.

- **How my plushie bear relates to the visual elements**

She meant to be cute and comforting. The cuteness of its visual heals me. Therefore my visual will focus on crating a simple, warm, friendly and approachable aesthetic that reflects the meaningful characteristic that she had in my life. The visual approach that I have to express the cuteness and friendly are using the pastal colour, round, fluffy features. Through these features, she might recognize the bear face is her and she might realize the expression and the reaction are what she make me feel in real life.

- **How my plushie bear relates to the sonic elements**

Even though my plushie bear can't really make sounds, but I image that if she could express herself, she would do in a gentle way. These sound effects would reflect how she will react to when she had that specific emotions.

- **How my plushie bear relates to the interactive elements**

The interactivity also bring her to life. She would respond to my touch with different emotion just like how my mood changes when I hug her.

# Week 3

## Notes (In class)

Functions (essentially behaviours) are like recipe,
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

Example:

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
