import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    avatar: {
        src: avatar,
        alt: 'Ethan Donovan'
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
        {
            text: 'Contact',
            href: '/contact'
        },
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
        {
            text: 'Contact',
            href: '/contact'
        },
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
        title: 'Hi there, welcome to my corner of the web!',
        text: "I'm **Katinka van Houwelingen**, a free lance artist, dedicated to the realms of arts and craft.\nMy approach involves embracing intuition, conducting just enough research, and leveraging aesthetics as a catalyst for exceptional prints.\nI have a profound appreciation for sophisticated art, visual design, and the principles of beauty.\n\nFeel free to explore some of my artistic endeavors on [Instagram](https://instagram.com/katinkprints).",
        image: {
            src: hero,
            alt: 'Dark horse on white paper. Title: Appalosa 2'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
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
