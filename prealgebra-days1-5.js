export const DAYS_1_5 = {

  // ============================================================
  // DAY 1: Whole Numbers & Order of Operations
  // ============================================================
  day1: {
    lesson: {
      title: "Whole Numbers & Order of Operations",
      subtitle: "Master place value, rounding, and the rules that tell you what to calculate first",
      sections: [
        {
          heading: "Place Value & Rounding",
          paragraphs: [
            "Every digit in a number has a <strong>place value</strong> based on its position. Starting from the right, the places are: ones, tens, hundreds, thousands, ten-thousands, hundred-thousands, millions, ten-millions, hundred-millions, billions, and so on. For example, in the number 5,832, the 5 is in the <em>thousands</em> place, the 8 is in the <em>hundreds</em> place, the 3 is in the <em>tens</em> place, and the 2 is in the <em>ones</em> place.",
            "Rounding makes big numbers easier to work with. To round a number, first find the place you are rounding to. Then look at the digit <strong>one place to the right</strong>. If that digit is 5 or greater, round up (add 1 to the rounding place). If it is less than 5, round down (keep the rounding place the same). Replace all digits to the right with zeros.",
            "Rounding is used all the time in real life &mdash; when estimating the cost of groceries, reporting a city's population, or checking if your answer to a math problem is reasonable."
          ],
          example: {
            title: "Worked Example: Rounding",
            problem: "Round 47,362 to the nearest thousand.",
            steps: [
              "Find the thousands digit: <strong>7</strong> (in 4<u>7</u>,362).",
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
            "When a math expression has more than one operation, you need rules so everyone gets the same answer. That set of rules is called the <strong>order of operations</strong>. A handy way to remember it is the acronym <strong>PEMDAS</strong> (some people say \"Please Excuse My Dear Aunt Sally\").",
            "<strong>P</strong> &ndash; Parentheses first<br><strong>E</strong> &ndash; Exponents (powers) next<br><strong>M / D</strong> &ndash; Multiplication and Division, left to right<br><strong>A / S</strong> &ndash; Addition and Subtraction, left to right<br><br>Important: Multiplication and division are done at the <em>same level</em> &mdash; just work left to right. The same goes for addition and subtraction.",
            "Think of PEMDAS like traffic rules. Without them, two people could look at the same problem and get different answers. With the rules, everyone agrees."
          ],
          example: {
            title: "Worked Example: PEMDAS",
            problem: "Evaluate: 3 + 4 &times; 2",
            steps: [
              "Are there parentheses? No.",
              "Exponents? No.",
              "Multiplication/Division? Yes &mdash; do 4 &times; 2 = <strong>8</strong>.",
              "Now handle Addition/Subtraction: 3 + 8 = <strong>11</strong>.",
              "Answer: <strong>11</strong>"
            ]
          }
        },
        {
          heading: "Multi-Step Expressions with Parentheses",
          paragraphs: [
            "Parentheses are the most powerful tool in the order of operations &mdash; they always go first! Anything inside parentheses gets calculated before anything outside. If there are parentheses inside other parentheses (called <em>nested</em> parentheses), work from the innermost pair outward.",
            "After handling parentheses, continue with the rest of PEMDAS as usual. Multiplication and division are done left to right, then addition and subtraction left to right.",
            "Let&rsquo;s look at two more examples to see how parentheses change the answer."
          ],
          example: {
            title: "Worked Example: Parentheses Change Everything",
            problem: "Evaluate: 24 &divide; (8 &minus; 2) &times; 3",
            steps: [
              "<strong>Parentheses first:</strong> 8 &minus; 2 = <strong>6</strong>.",
              "The expression becomes: 24 &divide; 6 &times; 3.",
              "<strong>Division and Multiplication, left to right:</strong> 24 &divide; 6 = <strong>4</strong>.",
              "Then: 4 &times; 3 = <strong>12</strong>.",
              "Answer: <strong>12</strong>"
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
        question: "What is 2 &times; (3 + (12 &divide; 4)) &minus; 1?",
        type: "multiple-choice",
        options: ["11", "10", "13", "9"],
        correct: 0,
        explanation: "Innermost parentheses first: 12 &divide; 4 = 3. Then outer parentheses: 3 + 3 = 6. Multiply: 2 &times; 6 = 12. Subtract: 12 &minus; 1 = 11.",
        difficulty: "hard",
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
        question: "A theater has 12 rows with 15 seats each, but 8 seats are broken and removed. Which expression gives the number of usable seats, and what is the answer?",
        type: "multiple-choice",
        options: [
          "12 + 15 &minus; 8 = 19",
          "12 &times; 15 &minus; 8 = 172",
          "(12 &minus; 8) &times; 15 = 60",
          "12 &times; (15 &minus; 8) = 84"
        ],
        correct: 1,
        explanation: "Total seats = 12 &times; 15 = 180. Remove broken seats: 180 &minus; 8 = 172. The expression is 12 &times; 15 &minus; 8 = 172.",
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
      subtitle: "Explore positive numbers, negative numbers, and how they line up on the number line",
      sections: [
        {
          heading: "What Are Integers?",
          paragraphs: [
            "<strong>Integers</strong> are whole numbers and their negatives: &hellip; &minus;3, &minus;2, &minus;1, 0, 1, 2, 3 &hellip; They do <em>not</em> include fractions or decimals. Zero is an integer, and it is neither positive nor negative.",
            "You can picture all integers on a <strong>number line</strong> &mdash; a straight line with 0 in the middle, positive numbers stretching to the right, and negative numbers stretching to the left. Every integer has its own unique spot.",
            "Negative numbers show up everywhere in real life: temperatures below zero (&minus;5 &deg;F on a cold day), elevations below sea level (the Dead Sea is about &minus;430 meters), and bank withdrawals (spending $20 might show as &minus;$20 on a statement)."
          ],
          example: {
            title: "Worked Example: Placing Integers on a Number Line",
            problem: "Place &minus;3, 1, and &minus;1 on a number line.",
            steps: [
              "Draw a line and mark 0 in the center.",
              "Count 1 unit to the right for <strong>1</strong>.",
              "Count 1 unit to the left of 0 for <strong>&minus;1</strong>.",
              "Count 3 units to the left of 0 for <strong>&minus;3</strong>.",
              "Order from left to right: <strong>&minus;3, &minus;1, 0, 1</strong>."
            ]
          }
        },
        {
          heading: "Comparing & Ordering Integers",
          paragraphs: [
            "On the number line, a number further to the <strong>right</strong> is always <strong>greater</strong>, and a number further to the <strong>left</strong> is always <strong>smaller</strong>. This means every positive number is greater than every negative number, and every negative number is less than zero.",
            "When comparing two negative numbers, the one closer to zero is greater. For example, &minus;2 is greater than &minus;7, because &minus;2 is closer to zero (further right on the number line).",
            "Use the symbols: <strong>&lt;</strong> (less than), <strong>&gt;</strong> (greater than), and <strong>=</strong> (equal to). A handy trick: the symbol always opens toward the <em>bigger</em> number, like a hungry alligator eating the larger meal!"
          ],
          example: {
            title: "Worked Example: Comparing Integers",
            problem: "Put the correct symbol (&lt;, &gt;, or =) between &minus;4 and &minus;1.",
            steps: [
              "Picture both on a number line.",
              "&minus;4 is 4 units left of zero; &minus;1 is 1 unit left of zero.",
              "&minus;4 is further left, so it is <strong>smaller</strong>.",
              "Answer: <strong>&minus;4 &lt; &minus;1</strong>"
            ]
          }
        },
        {
          heading: "Absolute Value",
          paragraphs: [
            "The <strong>absolute value</strong> of a number is its distance from 0 on the number line. Distance is always positive (or zero), so absolute value is always <strong>non-negative</strong>. We write it with vertical bars: |n|.",
            "For example, |5| = 5 and |&minus;5| = 5. Both 5 and &minus;5 are exactly 5 units away from zero. Also, |0| = 0.",
            "Think of absolute value as answering the question: \"How far?\" without caring about direction. If the temperature drops to &minus;8 &deg;C, it is 8 degrees away from zero &mdash; that&rsquo;s the absolute value."
          ],
          example: {
            title: "Worked Example: Absolute Value",
            problem: "Find |&minus;12| and |7|. Which is greater?",
            steps: [
              "|&minus;12| = 12 (distance from 0 is 12 units).",
              "|7| = 7 (distance from 0 is 7 units).",
              "Compare: 12 &gt; 7.",
              "Answer: <strong>|&minus;12| is greater than |7|</strong>."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d2q1",
        question: "Which of the following is an integer?",
        type: "multiple-choice",
        options: ["3.5", "&minus;7", "1/2", "0.25"],
        correct: 1,
        explanation: "&minus;7 is a whole number (negative), so it is an integer. The others are fractions or decimals.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d2q2",
        question: "Which integer is furthest to the left on the number line?",
        type: "multiple-choice",
        options: ["&minus;2", "0", "3", "&minus;6"],
        correct: 3,
        explanation: "&minus;6 is further left than &minus;2, 0, or 3 on the number line.",
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
        explanation: "On the number line, from left to right: &minus;5, &minus;1, 0, 3, 4.",
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
        explanation: "&minus;6 is further left than &minus;3 on the number line, so &minus;6 &lt; &minus;3 is true.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d2q7",
        question: "Which of the following has the greatest absolute value?",
        type: "multiple-choice",
        options: ["|&minus;4|", "|7|", "|&minus;10|", "|3|"],
        correct: 2,
        explanation: "|&minus;4| = 4, |7| = 7, |&minus;10| = 10, |3| = 3. The greatest is 10.",
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d2q8",
        question: "At 6 AM the temperature was &minus;4 &deg;C. By noon it had risen 11 degrees. What was the noon temperature?",
        type: "multiple-choice",
        options: ["&minus;15 &deg;C", "15 &deg;C", "7 &deg;C", "&minus;7 &deg;C"],
        correct: 2,
        explanation: "Start at &minus;4 and move 11 units to the right: &minus;4 + 11 = 7 &deg;C.",
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d2q9",
        question: "What is the value of 5 + 2 &times; (8 &minus; 3)?",
        type: "multiple-choice",
        options: ["35", "15", "21", "50"],
        correct: 1,
        explanation: "Parentheses first: 8 &minus; 3 = 5. Then multiply: 2 &times; 5 = 10. Then add: 5 + 10 = 15.",
        difficulty: "medium",
        category: "review"
      },
      {
        id: "d2q10",
        question: "What is 100 &divide; (4 + 6) &times; 3?",
        type: "multiple-choice",
        options: ["3", "30", "300", "10"],
        correct: 1,
        explanation: "Parentheses first: 4 + 6 = 10. Then left to right: 100 &divide; 10 = 10, and 10 &times; 3 = 30.",
        difficulty: "medium",
        category: "review"
      }
    ]
  },

  // ============================================================
  // DAY 3: Integer Operations
  // ============================================================
  day3: {
    lesson: {
      title: "Integer Operations",
      subtitle: "Learn the rules for adding, subtracting, multiplying, and dividing positive and negative numbers",
      sections: [
        {
          heading: "Adding Integers",
          paragraphs: [
            "Adding integers follows two simple patterns. <strong>Same sign:</strong> Add the absolute values and keep the shared sign. For example, (&minus;3) + (&minus;5) &rarr; add 3 and 5 to get 8, both are negative so the answer is <strong>&minus;8</strong>.",
            "<strong>Different signs:</strong> Subtract the smaller absolute value from the larger one and take the sign of the number with the larger absolute value. For example, (&minus;7) + 4 &rarr; subtract 4 from 7 to get 3, and since 7 &gt; 4 the answer takes the negative sign: <strong>&minus;3</strong>.",
            "On the number line, adding a positive number means moving <em>right</em>, and adding a negative number means moving <em>left</em>. This visual can help you check your work."
          ],
          example: {
            title: "Worked Example: Adding Integers",
            problem: "Calculate (&minus;9) + 5",
            steps: [
              "The signs are different (&minus; and +).",
              "Find the absolute values: |&minus;9| = 9, |5| = 5.",
              "Subtract the smaller from the larger: 9 &minus; 5 = 4.",
              "The number with the larger absolute value is &minus;9 (negative), so the result is negative.",
              "Answer: <strong>&minus;4</strong>"
            ]
          }
        },
        {
          heading: "Subtracting Integers",
          paragraphs: [
            "Subtracting integers has a powerful shortcut: <strong>keep, change, change</strong>. Keep the first number the same. Change the subtraction sign to addition. Change the sign of the second number. Then follow the rules for adding integers.",
            "Why does this work? Subtracting a number is the same as adding its <em>opposite</em>. The opposite of 5 is &minus;5, and the opposite of &minus;3 is 3. So 7 &minus; (&minus;3) becomes 7 + 3 = 10.",
            "This trick is especially helpful when you see a double negative: &minus;4 &minus; (&minus;6) becomes &minus;4 + 6 = 2."
          ],
          example: {
            title: "Worked Example: Subtracting Integers",
            problem: "Calculate 3 &minus; (&minus;8)",
            steps: [
              "<strong>Keep</strong> the first number: 3.",
              "<strong>Change</strong> subtraction to addition: +.",
              "<strong>Change</strong> the sign of &minus;8 to +8.",
              "The problem becomes: 3 + 8.",
              "Answer: <strong>11</strong>"
            ]
          }
        },
        {
          heading: "Multiplying & Dividing Integers",
          paragraphs: [
            "The sign rules for multiplication and division are the same and very simple. <strong>Same signs &rarr; positive result.</strong> <strong>Different signs &rarr; negative result.</strong>",
            "Positive &times; Positive = Positive (e.g., 4 &times; 3 = 12).<br>Negative &times; Negative = Positive (e.g., &minus;4 &times; &minus;3 = 12).<br>Positive &times; Negative = Negative (e.g., 4 &times; &minus;3 = &minus;12).<br>Negative &times; Positive = Negative (e.g., &minus;4 &times; 3 = &minus;12).<br>The exact same rules apply when you replace &times; with &divide;.",
            "A quick way to remember: count the negative signs. An <em>even</em> number of negatives gives a positive result; an <em>odd</em> number gives a negative result."
          ],
          example: {
            title: "Worked Example: Multiplying & Dividing",
            problem: "Calculate (&minus;6) &times; (&minus;4) and (&minus;24) &divide; 3",
            steps: [
              "(&minus;6) &times; (&minus;4): two negatives (same sign) &rarr; positive. 6 &times; 4 = 24. Answer: <strong>24</strong>.",
              "(&minus;24) &divide; 3: one negative and one positive (different signs) &rarr; negative. 24 &divide; 3 = 8. Answer: <strong>&minus;8</strong>."
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
        explanation: "4 &minus; 9 = 4 + (&minus;9). Different signs: 9 &minus; 4 = 5, larger absolute value is negative, so answer is &minus;5.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d3q4",
        question: "What is (&minus;8) &times; 5?",
        type: "multiple-choice",
        options: ["40", "&minus;40", "13", "&minus;13"],
        correct: 1,
        explanation: "Different signs (negative &times; positive) &rarr; negative. 8 &times; 5 = 40. Answer: &minus;40.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d3q5",
        question: "What is (&minus;36) &divide; (&minus;9)?",
        type: "multiple-choice",
        options: ["&minus;4", "4", "&minus;27", "27"],
        correct: 1,
        explanation: "Same signs (both negative) &rarr; positive. 36 &divide; 9 = 4. Answer: 4.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d3q6",
        question: "What is (&minus;5) &minus; (&minus;12)?",
        type: "multiple-choice",
        options: ["&minus;17", "7", "&minus;7", "17"],
        correct: 1,
        explanation: "Keep, change, change: &minus;5 + 12. Different signs: 12 &minus; 5 = 7, larger absolute value is positive. Answer: 7.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d3q7",
        question: "What is (&minus;3) &times; (&minus;2) &times; (&minus;4)?",
        type: "multiple-choice",
        options: ["24", "&minus;24", "9", "&minus;9"],
        correct: 1,
        explanation: "(&minus;3) &times; (&minus;2) = 6 (two negatives make positive). Then 6 &times; (&minus;4) = &minus;24 (positive &times; negative = negative). Three negative signs (odd count) gives a negative result.",
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d3q8",
        question: "A submarine is at &minus;200 meters (below sea level). It descends another 150 meters. What is its new depth?",
        type: "multiple-choice",
        options: ["&minus;50 meters", "350 meters", "&minus;350 meters", "50 meters"],
        correct: 2,
        explanation: "Start at &minus;200. Descending means going further negative: &minus;200 + (&minus;150) = &minus;350 meters.",
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d3q9",
        question: "What is 3 + 6 &times; (4 &minus; 1)?",
        type: "multiple-choice",
        options: ["21", "27", "13", "19"],
        correct: 0,
        explanation: "Parentheses: 4 &minus; 1 = 3. Multiply: 6 &times; 3 = 18. Add: 3 + 18 = 21. (PEMDAS review from Day 1)",
        difficulty: "medium",
        category: "review"
      },
      {
        id: "d3q10",
        question: "Which list is in order from least to greatest?",
        type: "multiple-choice",
        options: [
          "&minus;1, &minus;5, 0, 3",
          "3, 0, &minus;1, &minus;5",
          "&minus;5, &minus;1, 0, 3",
          "0, &minus;1, &minus;5, 3"
        ],
        correct: 2,
        explanation: "On the number line, from left to right (least to greatest): &minus;5, &minus;1, 0, 3. (Review from Day 2)",
        difficulty: "easy",
        category: "review"
      }
    ]
  },

  // ============================================================
  // DAY 4: Fractions Basics
  // ============================================================
  day4: {
    lesson: {
      title: "Fractions Basics",
      subtitle: "Understand what fractions mean, how to simplify them, compare them, and convert between mixed numbers and improper fractions",
      sections: [
        {
          heading: "Understanding Fractions",
          paragraphs: [
            "A <strong>fraction</strong> represents a part of a whole. It is written as two numbers separated by a line: the <strong>numerator</strong> (top) tells how many parts you have, and the <strong>denominator</strong> (bottom) tells how many equal parts make up the whole. For example, 3/4 means 3 out of 4 equal parts.",
            "Imagine a pizza cut into 8 equal slices. If you eat 3 slices, you have eaten 3/8 of the pizza. The denominator (8) tells you the total slices, and the numerator (3) tells you how many you ate.",
            "Key fact: any whole number can be written as a fraction by putting it over 1. For instance, 5 = 5/1. And a fraction where the numerator is 0 always equals 0, no matter the denominator (as long as the denominator is not zero &mdash; dividing by zero is undefined!)."
          ],
          example: {
            title: "Worked Example: Identifying Parts of a Fraction",
            problem: "A chocolate bar has 12 pieces. You break off 5 pieces. What fraction of the bar did you take?",
            steps: [
              "The whole bar has <strong>12</strong> equal pieces (denominator).",
              "You took <strong>5</strong> pieces (numerator).",
              "Fraction: <strong>5/12</strong>."
            ]
          }
        },
        {
          heading: "Equivalent Fractions & Simplifying",
          paragraphs: [
            "<strong>Equivalent fractions</strong> look different but represent the same amount. You create them by multiplying or dividing both the numerator and denominator by the <em>same</em> non-zero number. For example, 1/2 = 2/4 = 3/6 = 4/8 &mdash; all name the same amount.",
            "To <strong>simplify</strong> (or reduce) a fraction, divide both the numerator and denominator by their <strong>Greatest Common Factor (GCF)</strong>. The GCF of 8 and 12 is 4, so 8/12 = (8 &divide; 4)/(12 &divide; 4) = 2/3. A fraction is in <em>simplest form</em> when the only common factor of the numerator and denominator is 1.",
            "Simplifying doesn&rsquo;t change the value of the fraction &mdash; 8/12 and 2/3 are exactly the same amount. It just makes the fraction easier to read and work with."
          ],
          example: {
            title: "Worked Example: Simplifying a Fraction",
            problem: "Simplify 18/24.",
            steps: [
              "Find the GCF of 18 and 24. Factors of 18: 1, 2, 3, 6, 9, 18. Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24. GCF = <strong>6</strong>.",
              "Divide both parts by 6: 18 &divide; 6 = 3, and 24 &divide; 6 = 4.",
              "Answer: <strong>18/24 = 3/4</strong>"
            ]
          }
        },
        {
          heading: "Comparing Fractions",
          paragraphs: [
            "To compare two fractions, the easiest method is to give them a <strong>common denominator</strong>. Once the denominators are the same, simply compare the numerators &mdash; the larger numerator means the larger fraction.",
            "There is also a quick shortcut called <strong>cross-multiplication</strong>: to compare a/b and c/d, compute a &times; d and c &times; b. If a &times; d is greater, then a/b is greater. If c &times; b is greater, then c/d is greater. If they are equal, the fractions are equal.",
            "Be careful with negative fractions &mdash; the same rules apply, but remember that the fraction further to the right on the number line is greater."
          ],
          example: {
            title: "Worked Example: Comparing Fractions",
            problem: "Which is greater: 3/5 or 2/3?",
            steps: [
              "<strong>Method &mdash; Cross-multiply:</strong>",
              "3 &times; 3 = 9 (numerator of first &times; denominator of second).",
              "2 &times; 5 = 10 (numerator of second &times; denominator of first).",
              "Since 9 &lt; 10, we have 3/5 &lt; 2/3.",
              "Answer: <strong>2/3 is greater.</strong>"
            ]
          }
        },
        {
          heading: "Mixed Numbers & Improper Fractions",
          paragraphs: [
            "A <strong>mixed number</strong> has a whole number part and a fraction part, like 2 3/4. An <strong>improper fraction</strong> has a numerator greater than or equal to its denominator, like 11/4. They represent the same value.",
            "To convert a mixed number to an improper fraction: multiply the whole number by the denominator, add the numerator, and put the result over the original denominator. For 2 3/4: (2 &times; 4) + 3 = 11, so 2 3/4 = 11/4.",
            "To convert an improper fraction to a mixed number: divide the numerator by the denominator. The quotient is the whole number, the remainder is the new numerator, and the denominator stays the same. For 17/5: 17 &divide; 5 = 3 remainder 2, so 17/5 = 3 2/5."
          ],
          example: {
            title: "Worked Example: Converting Between Forms",
            problem: "Convert 3 2/7 to an improper fraction, and convert 23/6 to a mixed number.",
            steps: [
              "<strong>3 2/7 &rarr; improper:</strong> (3 &times; 7) + 2 = 21 + 2 = 23. So 3 2/7 = <strong>23/7</strong>.",
              "<strong>23/6 &rarr; mixed:</strong> 23 &divide; 6 = 3 remainder 5. So 23/6 = <strong>3 5/6</strong>."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d4q1",
        question: "Which fraction is equivalent to 2/5?",
        type: "multiple-choice",
        options: ["4/10", "3/6", "2/10", "4/5"],
        correct: 0,
        explanation: "Multiply numerator and denominator by 2: 2/5 = 4/10.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d4q2",
        question: "Simplify 12/16 to its lowest terms.",
        type: "multiple-choice",
        options: ["6/8", "3/4", "4/5", "2/3"],
        correct: 1,
        explanation: "GCF of 12 and 16 is 4. Divide both by 4: 12/16 = 3/4.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d4q3",
        question: "What fraction of a dozen (12) eggs is 9 eggs?",
        type: "multiple-choice",
        options: ["9/12 = 3/4", "3/12 = 1/4", "9/3 = 3", "12/9 = 4/3"],
        correct: 0,
        explanation: "9 out of 12 = 9/12. Simplify by dividing both by 3: 9/12 = 3/4.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d4q4",
        question: "Which is greater: 5/8 or 3/5?",
        type: "multiple-choice",
        options: ["5/8", "3/5", "They are equal", "Cannot be determined"],
        correct: 0,
        explanation: "Cross-multiply: 5 &times; 5 = 25 and 3 &times; 8 = 24. Since 25 &gt; 24, 5/8 &gt; 3/5.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d4q5",
        question: "Convert 4 1/3 to an improper fraction.",
        type: "multiple-choice",
        options: ["12/3", "13/3", "5/3", "41/3"],
        correct: 1,
        explanation: "(4 &times; 3) + 1 = 13. So 4 1/3 = 13/3.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d4q6",
        question: "Convert 22/7 to a mixed number.",
        type: "multiple-choice",
        options: ["3 1/7", "3 2/7", "2 8/7", "7 1/3"],
        correct: 0,
        explanation: "22 &divide; 7 = 3 remainder 1. So 22/7 = 3 1/7.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d4q7",
        question: "Put these fractions in order from least to greatest: 1/3, 3/8, 2/5",
        type: "multiple-choice",
        options: [
          "1/3, 3/8, 2/5",
          "3/8, 1/3, 2/5",
          "2/5, 3/8, 1/3",
          "1/3, 2/5, 3/8"
        ],
        correct: 0,
        explanation: "Convert to a common denominator of 120: 1/3 = 40/120, 3/8 = 45/120, 2/5 = 48/120. Order: 40 &lt; 45 &lt; 48, so 1/3 &lt; 3/8 &lt; 2/5.",
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d4q8",
        question: "If 3/n = 12/20, what is the value of n?",
        type: "multiple-choice",
        options: ["4", "5", "7", "9"],
        correct: 1,
        explanation: "12/20 simplifies to 3/5. So 3/n = 3/5, which means n = 5. (Or cross-multiply: 3 &times; 20 = 12 &times; n &rarr; 60 = 12n &rarr; n = 5.)",
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d4q9",
        question: "What is (6 + 4) &times; 3 &minus; 2 &times; 7?",
        type: "multiple-choice",
        options: ["16", "44", "70", "24"],
        correct: 0,
        explanation: "Parentheses: 6 + 4 = 10. Multiply: 10 &times; 3 = 30 and 2 &times; 7 = 14. Subtract: 30 &minus; 14 = 16. (PEMDAS review)",
        difficulty: "medium",
        category: "review"
      },
      {
        id: "d4q10",
        question: "What is (&minus;15) &divide; 3 + (&minus;2)?",
        type: "multiple-choice",
        options: ["&minus;7", "7", "&minus;3", "3"],
        correct: 0,
        explanation: "(&minus;15) &divide; 3 = &minus;5 (different signs &rarr; negative). Then &minus;5 + (&minus;2) = &minus;7 (same signs, add and keep negative). (Integer operations review)",
        difficulty: "medium",
        category: "review"
      }
    ]
  },

  // ============================================================
  // DAY 5: Fraction Operations
  // ============================================================
  day5: {
    lesson: {
      title: "Fraction Operations",
      subtitle: "Add, subtract, multiply, and divide fractions like a pro",
      sections: [
        {
          heading: "Adding & Subtracting Fractions",
          paragraphs: [
            "When fractions share the same denominator (<strong>like denominators</strong>), adding or subtracting is easy: just add or subtract the numerators and keep the denominator. For example, 2/7 + 3/7 = 5/7.",
            "When the denominators are different (<strong>unlike denominators</strong>), you need to find the <strong>Least Common Denominator (LCD)</strong> first. The LCD is the smallest number that both denominators divide into evenly. Rewrite each fraction with the LCD, then add or subtract the numerators.",
            "Always simplify your answer if possible. If the result is an improper fraction, you may convert it to a mixed number depending on what the problem asks for."
          ],
          example: {
            title: "Worked Example: Adding Unlike Fractions",
            problem: "Calculate 2/3 + 1/4.",
            steps: [
              "Find the LCD of 3 and 4. Multiples of 3: 3, 6, 9, <strong>12</strong>. Multiples of 4: 4, 8, <strong>12</strong>. LCD = 12.",
              "Rewrite each fraction: 2/3 = 8/12 (multiply top and bottom by 4). 1/4 = 3/12 (multiply top and bottom by 3).",
              "Add the numerators: 8/12 + 3/12 = 11/12.",
              "11/12 is already in simplest form.",
              "Answer: <strong>11/12</strong>"
            ]
          }
        },
        {
          heading: "Multiplying Fractions",
          paragraphs: [
            "Multiplying fractions is straightforward: <strong>multiply the numerators together</strong> and <strong>multiply the denominators together</strong>. Then simplify the result. For example, 2/3 &times; 4/5 = (2 &times; 4)/(3 &times; 5) = 8/15.",
            "A time-saving trick is <strong>cross-canceling</strong> before you multiply. If a numerator and a denominator (from different fractions) share a common factor, divide them both by that factor first. This keeps the numbers smaller and avoids big simplifications at the end.",
            "If one of the numbers is a whole number, write it as a fraction over 1 first. For example, 3 &times; 2/5 = 3/1 &times; 2/5 = 6/5 = 1 1/5."
          ],
          example: {
            title: "Worked Example: Multiplying with Cross-Canceling",
            problem: "Calculate 3/8 &times; 4/9.",
            steps: [
              "Before multiplying, look for cross-canceling opportunities.",
              "The 3 (numerator) and 9 (denominator) share a factor of 3: 3 &divide; 3 = 1 and 9 &divide; 3 = 3.",
              "The 4 (numerator) and 8 (denominator) share a factor of 4: 4 &divide; 4 = 1 and 8 &divide; 4 = 2.",
              "Now multiply: 1/2 &times; 1/3 = 1/6.",
              "Answer: <strong>1/6</strong>"
            ]
          }
        },
        {
          heading: "Dividing Fractions",
          paragraphs: [
            "To divide by a fraction, use the rule: <strong>Keep, Change, Flip</strong>. Keep the first fraction. Change the division sign to multiplication. Flip the second fraction (use its <strong>reciprocal</strong>). Then multiply as usual.",
            "The reciprocal of a/b is b/a &mdash; you just swap the numerator and denominator. The reciprocal of 2/3 is 3/2. The reciprocal of 5 (which is 5/1) is 1/5.",
            "After flipping, you can cross-cancel just like with multiplication to keep numbers small."
          ],
          example: {
            title: "Worked Example: Dividing Fractions",
            problem: "Calculate 5/6 &divide; 2/3.",
            steps: [
              "<strong>Keep</strong> the first fraction: 5/6.",
              "<strong>Change</strong> &divide; to &times;.",
              "<strong>Flip</strong> the second fraction: 2/3 becomes 3/2.",
              "Multiply: 5/6 &times; 3/2. Cross-cancel: 3 and 6 share factor 3 &rarr; 1 and 2.",
              "5/2 &times; 1/2 = 5/4 = <strong>1 1/4</strong>.",
              "Answer: <strong>5/4 or 1 1/4</strong>"
            ]
          }
        },
        {
          heading: "Mixed Number Operations",
          paragraphs: [
            "The safest strategy for <strong>multiplying or dividing mixed numbers</strong> is to convert them to improper fractions first, then use the rules you just learned. For example, to compute 2 1/2 &times; 1 1/3, convert to 5/2 &times; 4/3 = 20/6 = 10/3 = 3 1/3.",
            "For <strong>adding or subtracting mixed numbers</strong>, you have two choices. You can convert to improper fractions and work from there, or you can add/subtract the whole number parts and the fraction parts separately (just be careful if the fraction part requires borrowing).",
            "Always remember to simplify your final answer and convert back to a mixed number if the problem calls for one."
          ],
          example: {
            title: "Worked Example: Subtracting Mixed Numbers",
            problem: "Calculate 5 1/4 &minus; 2 2/3.",
            steps: [
              "Convert to improper fractions: 5 1/4 = 21/4, and 2 2/3 = 8/3.",
              "Find the LCD of 4 and 3: LCD = 12.",
              "Rewrite: 21/4 = 63/12 and 8/3 = 32/12.",
              "Subtract: 63/12 &minus; 32/12 = 31/12.",
              "Convert to a mixed number: 31 &divide; 12 = 2 remainder 7.",
              "Answer: <strong>31/12 = 2 7/12</strong>"
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d5q1",
        question: "What is 3/8 + 1/8?",
        type: "multiple-choice",
        options: ["4/16", "4/8 = 1/2", "3/16", "2/8"],
        correct: 1,
        explanation: "Same denominator: add the numerators. 3 + 1 = 4. Result: 4/8, which simplifies to 1/2.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d5q2",
        question: "What is 5/6 &minus; 1/6?",
        type: "multiple-choice",
        options: ["4/6 = 2/3", "6/6 = 1", "4/12", "5/12"],
        correct: 0,
        explanation: "Same denominator: 5 &minus; 1 = 4. Result: 4/6, which simplifies to 2/3.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d5q3",
        question: "What is 2/5 &times; 3/4?",
        type: "multiple-choice",
        options: ["6/20 = 3/10", "5/9", "6/9 = 2/3", "5/20 = 1/4"],
        correct: 0,
        explanation: "Multiply numerators: 2 &times; 3 = 6. Multiply denominators: 5 &times; 4 = 20. Simplify: 6/20 = 3/10.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d5q4",
        question: "What is 1/3 + 1/4?",
        type: "multiple-choice",
        options: ["2/7", "7/12", "1/7", "2/12 = 1/6"],
        correct: 1,
        explanation: "LCD of 3 and 4 is 12. Rewrite: 1/3 = 4/12, 1/4 = 3/12. Add: 4/12 + 3/12 = 7/12.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d5q5",
        question: "What is 3/4 &divide; 1/2?",
        type: "multiple-choice",
        options: ["3/8", "3/2 = 1 1/2", "2/3", "1/4"],
        correct: 1,
        explanation: "Keep, Change, Flip: 3/4 &times; 2/1 = 6/4 = 3/2 = 1 1/2.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d5q6",
        question: "What is 7/10 &minus; 2/5?",
        type: "multiple-choice",
        options: ["5/5 = 1", "3/10", "5/10 = 1/2", "9/10"],
        correct: 1,
        explanation: "LCD of 10 and 5 is 10. Rewrite: 2/5 = 4/10. Subtract: 7/10 &minus; 4/10 = 3/10.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d5q7",
        question: "What is 2 1/3 + 1 1/2?",
        type: "multiple-choice",
        options: ["3 2/5", "3 5/6", "3 1/5", "4 1/6"],
        correct: 1,
        explanation: "Convert: 2 1/3 = 7/3, 1 1/2 = 3/2. LCD = 6. Rewrite: 14/6 + 9/6 = 23/6 = 3 5/6.",
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d5q8",
        question: "What is 1 3/4 &times; 2/3?",
        type: "multiple-choice",
        options: ["1 1/6", "2 1/4", "3 1/2", "7/6 = 1 1/6"],
        correct: 3,
        explanation: "Convert: 1 3/4 = 7/4. Multiply: 7/4 &times; 2/3. Cross-cancel 2 and 4 (factor of 2): 7/2 &times; 1/3 = 7/6 = 1 1/6.",
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d5q9",
        question: "What is 15 &minus; 3 &times; (2 + 1)<sup>2</sup>?",
        type: "multiple-choice",
        options: ["108", "&minus;12", "6", "&minus;6"],
        correct: 1,
        explanation: "Parentheses: 2 + 1 = 3. Exponent: 3<sup>2</sup> = 9. Multiply: 3 &times; 9 = 27. Subtract: 15 &minus; 27 = &minus;12. (PEMDAS review)",
        difficulty: "hard",
        category: "review"
      },
      {
        id: "d5q10",
        question: "Which is greater: 5/9 or 4/7?",
        type: "multiple-choice",
        options: [
          "5/9, because 5 &gt; 4",
          "4/7, because 5 &times; 7 = 35 &lt; 4 &times; 9 = 36",
          "They are equal",
          "5/9, because 9 &gt; 7"
        ],
        correct: 1,
        explanation: "Cross-multiply: 5 &times; 7 = 35 and 4 &times; 9 = 36. Since 35 &lt; 36, we get 5/9 &lt; 4/7, so 4/7 is greater. (Fractions review)",
        difficulty: "medium",
        category: "review"
      }
    ]
  }

};
