import { v4 as uuidv4 } from 'uuid';
uuidv4();

import {
  logo1,
  logo2,
  blog_01,
  blog_02,
  blog_03,
  blog_04,
  admission_ads_img,
  news_01,
  news_02,
  news_03,
  affiliations_01,
  affiliations_02,
  affiliations_03,
  affiliations_04,
  affiliations_05,
  affiliations_06,
  affiliations_07,
  sponsor_01,
  sponsor_02,
  sponsor_03,
  sponsor_04,
  sponsor_05,
  sponsor_06,
  about_1,
  about_2,
  about_3,
  about_4,
  team_1,
} from '../assets';

export const navLinks = [
  {
    id: uuidv4(),
    title: 'Home',
    link: '/',
  },
  {
    id: uuidv4(),
    title: 'About Us',
    link: '/about',
  },
  {
    id: uuidv4(),
    title: 'Blogs & News',
    link: '/blogs',
  },
  {
    id: uuidv4(),
    title: 'Scholars',
    link: '/scholars',
  },
];

export const aboutSummary = [
  {
    id: uuidv4(),
    title: 'SCHOLARSHIP PROGRAM',
    description:
      'Support of education for underprivileged children to receive a quality education',
    imgSrc: blog_01,
    imgAlt: 'SCHOLARSHIP PROGRAM | PLS Scholarship Alumni Association Inc.',
    link: '#',
  },
  {
    id: uuidv4(),
    title: 'PLS PROJECTS',
    description:
      'Construction and renovation of schools and sanitary facilities',
    imgSrc: blog_02,
    imgAlt: 'PLS PROJECTS | PLS Scholarship Alumni Association Inc.',
    link: '#',
  },
  {
    id: uuidv4(),
    title: 'HUMANITARIAN AID',
    description:
      ' On-site help to local populations affected by natural disasters',
    imgSrc: blog_03,
    imgAlt: 'HUMANITARIAN AID | PLS Scholarship Alumni Association Inc.',
    link: '#',
  },
];

export const admissionAds = [
  {
    id: uuidv4(),
    txt_1: 'Accepting',
    txt_2: 'NEW',
    txt_3: 'Scholars',
    sy: 'SY 2022-2023',
    description: 'Full Scholarship for Students from Public Schools',
    imgSrc: admission_ads_img,
    imgAlt: 'Admission | PLS Scholarship Alumni Association Inc.',
    applyLink: '#',
    btnText: 'Apply Now',
    help_1: 'Looking for help? Get in touch with us:',
    help_2: '09267332616 | mail@philippinesluxembourgsociety.com',
  },
];

export const news = [
  {
    id: uuidv4(),
    title: 'Title One Lorem ipsum dolor amet',
    description:
      'Description One Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imgSrc: news_01,
    imgAlt: 'News One | PLS Scholarship Alumni Association Inc.',
    newsLink: '#',
  },
  {
    id: uuidv4(),
    title: 'Title Two Lorem ipsum dolor amet',
    description:
      'Description Two Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imgSrc: news_02,
    imgAlt: 'News Two | PLS Scholarship Alumni Association Inc.',
    newsLink: '#',
  },
  {
    id: uuidv4(),
    title: 'Title Three Lorem ipsum dolor amet',
    description:
      'Description Three Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imgSrc: news_03,
    imgAlt: 'News Three | PLS Scholarship Alumni Association Inc.',
    newsLink: '#',
  },
];

export const otherArticles = [
  {
    id: uuidv4(),
    title: 'Title One Lorem ipsum dolor',
    description:
      'Description One  Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et dolore magna aliqua.',
    imgSrc: news_01,
    imgAlt: 'News One | PLS Scholarship Alumni Association Inc.',
    newsLink: '#',
  },
  {
    id: uuidv4(),
    title: 'Title Two Lorem ipsum dolor',
    description:
      'Description Two Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et dolore magna aliqua.',
    imgSrc: news_02,
    imgAlt: 'News Two | PLS Scholarship Alumni Association Inc.',
    newsLink: '#',
  },
  {
    id: uuidv4(),
    title: 'Title Three Lorem ipsum dolor',
    description:
      'Description Three  Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et dolore magna aliqua.',
    imgSrc: news_02,
    imgAlt: 'News Three | PLS Scholarship Alumni Association Inc.',
    newsLink: '#',
  },
];

