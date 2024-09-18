### Your task is to build a simple polling system using React. This will be a straightforward single component app where users can view a question and vote on one of the available options.**

> The objective of this lab is to Implement a system with a question and multiple-choice answers where users can vote.

## Instructions
Initialize Your Component: Start by creating a functional component named PollComponent. This will be your primary component for this lab.

## Display the Poll Question:

1.Within your PollComponent,create an `<h4>`element.

2.Set the id of this element to question.

3.This will be used to display the poll question to the user.

## Set Up Voting Options:

1.You will need to provide 4 different voting options to the user.

2.For each option, create a button element with a class of option.

3.These buttons will be used for users to cast their votes.

## Structure Your Voting Options:

1.Inside each of your .option buttons, you should have two <span> elements.

2.The first <span> should display the name of the option, while the second <span> should display the current vote count for that option.

## Implement the Voting Logic:

1.When a user clicks on one of the .option buttons, the vote count for that specific option should increase by 1.

2.Ensure the updated count is reflected immediately on the button itself.

## Challenges Information
## `Challenge 1`: Display the Poll Question

### `Objective`: Your task is to create a display element for the poll question using an <h4> element. This element should have an id attribute of question.

## `Challenge 2`: Set Up Voting Options
### `Objective:` Implement a way for users to see the multiple choices they can vote for. Create 4 button elements, each with a class named option.

## `Challenge 3`: Structure of Voting Options
### Objective: Enhance the design of each voting option. Within each .option button, there should be two <span> elements. The first should display the option name, and the second should display the current count of votes.

## `Challenge 4`: Implement Voting Mechanism
### Objective: Enable users to vote by clicking an option. When an .option button is clicked, the vote count (displayed in the second <span> within that button) should increase by 1.
