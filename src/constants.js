// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import shadcn_logo from './assets/tech_logo/shadcn_logo.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import Render_logo from './assets/tech_logo/Render_logo.jpeg';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's
import spakes from './assets/company_logo/spakes.jpeg';

// Education Section Logo's
import qu from './assets/education_logo/qu.jpeg'
import bps from './assets/education_logo/bps.jpeg'



// Project Section Logo's
import excel_clone from './assets/work_logo/excel_clone.png'
import chat_App from './assets/work_logo/chat_App.png'
import White_Board from './assets/work_logo/White_Board.png'
import Weather from './assets/work_logo/Weather.png'
import vlc from './assets/work_logo/vlc.png'
import G_login from'./assets/work_logo/G_login.png'



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      {name:'shadcn',logo:shadcn_logo}
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      {name:'Render',logo:Render_logo}
      
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: spakes,
      role: "Fullstack Developer",
      company: "Tech Spakes",
      date: "June 2024 - July 2024",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
  
  
  ];
  
  export const education = [
    {
      id: 0,
      img: qu,
      school: "Quantum University",
      date: "Sept 2022 - July 2026",
      grade: "7.5 CGPA",
      desc: "Currently pursuing Bachelor of Technology (B.Tech) in Computer Science Engineering from Quantum University, Roorkee, with a focus on software development, data structures, algorithms, and modern technologies such as web development, databases, and cloud computing. The program is enhancing both theoretical knowledge and practical skills through hands-on projects, coding challenges, and collaborative learning.",
      degree: "Bachelor of Technology - B.tech",
    },

    {
      id: 1,
      img: bps,
      school: "Brilliant Public School Sitamarhi, Bihar",
      date: "Apr 2020 - March 2021",
      grade: "72%",
      desc: "I completed my class 12 education from Brilliant Public School, Sitamarhi, under the CBSE board,with Science stream (Physics, Chemistry, Mathematics), gaining a solid foundation in analytical and problem-solving skills. The curriculum emphasized core scientific concepts, logical reasoning, and mathematical applications, which helped in developing a disciplined and technical mindset essential for pursuing engineering and technology-focused higher education",
      degree: "CBSE(XII) - PCM ",
    },
    {
      id: 2,
      img: bps,
      school: "Brilliant Public School Sitamarhi, Bihar",
      date: "Apr 2018 - March 2019",
      grade: "80%",
      desc: "I completed my class 10 education from Brilliant Public School, Sitamarhi, under the CBSE board,  with a strong academic foundation, gaining essential knowledge in subjects like Mathematics, Science, English, and Social Studies. Developed critical thinking, problem-solving, and communication skills, laying the groundwork for future technical education and career growth.",
      degree: "CBSE(X), Science",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Excel Clone",
      description:
        "Developed a functional Excel-like spreadsheet application that allows users to perform basic data manipulation and formatting operations,Emphasized clean UI and real-time cell updates using JavaScript DOM manipulation without external libraries.",
      image: excel_clone,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Ashirwad-singh/Excel_clone",
      webapp: "https://ashirwad-singh.github.io/Excel_clone/",
    },
    {
      id: 1,
      title: "Chat App",
      description:
        "Built a real-time chat application enabling users to communicate instantly in public chat rooms.Integrated Socket.io for bidirectional real-time communication between client and server,Designed a responsive front-end UI for smooth chat experience across devices",
      image: chat_App,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Ashirwad-singh/CHAT_APP",
      webapp: "https://chat-app-frontend-jhfo.onrender.com",
    },
    {
      id: 2,
      title: "RealTime whiteBoard",
      description:
        "Developed a real-time collaborative whiteboard using HTML5 Canvas, JavaScript, Node.js, Express.js, and Socket.io, enabling multiple users to draw on a shared board simultaneously. Integrated features like freehand drawing, color and brush size selection, and real-time synchronization of strokes across clients. Used Express.js to serve the front-end and manage socket connections efficiently.",
      image: White_Board,
      tags: [ "HTML", "CSS", "JavaScript","Node.js","express.js","socket.io"],
      github: "https://github.com/Ashirwad-singh/RealTime_WhiteBoard",
      webapp: "https://ashirwad-singh.github.io/White_Board/",
    },
    {
      id: 3,
      title: "Weather App",
      description:
        "Weather App is a responsive web application built using HTML, CSS, and JavaScript that allows users to search for real-time weather information of any city. It fetches data from a public weather API and displays temperature, weather conditions, humidity, and wind speed with intuitive icons and styling. The app features a clean, user-friendly interface, error handling for invalid cities, and dynamically updates based on user input, making it both interactive and informative.",
      image: Weather,
      tags: ["HTML", "CSS", "JAVASCRIPT"],
      github: "https://github.com/Ashirwad-singh/WEATHER",
      webapp: "https://ashirwad-singh.github.io/WEATHER/",
    },
    {
      id: 4,
      title: "VLC-MEDIA-PLAYER",
      description:
        "VLC Media Player Clone is a custom-built media player designed using HTML, CSS, and JavaScript that mimics the core functionalities of the original VLC player. It supports audio and video playback with features like play/pause, volume control, seek bar, playback speed adjustment, and fullscreen toggle.",
      image: vlc,
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/Ashirwad-singh/VLC-MEDIA-PLAYER",
      webapp: "https://ashirwad-singh.github.io/VLC-MEDIA-PLAYER/",
    },
    {
      id: 5,
      title: "G_LOGIN",
      description:
        "Google Login (G_Login) is a secure authentication feature implemented using the MERN stack (MongoDB, Express.js, React.js, and Node.js) that allows users to sign in with their Google accounts. It integrates Google OAuth 2.0 for seamless and secure login, storing user information in a MongoDB database upon successful authentication. The frontend is built with React, offering a smooth UI experience, while the backend handles token verification and session management using Node.js and Express..",
      image: G_login,
      tags: ["React.js", "TaiwindCSS", "Node.js", "Express.js","MongoDB"],
      github: "https://github.com/Ashirwad-singh/G_LOGIN",
      webapp: "https://g-login-client.onrender.com",
    },
  ]