export const sponsors = [
  {
    id: uuidv4(),
    imgSrc: sponsor_01,
    imgAlt: 'ING | PLS Scholarship Alumni Association Inc.',
  },
  {
    id: uuidv4(),
    imgSrc: sponsor_02,
    imgAlt: 'Civitan | PLS Scholarship Alumni Association Inc.',
  },
  {
    id: uuidv4(),
    imgSrc: sponsor_03,
    imgAlt: 'Federex Potolin | PLS Scholarship Alumni Association Inc.',
  },
  {
    id: uuidv4(),
    imgSrc: sponsor_04,
    imgAlt: 'Quezon City University | PLS Scholarship Alumni Association Inc.',
  },
  {
    id: uuidv4(),
    imgSrc: sponsor_05,
    imgAlt: 'Quezon City University - BSIT | PLS Scholarship Alumni Association Inc.',
  },
  {
    id: uuidv4(),
    imgSrc: sponsor_06,
    imgAlt: 'Quezon City University - BSEM | PLS Scholarship Alumni Association Inc.',
  },
];

export const aboutUs = [
  {
    id: uuidv4(),
    txt_1: 'About Us',
    txt_2:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    imgBg: '../../assets/images/team.jpg',
  },
];

export const whoWeAre = [
  {
    id: uuidv4(),
    years_in_service: `<div class="flex mb-4">
    <span class="text-indigo-600 text-2xl font-bold mb-0"><span class="counter-value text-6xl font-bold" data-target="15">15</span>+</span>
    <span class="self-end font-medium ml-2">Years <br> in service</span>
    </div>`,
    txt_1: 'Who we are ?',
    txt_2:
      'The Philippines–Luxembourg Society (PLS) is a non-governmental organisation with the aim of helping underprivileged people in the Philippines. The priority focus of PLS is supporting the education of disadvantaged children, reconstruction of schools and sanitary facilities, as well as providing humanitarian aid during natural catastrophes.',
    imgSrc1: about_1,
    imgSrc2: about_2,
    imgSrc3: about_3,
    imgAlt: 'About Us | PLS Scholarship Alumni Association Inc.',
    link: '#',
    btnText: 'Contact us',
  },
];

export const whoWeAreTwo = [
  {
    id: uuidv4(),
    txt_1: ``,
    txt_2:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imgSrc: about_4,
    imgAlt: 'About Us | PLS Scholarship Alumni Association Inc.',
    link: '#',
  },
];

export const teamText = [
  {
    id: uuidv4(),
    txt_1: `Our Team`,
    txt_2: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."`,
  },
];

export const team = [
  {
    id: uuidv4(),
    fullname: `Federex Abarera Potolin`,
    position: `Software Engineer`,
    short_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imgSrc: team_1,
    imgAlt:
      'Federex Abarera Potolin | Former Scholar | PLS Scholarship Alumni Association Inc.',
    link: '#',
    fbLink: '#',
    instagramLink: '#',
    twitterLink: '#',
    linkedinLink: '#',
    fbLinkId: uuidv4(),
    instagramLinkId: uuidv4(),
    twitterLinkId: uuidv4(),
    linkedinLinkId: uuidv4(),
  },
  {
    id: uuidv4(),
    fullname: `Aenna Adriano`,
    position: `English Teacher`,
    short_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imgSrc: team_1,
    imgAlt:
      'Aenna Adriano | Former Scholar | PLS Scholarship Alumni Association Inc.',
    link: '#',
    fbLink: '#',
    instagramLink: '#',
    twitterLink: '#',
    linkedinLink: '#',
    fbLinkId: uuidv4(),
    instagramLinkId: uuidv4(),
    twitterLinkId: uuidv4(),
    linkedinLinkId: uuidv4(),
  },
  {
    id: uuidv4(),
    fullname: `Resty Abarera Potolin`,
    position: `Web Developer`,
    short_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imgSrc: team_1,
    imgAlt:
      'Resty Abarera Potolin | Former Scholar | PLS Scholarship Alumni Association Inc.',
    link: '#',
    fbLink: '#',
    instagramLink: '#',
    twitterLink: '#',
    linkedinLink: '#',
    fbLinkId: uuidv4(),
    instagramLinkId: uuidv4(),
    twitterLinkId: uuidv4(),
    linkedinLinkId: uuidv4(),
  },
  {
    id: uuidv4(),
    fullname: `Victor Abarera Potolin`,
    position: `Pogi`,
    short_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imgSrc: team_1,
    imgAlt:
      'Victor Abarera Potolin | Former Scholar | PLS Scholarship Alumni Association Inc.',
    link: '#',
    fbLink: '#',
    instagramLink: '#',
    twitterLink: '#',
    linkedinLink: '#',
    fbLinkId: uuidv4(),
    instagramLinkId: uuidv4(),
    twitterLinkId: uuidv4(),
    linkedinLinkId: uuidv4(),
  },
  {
    id: uuidv4(),
    fullname: `Federex Abarera Potolin`,
    position: `Software Engineer`,
    short_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imgSrc: team_1,
    imgAlt:
      'Federex Abarera Potolin | Former Scholar | PLS Scholarship Alumni Association Inc.',
    link: '#',
    fbLink: '#',
    instagramLink: '#',
    twitterLink: '#',
    linkedinLink: '#',
    fbLinkId: uuidv4(),
    instagramLinkId: uuidv4(),
    twitterLinkId: uuidv4(),
    linkedinLinkId: uuidv4(),
  },
  {
    id: uuidv4(),
    fullname: `Aenna Adriano`,
    position: `English Teacher`,
    short_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imgSrc: team_1,
    imgAlt:
      'Aenna Adriano | Former Scholar | PLS Scholarship Alumni Association Inc.',
    link: '#',
    fbLink: '#',
    instagramLink: '#',
    twitterLink: '#',
    linkedinLink: '#',
    fbLinkId: uuidv4(),
    instagramLinkId: uuidv4(),
    twitterLinkId: uuidv4(),
    linkedinLinkId: uuidv4(),
  },
  {
    id: uuidv4(),
    fullname: `Resty Abarera Potolin`,
    position: `Web Developer`,
    short_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imgSrc: team_1,
    imgAlt:
      'Resty Abarera Potolin | Former Scholar | PLS Scholarship Alumni Association Inc.',
    link: '#',
    fbLink: '#',
    instagramLink: '#',
    twitterLink: '#',
    linkedinLink: '#',
    fbLinkId: uuidv4(),
    instagramLinkId: uuidv4(),
    twitterLinkId: uuidv4(),
    linkedinLinkId: uuidv4(),
  },
  {
    id: uuidv4(),
    fullname: `Victor Abarera Potolin`,
    position: `Pogi`,
    short_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imgSrc: team_1,
    imgAlt:
      'Victor Abarera Potolin | Former Scholar | PLS Scholarship Alumni Association Inc.',
    link: '#',
    fbLink: '#',
    instagramLink: '#',
    twitterLink: '#',
    linkedinLink: '#',
    fbLinkId: uuidv4(),
    instagramLinkId: uuidv4(),
    twitterLinkId: uuidv4(),
    linkedinLinkId: uuidv4(),
  },
];

