export const DAYS_16_20 = {
  day16: {
    lesson: {
      title: "Multi-Step Equations, Word Problems & Inequalities",
      subtitle: "Tackle harder equations, translate real-world stories into algebra, and explore inequalities",
      sections: [
        {
          heading: "Multi-Step Equations",
          paragraphs: [
            "Now that you can solve one-step and two-step equations, it&rsquo;s time to level up. A <strong>multi-step equation</strong> may have <em>variables on both sides</em> or require the <strong>distributive property</strong> before you can isolate the variable. The goal is still the same: get the variable alone on one side.",
            "When variables appear on both sides, move them to one side first. For example, in 3x + 4 = x + 10, subtract x from both sides to get 2x + 4 = 10, then subtract 4 to get 2x = 6, and divide by 2 to find x = 3. Always <em>check</em> your answer by plugging it back into the original equation.",
            "If the equation contains parentheses, use the <strong>distributive property</strong> first. For example, 2(x + 3) = 14 becomes 2x + 6 = 14. Then solve the two-step equation: subtract 6 to get 2x = 8, divide by 2 to get x = 4."
          ],
          example: {
            title: "Worked Example: Variables on Both Sides",
            problem: "Solve 5x &minus; 3 = 2x + 9.",
            steps: [
              "Subtract 2x from both sides: 5x &minus; 2x &minus; 3 = 9 &rarr; 3x &minus; 3 = 9.",
              "Add 3 to both sides: 3x = 12.",
              "Divide both sides by 3: x = 4.",
              "Check: 5(4) &minus; 3 = 17 and 2(4) + 9 = 17. &#10003; Both sides match!"
            ]
          }
        },
        {
          heading: "Translating Word Problems into Equations",
          paragraphs: [
            "One of the most powerful uses of algebra is <strong>turning real-world problems into equations</strong>. The trick is to identify the unknown (what you&rsquo;re looking for), assign it a variable, and then translate the English sentences into math symbols.",
            "Key translations: <em>&ldquo;is&rdquo;</em> means =, <em>&ldquo;more than&rdquo;</em> means +, <em>&ldquo;less than&rdquo;</em> means &minus;, <em>&ldquo;times&rdquo;</em> or <em>&ldquo;of&rdquo;</em> means &times;, and <em>&ldquo;per&rdquo;</em> or <em>&ldquo;divided by&rdquo;</em> means &divide;. For example, &ldquo;Maria is 5 years older than twice Tom&rsquo;s age&rdquo; becomes M = 2T + 5.",
            "After setting up and solving the equation, always <strong>check that your answer makes sense</strong> in the context of the problem. A negative age or a speed of 1,000 mph for a bicycle would signal a mistake!"
          ],
          example: {
            title: "Worked Example: Age Problem",
            problem: "Maria is 4 years older than twice her brother&rsquo;s age. If Maria is 18, how old is her brother?",
            steps: [
              "Let b = her brother&rsquo;s age.",
              "Translate: Maria&rsquo;s age = 2 &times; brother&rsquo;s age + 4, so 18 = 2b + 4.",
              "Subtract 4 from both sides: 14 = 2b.",
              "Divide by 2: b = 7.",
              "Check: 2(7) + 4 = 18. &#10003; Maria is indeed 18."
            ]
          }
        },
        {
          heading: "Inequalities",
          paragraphs: [
            "An <strong>inequality</strong> is like an equation, but instead of = it uses a comparison symbol: <strong>&lt;</strong> (less than), <strong>&gt;</strong> (greater than), <strong>&le;</strong> (less than or equal to), or <strong>&ge;</strong> (greater than or equal to). The solution to an inequality is usually a <em>range</em> of values, not just one number.",
            "You solve inequalities almost exactly like equations &mdash; add, subtract, multiply, or divide both sides by the same number. But there is one <strong>critical rule</strong>: when you <em>multiply or divide both sides by a negative number</em>, you must <strong>flip the inequality sign</strong>. For example, &minus;2x &gt; 6 becomes x &lt; &minus;3 after dividing by &minus;2.",
            "You can graph solutions on a <strong>number line</strong>. Use an <em>open circle</em> for &lt; or &gt; (the endpoint is <em>not</em> included) and a <em>closed (filled) circle</em> for &le; or &ge; (the endpoint <em>is</em> included). Then shade the direction that represents all the solutions."
          ],
          graphs: [
            {
              type: "row",
              items: [
                {
                  type: "numberLine",
                  min: -2, max: 8, step: 1,
                  width: 340, height: 70,
                  intervals: [
                    { from: 3, toInf: true, fromOpen: true, color: "#667eea" }
                  ],
                  caption: "x > 3 (open circle \u2014 3 not included)"
                },
                {
                  type: "numberLine",
                  min: -2, max: 8, step: 1,
                  width: 340, height: 70,
                  intervals: [
                    { from: 3, toInf: true, fromOpen: false, color: "#059669" }
                  ],
                  caption: "x \u2265 3 (closed circle \u2014 3 included)"
                }
              ]
            }
          ],
          example: {
            title: "Worked Example: Solving an Inequality",
            problem: "Solve &minus;3x + 5 &le; 14 and describe the solution.",
            steps: [
              "Subtract 5 from both sides: &minus;3x &le; 9.",
              "Divide both sides by &minus;3 and FLIP the sign: x &ge; &minus;3.",
              "The solution is all numbers greater than or equal to &minus;3.",
              "On a number line, place a closed circle at &minus;3 and shade to the right."
            ],
            graphs: [
              {
                type: "numberLine",
                min: -6, max: 4, step: 1,
                width: 480, height: 70,
                intervals: [
                  { from: -3, toInf: true, fromOpen: false, color: "#667eea" }
                ],
                caption: "x \u2265 -3: closed circle at -3, shaded right"
              }
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d16q1",
        question: "Solve: 2x + 5 = 13.",
        type: "multiple-choice",
        options: ["x = 3", "x = 4", "x = 9", "x = 6"],
        correct: 1,
        explanation: "Subtract 5 from both sides: 2x = 8. Divide by 2: x = 4.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d16q2",
        question: "Which symbol means &ldquo;less than or equal to&rdquo;?",
        type: "multiple-choice",
        options: ["&lt;", "&gt;", "&le;", "&ge;"],
        correct: 2,
        explanation: "The symbol &le; combines &lt; with a line underneath meaning &ldquo;or equal to.&rdquo;",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d16q3",
        question: "Solve: 3(x + 2) = 21.",
        type: "multiple-choice",
        options: ["x = 5", "x = 7", "x = 6", "x = 9"],
        correct: 0,
        explanation: "Distribute: 3x + 6 = 21. Subtract 6: 3x = 15. Divide by 3: x = 5.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d16q4",
        question: "Solve: 4x + 3 = 2x + 11.",
        type: "multiple-choice",
        options: ["x = 7", "x = 2", "x = 4", "x = 3"],
        correct: 2,
        explanation: "Subtract 2x from both sides: 2x + 3 = 11. Subtract 3: 2x = 8. Divide by 2: x = 4.",
        difficulty: "medium",
        hints: ["When variables are on both sides, move them to the same side first.", "Try subtracting 2x from both sides to get all the x's together."],
        category: "topic"
      },
      {
        id: "d16q5",
        question: "A number doubled and then increased by 7 equals 25. What is the number?",
        type: "multiple-choice",
        options: ["8", "9", "12", "16"],
        correct: 1,
        explanation: "Let n be the number. 2n + 7 = 25 &rarr; 2n = 18 &rarr; n = 9.",
        difficulty: "medium",
        hints: ["Translate the words into an equation: 'doubled' means multiply by 2, 'increased by' means add.", "Write 2n + 7 = 25 and solve for n by undoing the operations."],
        category: "topic"
      },
      {
        id: "d16q6",
        question: "Solve: &minus;2x &gt; 10.",
        type: "multiple-choice",
        options: ["x &gt; &minus;5", "x &lt; &minus;5", "x &gt; 5", "x &lt; 5"],
        correct: 1,
        explanation: "Divide both sides by &minus;2 and flip the sign: x &lt; &minus;5.",
        difficulty: "medium",
        hints: ["Remember the special rule: when you divide or multiply an inequality by a negative number, something happens to the sign.", "Divide both sides by −2, but don't forget to flip the inequality symbol!"],
        category: "topic"
      },
      {
        id: "d16q7",
        question: "Sam is 3 years older than twice Ella&rsquo;s age. If Sam is 19, how old is Ella?",
        type: "multiple-choice",
        options: ["7", "8", "11", "10"],
        correct: 1,
        explanation: "19 = 2e + 3 &rarr; 16 = 2e &rarr; e = 8. Ella is 8 years old.",
        difficulty: "medium",
        hints: ["Turn the words into an equation: 'Sam is 3 years older than twice Ella's age' tells you Sam = 2e + 3.", "Plug in Sam's age (19) for the left side and solve for e."],
        category: "topic"
      },
      {
        id: "d16q8",
        question: "Solve: 5(x &minus; 1) = 3x + 7.",
        type: "multiple-choice",
        options: ["x = 4", "x = 6", "x = 1", "x = 12"],
        correct: 1,
        explanation: "Distribute: 5x &minus; 5 = 3x + 7. Subtract 3x: 2x &minus; 5 = 7. Add 5: 2x = 12. Divide by 2: x = 6.",
        difficulty: "hard",
        hints: ["When you see parentheses, use the distributive property first to clear them.", "Distribute the 5: 5(x − 1) becomes 5x − 5, then move the x-terms to one side."],
        category: "topic"
      },
      {
        id: "d16q9",
        question: "Which graph represents x &ge; 2 on a number line?",
        type: "multiple-choice",
        options: [
          "Open circle at 2, shading right",
          "Closed circle at 2, shading right",
          "Open circle at 2, shading left",
          "Closed circle at 2, shading left"
        ],
        correct: 1,
        explanation: "x &ge; 2 includes 2 (closed circle) and all numbers greater than 2 (shade right).",
        difficulty: "hard",
        hints: ["Think about what the ≥ symbol means — does it include the endpoint or not?", "≥ means 'or equal to,' so the circle at 2 should be filled in (closed), and shade toward bigger numbers."],
        category: "topic"
      },
      {
        id: "d16q10",
        question: "Solve: 3x &minus; 7 = 14. <em>(Review: two-step equations)</em>",
        type: "multiple-choice",
        options: ["x = 3", "x = 5", "x = 7", "x = 21"],
        correct: 2,
        explanation: "Add 7 to both sides: 3x = 21. Divide by 3: x = 7.",
        difficulty: "hard",
        hints: ["This is a two-step equation — undo addition/subtraction first, then multiplication.", "Add 7 to both sides first to isolate the term with x."],
        category: "review"
      }
    ]
  },

  day17: {
    lesson: {
      title: "Decimal Place Value & Operations",
      subtitle: "Understand decimal place value and master adding, subtracting, multiplying, and dividing decimals",
      sections: [
        {
          heading: "Decimal Place Value",
          paragraphs: [
            "You&rsquo;ve worked with fractions &mdash; now let&rsquo;s explore their close cousin, <strong>decimals</strong>. A decimal uses a dot (the <strong>decimal point</strong>) to separate whole numbers from fractional parts. Each place to the right of the decimal point represents a power of 10: <em>tenths</em> (10<sup>&minus;1</sup>), <em>hundredths</em> (10<sup>&minus;2</sup>), <em>thousandths</em> (10<sup>&minus;3</sup>), and so on.",
            "For example, in 5.274, the <strong>2</strong> is in the tenths place (worth 0.2), the <strong>7</strong> is in the hundredths place (worth 0.07), and the <strong>4</strong> is in the thousandths place (worth 0.004). The full value is 5 + 0.2 + 0.07 + 0.004.",
            "To <strong>compare decimals</strong>, line them up by the decimal point and compare digit by digit from left to right. Append trailing zeros if needed. For example, 0.35 vs. 0.305: write them as 0.350 and 0.305. Since 5 &gt; 0 in the hundredths place, we get 0.35 &gt; 0.305."
          ],
          example: {
            title: "Worked Example: Comparing Decimals",
            problem: "Which is greater: 2.08 or 2.1?",
            steps: [
              "Write both with the same number of decimal places: 2.08 and 2.10.",
              "The ones digits are both 2. Compare tenths: 0 vs. 1.",
              "Since 1 &gt; 0 in the tenths place, 2.10 &gt; 2.08.",
              "Answer: <strong>2.1</strong> is greater."
            ]
          }
        },
        {
          heading: "Adding & Subtracting Decimals",
          paragraphs: [
            "The golden rule for adding and subtracting decimals is: <strong>line up the decimal points</strong>. Stack the numbers vertically so that the decimal points are directly above each other, then add or subtract column by column just like whole numbers.",
            "If one number has fewer decimal places, <strong>fill in trailing zeros</strong> so both numbers have the same length. For example, to compute 12.5 &minus; 3.48, rewrite as 12.50 &minus; 3.48. Now subtract normally to get 9.02.",
            "Don&rsquo;t forget to bring the decimal point straight down into your answer. A misplaced decimal point can turn a correct calculation into a wildly wrong answer!"
          ],
          example: {
            title: "Worked Example: Subtracting Decimals",
            problem: "Calculate 7.3 &minus; 2.85.",
            steps: [
              "Rewrite 7.3 as 7.30 so both numbers have two decimal places.",
              "Line up: 7.30 &minus; 2.85.",
              "Subtract hundredths: 0 &minus; 5 &rarr; borrow to get 10 &minus; 5 = 5.",
              "Subtract tenths: 2 &minus; 8 &rarr; borrow to get 12 &minus; 8 = 4.",
              "Subtract ones: 6 &minus; 2 = 4.",
              "Answer: <strong>4.45</strong>."
            ]
          }
        },
        {
          heading: "Multiplying & Dividing Decimals",
          paragraphs: [
            "To <strong>multiply decimals</strong>, temporarily ignore the decimal points and multiply the numbers as if they were whole numbers. Then count the <em>total number of decimal places</em> in both factors and place the decimal point in the product so it has that many places. For example, 1.2 &times; 0.03: multiply 12 &times; 3 = 36, total decimal places = 1 + 2 = 3, so the answer is 0.036.",
            "To <strong>divide by a decimal</strong>, make the divisor a whole number by moving its decimal point to the right. Move the dividend&rsquo;s decimal the same number of places. For example, 4.56 &divide; 0.8 becomes 45.6 &divide; 8 = 5.7.",
            "A handy shortcut: multiplying by 10, 100, or 1000 just moves the decimal point to the <em>right</em> by 1, 2, or 3 places. Dividing by those powers of 10 moves it to the <em>left</em>."
          ],
          example: {
            title: "Worked Example: Dividing Decimals",
            problem: "Calculate 6.3 &divide; 0.09.",
            steps: [
              "Move the decimal in 0.09 two places right to make it 9.",
              "Move the decimal in 6.3 the same two places right: 630.",
              "Now divide: 630 &divide; 9 = 70.",
              "Answer: <strong>70</strong>."
            ]
          }
        },
        {
          heading: "Rounding Decimals",
          paragraphs: [
            "<strong>Rounding</strong> gives us approximate values that are easier to work with. To round a decimal, (1) find the rounding place, (2) look at the digit <em>one place to the right</em>, and (3) if that digit is 5 or more, round up; otherwise, keep the rounding digit the same.",
            "For example, round 3.846 to the nearest <strong>tenth</strong>: the tenths digit is 8, the next digit is 4. Since 4 &lt; 5, keep the 8 &rarr; <strong>3.8</strong>. Round 3.846 to the nearest <strong>hundredth</strong>: the hundredths digit is 4, the next digit is 6. Since 6 &ge; 5, round up &rarr; <strong>3.85</strong>.",
            "After rounding, <strong>drop all digits</strong> to the right of the rounding place. Rounding is especially useful in real life &mdash; for example, rounding money to the nearest cent (hundredth)."
          ],
          example: {
            title: "Worked Example: Rounding to the Nearest Tenth",
            problem: "Round 12.749 to the nearest tenth.",
            steps: [
              "Find the tenths digit: 7.",
              "Look one place to the right: the hundredths digit is 4.",
              "Since 4 &lt; 5, keep the tenths digit as 7.",
              "Drop everything after the tenths place.",
              "Answer: <strong>12.7</strong>."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d17q1",
        question: "In the number 9.365, which digit is in the hundredths place?",
        type: "multiple-choice",
        options: ["9", "3", "6", "5"],
        correct: 2,
        explanation: "After the decimal: 3 is tenths, 6 is hundredths, 5 is thousandths.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d17q2",
        question: "What is 4.7 + 3.85?",
        type: "multiple-choice",
        options: ["7.55", "8.55", "8.22", "7.92"],
        correct: 1,
        explanation: "Rewrite as 4.70 + 3.85. Add: 0 + 5 = 5, 7 + 8 = 15 (carry 1), 4 + 3 + 1 = 8. Answer: 8.55.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d17q3",
        question: "Which decimal is greatest: 0.6, 0.59, or 0.605?",
        type: "multiple-choice",
        options: ["0.59", "0.6", "0.605", "They are all equal"],
        correct: 2,
        explanation: "Write as 0.600, 0.590, 0.605. Comparing: 0.605 &gt; 0.600 &gt; 0.590.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d17q4",
        question: "What is 10.2 &minus; 4.75?",
        type: "multiple-choice",
        options: ["5.45", "6.55", "5.55", "6.45"],
        correct: 0,
        explanation: "Rewrite as 10.20 &minus; 4.75. Subtract column by column (borrowing as needed): 5.45.",
        difficulty: "medium",
        hints: ["Line up the decimal points and add a trailing zero so both numbers have the same number of decimal places.", "Rewrite as 10.20 − 4.75, then subtract column by column — you'll need to borrow!"],
        category: "topic"
      },
      {
        id: "d17q5",
        question: "What is 0.4 &times; 0.05?",
        type: "multiple-choice",
        options: ["0.2", "0.02", "0.002", "2.0"],
        correct: 1,
        explanation: "Multiply 4 &times; 5 = 20. Total decimal places = 1 + 2 = 3. Place the decimal: 0.020 = 0.02.",
        difficulty: "medium",
        hints: ["Ignore the decimals and multiply the digits as whole numbers, then count total decimal places.", "Multiply 4 × 5 = 20, then count: 0.4 has 1 decimal place and 0.05 has 2, so you need 3 total."],
        category: "topic"
      },
      {
        id: "d17q6",
        question: "What is 15.6 &divide; 0.3?",
        type: "type-answer",
        answer: "52",
        accept: ["52"],
        explanation: "Move the decimal one place in both: 156 &divide; 3 = 52.",
        difficulty: "medium",
        hints: ["To divide by a decimal, make the divisor a whole number by moving its decimal point to the right.", "Move the decimal one place right in 0.3 to get 3, then do the same to 15.6 to get 156. Now divide!"],
        category: "topic"
      },
      {
        id: "d17q7",
        question: "Round 8.2451 to the nearest hundredth.",
        type: "multiple-choice",
        options: ["8.24", "8.25", "8.2", "8.245"],
        correct: 1,
        explanation: "Hundredths digit is 4. The next digit is 5. Since 5 &ge; 5, round up: 4 becomes 5. Answer: 8.25.",
        difficulty: "medium",
        hints: ["Find the hundredths digit, then look at the digit right after it to decide: round up or stay?", "The hundredths digit is 4 and the next digit is 5. Since 5 ≥ 5, you round up."],
        category: "topic"
      },
      {
        id: "d17q8",
        question: "What is 2.5 &times; 3.14?",
        type: "multiple-choice",
        options: ["7.85", "7.75", "8.35", "6.85"],
        correct: 0,
        explanation: "Multiply 25 &times; 314 = 7850. Total decimal places = 1 + 2 = 3. Place the decimal: 7.850 = 7.85.",
        difficulty: "hard",
        hints: ["Treat both numbers as whole numbers first, multiply, then put the decimal point back.", "Multiply 25 × 314 = 7850. Count decimal places: 2.5 has 1 and 3.14 has 2, so place the decimal 3 spots from the right."],
        category: "topic"
      },
      {
        id: "d17q9",
        question: "What is 0.144 &divide; 0.012?",
        type: "multiple-choice",
        options: ["1.2", "12", "120", "0.12"],
        correct: 1,
        explanation: "Move the decimal 3 places in both: 144 &divide; 12 = 12.",
        difficulty: "hard",
        hints: ["Make the divisor a whole number by moving the decimal point to the right — do the same to the dividend.", "Move the decimal 3 places right in both: 0.012 becomes 12 and 0.144 becomes 144. Now divide 144 ÷ 12."],
        category: "topic"
      },
      {
        id: "d17q10",
        question: "Solve: x + 5 &lt; 12. What is the solution? <em>(Review: inequalities)</em>",
        type: "multiple-choice",
        options: ["x &lt; 7", "x &gt; 7", "x &lt; 17", "x &gt; 17"],
        correct: 0,
        explanation: "Subtract 5 from both sides: x &lt; 7. No sign flip needed since we only subtracted.",
        difficulty: "hard",
        hints: ["Solve this like a regular equation, but keep the inequality sign. Do you need to flip it here?", "Subtract 5 from both sides. Since you're not multiplying or dividing by a negative, the sign stays the same."],
        category: "review"
      }
    ]
  },

  day18: {
    lesson: {
      title: "Decimals \u2194 Fractions & Repeating Decimals",
      subtitle: "Convert between fractions and decimals, and decode the mystery of repeating decimals",
      sections: [
        {
          heading: "Converting Fractions to Decimals",
          paragraphs: [
            "Every fraction can be written as a decimal &mdash; just <strong>divide the numerator by the denominator</strong>. For example, 3/8 = 3 &divide; 8 = 0.375. You can use long division or a calculator.",
            "Some fractions produce decimals that <strong>terminate</strong> (end), like 1/4 = 0.25. Others produce decimals that <strong>repeat</strong> forever, like 1/3 = 0.333&hellip; A fraction terminates when its denominator (in lowest terms) has only factors of 2 and/or 5. If the denominator has any other prime factor, the decimal repeats.",
            "It&rsquo;s worth memorizing common conversions: <strong>1/2 = 0.5</strong>, <strong>1/4 = 0.25</strong>, <strong>3/4 = 0.75</strong>, <strong>1/5 = 0.2</strong>, <strong>1/8 = 0.125</strong>, <strong>3/8 = 0.375</strong>, <strong>1/3 &approx; 0.333</strong>, and <strong>2/3 &approx; 0.667</strong>."
          ],
          example: {
            title: "Worked Example: Fraction to Decimal",
            problem: "Convert 7/8 to a decimal.",
            steps: [
              "Divide 7 by 8 using long division.",
              "8 goes into 7.000: 8 &times; 0.8 = 6.4, remainder 0.6. Then 8 &times; 0.07 = 0.56, remainder 0.04. Then 8 &times; 0.005 = 0.04.",
              "7 &divide; 8 = 0.875.",
              "Since 8 = 2<sup>3</sup> (only factors of 2), this decimal terminates. Answer: <strong>0.875</strong>."
            ]
          }
        },
        {
          heading: "Converting Decimals to Fractions",
          paragraphs: [
            "To convert a <strong>terminating decimal</strong> to a fraction, read its place value and write it over the appropriate power of 10. For example, 0.45 is &ldquo;forty-five hundredths,&rdquo; so it equals 45/100.",
            "Always <strong>simplify</strong> the resulting fraction. For 45/100, the GCD of 45 and 100 is 5, so divide both by 5 to get 9/20. You can use prime factorization or the Euclidean algorithm from Day 9 to find the GCD.",
            "Some decimals are quick to convert: 0.5 = 1/2, 0.25 = 1/4, 0.75 = 3/4, 0.2 = 1/5, 0.125 = 1/8. Recognizing these on sight speeds up your work considerably."
          ],
          example: {
            title: "Worked Example: Decimal to Fraction",
            problem: "Convert 0.375 to a fraction in simplest form.",
            steps: [
              "0.375 = 375/1000 (three decimal places &rarr; over 1000).",
              "Find GCD(375, 1000). Factor: 375 = 3 &times; 5<sup>3</sup> and 1000 = 2<sup>3</sup> &times; 5<sup>3</sup>. GCD = 5<sup>3</sup> = 125.",
              "Divide both by 125: 375 &divide; 125 = 3 and 1000 &divide; 125 = 8.",
              "Answer: 0.375 = <strong>3/8</strong>."
            ]
          }
        },
        {
          heading: "Repeating Decimals",
          paragraphs: [
            "A <strong>repeating decimal</strong> has a block of digits that repeats forever. We write it with a bar (overline) over the repeating block: 0.333&hellip; = 0.<span style=\"text-decoration:overline\">3</span> and 0.142857142857&hellip; = 0.<span style=\"text-decoration:overline\">142857</span>. Common repeating decimals include 1/3 = 0.<span style=\"text-decoration:overline\">3</span>, 1/6 = 0.1<span style=\"text-decoration:overline\">6</span>, 1/9 = 0.<span style=\"text-decoration:overline\">1</span>, and 1/11 = 0.<span style=\"text-decoration:overline\">09</span>.",
            "To <strong>convert a repeating decimal to a fraction</strong>, use an algebraic trick. Let x equal the repeating decimal, then multiply x by a power of 10 that shifts the repeating block. Subtract the original equation to eliminate the repeating part, and solve for x.",
            "For example, let x = 0.272727&hellip; Multiply by 100: 100x = 27.2727&hellip; Subtract: 100x &minus; x = 27.2727&hellip; &minus; 0.2727&hellip; &rarr; 99x = 27 &rarr; x = 27/99 = 3/11. This method works for <em>any</em> repeating decimal!"
          ],
          example: {
            title: "Worked Example: Repeating Decimal to Fraction",
            problem: "Convert 0.333&hellip; to a fraction.",
            steps: [
              "Let x = 0.333&hellip;",
              "Multiply both sides by 10: 10x = 3.333&hellip;",
              "Subtract the original: 10x &minus; x = 3.333&hellip; &minus; 0.333&hellip; &rarr; 9x = 3.",
              "Divide by 9: x = 3/9 = 1/3.",
              "Answer: 0.333&hellip; = <strong>1/3</strong>."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d18q1",
        question: "What is 1/4 as a decimal?",
        type: "multiple-choice",
        options: ["0.14", "0.4", "0.25", "0.75"],
        correct: 2,
        explanation: "1 &divide; 4 = 0.25. This is a key conversion to memorize.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d18q2",
        question: "What is 0.6 as a fraction in simplest form?",
        type: "multiple-choice",
        options: ["6/100", "6/10", "3/5", "2/3"],
        correct: 2,
        explanation: "0.6 = 6/10. Simplify by dividing both by 2: 3/5.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d18q3",
        question: "Which fraction produces a terminating decimal?",
        type: "multiple-choice",
        options: ["1/3", "1/6", "1/8", "1/7"],
        correct: 2,
        explanation: "1/8 terminates because 8 = 2<sup>3</sup> has only factors of 2. The others have prime factors other than 2 and 5.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d18q4",
        question: "What is 5/6 as a decimal?",
        type: "multiple-choice",
        options: ["0.833&hellip;", "0.666&hellip;", "0.856", "0.8"],
        correct: 0,
        explanation: "5 &divide; 6 = 0.8333&hellip; The 3 repeats forever.",
        difficulty: "medium",
        hints: ["To convert a fraction to a decimal, divide the numerator by the denominator.", "Divide 5 by 6 using long division — watch for a repeating pattern in the decimal."],
        category: "topic"
      },
      {
        id: "d18q5",
        question: "What is 0.125 as a fraction in simplest form?",
        type: "multiple-choice",
        options: ["1/4", "1/8", "1/5", "125/10"],
        correct: 1,
        explanation: "0.125 = 125/1000. GCD(125, 1000) = 125. So 125/1000 = 1/8.",
        difficulty: "medium",
        hints: ["Read the place value: 0.125 is 'one hundred twenty-five thousandths,' so write it over 1000.", "Write 125/1000, then simplify by finding the GCD of 125 and 1000."],
        category: "topic"
      },
      {
        id: "d18q6",
        question: "If x = 0.444&hellip;, what is 10x &minus; x?",
        type: "multiple-choice",
        options: ["4.444&hellip;", "4", "0.4", "3.6"],
        correct: 1,
        explanation: "10x = 4.444&hellip; and x = 0.444&hellip; so 10x &minus; x = 4.444&hellip; &minus; 0.444&hellip; = 4.",
        difficulty: "medium",
        hints: ["This is the algebraic trick for repeating decimals — multiply x by 10, then subtract the original x.", "Calculate 10x = 4.444... and x = 0.444..., then subtract them to cancel the repeating part."],
        category: "topic"
      },
      {
        id: "d18q7",
        question: "What fraction equals 0.272727&hellip;?",
        type: "multiple-choice",
        options: ["27/100", "3/11", "27/99", "Both B and C"],
        correct: 3,
        explanation: "Let x = 0.2727&hellip; Then 100x = 27.2727&hellip; so 99x = 27, giving x = 27/99 = 3/11. Both are correct.",
        difficulty: "hard",
        hints: ["Use the repeating-decimal-to-fraction trick: let x = the decimal, multiply by a power of 10 that shifts the repeating block, then subtract.", "Since '27' is a 2-digit repeating block, multiply by 100: 100x = 27.2727... Then subtract x from 100x."],
        category: "topic"
      },
      {
        id: "d18q8",
        question: "Which of these decimals is a repeating decimal?",
        type: "multiple-choice",
        options: ["0.75", "0.125", "0.1666&hellip;", "0.5"],
        correct: 2,
        explanation: "0.1666&hellip; = 1/6 is repeating (the 6 repeats). The others terminate.",
        difficulty: "hard",
        hints: ["A repeating decimal has digits that go on forever in a pattern. Look for the '...' that signals this.", "Check each option: does it end neatly, or does a digit keep repeating? The one with '...' is the repeating decimal."],
        category: "topic"
      },
      {
        id: "d18q9",
        question: "What is 3.5 &times; 0.4? <em>(Review: decimal multiplication)</em>",
        type: "multiple-choice",
        options: ["14.0", "1.4", "0.14", "1.04"],
        correct: 1,
        explanation: "Multiply 35 &times; 4 = 140. Total decimal places = 1 + 1 = 2. Answer: 1.40 = 1.4.",
        difficulty: "hard",
        hints: ["Multiply the digits as whole numbers, then count the total decimal places from both factors.", "35 × 4 = 140. Both 3.5 and 0.4 have 1 decimal place each, so place the decimal 2 spots from the right."],
        category: "review"
      },
      {
        id: "d18q10",
        question: "What is 8.1 &minus; 3.65? <em>(Review: decimal subtraction)</em>",
        type: "multiple-choice",
        options: ["4.45", "5.55", "4.55", "5.45"],
        correct: 0,
        explanation: "Rewrite as 8.10 &minus; 3.65. Subtract: 10 &minus; 5 = 5, 0 &minus; 6 (borrow) &rarr; 10 &minus; 6 = 4, 7 &minus; 3 = 4. Answer: 4.45.",
        difficulty: "medium",
        hints: ["Line up the decimal points and pad with zeros so both numbers have the same length.", "Rewrite 8.1 as 8.10, then subtract 3.65 column by column — you'll need to borrow."],
        category: "review"
      }
    ]
  },

  day19: {
    lesson: {
      title: "Ratios, Multi-way Ratios & Proportions",
      subtitle: "Compare quantities with ratios and use proportions to solve for unknowns",
      sections: [
        {
          heading: "Ratios",
          paragraphs: [
            "A <strong>ratio</strong> compares two quantities and tells you how much of one thing there is relative to another. If a class has 12 boys and 8 girls, the ratio of boys to girls is 12 to 8. There are three common ways to write a ratio: <strong>12 : 8</strong>, <strong>12 to 8</strong>, or <strong>12/8</strong>.",
            "Just like fractions, ratios should be <strong>simplified</strong>. Divide both parts by their GCD. Since GCD(12, 8) = 4, the ratio 12 : 8 simplifies to <strong>3 : 2</strong>. This means for every 3 boys, there are 2 girls.",
            "The <strong>order</strong> of a ratio matters! The ratio of boys to girls (3 : 2) is different from the ratio of girls to boys (2 : 3). Always pay close attention to what is being compared to what."
          ],
          example: {
            title: "Worked Example: Simplifying a Ratio",
            problem: "A recipe uses 6 cups of flour and 4 cups of sugar. Write the ratio of flour to sugar in simplest form.",
            steps: [
              "The ratio of flour to sugar is 6 : 4.",
              "Find GCD(6, 4) = 2.",
              "Divide both parts by 2: 6 &divide; 2 = 3 and 4 &divide; 2 = 2.",
              "Answer: The ratio is <strong>3 : 2</strong>."
            ]
          }
        },
        {
          heading: "Multi-way Ratios",
          paragraphs: [
            "A <strong>multi-way ratio</strong> compares three or more quantities at once. For example, if a trail mix uses 2 cups of nuts, 3 cups of raisins, and 5 cups of cereal, the ratio is 2 : 3 : 5.",
            "Sometimes you need to <strong>combine two ratios</strong> that share a common quantity. If a : b = 2 : 3 and b : c = 3 : 5, since the <em>b</em> part is already 3 in both ratios, you can directly combine them: a : b : c = <strong>2 : 3 : 5</strong>.",
            "But what if the shared quantity doesn&rsquo;t match? For instance, if a : b = 2 : 3 and b : c = 4 : 7, the <em>b</em> values (3 and 4) differ. Find the LCM of 3 and 4, which is 12. Scale the first ratio by 4: a : b = 8 : 12. Scale the second by 3: b : c = 12 : 21. Now combine: a : b : c = <strong>8 : 12 : 21</strong>."
          ],
          example: {
            title: "Worked Example: Combining Two Ratios",
            problem: "If x : y = 3 : 5 and y : z = 5 : 2, find x : y : z.",
            steps: [
              "The shared quantity is y. In the first ratio y = 5; in the second y = 5.",
              "Since the y values already match, combine directly.",
              "x : y : z = <strong>3 : 5 : 2</strong>.",
              "Check: x : y = 3 : 5 &#10003; and y : z = 5 : 2 &#10003;."
            ]
          }
        },
        {
          heading: "Proportions",
          paragraphs: [
            "A <strong>proportion</strong> is an equation that says two ratios are equal: a/b = c/d. For example, 2/3 = 8/12 is a proportion because both ratios simplify to the same value.",
            "The most powerful tool for solving proportions is <strong>cross-multiplication</strong>: if a/b = c/d, then a &times; d = b &times; c. This turns a fraction equation into a simpler equation you can solve. For example, if 3/x = 9/15, cross-multiply: 3 &times; 15 = 9 &times; x &rarr; 45 = 9x &rarr; x = 5.",
            "To <strong>check</strong> whether two ratios form a proportion, cross-multiply and see if the cross-products are equal. For example, do 4/6 and 10/15 form a proportion? Check: 4 &times; 15 = 60 and 6 &times; 10 = 60. Since 60 = 60, yes &mdash; they are proportional."
          ],
          example: {
            title: "Worked Example: Solving a Proportion",
            problem: "Solve for n: 5/8 = n/24.",
            steps: [
              "Cross-multiply: 5 &times; 24 = 8 &times; n.",
              "Calculate: 120 = 8n.",
              "Divide both sides by 8: n = 15.",
              "Check: 5/8 = 0.625 and 15/24 = 0.625. &#10003; Answer: <strong>n = 15</strong>."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d19q1",
        question: "Simplify the ratio 18 : 12.",
        type: "multiple-choice",
        options: ["9 : 6", "6 : 4", "3 : 2", "2 : 3"],
        correct: 2,
        explanation: "GCD(18, 12) = 6. Divide both by 6: 18 &divide; 6 = 3 and 12 &divide; 6 = 2. Ratio = 3 : 2.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d19q2",
        question: "A bag has 5 red marbles and 15 blue marbles. What is the ratio of red to total marbles in simplest form?",
        type: "multiple-choice",
        options: ["1 : 3", "1 : 4", "5 : 15", "5 : 20"],
        correct: 1,
        explanation: "Total marbles = 5 + 15 = 20. Ratio = 5 : 20 = 1 : 4.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d19q3",
        question: "Solve: 4/7 = x/21.",
        type: "multiple-choice",
        options: ["x = 8", "x = 12", "x = 3", "x = 14"],
        correct: 1,
        explanation: "Cross-multiply: 4 &times; 21 = 7 &times; x &rarr; 84 = 7x &rarr; x = 12.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d19q4",
        question: "If a : b = 4 : 5 and b : c = 5 : 3, what is a : b : c?",
        type: "multiple-choice",
        options: ["4 : 5 : 3", "4 : 3 : 5", "8 : 10 : 3", "4 : 5 : 15"],
        correct: 0,
        explanation: "The b values already match (both 5), so combine directly: a : b : c = 4 : 5 : 3.",
        difficulty: "medium",
        hints: ["Look at the shared quantity (b) in both ratios — if it's the same number, you can combine them directly.", "Both ratios have b = 5, so just line them up: a : b : c = 4 : 5 : 3."],
        category: "topic"
      },
      {
        id: "d19q5",
        question: "Do 6/9 and 14/21 form a proportion?",
        type: "multiple-choice",
        options: ["Yes", "No", "Only if simplified", "Cannot determine"],
        correct: 0,
        explanation: "Cross-multiply: 6 &times; 21 = 126 and 9 &times; 14 = 126. Since 126 = 126, they form a proportion. (Both equal 2/3.)",
        difficulty: "medium",
        hints: ["To check if two ratios form a proportion, use cross-multiplication and see if the products are equal.", "Compute 6 × 21 and 9 × 14 — if those two products match, the ratios are proportional."],
        category: "topic"
      },
      {
        id: "d19q6",
        question: "If the ratio of cats to dogs at a shelter is 3 : 5 and there are 24 cats, how many dogs are there?",
        type: "multiple-choice",
        options: ["30", "40", "15", "45"],
        correct: 1,
        explanation: "Set up the proportion 3/5 = 24/d. Cross-multiply: 3d = 120, so d = 40.",
        difficulty: "medium",
        hints: ["Set up a proportion using the ratio and the known quantity, then solve for the unknown.", "Write 3/5 = 24/d, then cross-multiply to find d."],
        category: "topic"
      },
      {
        id: "d19q7",
        question: "If a : b = 2 : 3 and b : c = 4 : 7, what is a : b : c?",
        type: "multiple-choice",
        options: ["2 : 3 : 7", "8 : 12 : 21", "6 : 12 : 21", "2 : 4 : 7"],
        correct: 1,
        explanation: "LCM(3, 4) = 12. Scale first ratio by 4: 8 : 12. Scale second by 3: 12 : 21. Combine: 8 : 12 : 21.",
        difficulty: "hard",
        hints: ["When the shared quantity (b) doesn't match in both ratios, find the LCM so you can scale them to match.", "LCM of 3 and 4 is 12. Scale the first ratio by 4 and the second by 3 so both have b = 12."],
        category: "topic"
      },
      {
        id: "d19q8",
        question: "Solve for y: (y + 2)/6 = 5/3.",
        type: "multiple-choice",
        options: ["y = 8", "y = 10", "y = 7", "y = 12"],
        correct: 0,
        explanation: "Cross-multiply: 3(y + 2) = 30 &rarr; 3y + 6 = 30 &rarr; 3y = 24 &rarr; y = 8.",
        difficulty: "hard",
        hints: ["Use cross-multiplication to clear the fractions, then solve the resulting equation.", "Cross-multiply: 3 × (y + 2) = 6 × 5. Distribute the 3, then solve for y."],
        category: "topic"
      },
      {
        id: "d19q9",
        question: "What fraction equals the repeating decimal 0.666&hellip;? <em>(Review: repeating decimals)</em>",
        type: "multiple-choice",
        options: ["3/5", "2/3", "6/10", "6/9"],
        correct: 1,
        explanation: "Let x = 0.666&hellip;, then 10x = 6.666&hellip;, so 9x = 6, x = 6/9 = 2/3.",
        difficulty: "hard",
        hints: ["Use the repeating decimal trick: let x = the decimal, multiply by 10, and subtract.", "Let x = 0.666..., then 10x = 6.666.... Subtract x from 10x to cancel the repeating part."],
        category: "review"
      },
      {
        id: "d19q10",
        question: "What is 0.72 as a fraction in simplest form? <em>(Review: decimals to fractions)</em>",
        type: "multiple-choice",
        options: ["72/100", "36/50", "18/25", "9/12"],
        correct: 2,
        explanation: "0.72 = 72/100. GCD(72, 100) = 4. Divide both by 4: 18/25.",
        difficulty: "medium",
        hints: ["Write the decimal as a fraction over a power of 10, then simplify.", "0.72 = 72/100. Now find the GCD of 72 and 100 to reduce it."],
        category: "review"
      }
    ]
  },

  day20: {
    lesson: {
      title: "Unit Conversions, Speed & Rates",
      subtitle: "Master rates, unit conversions, and the distance-rate-time relationship",
      sections: [
        {
          heading: "Rates & Unit Rates",
          paragraphs: [
            "A <strong>rate</strong> is a special ratio that compares two quantities with <em>different units</em>. For example, driving 150 miles in 3 hours is a rate of 150 miles / 3 hours. If you earn $45 for 5 hours of work, that&rsquo;s a rate of $45 / 5 hours.",
            "A <strong>unit rate</strong> is a rate where the denominator is 1. To find a unit rate, divide the numerator by the denominator. So 150 miles / 3 hours = <strong>50 miles per hour</strong>, and $45 / 5 hours = <strong>$9 per hour</strong>. Unit rates make it easy to compare.",
            "Unit rates are perfect for <strong>comparing deals</strong>. If Store A sells 6 apples for $3.00 and Store B sells 8 apples for $3.60, find the unit price: Store A = $3.00 &divide; 6 = $0.50/apple and Store B = $3.60 &divide; 8 = $0.45/apple. Store B is the better deal!"
          ],
          example: {
            title: "Worked Example: Finding the Better Deal",
            problem: "Brand X: 12 oz for $2.40. Brand Y: 16 oz for $3.52. Which is the better buy?",
            steps: [
              "Unit price of Brand X: $2.40 &divide; 12 = $0.20 per oz.",
              "Unit price of Brand Y: $3.52 &divide; 16 = $0.22 per oz.",
              "Compare: $0.20 &lt; $0.22.",
              "Answer: <strong>Brand X</strong> is the better buy at $0.20 per ounce."
            ]
          }
        },
        {
          heading: "Unit Conversions",
          paragraphs: [
            "<strong>Unit conversion</strong> means changing a measurement from one unit to another without changing the actual amount. The key technique is to multiply by a <strong>conversion factor</strong> &mdash; a fraction equal to 1 that relates the two units. For example, since 1 foot = 12 inches, the conversion factor is 12 in / 1 ft (or 1 ft / 12 in).",
            "Choose the conversion factor so the unit you want to <em>cancel</em> is in the opposite position (numerator or denominator). For instance, to convert 5 feet to inches: 5 ft &times; (12 in / 1 ft) = 60 in. The &ldquo;ft&rdquo; cancels out, leaving &ldquo;in.&rdquo; This approach is called <strong>dimensional analysis</strong>.",
            "Common conversions to know: <strong>1 mile = 5280 feet</strong>, <strong>1 hour = 60 minutes</strong>, <strong>1 minute = 60 seconds</strong>, <strong>1 yard = 3 feet</strong>, <strong>1 gallon = 4 quarts</strong>, <strong>1 pound = 16 ounces</strong>, and <strong>1 kilogram &approx; 2.2 pounds</strong>."
          ],
          example: {
            title: "Worked Example: Multi-Step Unit Conversion",
            problem: "Convert 3 hours to seconds.",
            steps: [
              "Start with 3 hours.",
              "Convert hours to minutes: 3 hr &times; (60 min / 1 hr) = 180 min.",
              "Convert minutes to seconds: 180 min &times; (60 sec / 1 min) = 10,800 sec.",
              "Answer: 3 hours = <strong>10,800 seconds</strong>."
            ]
          }
        },
        {
          heading: "Speed, Distance & Time",
          paragraphs: [
            "The relationship between distance, rate (speed), and time is captured by the formula <strong>d = r &times; t</strong>, where d = distance, r = rate (speed), and t = time. From this single formula you can solve for any variable: <strong>r = d &divide; t</strong> and <strong>t = d &divide; r</strong>.",
            "For example, if a car travels at 60 mph for 2.5 hours, the distance is d = 60 &times; 2.5 = 150 miles. If you know the distance (200 miles) and speed (50 mph), the time is t = 200 &divide; 50 = 4 hours.",
            "For <strong>multi-step rate problems</strong>, you might need to combine two trips. If you drive 120 miles at 60 mph and then 80 miles at 40 mph, find each time separately: t<sub>1</sub> = 120 &divide; 60 = 2 hr and t<sub>2</sub> = 80 &divide; 40 = 2 hr. Total time = 4 hr, total distance = 200 miles, average speed = 200 &divide; 4 = <strong>50 mph</strong> (not the average of 60 and 40!)."
          ],
          practice: [
            { type: "type-answer", prompt: "A car drives at 50 mph for 3 hours. How many miles does it travel?", answer: "150", accept: ["150"], explanation: "d = r &times; t = 50 &times; 3 = 150 miles." },
            { type: "type-answer", prompt: "A bike covers 24 miles in 4 hours. What is its speed in mph?", answer: "6", accept: ["6"], explanation: "r = d &divide; t = 24 &divide; 4 = 6 mph." },
            { type: "multiple-quick", prompt: "Which formula finds how long a trip takes?", options: ["d = r &times; t", "t = d &divide; r", "r = d &divide; t"], correct: 1, explanation: "To find time, rearrange d = rt to get t = d &divide; r." }
          ],
          example: {
            title: "Worked Example: Solving for Time",
            problem: "A train travels 360 miles at a speed of 90 miles per hour. How long does the trip take?",
            steps: [
              "Use the formula t = d &divide; r.",
              "Plug in: t = 360 &divide; 90.",
              "Calculate: t = 4.",
              "Answer: The trip takes <strong>4 hours</strong>."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d20q1",
        question: "A car travels 240 miles in 4 hours. What is its speed in mph?",
        type: "type-answer",
        answer: "60",
        accept: ["60", "60 mph", "60mph"],
        explanation: "Speed = distance &divide; time = 240 &divide; 4 = 60 mph.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d20q2",
        question: "Which is the better deal: 5 lb for $4.00 or 8 lb for $6.00?",
        type: "multiple-choice",
        options: ["5 lb for $4.00", "8 lb for $6.00", "They are the same", "Cannot tell"],
        correct: 1,
        explanation: "Unit prices: $4.00 &divide; 5 = $0.80/lb vs. $6.00 &divide; 8 = $0.75/lb. $0.75 &lt; $0.80, so 8 lb for $6.00 is better.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d20q3",
        question: "How many inches are in 4 feet?",
        type: "multiple-choice",
        options: ["36", "44", "48", "52"],
        correct: 2,
        explanation: "1 foot = 12 inches. So 4 &times; 12 = 48 inches.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d20q4",
        question: "A runner covers 5 miles in 40 minutes. What is her speed in miles per hour?",
        type: "multiple-choice",
        options: ["6 mph", "7.5 mph", "8 mph", "10 mph"],
        correct: 1,
        explanation: "40 minutes = 40/60 = 2/3 hour. Speed = 5 &divide; (2/3) = 5 &times; 3/2 = 7.5 mph.",
        difficulty: "medium",
        hints: ["Speed is in miles per hour, but the time is in minutes — you'll need to convert first!", "Convert 40 minutes to hours: 40/60 = 2/3 hour. Then use speed = distance ÷ time."],
        category: "topic"
      },
      {
        id: "d20q5",
        question: "Convert 2.5 gallons to quarts. (1 gallon = 4 quarts)",
        type: "multiple-choice",
        options: ["8 quarts", "10 quarts", "6 quarts", "12 quarts"],
        correct: 1,
        explanation: "2.5 gallons &times; 4 quarts/gallon = 10 quarts.",
        difficulty: "medium",
        hints: ["Use the conversion factor: there are 4 quarts in every gallon.", "Multiply 2.5 by 4 to convert gallons to quarts."],
        category: "topic"
      },
      {
        id: "d20q6",
        question: "If d = r &times; t, and a cyclist rides at 12 mph for 3.5 hours, how far does she travel?",
        type: "multiple-choice",
        options: ["36 miles", "38 miles", "42 miles", "45 miles"],
        correct: 2,
        explanation: "d = 12 &times; 3.5 = 42 miles.",
        difficulty: "medium",
        hints: ["Use the formula d = r × t. You already have the rate and the time!", "Plug in: d = 12 × 3.5. Multiply the whole number part and the decimal part separately if it helps."],
        category: "topic"
      },
      {
        id: "d20q7",
        question: "How many seconds are in 2 hours?",
        type: "multiple-choice",
        options: ["3,600", "7,200", "120", "72,000"],
        correct: 1,
        explanation: "2 hours &times; 60 min/hr &times; 60 sec/min = 7,200 seconds.",
        difficulty: "medium",
        hints: ["Convert step by step: hours to minutes first, then minutes to seconds.", "2 hours × 60 = 120 minutes. Now multiply 120 by 60 to get seconds."],
        category: "topic"
      },
      {
        id: "d20q8",
        question: "A plane flies 600 miles at 300 mph, then 400 miles at 200 mph. What is the average speed for the whole trip?",
        type: "multiple-choice",
        options: ["250 mph", "240 mph", "260 mph", "200 mph"],
        correct: 0,
        explanation: "Time 1 = 600 &divide; 300 = 2 hr. Time 2 = 400 &divide; 200 = 2 hr. Total: 1000 miles in 4 hours. Average speed = 1000 &divide; 4 = 250 mph.",
        difficulty: "hard",
        hints: ["Average speed is NOT just the average of the two speeds — it's total distance ÷ total time.", "Find each leg's time separately (t = d ÷ r), add up total distance and total time, then divide."],
        category: "topic"
      },
      {
        id: "d20q9",
        question: "A factory produces widgets at a rate of 150 per hour. How many hours does it need to produce 2,400 widgets?",
        type: "multiple-choice",
        options: ["12", "14", "16", "18"],
        correct: 2,
        explanation: "Time = total &divide; rate = 2400 &divide; 150 = 16 hours.",
        difficulty: "hard",
        hints: ["This is a rate problem: time = total amount ÷ rate.", "Divide 2,400 widgets by the rate of 150 widgets per hour to find the number of hours."],
        category: "topic"
      },
      {
        id: "d20q10",
        question: "Solve for x: x/6 = 15/9. <em>(Review: proportions)</em>",
        type: "multiple-choice",
        options: ["x = 8", "x = 10", "x = 12", "x = 9"],
        correct: 1,
        explanation: "Cross-multiply: 9x = 6 &times; 15 = 90. Divide by 9: x = 10.",
        difficulty: "hard",
        hints: ["Use cross-multiplication to solve a proportion: multiply diagonally and set the products equal.", "Cross-multiply: 9 × x = 6 × 15. Compute the right side, then divide to find x."],
        category: "review"
      }
    ]
  }
};
