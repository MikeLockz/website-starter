import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import '../../css/font-awesome.min.css'
import { Icon } from 'bloomer'

const OpenJob = ({ data }) => (
  <div className='columns'>
    { data.map(job => (
      <div key={job.job_id} className='column'>

          <div className='card'>
            <div className='card-content'>

              <div className='media'>
                <div className='media-left'>
                  <figure className='image is-48x48'>
                    <img src='https://bulma.io/images/placeholders/96x96.png' alt='Placeholder image' />
                  </figure>
                </div>

                <div className='media-content'>
                  <p className='title is-5'>{job.role}</p>
                  <p className='subtitle is-7'>{job.unit} - <span className='is-italic'>{job.location}</span></p>
                </div>
              </div>

              <div className='content'>
                {job.description}
              </div>

              <div className='level is-mobile'>

                  <a className='level-item' aria-label='reply'>
                    <span className='icon is-small'>
                      <i className='fa fa-reply' aria-hidden='true'></i>
                    </span>
                  </a>
                  <a className='level-item' aria-label='retweet'>
                    <span className='icon is-small'>
                      <i className='fa fa-retweet' aria-hidden='true'></i>
                    </span>
                  </a>
                  <a className='level-item' aria-label='like'>
                    <span className='icon is-small'>
                      <Icon hasTextColor="danger" className="fa fa-heart" />
                    </span>
                  </a>

              </div>

            </div>
          </div>

      </div>
    ))}
  </div>
)

OpenJob.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      role: PropTypes.string,
      location: PropTypes.string,
      unit: PropTypes.string,
      job_id: PropTypes.string,
    })
  ),
}

export default OpenJob
