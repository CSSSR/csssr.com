import React, { Fragment, PureComponent } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import styled from '@emotion/styled'
import { css, Global } from '@emotion/core'
import styles, { pictureHunterStyles } from './Vacancies.styles'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import PictureOld from '../../Picture'
import Grid from '../../ui-kit/core-design/Grid'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'

import { distanceImages, faqImages, howImages, whoImages } from '../../../data/jobs/images'

class Vacancies extends PureComponent {
  render() {
    const {
      className,
      l10n: { translations, language, locale },
    } = this.props
    return (
      <Fragment>
        <Global
          styles={
            language === 'en' &&
            css`
              @media (max-width: 767px) {
                #main {
                  padding-top: 0;
                }
              }
            `
          }
        />
        <Grid as="article" className={className}>
          <header>
            <h1 className="font_h1-regular">
              <div dangerouslySetInnerHTML={{ __html: translations.jobs.title }} />
            </h1>
            <span
              className="font_subhead-regular"
              dangerouslySetInnerHTML={{ __html: translations.jobs.subTitle }}
            />
          </header>

          {this.props.vacancies.length > 0 && (
            <ul>
              {this.props.vacancies.map((vacancy, index) => (
                <li key={vacancy.id} data-testid={`Jobs:list.item-${index}`}>
                  <Link
                    href={{ pathname: `/${locale}/job`, query: { jobPathName: vacancy.pathName } }}
                    as={`/${locale}/jobs/${vacancy.pathName}`}
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
              ))}
            </ul>
          )}

          <PictureForAllResolutions
            className="picture"
            images={howImages}
            fallback={howImages['desktop.l']}
            alt={translations.jobs.how.alt}
          />

          <h2 className="font_h2-regular">
            <span style={{ color: '#85d4b2' }}>{translations.jobs.how.word}</span>{' '}
            <span dangerouslySetInnerHTML={{ __html: translations.jobs.how.title }} />
          </h2>
          <p
            className="font_p16-regular"
            dangerouslySetInnerHTML={{ __html: translations.jobs.how.description }}
          />

          <PictureForAllResolutions
            className="picture"
            images={whoImages}
            fallback={whoImages['desktop.l']}
            alt={translations.jobs.who.alt}
          />

          <h2 className="font_h2-regular">
            <span style={{ color: '#fe535b' }}>{translations.jobs.who.word}</span>{' '}
            <span dangerouslySetInnerHTML={{ __html: translations.jobs.who.title }} />
          </h2>
          <p
            className="font_p16-regular"
            dangerouslySetInnerHTML={{ __html: translations.jobs.who.description }}
          />

          <PictureForAllResolutions
            className="picture"
            images={distanceImages}
            fallback={distanceImages['desktop.l']}
            alt={translations.jobs.about.alt}
          />

          <h2
            className="font_h2-regular"
            dangerouslySetInnerHTML={{ __html: translations.jobs.about.title }}
          />
          <p
            className="font_p16-regular"
            dangerouslySetInnerHTML={{ __html: translations.jobs.about.descriptionFirst }}
          />
          <p
            className="font_p16-regular"
            dangerouslySetInnerHTML={{ __html: translations.jobs.about.descriptionSecond }}
          />

          {language === 'ru' && (
            <Fragment>
              <PictureForAllResolutions
                className="picture-faq"
                images={faqImages}
                fallback={faqImages['desktop.l']}
                alt={translations.jobs.faq.alt}
                testid="Jobs:img.faq"
              />
              <p className="faq-text font_p16-regular">
                {translations.jobs.faq.title}

                <a href="/ru/jobs-faq" className="font_link-list_16" data-testid="Jobs:link.faq">
                  {translations.jobs.faq.link}
                </a>
              </p>
            </Fragment>
          )}

          <PictureOld
            css={pictureHunterStyles}
            image={{ namespace: 'jobs', key: 'jobs-hunter', alt: translations.jobs.hunter.alt }}
          />
          <p className="hunter-text font_p16-regular">
            {translations.jobs.hunter.description}&nbsp;
            <a
              href={translations.jobs.hunter.firstLink}
              target="_blank"
              rel="noopener nofollow"
              className="font_link-list_16"
            >
              {translations.jobs.hunter.firstLinkText}
            </a>{' '}
            <span className="hunter-text-inner">
              {translations.jobs.hunter.and}{' '}
              <a
                href={translations.jobs.hunter.secondLink}
                target="_blank"
                rel="noopener nofollow"
                className="font_link-list_16"
              >
                {translations.jobs.hunter.secondLinkText}
              </a>
            </span>
            .
          </p>

          <div className="half-page-picture" />
        </Grid>
      </Fragment>
    )
  }
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Vacancies)`
    ${styles}
  `),
)
