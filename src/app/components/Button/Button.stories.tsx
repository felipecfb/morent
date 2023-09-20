import { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variation: 'primary',
    title: 'Label',
  },
}

export const Secondary: Story = {
  args: {
    variation: 'secondary',
    title: 'Label',
  },
}

export const Minimal: Story = {
  args: {
    variation: 'minimal',
    title: 'Label',
  },
}
