import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'about-component',
    title: 'About',
    translate: 'ABOUT',
    type: 'item',
    icon: 'heroicons-outline:information-circle', 
    url: '/dashboard/about', 
  },
  {
    id: 'adverts-component',
    title: 'Adverts',
    translate: 'ADVERTS',
    type: 'item',
    icon: 'heroicons-outline:document', 
    url: '/dashboard/adverts', 
  },
  {
    id: 'news-component',
    title: 'News',
    translate: 'NEWS',
    type: 'item',
    icon: 'heroicons-outline:document-text',
    url: '/dashboard/news'
  },
  {
    id: 'incentives-component',
    title: 'Incentives',
    translate: 'INCENTIVES',
    type: 'item',
    icon: 'heroicons-outline:globe-alt',
    url: '/dashboard/incentives'
  },
  {
    id: 'events-component',
    title: 'Events',
    translate: 'EVENTS',
    type: 'item',
    icon: 'heroicons-outline:calendar',
    url: '/dashboard/events'
  },
  {
    id: 'initiatives-component',
    title: 'Initiatives',
    translate: 'INITIATIVES',
    type: 'item',
    icon: 'heroicons-outline:hashtag',
    url: '/dashboard/initiatives'
  },
  {
    id: 'ecosystem-component',
    title: 'Ecosystem',
    translate: 'ECOSYSTEM',
    type: 'item',
    icon: 'heroicons-outline:cloud',
    url: '/dashboard/ecosystem'
  },
  {
    id: 'privacy-policy-component',
    title: 'Privacy Policy',
    translate: 'PRIVACYPOLICY',
    type: 'item',
    icon: 'heroicons-outline:eye-off',
    url: '/dashboard/privacy-policy'
  },
  {
    id: 'socials-component',
    title: 'socials',
    translate: 'SOCIALS',
    type: 'item',
    icon: 'heroicons-outline:chat',
    url: '/dashboard/socials'
  },
  // {
  //   id: 'latest-news-component',
  //   title: 'Latest News',
  //   translate: 'LATESTNEWS',
  //   type: 'item',
  //   icon: 'heroicons-outline:document',
  //   url: '/dashboard/latest-news'
  // },
  {
    id: 'info-portal-component',
    title: 'Info Portal',
    translate: 'INFOPORTAL',
    type: 'item',
    icon: 'heroicons-outline:document',
    url: '/dashboard/info-portal'
  },
  {
    id: 'logo-component',
    title: 'Logo',
    translate: 'LOGO',
    type: 'item',
    icon: 'heroicons-outline:document',
    url: '/dashboard/logo'
  },
];

export default navigationConfig;
