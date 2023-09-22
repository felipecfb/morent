import { Meta, StoryObj } from '@storybook/react'
import { Input } from '.'

const meta: Meta<typeof Input> = {
  component: Input,
}

export default meta
type Story = StoryObj<typeof Input>

export const Base: Story = {
  args: {
    type: 'text',
    placeholder: 'Placeholder',
    disabled: false,
  },
}
