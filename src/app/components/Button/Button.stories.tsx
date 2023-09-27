import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonVariation } from '.'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variation: ButtonVariation.Primary,
    title: 'Label',
  },
}

export const Secondary: Story = {
  args: {
    variation: ButtonVariation.Secondary,
    title: 'Label',
  },
}

export const Minimal: Story = {
  args: {
    variation: ButtonVariation.Minimal,
    title: 'Label',
  },
}
