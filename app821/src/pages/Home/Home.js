import React from 'react'
import './Home2.css'
import style from './Home.css'
import style2 from './Home.less'

export default class Home extends React.Component {
  render() {
    console.log(style)
    return (
      <div className={style.wrap}>
        <div className={style2.content}>
          this is home~
          <span>hahahaha</span>
        </div>
      </div>
    )
  }
}
