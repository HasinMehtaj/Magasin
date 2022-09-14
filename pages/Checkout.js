import React from 'react'


const Checkout = () => {
  return (
    <div>
       <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Shipping address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your personal information with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Phone Number</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">E-mail</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>

  <div class="input-group mb-3">
  <button type="button" class="btn btn-outline-secondary">Select Method of Payment</button>
  <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
  <input type="text" class="form-control" aria-label="Text input with segmented dropdown button"/>
  
</div>
<div class="input-group">
  
  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
  <span class="input-group-text">$</span>
  <span class="input-group-text">0.00</span>
</div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">I agree to all the terms and privacy, and accept the no refund policy in case of cancellation of any product and/or destruction while shipping.</label>
  </div>
  <button type="submit" className="btn btn-primary">Checkout</button>
</form>
    </div>
  )
}

export default Checkout