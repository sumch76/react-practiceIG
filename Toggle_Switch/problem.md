- In this lab, you will be building a simple toggle button using React. This button should be able to toggle its appearance and label based on user interactions.

## **Instructions**

#### Setup: Start by creating a new functional component for your toggle button.

#### `State Management:` Use the useState hook to manage the state of the button. Consider what pieces of state you might need. At a minimum, you'll need to track whether the button is in the "on" or "off" state.

### `Styling:` Ensure your button meets the styling requirements outlined in the challenges. Remember to use named CSS colors for background and text color.

### `Event Handling:` Add an onClick event to your button. When clicked, the button should toggle between the "on" and "off" states. You might need to utilize the state updater function from useState here.

### `Continuous Toggling:` Ensure your button can toggle its state and appearance continuously on multiple clicks.

## Challenges
## `Challenge 1:`Button Existence
- Ensure there's a button element with the id toggle on your page.

## Challenge 2: Default Button Appearance
- The button with id toggle should have the following properties by default:

- Text content should be on.

- Use named CSS colors to set the background  color to black and the text color to white.

## Challenge 3: Button Toggle
- Once the button with id toggle is clicked, it should have the following changes:

- Text content should change to off.
- Background color should change to lightgray and text color should change to black.
- Make sure your React component responds to synthetic events and updates the button appearance accordingly.
## Challenge 4: Continuous Toggling
- The button's toggle functionality should not be a one-time action. When the toggle button is clicked multiple times, it should keep switching between the on and off states, along with the associated styles.