import React, { Fragment, PureComponent } from 'react'
import { arrayOf, shape, string, number } from 'prop-types'
import cn from 'classnames'
import Tabs from '../Tabs'
import Project from './Project'
import CutButton from '../CutButton'
import translate from '../../../utils/translate-wrapper'


class ProjectsList extends PureComponent {
  static proptypes = {
    porfolio: arrayOf(shape({
      id: string,
      projects: arrayOf(shape({
        id: string,
        type: string,
        slides: arrayOf(number),
        href: string,
      })),
    })),
  }
  state = {
    activeProjectsGroupId: 'all',
    listHeight: null,
    isCut: true,
  }

  listRef = React.createRef()

  getProjectsOfActiveProjectsGroupId = () => {
    const { portfolio } = this.props
    const { activeProjectsGroupId } = this.state

    return activeProjectsGroupId === 'all'
      ? portfolio.map(projectGroup => projectGroup.projects.map(project => project))
      : portfolio.find(projectGroup => projectGroup.id === activeProjectsGroupId).projects
  }

  handleChangeActiveProjectsGroupId = e =>
    this.setState({
      activeProjectsGroupId: e.target.value,
      listHeight: null,
    })

  handleCutListOnOff = () => {
    const listNode = this.listRef.current
    const scrollToNextBlock = () => {
      if (this.state.isCut) {
        const elem = document.getElementById('portfolio')
        const magicNumber = 80 // Чтобы не прижиматься верхней границей страницы к заголовку
        const scrollToOffset = elem.offsetTop - magicNumber

        window.scrollTo({
          top: scrollToOffset,
          behavior: 'smooth',
        })
      }
    }

    this.setState({
      isCut: !this.state.isCut,
      listHeight: listNode.offsetHeight,
    }, scrollToNextBlock)
  }

  renderProject = project =>
    <Project
      key={project.id}
      id={project.id}
      type={project.type}
      slides={project.slides}
      href={project.href}
    />

  renderProjectWithTitle = (project, projectGroupId) =>
    <Project
      key={project.id}
      title={this.props.t(`dev:tabs.${projectGroupId}`)}
      id={project.id}
      type={project.type}
      slides={project.slides}
      href={project.href}
    />

  renderAllProjects = () =>
    this.props.portfolio.map(projectGroup =>
      projectGroup.projects.map((project, index) => index === 0
        ? this.renderProjectWithTitle(project, projectGroup.id)
        : this.renderProject(project)
      )
    )

  renderSpecificProjects = () => {
    return this.props.portfolio
      .find(projectGroup => projectGroup.id === this.state.activeProjectsGroupId)
      .projects
      .map(this.renderProject)
  }

  render() {
    const { t, portfolio } = this.props
    const { activeProjectsGroupId, listHeight, isCut } = this.state
    const projectsOfActiveProjectsGroupId = this.getProjectsOfActiveProjectsGroupId()
    const shouldShowCutButton = projectsOfActiveProjectsGroupId.length > 5
    const tabs = ['all'].concat(portfolio.map(projectsGroup => projectsGroup.id ))

    return (
      <Fragment>
        <Tabs
          tabs={tabs}
          activeTabId={activeProjectsGroupId}
          onClick={this.handleChangeActiveProjectsGroupId}
        />
        <div
          className={cn('list-container', {
            is_cut: shouldShowCutButton && isCut,
          })}
        >
          <ul className={'grid-container'} ref={this.listRef}>
            { activeProjectsGroupId === 'all'
              ? this.renderAllProjects()
              : this.renderSpecificProjects()
            }
          </ul>
        </div>

        { shouldShowCutButton &&
          <CutButton isCut={isCut} onClick={this.handleCutListOnOff}>
            { isCut
              ? t('dev:portfolio.buttonText1')
              : t('dev:portfolio.buttonText2')
            }
          </CutButton>
        }
        <style jsx>{`
          ul {
            padding-bottom: 1.5625rem;
          }

          .list-container.is_cut ul {
            padding-bottom: 1.5rem;
          }

          .list-container.is_cut {
            height: 87.0625rem;
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            .list-container.is_cut {
              height: 75.5625rem;
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            .list-container.is_cut {
              height: 72.5625rem;
            }
          }

          @media (min-width: 768px) and (max-width: 1279px) {
            .list-container.is_cut {
              height: 104.5625rem;
            }
          }
        `}</style>
        <style jsx>{`
          .list-container {
            grid-column: 1 / span 12;
            height: ${listHeight ? listHeight / 16 + 'rem' : 'auto'};
            max-height: auto;
            overflow: hidden;
            transition: height ${listHeight ? listHeight / 5 : 200}ms linear; // коэффициент подобран на глаз
          }
        `}</style>
      </Fragment>
    )
  }
}

export default translate()(ProjectsList)
