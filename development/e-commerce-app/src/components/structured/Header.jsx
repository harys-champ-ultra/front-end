// import '../styled/Header.scss';
// import hamburgerIcon from '../../img/hamburger.svg';
// import { useState } from 'react';

// const Header = () => {
//     const [tray, setTray] = useState(-1)
//     const openTray = () => {
//         setTray((tray) => (
//             tray + 1
//         ))
//     }
//     return (
//         <header className="wrap-head">
//             <nav className="head-nav web">
//                 <ul className="nav-link">
//                     <li className="link-list"><a href="/">E-Commerce</a></li>
//                 </ul>
//                 <ul className="nav-link">
//                     <li className="link-list"><a href="/">Home</a></li>
//                     <li className="link-list"><a href="#">Products</a></li>
//                     <li className="link-list"><a href="#">Cart (0)</a></li>
//                 </ul>
//                 <ul className="nav-link">
//                     <li className="link-list"><a href="#">Login/Register</a></li>
//                 </ul>
//             </nav>
//             <nav className="head-nav mobile">
//                 <ul className="nav-link">
//                     <li className="link-list"><a href="#">E-Commerce</a></li>
//                 </ul>
//                 <ul className="nav-link">
//                     <li className="link-list"><a href="#">Cart ()</a></li>
//                     <li className="link-list"><a onClick={openTray}><img src={hamburgerIcon} alt="Hamburger Icon" /></a></li>
//                 </ul>
//             </nav>
//             <nav className="head-nav tray" style={{ display: tray % 2 === 0 ? "flex" : "none" }}>
//                 <ul className="nav-link">
//                     <li className="link-list"><a href="#">Home</a></li>
//                     <li className="link-list"><a href="#">Products</a></li>
//                     <li className="link-list"><a href="#">Cart ()</a></li>
//                     <li className="link-list"><a href="#">Login/Register</a></li>
//                 </ul>
//             </nav>
//         </header>
//     );
// }

// export default Header;
