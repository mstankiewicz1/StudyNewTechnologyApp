import React from 'react';

import Input from './Input';

export default {
    title: 'form/Input',
    component: Input
}


export const Small = () => {
    return (
        <input size='small' placeholder='Small size'/>
    )
}

export const Medium = () => {
    return (
        <input size='medium' placeholder='Medium size'/>
    )
}

export const Large = () => {
    return (
        <input size='large' placeholder='Large size'/>
    )
}

Small.storyName = 'Small Input'