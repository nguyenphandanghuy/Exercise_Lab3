import { useState } from "react";
import PubgMatchTelemetry from "./components/PubgMatchTelemetry";
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
    const [selectedSquad, setSelectedSquad] = useState("cerberus");
  return (
    <main className="app">
      <header className="page-header">
        <h1>Developer Profile</h1>
        <p>Meet our developer and explore their skills.</p>
      </header>

      <DeveloperCard developer={developer} />
      <ScientistDirectory />
      <section>
        <h2>PUBG Vietnam Series</h2>

        <label htmlFor="squad-select">Select Squad: </label>

        <select
          id="squad-select"
          value={selectedSquad}
          onChange={(event) => setSelectedSquad(event.target.value)}
        >
          <option value="cerberus">Cerberus Esports</option>
          <option value="expendables">The Expendables</option>
          <option value="genius">Genius Esports</option>
        </select>

        <PubgMatchTelemetry squadId={selectedSquad} />
      </section>
    </main>
  );
}
export default App;