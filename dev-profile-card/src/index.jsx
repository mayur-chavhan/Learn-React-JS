import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "Bash Script",
    level: "advanced",
    color: "grey",
  },
  {
    skill: "JavaScript",
    level: "beginner",
    color: "yellow",
  },
  {
    skill: "React JS",
    level: "beginner",
    color: "teal",
  },
  {
    skill: "DevOps",
    level: "intermediate",
    color: "orange",
  },
  {
    skill: "HTML/CSS",
    level: "beginner",
    color: "skyblue",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <img
        src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads02&accessoriesType=Sunglasses&hairColor=Black&facialHairType=BeardLight&facialHairColor=Auburn&clotheType=Hoodie&clotheColor=Black&eyeType=Wink&eyebrowType=SadConcerned&mouthType=Smile&skinColor=Brown"
        alt="mayur chavhan"
      />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Mayur Chavhan</h1>
      <p>
        Mayur Chavhan is a DevOps Engineer passionate about automation, Linux,
        AWS, Python, and Bash scripting. Proficient in tools like Terraform,
        Kubernetes, Ansible, and Jenkins, he specializes in building and
        optimizing CI/CD pipelines, infrastructure as code, and cloud-native
        solutions.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

// Create a loop from skills arrays and display the skill with based on level show the emojis
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "advanced" && "💪"}
        {level === "intermediate" && "🧑‍💻"}
      </span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
