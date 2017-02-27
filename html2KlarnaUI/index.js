import React from 'react'
import html2react from 'html2react'
import Strong from '../Strong'
import * as Paragraph from '../Paragraph'
import * as Title from '../Title'

export default html2react({
  h1: (props) => <Title.Primary margins {...props} />,
  p: (props) => <Paragraph.Primary margins {...props} />,
  strong: Strong
})
