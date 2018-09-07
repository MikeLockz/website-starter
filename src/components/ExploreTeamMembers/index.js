import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Tabs, TabList, Tab, TabLink, Icon, Tile, Box, Title, Subtitle } from 'bloomer'

const ExploreTeamMembers = ({ data }) => {

  return (
    <div>
      <Tabs isAlign='center'>
        <TabList isAlign='center'>
            <Tab isActive>
                <TabLink>
                    <span>First Group</span>
                </TabLink>
            </Tab>
            <Tab>
                <TabLink>
                    <span>Second Group</span>
                </TabLink>
            </Tab>
            <Tab>
                <TabLink>
                    <span>Third Groups</span>
                </TabLink>
            </Tab>
        </TabList>
      </Tabs>

      <Tile isAncestor>
        <Tile isSize={4} isVertical isParent>
          { data.map(member => (
            <Tile isChild render={
              props => (
                <Box {...props}>
                  <Title isSize={5}>{ member.name }</Title>
                  <Subtitle isSize={6}>{ member.spoke }</Subtitle>
                  <p>{ member.bio }</p>

                  {member.tags.map(tag => (
                    <li key={tag} className='is-size-5'>
                      {tag}
                    </li>
                  ))}

                </Box>
              )
            } />
          ))}
        </Tile>
    </Tile>

    </div>
  )
}

ExploreTeamMembers.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      spoke: PropTypes.string,
      bio: PropTypes.string,
      tags: PropTypes.array,
    })
  ),
}

export default ExploreTeamMembers
