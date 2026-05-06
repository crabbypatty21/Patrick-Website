// src/data/skillsdata.js
export const SKILLS_DATA = {
  'web-development': {
    title: 'Web Development',
    icon: 'bx-code',
    shortDesc: 'I can create simple web projects for you.',
    fullDesc: 'I specialize in full-stack web development, utilizing frameworks like React and Laravel to build scalable systems. My experience includes developing the official website for PCCI Valenzuela, 8con Academy, and the Little Lions SPED School Monitoring System.',
    projects: ['PCCI Valenzuela Website', '8con Academy Website', 'Little Lions SPED System'],
    tools: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/ffffff' }, // White icon for dark bg
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
      { name: 'Render', icon: 'https://cdn.simpleicons.org/render/ffffff' }, // White icon for dark bg
      { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/ffffff' }, // White icon for dark bg
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' }
    ]
  },
  'ui-ux': {
    title: 'UI/UX Design',
    icon: 'bx-palette',
    shortDesc: 'I can design User Interfaces and other Visuals.',
    fullDesc: 'I focus on creating intuitive, user-centered designs. I use modern CSS frameworks like Tailwind and Bootstrap to ensure that interfaces are not only beautiful but also responsive and accessible.',
    projects: ['Little Lions Academy UI', 'Santiago-Amancio Dental Clinic System'],
    tools: [
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' }
    ]
  },
  'game-development': {
    title: 'Game Development',
    icon: 'bx-android',
    shortDesc: "I can develop simple games based on the client's preferences.",
    fullDesc: 'Leveraging Unreal Engine and C#, I build immersive 3D experiences. My major work includes TriQuest, a gamified 3D RPG e-learning application.',
    projects: ['TriQuest (Capstone Project)'],
    tools: [
      { name: 'Unreal Engine', icon: 'https://cdn.simpleicons.org/unrealengine/ffffff' }, // White icon for dark bg
      { name: 'Blueprints', icon: 'https://cdn.simpleicons.org/epicgames/ffffff' }, // Using Epic Games logo as a stand-in for Blueprints
      { name: 'Blender', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg' },
      { name: 'Mixamo', icon: 'https://cdn.simpleicons.org/adobe/FF0000' }, // Mixamo is an Adobe product, using Adobe logo
      { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg' }
    ]
  }
};