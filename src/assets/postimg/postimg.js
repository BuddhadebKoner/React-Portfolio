const img1 = 'https://i.ibb.co/YN9TBD3/img7.webp'
const img2 ='https://i.ibb.co/10q2XB5/img6.jpg'
const img3 ='https://i.ibb.co/S5qK4qH/img5.jpg'
const img4 ='https://i.ibb.co/f1cRzPr/img4.jpg'
const img5 ='https://i.ibb.co/3m2YjW6/img3.jpg'
const img6 ='https://i.ibb.co/pfPvtYT/img2.jpg'
const img7 ='https://i.ibb.co/NWS58yL/img1.jpg'

import instagram from './mediaimg/instagram.png'
import x from './mediaimg/x.png'
import linkedin from './mediaimg/linkedin.png'

export const assets = {
    post7: {
        title: "World Yoga Day",
        date: "21 June 2024",
        image: img7,
        description: "Bending under the stars and lights, finding balance in nature. 🌟🌳 #Arch",
        links: "https://www.instagram.com/p/C8cSJTGSB0o/?img_index=1",
        profilelink: "https://www.instagram.com/p/C8cSJTGSB0o/?img_index=1",
        media: instagram,
        likes: 0,
    },

    post6: {
        title: "We are a team",
        date: "3 June 2024",
        image: img6,
        description: "United in team, unstoppable in spirit! When we come together, we achieve greatness beyond imagination.",
        links: "https://www.linkedin.com/feed/update/urn:li:activity:7203268806801039360?utm_source=share&utm_medium=member_desktop",
        profilelink: "https://www.linkedin.com/in/debesh-mondal-999167296/",
        media: linkedin,
        likes: 0,
    },
    post5: {
        title: "Pro Tips & Tricks",
        date: "31 March 2024",
        image: img5,
        description: "Dive into JavaScript's hidden treasures with these 10 expert tips! 💎 Unlock the power of code creativity. Credit to @ChatGPT.",
        links: "https://www.linkedin.com/feed/update/urn:li:activity:7179686817972072449/",
        profilelink: "https://www.linkedin.com/in/buddhadeb-koner-8501b3231/",
        media: linkedin,
        likes: 0,
    },
    post4: {
        title: "Ubantu 22.10",
        date: "23 March 2024",
        image: img1,
        description: "Discover your coding potential with Ubuntu 23.10! Elevate your skills with its seamless interface, simplified setup, bulletproof security, and abundant toolset including Python and Java. Benefit from community support and personalize your coding environment. Join us in conquering the coding realm together!🚀💻",
        links: "https://www.linkedin.com/posts/buddhadeb-koner-8501b3231_unleash-your-coding-potential-with-ubuntu-activity-7177013167292657664-uucE?utm_source=share&utm_medium=member_desktop",
        profilelink: "https://www.linkedin.com/in/buddhadeb-koner-8501b3231/",
        media: linkedin,
        likes: 0,
    },
    post3: {
        title: "Lets contribute in Open Souse",
        date: "27 March 2024",
        image: img2,
        description: "🌟 Seeking Open Source Mentorship Dear connections, I'm new to open-source and would love to learn from experienced software engineer like you. Any tips or advice you could share would be greatly appreciated. Let connect and embark on this journey together!",
        links: "https://x.com/buddhadeb_koner/status/1773667227218178145?t=Qou96v25V7na_-VzTvrCaA&s=09",
        profilelink: "",
        media: x,
        likes: 0,
    },
    post2: {
        title: "Food Delivery WebApp Only UI",
        date: "20 Jan 2024",
        image: img3,
        description: "I'm pleased to share the Food Delivery Web App Frontend UX project that I worked on. All sources are available on GitHub. It is not responsive at the moment, so please open it on a desktop.",
        links: "https://www.linkedin.com/feed/update/urn:li:activity:7151978062903922688/",
        profilelink: "https://www.linkedin.com/in/buddhadeb-koner-8501b3231/",
        media: linkedin,
        likes: 0,
    },
    post1: {
        title: "Lets Enjoy Life",
        date: "27 sept 2023",
        image: img4,
        description: "Lost in the beauty of the sky and the serenity of campus life. 🌸✨",
        links: "https://www.instagram.com/p/CxshPSsITG8/?igsh=MTIwM2cxN2hoMzNudg==",
        profilelink: "https://twitter.com/buddhadeb_koner",
        media: instagram,
        likes: 0,
    },
};


export const numberOfAssets = Object.keys(assets).length;
