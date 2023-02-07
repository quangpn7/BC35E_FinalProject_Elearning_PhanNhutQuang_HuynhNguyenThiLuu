import React from 'react'

type Props = {}

function Loading({ }: Props) {
    return (
        <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Loading