export const partnerText = [
  {
    id: uuidv4(),
    txt_1: `Our Team`,
    txt_2: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."`,
  },
];

export const partnersText = [
  {
    id: uuidv4(),
    txt_1: 'We believe in building each other and hence',
    txt_2: `Work with some amazing partners`,
    txt_3: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."`,
  },
];

export const partners = [
  {
    id: uuidv4(),
    fullname: `Federex Abarera Potolin`,
    position: `Software Engineer`,
    short_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imgSrc: team_1,
    imgAlt:
      'Federex Abarera Potolin | Former Scholar | PLS Scholarship Alumni Association Inc.',
    link: '#',
    fbLink: '#',
    instagramLink: '#',
    twitterLink: '#',
    linkedinLink: '#',
    fbLinkId: uuidv4(),
    instagramLinkId: uuidv4(),
    twitterLinkId: uuidv4(),
    linkedinLinkId: uuidv4(),
  },
  {
    id: uuidv4(),
    fullname: `Aenna Adriano`,
    position: `English Teacher`,
    short_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imgSrc: team_1,
    imgAlt:
      'Aenna Adriano | Former Scholar | PLS Scholarship Alumni Association Inc.',
    link: '#',
    fbLink: '#',
    instagramLink: '#',
    twitterLink: '#',
    linkedinLink: '#',
    fbLinkId: uuidv4(),
    instagramLinkId: uuidv4(),
    twitterLinkId: uuidv4(),
    linkedinLinkId: uuidv4(),
  },
  {
    id: uuidv4(),
    fullname: `Resty Abarera Potolin`,
    position: `Web Developer`,
    short_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imgSrc: team_1,
    imgAlt:
      'Resty Abarera Potolin | Former Scholar | PLS Scholarship Alumni Association Inc.',
    link: '#',
    fbLink: '#',
    instagramLink: '#',
    twitterLink: '#',
    linkedinLink: '#',
    fbLinkId: uuidv4(),
    instagramLinkId: uuidv4(),
    twitterLinkId: uuidv4(),
    linkedinLinkId: uuidv4(),
  },
  {
    id: uuidv4(),
    fullname: `Victor Abarera Potolin`,
    position: `Pogi`,
    short_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imgSrc: team_1,
    imgAlt:
      'Victor Abarera Potolin | Former Scholar | PLS Scholarship Alumni Association Inc.',
    link: '#',
    fbLink: '#',
    instagramLink: '#',
    twitterLink: '#',
    linkedinLink: '#',
    fbLinkId: uuidv4(),
    instagramLinkId: uuidv4(),
    twitterLinkId: uuidv4(),
    linkedinLinkId: uuidv4(),
  },
  {
    id: uuidv4(),
    fullname: `Federex Abarera Potolin`,
    position: `Software Engineer`,
    short_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imgSrc: team_1,
    imgAlt:
      'Federex Abarera Potolin | Former Scholar | PLS Scholarship Alumni Association Inc.',
    link: '#',
    fbLink: '#',
    instagramLink: '#',
    twitterLink: '#',
    linkedinLink: '#',
    fbLinkId: uuidv4(),
    instagramLinkId: uuidv4(),
    twitterLinkId: uuidv4(),
    linkedinLinkId: uuidv4(),
  },
  {
    id: uuidv4(),
    fullname: `Aenna Adriano`,
    position: `English Teacher`,
    short_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imgSrc: team_1,
    imgAlt:
      'Aenna Adriano | Former Scholar | PLS Scholarship Alumni Association Inc.',
    link: '#',
    fbLink: '#',
    instagramLink: '#',
    twitterLink: '#',
    linkedinLink: '#',
    fbLinkId: uuidv4(),
    instagramLinkId: uuidv4(),
    twitterLinkId: uuidv4(),
    linkedinLinkId: uuidv4(),
  },
  {
    id: uuidv4(),
    fullname: `Resty Abarera Potolin`,
    position: `Web Developer`,
    short_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imgSrc: team_1,
    imgAlt:
      'Resty Abarera Potolin | Former Scholar | PLS Scholarship Alumni Association Inc.',
    link: '#',
    fbLink: '#',
    instagramLink: '#',
    twitterLink: '#',
    linkedinLink: '#',
    fbLinkId: uuidv4(),
    instagramLinkId: uuidv4(),
    twitterLinkId: uuidv4(),
    linkedinLinkId: uuidv4(),
  },
  {
    id: uuidv4(),
    fullname: `Victor Abarera Potolin`,
    position: `Pogi`,
    short_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imgSrc: team_1,
    imgAlt:
      'Victor Abarera Potolin | Former Scholar | PLS Scholarship Alumni Association Inc.',
    link: '#',
    fbLink: '#',
    instagramLink: '#',
    twitterLink: '#',
    linkedinLink: '#',
    fbLinkId: uuidv4(),
    instagramLinkId: uuidv4(),
    twitterLinkId: uuidv4(),
    linkedinLinkId: uuidv4(),
  },
];


