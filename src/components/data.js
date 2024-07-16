import Zodiac from '/public/projects/zodiac2.png'
import Estate from '/public/projects/real estate.png'
import Workout from '/public/projects/workout.png'
import Wex from "/public/projects/Wex.png"
import Auth from "../../public/projects/auth.png"

const projectsData = [
    {
        id: 0,
        title: "wex social media",
        summary: "A social media app using MERN stack technologies, it showcases a sleek UI design and robust user authentication. Users can seamlessly navigate, create, and delete posts, along with engaging through comments and likes. also Explore user profiles effortlessly !",
        link: "https://wex-media.onrender.com/",
        type: "featured project",
        img: Wex,
        github: "https://github.com/Rahim-lrb/mern-social-media-frontend"
    },
    {
        id: 1,
        title: "zodiac e-commerce",
        summary: "this E-commerce presents an attractive frontend , featuring detailed product listings and responsive design. Key functionalities include cart management and category filters",
        link: "https://ecommerce-zodiacs.vercel.app/",
        type: "featured project",
        img: Zodiac,
        github: "https://github.com/Rahim-lrb/reactJs_ecommerce_zodiacs"
    },
    {
        id: 2,
        title: "real estate landing page",
        summary: "The Frontend Real Estate Project boasts a visually appealing design, detailed property listings, and responsive layout. Planned upgrades include search features and user authentication. The project's code is on GitHub, utilizing HTML5, CSS3, JavaScript, Tailwind CSS, and AOS animation.",
        link: "https://real-estate-homyz.netlify.app/",
        type: "featured project",
        img: Estate,
        github: "https://github.com/Rahim-lrb/real-estate-website"
    },
    {
        id: 3,
        title: "workout-saver",
        summary: "a simple workout MERN app, It features a sleek interface with secure user authentication, allowing users to create and manage workouts. The platform ensures data persistence by securely storing workout data in the database and offers responsive design for seamless access across devices",
        link: "https://workout-nexus.netlify.app",
        type: "featured project",
        img: Workout,
        github: "https://github.com/Rahim-lrb/workout_frontend"
    },
    {
        id: 4,
        title: "authentication system",
        summary: "an advanced authentication system built with Next.js and NextAuth. It includes features such as Google and GitHub registration, password recovery, login, two-factor authentication (2FA), email verification, and an admin panel. The backend uses Prisma with a Neon database, and the frontend is styled with Shadcn and managed with React Hook Form",
        link: "https://auth-v5-system.vercel.app",
        type: "featured project",
        img: Auth,
        github: "https://github.com/Rahim-lrb/auth_v5_system"
    }
];
export default projectsData;
