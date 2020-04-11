import { css } from '@emotion/core'
import calcRem from '../../utils/style/calcRem'

const base = css`
    & {
        margin-top: ${calcRem(-89)};
    }

    .no-wrap {
      white-space: nowrap;
    }
    
    .greeting {
        margin-top: 100px;
    }

    .greeting-perforator {
        text-transform: uppercase;
        grid-column: 2 / span 5;
    }

    .greeting h1 {
        margin-top: 20px;
        grid-column: 2 / span 5;
    }

    .greeting-description {
        margin-top: 40px;
        grid-column: 8 / span 4;
    }

    .greeting-image {
        grid-column: 3 / span 9;
        display: block;
        margin-top: 10px;
    }

    .greeting-image img {
        max-width: 100%;
        height: auto;
    }
    
    .modules {
        margin-top: 150px;
    }

    .modules-heading {
        grid-column: 1 / span 12;
        text-align: center;
    }

    .module-image-left {
        grid-column: 2 / span 3;
        margin-top: 60px;
        display: block;
    }   

    .module-image-right {
        grid-column: 7 / span 4;
        margin-top: 70px;
        display: block;
    }

    .module-image img {
        max-width: 100%;
        height: auto;
    }

    .module-title {
        margin-top: 113px;
    }

    .module-title-right {
        grid-column: 5 / span 5;
    }

    .module-title-left {
        margin-top: 160px;
        grid-column: 3 / span 4;
    }

    .module-title p{
        margin-top: 20px;
    }

    .module-subdescription-right {
        grid-column: 5 / span 6;
    }

    .module-subdescription-left {
        margin-top: 40px;
        grid-column: 4 / span 5;
    }

    .subdescription-first {
        margin-top: 0px;
    }

    .subdescription-next {
        margin-top: 20px;
    }

    .subdescription-first-tablet {
        margin-top: 40px;
    }

    .features {
        margin-top: 160px;
    }

    .features-heading {
        text-align: center;
        grid-column: 1 / span 12;
        margin-bottom: 70px;
    }

    .features-lines {
        grid-column: 2 / span 2;
        display: block;
    }

    .features-lines img {
        max-width: 100%;
        height: auto;
    }

    .features-line-management {
        margin-top: 20px;
        margin-bottom: 0;
    }

    .features-line-administration,
    .features-line-learning {
        margin-top: 80px;
        margin-bottom: 0;
    }

    .features-description {
        grid-column: 5 / span 3;
    }

    .features-description-second,
    .features-description-third {
        margin-top: 72px;
    }

    .features-list-second,
    .features-list-third {
        margin-top: 72px;
    }

    .features-list {
        /* margin-top: 24px; */
        grid-column: 9 / span 3;
    }

    .features-list li:not(:first-child) {
        margin-top: 16px;
    }

    .design {
        margin-top: 155px;
        padding-top: 120px;
        padding-bottom: 80px;
        background-color: #EEf0f6;
    }

    .design-content {
        grid-column: 2 / span 4;
    }

    .design-desription-second-first {
        margin-top: 40px;
    }

    .design-description-second {
        margin-top: 0px;
    }

    .design-buttons {
        margin-top: 44px;
    }

    .design-buttons-row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .design-buttons-row:last-child {
        margin-top: 25px;
    }

    .design-button:nth-child(even) {
        margin-left: 25px;  
    }

    .design-image {
        grid-column: 6 / span 7;
        margin-top: 0;
        display: block;
    }

    .design-image img {
        max-width: 100%;
        height: auto;
    }

    .banner {
        margin-top: 150px;
        margin-bottom: 175px;
    }

    .banner-title {
        grid-column: 3 / span 4;
        text-align: center;
    }

    .banner-button {
        margin-top: 0px;
        padding-bottom: 15px;
        padding-top: 16px;
        grid-column: 7 / span 4;
        text-align: center;
        text-decoration: none;
        border: 1px solid #4a4a4a;
        transition: all 0.1s ease-in;
    }

    .banner-button:hover {
        border: 1px solid #0071F4;
        color: #0071F4;
        cursor: pointer;
    }

    .team-subheading {
        grid-column: 1 / span 12;
        text-align: center;
    }

    .team-title {
        margin-top: 14px;
        margin-bottom: 40px;
        grid-column: 1 / span 12;
        text-align: center;
    }

    .team-image {
        grid-column: 1 / span 12;
        position: relative;
        display: block;
    }

    .team-image img::before{
        content: '';
        position: absolute;
        bottom: 26px;
        left: calc(100vw - 1fr);
        /* left: 0); */
        right: 0;
        width: 100vw;
        height: 4px;
        z-index: 0;
        background-image: url(../../static/elearning-platform/icons/team-line.svg);
        /* background-position: center;
        background-repeat: repeat-x;
        background-size: cover; */
    }

    .team-image img {
        /* height: 350px; */
        z-index: 2;
        width: 100%;
    }

    .team-description {
        margin-top: 40px;
        grid-column: 4 / span 6;
    }

    .team-specialists {
        margin-top: 80px;
        grid-column: 5 / span 2;
    }

    .team-projects {
        margin-top: 80px;
        grid-column: 8 / span 2;
    }

    .team-specialists img,
    .team-projects img {
        max-width: 100%;
        height: auto;
    }

    .advanced-features {
        margin-top: 80px;
        padding-top: 80px;
        padding-bottom: 80px;
        background-color: #EEf0f6;
    }

    .advanced-features-title {
        grid-column: 2 / span 4;
    }

    .advanced-feature-image {
        margin-top: 90px;
        grid-column: 2 / span 5;
        display: block;
    }

    .advanced-feature-image img {
        max-width: 100%;
        height: auto;
    }

    .advanced-feature-description {
        margin-top: 125px;
        grid-column: 7 / span 4;
    }

    .advanced-feature-description p {
        margin-top: 24px;
    }

    .advanced-feature-buttons {
        position: relative;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: flex-start;
    }

    .advanced-feature-buttons > div {
        margin-top: 120px;
        transition: all 0.1s ease-out;
    }

    .advanced-feature-buttons > div:hover {
        margin-top: 100px;
    }

    @media screen and (max-width: 1492px) {
        .advanced-feature-image {
            grid-column: 1 / span 5;
        }

        .advanced-feature-description {
            grid-column: 7 / span 5;
        }

        .module-image-right {
            margin-top: 120px;
        }
    }

    @media screen and (max-width: 1232px) {
        .greeting-perforator {
            text-transform: uppercase;
            grid-column: 1 / span 7;
        }

        .greeting h1 {
            margin-top: 20px;
            grid-column: 1 / span 7;
        }

        .greeting-description {
            margin-top: 40px;
            grid-column: 9 / span 4;
        }

        .greeting-image {
            grid-column: 2 / span 9;
        }

        .greeting-description {
            margin-top: 40px;
        }

        .module-image-left {
            grid-column: 1 / span 3;
        }  

        .module-image-right {
            grid-column: 8 / span 4;
            margin-top: 140px;
        }

        .module-title-right {
            grid-column: 4 / span 7;
        }

        .module-title-left {
            margin-top: 160px;
            grid-column: 1 / span 7;
        }

        .module-subdescription-right {
            grid-column: 4 / span 7;
        }

        .module-subdescription-left {
            grid-column: 1 / span 7;
        }

        .subdescription-first {
            margin-top: 40px;
        }

        .features {
            margin-top: 120px;
        }

        .features-heading {
            margin-bottom: 120px;
        }

        .features-list {
            grid-column: 9 / span 4;
        }

        .features-description p {
            margin-top: 20px;
        }

        .design-content {
            grid-column: 1 / span 5;
        }

        .design-image {
            margin-top: 80px;
            grid-column: 7 / span 6;
        }

        .design-button:nth-child(even) {
            margin-left: 40px;  
        }

        .banner {
            margin-top: 100px;
            margin-bottom: 100px;
        }

        .banner-title {
            grid-column: 2 / span 4;
        }

        .banner-button {
            grid-column: 7 / span 5;
        }

        .team-description {
            grid-column: 4 / span 7;
        }

        .team-specialists {
            margin-top: 60px;
            grid-column: 4 / span 2;
        }

        .team-projects {
            margin-top: 60px;
            grid-column: 7 / span 2;
        }

        .advanced-features-title {
            grid-column: 2 / span 5;
        }

        .advanced-feature-image {
            /* margin-top: 90px; */
            grid-column: 1 / span 5;
        }

        .advanced-feature-description {
            margin-top: 80px;
            grid-column: 7 / span 6;
        }

        .advanced-feature-buttons > div {
            margin-top: 100px;
        }

        .advanced-feature-buttons > div:hover {
            margin-top: 80px;
        }
    }

    @media screen and (max-width: 944px) {
        .greeting {
            margin-top: 100px;
        }

        .greeting-perforator {
            text-transform: uppercase;
            grid-column: 1 / span 7;
        }

        .greeting h1 {
            margin-top: 20px;
            grid-column: 1 / span 7;
        }

        .greeting-description {
            margin-top: 40px;
            grid-column: 9 / span 4;
        }

        .greeting-image {
            grid-column: 2 / span 9;
        }

        .greeting-description {
            margin-top: 20px;
        }

        .modules {
            margin-top: 80px;
        }

        .module-image-left {
            grid-column: 2 / span 2;
            margin-top: 40px;
        }   

        .module-title {
            margin-top: 60px;
        }

        .module-title p{
            margin-top: 10px;
        }

        .module-title-right {
            grid-column: 4 / span 6;
        }

        .subdescription-first {
            margin-top: 10px;
        }

        .subdescription-first-tablet {
            margin-top: -50px;
        }

        .module-image-right {
            margin-top: 60px;
        }

        .features {
            margin-top: 80px;
        }

        .features-lines {
            grid-column: 1 / span 2;
        }

        .features-description {
            grid-column: 4 / span 3;
        }

        .features-list {
            /* margin-top: 24px; */
            grid-column: 8 / span 4;
        }

        .features-heading {
            margin-bottom: 60px;
        }

        .features-line-management {
            margin-top: 10px;
        }

        .features-line-administration,
        .features-line-learning {
            margin-top: 50px;
            margin-bottom: 0;
        }

        .features-description-second,
        .features-description-third {
            margin-top: 40px;
        }

        .features-list-second,
        .features-list-third {
            margin-top: 40px;
        }

        .design {
            margin-top: 80px;
            padding-top: 60px;
            padding-bottom: 60px;
        }

        .design-image {
            grid-column: 6 / span 7;
        }

        .banner {
            margin-top: 80px;
            margin-bottom: 100px;
        }

        .advanced-features {
            margin-top: 80px;
            padding-top: 60px;
            padding-bottom: 60px;
        }

        .advanced-feature-image {
            margin-top: 50px;
            grid-column: 1 / span 5;
        }

        .advanced-feature-description {
            margin-top: 50px;
        }

        .advanced-feature-buttons > div {
            margin-top: 60px;
            flex: 0 15%;
        }

        .advanced-feature-buttons > div:hover {
            margin-top: 60px;
        }
    }

    @media screen and (max-width: 768px) {
        & {
           margin-top: ${calcRem(56)};
        }
    }

    @media screen and (max-width: 720px) {
        .greeting {
            margin-top: 40px;
        }

        .greeting-perforator {
            text-transform: uppercase;
            grid-column: 1 / span 6;
        }

        .greeting h1 {
            margin-top: 20px;
            grid-column: 1 / span 6;
        }

        .greeting-description {
            margin-top: 40px;
            grid-column: 1 / span 6;
        }

        .greeting-image {
            grid-column: 1 / span 6;
        }

        .greeting-description {
            margin-top: 30px;
        }

        .modules {
            margin-top: 120px;
        }

        .modules-heading {
            grid-column: 1 / span 6;
            text-align: left;
        } 

        .module-image-left {
            grid-column: 5 / span 2;
            margin-top: -10px;
        }   

        .module-title {
            margin-top: -30px;
        }

        .module-title p{
            margin-top: 5px;
        }

        .module-title-right {
            grid-column: 1 / span 6;
        }

        .module-subdescription-right {
            margin-top: 15px;
            grid-column: 1 / span 6;
        }

        .subdescription-next {
            margin-top: 5px;
        }

        .module-image-right {
            grid-column: 4 / span 3;
            margin-top: 40px;
            grid-row: 6;
            z-index: 0;
        }

        .subdescription-first-tablet {
            margin-top: 15px;
        }

        .module-title-left {
            z-index: 1;
            background-color: transparent;
            margin-top: -40px;
        }

        .features {
            margin-top: 120px;
        }

        .features-heading {
            text-align: left;
            grid-column: 1 / span 6;
            margin-bottom: 60px;
        }

        .features-lines {
            grid-column: 4 / span 3;
        }

        .features-description {
            grid-column: 1 / span 6;
            margin-top: -40px;
        }

        .features-list {
            margin-top: 24px;
            grid-column: 1 / span 6;
        }

        .features-list li:not(:first-child) {
            margin-top: 5px;
        }

        .features-line-management {
            margin-top: 0;
            /* margin-bottom: 20px; */
        }

        /* .features-line-administration,
        .features-line-learning {
            margin-top: 60px;
            margin-bottom: 20px;
        } */

        .features-description-second,
        .features-description-third {
            margin-top: -35px;
        }

        .features-list-second,
        .features-list-third {
            margin-top: 20px;
        }

        .design {
            padding-bottom: 80px;
        }

        .design-content {
            grid-column: 1 / span 6;
        }

        .design-desription-second-first {
            margin-top: 20px;
        }

        .design-buttons-row:last-child {
            margin-top: 25px;
        }

        .design-button:nth-child(even) {
            margin-left: 0;  
        }

        .design-buttons-row {
            justify-content: space-evenly;
        }

        .design-buttons-row>div {
            flex: 0 40%;
        }

        

        .design-image {
            grid-column: 1 / span 6;
            margin-top: 30px;
            grid-row: 2;
            padding-right: 0;
            padding-left: 0;
            margin-left: 0;
            margin-right: 0;
        }

        .banner {
            margin-top: 60px;
            margin-bottom: 120px;
        }     

        .banner-title {
            grid-column: 1 / span 6;
            text-align: left;
        }

        .banner-button {
            margin-top: 20px;
            padding-bottom: 15px;
            padding-top: 16px;
            grid-column: 1 / span 6;
            text-align: center;
            text-decoration: none;
            border: 1px solid #4a4a4a;
            transition: all 0.1s ease-in;
        }

        .team-subheading {
            grid-column: 1 / span 6;
            text-align: left;
        }

        .team-title {
            margin-top: 20px;
            margin-bottom: 40px;
            grid-column: 1 / span 6;
            text-align: left;
        }

        .team-image {
            grid-column: 1 / span 6;
        }

        .team-description {
            margin-top: 40px;
            grid-column: 1 / span 6;
        }

        .team-specialists {
            margin-top: 50px;
            grid-column: 1 / span 2;
        }

        .team-projects {
            margin-top: 50px;
            grid-column: 4 / span 2;
        }

        .advanced-features {
            margin-top: 50px;
            padding-top: 60px;
            padding-bottom: 60px;
        }

        .advanced-features-title {
            grid-column: 1 / span 6;
        }

        .advanced-feature-image {
            /* margin-top: 90px; */
            /* grid-column: 1 / span 6; */
            display: none;
        }

        .advanced-feature-description {
            margin-top: 40px;
            grid-column: 1 / span 6;
        }

        .advanced-feature-buttons {
            flex-wrap: nowrap;
            overflow-x: auto;
            /* justify-content: space-evenly; */
            align-items: flex-start;
            
        }

        .advanced-feature-buttons > div:not(:first-child) {
            margin-right: 25px;
        }

        .advanced-feature-buttons > div:first-child {
            padding-left: 24px;
        }

        .advanced-feature-buttons > div:last-child {
            padding-right: 24px;
        }

        .advanced-feature-buttons > div {
            margin-top: 40px;
            flex: 1 1 30%;
        }

        .advanced-feature-buttons > div:hover {
            margin-top: 40px;
        }
    }
`

