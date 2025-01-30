/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "James Lorence",
  title: "Hi Everyone, I'm James Lorence",
  subTitle: emoji(
    "A passionate Cybersecurity Engineer 🔒 with experience in both Red Teaming and Blue Teaming, leveraging tools like Burp Suite, Metasploit, Nmap, and Splunk. Dedicated to safeguarding individuals in cyberspace 🚀. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/13DZ5TJfdJ-QDUtLCQ65rfXznkfA-a3Nf/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/JamesLorencee",
  linkedin: "https://www.linkedin.com/in/jameslorenceseril/",
  gmail: "james.seril.12@gmail.com",
  medium: "https://medium.com/@james.seril.12",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Aspiring Cybersecurity Engineer professional with Red and Blue Team Fundamentals",
  skills: [
    emoji(
      "⚡ Securing Systems by Threat Detection and Analysis, IDS, IPS, and Incident Response"
    ),
    emoji("⚡ Conducting Web and Network Penetration Testing"),
    emoji(
      "⚡ Exploring the digital world of Cybersecurity"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "BurpSuite",
      fontAwesomeClassname: "fas fa-bug"
    },
    {
      skillName: "NMap",
      fontAwesomeClassname: "fas fa-eye"
    },
    {
      skillName: "Splunk",
      fontAwesomeClassname: "fas fa-laptop"
    },
    {
      skillName: "Metasploit",
      fontAwesomeClassname: "fas fa-skull-crossbones"
    },
    {
      skillName: "WireShark",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "SQL Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Azure Cloud",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
   
  ],
  display: true // Set false to hide this section, defaults to true
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Global Infrastructure Services Data Center Team Intern",
      company: "Trend Micro",
      companylogo: require("./assets/images/trendmicroLogo.png"),
      date: "Sep 2024 – Dec 2024",
      desc: "OS/SQL Maintenance and Installation",
      descBullets: [
        "Gained foundational knowledge of data center infrastructure, including server, storage, and networking functions.",
        "Developed expertise in OS/SQL installation, configuration, and management, including exposure to VMware and virtualization technologies.",
        "Assisted with system updates, patches, and troubleshooting, gradually advancing to independent OS/SQL lifecycle management.",
        "Reviewed and utilized internal documentation and online resources to enhance understanding of OS/SQL systems.",
        "Analyzed and proposed enhancements to OS/SQL installation and management processes, executing an improvement plan to optimize efficiency.",
        "Supported configuration and maintenance of SQL Server high-availability (HA) clusters, gaining hands-on experience with best practices."
      ]
    },
    {
      role: "Quality Assurrance Analyst Intern",
      company: "Infor PSSC.",
      companylogo: require("./assets/images/inforLogo.png"),
      date: "Sept 2023 – Dec 2024",
      desc: "Manual and Automation Tester",
      descBullets: [
        "Applied Scrum Framework by participating in Daily and Weekly scrum meetings",
        "Implemented software automation using XSS as TaaS (Testing as a Service) to streamline testing processes and improve efficiency.",
        "Developed and maintained detailed software documentation to support development and user understanding.",
        "Conducted comprehensive QA validation and testing to ensure software quality and reliability.",
        "Generated and managed comprehensive datasets to support analysis",
        "Acquired proficiency in C# with ASP.NET MVC framework for developing robust web applications."
      ]
    }
  ]
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications that I've gained over the past years",

  achievementsCards: [
    {
      title: "ISC2 Certified in Cybersecurity (CC)",
      subtitle:
        "Gained Foundational Knowledge on Security Principles, Security Incident Response, Incident Response, Business Continuity, Disaster Recovery, Access Control Management, Network Security, Security Operations",
      image: require("./assets/images/ISC2CCLogo.jpeg"),
      imageAlt: "ISC2 CC Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/1hNo-ZwtpwvrVgSlRI67gltAH3-f2CI_s/view?usp=sharing"
        },
      ]
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      subtitle:
        "Gained Knowledge on Cloud Concepts, Azure architecture and services, and Azure Management and Governance.",
      image: require("./assets/images/azurefundamentalsLogo.png"),
      imageAlt: "Azure Fundamentals Logo",
      footerLink: [
        {
          name: "View Certification Credentials",
          url: "https://learn.microsoft.com/en-us/users/jameslorencee/credentials/e77158d3447b7324?ref=https%3A%2F%2Fwww.linkedin.com%2F"
        }
      ]
    },
    {
      title: "Google Cybersecurity",
      subtitle:
        "Gained Knowledge and experience on Programming for cybersecurity tasks, Frameworks and controls that inform security operations, Using SIEM tools, Detecting and responding to incidents using an intrusion detection system, Performing packet capture and analysis.",
      image: require("./assets/images/googleLogo.png"),
      imageAlt: "Google Logo",
      footerLink: [
        {
          name: "View Certification Credentials",
          url: "https://learn.microsoft.com/en-us/users/jameslorencee/credentials/e77158d3447b7324?ref=https%3A%2F%2Fwww.linkedin.com%2F"
        }
      ]
    },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Red Teaming", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Blue Teaming",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "De La Salle University",
      logo: require("./assets/images/DLSULogo.png"),
      subHeader: "Bachelor of Science Major in Information Technology",
      duration: "June 2020 - February 2025",
      desc: "Took courses about Software Development, Web Security, Operating Systems, Database Administration, System Administration, and Networking",
      descBullets: [
        "Published Capstone Project about Internship Program System at DLSU Manila",
        "Consistent 1st Honors Dean Lister"
      ]
    },
    {
      schoolName: "La Salle College Antipolo",
      logo: require("./assets/images/lscaLogo.jpg"),
      subHeader: "Science, Technology, Engineering, and Math Strand",
      duration: "June 2018 - April 2020",
      desc: "Took courses about Basic Programming in C++",
      descBullets: ["Graduated Senior High School"]
    }
  ]
};



/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};


// Blogs Section

const blogSection = {
  title: "Writeups",
  subtitle:
    "Driven by a passion for staying updated on the latest cybersecurity news, I enjoy writing and sharing my knowledge to help others learn from my experiences",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false// Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Feel free to contact me and get in touch!",
  number: "+63 906 205 5134",
  email_address: "james.seril.12@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false// Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  workExperiences,
  educationInfo,
  techStack,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
