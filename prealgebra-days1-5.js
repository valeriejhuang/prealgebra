export const DAYS_1_5 = {

  // ============================================================
  // DAY 1: Whole Numbers, Place Value & PEMDAS
  // ============================================================
  day1: {
    lesson: {
      title: "Whole Numbers, Place Value & PEMDAS",
      subtitle: "Master place value, rounding, and the rules that tell you what to calculate first",
      sections: [
        {
          heading: "Place Value & Rounding",
          paragraphs: [
            "Every digit in a number has a <strong>place value</strong> based on its position. Starting from the right, the places are: ones, tens, hundreds, thousands, ten-thousands, hundred-thousands, millions, ten-millions, hundred-millions, billions, and so on. Each place is <strong>10 times</strong> the one to its right. For example, in the number 5,832, the 5 is in the <em>thousands</em> place (worth 5,000), the 8 is in the <em>hundreds</em> place (worth 800), the 3 is in the <em>tens</em> place (worth 30), and the 2 is in the <em>ones</em> place (worth 2). Written out, 5,832 = 5,000 + 800 + 30 + 2 &mdash; this is called <strong>expanded form</strong>.",
            "Rounding makes big numbers easier to work with. To round a number, first find the place you are rounding to. Then look at the digit <strong>one place to the right</strong>. If that digit is 5 or greater, round up (add 1 to the rounding place). If it is less than 5, round down (keep the rounding place the same). Replace all digits to the right with zeros.",
            "Rounding is used all the time in real life &mdash; when estimating the cost of groceries, reporting a city&rsquo;s population, or checking if your answer to a math problem is reasonable. For instance, if a stadium holds 67,489 people, a news reporter might round and say &ldquo;about 67,500&rdquo; or even &ldquo;roughly 67,000.&rdquo;"
          ],
          example: {
            title: "Worked Example: Rounding to the Nearest Thousand",
            problem: "Round 47,362 to the nearest thousand.",
            steps: [
              "Find the thousands digit: <strong>7</strong> (in 4<strong>7</strong>,362).",
              "Look one place to the right &mdash; the hundreds digit is <strong>3</strong>.",
              "Since 3 &lt; 5, we round <em>down</em>: keep the 7.",
              "Replace hundreds, tens, and ones with zeros.",
              "Answer: <strong>47,000</strong>"
            ]
          }
        },
        {
          heading: "Order of Operations (PEMDAS)",
          paragraphs: [
            "When a math expression has more than one operation, you need rules so everyone gets the same answer. That set of rules is called the <strong>order of operations</strong>. A handy way to remember it is the acronym <strong>PEMDAS</strong> (some people say &ldquo;Please Excuse My Dear Aunt Sally&rdquo;).",
            "<strong>P</strong> &ndash; Parentheses first<br><strong>E</strong> &ndash; Exponents (powers) next<br><strong>M / D</strong> &ndash; Multiplication and Division, left to right<br><strong>A / S</strong> &ndash; Addition and Subtraction, left to right<br><br><em>Important:</em> Multiplication and division are done at the <em>same level</em> &mdash; just work left to right. The same goes for addition and subtraction. A common mistake is thinking multiplication always comes before division; it doesn&rsquo;t! Whichever appears first from left to right goes first.",
            "Think of PEMDAS like traffic rules. Without them, two people could look at the same problem and get different answers. With the rules, everyone agrees. For example, 3 + 4 &times; 2 equals <strong>11</strong> (multiply first), <em>not</em> 14 (if you wrongly add first)."
          ],
          example: {
            title: "Worked Example: Applying PEMDAS",
            problem: "Evaluate: 18 &divide; 3 &times; 2 + 5",
            steps: [
              "Are there parentheses or exponents? No.",
              "Multiplication/Division left to right: 18 &divide; 3 = <strong>6</strong>.",
              "Continue left to right: 6 &times; 2 = <strong>12</strong>.",
              "Now Addition/Subtraction: 12 + 5 = <strong>17</strong>.",
              "Answer: <strong>17</strong>"
            ]
          }
        },
        {
          heading: "Multi-Step Expressions with Parentheses",
          paragraphs: [
            "Parentheses are the most powerful tool in the order of operations &mdash; they always go first! Anything inside parentheses gets calculated before anything outside. If there are parentheses inside other parentheses (called <em>nested</em> parentheses), work from the <strong>innermost</strong> pair outward.",
            "Parentheses can completely change an answer. Compare: 2 + 3 &times; 4 = 2 + 12 = <strong>14</strong>, but (2 + 3) &times; 4 = 5 &times; 4 = <strong>20</strong>. The parentheses forced the addition to happen first! This is why writing clear expressions matters &mdash; parentheses tell the reader exactly what you mean.",
            "After handling parentheses, continue with the rest of PEMDAS as usual: exponents, then multiplication/division left to right, then addition/subtraction left to right."
          ],
          example: {
            title: "Worked Example: Nested Parentheses",
            problem: "Evaluate: 2 &times; (3 + (12 &divide; 4)) &minus; 1",
            steps: [
              "<strong>Innermost parentheses first:</strong> 12 &divide; 4 = <strong>3</strong>.",
              "The expression becomes: 2 &times; (3 + 3) &minus; 1.",
              "<strong>Outer parentheses:</strong> 3 + 3 = <strong>6</strong>.",
              "Now: 2 &times; 6 &minus; 1.",
              "Multiply first: 2 &times; 6 = <strong>12</strong>. Then subtract: 12 &minus; 1 = <strong>11</strong>.",
              "Answer: <strong>11</strong>"
            ]
          }
        },
        {
          heading: "Commutative & Associative Properties",
          paragraphs: [
            "Have you noticed that 3 + 5 and 5 + 3 both equal 8? That&rsquo;s the <strong>commutative property</strong> &mdash; you can swap the order of numbers when adding or multiplying and the answer stays the same. In symbols: a + b = b + a, and a &times; b = b &times; a. However, this does <em>not</em> work for subtraction or division! 7 &minus; 2 = 5, but 2 &minus; 7 = &minus;5.",
            "The <strong>associative property</strong> says you can re-group numbers when adding or multiplying. For example, (2 + 3) + 4 = 2 + (3 + 4) &mdash; both equal 9. Likewise, (2 &times; 3) &times; 4 = 2 &times; (3 &times; 4) &mdash; both equal 24. This is handy when you want to group numbers to make mental math easier.",
            "Why do mathematicians care about these properties? Because they explain <em>why</em> arithmetic works, not just <em>how</em>. When you later learn algebra, these properties let you rearrange equations and simplify expressions. They are the foundation of all the math to come!"
          ],
          example: {
            title: "Worked Example: Using Properties for Mental Math",
            problem: "Calculate 25 &times; 13 &times; 4 quickly using the commutative and associative properties.",
            steps: [
              "Notice that 25 &times; 4 = 100, which is an easy number to work with.",
              "Rearrange using the commutative property: 25 &times; 13 &times; 4 = 25 &times; 4 &times; 13.",
              "Group using the associative property: (25 &times; 4) &times; 13 = 100 &times; 13.",
              "Multiply: 100 &times; 13 = <strong>1,300</strong>.",
              "Answer: <strong>1,300</strong>"
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d1q1",
        question: "What is 6 + 3 &times; 4?",
        type: "multiple-choice",
        options: ["36", "18", "15", "24"],
        correct: 1,
        explanation: "Multiply first: 3 &times; 4 = 12. Then add: 6 + 12 = 18.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d1q2",
        question: "Round 8,465 to the nearest hundred.",
        type: "multiple-choice",
        options: ["8,400", "8,500", "8,470", "8,000"],
        correct: 1,
        explanation: "The hundreds digit is 4. Look to the right: the tens digit is 6 (which is &ge; 5), so round up. 8,465 rounds to 8,500.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d1q3",
        question: "What is 20 &minus; 8 &divide; 2?",
        type: "multiple-choice",
        options: ["6", "16", "12", "14"],
        correct: 1,
        explanation: "Divide first: 8 &divide; 2 = 4. Then subtract: 20 &minus; 4 = 16.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d1q4",
        question: "What is (5 + 3) &times; (10 &minus; 4)?",
        type: "multiple-choice",
        options: ["32", "48", "44", "54"],
        correct: 1,
        explanation: "Parentheses first: 5 + 3 = 8 and 10 &minus; 4 = 6. Then multiply: 8 &times; 6 = 48.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d1q5",
        question: "Round 3,274,508 to the nearest hundred-thousand.",
        type: "multiple-choice",
        options: ["3,200,000", "3,280,000", "3,300,000", "3,275,000"],
        correct: 2,
        explanation: "The hundred-thousands digit is 2. The digit to its right is 7 (which is &ge; 5), so round up: 3,274,508 rounds to 3,300,000.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d1q6",
        question: "What is 36 &divide; 6 + 2 &times; 5?",
        type: "multiple-choice",
        options: ["40", "16", "35", "13"],
        correct: 1,
        explanation: "Do division and multiplication left to right: 36 &divide; 6 = 6, and 2 &times; 5 = 10. Then add: 6 + 10 = 16.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d1q7",
        question: "Which property does this show? 7 &times; 9 = 9 &times; 7",
        type: "multiple-choice",
        options: ["Associative property", "Commutative property", "Distributive property", "Identity property"],
        correct: 1,
        explanation: "Swapping the order of factors is the <strong>commutative property</strong> of multiplication: a &times; b = b &times; a.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d1q8",
        question: "What is 48 &divide; (2 &times; 3) + 5 &times; (9 &minus; 7)?",
        type: "multiple-choice",
        options: ["26", "18", "14", "22"],
        correct: 1,
        explanation: "Parentheses first: 2 &times; 3 = 6 and 9 &minus; 7 = 2. Then: 48 &divide; 6 = 8 and 5 &times; 2 = 10. Finally: 8 + 10 = 18.",
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d1q9",
        question: "Maya buys 3 notebooks at $4 each and 2 pens at $2 each. She uses the expression 3 &times; 4 + 2 &times; 2 to find her total. What is the total cost?",
        type: "multiple-choice",
        options: ["$32", "$16", "$24", "$22"],
        correct: 1,
        explanation: "Follow PEMDAS &mdash; multiply first: 3 &times; 4 = 12, and 2 &times; 2 = 4. Then add: 12 + 4 = $16.",
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d1q10",
        question: "A theater has 12 rows with 15 seats each, but 8 seats are broken. Which expression gives the usable seats, and what is the answer?",
        type: "multiple-choice",
        options: [
          "12 + 15 &minus; 8 = 19",
          "12 &times; 15 &minus; 8 = 172",
          "(12 &minus; 8) &times; 15 = 60",
          "12 &times; (15 &minus; 8) = 84"
        ],
        correct: 1,
        explanation: "Total seats = 12 &times; 15 = 180. Remove broken seats: 180 &minus; 8 = 172. The correct expression is 12 &times; 15 &minus; 8 = 172.",
        difficulty: "hard",
        category: "topic"
      }
    ]
  },

  // ============================================================
  // DAY 2: Integers & the Number Line
  // ============================================================
  day2: {
    lesson: {
      title: "Integers & the Number Line",
      subtitle: "Explore positive numbers, negative numbers, zero, and how they all line up on the number line",
      sections: [
        {
          heading: "What Are Integers?",
          paragraphs: [
            "<strong>Integers</strong> are all the whole numbers and their negatives: &hellip; &minus;3, &minus;2, &minus;1, 0, 1, 2, 3 &hellip; They do <em>not</em> include fractions or decimals. Zero is an integer, and it is neither positive nor negative &mdash; it sits right in the middle.",
            "You can picture all integers on a <strong>number line</strong> &mdash; a straight line with 0 in the center, positive numbers stretching to the right, and negative numbers stretching to the left. Every integer has its own unique spot, and there is no &ldquo;biggest&rdquo; or &ldquo;smallest&rdquo; integer because the line goes on forever in both directions.",
            "Negative numbers show up everywhere in real life: temperatures below zero (&minus;5 &deg;F on a cold winter day), elevations below sea level (the Dead Sea is about &minus;430 meters), bank withdrawals (spending $20 might show as &minus;$20 on a statement), and even in video games when you lose health points."
          ],
          example: {
            title: "Worked Example: Placing Integers on a Number Line",
            problem: "Place &minus;3, 1, and &minus;1 on a number line and list them in order.",
            steps: [
              "Draw a line and mark 0 in the center.",
              "Count 1 unit to the right of 0 for <strong>1</strong>.",
              "Count 1 unit to the left of 0 for <strong>&minus;1</strong>.",
              "Count 3 units to the left of 0 for <strong>&minus;3</strong>.",
              "Reading left to right gives the order from least to greatest: <strong>&minus;3, &minus;1, 0, 1</strong>."
            ],
            graphs: [
              {
                type: "numberLine",
                min: -5, max: 5, step: 1,
                width: 480, height: 70,
                points: [
                  { x: -3, color: "#7c3aed", label: "-3" },
                  { x: -1, color: "#667eea", label: "-1" },
                  { x: 1, color: "#e53e3e", label: "1" }
                ],
                caption: "Integers -3, -1, and 1 on the number line"
              }
            ]
          }
        },
        {
          heading: "Comparing & Ordering Integers",
          paragraphs: [
            "On the number line, a number further to the <strong>right</strong> is always <strong>greater</strong>, and a number further to the <strong>left</strong> is always <strong>smaller</strong>. This means every positive number is greater than zero, every negative number is less than zero, and every positive number is greater than every negative number.",
            "When comparing two negative numbers, the one <em>closer to zero</em> is greater. For example, &minus;2 &gt; &minus;7, because &minus;2 is closer to zero (further right on the number line). Think of it this way: owing $2 is better than owing $7!",
            "Use the symbols: <strong>&lt;</strong> (less than), <strong>&gt;</strong> (greater than), and <strong>=</strong> (equal to). A handy trick: the symbol always opens its &ldquo;mouth&rdquo; toward the <em>bigger</em> number, like a hungry alligator eating the larger meal! So 5 &gt; 3 (mouth faces 5) and &minus;4 &lt; 1 (mouth faces 1)."
          ],
          example: {
            title: "Worked Example: Comparing Negative Integers",
            problem: "Put the correct symbol (&lt;, &gt;, or =) between &minus;4 and &minus;1.",
            steps: [
              "Picture both on a number line.",
              "&minus;4 is 4 units left of zero; &minus;1 is only 1 unit left of zero.",
              "&minus;4 is further left, so it is the <strong>smaller</strong> number.",
              "Answer: <strong>&minus;4 &lt; &minus;1</strong>"
            ],
            graphs: [
              {
                type: "numberLine",
                min: -6, max: 4, step: 1,
                width: 480, height: 70,
                points: [
                  { x: -4, color: "#e53e3e", label: "-4" },
                  { x: -1, color: "#667eea", label: "-1" }
                ],
                caption: "-4 is further left (smaller) than -1"
              }
            ]
          }
        },
        {
          heading: "Absolute Value",
          paragraphs: [
            "The <strong>absolute value</strong> of a number is its <em>distance</em> from 0 on the number line. Distance is always positive (or zero), so absolute value is always <strong>non-negative</strong>. We write it with vertical bars: |n|.",
            "For example, |5| = 5 and |&minus;5| = 5. Both 5 and &minus;5 are exactly 5 units away from zero. Also, |0| = 0, because zero is zero units from itself. Notice that opposite numbers (like 5 and &minus;5) always have the <em>same</em> absolute value.",
            "Think of absolute value as answering the question &ldquo;How far?&rdquo; without caring about direction. If the temperature is &minus;8 &deg;C, it is 8 degrees away from zero &mdash; that&rsquo;s the absolute value. If you walk 6 blocks east or 6 blocks west, the distance is still 6 blocks either way. Absolute value strips away the positive or negative sign and just tells you the <em>size</em> of the number."
          ],
          graphs: [
            {
              type: "row",
              items: [
                {
                  type: "numberLine",
                  min: -6, max: 6, step: 1,
                  width: 340, height: 70,
                  points: [
                    { x: -5, color: "#7c3aed", label: "|-5|=5" },
                    { x: 5, color: "#7c3aed", label: "|5|=5" }
                  ],
                  intervals: [
                    { from: -5, to: 0, color: "#c4b5fd" },
                    { from: 0, to: 5, color: "#c4b5fd" }
                  ],
                  caption: "Both are 5 units from zero"
                },
                {
                  type: "numberLine",
                  min: -6, max: 6, step: 1,
                  width: 340, height: 70,
                  points: [
                    { x: 0, color: "#4a5568", label: "0" },
                    { x: 3, color: "#e53e3e", label: "|3|=3" },
                    { x: -3, color: "#e53e3e", label: "|-3|=3" }
                  ],
                  caption: "Opposite numbers have equal absolute value"
                }
              ]
            }
          ],
          example: {
            title: "Worked Example: Absolute Value Comparisons",
            problem: "Find |&minus;12| and |7|. Which absolute value is greater?",
            steps: [
              "|&minus;12| = 12 (distance from 0 is 12 units).",
              "|7| = 7 (distance from 0 is 7 units).",
              "Compare: 12 &gt; 7.",
              "Answer: <strong>|&minus;12| is greater than |7|</strong>, because 12 is farther from zero than 7."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d2q1",
        question: "Which of the following is <em>not</em> an integer?",
        type: "multiple-choice",
        options: ["&minus;7", "0", "3.5", "42"],
        correct: 2,
        explanation: "3.5 is a decimal, not a whole number. Integers are whole numbers and their negatives: &hellip; &minus;2, &minus;1, 0, 1, 2 &hellip;",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d2q2",
        question: "Which integer is furthest to the left on the number line?",
        type: "multiple-choice",
        options: ["&minus;2", "0", "3", "&minus;6"],
        correct: 3,
        explanation: "&minus;6 is further left than &minus;2, 0, or 3 on the number line, making it the smallest.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d2q3",
        question: "What symbol goes in the blank? &minus;5 ___ 2",
        type: "multiple-choice",
        options: ["&gt;", "&lt;", "=", "None of these"],
        correct: 1,
        explanation: "&minus;5 is to the left of 2 on the number line, so &minus;5 &lt; 2.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d2q4",
        question: "Order these integers from least to greatest: 4, &minus;1, &minus;5, 0, 3",
        type: "multiple-choice",
        options: [
          "&minus;5, &minus;1, 0, 3, 4",
          "&minus;1, &minus;5, 0, 3, 4",
          "0, &minus;1, &minus;5, 3, 4",
          "4, 3, 0, &minus;1, &minus;5"
        ],
        correct: 0,
        explanation: "On the number line, from left to right (least to greatest): &minus;5, &minus;1, 0, 3, 4.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d2q5",
        question: "What is |&minus;9|?",
        type: "multiple-choice",
        options: ["&minus;9", "9", "0", "&minus;1"],
        correct: 1,
        explanation: "The absolute value of &minus;9 is the distance from 0, which is 9.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d2q6",
        question: "Which statement is true?",
        type: "multiple-choice",
        options: [
          "&minus;3 &gt; &minus;1",
          "&minus;8 &gt; &minus;2",
          "&minus;4 &lt; &minus;10",
          "&minus;6 &lt; &minus;3"
        ],
        correct: 3,
        explanation: "&minus;6 is further left than &minus;3 on the number line, so &minus;6 &lt; &minus;3 is the true statement.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d2q7",
        question: "Which of the following has the greatest absolute value?",
        type: "multiple-choice",
        options: ["|&minus;4|", "|7|", "|&minus;10|", "|3|"],
        correct: 2,
        explanation: "|&minus;4| = 4, |7| = 7, |&minus;10| = 10, |3| = 3. The greatest absolute value is 10.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d2q8",
        question: "At 6 AM the temperature was &minus;4 &deg;C. By noon it had risen 11 degrees. What was the noon temperature?",
        type: "multiple-choice",
        options: ["&minus;15 &deg;C", "15 &deg;C", "7 &deg;C", "&minus;7 &deg;C"],
        correct: 2,
        explanation: "Start at &minus;4 on the number line and move 11 units to the right: &minus;4 + 11 = 7 &deg;C.",
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d2q9",
        question: "If |x| = 5, how many possible integer values can x be?",
        type: "multiple-choice",
        options: ["1 (only 5)", "2 (5 and &minus;5)", "5", "Infinitely many"],
        correct: 1,
        explanation: "Absolute value measures distance from 0. Both 5 and &minus;5 are exactly 5 units from 0, so x can be 5 or &minus;5 &mdash; two possible values.",
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d2q10",
        question: "What is 5 + 2 &times; (8 &minus; 3)?",
        type: "multiple-choice",
        options: ["35", "15", "21", "50"],
        correct: 1,
        explanation: "Parentheses first: 8 &minus; 3 = 5. Then multiply: 2 &times; 5 = 10. Then add: 5 + 10 = 15. (PEMDAS review from Day 1)",
        difficulty: "hard",
        category: "review"
      }
    ]
  },

  // ============================================================
  // DAY 3: Adding & Subtracting Integers
  // ============================================================
  day3: {
    lesson: {
      title: "Adding & Subtracting Integers",
      subtitle: "Learn the rules for combining positive and negative numbers using addition and subtraction",
      sections: [
        {
          heading: "Adding Integers with the Same Sign",
          paragraphs: [
            "When you add two numbers that have the <strong>same sign</strong>, the rule is simple: <em>add their absolute values and keep the shared sign</em>. If both numbers are positive, the answer is positive. If both are negative, the answer is negative.",
            "For example, (&minus;3) + (&minus;5): both are negative, so add the absolute values 3 + 5 = 8, and keep the negative sign. The answer is <strong>&minus;8</strong>. Think of it on the number line: starting at &minus;3 and moving 5 more units to the left lands you at &minus;8.",
            "Here&rsquo;s a real-world way to think about it: if you owe $3 and then borrow $5 more, you now owe $8 total. Two debts combine into a bigger debt!"
          ],
          example: {
            title: "Worked Example: Adding Two Negatives",
            problem: "Calculate (&minus;12) + (&minus;7)",
            steps: [
              "Both numbers are <strong>negative</strong> (same sign).",
              "Add the absolute values: 12 + 7 = <strong>19</strong>.",
              "Keep the shared sign (negative).",
              "Answer: <strong>&minus;19</strong>"
            ]
          }
        },
        {
          heading: "Adding Integers with Different Signs",
          paragraphs: [
            "When you add two numbers with <strong>different signs</strong> (one positive and one negative), use this rule: <em>subtract the smaller absolute value from the larger absolute value, then take the sign of the number with the larger absolute value</em>.",
            "For example, (&minus;7) + 4: the absolute values are 7 and 4. Subtract: 7 &minus; 4 = 3. Since 7 &gt; 4 and &minus;7 is negative, the answer is <strong>&minus;3</strong>. On the number line, you start at &minus;7 and move 4 units to the right, landing at &minus;3.",
            "Another way to think about it: you owe $7 and someone gives you $4. You pay off part of the debt, but you still owe $3. The &ldquo;bigger force&rdquo; wins. When the positive part is bigger, the answer is positive; when the negative part is bigger, the answer is negative."
          ],
          example: {
            title: "Worked Example: Adding with Different Signs",
            problem: "Calculate (&minus;9) + 15",
            steps: [
              "The signs are different (&minus; and +).",
              "Find the absolute values: |&minus;9| = 9, |15| = 15.",
              "Subtract the smaller from the larger: 15 &minus; 9 = <strong>6</strong>.",
              "The number with the larger absolute value is 15 (positive), so the result is <strong>positive</strong>.",
              "Answer: <strong>6</strong>"
            ]
          }
        },
        {
          heading: "Subtracting Integers (Keep-Change-Change)",
          paragraphs: [
            "Subtracting integers has a powerful shortcut called <strong>Keep-Change-Change</strong>. Here&rsquo;s how it works: <em>Keep</em> the first number the same. <em>Change</em> the subtraction sign to addition. <em>Change</em> the sign of the second number (flip it to its opposite). Then follow the rules for adding integers.",
            "Why does this work? Subtracting a number is mathematically identical to adding its <em>opposite</em>. The opposite of 5 is &minus;5, and the opposite of &minus;3 is 3. So a &minus; b = a + (&minus;b), always. For example, 7 &minus; (&minus;3) becomes 7 + 3 = <strong>10</strong>.",
            "This trick is especially helpful when you see a &ldquo;double negative&rdquo;: &minus;4 &minus; (&minus;6) becomes &minus;4 + 6 = <strong>2</strong>. Subtracting a negative is the same as adding a positive!"
          ],
          example: {
            title: "Worked Example: Subtracting Integers",
            problem: "Calculate 3 &minus; (&minus;8)",
            steps: [
              "<strong>Keep</strong> the first number: 3.",
              "<strong>Change</strong> the subtraction to addition: +.",
              "<strong>Change</strong> the sign of &minus;8 to +8.",
              "The problem becomes: 3 + 8.",
              "Same signs (both positive): 3 + 8 = <strong>11</strong>.",
              "Answer: <strong>11</strong>"
            ]
          }
        },
        {
          heading: "Combining Multiple Integer Operations",
          paragraphs: [
            "In many problems you&rsquo;ll see a mix of addition and subtraction with integers all in one expression, like &minus;3 + 7 &minus; 2 + (&minus;5). The strategy is to work <strong>left to right</strong>, applying the rules one pair at a time, or convert all subtractions to additions of opposites first and then combine.",
            "Let&rsquo;s use the second strategy on &minus;3 + 7 &minus; 2 + (&minus;5): rewrite as &minus;3 + 7 + (&minus;2) + (&minus;5). Now group the positives: +7. Group the negatives: &minus;3 + (&minus;2) + (&minus;5) = &minus;10. Finally, combine: 7 + (&minus;10) = <strong>&minus;3</strong>.",
            "This &ldquo;group the positives and negatives separately&rdquo; trick is really useful for long expressions. It&rsquo;s like separating your earnings and your expenses, then finding the net result at the end."
          ],
          example: {
            title: "Worked Example: Multi-Step Integer Expression",
            problem: "Calculate &minus;6 + 10 &minus; 3 &minus; (&minus;4)",
            steps: [
              "Convert all subtractions to addition of opposites: &minus;6 + 10 + (&minus;3) + 4.",
              "Group the positives: 10 + 4 = <strong>14</strong>.",
              "Group the negatives: &minus;6 + (&minus;3) = <strong>&minus;9</strong>.",
              "Combine: 14 + (&minus;9) = 14 &minus; 9 = <strong>5</strong>.",
              "Answer: <strong>5</strong>"
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d3q1",
        question: "What is (&minus;3) + (&minus;5)?",
        type: "multiple-choice",
        options: ["&minus;8", "8", "2", "&minus;2"],
        correct: 0,
        explanation: "Same sign (both negative): add 3 + 5 = 8, keep the negative sign. Answer: &minus;8.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d3q2",
        question: "What is 7 + (&minus;10)?",
        type: "multiple-choice",
        options: ["17", "&minus;17", "&minus;3", "3"],
        correct: 2,
        explanation: "Different signs: 10 &minus; 7 = 3. The larger absolute value is 10 (negative), so the answer is &minus;3.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d3q3",
        question: "What is 4 &minus; 9?",
        type: "multiple-choice",
        options: ["5", "&minus;5", "13", "&minus;13"],
        correct: 1,
        explanation: "Rewrite as 4 + (&minus;9). Different signs: 9 &minus; 4 = 5, larger absolute value is negative, so the answer is &minus;5.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d3q4",
        question: "What is (&minus;5) &minus; (&minus;12)?",
        type: "multiple-choice",
        options: ["&minus;17", "7", "&minus;7", "17"],
        correct: 1,
        explanation: "Keep-Change-Change: &minus;5 + 12. Different signs: 12 &minus; 5 = 7, the larger absolute value is positive. Answer: 7.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d3q5",
        question: "What is (&minus;14) + 14?",
        type: "multiple-choice",
        options: ["28", "&minus;28", "0", "14"],
        correct: 2,
        explanation: "A number plus its opposite always equals zero. &minus;14 + 14 = 0. These are called <strong>additive inverses</strong>.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d3q6",
        question: "What is 8 &minus; (&minus;5) + (&minus;3)?",
        type: "multiple-choice",
        options: ["10", "0", "16", "6"],
        correct: 0,
        explanation: "Rewrite: 8 + 5 + (&minus;3) = 13 + (&minus;3) = 10.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d3q7",
        question: "A diver is at &minus;15 meters (below sea level). She rises 8 meters, then descends 5 meters. What is her final depth?",
        type: "multiple-choice",
        options: ["&minus;12 meters", "&minus;22 meters", "&minus;28 meters", "&minus;8 meters"],
        correct: 0,
        explanation: "Start at &minus;15. Rise 8: &minus;15 + 8 = &minus;7. Descend 5: &minus;7 + (&minus;5) = &minus;12 meters.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d3q8",
        question: "What is &minus;20 + 6 &minus; (&minus;9) + (&minus;1)?",
        type: "multiple-choice",
        options: ["&minus;6", "6", "&minus;24", "36"],
        correct: 0,
        explanation: "Rewrite: &minus;20 + 6 + 9 + (&minus;1). Positives: 6 + 9 = 15. Negatives: &minus;20 + (&minus;1) = &minus;21. Combine: 15 + (&minus;21) = &minus;6.",
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d3q9",
        question: "The temperature at midnight was &minus;7 &deg;F. By 8 AM it dropped 4 more degrees. By noon it rose 15 degrees. What was the noon temperature?",
        type: "multiple-choice",
        options: ["4 &deg;F", "&minus;4 &deg;F", "26 &deg;F", "&minus;26 &deg;F"],
        correct: 0,
        explanation: "Start: &minus;7. Drop 4: &minus;7 + (&minus;4) = &minus;11. Rise 15: &minus;11 + 15 = 4 &deg;F.",
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d3q10",
        question: "What is 3 + 6 &times; (4 &minus; 1)?",
        type: "multiple-choice",
        options: ["21", "27", "13", "19"],
        correct: 0,
        explanation: "Parentheses: 4 &minus; 1 = 3. Multiply: 6 &times; 3 = 18. Add: 3 + 18 = 21. (PEMDAS review from Day 1)",
        difficulty: "hard",
        category: "review"
      }
    ]
  },

  // ============================================================
  // DAY 4: Multiplying & Dividing Integers
  // ============================================================
  day4: {
    lesson: {
      title: "Multiplying & Dividing Integers",
      subtitle: "Master the sign rules for multiplication and division, and tackle order of operations with negative numbers",
      sections: [
        {
          heading: "Multiplying Integers &mdash; The Sign Rules",
          paragraphs: [
            "The sign rules for multiplying integers are beautifully simple. <strong>Same signs &rarr; positive result.</strong> <strong>Different signs &rarr; negative result.</strong> This gives us four cases:<br>Positive &times; Positive = Positive (e.g., 4 &times; 3 = 12)<br>Negative &times; Negative = Positive (e.g., &minus;4 &times; &minus;3 = 12)<br>Positive &times; Negative = Negative (e.g., 4 &times; &minus;3 = &minus;12)<br>Negative &times; Positive = Negative (e.g., &minus;4 &times; 3 = &minus;12)",
            "Why does a negative times a negative equal a positive? Think of it with patterns. We know &minus;3 &times; 3 = &minus;9, &minus;3 &times; 2 = &minus;6, &minus;3 &times; 1 = &minus;3, &minus;3 &times; 0 = 0. Each time the second factor drops by 1, the product <em>increases</em> by 3. Continuing the pattern: &minus;3 &times; (&minus;1) = 3, &minus;3 &times; (&minus;2) = 6. The pattern demands it!",
            "When multiplying more than two integers, there&rsquo;s a handy shortcut: <strong>count the negative signs</strong>. An <em>even</em> number of negatives gives a positive result; an <em>odd</em> number gives a negative result. For example, (&minus;2) &times; (&minus;3) &times; (&minus;1) has three negatives (odd), so the result is negative: &minus;6."
          ],
          example: {
            title: "Worked Example: Multiplying Multiple Integers",
            problem: "Calculate (&minus;2) &times; 5 &times; (&minus;3)",
            steps: [
              "Multiply the absolute values: 2 &times; 5 &times; 3 = <strong>30</strong>.",
              "Count the negatives: there are <strong>2</strong> negative signs (even).",
              "Even number of negatives &rarr; the result is <strong>positive</strong>.",
              "Answer: <strong>30</strong>"
            ]
          }
        },
        {
          heading: "Dividing Integers",
          paragraphs: [
            "The sign rules for division are <strong>exactly the same</strong> as for multiplication. Same signs &rarr; positive. Different signs &rarr; negative. This makes sense because division is the &ldquo;reverse&rdquo; of multiplication.",
            "Positive &divide; Positive = Positive (e.g., 12 &divide; 3 = 4)<br>Negative &divide; Negative = Positive (e.g., &minus;12 &divide; &minus;3 = 4)<br>Positive &divide; Negative = Negative (e.g., 12 &divide; &minus;3 = &minus;4)<br>Negative &divide; Positive = Negative (e.g., &minus;12 &divide; 3 = &minus;4)",
            "Remember: you can <strong>never divide by zero</strong>. There is no number that you can multiply by 0 to get a non-zero result, so expressions like 5 &divide; 0 are <em>undefined</em>. However, 0 &divide; 5 is perfectly fine and equals 0."
          ],
          example: {
            title: "Worked Example: Dividing Integers",
            problem: "Calculate (&minus;42) &divide; (&minus;7) and (&minus;30) &divide; 6",
            steps: [
              "(&minus;42) &divide; (&minus;7): same signs (both negative) &rarr; positive. 42 &divide; 7 = 6. Answer: <strong>6</strong>.",
              "(&minus;30) &divide; 6: different signs (negative &divide; positive) &rarr; negative. 30 &divide; 6 = 5. Answer: <strong>&minus;5</strong>."
            ]
          }
        },
        {
          heading: "Order of Operations with Integers",
          paragraphs: [
            "PEMDAS still applies when negative numbers are involved, but there are some common <strong>pitfalls</strong> to watch out for. The biggest one involves exponents and negative signs.",
            "Consider the difference between <strong>&minus;3<sup>2</sup></strong> and <strong>(&minus;3)<sup>2</sup></strong>. In &minus;3<sup>2</sup>, the exponent only applies to the 3, and the negative sign is like multiplying by &minus;1 <em>afterwards</em>, so &minus;3<sup>2</sup> = &minus;(3<sup>2</sup>) = &minus;9. But in (&minus;3)<sup>2</sup>, the parentheses mean the entire &minus;3 is squared: (&minus;3) &times; (&minus;3) = +9. These look similar but give <strong>opposite answers</strong>!",
            "When working with integers in multi-step problems, be extra careful about signs at each step. Write out each step clearly, and always handle parentheses first. Double-check the sign of your answer &mdash; sign errors are the most common mistake in integer arithmetic."
          ],
          example: {
            title: "Worked Example: PEMDAS with Negatives",
            problem: "Evaluate: &minus;2<sup>2</sup> + 3 &times; (&minus;4)",
            steps: [
              "<strong>Exponent first:</strong> &minus;2<sup>2</sup> means &minus;(2<sup>2</sup>) = &minus;4. (Only the 2 is squared, not the negative sign.)",
              "<strong>Multiplication:</strong> 3 &times; (&minus;4) = <strong>&minus;12</strong>.",
              "<strong>Addition:</strong> &minus;4 + (&minus;12) = <strong>&minus;16</strong>.",
              "Answer: <strong>&minus;16</strong>"
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d4q1",
        question: "What is (&minus;8) &times; 5?",
        type: "multiple-choice",
        options: ["40", "&minus;40", "13", "&minus;13"],
        correct: 1,
        explanation: "Different signs (negative &times; positive) &rarr; negative. 8 &times; 5 = 40. Answer: &minus;40.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d4q2",
        question: "What is (&minus;36) &divide; (&minus;9)?",
        type: "multiple-choice",
        options: ["&minus;4", "4", "&minus;27", "27"],
        correct: 1,
        explanation: "Same signs (both negative) &rarr; positive. 36 &divide; 9 = 4. Answer: 4.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d4q3",
        question: "What is (&minus;7) &times; (&minus;6)?",
        type: "multiple-choice",
        options: ["&minus;42", "42", "&minus;13", "13"],
        correct: 1,
        explanation: "Same signs (both negative) &rarr; positive. 7 &times; 6 = 42. Answer: 42.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d4q4",
        question: "What is (&minus;3) &times; (&minus;2) &times; (&minus;4)?",
        type: "multiple-choice",
        options: ["24", "&minus;24", "9", "&minus;9"],
        correct: 1,
        explanation: "Multiply absolute values: 3 &times; 2 &times; 4 = 24. Count negatives: 3 (odd) &rarr; negative result. Answer: &minus;24.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d4q5",
        question: "What is 56 &divide; (&minus;8)?",
        type: "multiple-choice",
        options: ["7", "&minus;7", "48", "&minus;48"],
        correct: 1,
        explanation: "Different signs (positive &divide; negative) &rarr; negative. 56 &divide; 8 = 7. Answer: &minus;7.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d4q6",
        question: "What is (&minus;3)<sup>2</sup>?",
        type: "multiple-choice",
        options: ["&minus;9", "9", "&minus;6", "6"],
        correct: 1,
        explanation: "(&minus;3)<sup>2</sup> = (&minus;3) &times; (&minus;3). Same signs &rarr; positive. 3 &times; 3 = 9. Answer: 9.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d4q7",
        question: "What is the value of &minus;5<sup>2</sup>?",
        type: "multiple-choice",
        options: ["25", "&minus;25", "10", "&minus;10"],
        correct: 1,
        explanation: "Without parentheses, &minus;5<sup>2</sup> = &minus;(5<sup>2</sup>) = &minus;25. The exponent applies only to 5, not to the negative sign.",
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d4q8",
        question: "A company loses $8 per day for 5 days, then earns $15 per day for 3 days. What is the net change?",
        type: "multiple-choice",
        options: ["$5", "&minus;$5", "$85", "&minus;$85"],
        correct: 0,
        explanation: "Losses: (&minus;8) &times; 5 = &minus;40. Earnings: 15 &times; 3 = 45. Net: &minus;40 + 45 = $5.",
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d4q9",
        question: "What is (&minus;4) &times; 3 + 18 &divide; (&minus;6)?",
        type: "multiple-choice",
        options: ["&minus;15", "9", "&minus;9", "15"],
        correct: 0,
        explanation: "Multiply: (&minus;4) &times; 3 = &minus;12. Divide: 18 &divide; (&minus;6) = &minus;3. Add: &minus;12 + (&minus;3) = &minus;15.",
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d4q10",
        question: "What is &minus;8 &minus; (&minus;3) + (&minus;2)?",
        type: "multiple-choice",
        options: ["&minus;7", "7", "&minus;13", "3"],
        correct: 0,
        explanation: "Rewrite: &minus;8 + 3 + (&minus;2). Positives: 3. Negatives: &minus;8 + (&minus;2) = &minus;10. Combine: 3 + (&minus;10) = &minus;7. (Review: adding &amp; subtracting integers from Day 3)",
        difficulty: "medium",
        category: "review"
      }
    ]
  },

  // ============================================================
  // DAY 5: Squares & Higher Exponents
  // ============================================================
  day5: {
    lesson: {
      title: "Squares & Higher Exponents",
      subtitle: "Understand what exponents mean, memorize key perfect squares and cubes, and learn the first exponent rules",
      sections: [
        {
          heading: "What Are Exponents?",
          paragraphs: [
            "An <strong>exponent</strong> is a shorthand for repeated multiplication. When we write a<sup>n</sup>, the number <em>a</em> is the <strong>base</strong> and <em>n</em> is the <strong>exponent</strong> (or power). It means: multiply <em>a</em> by itself <em>n</em> times. For example, 2<sup>4</sup> = 2 &times; 2 &times; 2 &times; 2 = 16.",
            "Some special cases to know: any number to the <strong>first power</strong> is itself (a<sup>1</sup> = a). Any non-zero number to the <strong>zero power</strong> equals 1 (a<sup>0</sup> = 1). This may seem strange, but it keeps the pattern of exponents consistent &mdash; each time you decrease the exponent by 1, you divide by the base. For example, 2<sup>3</sup> = 8, 2<sup>2</sup> = 4, 2<sup>1</sup> = 2, 2<sup>0</sup> = 1 &mdash; each step divides by 2.",
            "We read a<sup>2</sup> as &ldquo;a squared&rdquo; and a<sup>3</sup> as &ldquo;a cubed.&rdquo; These names come from geometry: the area of a square with side <em>a</em> is a<sup>2</sup>, and the volume of a cube with side <em>a</em> is a<sup>3</sup>. Higher powers are read as &ldquo;a to the fourth,&rdquo; &ldquo;a to the fifth,&rdquo; and so on."
          ],
          example: {
            title: "Worked Example: Computing a Power",
            problem: "Evaluate 3<sup>4</sup>",
            steps: [
              "The base is 3 and the exponent is 4.",
              "This means: 3 &times; 3 &times; 3 &times; 3.",
              "Step by step: 3 &times; 3 = 9, then 9 &times; 3 = 27, then 27 &times; 3 = 81.",
              "Answer: <strong>3<sup>4</sup> = 81</strong>"
            ]
          }
        },
        {
          heading: "Perfect Squares & Perfect Cubes",
          paragraphs: [
            "A <strong>perfect square</strong> is a number that results from squaring a whole number. The first twelve perfect squares are well worth memorizing:<br>1<sup>2</sup> = 1, &ensp;2<sup>2</sup> = 4, &ensp;3<sup>2</sup> = 9, &ensp;4<sup>2</sup> = 16, &ensp;5<sup>2</sup> = 25, &ensp;6<sup>2</sup> = 36,<br>7<sup>2</sup> = 49, &ensp;8<sup>2</sup> = 64, &ensp;9<sup>2</sup> = 81, &ensp;10<sup>2</sup> = 100, &ensp;11<sup>2</sup> = 121, &ensp;12<sup>2</sup> = 144.<br>Knowing these by heart makes later topics (like square roots, factoring, and algebra) much easier.",
            "A <strong>perfect cube</strong> is a number that results from cubing a whole number. The first ten are:<br>1<sup>3</sup> = 1, &ensp;2<sup>3</sup> = 8, &ensp;3<sup>3</sup> = 27, &ensp;4<sup>3</sup> = 64, &ensp;5<sup>3</sup> = 125,<br>6<sup>3</sup> = 216, &ensp;7<sup>3</sup> = 343, &ensp;8<sup>3</sup> = 512, &ensp;9<sup>3</sup> = 729, &ensp;10<sup>3</sup> = 1,000.<br>Notice that some numbers are <em>both</em> a perfect square and a perfect cube: 1 and 64 appear in both lists (1 = 1<sup>2</sup> = 1<sup>3</sup>, and 64 = 8<sup>2</sup> = 4<sup>3</sup>).",
            "Recognizing perfect squares and cubes helps you work faster. For example, if you see 49 in a problem, you should instantly think &ldquo;that&rsquo;s 7<sup>2</sup>.&rdquo; If you see 125, think &ldquo;that&rsquo;s 5<sup>3</sup>.&rdquo; This skill comes up constantly in math competitions, standardized tests, and everyday algebra."
          ],
          example: {
            title: "Worked Example: Identifying Perfect Squares and Cubes",
            problem: "Is 216 a perfect square, a perfect cube, both, or neither?",
            steps: [
              "Check perfect squares: 14<sup>2</sup> = 196 and 15<sup>2</sup> = 225. Since 196 &lt; 216 &lt; 225, 216 is <strong>not</strong> a perfect square.",
              "Check perfect cubes: 6<sup>3</sup> = 6 &times; 6 &times; 6 = 216. Yes!",
              "Answer: <strong>216 is a perfect cube</strong> (6<sup>3</sup>), but not a perfect square."
            ]
          }
        },
        {
          heading: "Exponent Rules &mdash; Product, Power & Distributive Rules",
          paragraphs: [
            "When working with exponents, three rules save enormous amounts of calculation. The first is the <strong>Product Rule</strong>: when multiplying two powers with the <em>same base</em>, add the exponents. In symbols: a<sup>m</sup> &times; a<sup>n</sup> = a<sup>m+n</sup>. For example, 2<sup>3</sup> &times; 2<sup>4</sup> = 2<sup>3+4</sup> = 2<sup>7</sup> = 128. This works because 2<sup>3</sup> &times; 2<sup>4</sup> means (2 &times; 2 &times; 2) &times; (2 &times; 2 &times; 2 &times; 2) &mdash; that&rsquo;s seven 2s multiplied together.",
            "The second rule is the <strong>Power Rule</strong>: when raising a power to another power, multiply the exponents. In symbols: (a<sup>m</sup>)<sup>n</sup> = a<sup>m&times;n</sup>. For example, (5<sup>2</sup>)<sup>3</sup> = 5<sup>2&times;3</sup> = 5<sup>6</sup> = 15,625. Think of it as writing 5<sup>2</sup> three times and then applying the Product Rule: 5<sup>2</sup> &times; 5<sup>2</sup> &times; 5<sup>2</sup> = 5<sup>2+2+2</sup> = 5<sup>6</sup>.",
            "The third rule is the <strong>Distributive Rule for Exponents</strong>: when a product is raised to a power, you can distribute the exponent to each factor. In symbols: (ab)<sup>n</sup> = a<sup>n</sup> &times; b<sup>n</sup>. For example, (3 &times; 4)<sup>2</sup> = 3<sup>2</sup> &times; 4<sup>2</sup> = 9 &times; 16 = 144. You can verify: (3 &times; 4)<sup>2</sup> = 12<sup>2</sup> = 144. Same answer! <em>Important:</em> this rule works for products, <strong>not</strong> for sums. (a + b)<sup>2</sup> is <em>not</em> equal to a<sup>2</sup> + b<sup>2</sup>."
          ],
          example: {
            title: "Worked Example: Applying Exponent Rules",
            problem: "Simplify 3<sup>2</sup> &times; 3<sup>5</sup> and (2<sup>3</sup>)<sup>4</sup>",
            steps: [
              "<strong>Product Rule:</strong> 3<sup>2</sup> &times; 3<sup>5</sup> = 3<sup>2+5</sup> = <strong>3<sup>7</sup></strong> (which equals 2,187).",
              "<strong>Power Rule:</strong> (2<sup>3</sup>)<sup>4</sup> = 2<sup>3&times;4</sup> = <strong>2<sup>12</sup></strong> (which equals 4,096).",
              "Both rules let us write the answer as a single power instead of doing all the multiplication by hand."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d5q1",
        question: "What is 2<sup>5</sup>?",
        type: "multiple-choice",
        options: ["10", "25", "32", "64"],
        correct: 2,
        explanation: "2<sup>5</sup> = 2 &times; 2 &times; 2 &times; 2 &times; 2 = 32.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d5q2",
        question: "Which of the following is a perfect square?",
        type: "multiple-choice",
        options: ["50", "81", "72", "90"],
        correct: 1,
        explanation: "81 = 9<sup>2</sup>. The others are not perfect squares (no whole number times itself equals 50, 72, or 90).",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d5q3",
        question: "What is 10<sup>0</sup>?",
        type: "multiple-choice",
        options: ["0", "1", "10", "100"],
        correct: 1,
        explanation: "Any non-zero number raised to the power of 0 equals 1. So 10<sup>0</sup> = 1.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d5q4",
        question: "Simplify: 5<sup>3</sup> &times; 5<sup>2</sup>",
        type: "multiple-choice",
        options: ["5<sup>6</sup>", "5<sup>5</sup>", "25<sup>5</sup>", "5<sup>1</sup>"],
        correct: 1,
        explanation: "Product Rule: when multiplying powers with the same base, add the exponents. 5<sup>3</sup> &times; 5<sup>2</sup> = 5<sup>3+2</sup> = 5<sup>5</sup>.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d5q5",
        question: "What is (2<sup>3</sup>)<sup>2</sup>?",
        type: "multiple-choice",
        options: ["2<sup>5</sup>", "2<sup>6</sup>", "2<sup>9</sup>", "4<sup>3</sup>"],
        correct: 1,
        explanation: "Power Rule: raise a power to a power by multiplying the exponents. (2<sup>3</sup>)<sup>2</sup> = 2<sup>3&times;2</sup> = 2<sup>6</sup> = 64.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d5q6",
        question: "Which number is both a perfect square and a perfect cube?",
        type: "multiple-choice",
        options: ["36", "27", "64", "100"],
        correct: 2,
        explanation: "64 = 8<sup>2</sup> (perfect square) and 64 = 4<sup>3</sup> (perfect cube). 36 = 6<sup>2</sup> but is not a perfect cube. 27 = 3<sup>3</sup> but is not a perfect square. 100 = 10<sup>2</sup> but is not a perfect cube.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d5q7",
        question: "What is (3 &times; 2)<sup>3</sup>?",
        type: "multiple-choice",
        options: ["18", "36", "216", "108"],
        correct: 2,
        explanation: "Using the distributive rule: (3 &times; 2)<sup>3</sup> = 3<sup>3</sup> &times; 2<sup>3</sup> = 27 &times; 8 = 216. Or: (6)<sup>3</sup> = 216.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d5q8",
        question: "What is (&minus;2)<sup>4</sup>?",
        type: "multiple-choice",
        options: ["16", "&minus;16", "8", "&minus;8"],
        correct: 0,
        explanation: "(&minus;2)<sup>4</sup> = (&minus;2) &times; (&minus;2) &times; (&minus;2) &times; (&minus;2). Four negatives (even count) gives a positive result. 2<sup>4</sup> = 16. Answer: 16.",
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d5q9",
        question: "What is (&minus;5) &times; 4 + (&minus;18) &divide; (&minus;3)?",
        type: "multiple-choice",
        options: ["&minus;26", "&minus;14", "26", "14"],
        correct: 1,
        explanation: "Multiply: (&minus;5) &times; 4 = &minus;20. Divide: (&minus;18) &divide; (&minus;3) = 6. Add: &minus;20 + 6 = &minus;14. (Review: integer multiplication &amp; division from Day 4)",
        difficulty: "hard",
        category: "review"
      },
      {
        id: "d5q10",
        question: "What is &minus;3<sup>2</sup> + (&minus;3)<sup>2</sup>?",
        type: "multiple-choice",
        options: ["0", "18", "&minus;18", "6"],
        correct: 0,
        explanation: "&minus;3<sup>2</sup> = &minus;(3<sup>2</sup>) = &minus;9 (exponent applies to 3 only). (&minus;3)<sup>2</sup> = (&minus;3)(&minus;3) = 9 (parentheses mean the whole &minus;3 is squared). Sum: &minus;9 + 9 = 0. (Reviews Day 4&rsquo;s exponent-sign pitfall)",
        difficulty: "hard",
        category: "review"
      }
    ]
  }

};
