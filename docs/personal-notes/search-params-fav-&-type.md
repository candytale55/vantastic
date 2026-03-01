
### Implementing the "Favorites Filter"

To implement this, we need to solve a **Composite Filtering** problem. We want the user to be able to see "Only Luxury Vans" AND then toggle "Only my Favorites" on top of that.

#### 1. The Strategy: URL as the Single Source of Truth
Just like the "type," we will store the "favorites only" state in the URL (e.g., `?type=simple&favs=true`). This keeps the app shareable and consistent.

#### 2. Get the Context
First, you need to know which vans are favorited. 
*   Import `useFavorites`.
*   Extract `favorites` (the array of IDs) inside your `Vans` component.

#### 3. Read the New "Signpost"
Read the new parameter from the URL:
```javascript
const favsFilter = searchParams.get("favs") === "true";
```

#### 4. The Composite Filter Logic (Step-by-Step)
Instead of a single ternary operator, we will use a more scalable approach. Think of this as a **Pipeline**:
1. Start with the full list.
2. If there is a `type`, filter the list.
3. If `favsFilter` is true, filter the resulting list again using the IDs in your Context.

```javascript
// Step 1: Start with all data
let displayedVans = data.vans;

// Step 2: Apply Type Filter
if (typeFilter) {
  displayedVans = displayedVans.filter(van => van.type === typeFilter);
}

// Step 3: Apply Favorites Filter
if (favsFilter) {
  displayedVans = displayedVans.filter(van => favorites.includes(van.id));
}
```

#### 5. The "Toggle" Button (Merging Params)
This is a common engineering hurdle: If you use `setSearchParams({ favs: "true" })`, you might **erase** the `type` parameter. 

To prevent this, you should **merge** the new value with the old ones. React Router allows you to pass a function to `setSearchParams` to access the current state:

```javascript
const handleFavsToggle = () => {
  setSearchParams(prev => {
    if (favsFilter) {
      prev.delete("favs"); // If it was on, turn it off
    } else {
      prev.set("favs", "true"); // If it was off, turn it on
    }
    return prev;
  });
};
```

---

### Segment Testing

1.  **Context Sync:** Heart a van in the list. Click the "Favs ❤️" button. Does only that van show up? 
2.  **Filter Merging:** Filter by "Rugged." Then click "Favs ❤️." The URL should look like `?type=rugged&favs=true`. You should only see Rugged vans that are also Favorited.
3.  **Empty State:** If you filter by "Favs" but haven't hearted anything, you should see no vans. It would be a good idea to add a message: *"No favorites found matching these criteria."*
