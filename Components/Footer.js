import React from 'react'
import Link

from 'next/link'
const Footer = () => {
  return (
    <div>
        <div class="card-footer text-muted">
            <Link href='/'>
            <p class="text-center">&copy;Magasin Production Limited 2022</p>
            </Link>
    
  </div>
    </div>
  )
}

export default Footer