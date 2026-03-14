export const DAYS_6_10 = {

  // ============================================================
  // DAY 6: Zero & Negative Exponents
  // ============================================================
  day6: {
    lesson: {
      title: "Zero & Negative Exponents",
      subtitle: "Discover what happens when the exponent is 0 or negative &mdash; the pattern never lies!",
      sections: [
        {
          heading: "The Zero Exponent",
          paragraphs: [
            "On Day&nbsp;5 you learned that an exponent tells you how many times to multiply the base by itself. But what if the exponent is <strong>0</strong>? It might seem strange, but <em>any nonzero number raised to the zero power equals&nbsp;1</em>. In symbols: <strong>a<sup>0</sup> = 1</strong> whenever a &ne; 0.",
            "Here&rsquo;s <em>why</em> it makes sense. Look at the powers of 2 and notice the pattern as the exponent drops by&nbsp;1 each time: 2<sup>4</sup>&nbsp;=&nbsp;16, 2<sup>3</sup>&nbsp;=&nbsp;8, 2<sup>2</sup>&nbsp;=&nbsp;4, 2<sup>1</sup>&nbsp;=&nbsp;2. Each step divides the previous answer by&nbsp;2. So the next step must be 2<sup>0</sup>&nbsp;=&nbsp;2&nbsp;&divide;&nbsp;2&nbsp;=&nbsp;<strong>1</strong>. The pattern forces 2<sup>0</sup> to be&nbsp;1!",
            "This works for every nonzero base: 5<sup>0</sup>&nbsp;=&nbsp;1, (&minus;3)<sup>0</sup>&nbsp;=&nbsp;1, 100<sup>0</sup>&nbsp;=&nbsp;1. Think of it like this &mdash; if you multiply <em>zero copies</em> of a number together, you&rsquo;re left with the &ldquo;empty product,&rdquo; which mathematicians define as&nbsp;1. (Note: 0<sup>0</sup> is a special case that mathematicians debate, so we only use this rule when the base is not zero.)"
          ],
          example: {
            title: "Worked Example: Evaluating Zero Exponents",
            problem: "Evaluate 7<sup>0</sup> + 3<sup>0</sup> + (&minus;4)<sup>0</sup>.",
            steps: [
              "Apply the zero-exponent rule to each term: 7<sup>0</sup> = <strong>1</strong>, 3<sup>0</sup> = <strong>1</strong>, (&minus;4)<sup>0</sup> = <strong>1</strong>.",
              "Add the results: 1 + 1 + 1 = <strong>3</strong>.",
              "Key idea: No matter how big or small the base is, as long as it isn&rsquo;t zero, raising it to the 0 power gives 1."
            ]
          }
        },
        {
          heading: "Negative Exponents",
          paragraphs: [
            "What happens if we keep going below zero in our exponent pattern? We already saw 2<sup>1</sup>&nbsp;=&nbsp;2 and 2<sup>0</sup>&nbsp;=&nbsp;1. Continuing to divide by 2: 2<sup>&minus;1</sup>&nbsp;=&nbsp;1&nbsp;&divide;&nbsp;2&nbsp;=&nbsp;<strong>1/2</strong>, then 2<sup>&minus;2</sup>&nbsp;=&nbsp;(1/2)&nbsp;&divide;&nbsp;2&nbsp;=&nbsp;<strong>1/4</strong>, and 2<sup>&minus;3</sup>&nbsp;=&nbsp;<strong>1/8</strong>.",
            "Notice that 1/2&nbsp;=&nbsp;1/2<sup>1</sup>, 1/4&nbsp;=&nbsp;1/2<sup>2</sup>, and 1/8&nbsp;=&nbsp;1/2<sup>3</sup>. The rule is: <strong>a<sup>&minus;n</sup>&nbsp;=&nbsp;1/a<sup>n</sup></strong>. A negative exponent means &ldquo;take the reciprocal.&rdquo; The number flips to the bottom of a fraction!",
            "Think of it like a see-saw: positive exponents make a number bigger and bigger, while negative exponents make it smaller and smaller (closer to zero). For example, 10<sup>3</sup>&nbsp;=&nbsp;1000 is huge, but 10<sup>&minus;3</sup>&nbsp;=&nbsp;1/1000&nbsp;=&nbsp;0.001 is tiny. The negative exponent doesn&rsquo;t make the answer negative &mdash; it makes it a fraction."
          ],
          example: {
            title: "Worked Example: Negative Exponents",
            problem: "Evaluate 5<sup>&minus;2</sup>.",
            steps: [
              "Apply the rule: a<sup>&minus;n</sup> = 1/a<sup>n</sup>.",
              "So 5<sup>&minus;2</sup> = 1/5<sup>2</sup>.",
              "Calculate the denominator: 5<sup>2</sup> = 25.",
              "Answer: 5<sup>&minus;2</sup> = <strong>1/25</strong>."
            ]
          }
        },
        {
          heading: "The Quotient Rule & Putting It All Together",
          paragraphs: [
            "On Day&nbsp;5 you learned the <em>product rule</em>: a<sup>m</sup>&nbsp;&times;&nbsp;a<sup>n</sup>&nbsp;=&nbsp;a<sup>m+n</sup>. Now here is its partner, the <strong>quotient rule</strong>: when you <em>divide</em> powers with the same base, you <em>subtract</em> the exponents: <strong>a<sup>m</sup>&nbsp;&divide;&nbsp;a<sup>n</sup>&nbsp;=&nbsp;a<sup>m&minus;n</sup></strong>.",
            "Why does this work? Consider 2<sup>5</sup>&nbsp;&divide;&nbsp;2<sup>3</sup>. Written out, that is (2&times;2&times;2&times;2&times;2)&nbsp;&divide;&nbsp;(2&times;2&times;2). Three of the 2&rsquo;s cancel, leaving 2&times;2&nbsp;=&nbsp;2<sup>2</sup>. And indeed 5&nbsp;&minus;&nbsp;3&nbsp;=&nbsp;2. The quotient rule also explains zero and negative exponents: 2<sup>3</sup>&nbsp;&divide;&nbsp;2<sup>3</sup>&nbsp;=&nbsp;2<sup>0</sup>&nbsp;=&nbsp;1, and 2<sup>2</sup>&nbsp;&divide;&nbsp;2<sup>5</sup>&nbsp;=&nbsp;2<sup>&minus;3</sup>&nbsp;=&nbsp;1/8.",
            "Let&rsquo;s combine all four exponent rules in one place: <strong>(1)</strong>&nbsp;Product rule: a<sup>m</sup>&nbsp;&times;&nbsp;a<sup>n</sup>&nbsp;=&nbsp;a<sup>m+n</sup>. <strong>(2)</strong>&nbsp;Power rule: (a<sup>m</sup>)<sup>n</sup>&nbsp;=&nbsp;a<sup>mn</sup>. <strong>(3)</strong>&nbsp;Quotient rule: a<sup>m</sup>&nbsp;&divide;&nbsp;a<sup>n</sup>&nbsp;=&nbsp;a<sup>m&minus;n</sup>. <strong>(4)</strong>&nbsp;Zero &amp; negative exponent: a<sup>0</sup>&nbsp;=&nbsp;1 and a<sup>&minus;n</sup>&nbsp;=&nbsp;1/a<sup>n</sup>. You now have a full exponent toolkit!"
          ],
          example: {
            title: "Worked Example: Combining Exponent Rules",
            problem: "Simplify 3<sup>4</sup> &divide; 3<sup>6</sup>.",
            steps: [
              "Use the quotient rule: 3<sup>4</sup> &divide; 3<sup>6</sup> = 3<sup>4&minus;6</sup> = 3<sup>&minus;2</sup>.",
              "Now apply the negative-exponent rule: 3<sup>&minus;2</sup> = 1/3<sup>2</sup>.",
              "Calculate: 3<sup>2</sup> = 9.",
              "Answer: 3<sup>4</sup> &divide; 3<sup>6</sup> = <strong>1/9</strong>."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d6q1",
        question: "What is 9<sup>0</sup>?",
        type: "multiple-choice",
        options: ["0", "1", "9", "Undefined"],
        correct: 1,
        explanation: "Any nonzero number raised to the zero power equals 1. So 9<sup>0</sup> = 1.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d6q2",
        question: "What is 2<sup>&minus;3</sup>?",
        type: "multiple-choice",
        options: ["&minus;8", "&minus;6", "1/8", "1/6"],
        correct: 2,
        explanation: "2<sup>&minus;3</sup> = 1/2<sup>3</sup> = 1/8. A negative exponent means &ldquo;take the reciprocal,&rdquo; not &ldquo;make the answer negative.&rdquo;",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d6q3",
        question: "What is 10<sup>&minus;2</sup>?",
        type: "multiple-choice",
        options: ["&minus;20", "0.01", "100", "&minus;100"],
        correct: 1,
        explanation: "10<sup>&minus;2</sup> = 1/10<sup>2</sup> = 1/100 = 0.01.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d6q4",
        question: "Simplify using the quotient rule: 5<sup>7</sup> &divide; 5<sup>4</sup>.",
        type: "multiple-choice",
        options: ["5<sup>3</sup>", "5<sup>11</sup>", "5<sup>28</sup>", "1<sup>3</sup>"],
        correct: 0,
        explanation: "Quotient rule: subtract exponents. 5<sup>7</sup> &divide; 5<sup>4</sup> = 5<sup>7&minus;4</sup> = 5<sup>3</sup>.",
        difficulty: "medium",
        category: "topic",
        hints: ["When you divide two powers that have the same base, think about what happens to the exponents.", "Use the quotient rule: subtract the bottom exponent from the top exponent. What is 7 minus 4?"]
      },
      {
        id: "d6q5",
        question: "What is 4<sup>&minus;1</sup> + 4<sup>0</sup>?",
        type: "multiple-choice",
        options: ["0", "5/4", "3/4", "1/4"],
        correct: 1,
        explanation: "4<sup>&minus;1</sup> = 1/4 and 4<sup>0</sup> = 1. So 1/4 + 1 = 1/4 + 4/4 = 5/4.",
        difficulty: "medium",
        category: "topic",
        hints: ["Handle each term separately: what does a negative exponent do, and what does a zero exponent give you?", "4 to the power of &minus;1 means 1/4, and 4 to the power of 0 means 1. Now add those two numbers together."]
      },
      {
        id: "d6q6",
        question: "Simplify: 2<sup>3</sup> &divide; 2<sup>5</sup>.",
        type: "multiple-choice",
        options: ["2<sup>2</sup>", "2<sup>&minus;2</sup>", "1/4", "Both B and C"],
        correct: 3,
        explanation: "Quotient rule: 2<sup>3&minus;5</sup> = 2<sup>&minus;2</sup>. And 2<sup>&minus;2</sup> = 1/2<sup>2</sup> = 1/4. So both B and C are correct.",
        difficulty: "medium",
        category: "topic",
        hints: ["Use the quotient rule first: subtract exponents. What do you get when the result is a negative exponent?", "3 minus 5 gives &minus;2, so you get 2 to the &minus;2. Now convert that negative exponent to a fraction \u2014 could more than one answer be right?"]
      },
      {
        id: "d6q7",
        question: "Which expression equals 1/27?",
        type: "multiple-choice",
        options: ["3<sup>&minus;3</sup>", "3<sup>&minus;2</sup>", "27<sup>0</sup>", "(&minus;3)<sup>3</sup>"],
        correct: 0,
        explanation: "3<sup>&minus;3</sup> = 1/3<sup>3</sup> = 1/27. Note: 3<sup>&minus;2</sup> = 1/9, 27<sup>0</sup> = 1, and (&minus;3)<sup>3</sup> = &minus;27.",
        difficulty: "medium",
        category: "topic",
        hints: ["First, figure out which power of 3 gives you 27. Then think about how a negative exponent turns that into a fraction.", "Since 3 cubed is 27, a negative exponent on 3 would flip it to 1/27. Which option matches that?"]
      },
      {
        id: "d6q8",
        question: "Simplify: (7<sup>2</sup>)<sup>3</sup> &divide; 7<sup>4</sup>.",
        type: "multiple-choice",
        options: ["7<sup>2</sup>", "7<sup>10</sup>", "7<sup>1</sup>", "7<sup>0</sup>"],
        correct: 0,
        explanation: "Power rule first: (7<sup>2</sup>)<sup>3</sup> = 7<sup>6</sup>. Then quotient rule: 7<sup>6</sup> &divide; 7<sup>4</sup> = 7<sup>6&minus;4</sup> = 7<sup>2</sup>.",
        difficulty: "hard",
        category: "topic",
        hints: ["This problem uses two rules! Start with the power rule: when you raise a power to another power, multiply the exponents.", "After the power rule, you have 7 to the 6th. Now use the quotient rule to divide by 7 to the 4th \u2014 subtract the exponents."]
      },
      {
        id: "d6q9",
        question: "Using the product rule from Day 5, what is 6<sup>3</sup> &times; 6<sup>&minus;3</sup>?",
        type: "multiple-choice",
        options: ["0", "6<sup>0</sup> = 1", "6<sup>6</sup>", "6<sup>&minus;9</sup>"],
        correct: 1,
        explanation: "Product rule: 6<sup>3</sup> &times; 6<sup>&minus;3</sup> = 6<sup>3+(&minus;3)</sup> = 6<sup>0</sup> = 1. Adding a number and its opposite always gives 0 in the exponent!",
        difficulty: "hard",
        category: "review",
        hints: ["The product rule says: when you multiply same bases, add the exponents. What is 3 + (\u22123)?", "Adding the exponents gives 0. Now remember the zero exponent rule \u2014 what does any nonzero base raised to the 0 power equal?"]
      },
      {
        id: "d6q10",
        question: "Which is larger: 4<sup>&minus;2</sup> or 2<sup>&minus;4</sup>?",
        type: "multiple-choice",
        options: ["4<sup>&minus;2</sup>", "2<sup>&minus;4</sup>", "They are equal", "Cannot be determined"],
        correct: 2,
        explanation: "4<sup>&minus;2</sup> = 1/16 and 2<sup>&minus;4</sup> = 1/16. They are equal! This makes sense because 4<sup>2</sup> = 16 and 2<sup>4</sup> = 16.",
        difficulty: "hard",
        category: "review",
        hints: ["Convert each negative exponent to a fraction: a to the \u2212n means 1 over a to the n. Calculate each one separately.", "4 squared is 16, and 2 to the 4th is also 16. So what do 1/16 and 1/16 tell you about which is larger?"]
      }
    ]
  },

  // ============================================================
  // DAY 7: Multiples, Divisibility Tests & Primes
  // ============================================================
  day7: {
    lesson: {
      title: "Multiples, Divisibility & Prime Numbers",
      subtitle: "Learn to spot factors and multiples, test divisibility like a pro, and meet the building blocks of all numbers",
      sections: [
        {
          heading: "Multiples & Factors",
          paragraphs: [
            "A <strong>multiple</strong> of a number is what you get when you multiply it by a whole number. For example, the multiples of 4 are 4, 8, 12, 16, 20, 24, &hellip; &mdash; you can keep going forever. Think of it like counting by 4&rsquo;s on a number line.",
            "A <strong>factor</strong> (or <em>divisor</em>) of a number divides into it evenly with no remainder. For example, the factors of 12 are 1, 2, 3, 4, 6, and 12. Unlike multiples, the list of factors is always <em>finite</em>. A handy trick: factors come in <strong>pairs</strong>. Since 2 &times; 6 = 12, both 2 and 6 are factors of 12.",
            "To find all factors of a number, start with 1 and the number itself, then try 2, 3, 4, &hellip; stopping when your pairs start repeating. For instance, for 36: 1&nbsp;&times;&nbsp;36, 2&nbsp;&times;&nbsp;18, 3&nbsp;&times;&nbsp;12, 4&nbsp;&times;&nbsp;9, 6&nbsp;&times;&nbsp;6. Since we hit a repeated pair (6&nbsp;&times;&nbsp;6), we&rsquo;re done. The factors are: 1, 2, 3, 4, 6, 9, 12, 18, 36."
          ],
          example: {
            title: "Worked Example: Listing Factor Pairs",
            problem: "Find all the factors of 28.",
            steps: [
              "Start: 1 &times; 28 &rarr; factors 1 and 28.",
              "Try 2: 28 &divide; 2 = 14 &rarr; factors 2 and 14.",
              "Try 3: 28 &divide; 3 = 9 R1 &mdash; not a factor.",
              "Try 4: 28 &divide; 4 = 7 &rarr; factors 4 and 7.",
              "Try 5: 28 &divide; 5 = 5 R3 &mdash; not a factor.",
              "Try 6: 6 &gt; &radic;28 &approx; 5.3, and we already have 7. We can stop.",
              "Factors of 28: <strong>1, 2, 4, 7, 14, 28</strong> (6 factors total)."
            ]
          }
        },
        {
          heading: "Divisibility Tests",
          paragraphs: [
            "Divisibility tests are shortcuts that let you tell <em>instantly</em> whether a big number is divisible by a small one &mdash; no long division required! These are like math superpowers, especially in competitions.",
            "Here are the most important rules. <strong>By 2:</strong> last digit is even (0, 2, 4, 6, 8). <strong>By 3:</strong> the sum of the digits is divisible by 3. <strong>By 4:</strong> the last two digits form a number divisible by 4. <strong>By 5:</strong> last digit is 0 or 5. <strong>By 6:</strong> divisible by both 2 <em>and</em> 3. <strong>By 9:</strong> the sum of the digits is divisible by 9. <strong>By 10:</strong> last digit is 0.",
            "Let&rsquo;s test 4,356. Last digit is 6 (even), so it&rsquo;s divisible by <strong>2</strong>. Digit sum: 4+3+5+6 = 18, which is divisible by both 3 and 9, so 4,356 is divisible by <strong>3</strong> and <strong>9</strong>. Since it&rsquo;s divisible by 2 and 3, it&rsquo;s also divisible by <strong>6</strong>. Last two digits: 56 &divide; 4 = 14, so it&rsquo;s divisible by <strong>4</strong>. It does not end in 0 or 5, so it&rsquo;s <em>not</em> divisible by 5 or 10."
          ],
          example: {
            title: "Worked Example: Divisibility Test Sprint",
            problem: "Is 2,730 divisible by 2, 3, 5, 6, 9, and 10?",
            steps: [
              "<strong>By 2?</strong> Last digit is 0 (even). <strong>Yes.</strong>",
              "<strong>By 3?</strong> Digit sum: 2+7+3+0 = 12. Is 12 divisible by 3? Yes (12 &divide; 3 = 4). <strong>Yes.</strong>",
              "<strong>By 5?</strong> Last digit is 0. <strong>Yes.</strong>",
              "<strong>By 6?</strong> Divisible by both 2 and 3? Yes and yes. <strong>Yes.</strong>",
              "<strong>By 9?</strong> Digit sum is 12. Is 12 divisible by 9? No. <strong>No.</strong>",
              "<strong>By 10?</strong> Last digit is 0. <strong>Yes.</strong>"
            ]
          }
        },
        {
          heading: "Prime Numbers",
          paragraphs: [
            "A <strong>prime number</strong> is a whole number greater than 1 that has <em>exactly two factors</em>: 1 and itself. The first ten primes are: <strong>2, 3, 5, 7, 11, 13, 17, 19, 23, 29</strong>. Notice that 2 is the only even prime &mdash; every other even number has 2 as an extra factor, so it can&rsquo;t be prime.",
            "A number greater than 1 that is <em>not</em> prime is called <strong>composite</strong>. For example, 15 is composite because 15 = 3&nbsp;&times;&nbsp;5. The number 1 is <em>neither</em> prime nor composite &mdash; it&rsquo;s in a category of its own.",
            "An ancient Greek mathematician named Eratosthenes invented a clever method called the <strong>Sieve of Eratosthenes</strong> to find all primes up to a given number. You start by listing all numbers from 2 upward. Circle 2 (it&rsquo;s prime), then cross out all multiples of 2. The next uncrossed number is 3 &mdash; circle it and cross out all multiples of 3. Keep going: the next uncrossed number is always prime. This process quickly filters out all composite numbers, leaving only the primes behind."
          ],
          example: {
            title: "Worked Example: Is It Prime?",
            problem: "Is 51 prime or composite?",
            steps: [
              "Check divisibility by small primes: 2, 3, 5, 7 (we only need primes up to &radic;51 &approx; 7.1).",
              "<strong>By 2?</strong> 51 is odd. No.",
              "<strong>By 3?</strong> Digit sum: 5+1 = 6, and 6 is divisible by 3. <strong>Yes!</strong>",
              "So 51 = 3 &times; 17.",
              "Answer: 51 is <strong>composite</strong>."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d7q1",
        question: "Which of the following is <strong>not</strong> a multiple of 6?",
        type: "multiple-choice",
        options: ["18", "42", "56", "66"],
        correct: 2,
        explanation: "56 &divide; 6 = 9 R2, so 56 is not a multiple of 6. The others divide evenly: 18&divide;6=3, 42&divide;6=7, 66&divide;6=11.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d7q2",
        question: "How many factors does 18 have?",
        type: "type-answer",
        answer: "6",
        accept: ["6"],
        explanation: "Factor pairs of 18: 1&times;18, 2&times;9, 3&times;6. That gives factors: 1, 2, 3, 6, 9, 18 &mdash; a total of 6.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d7q3",
        question: "Using the divisibility rule for 3, is 4,821 divisible by 3?",
        type: "multiple-choice",
        options: ["Yes, because 4+8+2+1 = 15 and 15 is divisible by 3", "No, because it is odd", "No, because it ends in 1", "Yes, because it is greater than 3"],
        correct: 0,
        explanation: "The digit sum 4+8+2+1 = 15, and 15 &divide; 3 = 5. Since the digit sum is divisible by 3, the number is divisible by 3.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d7q4",
        question: "Which of these numbers is prime?",
        type: "multiple-choice",
        options: ["39", "49", "51", "53"],
        correct: 3,
        explanation: "39 = 3&times;13, 49 = 7&times;7, 51 = 3&times;17. Only 53 has no factors other than 1 and itself, so 53 is prime.",
        difficulty: "medium",
        category: "topic",
        hints: ["A prime number has exactly two factors: 1 and itself. Try checking if each option can be divided evenly by small primes like 3 or 7.", "Use the divisibility rule for 3 (add the digits) on 39 and 51. Check if 49 is a perfect square. The one left standing is prime!"]
      },
      {
        id: "d7q5",
        question: "A number is divisible by both 2 and 9. It must also be divisible by which of the following?",
        type: "multiple-choice",
        options: ["12", "18", "36", "8"],
        correct: 1,
        explanation: "If a number is divisible by 2 and by 9, it is divisible by 2 &times; 9 = 18 (since 2 and 9 share no common factor).",
        difficulty: "medium",
        category: "topic",
        hints: ["When two numbers share no common factor, being divisible by both means you\u2019re divisible by their product.", "2 and 9 share no common factor, so multiply them: 2 \u00d7 9 = ? Which answer choice matches?"]
      },
      {
        id: "d7q6",
        question: "Is 3,240 divisible by 4?",
        type: "multiple-choice",
        options: ["Yes, because the last two digits 40 are divisible by 4", "No, because the digit sum is odd", "Yes, because it ends in 0", "No, because 3 is odd"],
        correct: 0,
        explanation: "Divisibility by 4: check the last two digits. 40 &divide; 4 = 10, so yes, 3,240 is divisible by 4.",
        difficulty: "medium",
        category: "topic",
        hints: ["The divisibility rule for 4 doesn\u2019t use the digit sum or just the last digit \u2014 it uses something specific about the end of the number.", "Look at the last two digits of 3,240. Is that two-digit number divisible by 4?"]
      },
      {
        id: "d7q7",
        question: "What is the smallest prime number greater than 20?",
        type: "multiple-choice",
        options: ["21", "22", "23", "25"],
        correct: 2,
        explanation: "21 = 3&times;7 (composite), 22 = 2&times;11 (composite), 25 = 5&times;5 (composite). 23 has no factors other than 1 and 23, so it is prime.",
        difficulty: "medium",
        category: "topic",
        hints: ["Start from 21 and check each number. Can you find any factors besides 1 and itself? Remember, even numbers are never prime (except 2).", "21 is divisible by 3 (since 2+1=3), 22 is even, and 25 = 5\u00d75. What about 23 \u2014 can any small prime divide it?"]
      },
      {
        id: "d7q8",
        question: "A teacher wants to divide 84 students into equal groups with no students left over. Which of the following is <strong>not</strong> a possible group size?",
        type: "multiple-choice",
        options: ["7", "12", "14", "16"],
        correct: 3,
        explanation: "84 &divide; 7 = 12 &#10003;, 84 &divide; 12 = 7 &#10003;, 84 &divide; 14 = 6 &#10003;. But 84 &divide; 16 = 5 R4, so 16 does not work.",
        difficulty: "hard",
        category: "topic",
        hints: ["\"No students left over\" means 84 must be evenly divisible by the group size. A possible group size must be a factor of 84.", "Try dividing 84 by each option. Three of them divide evenly. Which one leaves a remainder?"]
      },
      {
        id: "d7q9",
        question: "What is 8<sup>0</sup> &times; 5<sup>&minus;1</sup>?",
        type: "multiple-choice",
        options: ["0", "1/5", "5", "8/5"],
        correct: 1,
        explanation: "8<sup>0</sup> = 1 (zero exponent rule from Day 6). 5<sup>&minus;1</sup> = 1/5. So 1 &times; 1/5 = 1/5.",
        difficulty: "hard",
        category: "review",
        hints: ["Break this into two parts: first recall what any nonzero number to the 0 power equals (Day 6), then handle the negative exponent.", "8 to the 0 is just 1. Now 5 to the \u22121 means the reciprocal of 5. What is 1 times that reciprocal?"]
      },
      {
        id: "d7q10",
        question: "Simplify using exponent rules: 2<sup>5</sup> &divide; 2<sup>7</sup>.",
        type: "multiple-choice",
        options: ["2<sup>2</sup>", "2<sup>&minus;2</sup> = 1/4", "2<sup>12</sup>", "&minus;2<sup>2</sup>"],
        correct: 1,
        explanation: "Quotient rule from Day 6: 2<sup>5&minus;7</sup> = 2<sup>&minus;2</sup> = 1/2<sup>2</sup> = 1/4.",
        difficulty: "hard",
        category: "review",
        hints: ["When dividing powers with the same base, subtract the exponents (quotient rule from Day 6). What is 5 minus 7?", "You get 2 to the \u22122. A negative exponent means \"flip it\" \u2014 rewrite it as 1 over 2 squared, then calculate."]
      }
    ]
  },

  // ============================================================
  // DAY 8: Prime Factorization & LCM
  // ============================================================
  day8: {
    lesson: {
      title: "Prime Factorization & Least Common Multiple",
      subtitle: "Break every number into its prime building blocks, then use those blocks to find the LCM",
      sections: [
        {
          heading: "Prime Factorization",
          paragraphs: [
            "Every whole number greater than 1 can be written as a product of prime numbers. This is called its <strong>prime factorization</strong>. It&rsquo;s like breaking a LEGO creation all the way down to its individual bricks &mdash; primes are the bricks of multiplication.",
            "The easiest way to find a prime factorization is to build a <strong>factor tree</strong>. Start with your number and split it into any two factors. Then split each factor further, and keep going until every &ldquo;leaf&rdquo; is a prime. For example, 60 &rarr; 6 &times; 10 &rarr; (2&times;3)&times;(2&times;5). So 60 = 2 &times; 2 &times; 3 &times; 5 = 2<sup>2</sup> &times; 3 &times; 5.",
            "No matter how you build the tree, you always end up with the same set of primes (just possibly in a different order). This amazing fact is called the <strong>Fundamental Theorem of Arithmetic</strong>. When writing the final answer, it&rsquo;s standard to use exponents and list the primes in order from smallest to largest. For example, 360 = 2<sup>3</sup> &times; 3<sup>2</sup> &times; 5."
          ],
          example: {
            title: "Worked Example: Factor Tree for 180",
            problem: "Find the prime factorization of 180.",
            steps: [
              "Start: 180 = 2 &times; 90 (180 is even, so divide by 2).",
              "90 = 2 &times; 45.",
              "45 = 3 &times; 15.",
              "15 = 3 &times; 5.",
              "Collect the primes: 2 &times; 2 &times; 3 &times; 3 &times; 5.",
              "Write with exponents: 180 = <strong>2<sup>2</sup> &times; 3<sup>2</sup> &times; 5</strong>."
            ]
          }
        },
        {
          heading: "Least Common Multiple (LCM)",
          paragraphs: [
            "The <strong>Least Common Multiple</strong> (LCM) of two numbers is the <em>smallest</em> positive number that is a multiple of both. For instance, the multiples of 4 are 4, 8, 12, 16, 20, 24, &hellip; and the multiples of 6 are 6, 12, 18, 24, &hellip;. The common multiples are 12, 24, 36, &hellip;, and the <em>least</em> is <strong>12</strong>.",
            "<strong>Method 1 &mdash; Listing multiples:</strong> Write out multiples of each number until you find the first match. This works great for small numbers. <strong>Method 2 &mdash; Prime factorization:</strong> Find the prime factorization of each number, then take the <em>highest power</em> of every prime that appears. This is faster for larger numbers.",
            "For example, to find LCM(12, 18): 12 = 2<sup>2</sup> &times; 3 and 18 = 2 &times; 3<sup>2</sup>. Take the highest power of each prime: 2<sup>2</sup> and 3<sup>2</sup>. So LCM = 2<sup>2</sup> &times; 3<sup>2</sup> = 4 &times; 9 = <strong>36</strong>."
          ],
          example: {
            title: "Worked Example: LCM Using Prime Factorization",
            problem: "Find the LCM of 24 and 90.",
            steps: [
              "Prime factorize each: 24 = 2<sup>3</sup> &times; 3 and 90 = 2 &times; 3<sup>2</sup> &times; 5.",
              "List all primes that appear: 2, 3, 5.",
              "Take the <strong>highest</strong> power of each: 2<sup>3</sup>, 3<sup>2</sup>, 5<sup>1</sup>.",
              "Multiply: 8 &times; 9 &times; 5 = <strong>360</strong>.",
              "Check: 360 &divide; 24 = 15 &#10003; and 360 &divide; 90 = 4 &#10003;."
            ]
          }
        },
        {
          heading: "LCM Applications",
          paragraphs: [
            "LCM shows up whenever two events happen on different cycles and you want to know <em>when they&rsquo;ll sync up</em>. Imagine one traffic light cycles every 40 seconds and another cycles every 60 seconds. When will they both be green at the same time again? You need LCM(40, 60)!",
            "Here is a classic scheduling problem: Mia visits the library every 8 days and Noah visits every 12 days. If they are both there today, when is the next time they will visit on the same day? That&rsquo;s LCM(8, 12) = 24 days from now.",
            "LCM is also essential when you add or subtract fractions with different denominators &mdash; the common denominator you need is the LCM of the two denominators. You&rsquo;ll use this skill a lot when we get to fractions on Day&nbsp;10!"
          ],
          example: {
            title: "Worked Example: Scheduling Problem",
            problem: "Hot dogs come in packs of 10 and buns in packs of 8. What is the smallest number of each you can buy so you have the same number of hot dogs and buns?",
            steps: [
              "We need the LCM of 10 and 8.",
              "10 = 2 &times; 5 and 8 = 2<sup>3</sup>.",
              "Highest powers: 2<sup>3</sup> and 5<sup>1</sup>. LCM = 8 &times; 5 = <strong>40</strong>.",
              "Buy 40 &divide; 10 = <strong>4 packs</strong> of hot dogs and 40 &divide; 8 = <strong>5 packs</strong> of buns.",
              "You&rsquo;ll have exactly 40 of each &mdash; no leftovers!"
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d8q1",
        question: "What is the prime factorization of 36?",
        type: "multiple-choice",
        options: ["2<sup>2</sup> &times; 9", "4 &times; 9", "2<sup>2</sup> &times; 3<sup>2</sup>", "6<sup>2</sup>"],
        correct: 2,
        explanation: "36 = 4 &times; 9 = 2<sup>2</sup> &times; 3<sup>2</sup>. Both 4 and 9 must be broken down to primes.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d8q2",
        question: "What is the prime factorization of 50?",
        type: "multiple-choice",
        options: ["2 &times; 25", "2 &times; 5<sup>2</sup>", "5 &times; 10", "2<sup>2</sup> &times; 5"],
        correct: 1,
        explanation: "50 = 2 &times; 25 = 2 &times; 5<sup>2</sup>. Remember, 25 = 5 &times; 5, so keep factoring until every factor is prime.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d8q3",
        question: "What is the LCM of 6 and 8?",
        type: "multiple-choice",
        options: ["14", "24", "48", "2"],
        correct: 1,
        explanation: "Multiples of 6: 6, 12, 18, 24&hellip; Multiples of 8: 8, 16, 24&hellip; The smallest common multiple is 24.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d8q4",
        question: "What is the prime factorization of 360?",
        type: "multiple-choice",
        options: ["2<sup>3</sup> &times; 3<sup>2</sup> &times; 5", "2<sup>2</sup> &times; 3<sup>2</sup> &times; 10", "2<sup>3</sup> &times; 45", "4 &times; 9 &times; 10"],
        correct: 0,
        explanation: "360 = 8 &times; 45 = 2<sup>3</sup> &times; (9 &times; 5) = 2<sup>3</sup> &times; 3<sup>2</sup> &times; 5. All factors must be prime.",
        difficulty: "medium",
        category: "topic",
        hints: ["Build a factor tree: keep splitting numbers until every branch ends with a prime. Remember, 4, 9, 10, and 45 are NOT prime!", "Start by dividing 360 by 2 repeatedly, then by 3. Make sure every factor in your final answer is a prime number."]
      },
      {
        id: "d8q5",
        question: "What is the LCM of 12 and 18?",
        type: "multiple-choice",
        options: ["6", "36", "72", "216"],
        correct: 1,
        explanation: "12 = 2<sup>2</sup> &times; 3 and 18 = 2 &times; 3<sup>2</sup>. Take highest powers: 2<sup>2</sup> &times; 3<sup>2</sup> = 4 &times; 9 = 36.",
        difficulty: "medium",
        category: "topic",
        hints: ["To find the LCM, first write the prime factorization of both numbers. Then take the highest power of each prime.", "12 = 2\u00b2 \u00d7 3 and 18 = 2 \u00d7 3\u00b2. Pick the bigger exponent for each prime: 2\u00b2 and 3\u00b2. Now multiply those together."]
      },
      {
        id: "d8q6",
        question: "What is the LCM of 15 and 20?",
        type: "multiple-choice",
        options: ["30", "60", "100", "300"],
        correct: 1,
        explanation: "15 = 3 &times; 5 and 20 = 2<sup>2</sup> &times; 5. Take highest powers: 2<sup>2</sup> &times; 3 &times; 5 = 4 &times; 3 &times; 5 = 60.",
        difficulty: "medium",
        category: "topic",
        hints: ["Prime factorize both numbers first, then take the highest power of every prime that shows up in either factorization.", "15 = 3 \u00d7 5 and 20 = 2\u00b2 \u00d7 5. The primes involved are 2, 3, and 5. Grab the biggest power of each and multiply."]
      },
      {
        id: "d8q7",
        question: "Two alarms go off at the same time. One beeps every 15 minutes and the other every 20 minutes. In how many minutes will they beep together again?",
        type: "multiple-choice",
        options: ["30", "60", "35", "300"],
        correct: 1,
        explanation: "LCM(15, 20) = 60. The alarms will sync up again in 60 minutes (1 hour).",
        difficulty: "medium",
        category: "topic",
        hints: ["When two things repeat on different cycles, they sync up at the Least Common Multiple of those cycle lengths.", "Find the LCM of 15 and 20. You just solved that in the previous question \u2014 same numbers, real-world twist!"]
      },
      {
        id: "d8q8",
        question: "What is the LCM of 8, 12, and 15?",
        type: "multiple-choice",
        options: ["60", "120", "180", "360"],
        correct: 1,
        explanation: "8 = 2<sup>3</sup>, 12 = 2<sup>2</sup> &times; 3, 15 = 3 &times; 5. Take highest powers: 2<sup>3</sup> &times; 3 &times; 5 = 8 &times; 3 &times; 5 = 120.",
        difficulty: "hard",
        category: "topic",
        hints: ["The LCM method works the same way for three numbers \u2014 prime factorize all three, then take the highest power of every prime that appears.", "8 = 2\u00b3, 12 = 2\u00b2 \u00d7 3, 15 = 3 \u00d7 5. The primes are 2, 3, and 5. Pick the highest power of each: 2\u00b3, 3, and 5. Now multiply."]
      },
      {
        id: "d8q9",
        question: "Is 91 prime or composite?",
        type: "multiple-choice",
        options: ["Prime", "Composite: 91 = 3 &times; 30 + 1", "Composite: 91 = 7 &times; 13", "Composite: 91 = 9 &times; 11"],
        correct: 2,
        explanation: "91 = 7 &times; 13. Many students think 91 is prime, but checking divisibility by 7 reveals 91 &divide; 7 = 13. (Review from Day 7.)",
        difficulty: "hard",
        category: "review",
        hints: ["Don\u2019t assume a number is prime just because it looks like one! Test divisibility by primes up to the square root of 91 (about 9.5).", "Try dividing 91 by 7. Does it go in evenly? If so, 91 has factors besides 1 and itself."]
      },
      {
        id: "d8q10",
        question: "Using divisibility rules, which of these numbers is divisible by 6?",
        type: "multiple-choice",
        options: ["1,335", "2,534", "4,122", "5,015"],
        correct: 2,
        explanation: "A number divisible by 6 must be divisible by both 2 and 3. 4,122 is even (ends in 2) and its digit sum 4+1+2+2 = 9 is divisible by 3. (Review from Day 7.)",
        difficulty: "hard",
        category: "review",
        hints: ["Divisible by 6 means divisible by BOTH 2 and 3. First cross off any odd numbers (not divisible by 2), then check the digit-sum rule for 3.", "After eliminating odd numbers, add up the digits of the remaining options. Which one has a digit sum divisible by 3?"]
      }
    ]
  },

  // ============================================================
  // DAY 9: Divisors & Greatest Common Divisor (GCD)
  // ============================================================
  day9: {
    lesson: {
      title: "Divisors & Greatest Common Divisor",
      subtitle: "Use prime factorization to find every divisor of a number and discover the GCD &mdash; the biggest factor two numbers share",
      sections: [
        {
          heading: "Finding All Divisors",
          paragraphs: [
            "On Day&nbsp;7 you found factors by trying every number up to the square root. Now that you know prime factorization (Day&nbsp;8), there&rsquo;s a <em>more powerful</em> method. Every divisor of a number is made up of the same primes in its factorization, just with equal or <em>smaller</em> exponents.",
            "For example, 72 = 2<sup>3</sup> &times; 3<sup>2</sup>. Any divisor of 72 looks like 2<sup>a</sup> &times; 3<sup>b</sup> where <em>a</em> can be 0, 1, 2, or 3 and <em>b</em> can be 0, 1, or 2. To count divisors without listing them all, use the <strong>divisor-counting formula</strong>: multiply (each exponent + 1). Here: (3+1) &times; (2+1) = 4 &times; 3 = <strong>12 divisors</strong>.",
            "This formula is incredibly useful. Want to know how many divisors 360 = 2<sup>3</sup>&times;3<sup>2</sup>&times;5 has? Just compute (3+1)(2+1)(1+1) = 4&times;3&times;2 = <strong>24 divisors</strong> &mdash; no listing required! The formula works because you are counting all possible combinations of exponents for each prime."
          ],
          example: {
            title: "Worked Example: Listing Divisors from Prime Factorization",
            problem: "Find all divisors of 30.",
            steps: [
              "Prime factorization: 30 = 2 &times; 3 &times; 5.",
              "Each prime has exponent 1, so each can be 0 or 1. That&rsquo;s (1+1)(1+1)(1+1) = 8 divisors.",
              "List them systematically: pick exponent for 2 (0 or 1), then 3, then 5.",
              "2<sup>0</sup>&times;3<sup>0</sup>&times;5<sup>0</sup>=1, 2<sup>1</sup>&times;3<sup>0</sup>&times;5<sup>0</sup>=2, 2<sup>0</sup>&times;3<sup>1</sup>&times;5<sup>0</sup>=3, 2<sup>0</sup>&times;3<sup>0</sup>&times;5<sup>1</sup>=5, 2<sup>1</sup>&times;3<sup>1</sup>&times;5<sup>0</sup>=6, 2<sup>1</sup>&times;3<sup>0</sup>&times;5<sup>1</sup>=10, 2<sup>0</sup>&times;3<sup>1</sup>&times;5<sup>1</sup>=15, 2<sup>1</sup>&times;3<sup>1</sup>&times;5<sup>1</sup>=30.",
              "Divisors of 30: <strong>1, 2, 3, 5, 6, 10, 15, 30</strong>."
            ]
          }
        },
        {
          heading: "Greatest Common Divisor (GCD)",
          paragraphs: [
            "The <strong>Greatest Common Divisor</strong> (GCD) &mdash; also called the <strong>Greatest Common Factor</strong> (GCF) &mdash; of two numbers is the <em>largest</em> number that divides both of them evenly. For example, the factors of 12 are 1, 2, 3, 4, 6, 12, and the factors of 18 are 1, 2, 3, 6, 9, 18. The common factors are 1, 2, 3, 6, and the greatest is <strong>6</strong>.",
            "<strong>Method 1 &mdash; Listing factors:</strong> Write out all factors of each number and pick the largest one they share. <strong>Method 2 &mdash; Prime factorization:</strong> Factorize both numbers, then take the <em>lowest</em> power of each <em>shared</em> prime. This is the mirror image of LCM, where you took the highest power!",
            "For example, GCD(48, 180): 48 = 2<sup>4</sup>&times;3 and 180 = 2<sup>2</sup>&times;3<sup>2</sup>&times;5. Shared primes are 2 and 3. Take the lower power of each: 2<sup>2</sup> and 3<sup>1</sup>. GCD = 4 &times; 3 = <strong>12</strong>. (The prime 5 is in 180 but not 48, so it&rsquo;s not shared.)"
          ],
          example: {
            title: "Worked Example: GCD by Prime Factorization",
            problem: "Find the GCD of 60 and 84.",
            steps: [
              "60 = 2<sup>2</sup> &times; 3 &times; 5.",
              "84 = 2<sup>2</sup> &times; 3 &times; 7.",
              "Shared primes: 2 and 3 (5 is only in 60; 7 is only in 84).",
              "Take the <strong>lowest</strong> power of each shared prime: 2<sup>2</sup> and 3<sup>1</sup>.",
              "GCD = 4 &times; 3 = <strong>12</strong>."
            ]
          }
        },
        {
          heading: "GCD Applications",
          paragraphs: [
            "The GCD is the key to <strong>simplifying fractions</strong> &mdash; you divide the numerator and denominator by their GCD to get the simplest form. For example, 48/60: GCD(48,60) = 12, so 48/60 = (48 &divide; 12)/(60 &divide; 12) = 4/5. You&rsquo;ll use this constantly starting on Day&nbsp;10!",
            "GCD also solves <strong>equal-sharing problems</strong>. Suppose you have 36 red marbles and 48 blue marbles and want to divide them into identical bags with no marbles left over. Each bag gets the same number of reds and the same number of blues. The maximum number of bags is GCD(36, 48) = 12. Each bag gets 36&divide;12 = 3 red and 48&divide;12 = 4 blue marbles.",
            "There is a beautiful relationship between GCD and LCM: for any two positive integers <em>a</em> and <em>b</em>, <strong>GCD(a,b) &times; LCM(a,b) = a &times; b</strong>. This means if you know one, you can find the other! For example, GCD(12,18)=6, so LCM(12,18) = (12&times;18)/6 = 216/6 = 36 &mdash; matching what we found on Day&nbsp;8."
          ],
          example: {
            title: "Worked Example: Splitting into Equal Groups",
            problem: "A florist has 54 roses and 36 tulips. She wants to make identical bouquets using all flowers, with no flowers left over. What is the greatest number of bouquets she can make, and what goes in each?",
            steps: [
              "Find GCD(54, 36).",
              "54 = 2 &times; 3<sup>3</sup> and 36 = 2<sup>2</sup> &times; 3<sup>2</sup>.",
              "Shared primes: 2 and 3. Lowest powers: 2<sup>1</sup> and 3<sup>2</sup>.",
              "GCD = 2 &times; 9 = <strong>18</strong>.",
              "She can make <strong>18 bouquets</strong>: each has 54 &divide; 18 = 3 roses and 36 &divide; 18 = 2 tulips."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d9q1",
        question: "How many divisors does 24 have? (24 = 2<sup>3</sup> &times; 3)",
        type: "multiple-choice",
        options: ["6", "8", "10", "12"],
        correct: 1,
        explanation: "Using the divisor-counting formula: (3+1) &times; (1+1) = 4 &times; 2 = 8 divisors.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d9q2",
        question: "What is the GCD of 20 and 30?",
        type: "multiple-choice",
        options: ["5", "10", "15", "60"],
        correct: 1,
        explanation: "Factors of 20: 1,2,4,5,10,20. Factors of 30: 1,2,3,5,6,10,15,30. Largest shared factor: 10.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d9q3",
        question: "What is the GCD of 36 and 48?",
        type: "multiple-choice",
        options: ["6", "8", "12", "24"],
        correct: 2,
        explanation: "36 = 2<sup>2</sup>&times;3<sup>2</sup> and 48 = 2<sup>4</sup>&times;3. Lowest shared powers: 2<sup>2</sup>&times;3<sup>1</sup> = 4 &times; 3 = 12.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d9q4",
        question: "How many divisors does 100 have? (100 = 2<sup>2</sup> &times; 5<sup>2</sup>)",
        type: "multiple-choice",
        options: ["4", "6", "9", "8"],
        correct: 2,
        explanation: "(2+1) &times; (2+1) = 3 &times; 3 = 9 divisors: 1, 2, 4, 5, 10, 20, 25, 50, 100.",
        difficulty: "medium",
        category: "topic",
        hints: ["Use the divisor-counting formula: add 1 to each exponent in the prime factorization, then multiply those results together.", "The exponents are both 2. So you compute (2+1) \u00d7 (2+1). What does that give you?"]
      },
      {
        id: "d9q5",
        question: "What is the GCD of 72 and 108?",
        type: "multiple-choice",
        options: ["12", "18", "36", "9"],
        correct: 2,
        explanation: "72 = 2<sup>3</sup>&times;3<sup>2</sup> and 108 = 2<sup>2</sup>&times;3<sup>3</sup>. Lowest shared: 2<sup>2</sup>&times;3<sup>2</sup> = 4 &times; 9 = 36.",
        difficulty: "medium",
        category: "topic",
        hints: ["GCD is the opposite of LCM: instead of taking the highest power of each prime, take the LOWEST power of each shared prime.", "72 = 2\u00b3 \u00d7 3\u00b2 and 108 = 2\u00b2 \u00d7 3\u00b3. For the GCD, pick the smaller exponent for each shared prime: 2\u00b2 and 3\u00b2. Multiply those."]
      },
      {
        id: "d9q6",
        question: "A baker has 42 chocolate chips and 56 gummy bears. She puts them into bags so each bag has the same number of chips and the same number of bears, with none left over. What is the maximum number of bags?",
        type: "multiple-choice",
        options: ["6", "7", "14", "21"],
        correct: 2,
        explanation: "GCD(42, 56): 42 = 2&times;3&times;7 and 56 = 2<sup>3</sup>&times;7. Shared: 2&times;7 = 14. She makes 14 bags (3 chips and 4 bears each).",
        difficulty: "medium",
        category: "topic",
        hints: ["When you need to split two amounts into the maximum number of equal groups with nothing left over, you need the GCD.", "Find GCD(42, 56). Prime factorize both: 42 = 2 \u00d7 3 \u00d7 7 and 56 = 2\u00b3 \u00d7 7. What primes do they share, and at what powers?"]
      },
      {
        id: "d9q7",
        question: "If GCD(a, b) = 15 and a &times; b = 4,500, what is LCM(a, b)?",
        type: "multiple-choice",
        options: ["150", "300", "675", "4,500"],
        correct: 1,
        explanation: "GCD &times; LCM = a &times; b, so LCM = 4,500 &divide; 15 = 300.",
        difficulty: "hard",
        category: "topic",
        hints: ["There\u2019s a handy formula connecting GCD and LCM: GCD(a,b) \u00d7 LCM(a,b) = a \u00d7 b.", "Plug in what you know: 15 \u00d7 LCM = 4,500. Divide both sides by 15 to find the LCM."]
      },
      {
        id: "d9q8",
        question: "How many divisors does 360 have? (360 = 2<sup>3</sup> &times; 3<sup>2</sup> &times; 5)",
        type: "multiple-choice",
        options: ["12", "18", "24", "36"],
        correct: 2,
        explanation: "(3+1)(2+1)(1+1) = 4 &times; 3 &times; 2 = 24 divisors.",
        difficulty: "hard",
        category: "topic",
        hints: ["Use the divisor-counting formula: add 1 to each exponent, then multiply all the results together.", "The exponents are 3, 2, and 1. So compute (3+1) \u00d7 (2+1) \u00d7 (1+1). What do you get?"]
      },
      {
        id: "d9q9",
        question: "What is the prime factorization of 252?",
        type: "multiple-choice",
        options: ["2<sup>2</sup> &times; 3<sup>2</sup> &times; 7", "2<sup>3</sup> &times; 3 &times; 7", "2<sup>2</sup> &times; 7<sup>2</sup>", "4 &times; 63"],
        correct: 0,
        explanation: "252 = 4 &times; 63 = 2<sup>2</sup> &times; (9 &times; 7) = 2<sup>2</sup> &times; 3<sup>2</sup> &times; 7. All factors must be prime! (Review from Day 8.)",
        difficulty: "hard",
        category: "review",
        hints: ["Build a factor tree for 252. Remember, you\u2019re not done until every factor is a prime number \u2014 things like 4 and 63 still need to be broken down!", "252 \u00f7 2 = 126, and 126 \u00f7 2 = 63. Now factor 63: 63 = 9 \u00d7 7 = 3\u00b2 \u00d7 7. Put it all together."]
      },
      {
        id: "d9q10",
        question: "What is the LCM of 14 and 21?",
        type: "multiple-choice",
        options: ["7", "42", "84", "294"],
        correct: 1,
        explanation: "14 = 2 &times; 7 and 21 = 3 &times; 7. Highest powers: 2, 3, 7. LCM = 2 &times; 3 &times; 7 = 42. (Review from Day 8.)",
        difficulty: "medium",
        category: "review",
        hints: ["For LCM, prime factorize both numbers and take the highest power of every prime that appears in either one.", "14 = 2 \u00d7 7 and 21 = 3 \u00d7 7. The primes are 2, 3, and 7. Multiply them all together for the LCM."]
      }
    ]
  },

  // ============================================================
  // DAY 10: Fractions — What They Mean & Simplifying
  // ============================================================
  day10: {
    lesson: {
      title: "Fractions &mdash; What They Mean & Simplifying",
      subtitle: "Understand what fractions really are, build equivalent fractions, and simplify using the GCD you learned yesterday",
      sections: [
        {
          heading: "What Is a Fraction?",
          paragraphs: [
            "A <strong>fraction</strong> represents a <em>part of a whole</em>. It is written as one number over another with a line between them: the top number is the <strong>numerator</strong> (how many parts you have) and the bottom number is the <strong>denominator</strong> (how many equal parts the whole is divided into). For example, 3/4 means you have 3 out of 4 equal pieces.",
            "Fractions also live on the <strong>number line</strong>. To place 3/4, split the segment from 0 to 1 into 4 equal parts and count 3 of them to the right. Fractions greater than 1 (like 7/4) extend past 1 on the number line. Any whole number can be written as a fraction too: 5 = 5/1, because you have 5 whole pieces each of size 1.",
            "The denominator can <em>never</em> be zero. Think about it &mdash; you can&rsquo;t divide something into zero equal parts! So expressions like 4/0 are <strong>undefined</strong>. The numerator, however, can be zero: 0/5 = 0 (zero parts of anything is still nothing)."
          ],
          graphs: [
            { type: "numberLine", min: 0, max: 2, step: 0.25, width: 500, height: 80,
              points: [
                { x: 0.75, color: "#667eea", label: "\u00be" },
                { x: 1, color: "#718096", label: "1" }
              ],
              caption: "Placing \u00be on the number line: split 0 to 1 into 4 parts, count 3" }
          ],
          example: {
            title: "Worked Example: Fractions on a Number Line",
            problem: "Place 5/3 on a number line.",
            steps: [
              "The denominator is 3, so each whole unit is split into 3 equal parts.",
              "Count 5 of those parts starting from 0.",
              "After 3 parts you reach 1 (since 3/3 = 1). After 2 more parts you reach 5/3.",
              "5/3 is between <strong>1</strong> and <strong>2</strong>, one-third of the way from 1 to 2.",
              "As a mixed number: 5/3 = <strong>1 2/3</strong>."
            ],
            graphs: [
              { type: "numberLine", min: 0, max: 2, step: 0.333333, width: 500, height: 80,
                points: [
                  { x: 0.333333, color: "#a0aec0", label: "\u2153" },
                  { x: 0.666667, color: "#a0aec0", label: "\u2154" },
                  { x: 1, color: "#718096", label: "1" },
                  { x: 1.333333, color: "#a0aec0", label: "\u2074\u2044\u2083" },
                  { x: 1.666667, color: "#e53e3e", label: "\u2075\u2044\u2083" }
                ],
                caption: "\u2075\u2044\u2083 on the number line: between 1 and 2, one-third past 1" }
            ]
          }
        },
        {
          heading: "Equivalent Fractions",
          paragraphs: [
            "<strong>Equivalent fractions</strong> are different fractions that represent the <em>same</em> amount. For example, 1/2, 2/4, 3/6, and 50/100 all mean &ldquo;half.&rdquo; You can picture it like this: if you cut a pizza into 4 slices and take 2, you have the same amount as cutting it into 2 slices and taking 1.",
            "To create an equivalent fraction, <strong>multiply</strong> (or <strong>divide</strong>) both the numerator and denominator by the <em>same nonzero number</em>. This works because multiplying top and bottom by the same number is like multiplying by 1 (since n/n = 1), which doesn&rsquo;t change the value.",
            "For example: 3/5 = (3&times;4)/(5&times;4) = 12/20. Going the other way: 18/24 = (18&divide;6)/(24&divide;6) = 3/4. This &ldquo;going the other way&rdquo; &mdash; dividing top and bottom by a common factor &mdash; is called <strong>simplifying</strong>, and it&rsquo;s exactly what we&rsquo;ll master in the next section."
          ],
          example: {
            title: "Worked Example: Building Equivalent Fractions",
            problem: "Write 2/7 as an equivalent fraction with a denominator of 35.",
            steps: [
              "We need 7 &times; ? = 35, so ? = 5.",
              "Multiply the numerator by the same number: 2 &times; 5 = 10.",
              "Answer: 2/7 = <strong>10/35</strong>.",
              "Check: both numerator and denominator were multiplied by 5, so the fraction&rsquo;s value didn&rsquo;t change."
            ]
          }
        },
        {
          heading: "Simplifying Fractions Using the GCD",
          paragraphs: [
            "A fraction is in <strong>simplest form</strong> (or <em>lowest terms</em>) when the numerator and denominator share no common factor other than 1. To simplify a fraction, divide both the numerator and the denominator by their <strong>GCD</strong>. This is exactly why we learned GCD on Day&nbsp;9!",
            "For example, simplify 48/60. Step 1: Find GCD(48, 60). We know 48 = 2<sup>4</sup>&times;3 and 60 = 2<sup>2</sup>&times;3&times;5, so GCD = 2<sup>2</sup>&times;3 = 12. Step 2: Divide both by 12. 48&divide;12 = 4 and 60&divide;12 = 5. So 48/60 = <strong>4/5</strong>.",
            "You can also simplify step by step, dividing by any common factor you spot: 48/60 &divide; 2/2 = 24/30 &divide; 2/2 = 12/15 &divide; 3/3 = 4/5. You&rsquo;ll get the same answer either way, but using the GCD gets you there in <em>one step</em> &mdash; much faster! Always check your final answer: are there any common factors left? If not, you&rsquo;re done."
          ],
          practice: [
            { type: "type-answer", prompt: "Simplify 18/24 to lowest terms. Write as a fraction (e.g., 3/4).", answer: "3/4", accept: ["3/4"], explanation: "GCD(18, 24) = 6. 18 &divide; 6 = 3, 24 &divide; 6 = 4. So 18/24 = 3/4." },
            { type: "type-answer", prompt: "Simplify 36/48 to lowest terms.", answer: "3/4", accept: ["3/4"], explanation: "GCD(36, 48) = 12. 36 &divide; 12 = 3, 48 &divide; 12 = 4. So 36/48 = 3/4." },
            { type: "multiple-quick", prompt: "Which fraction is already in simplest form?", options: ["8/12", "15/20", "7/10", "6/9"], correct: 2, explanation: "GCD(7, 10) = 1, so 7/10 is already simplified. The others all share common factors." }
          ],
          example: {
            title: "Worked Example: Simplifying with GCD",
            problem: "Simplify 84/126.",
            steps: [
              "Find the prime factorizations: 84 = 2<sup>2</sup> &times; 3 &times; 7 and 126 = 2 &times; 3<sup>2</sup> &times; 7.",
              "GCD: take the lowest power of each shared prime. Shared: 2<sup>1</sup>, 3<sup>1</sup>, 7<sup>1</sup>.",
              "GCD = 2 &times; 3 &times; 7 = <strong>42</strong>.",
              "Divide both by 42: 84 &divide; 42 = 2 and 126 &divide; 42 = 3.",
              "84/126 = <strong>2/3</strong>."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d10q1",
        question: "What does the fraction 5/8 represent?",
        type: "multiple-choice",
        options: ["5 groups of 8", "8 out of 5 equal parts", "5 out of 8 equal parts", "5 minus 8"],
        correct: 2,
        explanation: "In a fraction, the numerator (5) tells how many parts you have, and the denominator (8) tells how many equal parts the whole is divided into.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d10q2",
        question: "Which fraction is equivalent to 3/4?",
        type: "multiple-choice",
        options: ["6/12", "9/12", "4/3", "3/8"],
        correct: 1,
        explanation: "Multiply numerator and denominator of 3/4 by 3: (3&times;3)/(4&times;3) = 9/12.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d10q3",
        question: "Simplify 18/24. Write your answer as a fraction.",
        type: "type-answer",
        answer: "3/4",
        accept: ["3/4", "0.75"],
        explanation: "GCD(18,24) = 6. Divide both by 6: 18&divide;6 = 3 and 24&divide;6 = 4. So 18/24 = 3/4.",
        difficulty: "easy",
        category: "topic"
      },
      {
        id: "d10q4",
        question: "Where does 7/4 fall on the number line?",
        type: "multiple-choice",
        options: ["Between 0 and 1", "Exactly at 1", "Between 1 and 2", "Between 2 and 3"],
        correct: 2,
        explanation: "7/4 = 1 3/4. Since 4/4 = 1 and 8/4 = 2, the fraction 7/4 falls between 1 and 2.",
        difficulty: "medium",
        category: "topic",
        hints: ["When the numerator is bigger than the denominator, the fraction is greater than 1. Convert it to a mixed number to see where it lands.", "How many times does 4 go into 7? Once, with 3 left over \u2014 so 7/4 = 1 and 3/4. Where does that sit on the number line?"]
      },
      {
        id: "d10q5",
        question: "Simplify 45/60.",
        type: "multiple-choice",
        options: ["9/12", "3/4", "15/20", "All of the above are correct, but 3/4 is simplest"],
        correct: 3,
        explanation: "GCD(45,60)=15. So 45/60 = 3/4. The other options (9/12, 15/20) are equivalent but not fully simplified.",
        difficulty: "medium",
        category: "topic",
        hints: ["To fully simplify, divide top and bottom by their GCD. But also check \u2014 are any of the other options equivalent fractions that aren\u2019t fully reduced?", "GCD(45, 60) = 15. Dividing gives 3/4. Notice that 9/12 and 15/20 also equal 3/4 but aren\u2019t in simplest form. Could more than one answer be right?"]
      },
      {
        id: "d10q6",
        question: "Write 2/9 as an equivalent fraction with denominator 63.",
        type: "multiple-choice",
        options: ["7/63", "14/63", "18/63", "2/63"],
        correct: 1,
        explanation: "9 &times; 7 = 63, so multiply the numerator by 7 too: 2 &times; 7 = 14. Therefore 2/9 = 14/63.",
        difficulty: "medium",
        category: "topic",
        hints: ["To build an equivalent fraction, you must multiply the numerator and denominator by the same number. Figure out what you multiply 9 by to get 63.", "9 \u00d7 7 = 63, so the multiplier is 7. Now do the same to the numerator: 2 \u00d7 7 = ?"]
      },
      {
        id: "d10q7",
        question: "Simplify 84/126.",
        type: "multiple-choice",
        options: ["14/21", "4/6", "2/3", "42/63"],
        correct: 2,
        explanation: "GCD(84,126) = 42. So 84 &divide; 42 = 2 and 126 &divide; 42 = 3. The simplest form is 2/3.",
        difficulty: "hard",
        category: "topic",
        hints: ["To simplify in one step, find the GCD of 84 and 126 using prime factorizations, then divide both by it.", "84 = 2\u00b2 \u00d7 3 \u00d7 7 and 126 = 2 \u00d7 3\u00b2 \u00d7 7. The GCD is 2 \u00d7 3 \u00d7 7 = 42. Divide both numerator and denominator by 42."]
      },
      {
        id: "d10q8",
        question: "Which fraction is already in simplest form?",
        type: "multiple-choice",
        options: ["14/21", "25/40", "17/30", "12/18"],
        correct: 2,
        explanation: "17 is prime and does not divide 30, so GCD(17,30) = 1. The others can be simplified: 14/21 = 2/3, 25/40 = 5/8, 12/18 = 2/3.",
        difficulty: "hard",
        category: "topic",
        hints: ["A fraction is in simplest form when the numerator and denominator share no common factor besides 1. Check each option\u2019s GCD.", "Look for a numerator that is prime. If a prime number doesn\u2019t divide the denominator, the GCD must be 1 and the fraction is already simplified."]
      },
      {
        id: "d10q9",
        question: "What is the GCD of 56 and 98?",
        type: "multiple-choice",
        options: ["7", "14", "28", "2"],
        correct: 1,
        explanation: "56 = 2<sup>3</sup>&times;7 and 98 = 2&times;7<sup>2</sup>. Shared primes at lowest power: 2<sup>1</sup>&times;7<sup>1</sup> = 14. (Review from Day 9.)",
        difficulty: "hard",
        category: "review",
        hints: ["Prime factorize both numbers, then take the lowest power of each prime they share in common.", "56 = 2\u00b3 \u00d7 7 and 98 = 2 \u00d7 7\u00b2. They share 2 and 7 \u2014 take the smaller exponent of each: 2\u00b9 and 7\u00b9. Multiply those together."]
      },
      {
        id: "d10q10",
        question: "Simplify 120/180 to lowest terms using the GCD.",
        type: "multiple-choice",
        options: ["12/18", "4/6", "2/3", "20/30"],
        correct: 2,
        explanation: "GCD(120,180) = 60. So 120&divide;60 = 2 and 180&divide;60 = 3. Answer: 2/3. This combines GCD skills from Day 9 with fraction simplification from today!",
        difficulty: "medium",
        category: "review",
        hints: ["Find the GCD of 120 and 180 first (use prime factorizations from Day 8!), then divide both top and bottom by it.", "120 = 2\u00b3 \u00d7 3 \u00d7 5 and 180 = 2\u00b2 \u00d7 3\u00b2 \u00d7 5. The GCD uses the lowest shared powers: 2\u00b2 \u00d7 3 \u00d7 5 = 60. Now divide both 120 and 180 by 60."]
      }
    ]
  }
};
