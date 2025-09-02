import React from 'react'

function page() {
    return (
        <div className="container">
            <div className="mt-5">
                <form className='offset-md-4' >
                    <h2>
                        Contact Us
                    </h2>
                    <div className="mb-3  col-12 col-md-6">
                        <label htmlFor="" className='form-label'>Email</label>
                        <input type="email" name="" id="" className='form-control' />
                    </div>

                    <div className="mb-3 col-12 col-md-6">
                        <label htmlFor="" className='form-label'>Contact No</label>
                        <input type="email" name="" id="" className='form-control' />
                    </div>
                    <div className="col-12  col-md-6 text-center text-md-start ">
                        <button type="button" className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default page