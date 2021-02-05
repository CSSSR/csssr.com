const designerLaptop = require.context(
  '../../../public/images/project/common-pics/assurance/designerLaptop?csssr-images',
)
const designerEn = require.context(
  '../../../public/images/project/common-pics/assurance/designerEn?csssr-images',
)
const designerRu = require.context(
  '../../../public/images/project/common-pics/assurance/designerRu?csssr-images',
)

const projectLaptop = require.context(
  '../../../public/images/project/common-pics/assurance/projectLaptop?csssr-images',
)
const projectsEn = require.context(
  '../../../public/images/project/common-pics/assurance/projectsEn?csssr-images',
)
const projectsRu = require.context(
  '../../../public/images/project/common-pics/assurance/projectsRu?csssr-images',
)

export default {
  quality: {
    heading: (t) => t.project.gazpromNeft.assurance.heading,
    subheading: (t) => t.project.gazpromNeft.assurance.subheading,
    message: (t) => t.project.gazpromNeft.assurance.message,
  },
  roi: {
    percent: (t) => t.project.gazpromNeft.assurance.percent,
    label: (t) => t.project.gazpromNeft.assurance.label,
    description: (t) => t.project.gazpromNeft.assurance.description,
  },
  images: {
    laptopAlt: (t) => t.project.gazpromNeft.assurance.laptopAlt,
    designerLaptop: designerLaptop,
    designerEn: designerEn,
    designerRu: designerRu,
    designerAlt: (t) => t.project.gazpromNeft.assurance.designerAlt,
    projectLaptop: projectLaptop,
    projectsEn: projectsEn,
    projectsRu: projectsRu,
    projectsAlt: (t) => t.project.gazpromNeft.assurance.projectsAlt,
  },
}
