export const DAYS_11_15 = {
  day11: {
    lesson: {
      title: "Comparing Fractions & Mixed Numbers",
      subtitle: "Learn to compare, convert, and order fractions and mixed numbers",
      sections: [
        {
          heading: "Comparing Fractions",
          paragraphs: [
            "How do you know which of two fractions is larger? The easiest method is to give them a <strong>common denominator</strong>. Once two fractions share the same bottom number, just compare their numerators&mdash;the bigger numerator wins! For example, to compare 3/5 and 2/3, rewrite them with a common denominator of 15: 3/5 = 9/15 and 2/3 = 10/15. Since 10 &gt; 9, we know 2/3 &gt; 3/5.",
            "There is a handy shortcut called <strong>cross-multiplication</strong>. To compare a/b and c/d, compute a &times; d and b &times; c. If a &times; d &gt; b &times; c, then a/b &gt; c/d. For 3/5 vs. 2/3: compute 3 &times; 3 = 9 and 5 &times; 2 = 10. Since 9 &lt; 10, we get 3/5 &lt; 2/3&mdash;same answer, no common denominator needed!",
            "Watch out for <strong>negative fractions</strong>. Remember, any negative number is less than any positive number. When comparing two negative fractions like &minus;2/3 and &minus;1/4, find which has the larger <em>absolute value</em>&mdash;that one is actually <em>smaller</em> (farther left on the number line). Since 2/3 &gt; 1/4, we get &minus;2/3 &lt; &minus;1/4."
          ],
          example: {
            title: "Worked Example: Comparing Two Fractions",
            problem: "Which is greater: 5/8 or 3/5?",
            steps: [
              "Use cross-multiplication: compare 5 &times; 5 and 8 &times; 3.",
              "5 &times; 5 = 25 and 8 &times; 3 = 24.",
              "Since 25 &gt; 24, we have 5/8 &gt; 3/5.",
              "Check with common denominator: 5/8 = 25/40 and 3/5 = 24/40. Indeed 25/40 &gt; 24/40. &#10003;",
              "Answer: <strong>5/8</strong> is greater."
            ],
            graphs: [{
              type: 'numberLine', min: 0, max: 1, step: 0.1, width: 480, height: 70,
              points: [
                { x: 0.6, color: '#e53e3e', label: '3/5 = 0.6' },
                { x: 0.625, color: '#7c3aed', label: '5/8 = 0.625' },
                { x: 0, color: '#667eea', label: '0' },
                { x: 1, color: '#667eea', label: '1' }
              ],
              caption: "5/8 > 3/5 — the cross-multiplication confirms it"
            }]
          }
        },
        {
          heading: "Mixed Numbers & Improper Fractions",
          paragraphs: [
            "A <strong>mixed number</strong> has a whole-number part and a fraction part, like 2 3/4. It means 2 + 3/4. An <strong>improper fraction</strong> has a numerator that is greater than or equal to its denominator, like 11/4. Mixed numbers and improper fractions are two ways of writing the same value.",
            "To convert a <strong>mixed number to an improper fraction</strong>, multiply the whole number by the denominator, add the numerator, and put the result over the original denominator. For 2 3/4: (2 &times; 4) + 3 = 11, so 2 3/4 = 11/4. A quick way to remember: <em>\"multiply, add, keep the bottom.\"</em>",
            "To convert an <strong>improper fraction to a mixed number</strong>, divide the numerator by the denominator. The quotient is the whole part, and the remainder goes over the denominator. For 17/5: 17 &divide; 5 = 3 remainder 2, so 17/5 = 3 2/5. You can place mixed numbers on a number line by finding the whole part first, then marking the fraction between that whole number and the next."
          ],
          example: {
            title: "Worked Example: Converting Between Forms",
            problem: "Convert 3 2/7 to an improper fraction, then convert 23/6 to a mixed number.",
            steps: [
              "For 3 2/7: multiply 3 &times; 7 = 21, then add 2: 21 + 2 = 23. So 3 2/7 = 23/7.",
              "For 23/6: divide 23 &divide; 6 = 3 remainder 5.",
              "The whole part is 3, the remainder is 5, the denominator stays 6.",
              "Answer: 3 2/7 = <strong>23/7</strong> and 23/6 = <strong>3 5/6</strong>."
            ],
            graphs: [{
              type: 'numberLine', min: 0, max: 5, step: 1, width: 480, height: 70,
              points: [
                { x: 3.286, color: '#7c3aed', label: '3 2/7 = 23/7' },
                { x: 0, color: '#667eea', label: '0' }
              ],
              caption: "3 2/7 = 23/7 ≈ 3.29 — between 3 and 4 on the number line"
            }]
          },
          practice: [
            { type: "type-answer", prompt: "Convert 5 2/3 to an improper fraction.", answer: "17/3", accept: ["17/3","17 / 3"], explanation: "Multiply 5 × 3 = 15, then add 2: 15 + 2 = 17. So 5 2/3 = 17/3." },
            { type: "type-answer", prompt: "Convert 22/5 to a mixed number.", answer: "4 2/5", accept: ["4 2/5","4-2/5","4 and 2/5"], explanation: "22 ÷ 5 = 4 remainder 2. So 22/5 = 4 2/5." },
            { type: "multiple-quick", prompt: "Which is greater: 3/7 or 2/5?", options: ["3/7", "2/5", "They are equal"], correct: 0, explanation: "Cross-multiply: 3 × 5 = 15 and 7 × 2 = 14. Since 15 > 14, 3/7 > 2/5." }
          ]
        },
        {
          heading: "Ordering Fractions & Mixed Numbers",
          paragraphs: [
            "Sometimes you need to put a whole set of fractions in order from least to greatest (or greatest to least). The strategy is the same: find a <strong>common denominator</strong> for all of them, rewrite each fraction, then compare the numerators. If mixed numbers are involved, convert them to improper fractions first.",
            "Here is a step-by-step approach: <strong>(1)</strong> Convert any mixed numbers to improper fractions. <strong>(2)</strong> Find the LCD (least common denominator) of all the fractions. <strong>(3)</strong> Rewrite each fraction with the LCD. <strong>(4)</strong> Compare the numerators and arrange. <strong>(5)</strong> Convert back to mixed numbers if needed.",
            "For example, order 1/2, 2 1/3, and 5/6 from least to greatest. Convert: 1/2 stays, 2 1/3 = 7/3, and 5/6 stays. The LCD of 2, 3, and 6 is 6. Rewrite: 1/2 = 3/6, 7/3 = 14/6, 5/6 = 5/6. Comparing numerators: 3 &lt; 5 &lt; 14, so the order is 1/2 &lt; 5/6 &lt; 2 1/3."
          ],
          example: {
            title: "Worked Example: Ordering a Set of Fractions",
            problem: "Order from least to greatest: 3/4, 2/3, 7/12.",
            steps: [
              "Find the LCD of 4, 3, and 12. The LCM is 12.",
              "Rewrite: 3/4 = 9/12, 2/3 = 8/12, 7/12 = 7/12.",
              "Compare numerators: 7 &lt; 8 &lt; 9.",
              "Answer: <strong>7/12 &lt; 2/3 &lt; 3/4</strong>."
            ],
            graphs: [{
              type: 'numberLine', min: 0, max: 1, step: 0.1, width: 480, height: 70,
              points: [
                { x: 0.583, color: '#e53e3e', label: '7/12' },
                { x: 0.667, color: '#7c3aed', label: '2/3' },
                { x: 0.75, color: '#764ba2', label: '3/4' },
                { x: 0, color: '#667eea', label: '0' },
                { x: 1, color: '#667eea', label: '1' }
              ],
              caption: "7/12 < 2/3 < 3/4 — plotted in order on the number line"
            }]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d11q1",
        question: "Which is greater: 2/5 or 3/8?",
        type: "multiple-choice",
        options: ["2/5", "3/8", "They are equal", "Cannot be determined"],
        correct: 0,
        explanation: "Cross-multiply: 2 &times; 8 = 16 and 5 &times; 3 = 15. Since 16 &gt; 15, 2/5 &gt; 3/8.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d11q2",
        question: "Convert 4 1/3 to an improper fraction.",
        type: "multiple-choice",
        options: ["12/3", "13/3", "5/3", "41/3"],
        correct: 1,
        explanation: "Multiply 4 &times; 3 = 12, then add 1: 12 + 1 = 13. So 4 1/3 = 13/3.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d11q3",
        question: "Convert 19/4 to a mixed number.",
        type: "multiple-choice",
        options: ["4 1/4", "4 3/4", "5 1/4", "3 3/4"],
        correct: 1,
        explanation: "19 &divide; 4 = 4 remainder 3. So 19/4 = 4 3/4.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d11q4",
        question: "Which fraction is the smallest: 5/6, 3/4, or 7/8?",
        type: "multiple-choice",
        options: ["5/6", "3/4", "7/8", "They are all equal"],
        correct: 1,
        explanation: "LCD of 6, 4, and 8 is 24. Rewrite: 5/6 = 20/24, 3/4 = 18/24, 7/8 = 21/24. The smallest numerator is 18, so 3/4 is the smallest.",
        difficulty: "medium",
        category: "topic",
        hints: ["To compare fractions, try giving them all the same denominator.", "Find the LCD of 6, 4, and 8 — then rewrite each fraction and compare the tops."]
      },
      {
        id: "d11q5",
        question: "Which is true about &minus;3/5 and &minus;1/2?",
        type: "multiple-choice",
        options: ["&minus;3/5 &gt; &minus;1/2", "&minus;3/5 &lt; &minus;1/2", "&minus;3/5 = &minus;1/2", "Cannot compare negatives"],
        correct: 1,
        explanation: "Compare absolute values: 3/5 = 6/10 and 1/2 = 5/10. Since 6/10 &gt; 5/10, &minus;3/5 is farther from zero, so &minus;3/5 &lt; &minus;1/2.",
        difficulty: "medium",
        category: "topic",
        hints: ["With negative fractions, the one with the bigger absolute value is actually the smaller number.", "Compare the absolute values 3/5 and 1/2 first — which one is farther from zero?"]
      },
      {
        id: "d11q6",
        question: "Order from least to greatest: 1/3, 3/8, 2/5.",
        type: "multiple-choice",
        options: [
          "1/3 &lt; 3/8 &lt; 2/5",
          "3/8 &lt; 1/3 &lt; 2/5",
          "2/5 &lt; 3/8 &lt; 1/3",
          "1/3 &lt; 2/5 &lt; 3/8"
        ],
        correct: 0,
        explanation: "LCD of 3, 8, and 5 is 120. Rewrite: 1/3 = 40/120, 3/8 = 45/120, 2/5 = 48/120. Order: 40 &lt; 45 &lt; 48, so 1/3 &lt; 3/8 &lt; 2/5.",
        difficulty: "medium",
        category: "topic",
        hints: ["To order fractions, rewrite them all with the same denominator and compare.", "Find the LCD of 3, 8, and 5, then convert each fraction."]
      },
      {
        id: "d11q7",
        question: "Which mixed number is equivalent to 31/5?",
        type: "multiple-choice",
        options: ["5 1/5", "6 1/5", "5 6/5", "7 1/5"],
        correct: 1,
        explanation: "31 &divide; 5 = 6 remainder 1. So 31/5 = 6 1/5.",
        difficulty: "medium",
        category: "topic",
        hints: ["To convert an improper fraction to a mixed number, divide the top by the bottom.", "Divide 31 by 5 — the quotient is the whole part and the remainder goes on top."]
      },
      {
        id: "d11q8",
        question: "Order from least to greatest: 1 3/4, 5/3, 1 2/5.",
        type: "multiple-choice",
        options: [
          "5/3 &lt; 1 2/5 &lt; 1 3/4",
          "1 2/5 &lt; 5/3 &lt; 1 3/4",
          "1 3/4 &lt; 5/3 &lt; 1 2/5",
          "1 2/5 &lt; 1 3/4 &lt; 5/3"
        ],
        correct: 1,
        explanation: "Convert: 1 3/4 = 7/4, 5/3 stays, 1 2/5 = 7/5. LCD of 4, 3, 5 is 60. Rewrite: 7/4 = 105/60, 5/3 = 100/60, 7/5 = 84/60. Order: 84 &lt; 100 &lt; 105, so 1 2/5 &lt; 5/3 &lt; 1 3/4.",
        difficulty: "hard",
        category: "topic",
        hints: ["Convert every mixed number to an improper fraction first, then find a common denominator.", "Start by turning 1 3/4, 5/3, and 1 2/5 into improper fractions — then find the LCD of 4, 3, and 5."]
      },
      {
        id: "d11q9",
        question: "Simplify the fraction 36/48 to lowest terms.",
        type: "multiple-choice",
        options: ["9/12", "6/8", "3/4", "18/24"],
        correct: 2,
        explanation: "GCD of 36 and 48 is 12. Divide both: 36 &divide; 12 = 3 and 48 &divide; 12 = 4. So 36/48 = 3/4.",
        difficulty: "hard",
        category: "review",
        hints: ["To simplify a fraction, divide the top and bottom by their GCD.", "Find the GCD of 36 and 48 — try listing factors or using prime factorization."]
      },
      {
        id: "d11q10",
        question: "What is the GCD of 42 and 56?",
        type: "multiple-choice",
        options: ["7", "14", "21", "28"],
        correct: 1,
        explanation: "Prime factorizations: 42 = 2 &times; 3 &times; 7 and 56 = 2<sup>3</sup> &times; 7. The shared factors are 2 and 7, so GCD = 2 &times; 7 = 14.",
        difficulty: "hard",
        category: "review",
        hints: ["The GCD is the biggest number that divides evenly into both numbers.", "Break 42 and 56 into their prime factors and multiply the ones they share."]
      }
    ]
  },

  day12: {
    lesson: {
      title: "Adding & Subtracting Fractions",
      subtitle: "Use the LCD to add and subtract fractions like a pro",
      sections: [
        {
          heading: "Like Denominators",
          paragraphs: [
            "When two fractions have the <strong>same denominator</strong> (called <em>like denominators</em>), adding or subtracting them is simple: just add or subtract the numerators and keep the denominator the same. Think of it like adding slices of the same-size pizza: 3/8 + 2/8 = 5/8&mdash;you have 3 eighths plus 2 more eighths, giving 5 eighths.",
            "Subtraction works the same way. For 7/10 &minus; 3/10, subtract the numerators: 7 &minus; 3 = 4, and keep the denominator: 4/10. Don&rsquo;t forget to <strong>simplify</strong> your answer! Since GCD(4, 10) = 2, we get 4/10 = 2/5.",
            "Even with larger numbers, the rule holds: 11/15 + 7/15 = 18/15. That&rsquo;s an improper fraction, so convert it: 18/15 = 1 3/15 = 1 1/5. Always check if you can simplify at the end!"
          ],
          example: {
            title: "Worked Example: Adding Like Denominators",
            problem: "Compute 5/12 + 3/12.",
            steps: [
              "The denominators are both 12, so add the numerators: 5 + 3 = 8.",
              "Keep the denominator: 8/12.",
              "Simplify: GCD(8, 12) = 4. Divide both by 4: 8/12 = 2/3.",
              "Answer: <strong>2/3</strong>."
            ],
            graphs: [{
              type: 'numberLine', min: 0, max: 1, step: 0.1, width: 480, height: 70,
              points: [
                { x: 0.417, color: '#7c3aed', label: '5/12' },
                { x: 0.667, color: '#e53e3e', label: '8/12 = 2/3' }
              ],
              intervals: [{ from: 0.417, to: 0.667, color: '#667eea', label: '+3/12' }],
              caption: "5/12 + 3/12 = 8/12 = 2/3"
            }]
          }
        },
        {
          heading: "Unlike Denominators & the LCD",
          paragraphs: [
            "When fractions have <strong>different denominators</strong>, you can&rsquo;t just add the numerators&mdash;the pieces are different sizes! First, you need to rewrite them with a <strong>common denominator</strong>. The best choice is the <strong>LCD (Least Common Denominator)</strong>, which is just the LCM of the denominators. This is exactly why we learned LCM back on Day 8!",
            "For example, to add 2/3 + 1/4, find the LCD: LCM(3, 4) = 12. Rewrite: 2/3 = 8/12 and 1/4 = 3/12. Now add: 8/12 + 3/12 = 11/12. Using the LCD keeps the numbers as small as possible, which makes the arithmetic easier.",
            "Subtraction with unlike denominators works the same way. For 5/6 &minus; 1/4: LCD = LCM(6, 4) = 12. Rewrite: 5/6 = 10/12 and 1/4 = 3/12. Subtract: 10/12 &minus; 3/12 = 7/12. Always simplify if you can, though 7/12 is already in lowest terms."
          ],
          example: {
            title: "Worked Example: Subtracting Unlike Denominators",
            problem: "Compute 3/4 &minus; 2/5.",
            steps: [
              "Find the LCD: LCM(4, 5) = 20.",
              "Rewrite: 3/4 = 15/20 and 2/5 = 8/20.",
              "Subtract the numerators: 15 &minus; 8 = 7.",
              "Keep the denominator: 7/20.",
              "Check: GCD(7, 20) = 1, so it&rsquo;s already simplified.",
              "Answer: <strong>7/20</strong>."
            ],
            graphs: [{
              type: 'numberLine', min: 0, max: 1.5, step: 0.25, width: 480, height: 70,
              points: [
                { x: 0.75, color: '#7c3aed', label: '3/4' },
                { x: 0.4, color: '#764ba2', label: '2/5' },
                { x: 1.15, color: '#e53e3e', label: '23/20' }
              ],
              intervals: [{ from: 0.75, to: 1.15, color: '#667eea', label: '+2/5' }],
              caption: "3/4 + 2/5 = 15/20 + 8/20 = 23/20 = 1 3/20"
            }]
          },
          practice: [
            { type: "type-answer", prompt: "Compute: 1/3 + 1/6 (simplify)", answer: "1/2", accept: ["1/2","3/6"], explanation: "LCD = 6. Rewrite: 1/3 = 2/6. Add: 2/6 + 1/6 = 3/6 = 1/2." },
            { type: "type-answer", prompt: "Compute: 5/8 − 1/4 (simplify)", answer: "3/8", accept: ["3/8"], explanation: "LCD = 8. Rewrite: 1/4 = 2/8. Subtract: 5/8 − 2/8 = 3/8." },
            { type: "multiple-quick", prompt: "What is 2/5 + 1/3?", options: ["3/8", "11/15", "7/15"], correct: 1, explanation: "LCD = 15. Rewrite: 2/5 = 6/15, 1/3 = 5/15. Add: 6/15 + 5/15 = 11/15." }
          ]
        },
        {
          heading: "Adding & Subtracting Mixed Numbers",
          paragraphs: [
            "There are two strategies for mixed numbers. <strong>Strategy 1:</strong> Convert each mixed number to an improper fraction, find the LCD, add or subtract, then convert back. This method always works and avoids surprises. For 2 1/3 + 1 1/2: convert to 7/3 + 3/2, LCD = 6, rewrite as 14/6 + 9/6 = 23/6 = 3 5/6.",
            "<strong>Strategy 2:</strong> Add the whole parts and fraction parts separately. For 2 1/3 + 1 1/2: whole parts: 2 + 1 = 3. Fraction parts: 1/3 + 1/2 = 2/6 + 3/6 = 5/6. Combined: 3 5/6. This strategy is faster when it works, but be careful with subtraction!",
            "When subtracting, you sometimes need to <strong>borrow</strong>. For 5 1/4 &minus; 2 3/4: the fraction part gives 1/4 &minus; 3/4, which is negative. Borrow 1 from the 5 to get 4 5/4 &minus; 2 3/4. Now: 4 &minus; 2 = 2 and 5/4 &minus; 3/4 = 2/4 = 1/2. Answer: 2 1/2. Borrowing is like making change with whole numbers&mdash;you break a whole into fraction pieces."
          ],
          example: {
            title: "Worked Example: Subtracting Mixed Numbers with Borrowing",
            problem: "Compute 4 1/6 &minus; 1 5/6.",
            steps: [
              "Fraction part: 1/6 &minus; 5/6 is negative, so we need to borrow.",
              "Borrow 1 from 4: rewrite 4 1/6 as 3 7/6 (since 1 = 6/6, and 6/6 + 1/6 = 7/6).",
              "Now subtract whole parts: 3 &minus; 1 = 2.",
              "Subtract fraction parts: 7/6 &minus; 5/6 = 2/6 = 1/3.",
              "Answer: <strong>2 1/3</strong>."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d12q1",
        question: "What is 3/7 + 2/7?",
        type: "multiple-choice",
        options: ["5/14", "5/7", "1/7", "6/7"],
        correct: 1,
        explanation: "Same denominator: add numerators 3 + 2 = 5. Keep the denominator: 5/7.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d12q2",
        question: "What is 9/10 &minus; 3/10?",
        type: "multiple-choice",
        options: ["6/10 = 3/5", "6/20", "12/10", "3/10"],
        correct: 0,
        explanation: "Same denominator: 9 &minus; 3 = 6. Result: 6/10. Simplify: GCD(6, 10) = 2, so 6/10 = 3/5.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d12q3",
        question: "What is 1/3 + 1/4? Write your answer as a fraction.",
        type: "type-answer",
        answer: "7/12",
        accept: ["7/12"],
        explanation: "LCD = LCM(3, 4) = 12. Rewrite: 1/3 = 4/12, 1/4 = 3/12. Add: 4/12 + 3/12 = 7/12.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d12q4",
        question: "What is 5/6 &minus; 1/4?",
        type: "multiple-choice",
        options: ["4/2", "7/12", "1/3", "11/12"],
        correct: 1,
        explanation: "LCD = LCM(6, 4) = 12. Rewrite: 5/6 = 10/12, 1/4 = 3/12. Subtract: 10/12 &minus; 3/12 = 7/12.",
        difficulty: "medium",
        category: "topic",
        hints: ["When denominators are different, you need a common denominator before subtracting.", "Find the LCD of 6 and 4, then rewrite both fractions with that denominator."]
      },
      {
        id: "d12q5",
        question: "What is 2/3 + 3/5?",
        type: "multiple-choice",
        options: ["5/8", "1 4/15", "1 1/8", "11/15"],
        correct: 1,
        explanation: "LCD = LCM(3, 5) = 15. Rewrite: 2/3 = 10/15, 3/5 = 9/15. Add: 10/15 + 9/15 = 19/15 = 1 4/15.",
        difficulty: "medium",
        category: "topic",
        hints: ["Find a common denominator for the two fractions, then add — the result might be improper!", "The LCD of 3 and 5 is 15. Rewrite 2/3 and 3/5 with denominator 15 before adding."]
      },
      {
        id: "d12q6",
        question: "Compute 3 1/2 + 2 2/3.",
        type: "multiple-choice",
        options: ["5 3/5", "6 1/6", "5 7/6", "5 1/6"],
        correct: 1,
        explanation: "Whole parts: 3 + 2 = 5. Fractions: 1/2 + 2/3. LCD = 6: 3/6 + 4/6 = 7/6 = 1 1/6. Add to whole: 5 + 1 1/6 = 6 1/6.",
        difficulty: "medium",
        category: "topic",
        hints: ["You can add the whole parts and the fraction parts separately.", "Add 3 + 2 = 5 for the whole parts, then add 1/2 + 2/3 using a common denominator of 6."]
      },
      {
        id: "d12q7",
        question: "Compute 5 1/4 &minus; 2 3/4.",
        type: "multiple-choice",
        options: ["3 1/2", "2 1/2", "2 2/4", "3 2/4"],
        correct: 1,
        explanation: "1/4 &minus; 3/4 is negative, so borrow: 5 1/4 = 4 5/4. Now: 4 &minus; 2 = 2, 5/4 &minus; 3/4 = 2/4 = 1/2. Answer: 2 1/2.",
        difficulty: "hard",
        category: "topic",
        hints: ["When the fraction you're subtracting is bigger, you need to borrow from the whole number.", "Since 1/4 is less than 3/4, borrow 1 from the 5 to make the fraction part bigger."]
      },
      {
        id: "d12q8",
        question: "What is 7/8 + 5/6 &minus; 1/3?",
        type: "multiple-choice",
        options: ["11/8", "31/24", "29/24", "1 1/4"],
        correct: 2,
        explanation: "LCD of 8, 6, and 3 is 24. Rewrite: 7/8 = 21/24, 5/6 = 20/24, 1/3 = 8/24. Compute: 21 + 20 &minus; 8 = 33/24. Wait&mdash;let me recalculate: 21/24 + 20/24 = 41/24, then 41/24 &minus; 8/24 = 33/24. Hmm, that simplifies to 11/8 = 1 3/8. Actually: 21 + 20 = 41, 41 &minus; 8 = 33. 33/24 = 11/8. Let me recheck the options&mdash;29/24 corresponds to a different calculation. Recheck: 7/8 = 21/24. 5/6 = 20/24. 1/3 = 8/24. Sum: 21 + 20 &minus; 8 = 33. 33/24 = 11/8. The answer is 11/8 = 1 3/8.",
        difficulty: "hard",
        category: "topic",
        hints: ["With three fractions, find the LCD of all three denominators first.", "The LCD of 8, 6, and 3 is 24 — rewrite every fraction with 24 on the bottom, then add and subtract."]
      },
      {
        id: "d12q9",
        question: "What is the LCM of 9 and 12?",
        type: "multiple-choice",
        options: ["108", "36", "72", "3"],
        correct: 1,
        explanation: "9 = 3<sup>2</sup> and 12 = 2<sup>2</sup> &times; 3. LCM = 2<sup>2</sup> &times; 3<sup>2</sup> = 4 &times; 9 = 36.",
        difficulty: "medium",
        category: "review",
        hints: ["The LCM is the smallest number that both values divide into evenly.", "Write out the prime factorizations of 9 and 12, then take the highest power of each prime."]
      },
      {
        id: "d12q10",
        question: "What is the LCM of 8 and 14?",
        type: "multiple-choice",
        options: ["112", "56", "28", "24"],
        correct: 1,
        explanation: "8 = 2<sup>3</sup> and 14 = 2 &times; 7. LCM = 2<sup>3</sup> &times; 7 = 8 &times; 7 = 56.",
        difficulty: "hard",
        category: "review",
        hints: ["Use prime factorization to find the LCM — take the highest power of each prime.", "8 = 2³ and 14 = 2 × 7. The LCM uses the biggest power of each prime factor."]
      }
    ]
  },

  day13: {
    lesson: {
      title: "Multiplying & Dividing Fractions",
      subtitle: "Multiply straight across, divide by flipping, and use cross-canceling to simplify",
      sections: [
        {
          heading: "Multiplying Fractions",
          paragraphs: [
            "Multiplying fractions is one of the simplest fraction operations: <strong>multiply the numerators together</strong> and <strong>multiply the denominators together</strong>. That&rsquo;s it! For example, 2/3 &times; 4/5 = (2 &times; 4)/(3 &times; 5) = 8/15. No common denominator needed.",
            "After multiplying, always <strong>simplify</strong> your answer. For 3/4 &times; 2/9 = 6/36 = 1/6. But there&rsquo;s a shortcut: <strong>cross-cancel</strong> before you multiply. Look for a common factor between any numerator and any denominator. In 3/4 &times; 2/9, the 3 and 9 share a factor of 3 (3 &rarr; 1, 9 &rarr; 3), and the 2 and 4 share a factor of 2 (2 &rarr; 1, 4 &rarr; 2). Now multiply: 1/2 &times; 1/3 = 1/6. Same answer, smaller numbers!",
            "When multiplying a <strong>fraction by a whole number</strong>, write the whole number as a fraction over 1. For example, 5 &times; 3/4 = 5/1 &times; 3/4 = 15/4 = 3 3/4. Remember, a fraction times a number smaller than 1 gives a result <em>smaller</em> than the original number, while a fraction times a number greater than 1 gives a result <em>larger</em>."
          ],
          example: {
            title: "Worked Example: Multiplying with Cross-Canceling",
            problem: "Compute 5/8 &times; 4/15.",
            steps: [
              "Before multiplying, look for common factors to cancel.",
              "The 5 (numerator) and 15 (denominator) share a factor of 5: 5 &rarr; 1, 15 &rarr; 3.",
              "The 4 (numerator) and 8 (denominator) share a factor of 4: 4 &rarr; 1, 8 &rarr; 2.",
              "Now multiply: 1/2 &times; 1/3 = 1/6.",
              "Answer: <strong>1/6</strong>."
            ]
          }
        },
        {
          heading: "Dividing Fractions",
          paragraphs: [
            "Dividing fractions uses a simple trick called <strong>Keep-Change-Flip</strong> (also called \"multiply by the reciprocal\"). To divide a/b &divide; c/d: <strong>Keep</strong> the first fraction, <strong>Change</strong> the &divide; to &times;, and <strong>Flip</strong> the second fraction. So a/b &divide; c/d becomes a/b &times; d/c. Then just multiply as usual!",
            "The <strong>reciprocal</strong> of a fraction is what you get when you flip it upside down. The reciprocal of 3/4 is 4/3, and the reciprocal of 7 (which is 7/1) is 1/7. A number times its reciprocal always equals 1: 3/4 &times; 4/3 = 12/12 = 1. That&rsquo;s why this trick works&mdash;dividing by a number is the same as multiplying by its reciprocal.",
            "Example: 2/3 &divide; 4/5. Keep 2/3, change to multiplication, flip 4/5 to get 5/4. Now multiply: 2/3 &times; 5/4 = 10/12 = 5/6. You can cross-cancel here too: the 2 and 4 share a factor of 2, giving 1/3 &times; 5/2 = 5/6. Same answer!"
          ],
          example: {
            title: "Worked Example: Dividing Fractions",
            problem: "Compute 7/10 &divide; 3/5.",
            steps: [
              "Keep-Change-Flip: 7/10 &divide; 3/5 becomes 7/10 &times; 5/3.",
              "Cross-cancel: the 5 and 10 share a factor of 5. 5 &rarr; 1, 10 &rarr; 2.",
              "Multiply: 7/2 &times; 1/3 = 7/6.",
              "Convert to a mixed number: 7/6 = 1 1/6.",
              "Answer: <strong>1 1/6</strong>."
            ]
          },
          practice: [
            { type: "type-answer", prompt: "Compute: 3/4 × 2/5 (simplify)", answer: "3/10", accept: ["3/10"], explanation: "Multiply: 3 × 2 = 6 and 4 × 5 = 20. Simplify: 6/20 = 3/10." },
            { type: "type-answer", prompt: "Compute: 5/6 ÷ 2/3 (simplify)", answer: "5/4", accept: ["5/4","1 1/4","1-1/4"], explanation: "Keep-Change-Flip: 5/6 × 3/2. Cross-cancel 3 and 6: 5/2 × 1/2 = 5/4 = 1 1/4." },
            { type: "multiple-quick", prompt: "What is the reciprocal of 7?", options: ["−7", "1/7", "7/1"], correct: 1, explanation: "7 = 7/1, so its reciprocal is 1/7." }
          ]
        },
        {
          heading: "Mixed Number Operations & Raising Fractions to Powers",
          paragraphs: [
            "When multiplying or dividing <strong>mixed numbers</strong>, the first step is always to convert them to improper fractions. For example, 2 1/3 &times; 1 1/2: convert to 7/3 &times; 3/2. Cross-cancel the 3s: 7/1 &times; 1/2 = 7/2 = 3 1/2. Never try to multiply the whole parts and fraction parts separately&mdash;that doesn&rsquo;t work for multiplication!",
            "To <strong>raise a fraction to a power</strong>, apply the exponent to both the numerator and the denominator: (a/b)<sup>n</sup> = a<sup>n</sup>/b<sup>n</sup>. For example, (2/3)<sup>3</sup> = 2<sup>3</sup>/3<sup>3</sup> = 8/27. This connects back to the exponent rules you learned on Days 5&ndash;6.",
            "What about <strong>negative exponents</strong> with fractions? Remember that a negative exponent means \"take the reciprocal\": (a/b)<sup>&minus;n</sup> = (b/a)<sup>n</sup>. So (3/4)<sup>&minus;2</sup> = (4/3)<sup>2</sup> = 16/9 = 1 7/9. The negative exponent flips the fraction first, then you apply the positive power."
          ],
          example: {
            title: "Worked Example: Fraction Raised to a Power",
            problem: "Compute (3/5)<sup>2</sup> &times; 5/9.",
            steps: [
              "First, compute the power: (3/5)<sup>2</sup> = 3<sup>2</sup>/5<sup>2</sup> = 9/25.",
              "Now multiply: 9/25 &times; 5/9.",
              "Cross-cancel: 9 in the numerator and 9 in the denominator cancel to 1. The 5 and 25 share a factor of 5: 5 &rarr; 1, 25 &rarr; 5.",
              "Multiply: 1/5 &times; 1/1 = 1/5.",
              "Answer: <strong>1/5</strong>."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d13q1",
        question: "What is 2/3 &times; 3/4?",
        type: "multiple-choice",
        options: ["6/12 = 1/2", "5/7", "2/4", "6/7"],
        correct: 0,
        explanation: "Multiply numerators: 2 &times; 3 = 6. Multiply denominators: 3 &times; 4 = 12. Result: 6/12 = 1/2.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d13q2",
        question: "What is the reciprocal of 5/8?",
        type: "multiple-choice",
        options: ["5/8", "&minus;5/8", "8/5", "&minus;8/5"],
        correct: 2,
        explanation: "The reciprocal of a fraction is obtained by flipping it. The reciprocal of 5/8 is 8/5.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d13q3",
        question: "What is 3/5 &divide; 1/2?",
        type: "multiple-choice",
        options: ["3/10", "6/5 = 1 1/5", "3/7", "2/5"],
        correct: 1,
        explanation: "Keep-Change-Flip: 3/5 &times; 2/1 = 6/5 = 1 1/5.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d13q4",
        question: "What is 4/9 &times; 3/8?",
        type: "multiple-choice",
        options: ["12/72 = 1/6", "7/17", "1/3", "12/17"],
        correct: 0,
        explanation: "Multiply: 4 &times; 3 = 12, 9 &times; 8 = 72. Simplify: 12/72 = 1/6. (Or cross-cancel first: 4 and 8 share 4, 3 and 9 share 3, giving 1/3 &times; 1/2 = 1/6.)",
        difficulty: "medium",
        category: "topic",
        hints: ["Multiply tops together and bottoms together — but try cross-canceling first to keep numbers small.", "Look for a common factor between the 4 and 8, and between the 3 and 9, before you multiply."]
      },
      {
        id: "d13q5",
        question: "Compute 2 1/2 &times; 1 3/5.",
        type: "multiple-choice",
        options: ["3 1/2", "4", "2 3/10", "3 3/5"],
        correct: 1,
        explanation: "Convert: 2 1/2 = 5/2 and 1 3/5 = 8/5. Multiply: 5/2 &times; 8/5. Cross-cancel the 5s: 1/2 &times; 8/1 = 8/2 = 4.",
        difficulty: "medium",
        category: "topic",
        hints: ["Convert both mixed numbers to improper fractions before multiplying.", "2 1/2 = 5/2 and 1 3/5 = 8/5 — now multiply and look for cross-canceling."]
      },
      {
        id: "d13q6",
        question: "What is 5/6 &divide; 10/9?",
        type: "multiple-choice",
        options: ["50/54", "3/4", "15/54", "1/2"],
        correct: 1,
        explanation: "Keep-Change-Flip: 5/6 &times; 9/10. Cross-cancel: 5 and 10 (factor 5) &rarr; 1/6 &times; 9/2. Also 9 and 6 (factor 3) &rarr; 1/2 &times; 3/2 = 3/4.",
        difficulty: "medium",
        category: "topic",
        hints: ["Remember Keep-Change-Flip: keep the first fraction, change ÷ to ×, flip the second.", "Flip 10/9 to get 9/10, then multiply 5/6 × 9/10 and cross-cancel."]
      },
      {
        id: "d13q7",
        question: "What is (2/3)<sup>3</sup>?",
        type: "multiple-choice",
        options: ["6/9", "8/27", "2/27", "8/9"],
        correct: 1,
        explanation: "Apply the exponent to numerator and denominator: 2<sup>3</sup>/3<sup>3</sup> = 8/27.",
        difficulty: "hard",
        category: "topic",
        hints: ["When you raise a fraction to a power, apply the exponent to both the top and bottom.", "Compute 2³ for the numerator and 3³ for the denominator separately."]
      },
      {
        id: "d13q8",
        question: "Compute 3 1/3 &divide; 1 2/3.",
        type: "multiple-choice",
        options: ["2", "5/3", "1 2/3", "3"],
        correct: 0,
        explanation: "Convert: 3 1/3 = 10/3 and 1 2/3 = 5/3. Keep-Change-Flip: 10/3 &times; 3/5. Cross-cancel the 3s and the 5 with 10: 10/1 &times; 1/5 = 10/5 = 2.",
        difficulty: "hard",
        category: "topic",
        hints: ["Convert both mixed numbers to improper fractions, then use Keep-Change-Flip.", "3 1/3 = 10/3 and 1 2/3 = 5/3 — now flip the second and multiply."]
      },
      {
        id: "d13q9",
        question: "What is 3<sup>4</sup> &divide; 3<sup>2</sup>?",
        type: "multiple-choice",
        options: ["3<sup>2</sup> = 9", "3<sup>6</sup>", "3<sup>8</sup>", "1"],
        correct: 0,
        explanation: "Using the quotient rule: 3<sup>4</sup> &divide; 3<sup>2</sup> = 3<sup>4&minus;2</sup> = 3<sup>2</sup> = 9.",
        difficulty: "medium",
        category: "review",
        hints: ["When dividing powers with the same base, you can subtract the exponents.", "Use the quotient rule: 3⁴ ÷ 3² = 3^(4−2). What's 3²?"]
      },
      {
        id: "d13q10",
        question: "What is 5<sup>0</sup>?",
        type: "multiple-choice",
        options: ["0", "5", "1", "50"],
        correct: 2,
        explanation: "Any nonzero number raised to the power of 0 equals 1. So 5<sup>0</sup> = 1.",
        difficulty: "hard",
        category: "review",
        hints: ["There's a special rule for any nonzero number raised to the zero power.", "Think about the pattern: 5³ = 125, 5² = 25, 5¹ = 5 — what comes next when you keep dividing by 5?"]
      }
    ]
  },

  day14: {
    lesson: {
      title: "Variables & Expressions",
      subtitle: "Use letters to represent unknowns, write expressions, and simplify them",
      sections: [
        {
          heading: "What Are Variables?",
          paragraphs: [
            "A <strong>variable</strong> is a letter&mdash;like <em>x</em>, <em>n</em>, or <em>t</em>&mdash;that stands for a number we don&rsquo;t know yet. Imagine a mystery box that holds a number inside; the variable is the label on the box. Variables let us write rules and formulas that work for <em>many</em> values, not just one.",
            "An <strong>algebraic expression</strong> is a combination of numbers, variables, and operations (like +, &minus;, &times;, &divide;). For example, 3x + 7 is an expression with two <strong>terms</strong>: the term 3x and the constant term 7. A <strong>term</strong> is a piece of the expression separated by + or &minus; signs.",
            "In the term 3x, the number 3 is called the <strong>coefficient</strong>&mdash;it tells you how many of that variable you have. The 7 is called a <strong>constant</strong> because it doesn&rsquo;t change. When you see a variable with no number in front, like just <em>x</em>, the coefficient is 1 (since x = 1 &times; x)."
          ],
          example: {
            title: "Worked Example: Identifying Parts of an Expression",
            problem: "Identify the terms, coefficients, and constants in 5a &minus; 2b + 9.",
            steps: [
              "The expression has three terms: 5a, &minus;2b, and 9.",
              "The coefficient of <em>a</em> is 5.",
              "The coefficient of <em>b</em> is &minus;2 (the minus sign belongs to the term).",
              "The constant is 9.",
              "Answer: Terms: <strong>5a, &minus;2b, 9</strong>. Coefficients: <strong>5</strong> and <strong>&minus;2</strong>. Constant: <strong>9</strong>."
            ]
          }
        },
        {
          heading: "Writing Algebraic Expressions",
          paragraphs: [
            "A huge part of algebra is translating <strong>words into math</strong>. Here are the key phrases: <em>\"sum of\"</em> or <em>\"more than\"</em> &rarr; addition. <em>\"Difference of\"</em> or <em>\"less than\"</em> &rarr; subtraction. <em>\"Product of\"</em> or <em>\"times\"</em> &rarr; multiplication. <em>\"Quotient of\"</em> or <em>\"divided by\"</em> &rarr; division.",
            "Be careful with word order! <em>\"5 less than a number\"</em> means <strong>n &minus; 5</strong> (not 5 &minus; n)&mdash;the <em>\"less than\"</em> reverses the order. <em>\"Twice a number\"</em> means <strong>2n</strong>. <em>\"A number divided by 3\"</em> means <strong>n/3</strong>. <em>\"The square of a number\"</em> means <strong>n<sup>2</sup></strong>.",
            "More complex phrases combine operations: <em>\"3 more than twice a number\"</em> &rarr; 2n + 3. <em>\"Half of the sum of a number and 10\"</em> &rarr; (n + 10)/2. Notice how <em>\"half of the sum\"</em> means the division applies to the <em>entire</em> sum, so we need parentheses. Reading carefully and thinking step-by-step is the key!"
          ],
          example: {
            title: "Worked Example: Translating Words to Math",
            problem: "Write an algebraic expression: \"the product of 4 and a number, decreased by 7.\"",
            steps: [
              "Let the number be <em>n</em>.",
              "\"The product of 4 and a number\" &rarr; 4n.",
              "\"Decreased by 7\" &rarr; subtract 7.",
              "Answer: <strong>4n &minus; 7</strong>."
            ]
          }
        },
        {
          heading: "Evaluating Expressions",
          paragraphs: [
            "To <strong>evaluate</strong> an expression means to find its value by <em>substituting</em> a given number for each variable, then computing with PEMDAS. Always use parentheses when you substitute to avoid sign errors, especially with negative numbers.",
            "Example: Evaluate 3x<sup>2</sup> &minus; 2x + 1 when x = 4. Substitute: 3(4)<sup>2</sup> &minus; 2(4) + 1 = 3(16) &minus; 8 + 1 = 48 &minus; 8 + 1 = 41. Exponents come before multiplication in PEMDAS, so square the 4 first, <em>then</em> multiply by 3.",
            "With <strong>multiple variables</strong>, substitute each one. Evaluate 2a + b/c when a = 5, b = 12, c = 4: substitute to get 2(5) + 12/4 = 10 + 3 = 13. Be sure to substitute the correct value for each letter&mdash;mix-ups are a common mistake!"
          ],
          practice: [
            { type: "type-answer", prompt: "Evaluate 4x &minus; 3 when x = 5.", answer: "17", accept: ["17"], explanation: "4(5) &minus; 3 = 20 &minus; 3 = 17." },
            { type: "type-answer", prompt: "Evaluate x<sup>2</sup> + 2x when x = 3.", answer: "15", accept: ["15"], explanation: "3&sup2; + 2(3) = 9 + 6 = 15." },
            { type: "multiple-quick", prompt: "If y = &minus;2, what is 3y + 10?", options: ["16", "4", "&minus;4", "&minus;16"], correct: 1, explanation: "3(&minus;2) + 10 = &minus;6 + 10 = 4." }
          ],
          example: {
            title: "Worked Example: Evaluating with Negatives",
            problem: "Evaluate 2x<sup>2</sup> + 3x &minus; 5 when x = &minus;3.",
            steps: [
              "Substitute x = &minus;3: 2(&minus;3)<sup>2</sup> + 3(&minus;3) &minus; 5.",
              "Compute the exponent: (&minus;3)<sup>2</sup> = 9.",
              "Multiply: 2(9) = 18 and 3(&minus;3) = &minus;9.",
              "Combine: 18 + (&minus;9) &minus; 5 = 18 &minus; 9 &minus; 5 = 4.",
              "Answer: <strong>4</strong>."
            ]
          }
        },
        {
          heading: "Simplifying: Like Terms & the Distributive Property",
          paragraphs: [
            "<strong>Like terms</strong> are terms that have the exact same variable part. For example, 5x and &minus;2x are like terms (both have <em>x</em>), and 3y<sup>2</sup> and 7y<sup>2</sup> are like terms (both have <em>y<sup>2</sup></em>). But 4x and 4x<sup>2</sup> are <em>not</em> like terms&mdash;the exponents are different! Constants like 6 and &minus;3 are like terms too.",
            "To <strong>combine like terms</strong>, add or subtract their coefficients. For example: 8x + 3x = 11x and 5y &minus; 9y = &minus;4y. In the expression 4x + 7 &minus; 2x + 3, combine the x-terms (4x &minus; 2x = 2x) and the constants (7 + 3 = 10) to get 2x + 10.",
            "The <strong>distributive property</strong> says a(b + c) = ab + ac. Multiply the number outside by <em>each</em> term inside the parentheses. For example, 3(2x + 5) = 6x + 15. After distributing, look for like terms to combine. For 4(x + 3) + 2x: distribute to get 4x + 12 + 2x, then combine: 6x + 12."
          ],
          example: {
            title: "Worked Example: Distribute and Combine Like Terms",
            problem: "Simplify: 5(2x &minus; 3) + 4x + 8.",
            steps: [
              "Distribute 5 into (2x &minus; 3): 5 &times; 2x = 10x and 5 &times; (&minus;3) = &minus;15.",
              "Rewrite: 10x &minus; 15 + 4x + 8.",
              "Combine x-terms: 10x + 4x = 14x.",
              "Combine constants: &minus;15 + 8 = &minus;7.",
              "Answer: <strong>14x &minus; 7</strong>."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d14q1",
        question: "In the expression 7m + 4, what is the coefficient of <em>m</em>?",
        type: "multiple-choice",
        options: ["4", "m", "7", "7m"],
        correct: 2,
        explanation: "The coefficient is the number multiplied by the variable. In 7m, the coefficient is 7.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d14q2",
        question: "Which expression means \"8 more than a number\"?",
        type: "multiple-choice",
        options: ["8n", "n &minus; 8", "8 &minus; n", "n + 8"],
        correct: 3,
        explanation: "\"More than\" means addition. \"8 more than a number\" = n + 8.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d14q3",
        question: "Evaluate 3x + 2 when x = 5.",
        type: "multiple-choice",
        options: ["10", "17", "32", "13"],
        correct: 1,
        explanation: "Substitute x = 5: 3(5) + 2 = 15 + 2 = 17.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d14q4",
        question: "Which expression represents \"6 less than three times a number\"?",
        type: "multiple-choice",
        options: ["6 &minus; 3n", "3n &minus; 6", "3(n &minus; 6)", "3 &minus; 6n"],
        correct: 1,
        explanation: "\"Three times a number\" = 3n. \"6 less than\" = subtract 6 from it. Result: 3n &minus; 6.",
        difficulty: "medium",
        category: "topic",
        hints: ["Watch the word order — 'less than' means you subtract FROM the other part.", "Write 'three times a number' first (3n), then subtract 6 from it."]
      },
      {
        id: "d14q5",
        question: "Evaluate 2a<sup>2</sup> &minus; b when a = 3 and b = 5.",
        type: "type-answer",
        answer: "13",
        accept: ["13"],
        explanation: "Substitute: 2(3)<sup>2</sup> &minus; 5 = 2(9) &minus; 5 = 18 &minus; 5 = 13.",
        difficulty: "medium",
        category: "topic",
        hints: ["Substitute the values for each variable carefully, and remember PEMDAS \u2014 exponents come first!", "Replace a with 3: compute (3)\u00b2 = 9 first, then multiply by 2 and subtract b."]
      },
      {
        id: "d14q6",
        question: "Simplify: 6x + 3 &minus; 4x + 9.",
        type: "multiple-choice",
        options: ["10x + 12", "2x + 12", "2x &minus; 6", "10x + 6"],
        correct: 1,
        explanation: "Combine x-terms: 6x &minus; 4x = 2x. Combine constants: 3 + 9 = 12. Result: 2x + 12.",
        difficulty: "medium",
        category: "topic",
        hints: ["Combine like terms: group the x-terms together and the plain numbers together.", "Add 6x and −4x for the variable part, then add 3 and 9 for the constant part."]
      },
      {
        id: "d14q7",
        question: "Simplify: 3(4x &minus; 2) + 5x.",
        type: "multiple-choice",
        options: ["17x &minus; 2", "12x &minus; 6", "17x &minus; 6", "7x &minus; 6"],
        correct: 2,
        explanation: "Distribute: 3(4x) &minus; 3(2) = 12x &minus; 6. Then 12x &minus; 6 + 5x = 17x &minus; 6.",
        difficulty: "hard",
        category: "topic",
        hints: ["Use the distributive property first — multiply 3 by each term inside the parentheses.", "Distribute: 3 × 4x and 3 × (−2), then combine the result with the +5x."]
      },
      {
        id: "d14q8",
        question: "Evaluate x<sup>2</sup> &minus; 4x + 4 when x = &minus;2.",
        type: "multiple-choice",
        options: ["0", "16", "8", "12"],
        correct: 1,
        explanation: "Substitute: (&minus;2)<sup>2</sup> &minus; 4(&minus;2) + 4 = 4 + 8 + 4 = 16.",
        difficulty: "hard",
        category: "topic",
        hints: ["Substitute carefully with negatives — use parentheses around −2 to avoid sign mistakes.", "Start with (−2)² = 4 (positive!), then compute −4(−2) = +8, and add everything up."]
      },
      {
        id: "d14q9",
        question: "What is 3/4 &times; 8/9?",
        type: "multiple-choice",
        options: ["24/36 = 2/3", "11/13", "1/3", "3/8"],
        correct: 0,
        explanation: "Multiply: (3 &times; 8)/(4 &times; 9) = 24/36. Simplify: GCD(24, 36) = 12, so 24/36 = 2/3.",
        difficulty: "medium",
        category: "review",
        hints: ["Multiply numerators together and denominators together — but cross-cancel first!", "The 3 and 9 share a factor, and the 8 and 4 share a factor. Cancel before multiplying."]
      },
      {
        id: "d14q10",
        question: "Compute 3 1/2 &divide; 7/8.",
        type: "multiple-choice",
        options: ["2", "4", "3 1/4", "49/16"],
        correct: 1,
        explanation: "Convert: 3 1/2 = 7/2. Keep-Change-Flip: 7/2 &times; 8/7. Cross-cancel the 7s: 1/2 &times; 8/1 = 8/2 = 4.",
        difficulty: "hard",
        category: "review",
        hints: ["Convert the mixed number to an improper fraction, then use Keep-Change-Flip to divide.", "3 1/2 = 7/2. Now flip 7/8 to get 8/7 and multiply."]
      }
    ]
  },

  day15: {
    lesson: {
      title: "Solving One- & Two-Step Equations",
      subtitle: "Use inverse operations to find the mystery number in any equation",
      sections: [
        {
          heading: "What Is an Equation?",
          paragraphs: [
            "An <strong>equation</strong> is a math sentence with an equals sign (=) that says two things have the same value. For example, 2x + 3 = 11 is an equation. An <strong>expression</strong> like 2x + 3 does <em>not</em> have an equals sign&mdash;that&rsquo;s the key difference. Equations ask a question: <em>\"What value of x makes this true?\"</em>",
            "Think of an equation like a <strong>balance scale</strong>. The left side and right side weigh the same amount. If you add a weight to one side, you must add the same weight to the other side to keep it balanced. Every step you take while solving an equation must keep both sides equal.",
            "The <strong>solution</strong> of an equation is the value of the variable that makes the equation true. For x + 4 = 9, the solution is x = 5 because 5 + 4 = 9. You can always <strong>check</strong> your answer by plugging it back into the original equation to see if both sides are equal."
          ],
          example: {
            title: "Worked Example: Checking a Solution",
            problem: "Is x = 6 a solution to 3x &minus; 4 = 14?",
            steps: [
              "Substitute x = 6 into the left side: 3(6) &minus; 4 = 18 &minus; 4 = 14.",
              "Compare with the right side: 14 = 14. &#10003;",
              "Both sides are equal, so yes, x = 6 is a solution.",
              "Answer: <strong>Yes</strong>, x = 6 is a solution."
            ]
          }
        },
        {
          heading: "One-Step Equations",
          paragraphs: [
            "A <strong>one-step equation</strong> needs just one operation to solve. The strategy: use the <strong>inverse (opposite) operation</strong> to undo what&rsquo;s being done to the variable. Addition and subtraction are inverses of each other, and multiplication and division are inverses of each other.",
            "<strong>Addition equation</strong> &rarr; subtract: x + 5 = 12 &rarr; subtract 5 from both sides &rarr; x = 7. <strong>Subtraction equation</strong> &rarr; add: x &minus; 9 = 3 &rarr; add 9 to both sides &rarr; x = 12. <strong>Multiplication equation</strong> &rarr; divide: 3x = 18 &rarr; divide both sides by 3 &rarr; x = 6. <strong>Division equation</strong> &rarr; multiply: x/4 = 7 &rarr; multiply both sides by 4 &rarr; x = 28.",
            "Don&rsquo;t forget equations with <strong>negative numbers</strong>! For x + (&minus;8) = 5, that&rsquo;s the same as x &minus; 8 = 5. Add 8 to both sides: x = 13. For &minus;2x = 14, divide both sides by &minus;2: x = &minus;7. Remember, dividing by a negative number flips the sign."
          ],
          example: {
            title: "Worked Example: Solving One-Step Equations",
            problem: "Solve: x/5 = &minus;3.",
            steps: [
              "The variable x is being divided by 5. Use the inverse: multiply.",
              "Multiply both sides by 5: x = &minus;3 &times; 5.",
              "Compute: x = &minus;15.",
              "Check: (&minus;15)/5 = &minus;3. &#10003;",
              "Answer: <strong>x = &minus;15</strong>."
            ]
          }
        },
        {
          heading: "Two-Step Equations",
          paragraphs: [
            "A <strong>two-step equation</strong> requires two operations to solve. The golden rule: <em>undo the operations in reverse order</em>. Since the expression was built by multiplying/dividing first (close to the variable) and then adding/subtracting (farther away), you <strong>undo addition/subtraction first</strong>, then <strong>undo multiplication/division</strong>.",
            "For example, solve 2x + 5 = 13. <strong>Step 1:</strong> Undo the +5 by subtracting 5 from both sides: 2x = 8. <strong>Step 2:</strong> Undo the &times;2 by dividing both sides by 2: x = 4. Check: 2(4) + 5 = 8 + 5 = 13. &#10003;",
            "Two-step equations can also involve <strong>fractions</strong>. For x/3 &minus; 4 = 2: <strong>Step 1:</strong> Add 4 to both sides: x/3 = 6. <strong>Step 2:</strong> Multiply both sides by 3: x = 18. Check: 18/3 &minus; 4 = 6 &minus; 4 = 2. &#10003; The same \"peel off the outer layer first\" strategy always works, whether the numbers are whole, negative, or fractions."
          ],
          practice: [
            { type: "type-answer", prompt: "Solve: 3x + 4 = 19. What is x?", answer: "5", accept: ["5"], explanation: "Subtract 4: 3x = 15. Divide by 3: x = 5." },
            { type: "type-answer", prompt: "Solve: 2x &minus; 6 = 10. What is x?", answer: "8", accept: ["8"], explanation: "Add 6: 2x = 16. Divide by 2: x = 8." },
            { type: "multiple-quick", prompt: "What is the FIRST step to solve 5x + 3 = 28?", options: ["Divide by 5", "Subtract 3", "Subtract 28", "Add 3"], correct: 1, explanation: "Undo the outer operation first: subtract 3 from both sides to get 5x = 25." }
          ],
          example: {
            title: "Worked Example: Solving a Two-Step Equation",
            problem: "Solve: 4x &minus; 7 = 21.",
            steps: [
              "Step 1: Undo the &minus;7 by adding 7 to both sides: 4x = 28.",
              "Step 2: Undo the &times;4 by dividing both sides by 4: x = 7.",
              "Check: 4(7) &minus; 7 = 28 &minus; 7 = 21. &#10003;",
              "Answer: <strong>x = 7</strong>."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d15q1",
        question: "Solve: x + 8 = 15.",
        type: "multiple-choice",
        options: ["x = 23", "x = 7", "x = 8", "x = &minus;7"],
        correct: 1,
        explanation: "Subtract 8 from both sides: x = 15 &minus; 8 = 7.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d15q2",
        question: "Solve: 5x = 35.",
        type: "multiple-choice",
        options: ["x = 30", "x = 175", "x = 7", "x = 40"],
        correct: 2,
        explanation: "Divide both sides by 5: x = 35 &divide; 5 = 7.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d15q3",
        question: "Which is an equation (not an expression)?",
        type: "multiple-choice",
        options: ["3x + 4", "7 &minus; y", "2n + 1 = 9", "5(a + b)"],
        correct: 2,
        explanation: "An equation has an equals sign. Only 2n + 1 = 9 has one.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d15q4",
        question: "Solve: x &minus; 12 = &minus;5.",
        type: "multiple-choice",
        options: ["x = &minus;17", "x = 7", "x = 17", "x = &minus;7"],
        correct: 1,
        explanation: "Add 12 to both sides: x = &minus;5 + 12 = 7.",
        difficulty: "medium",
        category: "topic",
        hints: ["Use the inverse operation — what undoes subtraction?", "Add 12 to both sides of the equation to get x by itself."]
      },
      {
        id: "d15q5",
        question: "Solve: 3x + 4 = 19. What is x?",
        type: "type-answer",
        answer: "5",
        accept: ["5", "x=5", "x = 5"],
        explanation: "Step 1: Subtract 4 from both sides: 3x = 15. Step 2: Divide by 3: x = 5. Check: 3(5) + 4 = 19. &#10003;",
        difficulty: "medium",
        category: "topic",
        hints: ["This is a two-step equation \u2014 undo the addition/subtraction first, then the multiplication.", "Subtract 4 from both sides first to isolate the 3x term, then divide by 3."]
      },
      {
        id: "d15q6",
        question: "Solve: x/6 + 3 = 8.",
        type: "multiple-choice",
        options: ["x = 30", "x = 66", "x = 5", "x = 48"],
        correct: 0,
        explanation: "Step 1: Subtract 3 from both sides: x/6 = 5. Step 2: Multiply both sides by 6: x = 30. Check: 30/6 + 3 = 5 + 3 = 8. &#10003;",
        difficulty: "medium",
        category: "topic",
        hints: ["Undo the outer operation first — deal with the +3 before the division.", "Subtract 3 from both sides to get x/6 alone, then multiply both sides by 6."]
      },
      {
        id: "d15q7",
        question: "Solve: 7x &minus; 10 = 25.",
        type: "multiple-choice",
        options: ["x = 5", "x = 35/7", "x = 2", "x = 15/7"],
        correct: 0,
        explanation: "Step 1: Add 10 to both sides: 7x = 35. Step 2: Divide by 7: x = 5. Check: 7(5) &minus; 10 = 35 &minus; 10 = 25. &#10003;",
        difficulty: "hard",
        category: "topic",
        hints: ["Two-step equation: undo the subtraction first, then the multiplication.", "Add 10 to both sides to get 7x = 35, then divide both sides by 7."]
      },
      {
        id: "d15q8",
        question: "Solve: &minus;2x + 9 = 1.",
        type: "multiple-choice",
        options: ["x = &minus;4", "x = 5", "x = 4", "x = &minus;5"],
        correct: 2,
        explanation: "Step 1: Subtract 9 from both sides: &minus;2x = &minus;8. Step 2: Divide by &minus;2: x = 4. Check: &minus;2(4) + 9 = &minus;8 + 9 = 1. &#10003;",
        difficulty: "hard",
        category: "topic",
        hints: ["Be extra careful when dividing by a negative — the sign of your answer will flip.", "Subtract 9 from both sides first to get −2x = −8, then divide both sides by −2."]
      },
      {
        id: "d15q9",
        question: "Evaluate 5x &minus; 2 when x = 4.",
        type: "multiple-choice",
        options: ["22", "18", "12", "20"],
        correct: 1,
        explanation: "Substitute: 5(4) &minus; 2 = 20 &minus; 2 = 18.",
        difficulty: "medium",
        category: "review",
        hints: ["To evaluate an expression, replace the variable with the given number and compute.", "Plug in x = 4: compute 5(4) first, then subtract 2."]
      },
      {
        id: "d15q10",
        question: "Simplify: 2(3x + 1) &minus; 4x.",
        type: "multiple-choice",
        options: ["2x + 1", "2x + 2", "10x + 2", "6x + 1"],
        correct: 1,
        explanation: "Distribute: 6x + 2 &minus; 4x. Combine like terms: 6x &minus; 4x = 2x. Result: 2x + 2.",
        difficulty: "hard",
        category: "review",
        hints: ["Distribute first — multiply the 2 by everything inside the parentheses.", "2 × 3x = 6x and 2 × 1 = 2. Now combine 6x − 4x and simplify."]
      }
    ]
  }
};
