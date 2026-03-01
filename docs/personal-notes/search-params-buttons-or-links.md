To answer your `//TODO` question about **Buttons vs. Links**: 
In React Router, you can use either. 
*   **Links (`<Link to="?type=simple">`)** are generally better for **accessibility** and **SEO** because they are semantic `<a>` tags. 
*   **Buttons with `setSearchParams`** are often used when you want to perform additional logic before changing the URL or when building a "web app" feel (like a dashboard). 
*   **The Pro Choice:** Since you are an engineering student, I recommend sticking with `setSearchParams` for now because it allows you to **merge** parameters, which we are about to do.

---
