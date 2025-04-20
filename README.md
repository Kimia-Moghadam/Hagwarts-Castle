🧙‍♂️ Hogwarts Magical Dashboard – First Edittion
Overview
This is a fantasy-themed web dashboard inspired by the magical world of Hogwarts. It combines a rich UI design with dynamic data visualizations and protected user authentication. The project demonstrates frontend/backend integration, routing, chart rendering, and access control—all in a magical setting.

✨ Features
🔒 Backend (Fake API)
Simulated using Express.

Login endpoint: POST /auth

Chart data endpoint: /chart/{chartName}

🎨 Frontend (React + Ant Design)
Login page with a magical UI theme.

Main dashboard resembles a Hagwarts Map with clickable magical locations 

Clicking each area routes to /chart/:chartName, showing an interactive Plotly.js chart:

Chart types include: Radar, Bar, Line, etc.

Access to charts is restricted to authenticated users only.

 UI/UX Details
Magical design theme with warm tones (brown, gold, purple).

Fantasy-style fonts and a parchment-like background.

Animated loading spinner 

Smooth page transition animations for immersive user experience.

🛠 Tech Stack
Frontend: React, React Router, Ant Design, Plotly.js

Backend: Express (for mock API)

Styling: CSS modules / custom fantasy theme
