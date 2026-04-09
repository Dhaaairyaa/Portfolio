import { useState } from "react";

const skills = [
  "Curriculum & Framework Design",
  "Educational Technology",
  "Educational Leadership",
  "Instructional Design",
  "Educational Research",
  "Curriculum Development",
  "ILT & VILT Facilitation",
  "Stakeholder Management",
  "Authoring Tools (Articulate/Rise)"
];

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-[#191919] py-20 px-6">
      
      {/* Title */}
      <h1 className="text-center text-white text-4xl font-semibold mb-12">
        Skills
      </h1>

      {/* Skills Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6 
                      max-[1002px]:grid-cols-2 
                      max-[600px]:grid-cols-1">
        
        {skills.map((skill, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`
              bg-[#8d6e6e]
              text-white text-center px-5 py-6 rounded-2xl
              transition-all duration-300 cursor-pointer
              shadow-md
              ${hoveredIndex === index 
                ? "scale-105 shadow-xl bg-[#8d6e6e]" 
                : "opacity-90"}
            `}
          >
            <p className="text-sm md:text-base font-medium">
              {skill}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Skills;