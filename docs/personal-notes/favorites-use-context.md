Congratulations! You've checked off almost every requirement. Now we are going to implement **`useContext`**. 

Since we decided to do a **Favorites System**, this is the perfect use case. Here is the explanation and the plan:

### What is `useContext`? (The "Global Backpack")

Usually, in React, if you want to send information from one component to another, you pass it like a gift through **Props**. But if the components are far apart (like the List page and the Detail page), you have to pass that gift through many "middleman" components who don't even care about it. This is called *Prop Drilling*, and it's messy.

**`useContext`** is like a **Global Backpack** that floats above your entire app. 
* Any component, no matter where it is, can reach up into that backpack to grab information or put something inside.
* If you "heart" a van in the `VanDetail` page, the "backpack" updates, and the `Vans` list page instantly knows which one is a favorite because they are all looking at the same backpack.

---

### Step-by-Step for the Favorites Context:

We will do this in 3 parts. 

#### Part 1: Create the Context (The "Backpack" definition)
1. Create a folder called `src/context/`.
2. Create a file called `FavoritesContext.jsx`.
3. You will use `createContext()` from React to create the "backpack."
4. You will create a **Provider**. This is a special component that "holds" the backpack and gives its children permission to use it.
5. Inside this file, you need a **State** (an array) to hold the IDs of the vans the user likes.

#### Part 2: Wrap the App (Opening the Backpack to everyone)
1. Go to your `main.jsx` (or wherever your `BrowserRouter` is).
2. Wrap your entire `<App />` component inside your new `<FavoritesProvider>`. 
*Now, every page in your app has access to the favorites logic.*

#### Part 3: Use the Context (Reaching into the Backpack)
1. In `VanCard.jsx` or `VanDetail.jsx`, use the `useContext` hook.
2. You will pull out two things:
   * The list of favorite IDs (to show a colored heart if it's already there).
   * A function to "Toggle" the favorite (add it if it’s not there, remove it if it is).

---

### Why this satisfies your project requirements:
1. **useContext:** You are using global state management.
2. **Architecture:** Organizing it in a `context/` folder is professional.
3. **Sentido (Logic):** Using context for a "Favorites" list makes total sense because it needs to be shared across multiple routes.

### How to Start (Task 1):

Open your new file `src/context/FavoritesContext.jsx` and try to write the skeleton. You need:
* `import { createContext, useState } from 'react'`
* `export const FavoritesContext = createContext()`
* A function called `FavoritesProvider` that returns `FavoritesContext.Provider`.

**Try to write the code for the context file first.** If the `children` prop or the `value` attribute of the Provider feels confusing, just ask!

--- 

Great job! The `stopPropagation()` trick is essential when nesting buttons inside links. Your logic is sound, and you've confirmed that the button "knows" which van it belongs to.

Now, let's build the **Backpack** (The Context) where we will store these favorites globally.

### Part 1: The Context File

Create the file `src/context/FavoritesContext.jsx`. We need to define how the "backpack" works. 

Here are the steps for the code you need to write:

1.  **The Definition**: Use `createContext()`. This creates the empty backpack.
2.  **The Provider**: This is a function (a component) that will wrap your app. It needs to accept `children` as a prop.
3.  **The State**: Inside the Provider, create a state box: `const [favorites, setFavorites] = useState([])`. This is an array that will hold the IDs of the vans you like.
4.  **The Toggle Function**: Create a function called `toggleFavorite(id)`. 
    *   **Logic**: 
        *   If the ID is **already** in the array $\rightarrow$ Remove it (un-favorite).
        *   If the ID is **not** in the array $\rightarrow$ Add it (favorite).
5.  **The Output**: Return the `<FavoritesContext.Provider>`. 
    *   You must pass a `value` prop containing the `favorites` array and the `toggleFavorite` function.
    *   Inside the Provider tags, put `{props.children}`.

### Part 2: Opening the Backpack (main.jsx)

Once you've written the context file, you need to "connect the power."

1.  Go to `src/main.jsx`.
2.  Import `FavoritesProvider` from your new file.
3.  Wrap your `<App />` component with it. It should look like this:
    ```javascript
    <FavoritesProvider>
        <App />
    </FavoritesProvider>
    ```

---

### Why this is a "Pro" step:
By wrapping the whole app, the `Home` page, the `Vans` page, and the `VanDetail` page will all share the same list of hearts. If you heart a van on the list, and then click to see its details, the heart will already be red there too!

**Try to write the `FavoritesContext.jsx` file now.** 

**Teenager-friendly Logic Hint for the Toggle:**
To see if an ID is already in the list, you can use `.includes(id)`. 
To add it, use the spread operator: `[...favorites, id]`.
To remove it, use `.filter()`.

Give it a shot and show me your `FavoritesContext.jsx`! If the `children` or `value` part feels like "alien code," just let me know and I'll explain it further.

--- 

You have a great foundation! Your `FavoritesProvider` is ready for the "Brain" (the logic). 

Here are the steps to finish the logic and connect it to your app.

### Step 1: Finish the "Toggle" Logic
Inside your `FavoritesProvider` function, you need to write the logic for adding or removing a van. Think of it like a light switch: if it's off, turn it on; if it's on, turn it off.

1.  **Check if the ID is already there**: Use `favorites.includes(id)`. This gives you a True or False.
2.  **The "If" logic**:
    *   **If it's already a favorite**: Use the `.filter()` method to create a new list that contains everything **except** that ID.
    *   **If it's NOT a favorite**: Create a new list combining the old IDs and the new one (using the `...` spread operator).
3.  **Update the box**: Use `setFavorites(newList)`.

### Step 2: Fill the "Gifts" in the Provider
Right now, your `<FavoritesContext.Provider>` is empty. You need to tell it what tools it's giving to the rest of the app.
*   Add the `value` prop. It should be an object containing the list (`favorites`) and the action (`toggleFavorite`).
*   It looks like this: `value={{ favorites, toggleFavorite }}`.

### Step 3: Wrap the App (Power On)
Go to `src/main.jsx`. 
1.  **Import** `FavoritesProvider` from your context file.
2.  **Wrap** the `<App />` component. This makes the "backpack" available to every single page and component in your project.

### Step 4: Use it in `VanCard.jsx`
Now, go back to your card. We need to actually "listen" to the backpack.
1.  **Import** the `useContext` hook from `'react'`.
2.  **Import** the `FavoritesContext` (the backpack name) from your context file.
3.  **Grab the tools**: Inside your `VanCard` function, add:
    `const { favorites, toggleFavorite } = useContext(FavoritesContext)`
4.  **Update the Heart**:
    *   Create a variable: `const isFavorite = favorites.includes(props.van.id)`.
    *   In your `handleFavorite` function, call `toggleFavorite(props.van.id)`.
    *   Change the look: Inside the button, you can use a Ternary Operator to show a Red Heart if `isFavorite` is true, or a Gray Heart if false.

---

### Segment Testing (The Pro Way)

*   **Logic Test**: Once you finish Step 2, go to `FavoritesContext.jsx` and add a `console.log("Global Favorites:", favorites)` inside the Provider.
*   **Interaction Test**: In your browser, click the heart on 3 different vans. In the console, you should see the array growing: `[1]`, `[1, 2]`, `[1, 2, 5]`.
*   **Persistence Test**: Heart a van on the list, then click the van to go to the **Detail Page**. If you implement the `useContext` on the detail page later, the heart should still be there!

**Try finishing Step 1 and 2 in your `FavoritesContext.jsx` first.** If the `.filter()` or the `...` spread operator feels confusing, let me know and I'll explain how to write that specific line!

--- 


