import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AI-Driven & Spec-Driven Documentation',
  tagline: 'Learn RAG, Spec-Driven Docs & AI Agents',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'rabiafareed', 
  projectName: 'ai-book',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/rabiafareed/ai-book/tree/main/',
        },
        blog: false, // optional, remove blog if not needed
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AI-Driven Docs',
      logo: {
        alt: 'AI Book Logo',
        src: 'img/logo.svg',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Start Reading'},
        {to: '/docs', label: 'All Chapters', position: 'left'},
        {to: '/docs/intro', label: 'About Project', position: 'left'},
        {href: 'https://github.com/rabiafareed/ai-book', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Book',
          items: [
            {label: 'Start Reading', to: '/docs/chapter01'},
            {label: 'All Chapters', to: '/docs'},
          ],
        },
        {
          title: 'About',
          items: [
            {label: 'Author', to: '/docs/intro'},
            {label: 'LinkedIn', href: 'https://www.linkedin.com/in/rabiafareed/'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'GitHub', href: 'https://github.com/rabiafareed/ai-book'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Rabia Fareed. All Rights Reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
