import React, { Fragment, PureComponent } from 'react'
import { bool, func } from 'prop-types'
import { withRouter } from 'next/router'
import Router from 'next/router'
import translate from '../../utils/translate-wrapper'
import cn from 'classnames'
import css from 'styled-jsx/css'
import ButtonLink from '../ui-kit/ButtonLink'
import ModalCourse from './ModalCourse/ModalCourse'
import coursesMock, { courseNameById } from '../../data/school/courses-mock'
import getScrollbarWidth from '../../utils/getScrollbarWidth'
import PictureForAllResolutions from '../PictureForAllResolutions'

const picture = css.resolve`
  picture {
    display: block;
    margin-top: 0;
    margin-left: 0;
    height: 208px;
  }

  .gray {
    filter: gray;
    -webkit-filter: grayscale(1);
    filter: grayscale(1);
  }

  @media (max-width: 1279px) {
    picture {
      grid-column: 2 / span 3;
      margin-top: 2rem;
      height: 13rem;
    }

    @media (max-width: 1023px) {
      picture {
        height: 13rem;
      }
    }
  }

  @media (max-width: 767px) {
    picture {
      grid-column: 1 / span 6;
      margin-top: 0;
      height: 10rem;
    }
  }
`

const button = css.resolve`
  @media (max-width: 1279px) {
    .button {
      height: 3rem;
    }
  }
`

class Courses extends PureComponent {
  static propTypes = {
    isTablet: bool,
    onChoosingCourse: func,
  }

  static defaultProps = {
    isTablet: false,
  }

  state = {
    modalActiveId: this.props.modalActiveId || -1,
  }

  componentDidMount() {
    this.scrollbarWidth = getScrollbarWidth()
  }

  handleCloseModal = () => {
    document.body.style.overflow = this.bodyOverflow || 'initial'
    document.body.style.paddingRight = 0
    this.setState({
      modalActiveId: -1,
    })

    Router.push({
      pathname: this.props.router.pathname,
    })
  }

