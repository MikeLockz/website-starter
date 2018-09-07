import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Content, {HTMLContent} from '../components/Content'
import Videos from '../components/Videos'
import ExploreTeamMembers from '../components/ExploreTeamMembers'

export const TeamPageTemplate = ({
  title,
  meta_title,
  meta_description,
  video_section,
  content,
  contentComponent,
  team
}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='hero is-primary is-bold'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <h1 className='title'>
                    {title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section section--gradient'>
        <div className='container'>
          <div className='section'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='content'>
                  <h2 className='has-text-weight-semibold is-size-2'>
                    {video_section.heading}
                  </h2>
                  <p className='is-size-5'>{video_section.description}</p>

                  <Videos data={video_section.videos} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='section section--gradient'>
        <div className='container'>
          <div className='section'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='content'>

                  <ExploreTeamMembers data={team.members} />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

TeamPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  video_section: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    videos: PropTypes.array,
  team: PropTypes.array,
  }),
}

const TeamPage = ({data}) => {
  const {frontmatter} = data.markdownRemark
  const {markdownRemark: post} = data

  return (
    <TeamPageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      contentComponent={HTMLContent}
      content={post.html}
      video_section={frontmatter.video_section}
      team = {frontmatter.team}
    />
  )
}

TeamPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default TeamPage

export const teamPageQuery = graphql`
  query TeamPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_title
        meta_description
        video_section {
          heading
          description
          videos {
            description
            source
          }
        }
        team {
          members {
            name
            spoke
            bio
            tags
          }
        }
      }
    }
  }
`
