import { ReactComponent as Facebook } from '../static/icons/facebook.svg'
import { ReactComponent as Linkedin } from '../static/icons/linkedin.svg'
import { ReactComponent as Instagram } from '../static/icons/instagram.svg'
import { ReactComponent as Youtube } from '../static/icons/youtube.svg'
import { ReactComponent as Soundcloud } from '../static/icons/soundcloud.svg'
import { ReactComponent as Telegram } from '../static/icons/telegram.svg'
import { ReactComponent as Twitter } from '../static/icons/twitter.svg'
import { ReactComponent as Vk } from '../static/icons/vk.svg'

export const socials = [
  {
    id: 'facebook',
    href: 'https://www.facebook.com/csssr',
    icon: Facebook,
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/company/csssr',
    icon: Linkedin,
  },
  {
    id: 'instagram',
    href: 'https://www.instagram.com/csssr.dev',
    icon: Instagram,
  },
  {
    id: 'youtube',
    href: 'https://www.youtube.com/channel/UCdkZ6ckHOJ3DjAYxoGeMG0w',
    icon: Youtube,
  },
  {
    id: 'soundcloud',
    href: 'https://soundcloud.com/csssr',
    icon: Soundcloud,
  },
  {
    id: 'telegram',
    href: 'https://t.me/csssr',
    icon: Telegram,
  },
  {
    id: 'twitter',
    href: 'https://twitter.com/csssr_dev',
    icon: Twitter,
  },
  {
    id: 'vk',
    href: 'https://vk.com/csssr_dev',
    icon: Vk,
  },
]

export const nav = [
  {
    id: 'services',
    links: [
      {
        id: 'outsourcing',
        href: 'service/outsourcing-front-end',
      },
      {
        id: 'backend',
        href: 'service/back-end-and-devops',
      },
      {
        id: 'mvp',
        href: 'service/mvp-development',
      },
      {
        id: 'design',
        href: 'service/design',
      },
    ],
  },
  {
    id: 'industries',
    links: [
      {
        id: 'fintech',
        href: 'industry/fintech',
      },
      {
        id: 'information',
        href: 'industry/information-technology',
      },
      {
        id: 'eCommerce',
        href: 'industry/ecommerce',
      },
      {
        id: 'mediaAndMarketing',
        href: 'industry/media-and-marketing',
      },
    ],
  },
  {
    id: 'howWeWork',
    links: [
      {
        id: 'technologies',
        href: 'tech-stack',
      },
      {
        id: 'wayOfWork',
        href: 'way-of-work',
      },
      {
        id: 'coreValues',
        href: 'core-values',
      },
      {
        id: 'projects',
        href: 'projects',
      },
    ],
  },
  {
    id: 'solutions',
    links: [
      {
        id: 'lms',
        href: 'solutions/lms',
      },
      {
        id: 'tracker',
        href: 'https://tracker.csssr.com',
      },
    ],
  },
  {
    id: 'company',
    links: [
      // {
      //   id: 'aboutUs',
      //   href: 'about-us',
      // },
      {
        id: 'careers',
        href: 'jobs',
        useLocale: true,
      },
      {
        id: 'blog',
        href: 'https://blog.csssr.com',
        useLocale: true,
      },
      {
        id: 'contacts',
        href: 'contacts',
        testId: 'Footer:link.contacts',
      },
    ],
  },
]