const grid = css`
  .grid {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-column-gap: 16px;
      margin-right: auto;
      margin-left: auto;
      width: 1492px;
  }

  @media screen and (max-width: 1492px) {
      .grid {
          width: 1232px;
      }
  }

  @media screen and (max-width: 1232px) {
      .grid {
          width: 944px;
      }
  }

  @media screen and (max-width: 944px) {
      .grid {
          width: 720px;
      }
  }

  @media screen and (max-width: 720px) {
      .grid {
          grid-template-columns: repeat(6, 1fr);
          width: 328px;
      }
  }
`

const fonts = css`
    .font-heading-1 {
        font-family: 'Roboto Slab', serif;
        font-weight: 400;
        font-size: 64px;
        line-height: 84px;
        color: #000000;
        letter-spacing: 0;
    }

    .font-heading-2 {
        font-family: "Roboto Slab", serif;
        font-weight: 400;
        font-size: 48px;
        line-height: 64px;
        color: #000000;
        letter-spacing: 0;
    }

    .font-heading-3 {
        font-family: "Roboto", sans-serif;
        font-weight: 800;
        font-size: 40px;
        line-height: 56px;
        color: #000000;
        letter-spacing: 0;
    }

    .font-heading-4 {
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        color: #000000;
        letter-spacing: 0;
    }

    .font-heading-5 {
        font-family: "Roboto Slab", serif;
        font-weight: 300;
        font-size: 32px;
        line-height: 48px;
        color: #000000;
        letter-spacing: 0;
    }

    .font-p-1 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 24px;
        line-height: 40px;
        color: #000000;
    }

    .font-p-2 {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
    }

    .font-p-3 {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 20px;
        line-height: 32px;
        color: #000000;
    }

    .font-p-4 {
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
    }

    .font-p-5 {
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        font-size: 12px;
        line-height: 24px;
        color: #000000;
        letter-spacing: 1px;
    }

    .font-p-bold {
        font-weight: 500;
    }

    .font-p-link {
        color: #4469E2; 
        text-decoration: underline;
    }

    .font-p-link:hover {
        color: #D976FF;
    }

    @media screen and (max-width: 944px) {
        .font-heading-1 {
            font-size: 1.875rem;
            line-height: 2.4rem;
        }
        .font-heading-2 {
            font-size: 1.75rem;
            line-height: 2.2rem;
        }
        .font-heading-3 {
            font-size: 1.25rem;
            line-height: 2.5rem;
        }
        .font-heading-4 {
            font-size: 1.125rem;
            line-height: 1.5rem;
        }
        .font-heading-5 {
            font-size: 1.125rem;
            line-height: 2rem;
        }
        .font-p-1 {
            font-size: 1rem;
            line-height: 1.5rem;
        }
        .font-p-2 {
            font-size: 0.875rem;
            line-height: 1.5rem;
        }
        .font-p-3 {
            font-size: 1rem;
            line-height: 1.5rem;
        }
        .font-p-4 {
            font-size: 0.875rem;
            line-height: 1.5rem;
        }
        .font-p-5 {
            font-size: 0.75rem;
            line-height: 1.5rem;
        }

    }

    @media screen and (max-width: 720px) {
        .font-heading-1 {
            font-size: 1.875rem;
            line-height: 2.4rem;
        }
        .font-heading-2 {
            font-size: 1.75rem;
            line-height: 2.2rem;
        }
        .font-heading-3 {
            font-size: 1.25rem;
            line-height: 2.5rem;
        }
        .font-heading-4 {
            font-size: 1.125rem;
            line-height: 1.5rem;
        }
        .font-heading-5 {
            font-size: 1.125rem;
            line-height: 2rem;
        }
        .font-p-1 {
            font-size: 1rem;
            line-height: 1.5rem;
        }
        .font-p-2 {
            font-size: 0.875rem;
            line-height: 1.5rem;
        }
        .font-p-3 {
            font-size: 1rem;
            line-height: 1.5rem;
        }
        .font-p-4 {
            font-size: 0.875rem;
            line-height: 1.5rem;
        }
        .font-p-5 {
            font-size: 0.75rem;
            line-height: 1.5rem;
        }
    }
`

export default css`
  ${base}
  ${grid}
  ${fonts}
`
