import event1 from '../images/event management/1.png'
import event2 from '../images/event management/2.png'
import event3 from "../images/event management/3.png"
import event4 from "../images/event management/4.png"
import event5 from "../images/event management/5.png"
import event6 from "../images/event management/6.png"
import event7 from "../images/event management/7.png"
import event8 from "../images/event management/8.png"

import quan1 from "../images/quantum/1.png"
import quan2 from "../images/quantum/2.png"
import quan3 from "../images/quantum/3.png"
import quan4 from "../images/quantum/4.png"
import quan5 from "../images/quantum/5.png"
import quan6 from "../images/quantum/6.png"

import shop1 from "../images/shop/1.jpg"
import shop2 from "../images/shop/2.jpg"
import shop3 from "../images/shop/3.jpg"
import shop4 from "../images/shop/4.jpg"
import shop5 from "../images/shop/5.jpg"
import shop6 from "../images/shop/6.jpg"

import naresh1 from "../images/naresh/1.png"

import spacex1 from "../images/spacex/1.png"

import srimurugan1 from "../images/srimurugan/1.png"

import event from "../images/event management/profile.jpg"
import quantum from "../images/quantum/profile.jpg"
import todo from "../images/todo/profile.jpeg"
import ecom from "../images/ecom/profile.jpg"
import local from "../images/shop/profile.jpg"
import naresh from "../images/naresh/profile.png"
import construction from "../images/srimurugan/profile.jpg"
import modular from "../images/spacex/profile.jpg"
const projects = [
  {
    id: 1,
    profile:event,
    title: "Event Management Website",
    description: [`An Event Management website for event managers is a specialized platform designed to assist event
management professionals in planning, organizing, and executing events of various types and sizes.`, `It serves as a central hub where event managers can streamline their tasks, collaborate with clients,
manage event details, and promote their services.
`, `Event Management website has two different module for both event managers and guest or clients
`, `The website typically includes a range of features and functionalities tailored to meet the specific
needs of event managers.
`, `Key features : Event Listings | Contact and Inquiry Form | Responsive Design | Guest or Client login or
dashboard using event code | Testimonials | Event Gallery and some other basic features`],
    technologies: ["MERN Stack", "Bootstrap", "RESTful APIs"],
    role: "Full Stack Developer",
    frontendCode: "",
    demoLink: "",
    backendCode: "",
    images: [event1,event2,event3,event4,event5,event6,event7,event8]
  },
  {
    id: 2,
    title: "Quantum Simulator",
    profile:quantum,
    description: [`Architected a React-based web application to simulate quantum computing operations with React MUI, Tailwind CSS, CSS, and SASS; decreased simulation time by 30% and increased user engagement by 15%.`,`Implemented user management, code submission, performance metrics display, and downloadable content features, ensuring scalable solutions. Successfully deployed and currently utilized by the Defence Research and Development Organisation (DRDO).`,`Enhanced performance metrics display led to a 25% improvement in user understanding of quantum computing principles.`],
    technologies: ["React", "Material-UI", "Tailwind CSS"],
    role: "Frontend Developer",
    frontendCode: "",
    demoLink: "",
    backendCode: "",
    images: [quan1,quan2,quan3,quan4,quan5,quan6]
  },
  {
    id: 3,
    profile:todo,
    title: "To do list",
    description: [`Built a robust To Do List application using Node.js, Express, and MongoDB to facilitate efficient
task management and organization. This web application empowers users to create, update, and
delete tasks, providing a seamless and intuitive experience for effective task tracking`, `Implemented Create, Read, Update, and Delete (CRUD) operations for tasks, allowing users to add
new tasks, mark them as complete, edit details, and remove completed tasks`, `Integrated user authentication to ensure secure access and personalized task management. Users
can create accounts, log in, and maintain their individual task lists.
`, `Leveraged MongoDB as the database to ensure efficient data storage and retrieval, enhancing the
scalability and performance of the application.`],
    technologies: ["Node js", "Express js", "Mongo Db"],
    role: "Backend Developer",
    frontendCode: "",
    demoLink: "",
    backendCode: "https://github.com/Vigneshmunikannan/todolist_backendapis",
    images: []
  },
  {
    id: 4,
    profile:ecom,
    title: "E-Commerce Website for Visually Impaired",
    description: [`The website aims to provide an inclusive and user-friendly online shopping experience for
individuals with visual impairments.`, `The website will utilize assistive technologies such as screen readers and text-to-speech
functionality to enable visually impaired users to browse product descriptions ,pricing information,
and other relevant content.`, `Key features : Accessible User Interface | Alt Text for Images | Text-to-Speech Functionality | Voice
Search and Commands | High-Contrast Mode | Responsive Design.
`, ``],
    technologies: ["MERN Stack", "RESTful APIs", "CSS",],
    role: "Full Stack Developer",
    frontendCode: "https://github.com/Vigneshmunikannan/ecom-visually-impaired/tree/main/Desktop/NGP%20hackathan/frontend",
    demoLink: "",
    backendCode: "",
    images: []
  },
  {
    id: 5,
    title: "Website for local shop",
    profile:local,
    description: [`A comprehensive Local Shop Management System using the MERN stack, facilitating seamless
interaction between shopkeepers and customers. The system includes two distinct modules, one for
shopkeepers and another for customers, enhancing the overall shopping experience.
`,`Shopkeeper Module: Easily add, update, and remove products with details such as name, price, and
availability`,`Notification System: Instantly receive notifications for new orders, ensuring timely processing and
delivery. Receive notifications for order confirmation.
`,`Customer Module: Intuitive design for product selection, and order placement.
`],
    technologies: ["MERN Stack", "RESTful APIs", "CSS", "Google cloud"],
    role: "Full Stack Developer",
    frontendCode: "https://github.com/Vigneshmunikannan/shopcilent",
    demoLink: "",
    backendCode: "https://github.com/Vigneshmunikannan/shop-backend",
    images: [shop1,shop2,shop3,shop4,shop5,shop6]
  },
  {
    id: 6,
    title: "Actor Portfolio Website",
    profile:naresh,
    description: [`An engaging and visually appealing portfolio website for a renowned Tamil Nadu serial actor,
showcasing their career achievements, portfolio, and fan interactions. The website is built using
React for dynamic content rendering and Tailwind CSS for a modern and responsive design.`,`Implemented React components to dynamically showcase the actor's extensive portfolio, including
serials, movies, and notable performances.
`,`Utilized React Router for seamless navigation, providing users with a smooth and intuitive browsing
experience`],
    technologies: ["React js", "CSS", "Google Apis", "Tailwind", "VPS Server"],
    role: "Frontend Developer",
    frontendCode: "https://github.com/Vigneshmunikannan/Naresh-Eswar",
    demoLink: "https://naresheswar.in/",
    backendCode: "",
    images: [naresh1]
  },
  {
    id: 7,
    title: "Construction Company Website",
    profile:construction,
    description: [`A modern and user-friendly website for a construction company using React.js, enhancing their online
presence and brand visibility.
`,`Implemented responsive design principles to ensure seamless user experience across various
devices, contributing to increased user engagement and retention.
`,`Incorporated interactive features and intuitive navigation to showcase the company's portfolio,
services, and project galleries effectively, attracting potential clients and driving business growth`],
    technologies: ["CSS", "Tailwind", "React"],
    role: "Frontend Developer",
    frontendCode: "https://github.com/Vigneshmunikannan/sri-murugan-builders",
    demoLink: "https://vigneshmunikannan.github.io/sri-murugan-builders/",
    backendCode: "",
    images: [srimurugan1]
  },
  {
    id: 8,
    title: "Modular Office Interior & Furniture Website",
    profile:modular,
    description: [`A fully responsive website to ensure an optimal viewing experience across various devices, including
desktops, tablets, and smartphones.`,`Dedicated project galleries featuring high-quality images and descriptions for each modular office
interior and furniture project. Users can explore detailed views and gain insights into the design
process.
`,`Included a user-friendly contact form for potential clients and collaborators to inquire about services,
request quotes, or initiate project discussions,
services, and project galleries effectively, attracting potential clients and driving business growth`],
    technologies: ["CSS", "Tailwind", "React"],
    role: "Frontend Developer",
    frontendCode: "https://github.com/Vigneshmunikannan/spaceX",
    demoLink: "https://vigneshmunikannan.github.io/spaceX/",
    backendCode: "",
    images: [spacex1]
  },
];

export default projects;
