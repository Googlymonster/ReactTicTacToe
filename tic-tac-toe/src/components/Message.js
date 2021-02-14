import React from 'react'

const Message = ({hasStarted, isXNext}) => {
    return (
        <div className="Message">
            {hasStarted ? (isXNext ? "It's Xs turn" : "It's Os turn") : "Click to start games" }
        </div>
    )
}

export default Message;
