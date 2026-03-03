### Making Date Pickers Work with Constraints
To make the dates behave logically (no past dates and the return date must be after the pick-up), you need to combine **HTML attributes** for the UI and **JS Logic** for the validation.

#### Step A: Preventing Past Dates (The `min` attribute)
You should not allow a user to book a van for yesterday.
1.  Calculate "Today" in your component using `new Date().toISOString().split('T')[0]`. This gives you a string in the format `YYYY-MM-DD`.
2.  Pass this string to the `min` attribute of your "Pick-up" date input. This will grey out all past dates in the browser's calendar popup.

#### Step B: Linking the Two Dates (The "Watch" Pattern)
The "Return Date" is dependent on the "Pick-up Date." To handle this in `react-hook-form`:
1.  **Watch the start date:** Use the `watch` function provided by the hook: `const startDate = watch("pickupDate")`.
2.  **Dynamic Min for Return:** Set the `min` attribute of the "Return Date" input to be the `startDate`. This ensures the user cannot select a return date earlier than their pick-up date.

#### Step C: Code-level Validation
Even if the UI blocks the dates, you should add a validation rule inside the `register` function of the Return Date. 
*   Use the `validate` property.
*   Compare the two values. If `returnDate <= pickupDate`, return an error message like "The return date must be after the pick-up date."

---

I have reviewed your code. You have a very solid structure, but there are some "invisible" errors that would prevent your data from being useful, especially with the radios and checkboxes.

Here is the breakdown of the corrections and the walkthrough for the dates.

### 1. The Missing Attribute (Radios & Checkboxes)
As you suspected, you are missing the **`value`** attribute. 
* **The Problem:** Without a `value`, if you select "Porta-bicicletas", the code will just send `"on"` to your data object. Since all your radios have the same name (`racks`), you wouldn't know which one was actually picked.
* **The Fix:** Add a unique `value` to each `<input type="radio">` and `<input type="checkbox">`.

### 2. The Textarea Error
You created the element, but you forgot to link it to the library.
* **The Fix:** Add `{...register("userComments")}` to the `<textarea>`.

### 3. Logic errors in `submit`
* In your `submit` function, you are only destructuring `{ userName, userEmail }`. This means if you pick a city or a date, you won't see it in your console.
* You have a typo in your `if` check: `if (userName && userName)`.

---

### 4. Walkthrough: Implementing Date Restrictions

To make the date pickers work professionally, we need to do three things:

#### Step A: Get "Today's" Date
Inside your component, before the return, create a variable for today. This ensures the user can't pick a date in the past.
```javascript
const today = new Date().toISOString().split('T')[0];
```

#### Step B: Watch the Pick-up Date
We need to "watch" what the user picks for the first date so we can use it to restrict the second date.
1. Add `watch` to your `useForm` destructuring: `const { register, handleSubmit, reset, watch } = useForm();`
2. Save the value: `const pickupDateValue = watch("pickupDate");`

#### Step C: Apply the `min` attributes
1. For the **Pick-up input**, add `min={today}`.
2. For the **Return input**, add `min={pickupDateValue || today}`. This forces the return date to be the same day or later than the pick-up.

---

### Revised Code Snippet (With fixes applied)

I've highlighted the changes in the logic and the attributes:

```javascript
import { useForm } from 'react-hook-form'

export default function BookingForm() {
    // 1. Added watch here
    const { register, handleSubmit, reset, watch } = useForm();
    
    // 2. Setup today's date and watch the first picker
    const today = new Date().toISOString().split('T')[0];
    const pickupDateValue = watch("pickupDate");

    const submit = (data) => {
        // data now contains ALL fields: userName, racks, pickupDate, etc.
        console.log("Booking Data:", data);
        alert(`¡Gracias ${data.userName}! Reserva recibida.`);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            {/* ... Name, Email, Phone inputs stay the same ... */}

            <label htmlFor="pickup-date">Fecha recogida:</label>
            <input
                type="date"
                id="pickup-date"
                min={today} // Restrict to today/future
                {...register("pickupDate", { required: true })} 
            />

            <label htmlFor="return-date">Fecha entrega:</label>
            <input
                type="date"
                id="return-date"
                min={pickupDateValue || today} // Restrict to pickup date or later
                {...register("returnDate", { required: true })} 
            />

            {/* RADIOS: Added value attributes */}
            <fieldset>
                <legend>Portaequipaje de Techo:</legend>
                <input type="radio" id="flat" value="flat" {...register("racks")} />
                <label htmlFor="flat">Plana</label>

                <input type="radio" id="surf" value="surf" {...register("racks")} />
                <label htmlFor="surf">Surf/Kayak</label>
                
                {/* ... apply to all radios ... */}
            </fieldset>

            {/* CHECKBOXES: Added value attributes */}
            <fieldset>
                <legend>Accesorios:</legend>
                <input type="checkbox" id="gps" value="gps" {...register("extras")} />
                <label htmlFor="gps">GPS</label>

                <input type="checkbox" id="solar" value="solar" {...register("extras")} />
                <label htmlFor="solar">Paneles Solares</label>
            </fieldset>
            
            <label htmlFor="userComments">Comentarios:</label>
            <textarea 
                id="userComments" 
                {...register("userComments")} // Register was missing
                placeholder="Peticiones..." 
            />
            
            <button type="submit">Envía formulario</button>
        </form>
    )
}
```

### Why this is better:
1. **Dynamic Dates:** The calendar will now physically block the user from picking impossible dates.
2. **Clean Data:** When you submit, your `racks` property will be a string like `"surf"`, and your `extras` property will be a clean array like `["gps", "solar"]`.
3. **Reusable Data:** By passing the whole `data` object to `submit`, you make the function scalable. If you add 10 more inputs later, you don't need to change the function signature.

Does the `watch` pattern make sense for linking your dates? It's a very powerful tool for creating "smart" forms!