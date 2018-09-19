import React, { Fragment } from 'react'
import { string, arrayOf, shape } from 'prop-types'

const LinksList = ({ title, links }) =>
  <Fragment>
    <span className='font_perforator-10-regular'>
      {title}
    </span>

    <ul>
      {links.map(({ href, label }) =>
        <li key={`nav-link-${href}-${label}`}>
          <a
            href={href}
            target='_blank'
            className='font_link-list_28'
          >
            {label}
          </a>
        </li>
      )}
    </ul>

    <style jsx>{`
      span {
        margin-bottom: 4rem;
        display: block;
      }

      li:not(:last-child) {
        margin-bottom: 2rem;
      }

      a {
        display: block;
      }
    `}</style>
  </Fragment>


LinksList.propTypes = {
  className: string,
  links: arrayOf(shape({
    href: string,
    label: string,
  })),
}


export default LinksList
