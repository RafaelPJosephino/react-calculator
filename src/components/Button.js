import React from 'react'


const Button = ({ label, role, span, operation }) => {

    let classStyle = 'button '
    classStyle += span ? span : ''
    classStyle += operation ? ' op' : ''

    return (
        <button className={classStyle} onClick={() => role(label)}>
            {label}
        </button>
    )
}
export default Button