  handleShowModal = index => () => {
    this.bodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${this.scrollbarWidth}px`

    Router.push({
      pathname: this.props.router.pathname,
      query: { 'full-programm': courseNameById[index] },
    })

    this.setState({
      modalActiveId: index,
    })
  }

  renderCourse = ({
    id,
    active,
    title,
    description,
    info,
    duration,
    image,
    altText,
    modal,
  }, index) => {
    const { t, isTablet, onChoosingCourse } = this.props
    return (
      <Fragment key={index}>
        <div className={cn('courseWrapper', { 'grid-container': isTablet })}>
          <div className='imageColumn'>
            <PictureForAllResolutions
              className={cn(picture.className, { gray: !active })}
              image={{ namespace: 'school', key: image, alt: altText }}
            />

            { !active &&
                <div
                  className='soon font_roboto-slab-light'
                  dangerouslySetInnerHTML={{ __html: t('school:course.soon') }}
                />
            }

            { active && isTablet &&
                <Fragment>
                  <p
                    className='font_p16-regular info'
                    dangerouslySetInnerHTML={{ __html: info }}
                  />
                  <p
                    className='font_p16-regular duration'
                    dangerouslySetInnerHTML={{ __html: duration }}
                  />
                </Fragment>
            }
          </div>

          <div className='infoColumn'>
            <h3
              className='font_h2-regular course-title'
              dangerouslySetInnerHTML={{ __html: title }}
            />

            <p
              className='font_p24-strong description'
              dangerouslySetInnerHTML={{ __html: description }}
            />

            { active
              ? <div className='button_wrapper'>
                { !isTablet &&
                    <Fragment>
                      <p
                        className='font_p16-regular info'
                        dangerouslySetInnerHTML={{ __html: info }}
                      />
                      <p
                        className='font_p16-regular duration'
                        dangerouslySetInnerHTML={{ __html: duration }}
                      />
                    </Fragment>
                }

                <div className='button_register'>
                  <ButtonLink
                    className={button.className}
                    href={'#sign'}
                    onClick={() => onChoosingCourse(id)}
                  >
                    {t('school:course.register')}
                  </ButtonLink>
                </div>

                { modal &&
                    <p className='font_p16-regular under_course_text'>
                      <span dangerouslySetInnerHTML={{ __html: t('school:course.text1') }} />
                      <a
                        onClick={this.handleShowModal(index)}
                        className={'font_link-list_16 modal-button'}
                        dangerouslySetInnerHTML={{ __html: t('school:course.text2') }}
                      />
                    </p>
                }
              </div>


              : <div className='button_register'>
                <ButtonLink
                  className={button.className}
                  href={'#sign'}
                  theme={'secondary'}
                  onClick={() => onChoosingCourse(id)}
                >
                  {t('school:course.sendRequest')}
                </ButtonLink>
              </div>
            }
          </div>
        </div>
        <style jsx>{`
          .courseWrapper {
            grid-column: span 4;
            grid-row: 2;
            text-align: center;
            margin-top: 1rem;
            padding: 0 0rem;
          }

          .modal-button {
            display: inline;
            border: none;
            background: none;
            white-space: normal;
            text-align: left;
            cursor: pointer;
          }

          .imageColumn {
            position: relative;
            overflow: hidden;
          }

          .soon {
            position: absolute;
            left: -20%;
            right: -20%;
            bottom: 45%;
            padding: 0;
            font-family: 'Roboto', 'Arial', sans-serif;
            font-size: 0.75rem;
            font-weight: bold;
            line-height: 1.375rem;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 0.0625rem;
            background-color: #f8e71c;
            transform: rotate(18deg);
          }

          .description {
            margin-top: 1.3125rem;
          }

          .info {
            margin-top: 1.5rem;
            text-align: center;
          }

          .duration {
            margin-top: 2.0rem;
          }

          .course-title {
            margin-top: 3.0625rem;
          }

          .under_course_text {
            grid-column: 5 / span 4;
            grid-row: 3;
            margin-top: 1.4375rem;
            text-align: center;
          }

          .button_wrapper {
            grid-column: 5 / span 4;
            grid-row: 3;
            text-align: center;
          }

          .button_register {
            margin-top: 3.0625rem;
          }

          .button_wrapper .button_register {
            margin-top: 3.5625rem;
          }

          .courseWrapper:nth-of-type(1) {
            grid-column: 1 / span 3;
          }

          .courseWrapper:nth-of-type(2) {
            grid-column: 5 / span 4;
          }

          .courseWrapper:nth-of-type(3) {
            grid-column: 10 / span 3;
          }

          @media (max-width: 1279px) {
            .courseWrapper:nth-of-type(n) {
              grid-column: 1 / span 12;
              grid-row: auto;
              margin-top: 1.675rem;
              padding: 0;
            }

            .courseWrapper:nth-of-type(2) {
              margin-top: 1rem;
              order: 1;
            }
            .courseWrapper:nth-of-type(1) {
              order: 2;
            }
            .courseWrapper:nth-of-type(3) {
              margin-top: 2rem;
              order: 3;
            }

            .course-title {
              margin-top: 3.4375rem;
              padding-bottom: 0;
            }

            .description,
            .under_course_text,
            .font_link-list_16 {
              margin-top: 1.0625rem;
              padding-bottom: 0;
              font-family: 'Roboto', 'Arial', sans-serif;
              font-size: 0.875rem;
              font-weight: 300;
              font-style: normal;
              font-stretch: normal;
              line-height: 1.5rem;
              letter-spacing: normal;
            }

            .info {
              font-size: 1rem;
              line-height: 1.5rem;
            }

            .duration {
              text-align: center;
              padding: 0 5rem;
              margin-top: 1.125rem;
            }

            .soon {
              bottom: 39%;
            }

            .imageColumn {
              grid-column: 2 / span 5;
            }

            .infoColumn {
              grid-column: 8 / span 4;
              text-align: left;
            }

            .button_register, .button_wrapper .button_register {
              margin-top: 2.0625rem;
            }

            .font_link-list_16 {
              display: inline;
            }

            .under_course_text {
              grid-column: 3 / span 6;
              text-align: left;
            }
          }

          @media (max-width: 767px) {
            .courseWrapper:nth-of-type(n) {
              grid-column: 1 / span 6;
              grid-row: auto;
              text-align: center;
            }

            .courseWrapper:nth-of-type(2) {
              margin-top: 3.5rem;
            }

            .courseWrapper:nth-of-type(1) {
              margin-top: 2.8125rem;
            }

            .courseWrapper:nth-of-type(3) {
              margin-top: 4.0625rem;
            }

            .course-title,
            .description,
            .under_course_text  {
              text-align: center;
            }

            .course-title {
              grid-column: 1 / span 6;
              margin-top: 1.4375rem;
              margin-botton: 0;
              padding-bottom: 0;
            }

            .description {
              grid-column: 1 / span 6;
            }

            .info {
              margin-top: 1rem;
            }

            .duration {
              padding-right: 3.5rem;
              padding-left: 3.5rem;
            }

            .soon {
              bottom: 44%;
            }

            .button_wrapper .button_register {
              margin-top: 2.25rem;
            }

            .button_register {
              margin-top: 2rem;
            }

            .under_course_text {
              text-align: center;
            }
          }
        `}
        </style>
        {picture.styles}
        {button.styles}
      </Fragment>
    )
  }

  render() {
    const { t, onChoosingCourse } = this.props
    const { modalActiveId } = this.state
    return (
      <Fragment>
        { modalActiveId !== -1 &&
            <ModalCourse
              modalActiveId={modalActiveId}
              onCloseModal={this.handleCloseModal}
              onChoosingCourse={() => onChoosingCourse(coursesMock.items[modalActiveId].id)}
            />
        }

        <article className='grid-container' id='courses'>
          <h2 className='font_h2-slab' dangerouslySetInnerHTML={{ __html: t('school:course.title') }} />
          { coursesMock.items.map(this.renderCourse) }
        </article>

        <style jsx>{`
          article {
            position: relative;
            margin-left: auto;
            margin-right: auto;
            margin-top: 9rem;
            width: 1792px;
          }

          h2 {
            grid-column: 4 / span 6;
            margin-bottom: 6rem;
            text-align: center;
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            article {
              width: 1328px;
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            article {
              width: 1232px;
            }
          }

          @media (min-width: 768px) and (max-width: 1279px) {
            article {
              margin-top: 6rem;
              width: 944px;
            }

            h2 {
              margin-top: 0.5rem;
              margin-bottom: 0.5rem;
            }

            @media (max-width: 1023px) {
              article {
                width: 59rem;
              }

            }
          }

          @media (max-width: 767px) {
            article {
              margin-top: 5.5rem;
              width: 20.5rem;
            }

            h2 {
              grid-column: 2 / span 4;
              margin-bottom: 0;
            }
           }
        `}</style>
        {picture.styles}
      </Fragment>
    )
  }
}

export default translate()(withRouter(Courses))
