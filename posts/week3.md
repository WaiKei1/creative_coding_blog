---
title: Week 3
published_at: 2025-03-18
snippet:
disable_html_sanitization: true
allow_math: true
---

| [W1](https://waikei1-creative-co-63.deno.dev/week1) | [W2](https://waikei1-creative-co-63.deno.dev/week2) | [W4](https://waikei1-creative-co-63.deno.dev/week4) |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| [A1](https://waikei1-creative-co-63.deno.dev/A1)    |

### INDEX

- [Notes](https://waikei1-creative-co-63.deno.dev/week3#notes)

  - [Understanding Classes](https://waikei1-creative-co-63.deno.dev/week3#understanding-classes)
  - [Function vs Classes](https://waikei1-creative-co-63.deno.dev/week3#function-vs-classes)
  - [Difference between Variables, Parameters, Arguments and Attributes](https://waikei1-creative-co-63.deno.dev/week3#difference-between-variables-parameters-arguments-and-attributes)
  - [Vectors and Movement](https://waikei1-creative-co-63.deno.dev/week3#vectors-and-movement)
  - [Arrow Functions in Javascript](https://waikei1-creative-co-63.deno.dev/week3#arrow-functions-in-javascript)
  - [Differences between (=,==,===)](https://waikei1-creative-co-63.deno.dev/week3#differences-between-)
  - [Understanding Boolean Logic](https://waikei1-creative-co-63.deno.dev/week3#understanding-boolean-logic)

- [Homework](https://waikei1-creative-co-63.deno.dev/week3#homework)

  - [Session 1: 18 Mar](https://waikei1-creative-co-63.deno.dev/week3#session-1-18-mar)
  - [Session 2: 20 Mar](https://waikei1-creative-co-63.deno.dev/week3#session-2-20-mar)

---

# Notes

### Understanding Classes

Classes are a template for creating objects, it defines:

- Behaviours (Methods): like a recipe (defines what to do)

- Arguments: like ingredients (input needed)

- Attributes (Properties): data stored within an object

Example:

    class Square {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }
    }

x, y, and size are attributes, they always belong to an object.

---

### Function vs Classes

_Functions_ and _Classes_ both allow us to organize and reuse code, but they serve different purposes.

- _Function_ are used when we need to perform a specific task (calculating a number, handling an event, etc) / it is simple and does not need stored data / the function only runs once and does not need to be reused much

- _Classes_ are used when we need to creeate multiple objects with shared properties & behaviours / the object needs to store state (like position, size, speed) / you need multiple instances of something (e.g. many floating objects)

* think of function as tools and classes as blueprint

---

### Difference between Variables, Parameters, Arguments and Attributes:

![table](/w03s1/table.png)

- Variables store data temporarily (like nametag/ ingredients in the kitchen)
- Parameters are like empty slots in a recipe where you specify ingredients (nicknames or label) (only in function)
- Arguments is the actual items that I put into the parameters (label) like the real ingrediencts you give to the recipe
- Attributes always belong to an object and store its properties (properties of a specific dish you’ve made. e.g., cake.layers)

---

### Vectors and Movement

A vector typically starts at the origin (0, 0) and points towards a specific direction.

vector in programming are used for positioning and movement.

- position stores the current coordinates
- velocity determines how fast and in what direction the object moves

---

### Arrow Functions in Javascript

Arrow functions are a shorthand way to define functions, making code more concise

Example:

- **Regular Function Expression:**

        function add(a, b) {
            return a + b;
        }

- **With arrow function expression:**

        const add = (a, b) => a + b;

---

### Differences between (=,==,===)

**1. Single equal (=): assignment**

assign a value to a variable

**Example:**

     let x = 0;

     bgColors = [#xxxxx]

**2. Double equals (==): loose comparison**

compare values only, and ignore type. only use it if you understand the coercion rules **better DONT USE IT**

**3. Triple equals (===): strict comparison (ALWAYS PREFER)**

Always use it unless have a specific reason for coercion

---

### Understanding Boolean Logic

Boolean logic is a system of **true/false** rules used to make decisions. It determines how the code reacts to different conditions, handles errors, and control program flow.

- && (AND): both must be true
- || (OR): at least one must be true
- ! (NOT): true → false or false → true (inverts)

* It is incredibly helpful when coding conditional situations (if statements) because they let you:

- Test multiple hypotheses concisely

- Handle different scenarios efficiently

- Write cleaner, more readable conditions

---

## Homework

### Session 1: 18 Mar

![homework3a_1](/w03s1/homework3a_1.png)

This time, I chose [Why Was He Sad](https://www.whywashesad.com/). This is a playful and interactive artwork. In my perspective, Rafael Rozendaal achieves a cute aesthetic register in the following ways:

**Visual**

This website uses a limited pastel color palette (blue and white) to represent the sky and clouds. The clouds are puffy and rounded, giving the artwork a soft, cartoon-like feel. The overall design is simple and playful, making it visually accessible and lighthearted. The gentle animation of the clouds moving horizontally across the screen creates a sense of calmness, almost as if I am lying down and looking up at the sky.

**Sonic**

The "boop" sound effect when clicking on the clouds is cute and bubbly. The sound choice perfectly matches the childlike, cartoonish style of the piece, making interactions feel playful and satisfying, similar to a casual game.

**Interactivity**

When you click or hover over a cloud, it disappears with a "boop" sound, and new clouds reappear in the sky. This interaction creates a sense of endless play, reinforcing the lighthearted tone of the artwork. The experience feels like helping "him" clear away troubles (represented by the clouds), yet they keep coming back, perhaps reflecting the endless nature of emotions and problems.

**Conclusion**

Rozendaal achieves a cute aesthetic register by combining simple visual elements (puffy clouds, pastel colors), playful sonic feedback (the satisfying "boop" sound), and engaging interactivity (clouds disappearing and reappearing). These elements create a childlike, whimsical experience that contrasts with the melancholic title. This tension between the cute presentation and emotional undertones gives the work its distinctive charm and depth, inviting viewers to interact while subtly prompting reflection on emotional states.

---

![homework3a_2](/w03s1/homework3a_2.png)

<iframe id="A1: Attempt 2" src="https://editor.p5js.org/WaiKei1/full/ogBSf5AGr"></iframe>

<script type="module">

    const iframe  = document.getElementById (`A1: Attempt 2`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16 + 42

</script>

This is the second attempt of my assignment 1. I added one more expression (happy) and I've worked on the looping background.

**Visual**

My sketch brings my plushie bear to life through three emotional states: neutral, sleeping, and happy. each represented with a soft pastel color palette to enhance the cute aesthetic. To make each state more expressive, I’ve designed additional elements: floating “ZZZ” symbols for the sleeping state and flowers for the happy state, adding a playful and cozy atmosphere.

**Sonic**

Since my plushie can’t actually speak, I’ve imagined gentle, baby sounds to express each emotion. The audio is designed to feel like a cute, playful reaction, as if she’s responding with tiny coos and hums.

**Interactivity**

Interaction is simple clicking cycles through her expressions, mimicking how her mood changes when I play with her in real life.

---

![homework3a_2](/w03s1/homework3a_3.png)

**Feedback from Rania:**

"In my opinion, your sketch has successfully captured the cute aesthetic. The adorable soft pastel colour scheme, the roundness of the teddy bear, the cheerful laughter audio, and the peacefully sleeping bear all contribute to this feeling. I have no further suggestions; you have truly achieved the cute aesthetic!"

---

### Session 2: 20 Mar

![homework3b_1](/w03s2/homework3b_1.png)

In my second attempt, I did not used the classes concept so I reiterate my code and here is the final version of my A1:

<iframe id="A1" src="https://editor.p5js.org/WaiKei1/full/_lnmvflzo"></iframe>

<script type="module">

    const iframe  = document.getElementById (`A1`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16 + 42

</script>

Here's how my assignment 1 uses these concept:

**Variables**

1.  I use this concept when I track the bear's expression:

        let currentExpression = 0;

    This variable helps cycle through the bear’s emotional states when the user clicks.

2.  Storing background colours:

        let bgColors = ["#fbe8e8", "#9cd7f0", "#f8f9a7"];

    Three background colours for three expressions.

3.  modifying animation properties:

        this.speed = random(1, 3);

**Functions**

1. preload(): loads images and sounds
2. mouseClicked(): clicking interaction, cycling through expressions
3. createBgObjects(image): generate floating background elements depending on the current expression
4. createBloomingFlowers() – generate flowers when the current expression is happy

**Iteration**

1.  creating floating objects: (for loop)

        for (let i = 0; i < 20; i++) {
            bgObjects.push(new FloatingObject(image));
        }

2.  looping flowers in the happy state: (for of)

        for (let flower of bloomingFlowers) {
            flower.grow();
            flower.display();
        }

**Boolean Logic**

1.  switching expressions after clicking:

        currentExpression = (currentExpression + 1) % expressions.length;

2.  different conditions (if)

        if (currentExpression === 0 || currentExpression === 1) {
            for (let obj of bgObjects) {
                obj.move();
                obj.display();
            }
        }

**Arrays**

1.  Stores images for different expressions

        let expressions = []; // Stores bear's facial expressions
        expressions[0] = loadImage("/expressions/neutral.png");
        expressions[1] = loadImage("/expressions/sleeping.png");
        expressions[2] = loadImage("/expressions/happy.png");

2.  Stores multiple sounds for different expressions

        let sounds = []; // Stores sound effects
        sounds[0] = loadSound("/sounds/neutral.mp3");
        sounds[1] = loadSound("/sounds/sleeping.mp3");
        sounds[2] = loadSound("/sounds/happy.mp3");

**Classes**

1.  Floating Object (sleeping and neutral expression)

        class FloatingObject {
        constructor(img) {
            this.x = random(width);
            this.y = random(height);
            this.speed = random(1, 3);
            this.size = random(450, 600);
            this.img = img;
        }

        move() {
            this.y += this.speed;
            if (this.y - this.size / 2 > height) {
            this.y = -this.size / 2;
            this.x = random(width);
            }
        }

        display() {
            image(this.img, this.x, this.y, this.size, this.size);
        }
        }

2.  Blooming flowers for the happy expression

        class BloomingFlower {
        constructor(img) {
            this.x = random(width);
            this.y = random(height);
            this.size = random(500, 650);
            this.bloom = random(0.5, 1.5);
            this.img = img;
        }

        grow() {
            this.size += this.bloom;
            if (this.size > 1000) {
            this.size = random(500, 650);
            this.x = random(width);
            this.y = random(height);
            this.bloom = random(1.5, 3);
            }
        }

        display() {
            image(this.img, this.x, this.y, this.size, this.size);
        }
        }

---

![homework3b_2](/w03s2/homework3b_2.png)

<iframe id="A1 Final" src="https://editor.p5js.org/WaiKei1/full/_lnmvflzo"></iframe>

<script type="module">

    const iframe  = document.getElementById (`A1 Final`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16 + 42

</script>

**How well did you achieve cuteness in the visual, sonic, and interactive domains?**

Overall, I believe I achieved cuteness quite well, especially in the visual and sonic aspects. The fluffy, rounded features and pastel color palette contribute to an overall soft and adorable aesthetic. For the sonic elements, I used baby-like sounds to mimic bear noises, making the character feel more childlike and endearing.

In terms of interactivity, clicking allows users to cycle through different expressions, which adds engagement. Initially, I wanted to implement a dragging interaction for the sleeping expression, but due to time constraints, I couldn't manage to integrate it.

**What communities and learning resources did you draw on to do the bulk of your learning for this project?**

For this project, I relied on several online resources, including MDN Web Docs, W3Schools, Stack Overflow, JavaScript.info, and p5.js references to deepen my understanding of key concepts. Additionally, I consulted ChatGPT and DeepSeek whenever I had extra questions or encountered challenges that I couldn't resolve on my own.

**What aspects have you enjoyed the most about this process? What have you found to be most surprising?**

I find coding similar to solving math problems. The most enjoyable part is the sense of achievement when I finally figure something out. Debugging and refining the logic can be frustrating, but that “aha” moment makes it all worthwhile.

The most surprising aspect was realizing how much code efficiency matters. Initially, my code was quite lengthy, but applying classes and boolean logic made it more concise and effective. A great example is my Attempt 2 for A2, where restructuring the code significantly improved its readability and efficiency.

**What aspects have you struggled with the most? What have you found the most confusing?**

One of my biggest challenges was implementing the looping background effect. It took me quite a while to get it working correctly, but through trial and error, I eventually figured it out. Debugging the logic and ensuring smooth transitions in animations was tricky, but solving it was very rewarding.

---

## Quick Links

### Assignments:

- [Assignment 1: Cute!](https://waikei1-creative-co-63.deno.dev/A1)

---

### Weekly Study Journey:

- [Week 1](https://waikei1-creative-co-63.deno.dev/week1)
- [Week 2](https://waikei1-creative-co-63.deno.dev/week2)
- [Week 4](https://waikei1-creative-co-63.deno.dev/week4)

---
