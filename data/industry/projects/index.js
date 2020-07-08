import projects_1 from './projects_1'
import projects_2 from './projects_2'

export const informationTechnologyProjects = {
  heading: (t) => t.industry.projects.heading,
  projectsItems: [
    {
      images: projects_1,
      imgAlt: (t) => t.industry.imgAlt.projects_1,
      heading: (t) => t.industry.projects.informationTechnologyPage.firstItem.heading,
      text: (t) => t.industry.projects.informationTechnologyPage.firstItem.text,
      className: 'first-item',
      numericData: [
        {
          numberData: (t) =>
            t.industry.projects.informationTechnologyPage.firstItem.numericData.firstItem.number,
          textData: (t) =>
            t.industry.projects.informationTechnologyPage.firstItem.numericData.firstItem.text,
        },
        {
          numberData: (t) =>
            t.industry.projects.informationTechnologyPage.firstItem.numericData.secondItem.number,
          textData: (t) =>
            t.industry.projects.informationTechnologyPage.firstItem.numericData.secondItem.text,
        },
      ],
      button: {
        title: (t) => t.industry.projects.informationTechnologyPage.firstItem.button.title,
        href: (t) => t.industry.projects.informationTechnologyPage.firstItem.button.href,
      },
    },
    {
      images: projects_2,
      imgAlt: (t) => t.industry.imgAlt.projects_2,
      heading: (t) => t.industry.projects.informationTechnologyPage.secondItem.heading,
      text: (t) => t.industry.projects.informationTechnologyPage.secondItem.text,
      className: 'second-item',
      direction: 'reverse',
      numericData: [
        {
          numberData: (t) =>
            t.industry.projects.informationTechnologyPage.secondItem.numericData.firstItem.number,
          textData: (t) =>
            t.industry.projects.informationTechnologyPage.secondItem.numericData.firstItem.text,
        },
        {
          numberData: (t) =>
            t.industry.projects.informationTechnologyPage.secondItem.numericData.secondItem.number,
          textData: (t) =>
            t.industry.projects.informationTechnologyPage.secondItem.numericData.secondItem.text,
        },
      ],
      button: {
        title: (t) => t.industry.projects.informationTechnologyPage.secondItem.button.title,
        href: (t) => t.industry.projects.informationTechnologyPage.secondItem.button.href,
      },
    },
    {
      images: projects_1,
      imgAlt: (t) => t.industry.imgAlt.projects_1,
      heading: (t) => t.industry.projects.informationTechnologyPage.mosoblgaz.heading,
      text: (t) => t.industry.projects.informationTechnologyPage.mosoblgaz.text,
      className: 'first-item',
      numericData: [
        {
          numberData: (t) =>
            t.industry.projects.informationTechnologyPage.mosoblgaz.numericData.firstItem.number,
          textData: (t) =>
            t.industry.projects.informationTechnologyPage.mosoblgaz.numericData.firstItem.text,
        },
        {
          numberData: (t) =>
            t.industry.projects.informationTechnologyPage.mosoblgaz.numericData.secondItem.number,
          textData: (t) =>
            t.industry.projects.informationTechnologyPage.mosoblgaz.numericData.secondItem.text,
        },
      ],
      button: {
        title: (t) => t.industry.projects.informationTechnologyPage.mosoblgaz.button.title,
        href: (t) => t.industry.projects.informationTechnologyPage.mosoblgaz.button.href,
      },
    },
    {
      images: projects_2,
      imgAlt: (t) => t.industry.imgAlt.projects_2,
      heading: (t) => t.industry.projects.informationTechnologyPage.brusnika.heading,
      text: (t) => t.industry.projects.informationTechnologyPage.brusnika.text,
      className: 'second-item',
      direction: 'reverse',
      numericData: [
        {
          numberData: (t) =>
            t.industry.projects.informationTechnologyPage.brusnika.numericData.firstItem.number,
          textData: (t) =>
            t.industry.projects.informationTechnologyPage.brusnika.numericData.firstItem.text,
        },
        {
          numberData: (t) =>
            t.industry.projects.informationTechnologyPage.brusnika.numericData.secondItem.number,
          textData: (t) =>
            t.industry.projects.informationTechnologyPage.brusnika.numericData.secondItem.text,
        },
      ],
      button: {
        title: (t) => t.industry.projects.informationTechnologyPage.brusnika.button.title,
        href: (t) => t.industry.projects.informationTechnologyPage.brusnika.button.href,
      },
    },
    {
      images: projects_1,
      imgAlt: (t) => t.industry.imgAlt.projects_1,
      heading: (t) => t.industry.projects.informationTechnologyPage.mindbox.heading,
      text: (t) => t.industry.projects.informationTechnologyPage.mindbox.text,
      className: 'first-item',
      numericData: [
        {
          numberData: (t) =>
            t.industry.projects.informationTechnologyPage.mindbox.numericData.firstItem.number,
          textData: (t) =>
            t.industry.projects.informationTechnologyPage.mindbox.numericData.firstItem.text,
        },
        {
          numberData: (t) =>
            t.industry.projects.informationTechnologyPage.mindbox.numericData.secondItem.number,
          textData: (t) =>
            t.industry.projects.informationTechnologyPage.mindbox.numericData.secondItem.text,
        },
      ],
      button: {
        title: (t) => t.industry.projects.informationTechnologyPage.mindbox.button.title,
        href: (t) => t.industry.projects.informationTechnologyPage.mindbox.button.href,
      },
    },
  ],
}
