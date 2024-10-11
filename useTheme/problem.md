**Write a custom hook called useTheme that holds the current value of the theme which can be either “light” or “dark”**
- The hook should be able to store and manage the information on whether the page should be using light or dark mode. 
- It should return an object with two properties.

**Please see the example below for the required return object. We have already written some starting code for you.**

**Instructions**

- Use strings light and dark to track the current theme.
- The default theme should be light.
- You do not need to edit the App component. Tests will be scoring only the useTheme hook.
```javascript
Example test cases
{
  theme: 'light' | 'dark',
  toggleTheme: function
}
```
#### Hints
- Make use of the useState hook within the useTheme hook to keep track of the current theme value. Make sure to initialise it with the light theme.