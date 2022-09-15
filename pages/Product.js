import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';


const Product = () => {
  let router=useRouter();
  const Cart=()=>{
      router.push('/Cart')
  }
return (
    <div>
     <div className='row row-cols-1 row-cols-md-3 g-4'>
  <div className="col">
    <div className="card h-100">
      <Image src="/Outfit-1.jpg" width={700} height={900} className="card-img-top" alt="..."></Image>
      <div className="card-body">
        <h5 className="card-title">Caramel</h5>
        <p className="card-text">The <b>Cararmel</b> is a semi-casual tartan female overcoat that is versatile enough simple to be paired up with anything that is pretty goto.</p>
        
  <span class="input-group-text">$150.00</span>
  <br/><button type="button" class="btn btn-primary btn-block btn-lg"
                      onClick={Cart}>Add to Cart</button>
  
  
  
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <Image src="/Outfit-6.jpg" width={800} height={650} className="card-img-top" alt="..."></Image>
      <div className="card-body">
        <h5 className="card-title">The Waves</h5>
        <p className="card-text">If only you were looking for the right fit for your feet, <b>Magasin</b> waves and greets you. We got the la perfecto chaussure for you to get into and rush to that good morning walk.

</p>
        <span class="input-group-text">$375.89</span></div>
        <br/><button type="button" class="btn btn-primary btn-block btn-lg"
                      onClick={Cart}>Add to Cart</button>
  
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <Image src="/Outfit-3.jpg" width={400} height={700} className="card-img-top" alt="..."></Image>
      <div className="card-body">
        <h5 className="card-title">The Flyers</h5>
        <p className="card-text">We speak nothing about this summer and the scorching Sun that make us go all with the squinting eyes to be the usual. The ultimate solution is just visible.</p>
        <span class="input-group-text">$75.50</span></div>
        <br/><button type="button" class="btn btn-primary btn-block btn-lg"
                      onClick={Cart}>Add to Cart</button>
  
        </div>
    </div>
    <div className="col">
    <div className="card h-100">
      <Image src="/Outfit-4.jpg" width={650} height={700} className="card-img-top" alt="..."></Image>
      <div className="card-body">
        <h5 className="card-title">Barbie</h5>
        <p className="card-text">This is the stileto for the final hour of the day, wear it girl to party as hard as you can and be the happy tune to yourself.</p>
        <span class="input-group-text">$200.89</span></div>
        <br/><button type="button" class="btn btn-primary btn-block btn-lg"
                      onClick={Cart}>Add to Cart</button>
  
        </div>
    </div>
    
    <div className="col">
    <div className="card h-100">
      <Image src="/Outfit-2.jpg" width={600} height={700} className="card-img-top" alt="..."></Image>
      <div className="card-body">
      <h5 className="card-title">Blue Lagoon</h5>
        <p className="card-text">This is an extremely trendy fit for all those boys who want to keep it simple, yet elegant while just hanging out with friends/going on a casual date.</p>
        <span class="input-group-text">$100.00</span></div>
        <br/><button type="button" class="btn btn-primary btn-block btn-lg"
                      onClick={Cart}>Add to Cart</button>
  
    </div>
    </div> <div className="col">
    <div className="card h-100">
      <Image src="/Outfit-5.jpg" width={600} height={700} className="card-img-top" alt="..."></Image>
      <div className="card-body">
        <h5 className="card-title">The Parrot</h5>
        <p className="card-text">As sharp as the parrot's beak are the edges of this statement crossbody summer-friendly bag is that will cost you almost nothing to make you gain praise and attention from everyone due to its emission of vibrant green colour.</p>
        <span class="input-group-text">$305.50</span></div>
        <br/><button type="button" class="btn btn-primary btn-block btn-lg"
                      onClick={Cart}>Add to Cart</button>
  
        </div>
    </div>
   
  </div>
  
</div>


    
  )
}

export default Product