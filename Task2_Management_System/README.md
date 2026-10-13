# Task 2 – Management System Website

A **responsive static website** recreated from the teacher's Task 2 reference video.

## Pages
| File | Purpose |
|---|---|
| `index.html` | Landing page, 3-slide carousel, goals, benefits, CTA |
| `login.html` | Email/password login form with browser-side validation and password visibility toggle |
| `home.html` | Welcome banner and four course cards (HTML, CSS, Bootstrap, JavaScript) |
| `register.html` | Optional demonstration registration UI |
| `forgot.html` | Optional information page for nonfunctional password reset |

## Code structure
```
Task2_Management_System/
├── index.html
├── login.html
├── home.html
├── register.html
├── forgot.html
├── assets/
│   ├── css/style.css
│   └── js/auth.js, home.js
└── README.md
```

## How it works
- **HTML** creates the navigation, headings, forms, sections, course cards and footer.
- **Bootstrap 5.3.3 CDN** supplies responsive layout, dropdown and carousel behavior; internet access is necessary to load Bootstrap.
- **CSS (`assets/css/style.css`)** creates colors, backgrounds, responsive spacing, gradients, card design and the login layout.
- **Bootstrap carousel** has 3 slides. `data-bs-ride="carousel"` starts autoplay, `data-bs-interval="4500"` sets 4.5 seconds, and previous/next controls plus indicators change slides.
- **`assets/js/auth.js`** handles the Show/Hide password button, validates email and nonempty password, then redirects to `home.html`; demo only, accepts *any* valid email and nonempty password.
- **`assets/js/home.js`** shows the success alert once after a login/registration, and handles the logout navigation.
- Course **Learn More** buttons open an in-page Bootstrap Course Details dialog.
- All 4 supplied photos are stored locally in `assets/images/` and do not require an internet connection.

**Security note:** This is an HTML/CSS/JS-only demonstration. It does *not* implement secure login, email delivery, persistent users, or a database. Never reuse these login mechanisms for a real application.

## Test on your computer
1. Extract the ZIP.
2. Open folder `Task2_Management_System` in VS Code.
3. Install extension **Live Server** (optional).
4. Right-click `index.html` → **Open with Live Server** (or double-click `index.html`).
5. Test carousel controls, Home dropdown, Login Now, password toggle, Sign In, popup, four Learn More modal dialogs and responsive mobile layout.

## Upload and publish using GitHub Pages
1. Create a **public** GitHub repository such as `task2-management-system`.
2. Upload the **contents** of `Task2_Management_System` to the repository root (so `index.html` appears in the root).
3. Commit and push to the default branch (usually `main`).
4. GitHub repository → **Settings** → **Pages** → **Build and deployment** → **Deploy from a branch**.
5. Select `main` and `/ (root)`, then click **Save**.
6. Wait for GitHub Pages to publish; visit `https://YOUR-USERNAME.github.io/task2-management-system/` (replace the username and repo slug).
7. Open the link in an incognito tab, verify all links and interactions. Submit **only this working live link**, as requested by the teacher.

## Submission deadline
13 October 2026, 10:00 AM (per the assignment announcement).


## Images provided for Task 2
All four images are stored locally in `assets/images/`, so they work after publishing to GitHub Pages:
- `office-corridor.png` — carousel slide 1
- `team-collaboration.png` — carousel slide 2
- `planning-work.png` — carousel slide 3
- `meeting-room.png` — Goal of This Website section

The **Learn More** buttons on `home.html` show Bootstrap **Course Details** modals as in the demo video.


Navigation dropdown: Login (`login.html`), Sign Up (`register.html`), Help (`help.html`).
