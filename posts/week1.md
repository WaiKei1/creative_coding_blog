---
title: Week 1
published_at: 2025-03-04
snippet: try to understand the basic
disable_html_sanitization: true
allow_math: true
---

| [W2](https://waikei1-creative-co-63.deno.dev/week2) | [W3](https://waikei1-creative-co-63.deno.dev/week3) | [W4](https://waikei1-creative-co-63.deno.dev/week4) |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |

# Notes

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

### Understanding forEach Method

An array method that executes a provided function once for each array elements. (Specifically for arrays)

**Syntax:**

array.forEach(function(currentValue, index, arr), thisValue)

**Example**

    const fruits = ['apple', 'banana', 'cherry'];

    fruits.forEach(function(fruit, index))

---

### Understanding while loop

The while loop continues to execute as long as the specified condition evaluates to true.

**Syntax:**

     while (condition) {
    // code to be executed
    }

**Example:**

    let i = 0;
    while (i < fruits.length)

---

### When to use them:

- Use **_forEach_** when:

  - you need to iterate through all elements of an array
  - don't need to break or skip iterations

- Use **_for_ loop** when:

  - you need more control over the iteration
  - might need to skip iterations
  - working with non-array iterables

- Use **_while_** loop when:
  - the number of iterations is unknown beforehand

---

### Undestanding _frameCount_ and _frameRate_?

- **frameCount**

  Count how many frames have passed since the sktech started, increases by 1 per frame

- **frameRate**

  Control how many frames per second (FPS) the sketch runs. Default = 60 FPS

**Example**

    function setup() {
        frameRate(30);
        }

    * slow down animation (30 FPS instead of 60)

---

### What is _const_ ?

const = constant, a fixed variable that **cannot be change after it's declared**. it is best used for values that stay the same throughout the code.

**Example**

- const total_sqaure = 10
- const total_rows = 6

---

### Summary

- The _for_ loop repeats code based on conditions
- _const_ stores fixed values that don't change
- _frameCount_ counts frames; _frameRate_ controls speed

# Homework

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

---

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

I chose to explore the interactive concept (mouseClicked) by making the colours change when user clicks on it.

<iframe id="homework1b: clicking interaction" src="https://editor.p5js.org/WaiKei1/full/IGGrg7KYP"></iframe>

<script type="module">

    const iframe  = document.getElementById (`homework1b: clicking interaction`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16 + 42

</script>

To implement this, I first drew a circle at the center of the canvas with a diameter of 50 pixels. I then assigned the initial circle color to white, ensuring that it appears in this default state.

Next, I created a mouseClicked function that checks the current color of the circle—if it is white, it changes to orange when clicked, and vice versa.

The resource that I used in this concept is the [mouseClicked](https://p5js.org/reference/p5/mouseClicked/) reference from p5js.

---

## Quick Links

- [Week 2](https://waikei1-creative-co-63.deno.dev/week2)
- [Week 3](https://waikei1-creative-co-63.deno.dev/week3)
- [Week 4](https://waikei1-creative-co-63.deno.dev/week4)

---
