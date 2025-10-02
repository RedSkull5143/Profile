const profileData = {
  title: "Resume",
  name: "Om Shinde",
  sub_title: "Software Development Engineer in Test",
  logoURL: "assets/images/dp.jpg",
  about: {
    intro: `SDET with expertise in Java, Selenium, TestNG, API Automation, and MERN stack. Skilled in building scalable automation frameworks and AI-powered test solutions to accelerate QA workflows, improve coverage, and enhance software quality. Passionate about leveraging automation and full-stack technologies to deliver robust, efficient, and high-quality software.`,
    contact: {
      email: "omshinde5143@gmail.com",
      phone: "+91-8625971620",
      address: "Mumbai, IN",
    },
  },
  links: [
    {
      title: "LinkedIn",
      src: "https://www.linkedin.com/in/shindeom/",
      iconClass: "fa-brands fa-linkedin-in",
    },
    {
      title: "Github",
      src: "https://github.com/RedSkull5143",
      iconClass: "fa-brands fa-github",
    }
  ],
  skills: [
    {
      title: "Languages",
      value: "Java, HTML5, CSS3, JavaScript",
    },
    {
      title: "Frameworks/Libraries",
      value: "Selenium WebDriver, Karate, TestNG, RestAssured, ReactJS, NodeJS-Express",
    },
    {
      title: "Automation & Testing",
      value: "Appium, Postman, Gradle",
    },
    {
      title: "DevOps & Others",
      value: "Git, Jenkins, Firebase, Figma"
    },
    {
      title: "Databases",
      value: "MongoDB, MySQL"
    }
  ],
  experiences: [
    {
      organization: "QualityKiosk Technologies Pvt. Ltd.",
      title: "SDET",
      client: "ICICI Lombard General Insurance",
      date: "Dec 2024 - Present",
      details: [
        `Implemented a robust <strong>API Automation Framework</strong> from scratch using <strong>Java, RestAssured, and TestNG</strong>, making it highly <strong>scalable and reliable</strong> for large regression suites.`,
        `Created a custom <strong>SMS Reading Application</strong> to handle OTP-based flows, streamlining authentication testing and reducing manual intervention.`,
        `Integrated automation into a <strong>CI/CD pipeline using Jenkins and Git</strong>, enabling faster execution, better visibility, and quicker releases.`,
        `Built reusable <strong>test components, utilities, and data-driven test strategies</strong> to speed up test development and reduce duplication.`,
        `Focused on <strong>test environment integration, bug isolation</strong>, and reducing flaky tests to ensure high-quality results and stable pipelines.`,
      ],
    },
    {
      organization: "QualityKiosk Technologies Pvt. Ltd.",
      title: `SDET Intern`,
      client: "Liberty General Insurance",
      date: "Jan 2024 - Dec 2024",
      details: [
        `Enhanced and optimized existing <strong>automation test scripts</strong> to improve execution time and maintainability.`,
        `Worked on automating key insurance workflows like <strong>policy generation, user login, form validation, and dashboard navigation</strong>.`,
        `Focused on building <strong>data-driven test cases</strong> and improving <strong>modular code structure</strong> for better scalability.`,
        `Collaborated with the QA team in identifying bugs, improving <strong>test coverage</strong>, and aligning scripts with evolving UI changes.`,
        `Gained practical experience in <strong>real-time project execution, debugging, and reporting</strong> within an Agile team setup.`
      ],
    },
    {
      organization: "Comtranse Technology",
      title: `Python Developer Intern`,
      date: "June 2023 - July 2023",
      details: [
        `Developed and maintained a <strong>Library Management System</strong> using <strong>Python</strong>, improving efficiency in <strong>book tracking, user management, and inventory control</strong>.`,
        `Designed and implemented <strong>user authentication and role-based access control</strong> for streamlined operations and data protection.`,
        `Built features for <strong>book issuance, return tracking, fine calculation</strong>, and <strong>report generation</strong>, enhancing system usability.`,
        `Worked on creating a clean and modular codebase with <strong>object-oriented programming principles</strong> for maintainability.`,
        `Integrated basic <strong>GUI components using Tkinter</strong> to improve user interaction and functionality.`
      ],
    },
  ],
  projects: [
    {
      title: "AI-Powered Test Case Generator",
      duration: "July 2025",
      desc: `Developed an <strong>AI-Powered Test Case Generator</strong> using the <strong>MERN stack</strong> with <strong>ChatGPT API integration</strong> to automatically create functional and regression test cases from requirement documents, reducing manual effort and improving coverage. Implemented a <strong>React-based UI</strong>, <strong>Node.js/Express backend</strong>, and <strong>MongoDB storage</strong>, which helped <strong>manual testers reduce execution time</strong> and accelerate QA workflows.`,
    },
    {
      title: "OTP Retreiver - Custom SMS Reader",
      duration: "March 2025",
      desc: `Developed a <strong>Custom SMS Reading Application</strong> to parse and manage <strong>OTP-based messages</strong> for automation workflows, reducing manual intervention and improving login/testing efficiency. Implemented a <strong>lightweight Android interface</strong> and <strong>backend integration</strong> to seamlessly feed OTPs into test scripts, which helped <strong>manual testers save time</strong> and streamline authentication testing.`,
    },
    {
      title: "Enhancing Hospitality through Geofencing",
      duration: "May 2023 - Dec 2023",
      desc: `Developed a <strong>geofencing-based system</strong> to elevate the guest experience by delivering <strong>personalized, location-aware services and notifications</strong> within a hotel environment.
      Integrated <strong>GPS-based triggers</strong> to automate check-in/check-out reminders, promotional alerts, and nearby facility suggestions. Implemented <strong>role-based access and admin panel</strong> for managing geofence zones, user logs, and real-time tracking.`,
    },
    {
      title: "Chat Application using MERN Stack",
      duration: "Aug 2022 - Apr 2023",
      desc: `Developed a <strong>real-time chat application</strong> using the <strong>MERN stack</strong> to facilitate smooth user-to-user messaging. Implemented key features such as <strong>user authentication, real-time message updates</strong> using <strong>Socket.io</strong>, and <strong>chat history storage</strong> in MongoDB. Added <strong>user presence indicators</strong> and <strong>typing status</strong> updates to enhance the interactive experience. Built a responsive and intuitive <strong>UI with React</strong>, enabling cross-device compatibility and seamless user experience.`,
    },
  ],
  education: [
    {
      alma: "D. Y. Patil College of Engineering & Technology, Kolhapur",
      duration: "2020 - 2024",
      std: "B.Tech. (Computer Science & Engineering)",
      score: "8.9 CGPA",
    },
    {
      alma: "Sai Internation & Jr. College, Gadhinglaj",
      duration: "2018 - 2020",
      std: "Class XI-XII (PCM)",
      score: "82.38 %",
    },
  ],
  events: [],
};
