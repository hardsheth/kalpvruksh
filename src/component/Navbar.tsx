'use client'
import Link from "next/link"
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Collapse } from "reactstrap";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return (
        <div className="mb-3">
            <div className='d-none d-sm-block bg-light p-3'>
                <div className="row">
                    <div className="col-2">
                       <span className="rounded p-3 border border-dark border-1">B</span>
                    </div>
                    <div className="col-sm-7 col-md-8">
                        <div className="d-flex justify-content-evenly">
                            <Link href={'/'} className={`list-group-item list-group-item-action`}>Home</Link>
                            <Link href={'/products'} className={`list-group-item list-group-item-action`}>Products</Link>
                            {/* <Link href={'/gallery'} className={`list-group-item list-group-item-action`}>Gallery</Link> */}
                            <Link href={'/about'} className={`list-group-item list-group-item-action`}>About Us</Link>
                            {/* <Link href={'/contactus'} className={`list-group-item list-group-item-action`}>Contact Us</Link> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-block d-sm-none  bg-light p-3">
                <button className="btn rounded" onClick={toggle}><IoMenu /></button>
                <Collapse isOpen={isOpen}>
                    <ul className="list-group">
                        <Link href={'/'} className="list-group-item">Home</Link>
                        <Link href={'/products'} className="list-group-item">
                            Products
                       </Link>
                        <Link href={'/about'}  className="list-group-item">
                            About Us
                        </Link>
                        {/* <Link href={'/cont'} className="list-group-item">
                            Contact Us
                       </Link> */}
                    </ul>
                </Collapse>
            </div>
        </div>
    )
}
