export const DAYS_21_25 = {

  // ============================================================
  // DAY 21: Percents & Conversions
  // ============================================================
  day21: {
    lesson: {
      title: "Percents & Conversions",
      subtitle: "Learn what percents mean, convert between fractions, decimals, and percents, and solve the three types of percent problems",
      sections: [
        {
          heading: "What Is a Percent?",
          paragraphs: [
            "The word <strong>percent</strong> comes from the Latin <em>per centum</em>, meaning &ldquo;per hundred.&rdquo; So 25% literally means &ldquo;25 out of 100.&rdquo; You can write it as the fraction 25/100 or the decimal 0.25. Percents give us a universal way to compare parts of different-sized wholes &mdash; batting averages, test scores, sale prices &mdash; all on the same 0&ndash;100 scale.",
            "Some <strong>benchmark percents</strong> are worth memorizing because they pop up everywhere:<br>100% = the whole thing<br>50% = one-half<br>25% = one-quarter<br>10% = one-tenth<br>1% = one-hundredth",
            "If you eat 3 out of 4 slices of pizza, you ate 3/4 = 75% of the pizza. If a store says &ldquo;20% off,&rdquo; it means you save 20 cents for every dollar of the original price. Percents are fractions and decimals in disguise &mdash; the trick is learning to switch between them quickly."
          ],
          example: {
            title: "Worked Example: Identifying a Percent",
            problem: "A student scored 18 out of 20 on a quiz. What percent is that?",
            steps: [
              "Write the score as a fraction: 18/20.",
              "Divide: 18 &divide; 20 = 0.9.",
              "Multiply by 100 to convert to a percent: 0.9 &times; 100 = 90.",
              "Answer: The student scored <strong>90%</strong>."
            ]
          }
        },
        {
          heading: "Converting Between Fractions, Decimals & Percents",
          paragraphs: [
            "<strong>Percent &rarr; Decimal:</strong> Divide by 100 (move the decimal point two places left). For example, 45% = 0.45 and 7% = 0.07.<br><strong>Decimal &rarr; Percent:</strong> Multiply by 100 (move the decimal point two places right). For example, 0.62 = 62% and 1.5 = 150%.",
            "<strong>Percent &rarr; Fraction:</strong> Put the percent over 100 and simplify. For example, 60% = 60/100 = 3/5.<br><strong>Fraction &rarr; Percent:</strong> Divide the numerator by the denominator, then multiply by 100. For example, 3/8 = 0.375 &times; 100 = 37.5%.",
            "Some conversions are worth memorizing: 1/3 &approx; 33.3%, 2/3 &approx; 66.7%, 1/5 = 20%, 1/8 = 12.5%. The faster you can switch forms, the easier percent problems become."
          ],
          example: {
            title: "Worked Example: Converting 5/8 to a Percent",
            problem: "Convert 5/8 to a percent.",
            steps: [
              "Divide the numerator by the denominator: 5 &divide; 8 = 0.625.",
              "Multiply by 100: 0.625 &times; 100 = 62.5.",
              "Answer: 5/8 = <strong>62.5%</strong>."
            ]
          }
        },
        {
          heading: "Solving Percent Problems",
          paragraphs: [
            "Every percent problem boils down to one equation: <strong>Part = Percent &times; Whole</strong>. There are three types depending on which piece is missing:<br>1. <em>Find the part:</em> What is 30% of 200? &rarr; Part = 0.30 &times; 200 = 60.<br>2. <em>Find the percent:</em> 45 is what percent of 180? &rarr; 45/180 = 0.25 = 25%.<br>3. <em>Find the whole:</em> 12 is 40% of what number? &rarr; 12 &divide; 0.40 = 30.",
            "The <strong>10% shortcut</strong> is a powerful mental math trick. To find 10% of any number, just divide by 10 (move the decimal point one place left). From there you can build other percents: 5% is half of 10%, 20% is double 10%, 15% = 10% + 5%, and so on.",
            "For example, to tip 15% on a $48 meal: 10% of 48 = $4.80, so 5% = $2.40, and 15% = $4.80 + $2.40 = <strong>$7.20</strong>. No calculator needed!"
          ],
          example: {
            title: "Worked Example: Finding the Whole",
            problem: "36 is 45% of what number?",
            steps: [
              "Use the formula Part = Percent &times; Whole, and solve for Whole.",
              "Whole = Part &divide; Percent = 36 &divide; 0.45.",
              "36 &divide; 0.45 = 80.",
              "Answer: 36 is 45% of <strong>80</strong>."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d21q1",
        question: "What is 40% written as a fraction in simplest form?",
        type: "multiple-choice",
        options: ["4/10", "2/5", "4/5", "1/4"],
        correct: 1,
        explanation: "40% = 40/100. Divide numerator and denominator by 20: 40/100 = 2/5.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d21q2",
        question: "Convert 0.08 to a percent.",
        type: "multiple-choice",
        options: ["0.8%", "80%", "8%", "0.08%"],
        correct: 2,
        explanation: "Multiply by 100: 0.08 &times; 100 = 8%.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d21q3",
        question: "What is 25% of 360?",
        type: "multiple-choice",
        options: ["72", "80", "90", "100"],
        correct: 2,
        explanation: "25% = 1/4. So 360 &divide; 4 = 90.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d21q4",
        question: "Convert 7/8 to a percent.",
        type: "multiple-choice",
        options: ["78%", "85%", "87.5%", "88%"],
        correct: 2,
        explanation: "7 &divide; 8 = 0.875. Multiply by 100: 0.875 &times; 100 = 87.5%.",
        hints: ["To turn a fraction into a percent, first turn it into a decimal.", "Try dividing 7 by 8 — what decimal do you get?"],
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d21q5",
        question: "63 is what percent of 210?",
        type: "multiple-choice",
        options: ["25%", "30%", "33%", "35%"],
        correct: 1,
        explanation: "Percent = Part &divide; Whole = 63 &divide; 210 = 0.30 = 30%.",
        hints: ["Remember the formula: Percent = Part ÷ Whole.", "Start by dividing 63 by 210, then convert the decimal to a percent."],
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d21q6",
        question: "18 is 60% of what number?",
        type: "multiple-choice",
        options: ["10.8", "24", "30", "36"],
        correct: 2,
        explanation: "Whole = Part &divide; Percent = 18 &divide; 0.60 = 30.",
        hints: ["Use the percent equation: Part = Percent × Whole. You know the part and the percent.", "Rearrange to get Whole = 18 ÷ 0.60."],
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d21q7",
        question: "Using the 10% shortcut, what is 15% of 240?",
        type: "multiple-choice",
        options: ["30", "36", "42", "48"],
        correct: 1,
        explanation: "10% of 240 = 24. 5% of 240 = 12. So 15% = 24 + 12 = 36.",
        hints: ["Break 15% into friendlier percents you can do in your head.", "Find 10% of 240 first (just move the decimal), then find 5% as half of that."],
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d21q8",
        question: "A jar contains 450 marbles. 72% are blue. How many marbles are <em>not</em> blue?",
        type: "multiple-choice",
        options: ["324", "126", "108", "150"],
        correct: 1,
        explanation: "Not blue = 100% &minus; 72% = 28%. 28% of 450 = 0.28 &times; 450 = 126.",
        hints: ["If 72% are blue, what percent are NOT blue?", "Subtract 72% from 100% to get the 'not blue' percent, then find that percent of 450."],
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d21q9",
        question: "Which of these is the largest? 3/5, 0.58, 62%",
        type: "multiple-choice",
        options: ["3/5", "0.58", "62%", "They are all equal"],
        correct: 2,
        explanation: "3/5 = 0.60 = 60%. 0.58 = 58%. 62% = 0.62. The largest is 62%.",
        hints: ["To compare, convert everything to the same form — decimals or percents both work.", "Start by turning 3/5 into a decimal: 3 ÷ 5 = ?"],
        difficulty: "hard",
        category: "review"
      },
      {
        id: "d21q10",
        question: "0.3̄ (0.333&hellip;) equals what fraction and what percent?",
        type: "multiple-choice",
        options: ["1/3 and 33.3̄%", "3/10 and 30%", "1/3 and 30%", "3/9 and 39%"],
        correct: 0,
        explanation: "0.333&hellip; = 1/3. As a percent: (1 &divide; 3) &times; 100 = 33.333&hellip;% = 33.3̄%. (Recall repeating decimals from Day 18.)",
        hints: ["Think about which fraction gives a repeating decimal of 0.333...", "0.333... is a famous fraction — it's 1 divided by 3. Now convert that fraction to a percent."],
        difficulty: "hard",
        category: "review"
      }
    ]
  },

  // ============================================================
  // DAY 22: Percent Increase/Decrease & Applications
  // ============================================================
  day22: {
    lesson: {
      title: "Percent Increase/Decrease & Applications",
      subtitle: "Use percents to handle markups, discounts, taxes, tips, and successive changes",
      sections: [
        {
          heading: "Percent Increase & Decrease",
          paragraphs: [
            "When a quantity changes, we often describe the change as a <strong>percent</strong> of the original value. The formula is:<br><strong>Percent Change = (Change &divide; Original) &times; 100%</strong><br>If the new value is larger, it is a <em>percent increase</em>. If smaller, a <em>percent decrease</em>.",
            "You can also find the <strong>new amount</strong> directly. For a percent increase: New = Original &times; (1 + r), where r is the percent written as a decimal. For a percent decrease: New = Original &times; (1 &minus; r). For example, increasing 200 by 15%: New = 200 &times; 1.15 = 230.",
            "Think of the multiplier as your best friend: a 30% increase means you multiply by 1.30, a 30% decrease means you multiply by 0.70. This one-step approach avoids mistakes."
          ],
          example: {
            title: "Worked Example: Percent Decrease",
            problem: "A bike originally costs $350. It is on sale for $280. What is the percent decrease?",
            steps: [
              "Find the change: $350 &minus; $280 = $70.",
              "Divide by the original: 70 &divide; 350 = 0.20.",
              "Multiply by 100%: 0.20 &times; 100% = 20%.",
              "Answer: The price decreased by <strong>20%</strong>."
            ]
          }
        },
        {
          heading: "Discounts, Tax & Tips",
          paragraphs: [
            "A <strong>discount</strong> is a percent decrease on the original price. If a $60 shirt is 25% off, the discount amount is 0.25 &times; $60 = $15, and the sale price is $60 &minus; $15 = $45. Using the multiplier: $60 &times; 0.75 = $45.",
            "<strong>Sales tax</strong> is a percent increase added <em>after</em> the sale price. If the tax rate is 8%, multiply the sale price by 1.08. A <strong>tip</strong> works the same way &mdash; it is a percent of the bill (usually the pre-tax amount). Common tip rates are 15%, 18%, and 20%.",
            "In many real-world problems you must chain these steps. For example, first apply the discount to get the sale price, <em>then</em> apply tax to the sale price. The order matters: tax is calculated on the discounted price, not the original."
          ],
          example: {
            title: "Worked Example: Discount Then Tax",
            problem: "A jacket costs $80 and is 30% off. Sales tax is 5%. What is the final price?",
            steps: [
              "Find the sale price: $80 &times; 0.70 = $56.",
              "Apply 5% tax: $56 &times; 1.05 = $58.80.",
              "Answer: The final price is <strong>$58.80</strong>."
            ]
          }
        },
        {
          heading: "Successive Percent Changes",
          paragraphs: [
            "A common mistake is thinking that two 10% increases equal a 20% increase. They don&rsquo;t! Each percent change applies to the <em>new</em> amount, not the original. Start with 100: a 10% increase gives 110. Another 10% increase: 110 &times; 1.10 = 121. That is a 21% total increase, not 20%.",
            "To handle successive changes, multiply the multipliers together. Two consecutive 10% increases: 1.10 &times; 1.10 = 1.21, which is a 21% increase. A 20% increase followed by a 20% decrease: 1.20 &times; 0.80 = 0.96, which is a 4% <em>decrease</em> &mdash; you do <strong>not</strong> end up back where you started!",
            "The key takeaway: <strong>percent changes do not simply add or cancel</strong>. Always multiply the multipliers, then compare the final multiplier to 1 to determine the overall percent change."
          ],
          example: {
            title: "Worked Example: Successive Changes",
            problem: "A stock rises 25% one year and falls 20% the next. What is the overall percent change?",
            steps: [
              "Multiplier for 25% increase: 1.25.",
              "Multiplier for 20% decrease: 0.80.",
              "Overall multiplier: 1.25 &times; 0.80 = 1.00.",
              "1.00 means the value is exactly back to the original.",
              "Answer: The overall change is <strong>0%</strong> (no net change)."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d22q1",
        question: "A shirt's price rises from $20 to $25. What is the percent increase?",
        type: "multiple-choice",
        options: ["20%", "25%", "5%", "50%"],
        correct: 1,
        explanation: "Change = $5. Percent increase = 5 &divide; 20 &times; 100% = 25%.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d22q2",
        question: "A $50 item is 10% off. What is the sale price?",
        type: "multiple-choice",
        options: ["$40", "$45", "$55", "$35"],
        correct: 1,
        explanation: "Discount = 10% of $50 = $5. Sale price = $50 &minus; $5 = $45.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d22q3",
        question: "What multiplier represents a 35% increase?",
        type: "multiple-choice",
        options: ["0.35", "0.65", "1.35", "3.5"],
        correct: 2,
        explanation: "A 35% increase means you keep the original (1) plus 0.35 more: multiplier = 1.35.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d22q4",
        question: "A restaurant bill is $64. You leave an 18% tip. How much is the tip?",
        type: "multiple-choice",
        options: ["$10.52", "$11.52", "$12.80", "$9.60"],
        correct: 1,
        explanation: "Tip = 0.18 &times; $64 = $11.52.",
        hints: ["A tip is just a percent of the bill — multiply to find it.", "Convert 18% to a decimal (0.18) and multiply by $64."],
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d22q5",
        question: "A laptop costs $600 and is 15% off. Sales tax is 8%. What is the final price?",
        type: "multiple-choice",
        options: ["$550.80", "$518.40", "$540.00", "$556.92"],
        correct: 0,
        explanation: "Sale price = $600 &times; 0.85 = $510. Tax: $510 &times; 1.08 = $550.80.",
        hints: ["This is a two-step problem: first apply the discount, then apply the tax.", "Multiply $600 by 0.85 to get the sale price, then multiply that result by 1.08 for tax."],
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d22q6",
        question: "A town's population drops from 8,000 to 6,400. What is the percent decrease?",
        type: "multiple-choice",
        options: ["16%", "25%", "20%", "80%"],
        correct: 2,
        explanation: "Change = 1,600. Percent decrease = 1,600 &divide; 8,000 &times; 100% = 20%.",
        hints: ["Percent change = (Change ÷ Original) × 100%. Find the change first!", "The change is 8,000 − 6,400 = 1,600. Now divide that by the original (8,000)."],
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d22q7",
        question: "A price increases by 50% and then decreases by 50%. What is the net change?",
        type: "multiple-choice",
        options: ["0% (no change)", "25% decrease", "25% increase", "10% decrease"],
        correct: 1,
        explanation: "Multipliers: 1.50 &times; 0.50 = 0.75. That is a 25% decrease from the original.",
        hints: ["Successive percent changes don't just cancel out — multiply the multipliers!", "A 50% increase means ×1.50, and a 50% decrease means ×0.50. Multiply those together."],
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d22q8",
        question: "After a 20% increase, a value becomes 360. What was the original value?",
        type: "multiple-choice",
        options: ["280", "288", "300", "320"],
        correct: 2,
        explanation: "Original &times; 1.20 = 360. Original = 360 &divide; 1.20 = 300.",
        hints: ["You know the result after the increase — work backwards to find the original.", "A 20% increase means Original × 1.20 = 360. Divide 360 by 1.20."],
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d22q9",
        question: "Two successive 20% increases are equivalent to what single percent increase?",
        type: "multiple-choice",
        options: ["40%", "42%", "44%", "45%"],
        correct: 2,
        explanation: "1.20 &times; 1.20 = 1.44. That is a 44% total increase.",
        hints: ["Don't just add the percents! Successive changes multiply.", "The multiplier for a 20% increase is 1.20. Multiply 1.20 × 1.20 and see how far above 1 you land."],
        difficulty: "hard",
        category: "review"
      },
      {
        id: "d22q10",
        question: "A jacket is marked at $120. First, a 25% discount is applied. Then a coupon takes an additional 10% off the sale price. What do you pay (before tax)?",
        type: "multiple-choice",
        options: ["$78.00", "$81.00", "$84.00", "$75.60"],
        correct: 1,
        explanation: "After 25% off: $120 &times; 0.75 = $90. After another 10% off: $90 &times; 0.90 = $81.00. (Note: 25% + 10% = 35% off would give $78, but successive discounts give $81.)",
        hints: ["Apply each discount one at a time — the second discount is on the already-reduced price.", "First find 25% off $120 (multiply by 0.75), then take 10% off that new price (multiply by 0.90)."],
        difficulty: "hard",
        category: "review"
      }
    ]
  },

  // ============================================================
  // DAY 23: Square Roots & Perfect Squares
  // ============================================================
  day23: {
    lesson: {
      title: "Square Roots & Perfect Squares",
      subtitle: "Understand what square roots mean, memorize perfect squares, and learn to estimate irrational roots",
      sections: [
        {
          heading: "From Squares to Square Roots",
          paragraphs: [
            "Squaring a number means multiplying it by itself: 5<sup>2</sup> = 5 &times; 5 = 25. A <strong>square root</strong> reverses this &mdash; it asks, &ldquo;What number squared gives me this?&rdquo; We write it as &radic;25 = 5, because 5<sup>2</sup> = 25.",
            "A <strong>perfect square</strong> is a whole number that is the square of another whole number. The first twelve perfect squares are worth memorizing:<br>1<sup>2</sup> = 1, &ensp;2<sup>2</sup> = 4, &ensp;3<sup>2</sup> = 9, &ensp;4<sup>2</sup> = 16, &ensp;5<sup>2</sup> = 25, &ensp;6<sup>2</sup> = 36,<br>7<sup>2</sup> = 49, &ensp;8<sup>2</sup> = 64, &ensp;9<sup>2</sup> = 81, &ensp;10<sup>2</sup> = 100, &ensp;11<sup>2</sup> = 121, &ensp;12<sup>2</sup> = 144.",
            "When the number under the radical sign (&radic;) is a perfect square, the answer is a whole number. Knowing your perfect squares lets you evaluate square roots instantly: &radic;81 = 9, &radic;144 = 12, &radic;64 = 8."
          ],
          example: {
            title: "Worked Example: Evaluating a Square Root",
            problem: "What is &radic;121?",
            steps: [
              "Ask: what number times itself gives 121?",
              "Recall that 11<sup>2</sup> = 11 &times; 11 = 121.",
              "Answer: &radic;121 = <strong>11</strong>."
            ]
          }
        },
        {
          heading: "Square Roots of Non-Perfect Squares",
          paragraphs: [
            "What about &radic;2 or &radic;50? These are <strong>not</strong> perfect squares, so their square roots are <em>irrational</em> numbers &mdash; decimals that go on forever without repeating. For example, &radic;2 &approx; 1.41421356&hellip; You cannot write it as an exact fraction.",
            "To <strong>estimate</strong> a non-perfect square root, find the two consecutive perfect squares it falls between. For &radic;50: since 7<sup>2</sup> = 49 and 8<sup>2</sup> = 64, we know 7 &lt; &radic;50 &lt; 8. Because 50 is much closer to 49 than to 64, &radic;50 is closer to 7 &mdash; roughly 7.07.",
            "This &ldquo;squeeze&rdquo; technique works for any square root. For &radic;30: 5<sup>2</sup> = 25 and 6<sup>2</sup> = 36, so 5 &lt; &radic;30 &lt; 6. Since 30 is about halfway between 25 and 36, &radic;30 &approx; 5.5 (actual value &approx; 5.477)."
          ],
          graphs: [
            { type: "numberLine", min: 4, max: 9, step: 1, width: 500, height: 80,
              points: [
                { x: 4, color: "#718096", label: "4\u00b2=16" },
                { x: 5, color: "#718096", label: "5\u00b2=25" },
                { x: 6, color: "#718096", label: "6\u00b2=36" },
                { x: 7, color: "#718096", label: "7\u00b2=49" },
                { x: 7.07, color: "#e53e3e", label: "\u221a50\u22487.07" },
                { x: 5.48, color: "#667eea", label: "\u221a30\u22485.5" }
              ],
              caption: "Squeeze technique: \u221a50 is between 7 and 8; \u221a30 is between 5 and 6" }
          ],
          practice: [
            { type: "type-answer", prompt: "&radic;45 is between which two whole numbers? Type the SMALLER one.", answer: "6", accept: ["6"], explanation: "6&sup2; = 36 and 7&sup2; = 49. Since 36 &lt; 45 &lt; 49, &radic;45 is between 6 and 7." },
            { type: "type-answer", prompt: "&radic;81 = ?", answer: "9", accept: ["9"], explanation: "81 is a perfect square: 9 &times; 9 = 81, so &radic;81 = 9." },
            { type: "multiple-quick", prompt: "&radic;60 is closest to which value?", options: ["7.2", "7.7", "8.1", "6.5"], correct: 1, explanation: "7&sup2; = 49 and 8&sup2; = 64. 60 is closer to 64, so &radic;60 &approx; 7.7." }
          ],
          example: {
            title: "Worked Example: Estimating &radic;20",
            problem: "Between which two whole numbers does &radic;20 lie? Estimate its value.",
            steps: [
              "Find nearby perfect squares: 4<sup>2</sup> = 16 and 5<sup>2</sup> = 25.",
              "Since 16 &lt; 20 &lt; 25, we have 4 &lt; &radic;20 &lt; 5.",
              "20 is 4 away from 16 and 5 away from 25, so it is closer to 16.",
              "Estimate: &radic;20 &approx; 4.5 (actual &approx; 4.472).",
              "Answer: &radic;20 is between <strong>4 and 5</strong>, approximately <strong>4.5</strong>."
            ],
            graphs: [
              { type: "numberLine", min: 3, max: 6, step: 0.5, width: 500, height: 80,
                points: [
                  { x: 4, color: "#718096", label: "4 (4\u00b2=16)" },
                  { x: 5, color: "#718096", label: "5 (5\u00b2=25)" },
                  { x: 4.47, color: "#e53e3e", label: "\u221a20\u22484.47" }
                ],
                caption: "\u221a20 lies between 4 and 5, closer to 4" }
            ]
          }
        },
        {
          heading: "Properties of Square Roots",
          paragraphs: [
            "Square roots obey some handy rules. The <strong>product rule</strong> says &radic;(a &times; b) = &radic;a &times; &radic;b. For example, &radic;36 = &radic;(4 &times; 9) = &radic;4 &times; &radic;9 = 2 &times; 3 = 6. The <strong>quotient rule</strong> says &radic;(a/b) = &radic;a &divide; &radic;b.",
            "Another key fact: (&radic;a)<sup>2</sup> = a. Squaring a square root gives back the original number. This makes sense because squaring and square-rooting are inverse operations, just like multiplying and dividing.",
            "<strong>Warning:</strong> You <em>cannot</em> add or subtract square roots the way you add fractions. &radic;2 + &radic;3 does <strong>not</strong> equal &radic;5. Think of it like this: &radic;4 + &radic;9 = 2 + 3 = 5, but &radic;(4 + 9) = &radic;13 &approx; 3.6. They are completely different!"
          ],
          example: {
            title: "Worked Example: Using the Product Rule",
            problem: "Simplify &radic;(16 &times; 25) using the product rule.",
            steps: [
              "Apply the product rule: &radic;(16 &times; 25) = &radic;16 &times; &radic;25.",
              "&radic;16 = 4 and &radic;25 = 5.",
              "Multiply: 4 &times; 5 = 20.",
              "Check: 16 &times; 25 = 400, and &radic;400 = 20. &checkmark;",
              "Answer: &radic;(16 &times; 25) = <strong>20</strong>."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d23q1",
        question: "What is &radic;64?",
        type: "type-answer",
        answer: "8",
        accept: ["8"],
        explanation: "8<sup>2</sup> = 64, so &radic;64 = 8.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d23q2",
        question: "Which of the following is a perfect square?",
        type: "multiple-choice",
        options: ["50", "72", "81", "90"],
        correct: 2,
        explanation: "81 = 9<sup>2</sup>, so it is a perfect square. The others are not squares of any whole number.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d23q3",
        question: "Between which two whole numbers does &radic;40 lie?",
        type: "multiple-choice",
        options: ["5 and 6", "6 and 7", "7 and 8", "4 and 5"],
        correct: 1,
        explanation: "6<sup>2</sup> = 36 and 7<sup>2</sup> = 49. Since 36 &lt; 40 &lt; 49, &radic;40 is between 6 and 7.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d23q4",
        question: "What is &radic;(9 &times; 16)?",
        type: "multiple-choice",
        options: ["7", "12", "20", "25"],
        correct: 1,
        explanation: "&radic;(9 &times; 16) = &radic;9 &times; &radic;16 = 3 &times; 4 = 12. (Or: 9 &times; 16 = 144, &radic;144 = 12.)",
        hints: ["Remember the product rule: √(a × b) = √a × √b.", "Split it up: find √9 and √16 separately, then multiply those results."],
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d23q5",
        question: "What is (&radic;7)<sup>2</sup>?",
        type: "multiple-choice",
        options: ["&radic;14", "49", "7", "14"],
        correct: 2,
        explanation: "Squaring a square root gives back the original number: (&radic;7)<sup>2</sup> = 7.",
        hints: ["Squaring and square-rooting are inverse operations — they undo each other.", "Think: (√7) × (√7) = ? What number times itself gives you 7?"],
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d23q6",
        question: "Which statement is TRUE?",
        type: "multiple-choice",
        options: [
          "&radic;9 + &radic;16 = &radic;25",
          "&radic;9 + &radic;16 = 7",
          "&radic;9 &times; &radic;16 = &radic;25",
          "&radic;(9 + 16) = 7"
        ],
        correct: 1,
        explanation: "&radic;9 = 3 and &radic;16 = 4. So &radic;9 + &radic;16 = 3 + 4 = 7. Note that &radic;25 = 5, which is different!",
        hints: ["Be careful — √a + √b is NOT the same as √(a + b). Evaluate each root first!", "Find √9 and √16 as plain numbers, then check each answer choice."],
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d23q7",
        question: "Estimate &radic;75 to the nearest tenth.",
        type: "multiple-choice",
        options: ["8.3", "8.5", "8.7", "9.0"],
        correct: 2,
        explanation: "8<sup>2</sup> = 64 and 9<sup>2</sup> = 81. 75 is 11/17 of the way from 64 to 81, so &radic;75 &approx; 8.66, which rounds to 8.7.",
        hints: ["Use the squeeze technique: find which two perfect squares 75 is between.", "8² = 64 and 9² = 81. Since 75 is much closer to 81, √75 is closer to 9 than to 8."],
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d23q8",
        question: "&radic;(100/4) = ?",
        type: "multiple-choice",
        options: ["&radic;25 = 5", "&radic;96", "50", "2.5"],
        correct: 0,
        explanation: "&radic;(100/4) = &radic;100 &divide; &radic;4 = 10 &divide; 2 = 5. Or: 100/4 = 25, and &radic;25 = 5.",
        hints: ["You can use the quotient rule: √(a/b) = √a ÷ √b. Or just simplify 100/4 first.", "Try the easy route: what is 100 ÷ 4? Then take the square root of that."],
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d23q9",
        question: "If 2<sup>n</sup> = 64, what is n?",
        type: "multiple-choice",
        options: ["5", "6", "7", "8"],
        correct: 1,
        explanation: "2<sup>6</sup> = 64. (Recall exponent rules from Day 5: 2<sup>1</sup>=2, 2<sup>2</sup>=4, 2<sup>3</sup>=8, 2<sup>4</sup>=16, 2<sup>5</sup>=32, 2<sup>6</sup>=64.)",
        hints: ["Keep doubling: 2, 4, 8, 16, 32, 64... count how many times you multiplied by 2.", "Start listing powers of 2: 2¹=2, 2²=4, 2³=8... keep going until you hit 64."],
        difficulty: "hard",
        category: "review"
      },
      {
        id: "d23q10",
        question: "Simplify: (3<sup>2</sup>)<sup>2</sup> &divide; 3<sup>2</sup>.",
        type: "multiple-choice",
        options: ["3", "9", "27", "81"],
        correct: 1,
        explanation: "(3<sup>2</sup>)<sup>2</sup> = 3<sup>4</sup> = 81. Then 81 &divide; 3<sup>2</sup> = 81 &divide; 9 = 9. (Using exponent rules: 3<sup>4</sup> &divide; 3<sup>2</sup> = 3<sup>2</sup> = 9.)",
        hints: ["Use the power-of-a-power rule: (aᵐ)ⁿ = aᵐˣⁿ. Then use the quotient rule for exponents.", "First simplify (3²)² into a single power of 3, then divide by 3²."],
        difficulty: "hard",
        category: "review"
      }
    ]
  },

  // ============================================================
  // DAY 24: Simplifying Radicals & Radical Arithmetic
  // ============================================================
  day24: {
    lesson: {
      title: "Simplifying Radicals & Radical Arithmetic",
      subtitle: "Learn to simplify square roots, combine like radicals, multiply, divide, and rationalize the denominator",
      sections: [
        {
          heading: "Simplifying Square Roots",
          paragraphs: [
            "A square root is in <strong>simplest form</strong> when the number under the radical sign has no perfect square factors other than 1. To simplify, find the <em>largest perfect square factor</em>, pull its root outside, and leave the rest under the radical.",
            "For example, &radic;50: the largest perfect square factor of 50 is 25. So &radic;50 = &radic;(25 &times; 2) = &radic;25 &times; &radic;2 = 5&radic;2. Similarly, &radic;72 = &radic;(36 &times; 2) = 6&radic;2, and &radic;200 = &radic;(100 &times; 2) = 10&radic;2.",
            "Tip: if you don&rsquo;t spot the largest perfect square right away, you can simplify in steps. &radic;72 = &radic;(4 &times; 18) = 2&radic;18 = 2&radic;(9 &times; 2) = 2 &times; 3&radic;2 = 6&radic;2. You get the same answer; it just takes an extra step."
          ],
          example: {
            title: "Worked Example: Simplifying &radic;98",
            problem: "Simplify &radic;98.",
            steps: [
              "Find the largest perfect square factor of 98: 49 &times; 2 = 98.",
              "&radic;98 = &radic;(49 &times; 2) = &radic;49 &times; &radic;2.",
              "&radic;49 = 7.",
              "Answer: &radic;98 = <strong>7&radic;2</strong>."
            ]
          }
        },
        {
          heading: "Adding & Subtracting Radicals",
          paragraphs: [
            "You can only add or subtract radicals that have the <strong>same number under the radical sign</strong> &mdash; these are called <em>like radicals</em>. Think of it like combining like terms: 3&radic;5 + 2&radic;5 = 5&radic;5, just as 3x + 2x = 5x.",
            "If the radicals don&rsquo;t look alike at first, try <strong>simplifying</strong> them. For example, &radic;12 + &radic;27 looks impossible to combine. But &radic;12 = 2&radic;3 and &radic;27 = 3&radic;3. Now they are like radicals: 2&radic;3 + 3&radic;3 = 5&radic;3.",
            "If after simplifying the radicals still differ &mdash; like 3&radic;2 + 4&radic;5 &mdash; then you <strong>cannot</strong> combine them further. The expression is already in simplest form."
          ],
          example: {
            title: "Worked Example: Combining Radicals",
            problem: "Simplify &radic;8 + &radic;32 &minus; &radic;2.",
            steps: [
              "Simplify each radical: &radic;8 = &radic;(4 &times; 2) = 2&radic;2.",
              "&radic;32 = &radic;(16 &times; 2) = 4&radic;2.",
              "&radic;2 is already simplified.",
              "Combine like radicals: 2&radic;2 + 4&radic;2 &minus; 1&radic;2 = (2 + 4 &minus; 1)&radic;2 = 5&radic;2.",
              "Answer: <strong>5&radic;2</strong>."
            ]
          }
        },
        {
          heading: "Multiplying & Dividing Radicals",
          paragraphs: [
            "<strong>Multiplying</strong> radicals uses the product rule from Day 23: &radic;a &times; &radic;b = &radic;(ab). For example, &radic;3 &times; &radic;12 = &radic;36 = 6. Always simplify your final answer.",
            "<strong>Dividing</strong> radicals uses the quotient rule: &radic;a &divide; &radic;b = &radic;(a/b). But in math, we avoid leaving a radical in the <em>denominator</em> of a fraction. The fix is called <strong>rationalizing the denominator</strong>.",
            "To rationalize, multiply the top and bottom by the radical in the denominator. For example:<br>1/&radic;3 = (1 &times; &radic;3)/(&radic;3 &times; &radic;3) = &radic;3/3.<br>Another example: 4/&radic;2 = (4&radic;2)/((&radic;2)<sup>2</sup>) = 4&radic;2/2 = 2&radic;2."
          ],
          example: {
            title: "Worked Example: Rationalizing the Denominator",
            problem: "Simplify 6/&radic;5.",
            steps: [
              "Multiply numerator and denominator by &radic;5: (6 &times; &radic;5)/(&radic;5 &times; &radic;5).",
              "Denominator becomes (&radic;5)<sup>2</sup> = 5.",
              "Result: 6&radic;5/5.",
              "Answer: <strong>6&radic;5/5</strong>."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d24q1",
        question: "Simplify &radic;36.",
        type: "multiple-choice",
        options: ["4", "5", "6", "18"],
        correct: 2,
        explanation: "&radic;36 = 6 because 6<sup>2</sup> = 36.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d24q2",
        question: "Simplify &radic;50.",
        type: "multiple-choice",
        options: ["5&radic;2", "2&radic;5", "10&radic;5", "25&radic;2"],
        correct: 0,
        explanation: "&radic;50 = &radic;(25 &times; 2) = &radic;25 &times; &radic;2 = 5&radic;2.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d24q3",
        question: "What is 3&radic;7 + 5&radic;7?",
        type: "multiple-choice",
        options: ["8&radic;14", "8&radic;7", "15&radic;7", "15&radic;49"],
        correct: 1,
        explanation: "Like radicals combine: 3&radic;7 + 5&radic;7 = (3 + 5)&radic;7 = 8&radic;7.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d24q4",
        question: "Simplify &radic;72.",
        type: "multiple-choice",
        options: ["8&radic;2", "6&radic;2", "3&radic;8", "2&radic;18"],
        correct: 1,
        explanation: "&radic;72 = &radic;(36 &times; 2) = 6&radic;2.",
        hints: ["Find the largest perfect square that divides evenly into 72.", "36 × 2 = 72, and 36 is a perfect square. Pull √36 out of the radical."],
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d24q5",
        question: "Simplify &radic;12 + &radic;27.",
        type: "multiple-choice",
        options: ["&radic;39", "5&radic;3", "5&radic;6", "6&radic;3"],
        correct: 1,
        explanation: "&radic;12 = 2&radic;3 and &radic;27 = 3&radic;3. So 2&radic;3 + 3&radic;3 = 5&radic;3.",
        hints: ["You can only add radicals if the number under the √ is the same. Try simplifying each one first.", "Simplify √12 and √27 separately — both have a factor of 3 under the radical."],
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d24q6",
        question: "What is &radic;5 &times; &radic;20?",
        type: "multiple-choice",
        options: ["&radic;100 = 10", "&radic;25 = 5", "4&radic;5", "2&radic;25"],
        correct: 0,
        explanation: "&radic;5 &times; &radic;20 = &radic;(5 &times; 20) = &radic;100 = 10.",
        hints: ["Use the product rule: √a × √b = √(a × b).", "Multiply the numbers under the radicals: 5 × 20 = ? Then take the square root."],
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d24q7",
        question: "Rationalize the denominator: 1/&radic;2.",
        type: "multiple-choice",
        options: ["&radic;2", "&radic;2/2", "1/2", "2/&radic;2"],
        correct: 1,
        explanation: "Multiply top and bottom by &radic;2: (1 &times; &radic;2)/(&radic;2 &times; &radic;2) = &radic;2/2.",
        hints: ["To 'rationalize' means to get rid of the square root in the denominator.", "Multiply both the top and bottom of the fraction by √2 — that clears the radical downstairs."],
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d24q8",
        question: "Simplify 3&radic;18 &minus; 2&radic;8.",
        type: "multiple-choice",
        options: ["9&radic;2 &minus; 4&radic;2 = 5&radic;2", "&radic;10", "5&radic;10", "7&radic;2"],
        correct: 0,
        explanation: "3&radic;18 = 3 &times; 3&radic;2 = 9&radic;2. 2&radic;8 = 2 &times; 2&radic;2 = 4&radic;2. So 9&radic;2 &minus; 4&radic;2 = 5&radic;2.",
        hints: ["Simplify each radical first, then see if you can combine like terms.", "Simplify √18 (= 3√2) and √8 (= 2√2), then multiply by the coefficients out front."],
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d24q9",
        question: "Simplify 10/&radic;5.",
        type: "multiple-choice",
        options: ["2&radic;5", "5&radic;2", "&radic;50", "2&radic;10"],
        correct: 0,
        explanation: "Rationalize: (10 &times; &radic;5)/(&radic;5 &times; &radic;5) = 10&radic;5/5 = 2&radic;5.",
        hints: ["There's a radical in the denominator — rationalize it by multiplying top and bottom by √5.", "After multiplying, the denominator becomes 5. Then simplify 10√5 ÷ 5."],
        difficulty: "hard",
        category: "review"
      },
      {
        id: "d24q10",
        question: "Between which two whole numbers does &radic;90 lie, and which is it closer to?",
        type: "multiple-choice",
        options: [
          "9 and 10; closer to 9",
          "9 and 10; closer to 10",
          "8 and 9; closer to 9",
          "10 and 11; closer to 10"
        ],
        correct: 0,
        explanation: "9<sup>2</sup> = 81 and 10<sup>2</sup> = 100. Since 90 &minus; 81 = 9 &lt; 100 &minus; 90 = 10, &radic;90 is between 9 and 10 and closer to 9. (Actual value &approx; 9.49.)",
        hints: ["Use the squeeze technique: which two perfect squares does 90 sit between?", "9² = 81 and 10² = 100. Now check: is 90 closer to 81 or to 100?"],
        difficulty: "hard",
        category: "review"
      }
    ]
  },

  // ============================================================
  // DAY 25: Angles, Parallel Lines & Polygons
  // ============================================================
  day25: {
    lesson: {
      title: "Angles, Parallel Lines & Polygons",
      subtitle: "Measure and classify angles, explore parallel lines and transversals, and discover angle sums in polygons",
      sections: [
        {
          heading: "Measuring Angles",
          paragraphs: [
            "An <strong>angle</strong> is formed when two rays share a common endpoint called the <em>vertex</em>. We measure angles in <strong>degrees (&deg;)</strong>. A full rotation is 360&deg;. A <strong>right angle</strong> is exactly 90&deg; (like the corner of a book). A <strong>straight angle</strong> is 180&deg; (a flat line).",
            "Angles are classified by size: an <strong>acute</strong> angle is less than 90&deg;, a <strong>right</strong> angle is exactly 90&deg;, an <strong>obtuse</strong> angle is between 90&deg; and 180&deg;, and a <strong>straight</strong> angle is exactly 180&deg;.",
            "Two special angle pairs come up constantly. <strong>Complementary angles</strong> add up to 90&deg; (think &ldquo;C&rdquo; for &ldquo;Corner&rdquo;). <strong>Supplementary angles</strong> add up to 180&deg; (think &ldquo;S&rdquo; for &ldquo;Straight&rdquo;). When two lines cross, they form two pairs of <strong>vertical angles</strong>, which are always equal."
          ],
          graphs: [
            {
              type: "row",
              items: [
                {
                  type: "angle",
                  width: 200, height: 150,
                  vertex: [30, 120],
                  rays: [[190, 120], [30, 15]],
                  arc: { radius: 35, startAngle: 0, endAngle: 90, color: "#667eea", label: "90\u00b0" },
                  labels: [{ text: "Right angle", x: 120, y: 12, fontSize: 10, color: "#667eea" }],
                  caption: "Right angle = 90\u00b0"
                },
                {
                  type: "angle",
                  width: 200, height: 150,
                  vertex: [30, 120],
                  rays: [[190, 120], [100, 15]],
                  arc: { radius: 35, startAngle: 0, endAngle: 55, color: "#e53e3e", label: "55\u00b0" },
                  labels: [{ text: "Acute", x: 130, y: 12, fontSize: 10, color: "#e53e3e" }],
                  caption: "Acute angle (< 90\u00b0)"
                },
                {
                  type: "angle",
                  width: 200, height: 150,
                  vertex: [30, 120],
                  rays: [[190, 120], [10, 25]],
                  arc: { radius: 30, startAngle: 0, endAngle: 110, color: "#059669", label: "110\u00b0" },
                  labels: [{ text: "Obtuse", x: 120, y: 20, fontSize: 10, color: "#059669" }],
                  caption: "Obtuse angle (> 90\u00b0)"
                }
              ]
            }
          ],
          example: {
            title: "Worked Example: Complementary Angles",
            problem: "Two angles are complementary. One measures 34&deg;. What is the other?",
            steps: [
              "Complementary angles sum to 90&deg;.",
              "Other angle = 90&deg; &minus; 34&deg;.",
              "Answer: <strong>56&deg;</strong>."
            ]
          }
        },
        {
          heading: "Parallel Lines & Transversals",
          paragraphs: [
            "When a line (called a <strong>transversal</strong>) crosses two <strong>parallel lines</strong>, it creates eight angles. These angles come in special pairs with guaranteed relationships that let you find unknown angles.",
            "<strong>Corresponding angles</strong> are in the same position at each intersection &mdash; they are <em>equal</em>. <strong>Alternate interior angles</strong> are on opposite sides of the transversal, between the parallel lines &mdash; they are also <em>equal</em>. <strong>Co-interior angles</strong> (also called same-side interior or consecutive interior angles) are on the same side of the transversal, between the parallel lines &mdash; they are <em>supplementary</em> (sum to 180&deg;).",
            "Knowing just <strong>one</strong> angle at an intersection is enough to find all eight. If one angle is 70&deg;, its vertical angle is also 70&deg;, and its supplement is 110&deg;. Then use corresponding and alternate interior relationships to fill in the rest."
          ],
          example: {
            title: "Worked Example: Finding Angles with Parallel Lines",
            problem: "Two parallel lines are cut by a transversal. One angle is 115&deg;. Find its alternate interior angle and its co-interior angle.",
            steps: [
              "Alternate interior angles are equal: the alternate interior angle = 115&deg;.",
              "Co-interior angles are supplementary: 180&deg; &minus; 115&deg; = 65&deg;.",
              "Answer: Alternate interior angle = <strong>115&deg;</strong>; co-interior angle = <strong>65&deg;</strong>."
            ]
          }
        },
        {
          heading: "Angles in Polygons",
          paragraphs: [
            "The angles inside a <strong>triangle</strong> always add up to <strong>180&deg;</strong>. This is one of the most important facts in all of geometry. A <strong>quadrilateral</strong> (4 sides) has angle sum = 360&deg;. In general, an <em>n</em>-sided polygon has interior angle sum = <strong>(n &minus; 2) &times; 180&deg;</strong>.",
            "Where does the formula come from? Any polygon can be divided into triangles by drawing diagonals from one vertex. A quadrilateral splits into 2 triangles (2 &times; 180&deg; = 360&deg;). A pentagon splits into 3 triangles (3 &times; 180&deg; = 540&deg;). Each additional side adds one more triangle, hence one more 180&deg;.",
            "One more powerful tool: the <strong>Exterior Angle Theorem</strong> for triangles. An exterior angle of a triangle equals the sum of the two non-adjacent (remote) interior angles. If a triangle has angles 40&deg;, 60&deg;, and 80&deg;, the exterior angle adjacent to the 80&deg; angle is 40&deg; + 60&deg; = 100&deg;."
          ],
          graphs: [
            {
              type: "triangle",
              width: 260, height: 200,
              vertices: [[30, 180], [230, 180], [130, 25]],
              labels: [
                { text: "50\u00b0", dx: 18, dy: -12 },
                { text: "60\u00b0", dx: -18, dy: -12 },
                { text: "70\u00b0", dx: 0, dy: 18 }
              ],
              color: "#667eea",
              caption: "Triangle angles: 50\u00b0 + 60\u00b0 + 70\u00b0 = 180\u00b0"
            }
          ],
          practice: [
            { type: "type-answer", prompt: "What is the sum of the interior angles of a pentagon (5 sides)? Type a number in degrees.", answer: "540", accept: ["540", "540°"], explanation: "(5 &minus; 2) &times; 180 = 3 &times; 180 = 540&deg;." },
            { type: "type-answer", prompt: "A triangle has angles of 40&deg; and 75&deg;. What is the third angle?", answer: "65", accept: ["65", "65°"], explanation: "180 &minus; 40 &minus; 75 = 65&deg;." },
            { type: "multiple-quick", prompt: "Each exterior angle of any polygon sums to:", options: ["180&deg;", "360&deg;", "540&deg;", "720&deg;"], correct: 1, explanation: "The exterior angles of any convex polygon always sum to 360&deg;." }
          ],
          example: {
            title: "Worked Example: Angle Sum in a Hexagon",
            problem: "What is the sum of the interior angles of a hexagon (6 sides)?",
            steps: [
              "Use the formula: (n &minus; 2) &times; 180&deg;.",
              "n = 6: (6 &minus; 2) &times; 180&deg; = 4 &times; 180&deg;.",
              "4 &times; 180&deg; = 720&deg;.",
              "Answer: The interior angles of a hexagon sum to <strong>720&deg;</strong>."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d25q1",
        question: "What type of angle measures 135&deg;?",
        type: "multiple-choice",
        options: ["Acute", "Right", "Obtuse", "Straight"],
        correct: 2,
        explanation: "135&deg; is between 90&deg; and 180&deg;, so it is obtuse.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d25q2",
        question: "Two angles are supplementary. One is 72&deg;. What is the other?",
        type: "multiple-choice",
        options: ["18&deg;", "28&deg;", "108&deg;", "288&deg;"],
        correct: 2,
        explanation: "Supplementary angles sum to 180&deg;. 180&deg; &minus; 72&deg; = 108&deg;.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d25q3",
        question: "The three angles of a triangle are 50&deg;, 60&deg;, and x&deg;. What is x?",
        type: "type-answer",
        answer: "70",
        accept: ["70", "70°"],
        explanation: "Triangle angles sum to 180&deg;. x = 180 &minus; 50 &minus; 60 = 70.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d25q4",
        question: "Two parallel lines are cut by a transversal. One angle is 55&deg;. What is the co-interior angle on the same side?",
        type: "multiple-choice",
        options: ["55&deg;", "125&deg;", "135&deg;", "180&deg;"],
        correct: 1,
        explanation: "Co-interior (same-side interior) angles are supplementary: 180&deg; &minus; 55&deg; = 125&deg;.",
        hints: ["Co-interior angles (same-side interior) always add up to 180°.", "Subtract the given angle from 180°: 180° − 55° = ?"],
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d25q5",
        question: "What is the sum of interior angles of a pentagon (5 sides)?",
        type: "multiple-choice",
        options: ["360&deg;", "450&deg;", "540&deg;", "720&deg;"],
        correct: 2,
        explanation: "(n &minus; 2) &times; 180&deg; = (5 &minus; 2) &times; 180&deg; = 3 &times; 180&deg; = 540&deg;.",
        hints: ["There's a formula for the angle sum of any polygon: (n − 2) × 180°.", "Plug in n = 5: (5 − 2) × 180° = ?"],
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d25q6",
        question: "Two lines cross, forming a 47&deg; angle. What is the vertical angle?",
        type: "multiple-choice",
        options: ["43&deg;", "47&deg;", "133&deg;", "137&deg;"],
        correct: 1,
        explanation: "Vertical angles are equal. The vertical angle is also 47&deg;.",
        hints: ["Vertical angles are the angles across from each other when two lines cross.", "Vertical angles are always equal — no math needed!"],
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d25q7",
        question: "In a triangle, two angles are 35&deg; and 85&deg;. What is the exterior angle adjacent to the third angle?",
        type: "multiple-choice",
        options: ["60&deg;", "120&deg;", "150&deg;", "180&deg;"],
        correct: 1,
        explanation: "The third interior angle = 180 &minus; 35 &minus; 85 = 60&deg;. The exterior angle adjacent to 60&deg; is 180 &minus; 60 = 120&deg;. (Or by the Exterior Angle Theorem: 35 + 85 = 120&deg;.)",
        hints: ["The Exterior Angle Theorem says an exterior angle equals the sum of the two non-adjacent interior angles.", "Add the two given interior angles: 35° + 85° = ?"],
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d25q8",
        question: "Each interior angle of a regular polygon is 120&deg;. How many sides does it have?",
        type: "multiple-choice",
        options: ["5", "6", "8", "10"],
        correct: 1,
        explanation: "Interior angle sum = n &times; 120. Also equals (n &minus; 2) &times; 180. So 120n = 180n &minus; 360 &rarr; 60n = 360 &rarr; n = 6. It is a hexagon.",
        hints: ["For a regular polygon, every angle is the same. Set up an equation using the angle sum formula.", "The total angle sum is n × 120, and also equals (n − 2) × 180. Set those equal and solve for n."],
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d25q9",
        question: "Two parallel lines are cut by a transversal. If one angle is (3x + 10)&deg; and the alternate interior angle is (5x &minus; 30)&deg;, find x.",
        type: "multiple-choice",
        options: ["10", "15", "20", "25"],
        correct: 2,
        explanation: "Alternate interior angles are equal: 3x + 10 = 5x &minus; 30. Solving: 40 = 2x, so x = 20. (Using equation-solving from Days 15&ndash;16.)",
        hints: ["Alternate interior angles are equal when lines are parallel — set the two expressions equal.", "Write the equation 3x + 10 = 5x − 30, then solve for x."],
        difficulty: "hard",
        category: "review"
      },
      {
        id: "d25q10",
        question: "In a triangle, one angle is twice the smallest and the largest is 20&deg; more than three times the smallest. Find the smallest angle.",
        type: "multiple-choice",
        options: ["20&deg;", "26.7&deg;", "30&deg;", "40&deg;"],
        correct: 1,
        explanation: "Let the smallest = x. Then the angles are x, 2x, and 3x + 20. Sum: x + 2x + 3x + 20 = 180 &rarr; 6x = 160 &rarr; x = 26.̄6&deg; &approx; 26.7&deg;. (Uses equation-solving from Days 15&ndash;16.)",
        hints: ["Let the smallest angle be x, then write the other two angles in terms of x.", "The three angles are x, 2x, and 3x + 20. They must add up to 180° — set up that equation."],
        difficulty: "hard",
        category: "review"
      }
    ]
  }

};
