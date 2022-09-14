import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'


const About = () => {
    let router=useRouter();
    const backHome=()=>{
        router.push('/')
    }
  return (
    <div>
        <div class="card">
  <Image src="/About.jpg" class="card-img-top" alt="..." width={1000} height={1000}></Image>
  <div class="card-body">
    <h5 class="card-title">About</h5>
    <p class="card-text">Magasin Production Limited is a trendy fashion brand that sets opportunities for common people to wear stylish clothes at a minimal price. Having its journey started only in 2022, Magasin has achieved several business awards including the prestigious Edison Awards, Ashden Awards, and the ITC Go Global Awards. Our collections failed to be monocentric in all aspects of the norm, hence we bear and plan to linger the responsibility of every one’s all-time favorite by being a room of products starting from the minimum to full. We surely promise to be and meet your desire as our Managing Director <b>David Andrew</b> says, “Wear confidence as style, and make sure the trend starts from you.”</p>
    
    
    <button class="btn btn-primary" onClick={backHome}>Back to Home</button>
  </div>
</div>
    </div>
  )
}

export default About