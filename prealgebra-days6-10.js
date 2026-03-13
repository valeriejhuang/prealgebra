export const DAYS_6_10 = {
  day6: {
    lesson: {
      title: "Decimals",
      subtitle: "Master place value, conversions, and operations with decimals",
      sections: [
        {
          heading: "Decimal Place Value",
          paragraphs: [
            "Decimals are another way to represent parts of a whole, just like fractions. The <strong>decimal point</strong> separates the whole-number part on the left from the fractional part on the right. Each place to the right of the decimal point has a specific value.",
            "The first place after the decimal is the <strong>tenths</strong> place (1/10), the second is the <strong>hundredths</strong> place (1/100), and the third is the <strong>thousandths</strong> place (1/1000). For example, in the number 3.427, the 4 is in the tenths place, the 2 is in the hundredths place, and the 7 is in the thousandths place.",
            "Reading decimals is easy once you know the places. Read the whole-number part first, say <em>\"and\"</em> for the decimal point, then read the rest as a whole number followed by the place name of the last digit. So 3.427 is read as <em>\"three and four hundred twenty-seven thousandths.\"</em>"
          ],
          example: {
            title: "Worked Example: Identifying Place Value",
            problem: "What is the value of the digit 6 in the number 0.368?",
            steps: [
              "The 3 is in the tenths place (3/10).",
              "The 6 is in the hundredths place (6/100).",
              "The 8 is in the thousandths place (8/1000).",
              "Answer: The digit 6 has a value of <strong>6 hundredths</strong>, or <strong>6/100 = 0.06</strong>."
            ]
          }
        },
        {
          heading: "Converting Between Fractions & Decimals",
          paragraphs: [
            "To convert a <strong>fraction to a decimal</strong>, simply divide the numerator by the denominator. For example, 3/4 means 3 &divide; 4 = 0.75. You can use long division or a calculator to do this.",
            "Some conversions come up so often that it helps to memorize them: <strong>1/2 = 0.5</strong>, <strong>1/4 = 0.25</strong>, <strong>3/4 = 0.75</strong>, <strong>1/5 = 0.2</strong>, <strong>2/5 = 0.4</strong>, <strong>1/8 = 0.125</strong>, and <strong>1/10 = 0.1</strong>. Knowing these by heart saves time!",
            "To convert a <strong>decimal to a fraction</strong>, read the decimal using place value and write it as a fraction. For example, 0.35 is <em>\"thirty-five hundredths,\"</em> so it becomes 35/100, which simplifies to 7/20."
          ],
          example: {
            title: "Worked Example: Converting a Fraction to a Decimal",
            problem: "Convert 5/8 to a decimal.",
            steps: [
              "Divide the numerator by the denominator: 5 &divide; 8.",
              "8 goes into 5.000 as follows: 8 &times; 0.6 = 4.8, remainder 0.2. Then 8 &times; 0.02 = 0.16, remainder 0.04. Then 8 &times; 0.005 = 0.04.",
              "Answer: 5/8 = <strong>0.625</strong>."
            ]
          }
        },
        {
          heading: "Decimal Operations",
          paragraphs: [
            "When <strong>adding or subtracting decimals</strong>, the key rule is to <em>line up the decimal points</em>. Stack the numbers so the decimal points are directly above each other, fill in any empty places with zeros, then add or subtract as usual. Bring the decimal point straight down into your answer.",
            "When <strong>multiplying decimals</strong>, ignore the decimal points at first and multiply as if they were whole numbers. Then count the <em>total number of decimal places</em> in both factors and place the decimal point in the product so it has that many decimal places. For example, 0.3 &times; 0.4: multiply 3 &times; 4 = 12, and since there are 2 total decimal places, the answer is 0.12.",
            "When <strong>dividing decimals</strong>, if the divisor has a decimal, move the decimal point to the right to make it a whole number. Move the decimal in the dividend the same number of places. Then divide normally. For example, 1.44 &divide; 0.6 becomes 14.4 &divide; 6 = 2.4."
          ],
          example: {
            title: "Worked Example: Multiplying Decimals",
            problem: "Calculate 2.5 &times; 1.3.",
            steps: [
              "Ignore the decimals and multiply: 25 &times; 13 = 325.",
              "Count total decimal places: 2.5 has 1 decimal place, and 1.3 has 1 decimal place. Total = 2 decimal places.",
              "Place the decimal in 325 so there are 2 decimal places: 3.25.",
              "Answer: 2.5 &times; 1.3 = <strong>3.25</strong>."
            ]
          }
        },
        {
          heading: "Rounding Decimals",
          paragraphs: [
            "Rounding decimals works just like rounding whole numbers. First, find the place you are rounding to. Then look at the digit <em>one place to the right</em>. If that digit is 5 or greater, round up. If it is less than 5, round down (keep the digit the same).",
            "For example, to round 3.847 to the nearest <strong>tenth</strong>, look at the hundredths digit (4). Since 4 &lt; 5, round down: the answer is 3.8. To round 3.847 to the nearest <strong>hundredth</strong>, look at the thousandths digit (7). Since 7 &ge; 5, round up: the answer is 3.85.",
            "After rounding, drop all digits to the right of the rounding place. Remember: rounding gives an <em>approximate</em> answer, which is useful in real life when exact answers aren&rsquo;t needed, like when working with money."
          ],
          example: {
            title: "Worked Example: Rounding to the Nearest Hundredth",
            problem: "Round 6.2385 to the nearest hundredth.",
            steps: [
              "Find the hundredths digit: the 3 in 6.2385.",
              "Look one place to the right: the thousandths digit is 8.",
              "Since 8 &ge; 5, round the hundredths digit up: 3 becomes 4.",
              "Drop everything after the hundredths place.",
              "Answer: <strong>6.24</strong>."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d6q1",
        question: "What is 0.3 + 0.25?",
        type: "multiple-choice",
        options: ["0.28", "0.55", "0.525", "0.58"],
        correct: 1,
        explanation: "Line up the decimal points: 0.30 + 0.25 = 0.55.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d6q2",
        question: "In the number 4.629, which digit is in the hundredths place?",
        type: "multiple-choice",
        options: ["4", "6", "2", "9"],
        correct: 2,
        explanation: "After the decimal point: 6 is tenths, 2 is hundredths, 9 is thousandths.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d6q3",
        question: "What is 1/4 written as a decimal?",
        type: "multiple-choice",
        options: ["0.14", "0.4", "0.25", "0.75"],
        correct: 2,
        explanation: "1 &divide; 4 = 0.25. This is one of the common conversions to memorize.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d6q4",
        question: "What is 0.6 &times; 0.7?",
        type: "multiple-choice",
        options: ["4.2", "0.42", "0.13", "0.042"],
        correct: 1,
        explanation: "Multiply 6 &times; 7 = 42. There are 2 total decimal places (one in each factor), so the answer is 0.42.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d6q5",
        question: "What is 5.03 &minus; 2.7?",
        type: "multiple-choice",
        options: ["2.96", "3.33", "2.33", "2.06"],
        correct: 2,
        explanation: "Line up the decimals: 5.03 &minus; 2.70 = 2.33.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d6q6",
        question: "What is 0.36 written as a fraction in simplest form?",
        type: "multiple-choice",
        options: ["36/10", "9/25", "18/50", "36/99"],
        correct: 1,
        explanation: "0.36 = 36/100. Simplify by dividing both by 4: 36 &divide; 4 = 9 and 100 &divide; 4 = 25, giving 9/25.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d6q7",
        question: "What is 3.6 &divide; 0.12?",
        type: "multiple-choice",
        options: ["3", "0.3", "30", "300"],
        correct: 2,
        explanation: "Move the decimal 2 places in both numbers: 360 &divide; 12 = 30.",
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d6q8",
        question: "Round 9.4653 to the nearest hundredth.",
        type: "multiple-choice",
        options: ["9.46", "9.47", "9.465", "9.5"],
        correct: 1,
        explanation: "The hundredths digit is 6. Look at the next digit: 5. Since 5 &ge; 5, round up: 6 becomes 7. Answer: 9.47.",
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d6q9",
        question: "What is 2/3 &minus; 1/6?",
        type: "multiple-choice",
        options: ["1/3", "1/2", "1/6", "3/6"],
        correct: 1,
        explanation: "Find a common denominator: 2/3 = 4/6. Then 4/6 &minus; 1/6 = 3/6 = 1/2.",
        difficulty: "medium",
        category: "review"
      },
      {
        id: "d6q10",
        question: "What is &minus;8 + 3?",
        type: "multiple-choice",
        options: ["&minus;11", "&minus;5", "5", "11"],
        correct: 1,
        explanation: "Starting at &minus;8 on the number line and moving 3 to the right gives &minus;5.",
        difficulty: "easy",
        category: "review"
      }
    ]
  },

  day7: {
    lesson: {
      title: "Ratios, Rates & Proportions",
      subtitle: "Compare quantities and solve problems with equal ratios",
      sections: [
        {
          heading: "Ratios",
          paragraphs: [
            "A <strong>ratio</strong> compares two quantities and tells you how much of one thing there is compared to another. For example, if a class has 12 boys and 8 girls, the ratio of boys to girls is 12 to 8.",
            "There are three common ways to write a ratio: using the word <em>\"to\"</em> (12 to 8), using a colon (12:8), or as a fraction (12/8). All three mean the same thing. The <em>order matters</em>&mdash;the ratio of boys to girls (12:8) is different from the ratio of girls to boys (8:12).",
            "You can <strong>simplify</strong> a ratio by dividing both numbers by their greatest common factor, just like simplifying a fraction. The ratio 12:8 simplifies to 3:2 because both 12 and 8 are divisible by 4."
          ],
          example: {
            title: "Worked Example: Simplifying a Ratio",
            problem: "A bag has 15 red marbles and 10 blue marbles. Write the ratio of red to blue in simplest form.",
            steps: [
              "The ratio is 15 to 10, or 15:10.",
              "Find the GCF of 15 and 10. The GCF is 5.",
              "Divide both numbers by 5: 15 &divide; 5 = 3 and 10 &divide; 5 = 2.",
              "Answer: The simplified ratio is <strong>3:2</strong>."
            ]
          }
        },
        {
          heading: "Rates & Unit Rates",
          paragraphs: [
            "A <strong>rate</strong> is a special kind of ratio that compares two quantities with <em>different units</em>. For example, driving 150 miles in 3 hours is a rate: 150 miles per 3 hours. Rates often use the word <em>\"per\"</em> to connect the two units.",
            "A <strong>unit rate</strong> is a rate where the second quantity is exactly 1. To find a unit rate, divide both numbers so the denominator becomes 1. For our driving example: 150 miles &divide; 3 = 50 miles per 1 hour, or simply 50 miles per hour (50 mph). Unit rates make it easy to compare.",
            "Unit rates show up everywhere in daily life: price per item (like $2.50 per pound), speed (miles per hour), and even homework problems per minute. When comparing options, <em>always find the unit rate first</em>&mdash;it tells you which deal or speed is better."
          ],
          example: {
            title: "Worked Example: Finding the Better Deal",
            problem: "Store A sells 6 apples for $3.00. Store B sells 4 apples for $2.20. Which is the better deal?",
            steps: [
              "Find the unit rate for Store A: $3.00 &divide; 6 = $0.50 per apple.",
              "Find the unit rate for Store B: $2.20 &divide; 4 = $0.55 per apple.",
              "Compare: $0.50 &lt; $0.55.",
              "Answer: <strong>Store A</strong> is the better deal at $0.50 per apple."
            ]
          }
        },
        {
          heading: "Proportions",
          paragraphs: [
            "A <strong>proportion</strong> is an equation that says two ratios are equal. For example, 2/3 = 8/12 is a proportion because both fractions simplify to the same value. Proportions are powerful tools for solving real-world problems.",
            "To check whether two ratios form a proportion, you can <strong>cross-multiply</strong>. For a/b = c/d, multiply a &times; d and b &times; c. If the two products are equal, the ratios form a true proportion. For example, 2/3 = 8/12: cross-multiply to get 2 &times; 12 = 24 and 3 &times; 8 = 24. They&rsquo;re equal, so it&rsquo;s a proportion!",
            "You can also use cross-multiplication to <strong>solve for an unknown</strong>. If 3/5 = x/20, cross-multiply: 3 &times; 20 = 5 &times; x, which gives 60 = 5x. Divide both sides by 5 to get x = 12. Always check your answer by plugging it back in: 3/5 = 12/20 &mdash; and 12/20 simplifies to 3/5. Correct!"
          ],
          example: {
            title: "Worked Example: Solving a Proportion",
            problem: "Solve for n: 4/7 = n/21.",
            steps: [
              "Cross-multiply: 4 &times; 21 = 7 &times; n.",
              "Calculate: 84 = 7n.",
              "Divide both sides by 7: n = 84 &divide; 7 = 12.",
              "Check: 4/7 = 12/21. Simplify 12/21 by dividing both by 3: 4/7. &#10003;",
              "Answer: <strong>n = 12</strong>."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d7q1",
        question: "A class has 10 boys and 15 girls. What is the ratio of boys to girls in simplest form?",
        type: "multiple-choice",
        options: ["10:15", "2:3", "3:2", "1:5"],
        correct: 1,
        explanation: "The ratio is 10:15. Divide both by the GCF (5): 10 &divide; 5 = 2 and 15 &divide; 5 = 3. Simplified ratio: 2:3.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d7q2",
        question: "If you drive 120 miles in 2 hours, what is your unit rate?",
        type: "multiple-choice",
        options: ["240 mph", "60 mph", "120 mph", "2 miles per hour"],
        correct: 1,
        explanation: "Unit rate = 120 miles &divide; 2 hours = 60 miles per hour.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d7q3",
        question: "Which pair of ratios forms a proportion?",
        type: "multiple-choice",
        options: ["2/3 and 4/5", "3/4 and 9/12", "1/2 and 3/5", "5/6 and 7/8"],
        correct: 1,
        explanation: "Check 3/4 and 9/12: cross-multiply 3 &times; 12 = 36 and 4 &times; 9 = 36. They are equal, so it is a proportion.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d7q4",
        question: "Solve for x: 5/8 = x/24.",
        type: "multiple-choice",
        options: ["10", "15", "3", "20"],
        correct: 1,
        explanation: "Cross-multiply: 5 &times; 24 = 8 &times; x, so 120 = 8x. Divide by 8: x = 15.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d7q5",
        question: "A store sells 5 notebooks for $8.00. What is the price per notebook?",
        type: "multiple-choice",
        options: ["$1.25", "$1.50", "$1.60", "$2.00"],
        correct: 2,
        explanation: "Price per notebook = $8.00 &divide; 5 = $1.60.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d7q6",
        question: "The ratio of cats to dogs at a shelter is 5:3. If there are 40 cats, how many dogs are there?",
        type: "multiple-choice",
        options: ["15", "30", "24", "8"],
        correct: 2,
        explanation: "Set up the proportion: 5/3 = 40/d. Cross-multiply: 5d = 120. Divide by 5: d = 24.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d7q7",
        question: "A car uses 3 gallons of gas to travel 87 miles. How far can it travel on 7 gallons at the same rate?",
        type: "multiple-choice",
        options: ["174 miles", "203 miles", "261 miles", "29 miles"],
        correct: 1,
        explanation: "Set up the proportion: 3/87 = 7/d. Cross-multiply: 3d = 609. Divide by 3: d = 203 miles.",
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d7q8",
        question: "On a map, 2 cm represents 50 km. Two cities are 7 cm apart on the map. What is the actual distance?",
        type: "multiple-choice",
        options: ["150 km", "175 km", "200 km", "350 km"],
        correct: 1,
        explanation: "Set up a proportion: 2/50 = 7/d. Cross-multiply: 2d = 350. Divide by 2: d = 175 km.",
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d7q9",
        question: "What is 4.2 &times; 0.3?",
        type: "multiple-choice",
        options: ["12.6", "1.26", "0.126", "1.62"],
        correct: 1,
        explanation: "Multiply 42 &times; 3 = 126. Count 2 total decimal places. Answer: 1.26.",
        difficulty: "medium",
        category: "review"
      },
      {
        id: "d7q10",
        question: "What is the value of 3 + 2 &times; 4 &minus; 1?",
        type: "multiple-choice",
        options: ["19", "10", "12", "14"],
        correct: 1,
        explanation: "Follow PEMDAS: first multiply 2 &times; 4 = 8. Then 3 + 8 &minus; 1 = 10.",
        difficulty: "easy",
        category: "review"
      }
    ]
  },

  day8: {
    lesson: {
      title: "Percents",
      subtitle: "Understand and use percents for fractions, decimals, and real-life problems",
      sections: [
        {
          heading: "Understanding Percents",
          paragraphs: [
            "The word <strong>percent</strong> means <em>\"per hundred.\"</em> A percent tells you how many out of 100. For example, 25% means 25 out of 100, and 80% means 80 out of 100. You can picture a 10&times;10 grid with 100 squares&mdash;shading 25 squares represents 25%.",
            "Some percents come up so often that they&rsquo;re worth memorizing: <strong>100% = the whole thing</strong>, <strong>50% = one half</strong>, <strong>25% = one quarter</strong>, <strong>10% = one tenth</strong>, and <strong>1% = one hundredth</strong>. These benchmarks help you estimate quickly.",
            "Percents can be less than 1% (like 0.5%) or greater than 100% (like 150%). A percent greater than 100% means <em>more than the whole</em>. For instance, if your savings grew by 150%, you now have more than you started with!"
          ],
          example: {
            title: "Worked Example: Visualizing a Percent",
            problem: "What does 40% look like on a 100-square grid?",
            steps: [
              "A 10&times;10 grid has 100 squares total.",
              "40% means 40 out of 100.",
              "Shade 40 squares (for example, 4 full rows of 10).",
              "Answer: <strong>40 out of 100 squares</strong> are shaded, representing 40%."
            ]
          }
        },
        {
          heading: "Converting Between Fractions, Decimals, and Percents",
          paragraphs: [
            "These three forms all represent parts of a whole, and you can convert freely between them. To change a <strong>percent to a decimal</strong>, divide by 100 (or move the decimal point 2 places to the left). For example, 45% = 0.45 and 7% = 0.07.",
            "To change a <strong>decimal to a percent</strong>, multiply by 100 (or move the decimal point 2 places to the right). For example, 0.8 = 80% and 0.125 = 12.5%.",
            "To change a <strong>percent to a fraction</strong>, write the percent over 100 and simplify. For example, 60% = 60/100 = 3/5. To change a <strong>fraction to a percent</strong>, first convert the fraction to a decimal (divide), then convert that decimal to a percent. For instance, 3/8 = 0.375 = 37.5%."
          ],
          example: {
            title: "Worked Example: Converting All Three Ways",
            problem: "Express 3/5 as a decimal and as a percent.",
            steps: [
              "Convert to decimal: 3 &divide; 5 = 0.6.",
              "Convert decimal to percent: 0.6 &times; 100 = 60%.",
              "Answer: 3/5 = <strong>0.6</strong> = <strong>60%</strong>."
            ]
          }
        },
        {
          heading: "Solving Percent Problems",
          paragraphs: [
            "Most percent problems fall into three types. Use the formula: <strong>Part = Percent &times; Whole</strong>. You can rearrange it to solve for any of the three values.",
            "<strong>Finding the part:</strong> What is 30% of 200? Multiply: 0.30 &times; 200 = 60. <strong>Finding the percent:</strong> 15 is what percent of 60? Divide: 15 &divide; 60 = 0.25, then convert: 0.25 = 25%. <strong>Finding the whole:</strong> 12 is 40% of what number? Divide the part by the percent: 12 &divide; 0.40 = 30.",
            "A useful shortcut: to find <strong>10%</strong> of any number, just move the decimal one place to the left. Then you can build from there. For example, 10% of 80 is 8, so 20% is 16, 5% is 4, and 15% is 12."
          ],
          example: {
            title: "Worked Example: Finding the Part",
            problem: "What is 15% of 80?",
            steps: [
              "Convert the percent to a decimal: 15% = 0.15.",
              "Multiply: 0.15 &times; 80.",
              "Calculate: 0.15 &times; 80 = 12.",
              "Answer: 15% of 80 is <strong>12</strong>."
            ]
          }
        },
        {
          heading: "Real-World Percents",
          paragraphs: [
            "Percents are everywhere in real life! A <strong>discount</strong> is a percent taken off the original price. If a $50 shirt is 20% off, the discount is 0.20 &times; $50 = $10, so you pay $50 &minus; $10 = $40.",
            "<strong>Sales tax</strong> is a percent added onto a price. If tax is 8% and your item costs $25, the tax is 0.08 &times; $25 = $2.00. The total cost is $25 + $2 = $27. Similarly, a <strong>tip</strong> at a restaurant is usually 15%&ndash;20% of the bill.",
            "Here&rsquo;s a handy trick: to calculate a <strong>tip</strong>, find 10% of the bill (move the decimal one place left), then adjust. For a $36 bill: 10% is $3.60, so 20% is $7.20. For 15%, take the average: ($3.60 + $7.20) &divide; 2 = $5.40."
          ],
          example: {
            title: "Worked Example: Finding the Sale Price",
            problem: "A backpack costs $60 and is on sale for 25% off. What is the sale price?",
            steps: [
              "Find the discount: 25% of $60 = 0.25 &times; 60 = $15.",
              "Subtract the discount from the original price: $60 &minus; $15.",
              "Answer: The sale price is <strong>$45</strong>."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d8q1",
        question: "What is 50% written as a decimal?",
        type: "multiple-choice",
        options: ["5.0", "0.50", "0.05", "50.0"],
        correct: 1,
        explanation: "To convert a percent to a decimal, divide by 100: 50 &divide; 100 = 0.50.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d8q2",
        question: "What is 25% of 80?",
        type: "multiple-choice",
        options: ["25", "15", "20", "40"],
        correct: 2,
        explanation: "25% = 0.25. Multiply: 0.25 &times; 80 = 20.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d8q3",
        question: "Convert 0.6 to a percent.",
        type: "multiple-choice",
        options: ["0.6%", "6%", "60%", "600%"],
        correct: 2,
        explanation: "Multiply by 100: 0.6 &times; 100 = 60%.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d8q4",
        question: "What percent of 50 is 12?",
        type: "multiple-choice",
        options: ["20%", "12%", "24%", "25%"],
        correct: 2,
        explanation: "Divide: 12 &divide; 50 = 0.24. Convert to percent: 0.24 &times; 100 = 24%.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d8q5",
        question: "A shirt costs $40 and is 15% off. What is the discount amount?",
        type: "multiple-choice",
        options: ["$4.00", "$6.00", "$8.00", "$15.00"],
        correct: 1,
        explanation: "15% of $40 = 0.15 &times; 40 = $6.00.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d8q6",
        question: "Write 3/8 as a percent.",
        type: "multiple-choice",
        options: ["38%", "37.5%", "33.3%", "30%"],
        correct: 1,
        explanation: "3 &divide; 8 = 0.375. Convert to percent: 0.375 &times; 100 = 37.5%.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d8q7",
        question: "18 is 30% of what number?",
        type: "multiple-choice",
        options: ["5.4", "54", "60", "48"],
        correct: 2,
        explanation: "Use Part = Percent &times; Whole: 18 = 0.30 &times; Whole. Divide: 18 &divide; 0.30 = 60.",
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d8q8",
        question: "A meal costs $45. You add 8% tax and then leave a 20% tip on the pre-tax amount. What is the total?",
        type: "multiple-choice",
        options: ["$55.60", "$57.60", "$58.50", "$54.60"],
        correct: 1,
        explanation: "Tax: 0.08 &times; $45 = $3.60. Tip: 0.20 &times; $45 = $9.00. Total: $45 + $3.60 + $9.00 = $57.60.",
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d8q9",
        question: "Solve for x: 3/5 = x/35.",
        type: "multiple-choice",
        options: ["15", "21", "7", "25"],
        correct: 1,
        explanation: "Cross-multiply: 3 &times; 35 = 5 &times; x, so 105 = 5x. Divide by 5: x = 21.",
        difficulty: "medium",
        category: "review"
      },
      {
        id: "d8q10",
        question: "What is 3/4 &times; 2/5?",
        type: "multiple-choice",
        options: ["6/20 = 3/10", "5/9", "6/9 = 2/3", "3/20"],
        correct: 0,
        explanation: "Multiply numerators: 3 &times; 2 = 6. Multiply denominators: 4 &times; 5 = 20. Result: 6/20 = 3/10.",
        difficulty: "easy",
        category: "review"
      }
    ]
  },

  day9: {
    lesson: {
      title: "Variables & Expressions",
      subtitle: "Use letters and symbols to represent numbers and write math in a new way",
      sections: [
        {
          heading: "What Are Variables?",
          paragraphs: [
            "A <strong>variable</strong> is a letter (like <em>x</em>, <em>y</em>, or <em>n</em>) that stands for a number we don&rsquo;t know yet. Think of it as a box or placeholder that can hold different values. Variables let us write math that works for <em>many</em> situations, not just one.",
            "For example, if a movie ticket costs <em>x</em> dollars, then 3 tickets cost 3 &times; <em>x</em> dollars. We don&rsquo;t need to know the exact price to write the expression! Once we learn the price, we can plug it in.",
            "In algebra, when a number is written right next to a variable with no sign between them, it means multiplication. So <strong>5n</strong> means 5 &times; <em>n</em>, and <strong>3xy</strong> means 3 &times; <em>x</em> &times; <em>y</em>. The number in front of the variable is called the <strong>coefficient</strong>."
          ],
          example: {
            title: "Worked Example: Identifying Parts of an Expression",
            problem: "Name the variable, coefficient, and constant in the expression 4x + 7.",
            steps: [
              "The variable is <em>x</em>&mdash;it represents an unknown number.",
              "The coefficient is 4&mdash;it is the number multiplied by the variable.",
              "The constant is 7&mdash;it is a fixed number that doesn&rsquo;t change.",
              "Answer: Variable = <strong>x</strong>, coefficient = <strong>4</strong>, constant = <strong>7</strong>."
            ]
          }
        },
        {
          heading: "Writing Algebraic Expressions",
          paragraphs: [
            "One of the most important skills in algebra is translating words into math expressions. Here are key phrases to know: <em>\"sum of\"</em> means addition, <em>\"difference of\"</em> means subtraction, <em>\"product of\"</em> means multiplication, and <em>\"quotient of\"</em> means division.",
            "Watch out for tricky phrasing! <em>\"5 less than a number\"</em> means <strong>n &minus; 5</strong> (not 5 &minus; n). The phrase <em>\"less than\"</em> flips the order. Similarly, <em>\"twice a number\"</em> means <strong>2n</strong>, and <em>\"a number divided by 3\"</em> means <strong>n/3</strong>.",
            "More complex phrases combine operations. <em>\"3 more than twice a number\"</em> translates to <strong>2n + 3</strong>. <em>\"Half of the sum of a number and 10\"</em> becomes <strong>(n + 10)/2</strong>. Practice reading these carefully&mdash;the order of the words tells you the order of the math!"
          ],
          example: {
            title: "Worked Example: Translating Words to Math",
            problem: "Write an algebraic expression for: \"7 less than 3 times a number.\"",
            steps: [
              "Let the unknown number be <em>n</em>.",
              "\"3 times a number\" translates to 3n.",
              "\"7 less than\" means we subtract 7 from that result.",
              "Answer: <strong>3n &minus; 7</strong>."
            ]
          }
        },
        {
          heading: "Evaluating Expressions",
          paragraphs: [
            "To <strong>evaluate</strong> an expression means to find its value when you replace the variable with a specific number. Substitute the given number for the variable, then compute step by step using the order of operations (PEMDAS).",
            "For example, evaluate 2x + 5 when x = 4. Replace x with 4: 2(4) + 5 = 8 + 5 = 13. Always use parentheses around the substituted value to avoid mistakes, especially with negative numbers.",
            "When expressions have more than one variable, you substitute a value for each one. For example, evaluate 3a &minus; b when a = 6 and b = 4: substitute to get 3(6) &minus; 4 = 18 &minus; 4 = 14."
          ],
          example: {
            title: "Worked Example: Evaluating an Expression",
            problem: "Evaluate 5x &minus; 3 when x = &minus;2.",
            steps: [
              "Replace x with &minus;2: 5(&minus;2) &minus; 3.",
              "Multiply first: 5 &times; (&minus;2) = &minus;10.",
              "Subtract: &minus;10 &minus; 3 = &minus;13.",
              "Answer: <strong>&minus;13</strong>."
            ]
          }
        },
        {
          heading: "Simplifying Expressions",
          paragraphs: [
            "<strong>Like terms</strong> are terms that have the same variable raised to the same power. For example, 3x and 7x are like terms because they both have the variable <em>x</em>. However, 3x and 3x<sup>2</sup> are <em>not</em> like terms because the exponents are different. Constants (plain numbers) are also like terms with each other.",
            "To <strong>combine like terms</strong>, add or subtract their coefficients. For example, 3x + 7x = 10x, and 5y &minus; 2y = 3y. You can also combine constants: 4 + 9 = 13. Combining like terms is one of the main ways to simplify an expression.",
            "The <strong>distributive property</strong> says that a(b + c) = ab + ac. You multiply the number outside the parentheses by each term inside. For example, 3(x + 4) = 3x + 12. After distributing, look for like terms to combine and simplify further."
          ],
          example: {
            title: "Worked Example: Simplifying with the Distributive Property",
            problem: "Simplify: 2(3x + 5) + 4x.",
            steps: [
              "Distribute the 2: 2 &times; 3x + 2 &times; 5 = 6x + 10.",
              "Write the full expression: 6x + 10 + 4x.",
              "Combine like terms: 6x + 4x = 10x.",
              "Answer: <strong>10x + 10</strong>."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d9q1",
        question: "In the expression 6n + 3, what is the coefficient of n?",
        type: "multiple-choice",
        options: ["n", "3", "6", "6n"],
        correct: 2,
        explanation: "The coefficient is the number multiplied by the variable. In 6n, the coefficient is 6.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d9q2",
        question: "Which expression represents \"the sum of a number and 9\"?",
        type: "multiple-choice",
        options: ["9n", "n &minus; 9", "n + 9", "n &divide; 9"],
        correct: 2,
        explanation: "\"Sum\" means addition. A number plus 9 is written as n + 9.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d9q3",
        question: "Evaluate 4x when x = 3.",
        type: "multiple-choice",
        options: ["7", "12", "34", "43"],
        correct: 1,
        explanation: "Substitute x = 3 into 4x: 4 &times; 3 = 12.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d9q4",
        question: "Which expression means \"5 less than twice a number\"?",
        type: "multiple-choice",
        options: ["5 &minus; 2n", "2n &minus; 5", "2(n &minus; 5)", "5n &minus; 2"],
        correct: 1,
        explanation: "\"Twice a number\" is 2n. \"5 less than\" means subtract 5 from it: 2n &minus; 5.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d9q5",
        question: "Evaluate 3a + 2b when a = 4 and b = 5.",
        type: "multiple-choice",
        options: ["22", "19", "27", "17"],
        correct: 0,
        explanation: "Substitute: 3(4) + 2(5) = 12 + 10 = 22.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d9q6",
        question: "Simplify: 8x + 3 &minus; 2x + 7.",
        type: "multiple-choice",
        options: ["10x + 10", "6x + 10", "6x &minus; 4", "10x &minus; 4"],
        correct: 1,
        explanation: "Combine like terms: 8x &minus; 2x = 6x and 3 + 7 = 10. Result: 6x + 10.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d9q7",
        question: "Simplify: 4(2x + 3) &minus; 5x.",
        type: "multiple-choice",
        options: ["3x + 3", "3x + 12", "13x + 3", "3x + 7"],
        correct: 1,
        explanation: "Distribute: 4 &times; 2x + 4 &times; 3 = 8x + 12. Then 8x + 12 &minus; 5x = 3x + 12.",
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d9q8",
        question: "Evaluate x<sup>2</sup> &minus; 3x + 2 when x = 5.",
        type: "multiple-choice",
        options: ["12", "2", "42", "10"],
        correct: 0,
        explanation: "Substitute x = 5: 5<sup>2</sup> &minus; 3(5) + 2 = 25 &minus; 15 + 2 = 12.",
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d9q9",
        question: "What is 40% of 90?",
        type: "multiple-choice",
        options: ["32", "36", "40", "45"],
        correct: 1,
        explanation: "40% = 0.40. Multiply: 0.40 &times; 90 = 36.",
        difficulty: "medium",
        category: "review"
      },
      {
        id: "d9q10",
        question: "A recipe needs sugar and flour in a ratio of 2:5. If you use 6 cups of sugar, how many cups of flour do you need?",
        type: "multiple-choice",
        options: ["10", "12", "15", "20"],
        correct: 2,
        explanation: "Set up the proportion: 2/5 = 6/f. Cross-multiply: 2f = 30. Divide by 2: f = 15.",
        difficulty: "medium",
        category: "review"
      }
    ]
  },

  day10: {
    lesson: {
      title: "Equations & Problem Solving",
      subtitle: "Solve equations and put all your pre-algebra skills to work",
      sections: [
        {
          heading: "Understanding Equations",
          paragraphs: [
            "An <strong>equation</strong> is a math sentence that says two things are <em>equal</em>, connected by an equals sign (=). For example, 3x + 2 = 14 is an equation. An <strong>expression</strong> like 3x + 2 doesn&rsquo;t have an equals sign&mdash;that&rsquo;s the key difference.",
            "Think of an equation like a <strong>balance scale</strong>. Whatever you do to one side, you must also do to the other side to keep it balanced. If both sides are equal and you add 5 to the left, you must add 5 to the right too.",
            "The <strong>solution</strong> of an equation is the value of the variable that makes the equation true. For example, in x + 3 = 10, the solution is x = 7 because 7 + 3 = 10. Finding the solution is called <em>\"solving the equation.\"</em>"
          ],
          example: {
            title: "Worked Example: Equation vs. Expression",
            problem: "Which of these is an equation and which is an expression? (A) 5x &minus; 3  (B) 5x &minus; 3 = 12",
            steps: [
              "(A) 5x &minus; 3 has no equals sign, so it is an <strong>expression</strong>.",
              "(B) 5x &minus; 3 = 12 has an equals sign showing two sides are equal, so it is an <strong>equation</strong>.",
              "Answer: (A) is an expression; (B) is an <strong>equation</strong>."
            ]
          }
        },
        {
          heading: "Solving One-Step Equations",
          paragraphs: [
            "A <strong>one-step equation</strong> can be solved in a single move by using the <strong>inverse (opposite) operation</strong>. Addition and subtraction are inverses of each other, and multiplication and division are inverses of each other.",
            "If the equation has addition, <em>subtract</em> from both sides. For x + 9 = 15: subtract 9 from both sides to get x = 6. If it has subtraction, <em>add</em> to both sides. For x &minus; 4 = 10: add 4 to both sides to get x = 14.",
            "If the equation has multiplication, <em>divide</em> both sides. For 6x = 42: divide both sides by 6 to get x = 7. If it has division, <em>multiply</em> both sides. For x/5 = 3: multiply both sides by 5 to get x = 15. Always <strong>check</strong> your answer by plugging it back in!"
          ],
          example: {
            title: "Worked Example: Solving a One-Step Equation",
            problem: "Solve: 4x = 28.",
            steps: [
              "The variable x is being multiplied by 4. Use the inverse operation: divide.",
              "Divide both sides by 4: 4x &divide; 4 = 28 &divide; 4.",
              "Simplify: x = 7.",
              "Check: 4(7) = 28. &#10003;",
              "Answer: <strong>x = 7</strong>."
            ]
          }
        },
        {
          heading: "Word Problems to Equations",
          paragraphs: [
            "Many real-world problems can be solved by turning them into equations. Follow these steps: <strong>(1)</strong> Read the problem carefully and identify what you are looking for&mdash;that&rsquo;s your variable. <strong>(2)</strong> Translate the words into an equation. <strong>(3)</strong> Solve the equation. <strong>(4)</strong> Check your answer against the original problem.",
            "Watch for key phrases: <em>\"a number increased by 5\"</em> becomes x + 5, <em>\"twice a number is 16\"</em> becomes 2x = 16, and <em>\"a number decreased by 8 equals 3\"</em> becomes x &minus; 8 = 3. The word <em>\"is\"</em> or <em>\"equals\"</em> usually tells you where the equals sign goes.",
            "Let&rsquo;s say: <em>\"Maria has some stickers. After giving away 12, she has 23 left. How many did she start with?\"</em> Let x = stickers she started with. The equation is x &minus; 12 = 23. Add 12: x = 35. Check: 35 &minus; 12 = 23. &#10003;"
          ],
          example: {
            title: "Worked Example: Writing and Solving an Equation",
            problem: "A number multiplied by 6 gives 54. What is the number?",
            steps: [
              "Let the unknown number be <em>n</em>.",
              "Translate: \"a number multiplied by 6 gives 54\" becomes 6n = 54.",
              "Solve: divide both sides by 6. n = 54 &divide; 6 = 9.",
              "Check: 6 &times; 9 = 54. &#10003;",
              "Answer: The number is <strong>9</strong>."
            ]
          }
        },
        {
          heading: "Course Review Highlights",
          paragraphs: [
            "Congratulations on making it through 10 days of pre-algebra! Let&rsquo;s recap the big ideas. In <strong>Days 1&ndash;2</strong>, you built a solid number sense with whole numbers, place value, rounding, and the order of operations (PEMDAS). In <strong>Days 3&ndash;4</strong>, you explored integers&mdash;positive and negative numbers&mdash;and learned the rules for adding, subtracting, multiplying, and dividing them.",
            "In <strong>Day 5</strong>, you worked with fractions: finding common denominators, adding, subtracting, multiplying, and dividing. <strong>Day 6</strong> covered decimals and how they connect to fractions. <strong>Day 7</strong> introduced ratios, unit rates, and proportions for comparing quantities. <strong>Day 8</strong> brought it all together with percents and real-world applications like discounts and tax.",
            "Finally, in <strong>Days 9&ndash;10</strong>, you entered the world of algebra: writing expressions, evaluating them, simplifying like terms, and solving equations. These skills are the foundation for everything you&rsquo;ll learn next in math. Keep practicing, and remember&mdash;algebra is just arithmetic with letters!"
          ],
          example: {
            title: "Worked Example: Putting It All Together",
            problem: "A store sells a jacket for $80 at 25% off, plus 10% sales tax. What is the total cost?",
            steps: [
              "Find the discount: 25% of $80 = 0.25 &times; 80 = $20.",
              "Subtract the discount: $80 &minus; $20 = $60 (sale price).",
              "Find the tax: 10% of $60 = 0.10 &times; 60 = $6.",
              "Add the tax: $60 + $6 = $66.",
              "Answer: The total cost is <strong>$66</strong>."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d10q1",
        question: "Solve: x + 7 = 15.",
        type: "multiple-choice",
        options: ["x = 22", "x = 8", "x = 7", "x = 9"],
        correct: 1,
        explanation: "Subtract 7 from both sides: x = 15 &minus; 7 = 8.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d10q2",
        question: "Solve: x &minus; 5 = 12.",
        type: "multiple-choice",
        options: ["x = 7", "x = 60", "x = 17", "x = 15"],
        correct: 2,
        explanation: "Add 5 to both sides: x = 12 + 5 = 17.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d10q3",
        question: "Which of these is an equation?",
        type: "multiple-choice",
        options: ["3x + 4", "7 &minus; y", "2n + 1 = 9", "5(a + b)"],
        correct: 2,
        explanation: "An equation contains an equals sign. Only 2n + 1 = 9 has one.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d10q4",
        question: "Solve: 5x = 45.",
        type: "multiple-choice",
        options: ["x = 50", "x = 40", "x = 9", "x = 225"],
        correct: 2,
        explanation: "Divide both sides by 5: x = 45 &divide; 5 = 9.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d10q5",
        question: "Solve: n/4 = 8.",
        type: "multiple-choice",
        options: ["n = 2", "n = 12", "n = 24", "n = 32"],
        correct: 3,
        explanation: "Multiply both sides by 4: n = 8 &times; 4 = 32.",
        difficulty: "medium",
        category: "topic"
      },
      {
        id: "d10q6",
        question: "\"A number doubled and then increased by 3 equals 19.\" What is the equation and solution?",
        type: "multiple-choice",
        options: [
          "2x + 3 = 19; x = 8",
          "2x + 3 = 19; x = 11",
          "2(x + 3) = 19; x = 6.5",
          "x + 6 = 19; x = 13"
        ],
        correct: 0,
        explanation: "\"Doubled\" means 2x, \"increased by 3\" means + 3. Equation: 2x + 3 = 19. Subtract 3: 2x = 16. Divide by 2: x = 8.",
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d10q7",
        question: "Sam had some trading cards. He gave away 15 and now has 42 left. How many did he start with?",
        type: "multiple-choice",
        options: ["x = 27", "x = 57", "x = 47", "x = 37"],
        correct: 1,
        explanation: "Let x = cards he started with. Equation: x &minus; 15 = 42. Add 15: x = 57.",
        difficulty: "hard",
        category: "topic"
      },
      {
        id: "d10q8",
        question: "What is &minus;6 &times; (&minus;4)?",
        type: "multiple-choice",
        options: ["&minus;24", "&minus;10", "24", "10"],
        correct: 2,
        explanation: "A negative times a negative is positive: &minus;6 &times; (&minus;4) = 24.",
        difficulty: "medium",
        category: "review"
      },
      {
        id: "d10q9",
        question: "What is 5/6 &minus; 1/3?",
        type: "multiple-choice",
        options: ["4/3", "1/2", "2/3", "1/6"],
        correct: 1,
        explanation: "Convert to a common denominator: 1/3 = 2/6. Then 5/6 &minus; 2/6 = 3/6 = 1/2.",
        difficulty: "medium",
        category: "review"
      },
      {
        id: "d10q10",
        question: "A video game originally costs $60. It is on sale for 30% off. What is the sale price?",
        type: "multiple-choice",
        options: ["$30", "$42", "$18", "$48"],
        correct: 1,
        explanation: "Discount: 30% of $60 = 0.30 &times; 60 = $18. Sale price: $60 &minus; $18 = $42.",
        difficulty: "medium",
        category: "review"
      }
    ]
  }
};
