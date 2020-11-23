import React, {memo} from 'react'

const Square = memo(({value, onClick}) => {
    const style = value ? `squares ${value}` : `squares`;
    return (
        <button className={style} onClick={onClick}>
            {value}
        </button>
    )
})

export default Square;
