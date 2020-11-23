import React from 'react'

const Announcement = ({winner, onStart}) => {
    return (
        <div className="Announcement">
            {winner === "tie" ? (
                <div>Tie Game</div>
            ) : (
                <div>
                    <div>Congrats</div>
                    <h1>{winner}</h1>
                </div>
            )}
            <button className="Button" onClick={onStart}>
                Start
            </button>
        </div>
    )
}

export default Announcement;