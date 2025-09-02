'use client'
import Link from "next/link"
import Image from "next/image"
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Collapse } from "reactstrap";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return (
        <div className="mb-3">
            <div className='d-none d-sm-block ' style={{ backgroundColor: 'var(--primary-color)', color: 'var(--light-text)' }}>
                <div className="row align-items-center">
                    <div className="col-2">
                        <Image src="/asset/Logo.png" alt="Logo" width={60} height={60} className="rounded" />
                    </div>
                    <div className="col-sm-7 col-md-8">
                        <div className="d-flex justify-content-evenly">
                            <Link href={'/'} className="text-decoration-none px-3 py-2 rounded" style={{ color: 'var(--light-text)', transition: 'background-color 0.3s ease' }} onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--secondary-color)'} onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}>Home</Link>
                            <Link href={'/products'} className="text-decoration-none px-3 py-2 rounded" style={{ color: 'var(--light-text)', transition: 'background-color 0.3s ease' }} onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--secondary-color)'} onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}>Products</Link>
                            <Link href={'/about'} className="text-decoration-none px-3 py-2 rounded" style={{ color: 'var(--light-text)', transition: 'background-color 0.3s ease' }} onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--secondary-color)'} onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}>About Us</Link>
                            <Link href={'/contactus'} className="text-decoration-none px-3 py-2 rounded" style={{ color: 'var(--light-text)', transition: 'background-color 0.3s ease' }} onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--secondary-color)'} onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-block d-sm-none " style={{ backgroundColor: 'var(--primary-color)', color: 'var(--light-text)' }}>
                <div className="d-flex align-items-center justify-content-between">
                    <Image src="/asset/Logo.png" alt="Logo" width={40} height={40} className="rounded" />
                    <button className="btn rounded" style={{ backgroundColor: 'var(--secondary-color)', color: 'var(--light-text)' }} onClick={toggle}><IoMenu /></button>
                </div>
                <Collapse isOpen={isOpen}>
                    <ul className="list-group">
                        <Link href={'/'} className="list-group-item text-decoration-none" style={{ color: 'var(--dark-text)' }}>Home</Link>
                        <Link href={'/products'} className="list-group-item text-decoration-none" style={{ color: 'var(--dark-text)' }}>
                            Products
                        </Link>
                        <Link href={'/about'} className="list-group-item text-decoration-none" style={{ color: 'var(--dark-text)' }}>
                            About Us
                        </Link>
                        <Link href={'/contactus'} className="list-group-item text-decoration-none" style={{ color: 'var(--dark-text)' }}>
                            Contact Us
                        </Link>
                    </ul>
                </Collapse>
            </div>
        </div>
    )
}
