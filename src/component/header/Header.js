import React from 'react'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
        <div className="navbar-brand">Endorsement plugin</div>
        <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
    </nav>
    </div>
  )
}

export default Header
