import React from 'react'

function Home() {
    return (
        <>
    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-4 font-weight-normal">RandoStore.</h1>
        <p className="lead font-weight-normal">Welcome to RandoStore.</p>
         </div>
        <div className="product-device box-shadow d-none d-md-block"></div>
        <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
     </div>
        </>
    )
}
export default Home;