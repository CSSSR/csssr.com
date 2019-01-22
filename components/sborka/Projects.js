import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import { translate } from 'react-i18next'
import PictureForAllResolutions from '../PictureForAllResolutions'

const picture = css.resolve`
  picture {
    margin-top: 36px;
    grid-column: 1 / span 10;
    height: 800px;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    picture {
      height: 592px;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    picture {
      height: 552px;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    picture {
      height: 424px;
    }

    @media (max-width: 1023px) {
      picture {
        height: 26.5rem;
      }
    }
  }

  @media (max-width: 767px) {
    picture {
      grid-column: 1 / span 5;
      height: 9.25rem;
    }
  }
`

const Projects = ({ t }) =>
  <Fragment>
    <div id='projects' className='grid-container'>
      <PictureForAllResolutions
        className={picture.className}
        image={{ namespace: 'sborka', key: 'projects', alt: t('sborka:imgAlt.projects') }}
      />

      <span dangerouslySetInnerHTML={{ __html: t('sborka:projects.pictureText') }} />
      <p
        className='font_subhead-regular'
        dangerouslySetInnerHTML={{ __html: t('sborka:projects.articleText') }}
      />

    </div><style jsx>{`
      div {
        margin-top: 5.8125rem;
        margin-right: auto;
        margin-left: auto;
        width: 1792px;
      }

      span {
        margin-top: -13.625rem;
        grid-column: 9 / span 3;
        font-family: Roboto Slab;
        font-size: 3rem;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 4rem;
        letter-spacing: normal;
        color: #000000;
      }

      p {
        margin-top: -2.6875rem;
        grid-column: 3 / span 8;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        div {
          margin-top: 8.8125rem;
          width: 1328px;
        }

        span {
          margin-top: -11.625rem;
        }

        p {
          margin-top: -0.6875rem;
        }
      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        div {
          margin-top: 8.8125rem;
          width: 1232px;
        }

        span {
          margin-top: -12.125rem;
        }

        p {
          margin-top: -1.1875rem;
        }
      }

      @media (min-width: 768px) and (max-width: 1279px) {
        div {
          margin-top: 4.8125rem;
          width: 944px;
        }

        span {
          margin-top: -7.5625rem;
          font-size: 1.5rem;
          line-height: 2rem;
        }

        p {
          margin-top: 0.5625rem;
        }

        @media (max-width: 1023px) {
          div {
            width: 59rem;
          }
        }
      }

      @media (max-width: 767px) {
        div {
          grid-column: 1 / span 6;
          margin-top: 3.25rem;
          width: 20.5rem;
        }

        span {
          grid-column: 4 / span 3;
          margin-top: -2.2625rem;
          font-size: 1.5rem;
          line-height: 2rem;
        }

        p {
          grid-column: 1 / span 6;
          margin-top: 2.125rem;
        }
      }
    `}</style>
    {picture.styles}
  </Fragment>

export default translate()(Projects)