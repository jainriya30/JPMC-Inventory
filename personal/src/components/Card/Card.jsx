import React from 'react'
import './Card.scss'

const Card = ({title,value}) => {
    return (
        <section className="app__card">
                <div className="app__card-title">
                    <p className='title'>{title}</p>
                </div>
                <div className="app__card-value">
                    <p className='value'>{value}</p>
                </div>
        </section>
    )
}

export default Card