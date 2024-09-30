>### `fetchPosts Function:` This function fetches the first 10 posts from the API using fetch(). Once the data is received, it's converted to JSON format using .json() and then logged to the console.

>### `useEffect Hook:` This hook runs when the component mounts (loads for the first time). It calls the fetchPosts function to make the API request.

## ✅`Ques`-why are we using useEffect hook not other hook?
- In React, the useEffect hook is commonly used for side effects, like data fetching, because it ensures that code runs after the component renders. Let me explain why useEffect is the right hook for fetching data and why we don't use other hooks in this case.

## Why `useEffect`?

### 1. **Side Effects**:
- Fetching data from an API is a side effect because it involves interacting with the external world (i.e., the API) and not just rendering UI.
- `useEffect` is specifically designed to handle side effects, such as data fetching, subscriptions, manual DOM manipulation, timers, etc.

### 2. **Runs After Render**:
- `useEffect` runs after the initial render of the component. This is important because you want to make sure the component is ready before fetching data and updating the UI.
- It ensures React first displays the UI, then performs the data fetch.

### 3. **Control Over When It Runs**:
- The second argument of `useEffect` is the dependency array. By passing an empty array `[]`, you're telling React to only run the effect **once**, when the component mounts (initial load).
- This is ideal for things like fetching data, as you only need it to run when the component is first rendered.

### Example Flow of `useEffect`:
1. The component is rendered for the first time.
2. **After** rendering, `useEffect` runs and triggers the API call (e.g., `fetchPosts`).
3. Once the data is fetched, you can update the state and trigger a re-render if necessary.

---

## Why Not Other Hooks?

### `useState`: 
- This hook is for managing local state inside the component, like the `posts` or `page` state. 
- It's not meant for performing side effects like data fetching.

### `useRef`: 
- This hook is used for referencing DOM elements or storing mutable values that don’t cause re-renders when updated. 
- It's not suitable for running side effects.

### `useCallback`: 
- This hook is used to memoize functions to avoid unnecessary re-creation of functions on every render. 
- It's also not used for side effects like fetching data.

### `useMemo`: 
- This hook is used for memoizing the results of expensive computations. 
- It's unrelated to side effects like data fetching.

---

## When to Use Other Hooks?

### `useState`: 
- You’ll use this hook to store the data you fetch from the API. 
- For example, after fetching data in `useEffect`, you'll set it in state using `useState` so that the data can be rendered.

### `useCallback` or `useMemo`: 
- These are used to optimize performance, for example, to avoid unnecessary re-renders or re-computations. 
- They are not related to side effects but can be useful in larger apps.

---

## Simple Comparison of Hooks:

| Hook         | Purpose                                               |
|--------------|-------------------------------------------------------|
| `useEffect`  | Runs side effects, like data fetching                 |
| `useState`   | Holds and updates local state (e.g., posts)           |
| `useRef`     | Holds references to DOM elements                      |
| `useCallback`| Memoizes functions for performance                    |
| `useMemo`    | Memoizes computed values for performance              |

---

## Conclusion:
We use `useEffect` to fetch data because it is designed to handle side effects like API calls, ensuring they run at the correct time (after rendering). Other hooks have different purposes, such as managing state or performance optimizations, and are not suitable for tasks like fetching data.
"""