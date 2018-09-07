import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Content, {HTMLContent} from '../components/Content'
import OpenJob from '../components/OpenJob'

export const JoinUsPageTemplate = ({
  title,
  meta_title,
  meta_description,
  jobs,
  content,
  contentComponent,
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
          <div className='columns'>
            <div className='column is-6 is-offset-1'>
              <div className='section'>
                <PageContent className='content' content={content} />
              </div>
            </div>

            <div className='column is-offset-1'>
              <div className='section'>

                <div className='card'>
                  <div className='card-image'>
                    <figure className='image is-4by3'>
                      <img src='https://bulma.io/images/placeholders/1280x960.png' alt='Placeholder image' />
                    </figure>
                  </div>
                  <div className='card-content'>
                    <div className='media'>
                      <div className='media-left'>
                        <figure className='image is-48x48'>
                          <img src='https://bulma.io/images/placeholders/96x96.png' alt='Placeholder image' />
                        </figure>
                      </div>
                      <div className='media-content'>
                        <p className='title is-4'>John Smith</p>
                        <p className='subtitle is-6'>@johnsmith</p>
                      </div>
                    </div>

                    <div className='content'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec iaculis mauris. <a>@website</a>.
                      <a href='#'>#css</a> <a href='#'>#responsive</a>
                      <br />
                      <time>11:09 PM - 1 Jan 2018</time>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='seciton section--gradient'>
        <div className='container'>
          <div className='columns'>

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
                    {jobs.heading}
                  </h2>
                  <p className='is-size-5'>{jobs.description}</p>
                  <OpenJob data={jobs.open_jobs} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

JoinUsPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  jobs: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    open_jobs: PropTypes.array,
  }),
}

const JoinUsPage = ({data}) => {
  const {frontmatter} = data.markdownRemark
  const {markdownRemark: post} = data

  return (
    <JoinUsPageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      jobs={frontmatter.jobs}
      contentComponent={HTMLContent}
      content={post.html}
    />
  )
}

JoinUsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default JoinUsPage

export const joinUsPageQuery = graphql`
  query JoinUsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_title
        meta_description
        jobs {
          heading
          description
          open_jobs {
            description
            role
            location
            unit
            job_id
          }
        }
      }
    }
  }
`
