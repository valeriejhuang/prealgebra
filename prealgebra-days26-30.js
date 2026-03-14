export const DAYS_26_30 = {
  day26: {
    lesson: {
      title: "Perimeter & Area",
      subtitle: "Measure distance around shapes and the space they enclose",
      sections: [
        {
          heading: "Perimeter",
          paragraphs: [
            "The <strong>perimeter</strong> of a shape is the total distance around its boundary. To find the perimeter, simply add up the lengths of all the sides. Think of it as the length of fence you would need to surround a yard, or the length of string that would wrap perfectly around a flat shape.",
            "For a <strong>rectangle</strong>, opposite sides are equal, so the perimeter formula is <strong>P = 2l + 2w</strong>, where <em>l</em> is the length and <em>w</em> is the width. For a <strong>triangle</strong>, add all three sides: P = a + b + c. For a <strong>regular polygon</strong> (all sides equal), multiply the side length by the number of sides: P = n &times; s.",
            "If you know the perimeter and all but one side, you can use an equation to find the missing side &mdash; just like the one-step and two-step equations from Day 15!"
          ],
          example: {
            title: "Worked Example: Finding Perimeter of a Rectangle",
            problem: "A rectangle has a length of 12 cm and a width of 7 cm. What is its perimeter?",
            steps: [
              "Use the rectangle perimeter formula: P = 2l + 2w.",
              "Substitute: P = 2(12) + 2(7) = 24 + 14.",
              "Answer: P = <strong>38 cm</strong>."
            ]
          }
        },
        {
          heading: "Area of Rectangles, Triangles & Parallelograms",
          paragraphs: [
            "<strong>Area</strong> measures the amount of space inside a flat shape, expressed in <em>square units</em> (like cm&sup2; or ft&sup2;). For a <strong>rectangle</strong>, the area is length times width: <strong>A = l &times; w</strong>. A 5 &times; 3 rectangle contains 15 unit squares, so its area is 15 square units.",
            "A <strong>parallelogram</strong> has area <strong>A = b &times; h</strong>, where <em>b</em> is the base and <em>h</em> is the <em>perpendicular</em> height (not the slanted side). Why? If you slice off a triangle from one end and move it to the other, you form a rectangle with the same base and height.",
            "A <strong>triangle</strong> is exactly half of a parallelogram with the same base and height. That gives us <strong>A = &frac12; &times; b &times; h</strong>. This is one of the most important formulas in geometry &mdash; always make sure <em>h</em> is the height drawn perpendicular to the base, not a slanted side."
          ],
          graphs: [
            {
              type: "row",
              items: [
                {
                  type: "rectangle",
                  width: 180, height: 140,
                  rectWidth: 120, rectHeight: 80,
                  color: "#667eea",
                  rightAngle: true,
                  labels: [
                    { text: "l", x: 90, y: 25 },
                    { text: "w", x: 155, y: 70 }
                  ],
                  caption: "A = l \u00d7 w"
                },
                {
                  type: "triangle",
                  width: 180, height: 140,
                  vertices: [[25, 120], [155, 120], [90, 25]],
                  labels: [
                    { text: "", dx: 0, dy: 0 },
                    { text: "", dx: 0, dy: 0 },
                    { text: "", dx: 0, dy: 0 }
                  ],
                  sides: [
                    { label: "b", dx: 0, dy: 14 },
                    null,
                    null
                  ],
                  color: "#059669",
                  caption: "A = \u00bd \u00d7 b \u00d7 h"
                },
                {
                  type: "circle",
                  width: 160, height: 160,
                  radius: 55,
                  color: "#d97706",
                  showRadius: true,
                  radiusLabel: "r",
                  caption: "A = \u03c0r\u00b2"
                }
              ]
            }
          ],
          example: {
            title: "Worked Example: Area of a Triangle",
            problem: "A triangle has a base of 10 in and a height of 6 in. Find its area.",
            steps: [
              "Use the triangle area formula: A = &frac12; &times; b &times; h.",
              "Substitute: A = &frac12; &times; 10 &times; 6 = &frac12; &times; 60.",
              "Answer: A = <strong>30 in&sup2;</strong>."
            ]
          }
        },
        {
          heading: "Circles — Circumference & Area",
          paragraphs: [
            "A <strong>circle</strong> is defined by its <strong>radius</strong> <em>r</em> (distance from center to edge) and its <strong>diameter</strong> <em>d = 2r</em> (distance across the whole circle). The magical constant <strong>&pi;</strong> (pi) &approx; 3.14159&hellip; connects every circle's measurements. It is the ratio of any circle's circumference to its diameter.",
            "The <strong>circumference</strong> (perimeter of a circle) is <strong>C = 2&pi;r = &pi;d</strong>. The <strong>area</strong> enclosed by a circle is <strong>A = &pi;r<sup>2</sup></strong>. When a problem says &ldquo;leave your answer in terms of &pi;,&rdquo; do <em>not</em> replace &pi; with 3.14 &mdash; just write something like 25&pi; cm<sup>2</sup>.",
            "Be careful: area depends on <em>r<sup>2</sup></em>, so doubling the radius <strong>quadruples</strong> the area. A pizza with a 12-inch diameter has four times the area of one with a 6-inch diameter!"
          ],
          example: {
            title: "Worked Example: Circumference and Area of a Circle",
            problem: "A circle has a radius of 5 cm. Find its circumference and area in terms of &pi;.",
            steps: [
              "Circumference: C = 2&pi;r = 2&pi;(5) = <strong>10&pi; cm</strong>.",
              "Area: A = &pi;r<sup>2</sup> = &pi;(5)<sup>2</sup> = <strong>25&pi; cm<sup>2</sup></strong>.",
              "If approximating: C &approx; 31.42 cm and A &approx; 78.54 cm<sup>2</sup>."
            ]
          }
        },
        {
          heading: "Finding Missing Dimensions with Equations",
          paragraphs: [
            "Often you know the area or perimeter and need to find a missing measurement. This turns a geometry problem into an <strong>algebra problem</strong> &mdash; exactly the kind of equation-solving you practiced on Day 15!",
            "For instance, if a rectangle has an area of 48 m<sup>2</sup> and a length of 8 m, set up the equation 8w = 48, so w = 6 m. If a triangle has an area of 30 ft<sup>2</sup> and a base of 12 ft, then &frac12;(12)h = 30 gives 6h = 30, so h = 5 ft.",
            "The same idea works with circles: if A = 36&pi;, then &pi;r<sup>2</sup> = 36&pi;, so r<sup>2</sup> = 36 and r = 6. Connecting geometry with algebra is a skill you&rsquo;ll use throughout mathematics."
          ],
          example: {
            title: "Worked Example: Finding a Missing Side from Perimeter",
            problem: "A rectangle has a perimeter of 34 cm and a width of 5 cm. Find the length.",
            steps: [
              "Write the perimeter equation: 2l + 2w = 34.",
              "Substitute w = 5: 2l + 2(5) = 34 &rarr; 2l + 10 = 34.",
              "Subtract 10 from both sides: 2l = 24.",
              "Divide by 2: l = 12.",
              "Answer: The length is <strong>12 cm</strong>."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d26q1",
        question: "What is the perimeter of a rectangle with length 9 m and width 4 m?",
        type: "multiple-choice",
        options: ["26 m", "36 m", "13 m", "22 m"],
        correct: 0,
        explanation: "P = 2l + 2w = 2(9) + 2(4) = 18 + 8 = 26 m.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d26q2",
        question: "What is the area of a rectangle that is 8 cm long and 5 cm wide?",
        type: "multiple-choice",
        options: ["13 cm&sup2;", "26 cm&sup2;", "40 cm&sup2;", "80 cm&sup2;"],
        correct: 2,
        explanation: "A = l &times; w = 8 &times; 5 = 40 cm&sup2;.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d26q3",
        question: "A triangle has a base of 14 in and a height of 8 in. What is its area?",
        type: "multiple-choice",
        options: ["112 in&sup2;", "56 in&sup2;", "22 in&sup2;", "28 in&sup2;"],
        correct: 1,
        explanation: "A = &frac12; &times; b &times; h = &frac12; &times; 14 &times; 8 = 56 in&sup2;.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d26q4",
        question: "What is the circumference of a circle with radius 7 cm, in terms of &pi;?",
        type: "multiple-choice",
        options: ["7&pi; cm", "14&pi; cm", "49&pi; cm", "21&pi; cm"],
        correct: 1,
        explanation: "C = 2&pi;r = 2&pi;(7) = 14&pi; cm.",
        difficulty: "medium",
        category: "topic",
        hints: ["Remember the circumference formula uses the radius and π.", "Plug your radius into C = 2πr and simplify."]
      },
      {
        id: "d26q5",
        question: "A parallelogram has a base of 11 m and a height of 6 m. What is its area?",
        type: "multiple-choice",
        options: ["17 m&sup2;", "34 m&sup2;", "66 m&sup2;", "33 m&sup2;"],
        correct: 2,
        explanation: "A = b &times; h = 11 &times; 6 = 66 m&sup2;.",
        difficulty: "medium",
        category: "topic",
        hints: ["A parallelogram's area formula is just like a rectangle's — base times height.", "Multiply the base (11) by the perpendicular height (6)."]
      },
      {
        id: "d26q6",
        question: "What is the area of a circle with diameter 10 ft, in terms of &pi;?",
        type: "multiple-choice",
        options: ["10&pi; ft&sup2;", "25&pi; ft&sup2;", "100&pi; ft&sup2;", "20&pi; ft&sup2;"],
        correct: 1,
        explanation: "The radius is 10 &divide; 2 = 5 ft. A = &pi;r<sup>2</sup> = &pi;(5)<sup>2</sup> = 25&pi; ft&sup2;.",
        difficulty: "medium",
        category: "topic",
        hints: ["The area formula uses the radius, but you're given the diameter — convert first!", "Divide the diameter by 2 to get the radius, then use A = πr²."]
      },
      {
        id: "d26q7",
        question: "A regular hexagon has a side length of 9 cm. What is its perimeter?",
        type: "multiple-choice",
        options: ["36 cm", "45 cm", "54 cm", "81 cm"],
        correct: 2,
        explanation: "A regular hexagon has 6 equal sides. P = 6 &times; 9 = 54 cm.",
        difficulty: "medium",
        category: "topic",
        hints: ["A 'regular' polygon means all sides are the same length.", "Count how many sides a hexagon has, then multiply by the side length."]
      },
      {
        id: "d26q8",
        question: "A circle has an area of 64&pi; cm<sup>2</sup>. What is its radius?",
        type: "multiple-choice",
        options: ["4 cm", "8 cm", "16 cm", "32 cm"],
        correct: 1,
        explanation: "&pi;r<sup>2</sup> = 64&pi;, so r<sup>2</sup> = 64 and r = 8 cm.",
        difficulty: "hard",
        category: "topic",
        hints: ["You know the area formula A = πr² — work backwards to find r.", "Set πr² = 64π, then divide both sides by π to isolate r²."]
      },
      {
        id: "d26q9",
        question: "A triangle has an area of 42 cm<sup>2</sup> and a base of 12 cm. What is its height?",
        type: "multiple-choice",
        options: ["3.5 cm", "5 cm", "7 cm", "14 cm"],
        correct: 2,
        explanation: "A = &frac12;bh &rarr; 42 = &frac12;(12)h &rarr; 42 = 6h &rarr; h = 7 cm. This uses equation-solving from Day 15.",
        difficulty: "hard",
        category: "review",
        hints: ["Use the triangle area formula A = ½ × b × h and solve for the missing height.", "Plug in A = 42 and b = 12 to get 42 = ½(12)h, then simplify ½(12) first."]
      },
      {
        id: "d26q10",
        question: "A rectangle has a perimeter of 50 m and a length of 16 m. What is its width?",
        type: "multiple-choice",
        options: ["9 m", "17 m", "34 m", "18 m"],
        correct: 0,
        explanation: "2l + 2w = 50 &rarr; 2(16) + 2w = 50 &rarr; 32 + 2w = 50 &rarr; 2w = 18 &rarr; w = 9 m. Equation-solving review from Day 15.",
        difficulty: "hard",
        category: "review",
        hints: ["Write the perimeter formula 2l + 2w = P and plug in what you know.", "Substitute l = 16 and P = 50, then solve the equation for w step by step."]
      }
    ]
  },

  day27: {
    lesson: {
      title: "Right Triangles & Quadrilaterals",
      subtitle: "Explore the Pythagorean Theorem, special triangles, and quadrilateral properties",
      sections: [
        {
          heading: "The Pythagorean Theorem",
          paragraphs: [
            "The <strong>Pythagorean Theorem</strong> is one of the most famous results in all of mathematics. It says that in any <strong>right triangle</strong> (a triangle with a 90&deg; angle), the square of the <strong>hypotenuse</strong> (the side opposite the right angle) equals the sum of the squares of the other two sides: <strong>a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></strong>.",
            "To find a missing side, rearrange the formula. If you know the two legs <em>a</em> and <em>b</em>, the hypotenuse is c = &radic;(a<sup>2</sup> + b<sup>2</sup>). If you know the hypotenuse <em>c</em> and one leg <em>a</em>, the other leg is b = &radic;(c<sup>2</sup> &minus; a<sup>2</sup>). You&rsquo;ll use the square root skills from Days 23&ndash;24!",
            "You can also use the theorem to <strong>check</strong> whether a triangle is a right triangle. If three side lengths satisfy a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup> (where c is the longest side), then the triangle is a right triangle."
          ],
          example: {
            title: "Worked Example: Finding the Hypotenuse",
            problem: "A right triangle has legs of length 6 and 8. Find the hypotenuse.",
            steps: [
              "Apply a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>: 6<sup>2</sup> + 8<sup>2</sup> = c<sup>2</sup>.",
              "Calculate: 36 + 64 = c<sup>2</sup> &rarr; 100 = c<sup>2</sup>.",
              "Take the square root: c = &radic;100 = <strong>10</strong>."
            ],
            graphs: [
              {
                type: "triangle",
                width: 200, height: 180,
                vertices: [[20, 160], [160, 160], [160, 30]],
                labels: [
                  { text: "A", dx: -14, dy: 4 },
                  { text: "B", dx: 14, dy: 4 },
                  { text: "C", dx: 14, dy: -10 }
                ],
                sides: [
                  { label: "8 (leg b)", dx: 0, dy: 16 },
                  { label: "6 (leg a)", dx: 16, dy: 0 },
                  { label: "10 (hyp c)", dx: -20, dy: -5 }
                ],
                rightAngle: 1,
                color: "#667eea",
                caption: "6\u00b2 + 8\u00b2 = 36 + 64 = 100 = 10\u00b2"
              }
            ]
          }
        },
        {
          heading: "Common Pythagorean Triples & Special Triangles",
          paragraphs: [
            "A <strong>Pythagorean triple</strong> is a set of three positive integers that satisfy a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>. The most common ones are <strong>3-4-5</strong>, <strong>5-12-13</strong>, and <strong>8-15-17</strong>. Multiples of these also work: 6-8-10 is just 2 &times; (3-4-5), and 10-24-26 is 2 &times; (5-12-13).",
            "The <strong>45-45-90 triangle</strong> (an isosceles right triangle) has sides in the ratio <strong>1 : 1 : &radic;2</strong>. If each leg is <em>s</em>, the hypotenuse is <em>s&radic;2</em>. For example, legs of 5 give a hypotenuse of 5&radic;2.",
            "The <strong>30-60-90 triangle</strong> has sides in the ratio <strong>1 : &radic;3 : 2</strong>. The side opposite 30&deg; is the shortest (call it <em>s</em>), the side opposite 60&deg; is <em>s&radic;3</em>, and the hypotenuse (opposite 90&deg;) is <em>2s</em>. Knowing these ratios lets you solve problems instantly, without using the full Pythagorean Theorem."
          ],
          graphs: [
            {
              type: "row",
              items: [
                {
                  type: "triangle",
                  width: 150, height: 130,
                  vertices: [[15, 115], [125, 115], [125, 20]],
                  sides: [
                    { label: "4", dx: 0, dy: 14 },
                    { label: "3", dx: 12, dy: 0 },
                    { label: "5", dx: -12, dy: -5 }
                  ],
                  rightAngle: 1,
                  color: "#667eea",
                  caption: "3-4-5 triple"
                },
                {
                  type: "triangle",
                  width: 150, height: 130,
                  vertices: [[15, 115], [135, 115], [135, 15]],
                  sides: [
                    { label: "12", dx: 0, dy: 14 },
                    { label: "5", dx: 14, dy: 0 },
                    { label: "13", dx: -14, dy: -5 }
                  ],
                  rightAngle: 1,
                  color: "#059669",
                  caption: "5-12-13 triple"
                },
                {
                  type: "triangle",
                  width: 150, height: 130,
                  vertices: [[15, 115], [135, 115], [135, 15]],
                  sides: [
                    { label: "15", dx: 0, dy: 14 },
                    { label: "8", dx: 14, dy: 0 },
                    { label: "17", dx: -14, dy: -5 }
                  ],
                  rightAngle: 1,
                  color: "#d97706",
                  caption: "8-15-17 triple"
                }
              ]
            }
          ],
          example: {
            title: "Worked Example: Using a 30-60-90 Triangle",
            problem: "In a 30-60-90 triangle, the shortest side is 4. Find the other two sides.",
            steps: [
              "The sides follow the ratio 1 : &radic;3 : 2, with the shortest side opposite 30&deg;.",
              "Shortest side = 4, so multiply all parts of the ratio by 4.",
              "Side opposite 60&deg; = 4&radic;3. Hypotenuse = 2 &times; 4 = 8.",
              "Answer: The sides are <strong>4, 4&radic;3, and 8</strong>."
            ]
          }
        },
        {
          heading: "Types of Quadrilaterals",
          paragraphs: [
            "A <strong>quadrilateral</strong> is any four-sided polygon. Here are the key types and their properties:<br><strong>Parallelogram:</strong> opposite sides are parallel and equal; opposite angles are equal.<br><strong>Rectangle:</strong> a parallelogram with four right angles.<br><strong>Rhombus:</strong> a parallelogram with four equal sides.<br><strong>Square:</strong> both a rectangle <em>and</em> a rhombus &mdash; four right angles <em>and</em> four equal sides.",
            "A <strong>trapezoid</strong> has <em>exactly one pair</em> of parallel sides, called the <strong>bases</strong> (b<sub>1</sub> and b<sub>2</sub>). The distance between the bases is the <strong>height</strong> <em>h</em>. Its area formula is <strong>A = &frac12;(b<sub>1</sub> + b<sub>2</sub>)h</strong>. This averages the two bases and multiplies by the height.",
            "Notice the hierarchy: every square is a rectangle, every rectangle is a parallelogram, and every parallelogram is a quadrilateral. This means that any formula or property that works for parallelograms also works for rectangles and squares."
          ],
          example: {
            title: "Worked Example: Area of a Trapezoid",
            problem: "A trapezoid has bases of 8 cm and 14 cm and a height of 5 cm. Find its area.",
            steps: [
              "Use the trapezoid area formula: A = &frac12;(b<sub>1</sub> + b<sub>2</sub>)h.",
              "Substitute: A = &frac12;(8 + 14)(5) = &frac12;(22)(5).",
              "Calculate: A = &frac12; &times; 110 = <strong>55 cm<sup>2</sup></strong>."
            ]
          }
        },
        {
          heading: "Putting It All Together with Square Roots",
          paragraphs: [
            "Many right-triangle problems produce answers that involve <strong>square roots</strong>. For instance, a right triangle with legs 2 and 5 has hypotenuse &radic;(4 + 25) = &radic;29. Since 29 is prime, &radic;29 is already in simplest radical form.",
            "Remember the simplification techniques from Days 23&ndash;24: factor the number under the radical and pull out perfect squares. For example, &radic;72 = &radic;(36 &times; 2) = 6&radic;2. This keeps your answers exact instead of using rounded decimals.",
            "Being comfortable with radicals is essential for working with the Pythagorean Theorem and special triangles. It all connects: square roots, exponents, and geometry working together!"
          ],
          example: {
            title: "Worked Example: Pythagorean Theorem with Simplification",
            problem: "A right triangle has legs of length 3 and 7. Find the hypotenuse in simplest radical form.",
            steps: [
              "Apply a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>: 3<sup>2</sup> + 7<sup>2</sup> = c<sup>2</sup>.",
              "Calculate: 9 + 49 = 58, so c = &radic;58.",
              "Check if 58 can be simplified: 58 = 2 &times; 29. Neither factor is a perfect square.",
              "Answer: c = <strong>&radic;58</strong> (already in simplest form)."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d27q1",
        question: "A right triangle has legs of 5 and 12. What is the hypotenuse?",
        type: "type-answer",
        answer: "13",
        accept: ["13"],
        explanation: "5<sup>2</sup> + 12<sup>2</sup> = 25 + 144 = 169 = 13<sup>2</sup>. This is the classic 5-12-13 triple.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d27q2",
        question: "Which of the following is a Pythagorean triple?",
        type: "multiple-choice",
        options: ["4, 5, 6", "3, 4, 5", "2, 3, 4", "5, 6, 7"],
        correct: 1,
        explanation: "3<sup>2</sup> + 4<sup>2</sup> = 9 + 16 = 25 = 5<sup>2</sup>. The set 3-4-5 is the most well-known Pythagorean triple.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d27q3",
        question: "A trapezoid has bases of 6 m and 10 m and a height of 4 m. What is its area?",
        type: "multiple-choice",
        options: ["32 m&sup2;", "40 m&sup2;", "24 m&sup2;", "64 m&sup2;"],
        correct: 0,
        explanation: "A = &frac12;(6 + 10)(4) = &frac12;(16)(4) = 32 m&sup2;.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d27q4",
        question: "In a 45-45-90 triangle, each leg is 9. What is the hypotenuse?",
        type: "multiple-choice",
        options: ["9", "18", "9&radic;2", "9&radic;3"],
        correct: 2,
        explanation: "In a 45-45-90 triangle, the hypotenuse = leg &times; &radic;2 = 9&radic;2.",
        difficulty: "medium",
        category: "topic",
        hints: ["A 45-45-90 triangle has a special ratio between its sides — recall the 1 : 1 : √2 pattern.", "Multiply the leg length by √2 to find the hypotenuse."]
      },
      {
        id: "d27q5",
        question: "A right triangle has a hypotenuse of 15 and one leg of 9. What is the other leg?",
        type: "multiple-choice",
        options: ["6", "10", "12", "14"],
        correct: 2,
        explanation: "b = &radic;(15<sup>2</sup> &minus; 9<sup>2</sup>) = &radic;(225 &minus; 81) = &radic;144 = 12. This is a multiple of the 3-4-5 triple: 9-12-15.",
        difficulty: "medium",
        category: "topic",
        hints: ["Rearrange the Pythagorean Theorem to solve for the missing leg.", "Use b = √(c² − a²) — square the hypotenuse and subtract the square of the known leg."]
      },
      {
        id: "d27q6",
        question: "Which shape is always both a rectangle <em>and</em> a rhombus?",
        type: "multiple-choice",
        options: ["Parallelogram", "Trapezoid", "Square", "Kite"],
        correct: 2,
        explanation: "A square has four right angles (making it a rectangle) and four equal sides (making it a rhombus).",
        difficulty: "medium",
        category: "topic",
        hints: ["Think about what defines a rectangle (angles) and what defines a rhombus (sides).", "Which shape has all four right angles AND all four sides equal?"]
      },
      {
        id: "d27q7",
        question: "In a 30-60-90 triangle, the hypotenuse is 20. What is the length of the shortest side?",
        type: "multiple-choice",
        options: ["5", "10", "10&radic;3", "20&radic;3"],
        correct: 1,
        explanation: "In a 30-60-90 triangle, the hypotenuse = 2 &times; shortest side. So the shortest side = 20 &divide; 2 = 10.",
        difficulty: "medium",
        category: "topic",
        hints: ["Recall the 30-60-90 side ratio: 1 : √3 : 2. The hypotenuse is the '2' part.", "The hypotenuse is always twice the shortest side — so divide it by 2."]
      },
      {
        id: "d27q8",
        question: "A right triangle has legs of 4 and 6. What is the hypotenuse in simplest radical form?",
        type: "multiple-choice",
        options: ["&radic;52", "2&radic;13", "2&radic;10", "&radic;20"],
        correct: 1,
        explanation: "c = &radic;(16 + 36) = &radic;52 = &radic;(4 &times; 13) = 2&radic;13.",
        difficulty: "hard",
        category: "topic",
        hints: ["First use a² + b² = c² to find c², then simplify the square root.", "After you get √52, look for a perfect square factor of 52 to simplify."]
      },
      {
        id: "d27q9",
        question: "Do the side lengths 7, 24, 25 form a right triangle?",
        type: "multiple-choice",
        options: ["Yes", "No", "Only if the angle is 90&deg;", "Cannot be determined"],
        correct: 0,
        explanation: "Check: 7<sup>2</sup> + 24<sup>2</sup> = 49 + 576 = 625 = 25<sup>2</sup>. Yes, it is a right triangle.",
        difficulty: "hard",
        category: "topic",
        hints: ["To check if it's a right triangle, test whether a² + b² = c² using the longest side as c.", "Square each number: 7² = 49, 24² = 576, 25² = 625. Does the sum of the two smaller equal the largest?"]
      },
      {
        id: "d27q10",
        question: "Simplify &radic;200.",
        type: "multiple-choice",
        options: ["10&radic;2", "2&radic;50", "5&radic;8", "20&radic;5"],
        correct: 0,
        explanation: "&radic;200 = &radic;(100 &times; 2) = 10&radic;2. This reviews radical simplification from Days 23&ndash;24.",
        difficulty: "hard",
        category: "review",
        hints: ["Find the largest perfect square that divides 200.", "200 = 100 × 2, and √100 = 10 — pull that out of the radical."]
      }
    ]
  },

  day28: {
    lesson: {
      title: "Data & Statistics",
      subtitle: "Summarize data with mean, median, mode, and interpret graphs",
      sections: [
        {
          heading: "Mean, Median & Mode",
          paragraphs: [
            "When you have a set of data, you often want a single number that represents the &ldquo;center&rdquo; or typical value. The three most common measures of center are the <strong>mean</strong>, <strong>median</strong>, and <strong>mode</strong>.",
            "The <strong>mean</strong> (also called the <em>average</em>) is found by adding all the values and dividing by how many there are: <strong>mean = sum &divide; count</strong>. For example, the mean of {4, 7, 10, 3, 6} is (4 + 7 + 10 + 3 + 6) &divide; 5 = 30 &divide; 5 = 6.",
            "The <strong>median</strong> is the middle value when you arrange the data in order. If there is an <em>even</em> number of values, the median is the mean of the two middle values. The <strong>mode</strong> is the value that appears most often. A data set can have no mode, one mode, or several modes."
          ],
          practice: [
            { type: "type-answer", prompt: "Find the mean of {2, 8, 6, 4, 10}.", answer: "6", accept: ["6"], explanation: "(2 + 8 + 6 + 4 + 10) &divide; 5 = 30 &divide; 5 = 6." },
            { type: "type-answer", prompt: "Find the median of {12, 3, 7, 9, 1}.", answer: "7", accept: ["7"], explanation: "Sort: {1, 3, 7, 9, 12}. The middle value is 7." },
            { type: "multiple-quick", prompt: "What is the mode of {4, 7, 4, 9, 7, 4}?", options: ["4", "7", "9", "No mode"], correct: 0, explanation: "4 appears 3 times (more than any other value), so the mode is 4." }
          ],
          example: {
            title: "Worked Example: Finding Mean, Median & Mode",
            problem: "Find the mean, median, and mode of {3, 5, 7, 5, 10}.",
            steps: [
              "Mean: (3 + 5 + 7 + 5 + 10) &divide; 5 = 30 &divide; 5 = <strong>6</strong>.",
              "Sort the data: {3, 5, 5, 7, 10}. The middle value is <strong>5</strong> (the median).",
              "The value 5 appears twice (more than any other). Mode = <strong>5</strong>."
            ]
          }
        },
        {
          heading: "Range & Outliers",
          paragraphs: [
            "The <strong>range</strong> of a data set is the difference between the maximum and minimum values: <strong>range = max &minus; min</strong>. It tells you how spread out the data is. For {3, 5, 5, 7, 10}, the range is 10 &minus; 3 = 7.",
            "An <strong>outlier</strong> is a value that is much larger or much smaller than the rest of the data. For example, in {12, 14, 15, 13, 50}, the value 50 is an outlier. Outliers can dramatically affect the <em>mean</em> &mdash; including 50 pulls the mean up to 20.8, even though most values are around 13&ndash;15.",
            "The <strong>median</strong> is called a <em>resistant</em> measure because it is not heavily influenced by outliers. In the set above, the median is 14 whether the outlier is 50 or 500. When data has outliers, the median often gives a better picture of a &ldquo;typical&rdquo; value than the mean."
          ],
          example: {
            title: "Worked Example: Effect of an Outlier",
            problem: "Find the mean and median of {10, 12, 11, 13, 54}. Which measure is more representative?",
            steps: [
              "Mean: (10 + 12 + 11 + 13 + 54) &divide; 5 = 100 &divide; 5 = <strong>20</strong>.",
              "Sort: {10, 11, 12, 13, 54}. Median = <strong>12</strong>.",
              "The mean (20) is pulled up by the outlier 54. The median (12) better represents the typical value.",
              "Answer: The <strong>median</strong> is more representative."
            ]
          }
        },
        {
          heading: "Reading Tables, Bar Graphs & Line Graphs",
          paragraphs: [
            "Data is often presented in <strong>tables</strong>, <strong>bar graphs</strong>, or <strong>line graphs</strong>. To read them correctly, always start by reading the <em>title</em>, <em>axis labels</em>, and <em>scale</em>. Check whether the y-axis starts at zero &mdash; if it doesn&rsquo;t, differences between bars can look exaggerated.",
            "A <strong>bar graph</strong> uses bars to compare quantities across categories. A <strong>line graph</strong> shows how a quantity changes over time by connecting data points with lines. To find a specific value, locate the category on one axis and trace across to read the corresponding value on the other axis.",
            "Watch out for <strong>misleading graphs</strong>! Tricks include starting the y-axis at a high number (making small differences look huge), using inconsistent scales, or choosing axis ranges that hide important trends. Always look at the actual numbers, not just the visual impression."
          ],
          graphs: [
            { type: "row", items: [
              { type: "barGraph", width: 340, height: 220,
                categories: ["Jan", "Feb", "Mar", "Apr"],
                values: [40, 55, 45, 60],
                barColor: "#667eea",
                yLabel: "Books Sold", xLabel: "Month",
                caption: "Bar graph: Monthly Book Sales" },
              { type: "lineGraph", width: 340, height: 220,
                categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
                values: [62, 68, 65, 72, 70],
                lineColor: "#059669", pointColor: "#059669",
                yLabel: "Temperature (\u00b0F)", xLabel: "Day of Week",
                caption: "Line graph: Daily High Temperatures" }
            ]}
          ],
          example: {
            title: "Worked Example: Interpreting a Bar Graph",
            problem: "A bar graph shows monthly book sales: Jan = 40, Feb = 55, Mar = 45, Apr = 60. What is the mean monthly sales?",
            steps: [
              "Read each bar's value: 40, 55, 45, 60.",
              "Find the sum: 40 + 55 + 45 + 60 = 200.",
              "Divide by the number of months: 200 &divide; 4 = <strong>50 books per month</strong>."
            ],
            graphs: [
              { type: "barGraph", width: 360, height: 220,
                categories: ["Jan", "Feb", "Mar", "Apr"],
                values: [40, 55, 45, 60],
                barColor: "#667eea",
                yLabel: "Books Sold", xLabel: "Month",
                caption: "The bar graph from the example above" }
            ]
          }
        },
        {
          heading: "Using Percents with Data",
          paragraphs: [
            "Data questions often involve <strong>percents</strong> &mdash; connecting back to what you learned on Days 21&ndash;22. For example, &ldquo;What percent of students scored above 80?&rdquo; requires you to count the students above 80, divide by the total, and convert to a percent.",
            "If 15 out of 25 students passed a test, the pass rate is 15 &divide; 25 = 0.60 = <strong>60%</strong>. You might also see questions like &ldquo;If the mean score increased by 12%, what is the new mean?&rdquo; &mdash; that&rsquo;s a percent increase calculation!",
            "Combining statistics and percents is extremely common in real life: batting averages in baseball, survey results, test score distributions, and much more. Practice both skills together."
          ],
          example: {
            title: "Worked Example: Percent from Data",
            problem: "In a class of 30 students, 18 scored 70 or above on a test. What percent scored 70 or above?",
            steps: [
              "Divide the number who scored 70+ by the total: 18 &divide; 30 = 0.6.",
              "Convert to a percent: 0.6 &times; 100 = <strong>60%</strong>."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d28q1",
        question: "What is the mean of {4, 8, 6, 10, 2}?",
        type: "type-answer",
        answer: "6",
        accept: ["6"],
        explanation: "Mean = (4 + 8 + 6 + 10 + 2) &divide; 5 = 30 &divide; 5 = 6.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d28q2",
        question: "What is the median of {3, 9, 1, 7, 5}?",
        type: "multiple-choice",
        options: ["5", "7", "3", "9"],
        correct: 0,
        explanation: "Sorted: {1, 3, 5, 7, 9}. The middle value is 5.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d28q3",
        question: "What is the range of the data set {12, 5, 20, 8, 15}?",
        type: "multiple-choice",
        options: ["7", "8", "12", "15"],
        correct: 3,
        explanation: "Range = max &minus; min = 20 &minus; 5 = 15.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d28q4",
        question: "What is the mode of {2, 3, 4, 3, 5, 4, 3}?",
        type: "multiple-choice",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "The value 3 appears three times, more than any other value. Mode = 3.",
        difficulty: "medium",
        category: "topic",
        hints: ["The mode is the value that shows up the most often in the data set.", "Count how many times each number appears — which one wins?"]
      },
      {
        id: "d28q5",
        question: "The median of {2, 4, 7, 10} is:",
        type: "multiple-choice",
        options: ["4", "5.5", "7", "5.75"],
        correct: 1,
        explanation: "With an even number of values, the median is the mean of the two middle values: (4 + 7) &divide; 2 = 5.5.",
        difficulty: "medium",
        category: "topic",
        hints: ["When there's an even number of values, the median is the average of the two middle ones.", "The data is already sorted — find the 2nd and 3rd values and average them."]
      },
      {
        id: "d28q6",
        question: "A data set has a mean of 15. If there are 6 values, what is the sum of all values?",
        type: "multiple-choice",
        options: ["21", "60", "90", "2.5"],
        correct: 2,
        explanation: "Mean = sum &divide; count, so sum = mean &times; count = 15 &times; 6 = 90.",
        difficulty: "medium",
        category: "topic",
        hints: ["Remember, mean = sum ÷ count. You can rearrange this to find the sum!", "Multiply the mean by the number of values to get the total sum."]
      },
      {
        id: "d28q7",
        question: "Which measure of center is most affected by outliers?",
        type: "multiple-choice",
        options: ["Median", "Mode", "Mean", "Range"],
        correct: 2,
        explanation: "The mean includes every value in its calculation, so one extreme outlier can pull it significantly higher or lower. The median is resistant to outliers.",
        difficulty: "medium",
        category: "topic",
        hints: ["Think about which measure uses every single data value in its formula.", "The mean adds up ALL values — so one super-big or super-small number drags it away from the center."]
      },
      {
        id: "d28q8",
        question: "Five test scores are {72, 85, 90, 68, x}. If the mean is 80, what is x?",
        type: "multiple-choice",
        options: ["75", "80", "85", "95"],
        correct: 2,
        explanation: "Sum must be 80 &times; 5 = 400. Current sum = 72 + 85 + 90 + 68 = 315. So x = 400 &minus; 315 = 85.",
        difficulty: "hard",
        category: "topic",
        hints: ["If you know the mean and the count, you can figure out what the total sum must be.", "Find the required total (mean × count = 80 × 5), then subtract the known scores to find x."]
      },
      {
        id: "d28q9",
        question: "In a class of 40 students, 14 earned an A. What percent earned an A?",
        type: "multiple-choice",
        options: ["14%", "28%", "35%", "40%"],
        correct: 2,
        explanation: "14 &divide; 40 = 0.35 = 35%. This uses percent conversion from Days 21&ndash;22.",
        difficulty: "hard",
        category: "review",
        hints: ["To find a percent, divide the part by the whole, then multiply by 100.", "Set up the fraction 14/40 and convert it to a decimal first."]
      },
      {
        id: "d28q10",
        question: "A store's monthly revenue was $8,000. After a 25% increase, what is the new revenue?",
        type: "multiple-choice",
        options: ["$8,250", "$10,000", "$10,250", "$6,000"],
        correct: 1,
        explanation: "25% of $8,000 = 0.25 &times; 8,000 = $2,000. New revenue = $8,000 + $2,000 = $10,000. This reviews percent increase from Day 22.",
        difficulty: "hard",
        category: "review",
        hints: ["A percent increase means you add a percentage of the original to itself.", "First find 25% of $8,000 (multiply by 0.25), then add that amount to $8,000."]
      }
    ]
  },

  day29: {
    lesson: {
      title: "Counting Principles",
      subtitle: "Learn systematic strategies for counting possibilities",
      sections: [
        {
          heading: "Counting with Addition & Subtraction",
          paragraphs: [
            "Counting problems ask <em>&ldquo;how many ways&hellip;?&rdquo;</em> The simplest strategy uses <strong>addition</strong>: if you can do task A in <em>m</em> ways <strong>or</strong> task B in <em>n</em> ways, and the two tasks <em>don&rsquo;t overlap</em> (you can&rsquo;t do both at the same time), then the total number of ways is <strong>m + n</strong>.",
            "For example, a restaurant offers 5 appetizers and 4 desserts. If you choose <em>one</em> item (either an appetizer <em>or</em> a dessert), there are 5 + 4 = 9 choices. The key requirement is that the options are <em>mutually exclusive</em> &mdash; no item is both an appetizer and a dessert.",
            "The <strong>subtraction principle</strong> (also called complementary counting) is powerful when counting &ldquo;at least one&rdquo; is hard but counting &ldquo;none&rdquo; is easy. The idea: <strong>at least one = total &minus; none</strong>. This avoids complicated case-by-case counting."
          ],
          example: {
            title: "Worked Example: Complementary Counting",
            problem: "A bag has 10 marbles: 6 red and 4 blue. You draw 1 marble. How many ways can you draw at least one red marble?",
            steps: [
              "Total ways to draw 1 marble = 10.",
              "Ways to draw NO red marble (i.e., blue only) = 4.",
              "Ways to draw at least one red = total &minus; none = 10 &minus; 4 = <strong>6</strong>.",
              "(Of course, you could also count this directly: there are 6 red marbles!)"
            ]
          }
        },
        {
          heading: "The Multiplication Principle",
          paragraphs: [
            "When a task consists of <strong>multiple stages</strong>, and the stages are independent, you <em>multiply</em> the number of choices at each stage. This is the <strong>Multiplication Principle</strong> (also called the Counting Principle). If stage 1 has <em>a</em> options and stage 2 has <em>b</em> options, the total number of outcomes is <strong>a &times; b</strong>.",
            "Imagine picking an outfit: 4 shirts and 3 pairs of pants. Each shirt can be paired with each pair of pants, so there are 4 &times; 3 = 12 possible outfits. If you add 2 hat choices, the total becomes 4 &times; 3 &times; 2 = 24.",
            "This principle shows up everywhere: license plates, passwords, phone numbers, seating arrangements, and more. A 3-digit code where each digit is 0&ndash;9 has 10 &times; 10 &times; 10 = 1,000 possibilities. If digits can&rsquo;t repeat, it&rsquo;s 10 &times; 9 &times; 8 = 720."
          ],
          example: {
            title: "Worked Example: Counting Passwords",
            problem: "A password is 4 characters long. The first character must be a letter (26 choices) and the remaining 3 must be digits (0&ndash;9). How many passwords are possible?",
            steps: [
              "Stage 1 (letter): 26 choices.",
              "Stage 2 (digit): 10 choices.",
              "Stage 3 (digit): 10 choices.",
              "Stage 4 (digit): 10 choices.",
              "Total = 26 &times; 10 &times; 10 &times; 10 = <strong>26,000 passwords</strong>."
            ]
          }
        },
        {
          heading: "Organized Counting & Casework",
          paragraphs: [
            "Some counting problems don&rsquo;t fit neatly into addition or multiplication. In these situations, <strong>organized listing</strong> and <strong>casework</strong> are your best tools. The idea is to break the problem into <em>non-overlapping</em> cases, count each case, and add the results.",
            "For example, to count the two-digit numbers whose digits sum to 5, you could list by the tens digit: 14, 23, 32, 41, 50. That gives 5 numbers. Organizing by cases ensures you don&rsquo;t miss any and don&rsquo;t double-count.",
            "When counting <strong>pairs</strong>, be careful about double-counting. If 4 people all shake hands with each other, you might think there are 4 &times; 3 = 12 handshakes, but each handshake involves two people, so divide by 2: there are 12 &divide; 2 = <strong>6</strong> handshakes."
          ],
          example: {
            title: "Worked Example: Counting with Casework",
            problem: "How many ways can you make 25 cents using only nickels (5&cent;) and dimes (10&cent;)?",
            steps: [
              "Organize by the number of dimes:<br>Case 1: 0 dimes &rarr; 5 nickels (one way).<br>Case 2: 1 dime &rarr; 15&cent; left &rarr; 3 nickels (one way).<br>Case 3: 2 dimes &rarr; 5&cent; left &rarr; 1 nickel (one way).",
              "We can&rsquo;t use 3 dimes (that&rsquo;s 30&cent;, too much).",
              "Total: 1 + 1 + 1 = <strong>3 ways</strong>."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d29q1",
        question: "A cafeteria offers 6 main dishes and 3 drinks. If you choose one of each, how many meal combinations are there?",
        type: "multiple-choice",
        options: ["9", "18", "36", "12"],
        correct: 1,
        explanation: "By the multiplication principle: 6 &times; 3 = 18 combinations.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d29q2",
        question: "A toy comes in 4 colors and 3 sizes. How many different toy options are there?",
        type: "multiple-choice",
        options: ["7", "10", "12", "24"],
        correct: 2,
        explanation: "Multiply: 4 colors &times; 3 sizes = 12 options.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d29q3",
        question: "A store has 8 fiction books and 5 non-fiction books. If you buy exactly one book, how many choices do you have?",
        type: "multiple-choice",
        options: ["40", "3", "13", "8"],
        correct: 2,
        explanation: "Since you pick one book from either category: 8 + 5 = 13 choices (addition principle).",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d29q4",
        question: "How many 3-digit numbers can be formed using the digits 1&ndash;5 if repetition is allowed?",
        type: "multiple-choice",
        options: ["15", "60", "125", "243"],
        correct: 2,
        explanation: "Each of the 3 positions has 5 choices: 5 &times; 5 &times; 5 = 125.",
        difficulty: "medium",
        category: "topic",
        hints: ["Use the multiplication principle — how many choices do you have for each digit position?", "Since repetition is allowed, each of the 3 positions has 5 choices. Multiply them together."]
      },
      {
        id: "d29q5",
        question: "How many 2-letter &ldquo;words&rdquo; (from A&ndash;Z) can be formed if the two letters must be different?",
        type: "multiple-choice",
        options: ["676", "650", "52", "325"],
        correct: 1,
        explanation: "First letter: 26 choices. Second letter: 25 choices (can&rsquo;t repeat). Total = 26 &times; 25 = 650.",
        difficulty: "medium",
        category: "topic",
        hints: ["No repeating letters means the second letter has fewer choices than the first.", "Pick the first letter (26 options), then the second letter can be anything except the first (25 options)."]
      },
      {
        id: "d29q6",
        question: "Five friends each shake hands with every other friend exactly once. How many handshakes occur?",
        type: "multiple-choice",
        options: ["20", "15", "10", "25"],
        correct: 2,
        explanation: "Each of 5 people shakes hands with 4 others = 20, but each handshake is counted twice. So 20 &divide; 2 = 10.",
        difficulty: "medium",
        category: "topic",
        hints: ["A handshake involves two people, so be careful not to double-count!", "Count total one-way connections (5 × 4), then divide by 2 because each handshake was counted from both sides."]
      },
      {
        id: "d29q7",
        question: "A coin is flipped 4 times. How many possible outcomes are there?",
        type: "multiple-choice",
        options: ["4", "8", "16", "32"],
        correct: 2,
        explanation: "Each flip has 2 outcomes: 2 &times; 2 &times; 2 &times; 2 = 2<sup>4</sup> = 16.",
        difficulty: "medium",
        category: "topic",
        hints: ["Each coin flip is independent and has 2 possible outcomes (heads or tails).", "Multiply the number of outcomes per flip: 2 × 2 × 2 × 2."]
      },
      {
        id: "d29q8",
        question: "A license plate has 2 letters followed by 3 digits. If repetition is allowed, how many plates are possible?",
        type: "multiple-choice",
        options: ["67,600", "175,760", "468,000", "676,000"],
        correct: 3,
        explanation: "26 &times; 26 &times; 10 &times; 10 &times; 10 = 676,000.",
        difficulty: "hard",
        category: "topic",
        hints: ["Break the plate into stages: how many choices for each letter position and each digit position?", "Letters have 26 options each and digits have 10 options each — multiply all five positions together."]
      },
      {
        id: "d29q9",
        question: "How many two-digit numbers have digits that sum to 8?",
        type: "multiple-choice",
        options: ["7", "8", "9", "6"],
        correct: 1,
        explanation: "List by tens digit: 17, 26, 35, 44, 53, 62, 71, 80. That&rsquo;s 8 numbers. (The tens digit ranges from 1 to 8.)",
        difficulty: "hard",
        category: "topic",
        hints: ["Organize your list by the tens digit — what can it be if both digits must sum to 8?", "The tens digit can be 1 through 8 (it can't be 0 in a two-digit number). For each, find the ones digit that makes the sum 8."]
      },
      {
        id: "d29q10",
        question: "The mean of a data set with 8 values is 12. If one value is removed and the mean of the remaining 7 values is 11, what was the removed value?",
        type: "multiple-choice",
        options: ["15", "17", "19", "21"],
        correct: 2,
        explanation: "Original sum = 8 &times; 12 = 96. New sum = 7 &times; 11 = 77. Removed value = 96 &minus; 77 = 19. This reviews statistics from Day 28.",
        difficulty: "hard",
        category: "review",
        hints: ["Use mean × count to figure out the total sum before and after the value was removed.", "Original sum = 8 × 12 = 96 and new sum = 7 × 11 = 77. The difference is the removed value."]
      }
    ]
  },

  day30: {
    lesson: {
      title: "Probability & Course Review",
      subtitle: "Calculate the likelihood of events and reflect on 30 days of prealgebra",
      sections: [
        {
          heading: "What Is Probability?",
          paragraphs: [
            "<strong>Probability</strong> measures how likely an event is to happen. It is always a number between <strong>0</strong> (impossible) and <strong>1</strong> (certain), inclusive. The basic formula is: <strong>P(event) = favorable outcomes &divide; total outcomes</strong>.",
            "For example, when rolling a standard die, the probability of rolling a 3 is P(3) = 1/6 because there is 1 favorable outcome out of 6 equally likely outcomes. Probability can be expressed as a fraction, decimal, or percent: 1/6 &approx; 0.167 &approx; 16.7%.",
            "A very useful rule is the <strong>complement rule</strong>: <strong>P(not A) = 1 &minus; P(A)</strong>. If the probability of rain tomorrow is 0.3, then the probability of <em>no</em> rain is 1 &minus; 0.3 = 0.7. This connects to complementary counting from Day 29!"
          ],
          example: {
            title: "Worked Example: Basic Probability",
            problem: "A bag contains 3 red, 5 blue, and 2 green marbles. What is the probability of drawing a blue marble?",
            steps: [
              "Total marbles = 3 + 5 + 2 = 10.",
              "Favorable outcomes (blue) = 5.",
              "P(blue) = 5/10 = <strong>1/2</strong> (or 0.5 or 50%)."
            ]
          }
        },
        {
          heading: "Computing Probabilities",
          paragraphs: [
            "The counting principles from Day 29 are essential for computing probabilities. To find P(event), you need to count both the <em>favorable outcomes</em> and the <em>total outcomes</em>. The multiplication principle helps with both.",
            "When flipping 2 coins, the total outcomes are 2 &times; 2 = 4: {HH, HT, TH, TT}. The probability of getting exactly one head is 2/4 = 1/2 (the outcomes HT and TH). For a standard deck of 52 cards, P(drawing a heart) = 13/52 = 1/4.",
            "For <strong>compound events</strong>, think carefully about whether events are independent. When rolling two dice, the total outcomes are 6 &times; 6 = 36. The probability of rolling a sum of 7 is 6/36 = 1/6, because exactly 6 pairs sum to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1)."
          ],
          graphs: [
            { type: "diceGrid", width: 280, height: 280, size: 6,
              highlightColor: "#667eea",
              highlight: [[1,6],[2,5],[3,4],[4,3],[5,2],[6,1]],
              caption: "Two-dice sum table: highlighted cells show the 6 pairs that sum to 7" }
          ],
          example: {
            title: "Worked Example: Probability with Two Dice",
            problem: "Two fair dice are rolled. What is the probability that the sum is 9?",
            steps: [
              "Total outcomes = 6 &times; 6 = 36.",
              "List pairs that sum to 9: (3,6), (4,5), (5,4), (6,3). That&rsquo;s 4 favorable outcomes.",
              "P(sum = 9) = 4/36 = <strong>1/9</strong>."
            ],
            graphs: [
              { type: "diceGrid", width: 280, height: 280, size: 6,
                highlightColor: "#e53e3e",
                highlight: [[3,6],[4,5],[5,4],[6,3]],
                caption: "Highlighted: the 4 pairs that sum to 9" }
            ]
          }
        },
        {
          heading: "Problem-Solving Strategies & Course Finale",
          paragraphs: [
            "Over the last 30 days, you&rsquo;ve learned strategies that mathematicians use every day. Let&rsquo;s review the big ones:<br><strong>Find a pattern:</strong> Look for structure in sequences or repeated calculations.<br><strong>Draw a picture:</strong> Sketching a diagram often reveals relationships you can&rsquo;t see from numbers alone.<br><strong>Work backwards:</strong> Start from what you want and reverse the steps.<br><strong>Make a list:</strong> Organize cases systematically to avoid missing or double-counting.",
            "Here&rsquo;s a quick map of everything you&rsquo;ve covered: arithmetic and integers (Days 1&ndash;4) &rarr; exponents (Days 5&ndash;6) &rarr; number theory (Days 7&ndash;9) &rarr; fractions (Days 10&ndash;13) &rarr; algebra basics (Days 14&ndash;16) &rarr; decimals (Days 17&ndash;18) &rarr; ratios and proportions (Days 19&ndash;20) &rarr; percents (Days 21&ndash;22) &rarr; square roots (Days 23&ndash;24) &rarr; geometry (Days 25&ndash;27) &rarr; data and counting (Days 28&ndash;29) &rarr; probability (Day 30).",
            "Congratulations &mdash; you&rsquo;ve completed a <strong>full prealgebra course</strong>! You now have the foundation for <em>AoPS Introduction to Algebra</em> and beyond. The most important skill you&rsquo;ve developed isn&rsquo;t any single formula &mdash; it&rsquo;s the ability to <strong>think carefully</strong>, break problems into pieces, and reason step by step. Keep practicing, stay curious, and enjoy the journey!"
          ],
          example: {
            title: "Worked Example: Combining Multiple Skills",
            problem: "A square garden has a perimeter of 48 m. What is the area of a circle inscribed inside it? Leave your answer in terms of &pi;.",
            steps: [
              "Find the side of the square: P = 4s &rarr; 48 = 4s &rarr; s = 12 m.",
              "The inscribed circle has a diameter equal to the side of the square, so d = 12 m, meaning r = 6 m.",
              "Area of the circle: A = &pi;r<sup>2</sup> = &pi;(6)<sup>2</sup> = <strong>36&pi; m<sup>2</sup></strong>.",
              "This problem used perimeter (Day 26), equations (Day 15), and circle area (Day 26) &mdash; all in one!"
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d30q1",
        question: "A fair die is rolled. What is the probability of rolling an even number?",
        type: "multiple-choice",
        options: ["1/6", "1/3", "1/2", "2/3"],
        correct: 2,
        explanation: "Even numbers on a die: {2, 4, 6} = 3 outcomes out of 6 total. P = 3/6 = 1/2.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d30q2",
        question: "A bag has 4 red and 6 blue marbles. What is the probability of drawing a red marble? Write as a fraction.",
        type: "type-answer",
        answer: "2/5",
        accept: ["2/5", "4/10", "0.4", "40%"],
        explanation: "Total marbles = 10. P(red) = 4/10 = 2/5.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d30q3",
        question: "If P(rain) = 0.35, what is P(no rain)?",
        type: "multiple-choice",
        options: ["0.35", "0.55", "0.65", "1.35"],
        correct: 2,
        explanation: "P(no rain) = 1 &minus; P(rain) = 1 &minus; 0.35 = 0.65.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d30q4",
        question: "A coin is flipped 3 times. What is the probability of getting all heads?",
        type: "multiple-choice",
        options: ["1/2", "1/4", "1/8", "3/8"],
        correct: 2,
        explanation: "Total outcomes = 2<sup>3</sup> = 8. Only 1 outcome is HHH. P = 1/8.",
        difficulty: "medium",
        category: "topic",
        hints: ["First count the total number of outcomes for 3 coin flips using the multiplication principle.", "There are 2 × 2 × 2 = 8 total outcomes. How many of those are all heads?"]
      },
      {
        id: "d30q5",
        question: "From a standard deck of 52 cards, what is the probability of drawing a king?",
        type: "multiple-choice",
        options: ["1/52", "1/13", "1/4", "4/13"],
        correct: 1,
        explanation: "There are 4 kings in a deck of 52 cards. P(king) = 4/52 = 1/13.",
        difficulty: "medium",
        category: "topic",
        hints: ["Remember: P(event) = favorable outcomes ÷ total outcomes. A standard deck has 52 cards.", "Count how many kings are in the deck (one per suit), then divide by 52."]
      },
      {
        id: "d30q6",
        question: "Two fair dice are rolled. What is the probability that the sum is 7?",
        type: "multiple-choice",
        options: ["1/12", "1/6", "7/36", "1/7"],
        correct: 1,
        explanation: "Total outcomes = 36. Pairs summing to 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 outcomes. P = 6/36 = 1/6.",
        difficulty: "medium",
        category: "topic",
        hints: ["Two dice give 6 × 6 = 36 total outcomes. Now list all the pairs that add up to 7.", "Start listing: (1,6), (2,5), (3,4)… don't forget (4,3), (5,2), (6,1) — order matters with two dice!"]
      },
      {
        id: "d30q7",
        question: "A spinner has 8 equal sections numbered 1&ndash;8. What is the probability of landing on a prime number?",
        type: "multiple-choice",
        options: ["3/8", "4/8", "5/8", "2/8"],
        correct: 1,
        explanation: "Primes from 1 to 8: {2, 3, 5, 7} = 4 primes. P = 4/8 = 1/2.",
        difficulty: "medium",
        category: "topic",
        hints: ["First identify which numbers from 1 to 8 are prime.", "Remember: 1 is NOT prime. List the primes (2, 3, 5, 7) and count them out of 8 total sections."]
      },
      {
        id: "d30q8",
        question: "A bag contains 5 red, 3 blue, and 2 green marbles. What is the probability of <em>not</em> drawing a green marble?",
        type: "multiple-choice",
        options: ["1/5", "2/5", "3/5", "4/5"],
        correct: 3,
        explanation: "P(green) = 2/10 = 1/5. P(not green) = 1 &minus; 1/5 = 4/5.",
        difficulty: "hard",
        category: "topic",
        hints: ["'Not green' is the complement — use the rule P(not A) = 1 − P(A).", "First find P(green) = 2/10, then subtract from 1 to get P(not green)."]
      },
      {
        id: "d30q9",
        question: "A password is 2 digits long (each digit 0&ndash;9). What is the probability that both digits are the same?",
        type: "multiple-choice",
        options: ["1/100", "1/10", "1/5", "9/100"],
        correct: 1,
        explanation: "Total 2-digit passwords = 10 &times; 10 = 100. Passwords with both digits the same: 00, 11, 22, &hellip;, 99 = 10. P = 10/100 = 1/10. This uses counting from Day 29.",
        difficulty: "hard",
        category: "review",
        hints: ["Count the total number of 2-digit passwords, then count how many have matching digits.", "Total passwords = 10 × 10 = 100. For matching digits, think: 00, 11, 22, … — how many are there?"]
      },
      {
        id: "d30q10",
        question: "A 4-character code uses digits 1&ndash;5 with repetition allowed. How many codes have at least one &lsquo;3&rsquo;?",
        type: "multiple-choice",
        options: ["369", "500", "544", "625"],
        correct: 0,
        explanation: "Total codes = 5<sup>4</sup> = 625. Codes with NO 3&rsquo;s: each position has 4 choices, so 4<sup>4</sup> = 256. At least one 3 = 625 &minus; 256 = 369. This uses complementary counting from Day 29.",
        difficulty: "hard",
        category: "review",
        hints: ["Counting 'at least one' directly is tricky — try complementary counting: total minus none.", "Total codes = 5⁴ = 625. Codes with NO 3's use only digits {1,2,4,5}, so that's 4⁴. Subtract to find codes with at least one 3."]
      }
    ]
  }
};
