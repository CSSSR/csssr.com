import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import cn from 'classnames'
import Link from 'next/link'
import Footer from './Footer'
import PictureForAllResolutions from '../PictureForAllResolutions'
import Picture from '../Picture'

const picture = css.resolve`
  picture {
    grid-column: 8 / span 2;
    margin-top: 7.5625rem;
    height: 10.5rem;
  }

  picture:first-of-type {
    margin-top: 10.5rem;
  }

  picture,
  img {
    min-width: 100%;
  }

  @media (max-width: 1023px) {
    picture,
    img {
      min-width: 100%;
      max-width: 100%;
    }
  }
`

const pictureHalfPage = css.resolve`
  picture {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 50vw;
    overflow: hidden;
  }
`

const pictureHunter = css.resolve`
  picture,
  img {
    min-width: 100%;
    max-width: 100%;
  }
`

const footer = css.resolve`
  footer {
    margin-top: 12.5rem;
    grid-row: 14;
  }
`

const Vacancies = props =>
  <Fragment>
    <PictureForAllResolutions
      className={pictureHalfPage.className}
      image={{ namespace: 'jobs', key: 'cover', alt: 'Работа мечты CSSSR', extension: 'jpg' }}
    />

    <article className='grid-container'>
      <header>
        <h1 className='font_h1-regular'>
          Работа в&nbsp;CSSSR
          <span className='font_subhead-regular'>
            CSSSR&nbsp;&mdash; островок здравого смысла в&nbsp;корпоративном океане зла.
          </span>
        </h1>
      </header>

      <ul>
        {props.vacancies.map(vacancy =>
          <li key={vacancy.id}>
            <Link
              prefetch
              href={{ pathname: '/ru/job', query: { jobPathName: vacancy.pathName } }}
              as={`/ru/jobs/${vacancy.pathName}`}
            >
              <a
                className={cn({
                  'font_link-list_24': true,
                  'hot-vacancy': vacancy.isHot,
                })}
              >
                {vacancy.name}
              </a>
            </Link>
          </li>
        )}
      </ul>

      <Picture className={picture.className} image={{ namespace: 'jobs', key: 'how', alt: 'Работа мечты CSSSR' }}/>

      <h2 className='font_h2-regular'>
        <span style={{ color: '#0054d8' }}>
          Как
        </span>
        {' '}
        мы&nbsp;нанимаем?
      </h2>
      <p className='font_p16-regular'>
        Процесс найма в&nbsp;CSSSR состоит из&nbsp;нескольких этапов. Как правило, необходимо выполнить тестовое задание, пройти интервью c&nbsp;командой рекрутеров, поразить интервьюера на&nbsp;техническом собеседовании и&nbsp;подружиться с&nbsp;потенциальным начальником. Процесс занимает от&nbsp;одной до&nbsp;двух недель, но, как показывает практика, результат стоит того.
      </p>

      <Picture className={picture.className} image={{ namespace: 'jobs', key: 'who', alt: 'Работа мечты CSSSR' }}/>

      <h2 className='font_h2-regular'>
        <span style={{ color: '#f8585c' }}>
          Кого
        </span>
        {' '}
        мы&nbsp;нанимаем?
      </h2>
      <p className='font_p16-regular'>
        В&nbsp;CSSSR работают необыкновенные люди&nbsp;&mdash; нас всех объединяет стремление создавать безупречное. В&nbsp;команию попадают только самые талантливые, амбициозные, стойкие, напористые, умные люди с&nbsp;хорошим чувством юмора. Мы&nbsp;не&nbsp;скрываем, что даём зеленый свет прежде всего тем, кто хочет работать именно с&nbsp;нами, тем, кому нравится наша концепция, кто проникся нашими ценностями.
      </p>

      <Picture className={picture.className} image={{ namespace: 'jobs', key: 'distance', alt: 'Работа мечты CSSSR' }}/>

      <h2 className='font_h2-regular'>
        О&nbsp;дистанционной работе
      </h2>
      <p className='font_p16-regular'>
        Быть успешной компанией в&nbsp;21&nbsp;веке&nbsp;&mdash; не&nbsp;значит сидеть друг напротив друга в&nbsp;офисе. Большинство сотрудников CSSSR работают там, где считают нужным: дома, в&nbsp;кафе, в&nbsp;пробке, в&nbsp;аэропорту, на&nbsp;берегу Индийского океана, за&nbsp;пределами Солнечной системы (если там есть интернет).
      </p>
      <p className='font_p16-regular'>
        Однако не&nbsp;стоит думать, что отсутствие необходимости ходить в&nbsp;офис предполагает меньше ответственности и&nbsp;больше свободного времени. Обязательными условиями удалённой работы являются способность самостоятельно организовывать свой рабочий процесс и&nbsp;возможность без всяких &ldquo;но&rdquo; трудиться полный рабочий день.
      </p>

      <div className='hunter'>
        <Picture className={pictureHunter.className} image={{ namespace: 'jobs', key: 'jobs-hunter', alt: 'jobs-hunter' }}/>
      </div>

      <p className='font_p16-regular'>
        Также наши вакансии можно найти на&nbsp;<a href='' className='font_link-list_16'>Моём Круге</a> и&nbsp;на&nbsp;<a href='' className='font_link-list_16'>Head Hunter</a>.
      </p>

      <Footer className={footer.className}/>
    </article>
    <style jsx>{`
      article {
        margin-left: auto;
        margin-right: auto;
        padding-top: 13.5rem;
        width: 1792px;
      }

      header,
      h2,
      p {
        grid-column: 8 / span 5;
      }

      h1 {
        width: 100%;
      }

      h1 span {
        padding-top: 1rem;
        display: block;
      }

      h2 {
        margin-top: 2.5rem;
      }

      h2 + p {
        margin-top: 2rem;
      }

      p + p {
        margin-top: 1rem;
      }

      ul {
        margin-top: 1.5625rem;
        grid-column: 8 / span 5;
      }

      li {
        margin-bottom: 1rem;
      }

      .hunter {
        grid-column: 8 / span 1;
        grid-row: 13;
        margin-top: 13.0625rem;
        height: 7.5rem;
      }

      .hunter + p {
        margin-top: 14.25rem;
        grid-column: 9 / span 4;
        grid-row: 13;
      }

      :global(#main) {
        position: relative;
      }

      .font_link-list_16 {
        text-decoration: none;
      }

      .hot-vacancy {
        position: relative;
      }

      .hot-vacancy::before {
        content: '🔥';
        position: absolute;
        top: 0.125rem;
        left: -2rem;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        article {
          width: 1328px;
        }

        .hunter {
          height: 6rem;
        }
      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        article {
          width: 1232px;
        }
      }

      @media (min-width: 368px) and (max-width: 1279px) {
        article {
          width: 944px;
        }

        .hot-vacancy::before {
          top: 0;
          left: -1.5rem;
        }

        @media (max-width: 1023px) {
          article {
            width: 59rem;
          }

          h2 {
            margin-top: 1rem;
          }

          .picture {
            height: 8rem;
          }
        }
      }
    `}</style>
    {footer.styles}
    {picture.styles}
    {pictureHunter.styles}
    {pictureHalfPage.styles}
  </Fragment>

export default Vacancies
