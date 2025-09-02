'use client'
import React from 'react'
import { AccordionBody, AccordionHeader, AccordionItem, UncontrolledAccordion } from 'reactstrap'
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function page() {
    return (
        <div className="container-fluid">
            <div className="mt-5">
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col">
                        <div className="row ms">
                            <img src="/asset/WhatsApp Image 2024-06-04 at 11.37.31_635af66c.jpg" alt="Profile 3" />
                        </div>
                    </div>
                    <div className="col">
                        <h2>Chana Masala</h2>
                        <UncontrolledAccordion
                            defaultOpen={[
                                '1',
                                '2'
                            ]}
                            stayOpen
                        >
                            <AccordionItem className='border-start-0 border-end-0 '>
                                <AccordionHeader targetId="1" >
                                    DESCRIPTION
                                </AccordionHeader>
                                <AccordionBody accordionId="1">
                                    We are proud to present our unique products. You`ll be amazed because we have a largest choice of tremendous spices. We provide only premium quality goods at a fair price. Our vendors and manufacturers guarantee the quality of our spices. There is no doubt about our reputation because it`s perfect and our clients` testimonials can prove this fact.
                                    {/* <code>
                                        .accordion-body
                                    </code> */}
                                    , though the transition does limit overflow.
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className='border-start-0 border-end-0 '>
                                <AccordionHeader targetId="2" >
                                    PRODUCT DETAILS
                                </AccordionHeader>
                                <AccordionBody accordionId="2">
                                    <strong>
                                        This is the second item's accordion body.
                                    </strong>
                                    You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}

                                    , though the transition does limit overflow.
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className='border-start-0 border-end-0 '>
                                <AccordionHeader targetId="3" >
                                    DETAILS INFO
                                </AccordionHeader>
                                <AccordionBody accordionId="3">
                                    <ul className='list-group list-group-flush'>
                                        <li className='list-group-item border-0 fw-bold'>
                                            Vendor: Spices
                                        </li>
                                        <li className='list-group-item border-0 fw-bold'>
                                            Type: Herbs
                                        </li>
                                        <li className='list-group-item border-0 fw-bold'>
                                            Weight: 0lb
                                        </li>
                                        <li className='list-group-item border-0 fw-bold'>
                                            Tags: Dolor
                                        </li>
                                        <li className='list-group-item border-0 fw-bold'>
                                            Collections: Organic Spice Set, Spices & herbs
                                        </li>
                                    </ul>
                                </AccordionBody>
                            </AccordionItem>
                        </UncontrolledAccordion>
                        <p>
                            We are proud to present our unique products. You`ll be amazed because we have a largest choice of tremendous spices. We provide only premium quality goods at a fair price. Our vendors and manufacturers guarantee the quality of our spices. There is no doubt about our reputation because it`s perfect and our clients` testimonials can prove this fact.
                        </p>
                    </div>
                </div>
                <div className="col-12">
                    <div className="container-fluid">
                        <Tabs>
                            <TabList className={`border-0`}>
                                <Tab>DESCRIPTION</Tab>
                                <Tab> ABOUT BRAND</Tab>
                                <Tab>    F.A.Q</Tab>
                            </TabList>

                            <TabPanel>
                                <p>We are proud to present our unique products. You`ll be amazed because we have a largest choice of tremendous spices. We provide only premium quality goods at a fair price. Our vendors and manufacturers guarantee the quality of our spices. There is no doubt about our reputation because it`s perfect and our clients` testimonials can prove this fact.</p>
                            </TabPanel>
                            <TabPanel>
                                <h3>
                                    About BRAND
                                </h3>
                                <h4 className='fw-bold'>
                                    Serving new-new fashion and the best of basics, BRAND gets its inspiration from the latest music, technology and social media trends.
                                </h4>

                                Think jeans that hit different, fresh new outerwear, all-over-print dresses and cozy knitwear and sweats – when we say this brand has you covered, we’re not kidding. Scroll the Brand at VENDY and discover our picks of its clothing, shoes and accessories.
                                <h4>
                                    We are one team
                                </h4>

                                Our workplace is inclusive, and respectful. We encourage and help each other to win together. We see the big picture and collaborate across boundaries, sharing our skills and knowledge in the best interests of our company to create unbeatable customer value.


                            </TabPanel>
                            <TabPanel>
                                {/* <UncontrolledAccordion
                                    defaultOpen={[
                                        '1',
                                        '2'
                                    ]}
                                    stayOpen
                                > */}
                                {/* <AccordionItem className='border-start-0 border-end-0 '>
                                        <AccordionHeader targetId="1" >
                                            DESCRIPTION
                                        </AccordionHeader>
                                        <AccordionBody accordionId="1">
                                            We are proud to present our unique products. You`ll be amazed because we have a largest choice of tremendous spices. We provide only premium quality goods at a fair price. Our vendors and manufacturers guarantee the quality of our spices. There is no doubt about our reputation because it`s perfect and our clients` testimonials can prove this fact.
                                            {/* <code>
                                        .accordion-body
                                    </code> */}
                                {/* , though the transition does limit overflow. */}
                                {/* </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem className='border-start-0 border-end-0 '>
                                        <AccordionHeader targetId="2" >
                                            PRODUCT DETAILS
                                        </AccordionHeader>
                                        <AccordionBody accordionId="2">
                                            <strong>
                                                This is the second item's accordion body.
                                            </strong>
                                            You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}

                                            , though the transition does limit overflow.
                                        </AccordionBody> */}
                                {/* </AccordionItem> */}
                                {/* <AccordionItem className='border-start-0 border-end-0 '>
                            <AccordionHeader targetId="1" >
                                F.A.Q
                            </AccordionHeader>
                            <AccordionBody accordionId="3"> */}
                                <ul className='list-group list-group-flush'>
                                    <li className='list-group-item border-0 fw-bold'>
                                        What is the shelf life of your spices?
                                    </li>
                                    <p>Our spices typically have a shelf life of 1-2 years when stored in a cool, dry place.</p>
                                    <li className='list-group-item border-0 fw-bold'>
                                        Are your spices organic?
                                    </li>
                                    <p>We offer both organic and non-organic spices. Please check the product details for specific information.</p>
                                    <li className='list-group-item border-0 fw-bold'>
                                        How should I store the spices?
                                    </li>
                                    <p>Store spices in airtight containers away from direct sunlight and moisture to maintain freshness.</p>
                                    <li className='list-group-item border-0 fw-bold'>
                                        Do you offer bulk purchase options?
                                    </li>
                                    <p>Yes, we offer bulk purchase options for many of our spices. Contact us for more details.</p>
                                    <li className='list-group-item border-0 fw-bold'>
                                        Can I return or exchange products?
                                    </li>
                                    <p>Returns and exchanges are accepted within 30 days of purchase if the product is unopened and in original condition.</p>
                                </ul>
                                {/* </AccordionBody>
                        </AccordionItem>
                    </UncontrolledAccordion> */}
                            </TabPanel>
                        </Tabs>
                        <ul className='nav justify-content-start gap-4'>
                            <li className='nav-item fw-bold active'>
                                DESCRIPTION
                            </li>
                            <li className='nav-item fw-bold'>
                                ABOUT BRAND
                            </li>
                            <li className='nav-item fw-bold'>
                                F.A.Q
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page