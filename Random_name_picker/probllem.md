- **you'll create a simple yet interactive Random Name Picker (Raffle Draw) application using React. This app allows users to enter names into a list and then randomly pick one of those names. Follow these steps to build your app:**

### 1.Name Input Field:

- Create a text input field for users to enter names.
- Assign the ID #nameInput to this input field.
- Ensure that pressing the 'Enter' key after typing a name adds it to a list for future selection.

### 2.Displaying Entered Names:

- Set up a div element to display the names that have been entered.
- This `div` should have the ID #nameList.
- Each entered name should be displayed as a span element within this div, with each span having the class `.name.`

### 3.Random Name Selection:

- Include a button for selecting a random name from the entered names.
- The button should have the text "Pick a Name" and the ID #pick.
- On clicking this button, randomly pick a name from the list and display it in a HTML dialog modal.
- The dialog modal for showing the picked name should have the ID #nameDialog.

### 4.Picked Names List:

- Create a div to display the names that have been picked.
- This div should have the ID #pickedList.
- Every time a name is picked, it should be moved from the #nameList to the #pickedList, displayed as a span element with the class `.name`.

## Challenge

### Challenge 1: Implementing the Name Input Functionality

**Objective:** Create an input element for name entry.

- The element should have the ID #nameInput.
- Implement functionality so that pressing the 'Enter' key after typing a name adds the name to an internal list (nameList). This requires handling keypress events and updating the component's state.

### Challenge 2: Displaying Entered Names
**Objective:** Create a display area for the entered names.

- The display area should be a div element with the ID #nameList.
- Each time a new name is entered and the 'Enter' key is pressed, it should be displayed within this div as a span element with the class .name. This tests the participant's ability to render lists in React and manage state updates.

### Challenge 3: Implementing the Random Name Selection
**Objective:** Add functionality to pick a random name.

- Create a button with the text "Pick a Name" and the ID #pick.
- When this button is clicked, the application should randomly select a name from the nameList.
- The selected name should be displayed in a dialog modal, which should have the ID #nameDialog. This modal should contain the picked name. Users should be aware that there's a delay for the dialog to reflect changes.

### Challenge 4: Managing the Picked Names
**Objective:** Keep track of and display the names that have been picked.

- Create a div with the ID #pickedList.
- Once a name is picked, it should be moved from the nameList to the #pickedList div.
- In the #pickedList, each picked name should be displayed as a span element with the class .name. This challenge tests the ability to manipulate arrays and state, as well as updating the DOM based on state changes.
- Remember to manage the state effectively in your React application to reflect these changes. The IDs provided are essential for the testing of your application, so make sure to include them exactly as mentioned.

`Good luck, and happy coding!`