import React from 'react'
import { Card } from '../../components'
import './Dashboard.scss'


const content  =
[ 
    {
        head: 'Total Users',
        val: '10'
    },
    {
        title: 'Total Posts',
        value: '10'
    },
  ]
  
const Dashboard = () => {
  return (
    <div className='app__dashboard'>
      {content.map((item,index) => {
      <Card
      key={index}
      title={item.head}
      value={item.val}
      />
      })}
    </div>
  )
}

export default Dashboard