import React from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';

// Array of skill names only, since the icon remains the same for all
const skills = [
  'JavaScript (ES6+)',
  'Next.js',
  'React',
  'Node.js',
  'TypeScript',
  'Express.js',
  'MongoDB',
  'Tailwind CSS'
];

const SkillList = () => {
  return (
    <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center gap-2">
          <span className="text-textGreen">
            <AiFillThunderbolt />
          </span>
          {skill}
        </li>
      ))}
    </ul>
  );
};

export default SkillList;