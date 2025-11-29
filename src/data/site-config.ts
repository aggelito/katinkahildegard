import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://katinkahildegard.com',
    avatar: {
        src: avatar,
        alt: 'Katinka van Houwelingen'
    },
    title: 'Katinka van Houwelingen',
    subtitle: 'Artist',
    description: 'Artist from southern Sweden working mainly with linoleum prints.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Katinka van Houwelingen'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        // {
        //     text: 'Contact',
        //     href: '/contact'
        // },
        // {
        //     text: 'Projects',
        //     href: '/projects'
        // },
        // {
        //     text: 'Blog',
        //     href: '/blog'
        // },
        // {
        //     text: 'Tags',
        //     href: '/tags'
        // }
    ],
    footerNavLinks: [
        // {
        //     text: 'About',
        //     href: '/about'
        // },
        // {
        //     text: 'Contact',
        //     href: '/contact'
        // },
        // {
        //     text: 'Terms',
        //     href: '/terms'
        // },
        // {
        //     text: 'Download theme',
        //     href: 'https://github.com/JustGoodUI/dante-astro-theme'
        // }
    ],
    socialLinks: [
        // {
        //     text: 'Dribbble',
        //     href: 'https://dribbble.com/'
        // },
        {
            text: 'Instagram',
            href: 'https://instagram.com/katinkprints'
        },
        // {
        //     text: 'X/Twitter',
        //     href: 'https://twitter.com/'
        // }
    ],
    hero: {
        title: 'Welcome to my website!',
        text: "I'm **Katinka van Houwelingen**, a print making artist. This website is currently under construction but you can follow me on instagram [@katinkprints](https://instagram.com/katinkprints) to stay updated.\n\nUntil my webshop is up and running, you can contact me through email or send me a message on instagram if you're interested in buying a print.\n\nThank you for stopping by!",
        image: {
            src: hero,
            alt: 'Dark horse on white paper. Title: Appalosa 2'
        },
        actions: [
            // {
            //     text: 'Instagram',
            //     href: 'https://instagram.com/katinkprints',
            // }
        ]
    },
    // subscribe: {
    //     enabled: true,
    //     title: 'Subscribe to Dante Newsletter',
    //     text: 'One update per week. All the latest posts directly in your inbox.',
    //     form: {
    //         action: '#'
    //     }
    // },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
