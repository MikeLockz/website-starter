import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardImage, CardContent, Media, MediaContent, Title, Content, Icon } from 'bloomer'
import ResponsiveEmbed from 'react-responsive-embed'

const Videos = ({ data }) => (
  <div className='columns'>
    { data.map(video => (
      <div key={video.id} className='column is-flex'>
        <Card>
          <CardImage>
            <ResponsiveEmbed source={video.source} ratio='4:3' />
          </CardImage>
          <CardContent>
              <Media>
                  <MediaContent>
                      <Title isSize={4}>{video.description}</Title>
                  </MediaContent>
              </Media>
              <Content>
                Curabitur ligula tortor, tristique non odio nec, imperdiet
                mattis leo. Vivamus aliquam rhoncus tortor vitae convallis. Aliquam non dui nibh. Nam
                a velit at enim sagittis pellentesque.
              </Content>
          </CardContent>
        </Card>
      </div>
    ))}
  </div>
)

Videos.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      source: PropTypes.string,
    })
  ),
}

export default Videos
