### 2. How to test each part individually (Step-by-Step)

#### Step 1: Test the "Data Arrival" (The "What am I getting?" test)
Before you even try to `.map()` the data, verify that the hook is actually talking to the component.
*   **How:** Right below your `const { data, ... }` line, add:
    ```javascript
    console.log("Current data state:", data);
    ```
*   **What to look for:** In your browser console, you should see `null` first, and then an object containing the `vans` array. If it stays `null`, your fetch is failing.

#### Step 2: Test the "Loading State" (The "Slow Motion" test)
Sometimes the data loads so fast you can't tell if your "Cargando..." message even works.
*   **How:** Open your **Browser DevTools** (F12) -> Go to the **Network** tab -> Look for a dropdown that says "No throttling" and change it to **"Fast 3G"**.
*   **What to look for:** Refresh the page. You should now clearly see your `<h2>Cargando vans...</h2>` for a second or two before the furgonetas appear.

#### Step 3: Test the "Error State" (The "Breaking it on purpose" test)
You need to know if your "plan of emergency" actually works.
*   **How:** Temporarily change the URL in your code to something that doesn't exist:
    ```javascript
    const { data, loading, error } = useFetch("/api/wrong-address");
    ```
*   **What to look for:** The screen should show `Hubo un error: ...`. This confirms your `catch` block in the hook is working and passing the message to the page.

#### Step 4: Test the "Mapping" (The "UI" test)
Once you know data is there, you test the visual part.
*   **How:** Comment out your `return` at the bottom and just return a pre-tag to see the raw text:
    ```javascript
    return <pre>{JSON.stringify(data, null, 2)}</pre>
    ```
*   **What to look for:** This prints the "raw" data on the screen. It’s a great way to confirm if you should be using `data.vans` or just `data`.

---