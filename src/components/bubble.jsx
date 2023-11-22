
import './bub.css'

import React from 'react'

export default () => {
  return (
    <section>
      <article className="your__Result">
        <h1 className="light">Your Result</h1>
        <div className="bubble">
          <h2 className="white">
            <span className="big__text white"> 76</span> <br />
            <small className="little light"> of 100</small>
          </h2>
        </div>

        <div className="text-central">
          <h3 className="white">Great</h3>
          <p className='light'>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
      </article>
    </section>

  )
}