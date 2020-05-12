/* eslint-disable-next-line */
import React from 'react'
import Square from '../static/icons/header/square.svg'
import Triangle from '../static/icons/header/triangle.svg'
import Circle from '../static/icons/header/circle.svg'
import Arc from '../static/icons/header/arc.svg'
import PieChart from '../static/icons/header/pieChart.svg'
import Bag from '../static/icons/header/bag.svg'
import Computer from '../static/icons/header/computer.svg'
import Message from '../static/icons/header/message.svg'
import CPU from '../static/icons/header/cpu.svg'
import Repeat from '../static/icons/header/repeat.svg'
import LMS from '../static/icons/header/lms.svg'
import Tracker from '../static/icons/header/tracker.svg'

export default {
  menu: [
    {
      id: 'services',
      title: 'common:header.menu.services.title',
      links: [
        {
          id: 'outsourcing',
          icon: Circle,
          title: 'common:header.menu.services.outsourcing.title',
          description: 'common:header.menu.services.outsourcing.description',
          href: 'service/outsourcing-front-end',
        },
        {
          id: 'express',
          icon: Triangle,
          title: 'common:header.menu.services.express.title',
          description: 'common:header.menu.services.express.description',
          href: 'service/express-front-end',
        },
        {
          id: 'mvp',
          icon: Square,
          title: 'common:header.menu.services.mvp.title',
          description: 'common:header.menu.services.mvp.description',
          href: 'service/mvp-development',
        },
        {
          id: 'backend',
          icon: Arc,
          title: 'common:header.menu.services.backend.title',
          description: 'common:header.menu.services.backend.description',
          href: 'service/back-end-and-devops',
        },
      ],
    },
    {
      id: 'industries',
      title: 'common:header.menu.industries.title',
      links: [
        {
          id: 'fintech',
          icon: PieChart,
          title: 'common:header.menu.industries.fintech.title',
          href: 'industry/fintech',
        },
        {
          id: 'eCommerce',
          icon: Bag,
          title: 'common:header.menu.industries.eCommerce.title',
          href: 'industry/ecommerce',
        },
        {
          id: 'information',
          icon: Computer,
          title: 'common:header.menu.industries.information.title',
          href: 'industry/information-technology',
        },
        {
          id: 'mediaAndMarketing',
          icon: Message,
          title: 'common:header.menu.industries.mediaAndMarketing.title',
          href: 'industry/media-and-marketing',
        },
      ],
    },
    {
      id: 'howWeWork',
      title: 'common:header.menu.howWeWork.title',
      links: [
        {
          id: 'technologies',
          icon: CPU,
          title: 'common:header.menu.howWeWork.technologies.title',
          description: 'common:header.menu.howWeWork.technologies.description',
          href: 'tech-stack',
        },
        {
          id: 'processes',
          icon: Repeat,
          title: 'common:header.menu.howWeWork.processes.title',
          description: 'common:header.menu.howWeWork.processes.description',
          href: 'way-of-work',
        },
      ],
    },
    {
      id: 'products',
      title: 'common:header.menu.products.title',
      links: [
        {
          id: 'lms',
          icon: LMS,
          title: 'common:header.menu.products.lms.title',
          description: 'common:header.menu.products.lms.description',
          href: 'products/lms',
        },
        {
          id: 'tracker',
          icon: Tracker,
          title: 'common:header.menu.products.tracker.title',
          description: 'common:header.menu.products.tracker.description',
          href: 'https://tracker.csssr.com',
        },
      ],
    },
  ],
  links: [
    {
      title: 'common:header.links.blog.title',
      href: 'https://blog.csssr.com',
    },
    // {
    //   title: 'common:header.links.aboutUs.title',
    //   href: 'about-us',
    // },
    {
      title: 'common:header.links.careers.title',
      href: 'jobs',
    },
  ],
}