export const blogsText = [
  {
    id: uuidv4(),
    txt_1: 'Blogs & News',
    txt_2:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    imgBg:  '../../assets/images/blog/bg.jpg',
  },
];

export const blogsAndNews = [
  {
    id: uuidv4(),
    title: 'Banque Raiffeisen Donation 2018',
    short_description: 'On 28th May, PLS was awarded 5000€ by the Raiffeisen Bank Luxembourg. The Banque Raiffeisen regularly gives donations to local...',
    description:
      'Support of education for underprivileged children to receive a quality education',
    imgSrc: blog_04,
    imgAlt: 'SCHOLARSHIP PROGRAM | PLS Scholarship Alumni Association Inc.',
    link: '#',
  },
  {
    id: uuidv4(),
    title: 'Banque Raiffeisen Donation 2018',
    short_description: 'On 28th May, PLS was awarded 5000€ by the Raiffeisen Bank Luxembourg. The Banque Raiffeisen regularly gives donations to local...',
    description:
      'Support of education for underprivileged children to receive a quality education',
    imgSrc: blog_04,
    imgAlt: 'SCHOLARSHIP PROGRAM | PLS Scholarship Alumni Association Inc.',
    link: '#',
  },
  {
    id: uuidv4(),
    title: 'Banque Raiffeisen Donation 2018',
    short_description: 'On 28th May, PLS was awarded 5000€ by the Raiffeisen Bank Luxembourg. The Banque Raiffeisen regularly gives donations to local...',
    description:
      'Support of education for underprivileged children to receive a quality education',
    imgSrc: blog_04,
    imgAlt: 'SCHOLARSHIP PROGRAM | PLS Scholarship Alumni Association Inc.',
    link: '#',
  },
  {
    id: uuidv4(),
    title: 'Banque Raiffeisen Donation 2018',
    short_description: 'On 28th May, PLS was awarded 5000€ by the Raiffeisen Bank Luxembourg. The Banque Raiffeisen regularly gives donations to local...',
    description:
      'Support of education for underprivileged children to receive a quality education',
    imgSrc: blog_04,
    imgAlt: 'SCHOLARSHIP PROGRAM | PLS Scholarship Alumni Association Inc.',
    link: '#',
  },
];


export const scholarsText = [
  {
    id: uuidv4(),
    txt_1: 'Scholars',
    txt_2:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    imgBg: '../../assets/images/company/aboutus.jpg',
  },
];
