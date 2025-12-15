import type { Meta, StoryObj } from '@storybook/react'
import { BodyContainer } from '../body/BodyContainer'
import { Home } from './Home'

const meta: Meta<typeof Home> = {
    title: 'Pages/Home',
    component: Home,
}

export default meta
type Story = StoryObj<typeof Home>


const HomeWithState = () => {

    return (
        <Home>
            <BodyContainer />
        </Home>
    )
}

export const Default: Story = {
    render: () => <HomeWithState />,
}
