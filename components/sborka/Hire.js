import React, { Fragment, PureComponent } from 'react'
import css from 'styled-jsx/css'
import translate from '../../utils/translate-wrapper'
import PictureForAllResolutions from '../PictureForAllResolutions'
import HirePlanetsAndSatellites from '../../static/images/sborka/hire-planets-and-satellites.svg'

const picture = css.resolve`
  picture {
    position: absolute;
    left: 50%;
    top: 40%;
    display: block;
    width: 85%;
    transform: translateX(-50%) translateY(-50%);
  }

  img {
    object-fit: contain;
  }
`

const planets = css.resolve`
  svg {
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 100%;
    max-width: 1920px;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    svg {
      min-height: 456px;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    svg {
      min-height: 456px;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    svg {
      min-height: 392px;
    }

    @media (max-width: 1023px) {
      svg {
        min-height: 24.5rem;
      }
    }
  }

  @media (max-width: 767px) {
    svg {
      margin-top: -5.25rem;
      margin-bottom: -5.25rem;
      margin-left: -11.25rem;
      width: 45rem;
      min-height: 21rem;
    }
  }
`

class Hire extends PureComponent {
  render() {
    const { t, isMsBrowser } = this.props

    return (
      <Fragment>
        <article className='grid-container'>
          <h1 className='font_h1-slab'>
            {t('sborka:hire.title')}
          </h1>

          <span
            className='font_subhead-regular'
            dangerouslySetInnerHTML={{ __html: t('sborka:hire.subTitle') }}
          />
        </article>
        <div className='image-wrapper'>
          <PictureForAllResolutions
            className={picture.className}
            image={{
              namespace: 'sborka',
              key: 'rocket',
              alt: t('sborka:imgAlt.rocket'),
            }}
          />
          { isMsBrowser
            ? null
            : <HirePlanetsAndSatellites className={planets.className} />
          }

        </div><style jsx>{`
          article {
            position: relative;
            margin-top: 12rem;
            margin-left: auto;
            margin-right: auto;
            width: 1792px;
          }

          h1 {
            position: relative;
            grid-column: 4 / span 6;
            text-align: center;
          }

          h1::after {
            content: '';
            position: absolute;
            z-index: -1;
            top: calc(100% - 26px);
            left: 240px;
            display: block;
            width: 180px;
            height: 86px;
            background-color: #ffee1f;
          }

          span {
            grid-column: 2 / span 10;
            margin-top: 0.875rem;
            margin-bottom: 3rem;
            text-align: center;
          }

          .image-wrapper {
            position: relative;
            margin-top: 1rem;
            max-height: 570px;
            background-image: url('${require('../../static/images/sborka/hire-orbits.svg')}');
            background-size: 1920px 570px;
            background-position: 50%;
            background-repeat: repeat-x;
          }

          .button-wrapper {
            position: fixed;
            bottom: 4rem;
            right: 4rem;
            width: 272px;
            z-index: 8999;
            transform: translateY(0);
            transition: transform 0.3s ease-out;
          }

          .button-wrapper-invisible {
            transform: translateY(calc(100% + 15rem));
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            article {
              width: 1328px;
            }

            h1::after {
              left: 120px;
            }

            span {
              margin-bottom: 0;
            }

            .image-wrapper {
              min-height: 456px;
              background-size: contain;
            }

            .button-wrapper {
              width: 208px;
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            article {
              width: 1232px;
            }

            h1 {
              grid-column: 3 / span 8;
            }

            h1::after {
              left: 210px;
              width: 192px;
              height: 80px;
            }

            span {
              margin-bottom: 0;
            }

            .image-wrapper {
              min-height: 456px;
              background-size: contain;
            }

            .button-wrapper {
              width: 192px;
            }
          }

          @media (min-width: 768px) and (max-width: 1279px) {
            article {
              margin-top: 10rem;
              width: 944px;
            }

            h1::after {
              left: 80px;
              width: 144px;
              height: 64px;
            }

            span {
              margin-top: 1.625rem;
              margin-bottom: 0.5rem;
            }

            .image-wrapper {
              min-height: 392px;
              background-size: contain;
            }

            .button-wrapper {
              width: 192px;
            }

            @media (max-width: 1023px) {
              article {
                width: 59rem;
              }

              h1::after {
                left: 5rem;
                width: 9rem;
                height: 4rem;
              }

              .image-wrapper {
                min-height: 24.5rem;
              }

              .button-wrapper {
                width: 12rem;
              }
            }
          }

          @media (max-width: 767px) {
            article {
              margin-top: 5rem;
              width: 20.5rem;
            }

            h1 {
              grid-column: 1 / span 6;
              margin-bottom: 0;
              text-align: center;
            }

            h1::after {
              left: 5.625rem;
              width: 8rem;
              height: 3.5rem;
            }

            span {
              grid-column: 1 / span 6;
              margin-top: 0.125rem;
              margin-bottom: 0;
              padding-top: 0;
            }

            .image-wrapper {
              min-height: 10.5rem;
              background-position-y: 0;
              background-size: 45rem 21rem;
            }

            .button-wrapper {
              position: fixed;
              bottom: 2rem;
              width: 13.5rem;
              right: calc(50% - 13.5rem / 2);
            }
          }
        `}</style>
        <style jsx>{`
          :global(.ie11) .image-wrapper {
            min-height: 372px;
          }
          
          @media (min-width: 1359px) and (max-width: 1920px) {
            :global(.ie11) .image-wrapper {
              min-height: 565px;
            }
          }

          :global(.ie11) article {
            -ms-grid-rows: auto auto;
          }

          :global(.ie11) h1 {
            -ms-grid-column: 7;
            -ms-grid-column-span: 11;
            -ms-grid-row: 1;
            -ms-grid-row-span: 1;
          }

          :global(.ie11) span {
            display: block;
            -ms-grid-column: 3;
            -ms-grid-column-span: 19;
            -ms-grid-row: 2;
            -ms-grid-row-span: 1;
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            :global(.ie11) h1 {
              -ms-grid-column: 5;
              -ms-grid-column-span: 15;
            }
          }

          @media (max-width: 767px) {
            :global(.ie11) h1 {
              -ms-grid-column: 1;
              -ms-grid-column-span: 11;
            }

            :global(.ie11) span {
              -ms-grid-column: 1;
              -ms-grid-column-span: 11;
            }
          }
        `}</style>
        {picture.styles}
        {planets.styles}
      </Fragment>
    )
  }
}

export default translate()(Hire)
