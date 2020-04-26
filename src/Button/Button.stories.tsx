import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from './Button'
import { text } from '@storybook/addon-knobs/react'

const stories = storiesOf('Button', module)

stories.add('Button', () => <Button>{text('text', 'Some text')}</Button>, {
  info: { inline: true },
  text: `
  ### Notes
  Button
  ### Usage
  ~~~js
  <Button>Some text</Button>
  ~~~
`,
})
