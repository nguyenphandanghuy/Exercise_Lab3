import ScientistDirectory from "./components/ScientistDirectory";
import DeveloperCard from "./components/DeveloperCard";
import "./App.css";

const developer = {
  name: "Nguyen Phan Dang Huy",
  role: "Frontend Developer",
  bio: "I build accessible and responsive web applications with a focus on clean design and user experience.",
  avatar:
  "https://raw.githubusercontent.com/nguyenphandanghuy/Exercise_Lab3/main/public/images/avatar.jpg.png",
skills: ["React", "JavaScript", "HTML", "CSS", "Accessibility"],
metrics: {
  "Technical Skills": 5,
  "Main Focus": "Accessibility",
},
};

function App() {
  return (
    <main className="app">
      <header className="page-header">
        <h1>Developer Profile</h1>
        <p>Meet our developer and explore their skills.</p>
      </header>

      <DeveloperCard developer={developer} />
      <ScientistDirectory />
    </main>
  );
}

export default App;
