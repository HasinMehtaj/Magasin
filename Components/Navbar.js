import React from 'react'
import Link from 'next/link'

const Navbar = () => {

  return (
    <div>
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Magasin</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
       <ul className='navbar-nav'><Link href="/"><li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li></Link>
        <Link href="/About"><li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About</a>
        </li></Link>
        <Link href="/Product">
          <li class="nav-item">
          <a class="nav-link" href="#">Product</a>
        </li></Link>
        <Link href="/Cart"><li class="nav-item">
          <a class="nav-link" href="#">Cart</a>
        </li></Link>
        <Link href="/Login"><li class="nav-item">
          <a class="nav-link" href="#">Login</a>
        </li></Link>
         
        <Link href="/Checkout"><li class="nav-item">
          <a class="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Checkout
          </a> 
        </li></Link>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar