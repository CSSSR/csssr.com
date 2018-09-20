import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'
import Link from 'next/link'
import { withRouter } from 'next/router'
import CSSSRLogoIcon from '../static/icons/csssr_logo.svg'
import BurgerIcon from '../static/icons/burger.svg'
import SideBar from './SideBar'
import cn from 'classnames'

const links = [
  { href: '/competence_and_services', label: 'Competence & Services' },
  { href: '/customers', label: 'Customers' },
  { href: '/hire_us', label: 'Hire us' },
]

const csssrLogoIcon = <CSSSRLogoIcon width='12rem' height='3rem' color='black'/>
const burgerIcon = <BurgerIcon width='3rem' height='2.25rem'/>

class Header extends PureComponent {
  static propTypes = {
    router: object,
    sectionName: string,
  }

  state = {
    showHeader: true,
    pinHeader: true,
    toggleHeaderAnimations: false,
    isSideBarOpened: false,
  }

  lastScrollTop = 0

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll)
  }

  componentDidUpdate(prevProps, prevState) {
    const { isSideBarOpened } = this.state

    if (isSideBarOpened === prevState.isSideBarOpened) {
      return
    }

    if (isSideBarOpened) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'initial'
    }
  }

  handleSideBarToggle = () => {
    this.setState(previousState => ({
      isSideBarOpened: !previousState.isSideBarOpened,
    }))
  }

  handleSideBarClose = e => {
    const isSideBar = e.target.classList.toString().match(/sidebar/)

    if (this.state.isSideBarOpened && isSideBar) {
      this.setState({
        isSideBarOpened: false,
      })
    }
  }

  handleScroll = event => {
    const { target: { scrollingElement } } = event
    const { showHeader } = this.state
    const headerHeight = 65
    const scrollTop = scrollingElement === document.body.parentNode && scrollingElement.scrollTop

    if (scrollTop > this.lastScrollTop && scrollTop > headerHeight) {
      // eslint-disable-next-line
      showHeader && this.setState({
        showHeader: false,
        pinHeader: false,
      })
    } else if (scrollTop === 0) {
      this.setState({
        pinHeader: true,
        toggleHeaderAnimations: false,
      })
    } else {
      // eslint-disable-next-line
      !showHeader && this.setState({
        showHeader: true,
        pinHeader: false,
        toggleHeaderAnimations: true,
      })
    }

    this.lastScrollTop = scrollTop
  }

  render() {
    const { router: { pathname }, sectionName } = this.props
    const { showHeader, pinHeader, toggleHeaderAnimations } = this.state

    return (
      <header
        className={cn({
          header: true,
          header_pinned: pinHeader,
          header_visible: !pinHeader && showHeader,
          header_invisible: !pinHeader && !showHeader,
          header_animations_on: toggleHeaderAnimations,
        })}
      >
        <SideBar
          onToggle={this.handleSideBarToggle}
          isOpened={this.state.isSideBarOpened}
          onClose={this.handleSideBarClose}
        />
        <div
          className='grid-container header-content'
        >
          {pathname === '/'
            ? <span className='logo-wrapper'>
              {csssrLogoIcon}
            </span>

            : <span className='logo-wrapper'>
              <Link prefetch href={'/'}>
                <a>
                  {csssrLogoIcon}
                </a>
              </Link>
            </span>
          }

          <nav className='nav'>
            <ul className='nav-list'>
              {links.map(({ href, label }) => (
                <li
                  className='nav-list-item'
                  key={`nav-link-${href}-${label}`}
                >
                  <Link prefetch href={href}>
                    <a className='nav-list-link font_top-menu'>{label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <span className='section-name font_perforator-16-black'>
            {/* //TODO: заглушка для теста, убрать при деплое на прод */}
            {sectionName || 'Software Engeniring'}
          </span>

          <button className='burger' onClick={this.handleSideBarToggle}>
            {burgerIcon}
          </button>

        </div>
        <style jsx>{`
          .header {
            position: absolute;
            top: 0;
            left: 50%;
            width: 100%;
            transform: translateX(-50%);
            background-color: rgba(255, 255, 255, 0.9);
          }

          .header_invisible {
            position: fixed;
            top: -64px;
          }

          .header_animations_on {
            transition: top 300ms ease 0s;
          }

          .header_visible {
            position: fixed;
            top: 0;
          }

          .header-content {
            margin-right: auto;
            margin-left: auto;
            padding-left:  8rem;
            padding-right: 8rem;
            height: 8rem;
            width: 1920px;
            align-items: center;
            align-content: center;
          }

          .logo-wrapper {
            grid-column: 1 / span 2;
            padding-top: 1rem;
            padding-bottom: 1rem;
            height: 5rem;
            text-align: center;
          }

          .nav {
            grid-column: 3 / span 6;
            height: 4rem;
          }

          .nav-list {
            display: flex;
            width: 100%;
            height: 100%;
          }

          .nav-list-item:not(:last-child) {
            height: 100%;
            margin-right: 3rem;
          }

          .nav-list-link {
            height: 4rem;
          }

          .section-name {
            grid-column: 9 / span 3;
            height: 3rem;
            text-align: right;
          }

          .burger {
            margin-left: auto;
            margin-right: auto;
            display: block;
            width: 4rem;
            height: 4rem;
            border: none;
            font-size: 0;
            background: none;
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            .header-content {
              padding-left:  2rem;
              padding-right: 2rem;
              width: 1360px
            }
          }

          @media (max-width: 1359px) {
            .header-content {
              padding-left:  3rem;
              padding-right: 3rem;
              width: 1280px
            }
          }

        `}</style>
      </header>
    )
  }
}

export default withRouter(Header)
