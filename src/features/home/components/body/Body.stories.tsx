import type { Meta, StoryObj } from '@storybook/react'
import { useBody } from '../../hooks/useBody'
import { Body } from './Body'

const meta: Meta<typeof Body> = {
    title: 'Pages/Body',
    component: Body,
}

export default meta
type Story = StoryObj<typeof Body>


const BodyWithState = () => {

    const props = useBody();

    return (
        <Body
            {...props}
        />
    )
}

export const Default: Story = {
    render: () => <BodyWithState />,
}
