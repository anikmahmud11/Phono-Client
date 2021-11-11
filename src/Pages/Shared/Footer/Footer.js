import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHandshake, faEnvelope, faHome, } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Footer = () => {
    const hotline = <FontAwesomeIcon icon={faUser} />
    const corporate = <FontAwesomeIcon icon={faHandshake} />
    const admin = <FontAwesomeIcon icon={faEnvelope} />
    const home = <FontAwesomeIcon icon={faHome} />

    return (
        <div className="pt-5">
            <div className="container border">
                <div className="row">
                    <div className="col">
                        <div className="col">
                            <div>
                                logo
                            </div>
                            <h5><span className="">{hotline}</span> Hotline</h5>
                            <ul>
                                <li>o1XXXXXXXXXX</li>
                                <li>o1XXXXXXXXXX</li>
                                <li>o1XXXXXXXXXX</li>
                                <li>o1XXXXXXXXXX</li>
                            </ul>
                            <h5><span>{corporate}</span> Corporate Sales</h5>
                            <ul>
                                <li>o1XXXXXXXXXX</li>
                                <li>o1XXXXXXXXXX</li>
                                <p>(9AM to 6PM)</p>
                                <p>Except Weekly & Govt. Holiday</p>

                            </ul>
                            <p><span>{admin}</span><Link to="/#"> admin@admin.com</Link>
                            </p>
                            <p><span>{home}</span> 2/1/E, Eden Center, Arambag, Motijheel, Dhaka-1000</p>
                           
                        </div>
                    </div>
                    <div className="col">
                        <h5>Home</h5>
                        <ul >
                            <li ><a className="text-dark" style={{ textDecoration: 'none' }} href="/#">Books</a></li>
                            <li><a className="text-dark" style={{ textDecoration: 'none' }} href="/#">Electronics</a></li>
                            <li><a className="text-dark" style={{ textDecoration: 'none' }} href="/#">Accessories</a></li>
                            <li><a className="text-dark" style={{ textDecoration: 'none' }} href="/#">Gift Card</a></li>
                        </ul>
                        <h5>Shop by</h5>
                        <ul >
                            <li ><a className="text-dark" style={{ textDecoration: 'none' }} href="/#">Books Category</a></li>
                            <li><a className="text-dark" style={{ textDecoration: 'none' }} href="/#">Electronics Category</a></li>
                            <li><a className="text-dark" style={{ textDecoration: 'none' }} href="/#">Boi Mela 2021</a></li>
                            <li><a className="text-dark" style={{ textDecoration: 'none' }} href="/#">Islamic Book</a></li>
                        </ul>
                    </div>
                    <div className="col">
                    <h5>Products</h5>
                        <ul >
                            <li ><a className="text-dark" style={{ textDecoration: 'none' }} href="/#">Brands</a></li>
                            <li><a className="text-dark" style={{ textDecoration: 'none' }} href="/#">Authors</a></li>
                            <li><a className="text-dark" style={{ textDecoration: 'none' }} href="/#">Publishers</a></li>
                            <li><a className="text-dark" style={{ textDecoration: 'none' }} href="/#">List</a></li>
                        </ul>
                        <h5>Support</h5>
                        <ul >
                            <li ><a className="text-dark" style={{ textDecoration: 'none' }} href="/#">Order Track</a></li>
                            <li><a className="text-dark" style={{ textDecoration: 'none' }} href="/#">Contact Us</a></li>
                            <li><a className="text-dark" style={{ textDecoration: 'none' }} href="/#">Find My Product</a></li>
                            <li><a className="text-dark" style={{ textDecoration: 'none' }} href="/#">Guide</a></li>
                        </ul>
                    </div>
                    <div className="col">
                    <h5>Get to know us</h5>
                        <ul >
                            <li ><a className="text-dark" style={{ textDecoration: 'none' }} href="/#">About Us</a></li>
                            <li><a className="text-dark" style={{ textDecoration: 'none' }} href="/#">Site Map</a></li>
                            <li><a className="text-dark" style={{ textDecoration: 'none' }} href="/#">Publishers</a></li>
                            <li><a className="text-dark" style={{ textDecoration: 'none' }} href="/#">List</a></li>
                        </ul>
                        <div>
                                <h5>Stay Connected</h5>
                                <a href="/#"><img className="w-25" src="https://i.ibb.co/30Qmdd7/downloadadfasfd.png" alt="" /></a>
                                <a href="/#"> <img className="w-25" src="https://i.ibb.co/wSPsCXC/download-2.jpg" alt="" /></a>
                                <a href="/#"> <img className="w-25" src="https://i.ibb.co/6mKrPB0/downdad.png" alt="" /></a>
                            </div>
                    </div>
                    <div className="col">
                    <h5>Policies</h5>
                        <ul >
                            <li ><a className="text-dark" style={{ textDecoration: 'none' }} href="/#">Terms of Use</a></li>
                            <li><a className="text-dark" style={{ textDecoration: 'none' }} href="/#">Privacy Policy</a></li>
                            <li><a className="text-dark" style={{ textDecoration: 'none' }} href="/#">Happy Return</a></li>
                            <li><a className="text-dark" style={{ textDecoration: 'none' }} href="/#">Refund Policy</a></li>
                        </ul>
                    </div>

                </div>
                <div className="row border">
                <h4>We accept payment via</h4>
                   <div className="row">
                    <div className="col">
                      <a href="/#"><img className="w-50" src="https://i.ibb.co/Js3v0Qh/download.png" alt="" /></a>
                      </div>
                      <div className="col">
                       <a  href="/#"><img className="w-25" src="https://i.ibb.co/ByMgfqY/download-1.png" alt="" /></a>
                       </div>
                       <div className="col">
                       <a  href="/#"><img className="w-50" src="https://i.ibb.co/B4DytGt/download-2.png" alt="" /></a>
                       </div>
                       <div className="col">
                       <a  href="/#"><img className="w-50" src="https://i.ibb.co/YyQy1WS/download-3.png" alt="" /></a>
                       </div>
                       <div className="col">
                       <a  href="/#"><img className="w-50" src="https://i.ibb.co/8srGYZ6/download-4.png" alt="" /></a>
                       </div>
                       <div className="col">
                       <a  href="/#"><img className="w-50" src="https://i.ibb.co/s1mgXGm/download-5.png" alt="" /></a>
                       </div>
                       <div className="col">
                       <a  href="/#"><img className="w-50" src="https://i.ibb.co/556f28c/download-6.png" alt="" /></a>
                       </div>
                      
                   </div>
                   
                </div>
                <div className="row text-center mt-2">
                
                 <p>Phono.com is now one of the leading e-commerce organizations in Bangladesh. It is indeed the biggest online mobile shop in Bangladesh that helps you save time and money. You can buy mobiles online with a few clicks or a convenient phone call. With breathtaking discounts and offers you can buy anything from . Superfast cash on delivery service brings the products at your doorstep. Our customer support, return and replacement policies will surely add extra confidence in your online shopping experience. Happy Shopping with Phono.com!</p>
                </div>
                <div className=" container text-center">
                 © 2012-2021 Phono.com
                 </div>
            </div>

        </div>
    );
};

export default Footer;