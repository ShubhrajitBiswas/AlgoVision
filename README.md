# AlgoVision

**AlgoVision** is an interactive platform to explore, understand, and visualize the inner workings of popular algorithms. Whether you're a student, educator, or tech enthusiast, AlgoVision makes learning algorithms engaging, intuitive, and visual.

![AlgoVision Screenshot](https://raw.githubusercontent.com/ShubhrajitBiswas/AlgoVision/main/src/assets/homepage.png)

---

## 🚀 Features

- **Visualize** searching, sorting, and pathfinding algorithms in real time.
- **Step-by-step animations** to understand algorithm execution.
- **Compare** different algorithms in terms of speed and behavior.
- **Modern UI** built with React, Tailwind CSS, and Vite.
- **Deploy-ready** for Vercel and other static hosts.

---

## 📁 Project Structure

```
AlgoVision/
  ├── src/
  │   ├── algorithms/           # Core algorithm logic (Dijkstra, Bellman-Ford, etc.)
  │   ├── assets/               # Images, SVGs, and static assets
  │   ├── components/
  │   │   ├── layout/           # Layout components (Navbar, Footer, Hero, etc.)
  │   │   ├── ui/               # Small, reusable UI components (Button, GetStarted, etc.)
  │   │   └── visualizations/   # Algorithm visualization components
  │   ├── pages/                # Main page components (Routing targets)
  │   ├── constants/            # Data constants (stats, techStack, etc.)
  │   ├── style.js              # Tailwind and custom style helpers
  │   └── main.jsx              # App entry point
  ├── public/                   # Static public assets
  ├── package.json
  ├── vite.config.js
  └── README.md
```

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/AlgoVision.git
   cd AlgoVision
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

## 🏗️ Building for Production

To build the app for production (e.g., for Vercel):

```sh
npm run build
# or
yarn build
```

The output will be in the `dist/` directory.

---

## ☁️ Deploying to Vercel

1. **Push your code to GitHub.**
2. **Go to [vercel.com](https://vercel.com/), import your repo, and deploy.**
   - Vercel will auto-detect Vite and set:
     - **Build Command:** `npm run build`
     - **Output Directory:** `dist`
3. **Done!** Your app will be live on your Vercel domain.

---

## 🧩 Adding New Algorithms

- Add core logic to `src/algorithms/`.
- Create a new visualization component in `src/components/visualizations/`.
- Add a route/page in `src/pages/` if needed.
- Update navigation in the layout components.

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 📦 Dependencies

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [@lottiefiles/dotlottie-react](https://www.npmjs.com/package/@lottiefiles/dotlottie-react)
- [js-priority-queue](https://www.npmjs.com/package/js-priority-queue)
- ...and more (see `package.json`)

---



## 🙏 Acknowledgements

- Inspired by classic algorithm visualizer tools.
- Built with ❤️ by [Shubhrajit Biswas](https://github.com/ShubhrajitBiswas).

---

**Enjoy learning and visualizing algorithms with AlgoVision!**
