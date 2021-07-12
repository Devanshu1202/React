import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='error-type'>
      <div className='error-container'>
        <h1>oops its a dead end</h1>
        <Link to='/' className='btn btn-primary'>
          Back home
        </Link>
      </div>
    </section>
  )
}

export default Error
