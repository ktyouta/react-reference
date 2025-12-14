import type { Meta, StoryObj } from '@storybook/react'
import { useHome } from '../../hooks/useHome'
import { Home } from './Home'

const meta: Meta<typeof Home> = {
    title: 'Pages/Home',
    component: Home,
}

export default meta
type Story = StoryObj<typeof Home>


const HomeWithState = () => {

    const props = useHome();

    return (
        <Home
            {...props}
        />
    )
}

export const Default: Story = {
    render: () => <HomeWithState />,
}
