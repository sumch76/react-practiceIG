- ### Create a simple React application that `generates a multiplication table` based on a `user-entered number.` This exercise will test your skills in `handling user inputs`, dynamically rendering data, and structuring your application's UI.

## Steps to Build the Application

### **Create User Input Field:**

- Implement an input field where users can enter a number.
- Assign the ID #number to this input field for testing purposes.

### Add Generation Button:

- Place a button on the page that, when clicked, will generate the multiplication table based on the input number.
- The button should have the ID #generateTable.
- Implement Multiplication Table Generation:

#### Write logic to generate a multiplication table going up to 20 times the number entered by the user.
- Ensure that this logic is triggered upon clicking the #generateTable button.

### Display the Multiplication Table:

- Render the multiplication table on the page.
- Use a ul element with the ID #multiplicationTable for displaying the table.
- Each multiplication result should be displayed as a separate li element within this ul.
- Make sure that the list items (li) do not show list discs.

### **Testing Constraints**
-  The lab tests will check for the presence and functionality of the elements with the specified IDs (#number, #generateTable, and #multiplicationTable).
Your application should handle a range of input numbers between 0 and 1000.


## Challenges Information
### Challenge 1: Input and Button Presence
---
#### Objective: Implement essential UI components.
**Task:**
- Create an HTML input element with the ID #number for user input and a button with the ID #generateTable to trigger the table generation.

**Requirements:**

- The input element must have the ID #number.
- The button must have the ID #generateTable.
- Both elements should be visible and accessible on the page.

### Challenge 2: Valid Number Input and Table Generation
---
#### Objective: Handle user input and table generation.
**Task:**
- Write functionality to accept a number between 0 and 1000 in the #number input field. Clicking the #generateTable button should generate the multiplication table.

**Requirements:**
- Only accept numbers between 0 and 1000.
- Ensure the table generation is triggered by the button click.
### Challenge 3: Displaying the Multiplication Table
#### Objective: Display the multiplication table in the UI.
**Task** 
- Render the multiplication table inside a ul element with the ID #multiplicationTable. Each multiplication result (up to 20 times the input number) should be in its own li element.

**Requirements:**
- The ul element should have the ID #multiplicationTable.
- Each li element should contain the result of multiplying the  input number by numbers 1 through 20.
- The li elements should not display list discs.