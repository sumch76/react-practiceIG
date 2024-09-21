### In this lab, you'll be creating a simple React application - a Tip Calculator. This app will calculate the total bill amount based on the user's input for the bill amount and the desired tip percentage.

## Steps to Build the App
## Create Input Elements:

### Bill Amount Input: 
>Add an input field where users can enter the bill amount. Assign it the ID #billAmount.
### Tip Percentage Input: 
>Add another input field for users to enter the tip percentage. This should have the ID #tipPercent.

### Add a Calculate Button:

>Create a button that, when clicked, will trigger the calculation of the total bill. This button should have the ID #calculateAmount.

## Implement the Calculation Logic:

>Write a function that calculates the total bill amount, including the tip. This is done by adding the tip amount to the original bill amount.

### Display the Result:

>Show the total bill amount in a dedicated element on the page. This element should have the ID #totalAmount.

>Ensure that the displayed total is formatted to two decimal places.

## Testing Criteria
**Your application will be tested based on the following:**

>Correct implementation of input fields and button with specified IDs.
Accurate calculation and proper display of the total bill amount, formatted to two decimal places.

# Challenges
## Challenge 1: Input Fields and Button Creation

## Objective: Create the required interface elements for the tip calculator.
## Tasks:
>Implement a numerical input field for the bill amount with the ID #billAmount.

>Implement a numerical input field for the tip percentage with the ID #tipPercent.

>Create a button to trigger the calculation with the ID #calculateAmount.

### Expectations: The input fields should accept only numerical values. These elements must be correctly implemented and identifiable by their respective IDs.

## Challenge 2: Calculation and Output Display

### Objective: Implement the logic to calculate and display the total bill amount.
## Tasks:
>Develop a function that calculates the total bill amount when the #calculateAmount button is clicked. This includes the original bill amount and the tip calculated as totalAmount = billAmount + (billAmount * tipPercent / 100).

>Display the calculated total in an element with the ID #totalAmount. This amount should be formatted to two decimal places.

>Expectations: The calculation must be accurate, and the total amount should be displayed correctly, limited to two decimal places.