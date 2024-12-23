// docusaurus.config.js
import { themes as prismThemes } from 'prism-react-renderer'

module.exports = {
  title: 'Design System Documentation',
  tagline: 'Documentation for design systems',
  url: 'https://your-docusaurus-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'your-org', // Usually your GitHub org/user name.
  projectName: 'docusaurus-starter', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: prismThemes.oneLight,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: 'Design System',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      hideOnScroll: false,
      items: [
        {
          type: 'doc',
          docId: 'getting-started/getting-started',
          to: 'docs/getting-started/',
          activeBasePath: 'docs/getting-started',
          label: 'Getting Started',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'foundations/foundations',
          to: 'docs/foundations/',
          activeBasePath: 'docs/foundations',
          label: 'Foundations',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'components/components',
          to: 'docs/components/',
          activeBasePath: 'docs/components',
          label: 'Components',
          position: 'left',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
        {
          href: 'https://github.com/your-org/documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/your-org/documentation/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
