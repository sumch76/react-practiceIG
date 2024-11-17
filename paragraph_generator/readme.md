## Explanation of the Code
1. **Why use useState?**

- We use useState to store values that can change when the user interacts with the app.

- wordCount: Holds the number of words entered by the user.
- paragraph: Stores the generated paragraph.

Example:

- When the user types 5, wordCount updates to 5.
- When the user clicks "Generate," paragraph updates with the generated text.
2. **Why use the generateParagraph function?**

- It creates the paragraph by looping through a list of sample words.
- The for loop ensures we add the correct number of words based on wordCount.

3.**Why use .split(" ")?**

- Converts the sample sentence into an array of words, making it easy to pick one word at a time.

4.**Why use i % sampleWords.length?**

- If the user enters a number larger than the sample words (e.g., 20), this repeats the sample words.

5.**Why use trim()?**

- Removes any extra space at the end of the paragraph