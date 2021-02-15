export default [
  {
    id: 'services',
    title: (t) => t.common.header.menu.services.title,
    links: [
      {
        id: 'outsourcing',
        title: (t) => t.common.footer.services.outsourcing,
        href: 'service/outsourcing-front-end',
      },
      {
        id: 'backend',
        title: (t) => t.common.footer.services.backend,
        href: 'service/back-end-and-devops',
      },
      {
        id: 'mvp',
        title: (t) => t.common.footer.services.mvp,
        href: 'service/mvp-development',
      },
      {
        id: 'design',
        title: (t) => t.common.footer.services.design,
        href: 'service/design',
      },
    ],
  },
  {
    id: 'industries',
    title: (t) => t.common.footer.industries.title,
    links: [
      {
        id: 'fintech',
        title: (t) => t.common.footer.industries.fintech,
        href: 'industry/fintech',
      },
      {
        id: 'information',
        title: (t) => t.common.footer.industries.information,
        href: 'industry/information-technology',
      },
      {
        id: 'eCommerce',
        title: (t) => t.common.footer.industries.eCommerce,
        href: 'industry/ecommerce',
      },
      {
        id: 'mediaAndMarketing',
        title: (t) => t.common.footer.industries.mediaAndMarketing,
        href: 'industry/media-and-marketing',
      },
    ],
  },
  {
    id: 'howWeWork',
    title: (t) => t.common.header.menu.howWeWork.title,
    links: [
      {
        id: 'technologies',
        title: (t) => t.common.footer.howWeWork.technologies,
        href: 'tech-stack',
      },
      {
        id: 'processes',
        title: (t) => t.common.footer.howWeWork.wayOfWork,
        href: 'way-of-work',
      },
      {
        id: 'coreValues',
        title: (t) => t.common.footer.howWeWork.coreValues,
        href: 'core-values',
      },
      {
        id: 'projects',
        title: (t) => t.common.footer.howWeWork.projects,
        href: 'projects',
      },
    ],
  },
  {
    id: 'solutions',
    title: (t) => t.common.footer.solutions.title,
    links: [
      {
        id: 'lms',
        title: (t) => t.common.footer.solutions.lms,
        href: 'solutions/lms',
      },
      {
        id: 'tracker',
        title: (t) => t.common.footer.solutions.tracker,
        href: 'https://tracker.csssr.com',
      },
    ],
  },
  {
    id: 'company',
    title: (t) => t.common.footer.company.title,
    links: [
      // {
      //   id: 'about-us',
      //   title: (t) => t.common.footer.company.aboutUs,
      //   href: 'solutions/lms',
      // },
      {
        id: 'careers',
        title: (t) => t.common.footer.company.careers,
        href: 'jobs',
        useLocale: true,
      },
      {
        id: 'blog',
        title: (t) => t.common.footer.company.blog,
        href: 'https://blog.csssr.com',
        useLocale: true,
      },
      {
        id: 'contacts',
        title: (t) => t.common.footer.company.contacts,
        href: 'contacts',
      },
    ],
  },
]
