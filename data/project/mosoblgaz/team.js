import team_desktop_l from '../../../static/images/project/common-pics/desktop.l/team.png?responsive'
import team_desktop_m from '../../../static/images/project/common-pics/desktop.m/team.png?responsive'
import team_desktop_s from '../../../static/images/project/common-pics/desktop.s/team.png?responsive'
import team_tablet_all from '../../../static/images/project/common-pics/tablet.all/team.png?responsive'

import team_desktop_l_webp from '../../../static/images/project/common-pics/desktop.l/team.png?responsive_and_webp'
import team_desktop_m_webp from '../../../static/images/project/common-pics/desktop.m/team.png?responsive_and_webp'
import team_desktop_s_webp from '../../../static/images/project/common-pics/desktop.s/team.png?responsive_and_webp'
import team_tablet_all_webp from '../../../static/images/project/common-pics/tablet.all/team.png?responsive_and_webp'

const teamImages = {
  'desktop.l': { png: team_desktop_l, webp: team_desktop_l_webp },
  'desktop.m': { png: team_desktop_m, webp: team_desktop_m_webp },
  'desktop.s': { png: team_desktop_s, webp: team_desktop_s_webp },
  'tablet.all': { png: team_tablet_all, webp: team_tablet_all_webp },
}

export default {
  images: teamImages,
  heading: (t) => t.project.mosoblgaz.team.title,
  teamItems: [
    {
      number: (t) => t.project.mosoblgaz.team.numberList.firstItem,
      text: (t) => t.project.mosoblgaz.team.textList.firstItem,
    },
    {
      number: (t) => t.project.mosoblgaz.team.numberList.secondItem,
      text: (t) => t.project.mosoblgaz.team.textList.secondItem,
    },
    {
      number: (t) => t.project.mosoblgaz.team.numberList.thirdItem,
      text: (t) => t.project.mosoblgaz.team.textList.thirdItem,
    },
    {
      number: (t) => t.project.mosoblgaz.team.numberList.fourthItem,
      text: (t) => t.project.mosoblgaz.team.textList.fourthItem,
    },
  ],
  imgAlt: (t) => t.project.mosoblgaz.team.imgAlt,
}
