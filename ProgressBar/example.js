import React from 'react'
import ProgressBar from '../ProgressBar'
import * as Title from '../Title'
import * as Paragraph from '../Paragraph'
import Strong from '../Strong'
import { LIVE, SHOWCASE } from '../Showroom/variationTypes'

class TimedExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      percentage: Math.random() * 100
    }
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      const add = Math.random() * 100
      this.setState({ percentage: (this.state.percentage + add) % 100 })
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    return (
      <ProgressBar
        percentage={this.state.percentage}
        {...this.props}
      />
    )
  }
}

export default {
  title: 'ProgressBar',

  variations: [
    {
      title: 'Showcase',
      type: SHOWCASE,
      example: <div style={{display: 'flex', marginTop: 60}}>
        <div style={{flex: 1, margin: `60px 20px 0px 20px`}}>
          <div style={{marginBottom: 20}}>
            <TimedExample />
          </div>
          <div style={{marginBottom: 20}}>
            <TimedExample
              fillColor='blue'
            />
          </div>
          <div style={{marginBottom: 20}}>
            <TimedExample
              borderColor='light-blue'
              fillColor='gray'
            />
          </div>
        </div>

        <div style={{flex: 1, margin: `0px 20px`}}>
          <Title.Secondary margins>Animated progress bars</Title.Secondary>
          <Paragraph.Primary margins>
            Just changing the <Strong>percentage</Strong> prop will cause the bar to animate. The animation is based on the physics of a spring, so the timing of it depends on how big the different of width is.
          </Paragraph.Primary>

          <Paragraph.Primary margins>
            In this example, the bars get updated to a random number between 0 and 100 every second.
          </Paragraph.Primary>
        </div>
      </div>
    },

    {
      title: 'Variations',
      require: 'import ProgressBar from \'@klarna/ui/ProgressBar\'',
      type: LIVE,

      examples: {
        Regular: <ProgressBar percentage={50} />,

        Blue: <ProgressBar percentage={33} fillColor='blue' />,

        'Light blue': <ProgressBar
          percentage={80}
          borderColor='light-blue'
          fillColor='gray'
        />,

        'Custom inline styles': <ProgressBar
          percentage={50}
          style={{height: '20px', width: '70%'}}
        />
      }
    }
  ]
}
