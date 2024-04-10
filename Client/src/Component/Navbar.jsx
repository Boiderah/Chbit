import React from 'react'

const Navbar = () => {
  return (
    <div className="navcont">
        <div>
            <h1>Getbit</h1>
        </div>

        <div>
            <p>Company</p>
            <p>Buy and Sell</p>
            {/* <p></p> */}
        </div>

        <div>
        <Link to={'/signin'}>Sign in</Link>
        <Link to={'/signup'}>Sign up</Link>
        </div>
    </div>
  )
}

export default Navbar