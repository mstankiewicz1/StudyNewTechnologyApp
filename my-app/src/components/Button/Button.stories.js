import React from 'react';

import Button from './Button';


export default {
    title: 'form/Button',
    component: Button,
    args: {
        children: 'Button'
    },
    argTypes: {
        variantColor: { control: 'text' },
        children: { control: 'text' },
        onClick: { action: 'clicked' }

    }
}

export const Primary = () => {
    return (
            <Button variant='primary'>
                Primary
            </Button>
    )
}

export const Secondary = () => {
    return (
            <Button variant='secondary'>
                Secondary
            </Button>
    )
}

export const Success = () => {
    return (
            <Button variant='success'>
                Success
            </Button>
    )
}

export const Danger = () => {
    return (
            <Button variant='danger'>
                Danger
            </Button>
    )
}

const Template = (args) => {
    return (
        <Button {...args} />
    )
}

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variantColor: 'primary',
    children: 'Primary Args'
}

export const LongPrimary = Template.bind({})
LongPrimary.args = {
    ...PrimaryA.args,
    // children: 'Long Primary Args'
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variantColor: 'secondary',
    // children: 'Secondary Args'
}