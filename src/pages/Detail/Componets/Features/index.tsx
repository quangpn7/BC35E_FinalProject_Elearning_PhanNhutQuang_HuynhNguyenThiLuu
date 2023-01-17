import React from 'react'
import Feature from './Feature'
type Props = {
    features: []
}
function Features(props: Props) {
    return (
        <ul>
            <Feature label='' content='' />
        </ul>
    )
}

export default Features