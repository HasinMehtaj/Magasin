import React from 'react'
import Image from 'next/image'


const Product = () => {
  return (
    <div>
     <div className='row row-cols-1 row-cols-md-3 g-4'>
  <div className="col">
    <div className="card h-100">
      <Image src="/Outfit-1.jpg" width={200} height={400} className="card-img-top" alt="..."></Image>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <Image src="/Outfit-2.jpg" width={200} height={400} className="card-img-top" alt="..."></Image>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <Image src="/Outfit-3.jpg" width={200} height={400} className="card-img-top" alt="..."></Image>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <Image src="/Outfit-4.jpg" width={200} height={400} className="card-img-top" alt="..."></Image>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <Image src="/Outfit-4.jpg" width={200} height={400} className="card-img-top" alt="..."></Image>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <Image src="/Outfit-4.jpg" width={200} height={400} className="card-img-top" alt="..."></Image>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
</div>

    
  )
}

export default Product