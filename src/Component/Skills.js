// src/components/Skills.js
import React from 'react';
import './Skills.css'
const Skills = () => {
  const skillsData = [
    {
      category: 'Front-end Development',
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Vue.js'],
    },
    {
      category: 'Back-end Development',
      skills: ['Node.js', 'Express.js', 'Python', 'Django'],
    },
    {
      category: 'Database Management',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
    },
    {
      category: 'Version Control',
      skills: ['Git', 'GitHub', 'Bitbucket'],
    },
    // Add more skill categories and skills here...
  ];

  return (
    <section>
      <h2>Skills</h2>
      {skillsData.map((category, index) => (
        <div key={index}>
          <h3>{category.category}</h3>
          <ul>
            {category.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills;
