import React from 'react'
import PropTypes from 'prop-types'

const OpenJob = ({ data }) => (
  <div className='columns'>
    { data.map(job => (
      <div key={job.id} className='column' style={{border: '1px solid #eaecee'}}>
        <section className='section'>
          <h4>{job.title}</h4>
          <p>{job.description}</p>
        </section>
      </div>
    ))}
  </div>
)

OpenJob.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default OpenJob
