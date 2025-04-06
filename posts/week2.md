---
title: Week 2
published_at: 2025-03-11
snippet: Realized there’s still a lot to learn… Studying hard, crying harder, but slowly getting it...
disable_html_sanitization: true
allow_math: true
---

| [W1](https://waikei1-creative-co-63.deno.dev/week1) | [W3](https://waikei1-creative-co-63.deno.dev/week3) | [W4](https://waikei1-creative-co-63.deno.dev/week4) | [W5](https://waikei1-creative-co-63.deno.dev/week5) | [W6](https://waikei1-creative-co-63.deno.dev/week6) | [W7](https://waikei1-creative-co-63.deno.dev/week7) | [W8](https://waikei1-creative-co-63.deno.dev/week8) | [W9](https://waikei1-creative-co-63.deno.dev/week9) | [W10](https://waikei1-creative-co-63.deno.dev/week10) | [W11](https://waikei1-creative-co-63.deno.dev/week11) | [W12](https://waikei1-creative-co-63.deno.dev/week12) |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| [A1](https://waikei1-creative-co-63.deno.dev/A1)    | [A2](https://waikei1-creative-co-63.deno.dev/A2)    | [A3](https://waikei1-creative-co-63.deno.dev/A3)    |

### INDEX

- [Notes](https://waikei1-creative-co-63.deno.dev/week2#notes)

  - [Aesthetic Register](https://waikei1-creative-co-63.deno.dev/week2#aesthetic-register)
  - [Kindred Spirit](https://waikei1-creative-co-63.deno.dev/week2#kindred-spirit)
  - [Function](https://waikei1-creative-co-63.deno.dev/week2#function)
  - [Array](https://waikei1-creative-co-63.deno.dev/week2#array)
  - [.map function](https://waikei1-creative-co-63.deno.dev/week2#arrayprototypemap--map-function)
  - [Object.assign syntax](https://waikei1-creative-co-63.deno.dev/week2#objectassign-syntax)
  - [unshift () method of Array](https://waikei1-creative-co-63.deno.dev/week2#objectassign-syntax)
  - [lerpColor()](https://waikei1-creative-co-63.deno.dev/week2#lerpcolor)
  - [splice ()](https://waikei1-creative-co-63.deno.dev/week2#arrayprototypesplice--splice)
  - [Math.floor()](https://waikei1-creative-co-63.deno.dev/week2#mathfloor)

- [Homework](https://waikei1-creative-co-63.deno.dev/week2#homework)

  - [Session 1: 11 Mar](https://waikei1-creative-co-63.deno.dev/week2#session-1-11-mar)
  - [Session 2: 13 Mar](https://waikei1-creative-co-63.deno.dev/week2#session-2-13-mar)

---

# Notes

### Aesthetic Register

Aesthetic Register is more specific concept that refer to the tone, style, or mode inwhich an aesthetic is expressed or communicates. It is about the delivery / expression of an aesthetic, rather than the aesthetic itself. Aesthetic (noun) defines the overall look and feel and aesthetic register (noun, verb) defines how that look and feel is expressed or experienced.

It helps us to decide the tone of the work and communicate the ideas or emotions more effectively.

---

### Kindred Spirit

- A best friend / soulmate / sidekick

---

### Function

- function setup = happen once and only once (the moment the sketch begins)

- function draw = happen forever "loop"

---

### [Array](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Arrays)

An array is a special variable that can store multiple values in a single variable. (arrays use zero-based indexing, meaning the first item is at index 0)

Example:

    let fruits = ["apple", "banana", "orange"];

---

### [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | .map Function

**.map()** allows you to transform each elements in an array without modifying the original array.

**How it works?**

1. It creates a new array (the original array remains unchanged)

2. Processes each items based on the function that you provide (determines how each elements should be transformed)

3. The new array will have the same length as the original

**Parameters**

When using this function, it will takes two possible parameters after the function call:

    array.map(callbackFn, thisArg)

1. callbackFn

   This is the function that transforms each elements and automatically receives three arguments:

- currentElements: the current item being processed
- index (optional): the position in the array (0, 1, 2)
- array (optional): the original array (rarely used)

2. thisArg (optional)

   Rarely used in modern JavaScript (thanks to arrow functions), this lets you specify what this should refer to in your callback.

**Best Use Cases for .map()**

1. You wantto keep the original array unchanged - It creates a new array

2. You need to transform every element (1:1 transformation)

3. You want a new array with the same length

**When NOT to use .map()**

1. When you don't need to returned the array (use .forEach() instead)

2. When you want to filter items (use .filter())

3. When you want to reduce a single value (use .reduce())

**Example:**

    const numbers = [1, 4, 9];
    const roots = numbers.map(num => Math.sqrt(num));
    // roots: [1, 2, 3]

\*sqrt = square root

---

### [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) syntax

This is a method used to copy properties from one or more source objects to a target object.

**Syntax**

    Object.assign(target, ...sources)

- **target**: The object that receives properties (will be modified).

- **...sources**: One or more source objects whose properties are copied.

**Key Behaviours**

1.  Copies property values (nested objects are referenced, not cloned).
2.  Overwrites Properties: Later sources override earlier ones if keys conflict.
3.  Ignores null/undefined Sources: Skips them silently.

---

### [unshift () method of Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

This method inserts the given value to the beginning of an array-like object.

\*push() has similar behaviour to unshift(), but push() applied to the end of an array.

---

### [lerpColor()](https://p5js.org/reference/p5/lerpColor/)

Blends two colors to find a third color between them. The way that colours are interpolated depends on the current colorMode()

**Syntax**

    lerpColor(c1, c2, amt)

Parameters

- **c1**
  p5.Color: interpolate from this color (any value created by the color() function).

- **c2**
  p5.Color: interpolate to this color (any value created by the color() function).

- **amt**
  Number: number between 0 and 1. It specifies the amount to interpolate between the two values.

  0 is equal to the first color, 0.1 is very near the first color, 0.5 is halfway between the two colors, and so on. Negative numbers are set to 0. Numbers greater than 1 are set to 1.

---

### [Array.prototype.splice() | splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

A method that changes an array by removing/replacing existing elements or adding new elements

**Syntax**

    array.splice(start, deleteCount, ...itemsToAdd)

Paramters

- **Start**: Index to begin changing the array (negative = counts from end)

- **deleteCount**: Number of elements to remove

- **itemsToAdd**: Elements to inset at start (optional)

**Key Behaviours**

1. Modifies the original array (unlike slice()).

2. Returns removed elements (even if empty).

3. Handles negative indices: -1 = last element.

**Examples:**

1.  **Removing Elements**

        const arr = [1, 2, 3, 4];
        arr.splice(1, 2); // Removes 2 elements starting at index 1
        // arr → [1, 4] (expected output), Returns [2, 3]

2.  **Replacing Elements**

        const arr = ['a', 'b', 'c'];
        arr.splice(1, 1, 'x', 'y'); // Replaces 1 element at index 1 with 'x' and 'y'
        // arr → ['a', 'x', 'y', 'c'] (expected output), Returns ['b']

3.  **Adding Elements**

        const arr = [10, 20];
        arr.splice(1, 0, 15); // Inserts at index 1 (deletes 0 elements)
        // arr → [10, 15, 20], Returns []

4.  **Clear from Index**

        const arr = [1, 2, 3, 4];
        arr.splice(2); // Removes all elements from index 2 onward
        // arr → [1, 2], Returns [3, 4]

_\* if x.splice(-1, -1), then the first -1 refers to the last element of the array (array.length - 1), the second -1 treated as 0 since you can't delete a negative number of elements (NO ELEMENTS ARE REMOVED)_

---

### [Math.floor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)

A function that returns the largest integer less than or equal to a given number. Essentially, it rounds down to the nearest whole number. In p5.js, floor() is a shorthand for Math.floor().

**Syntax**

    Math.floor(x)

- x: The number to round down

**Example:**

    1. Math.floor(3.7);
      //output: 3

    2. Math.floor(0.1 + 0.2);
      //output: 0 (due to floating-point math)

floating-point math [^1]

    3. Math.floor(-3.2);
      //output: -4 (not -3)

[^1]: floating-point math refer to how computers handle decimal numbers like (0.1, 3.14, etc.) using a binary representation. Due to this, some decimal numbers can't be stored precisely in computers, leading to tiny rounding errors.

---

### Comparison with Other Methods

![math](/w02s2/math.png)

---

# Homework

### Session 1: 11 Mar

![homework2a](/w02s1/homework2a.png)

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

![homework2b](/w02s2/homework2b_1.png)

- **What is the context of your kinship?**

My plushie bear has been with me for a long time. Personally, she is not just a stuffed toy but a cherished companion, gifted to me by my family and blessed with their love. Whenever I need emotional support, she is always there. Hugging her provides a sense of security and comfort, easing my worries and making me feel safe.

- **What is your common purpose?**

Both my plushie bear and I share the purpose of bringing comfort and joy. Her cuteness has a healing effect on me, lifting my mood whenever I’m feeling down. That’s why I want to create something that represents my appreciation for her. Through my sketch, I aim to capture her cuteness and how meaningful she is to me.

- **Who or what is your shared challenge / adversary?**

Our shared challenge is stress and exhaustion. As my companion, she has always been there to help me face challenges, whether it’s meeting deadlines or dealing with overwhelming days. She is my escape from negativity, providing me with calmness, softness, and happiness.

---

![homework2b](/w02s2/homework2b_2.png)

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

![homework2b_3](/w02s2/homework2b_3.png)

<iframe id="Falling Falling" src="https://editor.p5js.org/WaiKei1/full/Yg8V2JyTa"></iframe>

<script type="module">

    const iframe  = document.getElementById (`Falling Falling`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16 + 42

</script>

### Code that I don't understand:

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

### Notes while I'm trying to understand the code

These are the questions that came up as I was reading through the code. Some of them were answered after checking online resources like MDN, but for others, I asked AI tools to help me understand better.

---

**1. Why "new Array(7)"**

- The "new" keyword is used to create a new instance of the array object with a specified length (in this case, 7).

- new Array(7) creates an empty array of length 7 [empty x 7]

- the 7 matches the number of start points and end points (7 in total)

\*_Without the "new", JavaScript might confuse it with other syntax, "new" makes it explicit_

---

**2. .map function**

I read about the .map() function. My notes are at the top of this blog post for reference.

---

**3. .fill**

.map () only works on defined slots so we need to fill the array with undefined values so .map()
processes all 7 slots

---

**4. Why Object.assign({}, faller) Creates a New Object**

- Object.assign() Syntax
  Same as the map function, I read about the this syntax. My notes are at the top of this blog post for reference.

---

**5. Why using frameCount % 40 instead of frameRate**

**frameCount** controls the tempo (when events happen) Adds a new faller every 40 frames, like a metronome ticking at a frame-based interval.

"After every 40 frames, do this." Like a musical beat—it ensures events happen on rhythm relative to the animation's frame progression.

**frameRate** controls the speed (how fast the frames progress) Changes how many frames render per second.

"Slow down/speed up the entire animation." Like adjusting the playback speed of a song, it stretches or compresses everything (including frameCount increments)

---

**6. We already set the bg into random why do we need _faller.colours = [bg, rand_col()];_ another random colour.**

- The first colour (bg): the current background (if that is magenta)

- The second colour (rand_col()): a NEW random colour (if this is cyan)

Then it will fades from the old background (magenta) to a new colour (cyan). Meanwhile the background itself updates to cyan.

---

**7. shift () method**

My notes are at the top of this blog post for reference.

---

**8. We didn't mentioned f=faller how did computer knew f=faller**

f is just a parameter name that you chose for the callback function, it could be named anything.

The f and i gets its value because:

- When you call:

  fallers.forEach((f, i) => { ... })

JavaScript automatically does this:

- Takes the array fallers (which contains copies of faller objects).

- For each item in fallers, it:

  - Passes the current item as the first argument (f), f=fallers (current item)

  - Passes the index as the second argument (i), i=index (index of the current item in the array)

\*_It's a direct assignment by forEach_

---

**9. lerpColor ()**

Notes are at the top of this blog post for reference.

---

**10. How the shape is constructed**

The code is creating a custom polygon that connects:

- Bottom-left corner → (vertex(0, height))

- 7 interpolated points → (from start_points to end_points)

- Bottom-right corner → (vertex(width, height))

---

**11. what is \*\***

- How ** Works
  Syntax: base ** exponent

Returns: base multiplied by itself exponent times.

- Example:

  - Simple Exponentiation:
    2 ** 3 // 8 (2 × 2 × 2)
    5 ** 2 // 25 (5 × 5)
    10 \*\* 0 // 1 (any number to the power of 0 is 1)

---

**12. The meaning of [i] in this code "const p = find_point(s, f.end_points[i], f.phase \*\* f.curves[i]);"**

Index that corresponds to the current start points in the loop.

---

**13. Why 1 means "completed"**

This is a standard practice in animation/interpolation system

- 0 = Start of animation
- 1 = 100% complete (end of animation)

---

**14. Why we store and remove finished animations**

If we never remove finished animation, the finished animation will keep adding and each of that consumes memory.

Additionally, it also effect the rendering efficiency, it would wast time to process invisible and completed animation.

And of course we want the old shapes disappear.

- **Key insight**

  The storage (redundant) and removal (splice) pattern is a garbage collection technique for animations. It's like:

  - Tag finished animations ("this one is done")

  - Later, sweep through and remove all tagged items

This is safer than removing immediately during iteration (which can cause bugs).

---

**15. Why floor(random() \* 360) Works**

- How random() Works
  In p5.js and JavaScript in general,random() generates a floating-point (decimal) number between 0 (inclusive) and 1 (exclusive).

  - Minimum: 0.000... (can be 0 exactly)

  - Maximum: 0.999... (never reaches 1)

- If random() turns 0.999... (max), then 0.999 x 360 = 359.999

- and the floor() means round down so 359 (the notes can be found at top)

- we need integers so we need to use floor()

- The reason that we use 360 specifically is because the hue value range is from 0 to 359 (360° color wheel), 360 will overlap with 0 (same colour), so 359 is the practical max

---

**16. Why return color(h, 100, 100)**

- Hue (h): A value between 0-359

- Saturation (100): Maximum vibrancy (0 = grayscale, 100 = full color)

- Brightness/Lightness (100): Maximum brightness (0 = black, 100 = full brightness)

It works as:

- color(h, 100, 100)

  - Creates a bright, fully saturated color at hue h.

  - Example: If h = 0 → red, h = 120 → green, h = 240 → blue.

* p5.js defaults to RGB, so switch to HSB is needed

---

## Quick Links

### Assignments:

- [Assignment 1: Cute!](https://waikei1-creative-co-63.deno.dev/A1)
- [Assignment 2: Chaos!](https://waikei1-creative-co-63.deno.dev/A2)
- [Assignment 3: Interesting!](https://waikei1-creative-co-63.deno.dev/A3)

---

### Weekly Study Journey:

- [Week 1](https://waikei1-creative-co-63.deno.dev/week1)
- [Week 3](https://waikei1-creative-co-63.deno.dev/week3)
- [Week 4](https://waikei1-creative-co-63.deno.dev/week4)
- [Week 5](https://waikei1-creative-co-63.deno.dev/week5)
- [Week 6](https://waikei1-creative-co-63.deno.dev/week6)
- [Week 7](https://waikei1-creative-co-63.deno.dev/week7)
- [Week 8](https://waikei1-creative-co-63.deno.dev/week8)
- [Week 9](https://waikei1-creative-co-63.deno.dev/week9)
- [Week 10](https://waikei1-creative-co-63.deno.dev/week10)
- [Week 11](https://waikei1-creative-co-63.deno.dev/week11)
- [Week 12](https://waikei1-creative-co-63.deno.dev/week12)

---
