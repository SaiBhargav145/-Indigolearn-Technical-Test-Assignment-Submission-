import {Component} from 'react'
// import {NavLink} from 'react-router-dom'
import {IoMdContact, IoMdSchool} from 'react-icons/io'
import {AiFillRead} from 'react-icons/ai'

import {MdOndemandVideo} from 'react-icons/md'

import {BsJustify, BsCaretRightFill, BsBookHalf} from 'react-icons/bs'
import {HiUserCircle, HiShoppingCart} from 'react-icons/hi'
import Choose from '../WhyChooseUs'
import Brochure from '../Become_ACCA_In _18_months'
// import ModalDialog from './Components/DetailsCard'
import LearnACCA from '../LearnInACCA'
import Placement from '../PlacementAssistance'
import KickOff from '../KickOff'
import './index.css'

class Navbar extends Component {
  state = {
    onActive: false,
  }

  handleShowBar = () => {
    this.setState(prevState => ({onActive: !prevState.onActive}))
  }

  render() {
    const {onActive} = this.state
    return (
      <>
        <nav className="navbar-main">
          <div className="nav-container">
            <div className="logo nav-logo">
              <BsJustify
                onClick={this.handleShowBar}
                className="nav-logo-menu"
              />
              <h1 className="nav-logo-hd">IndigoLearn</h1>
            </div>

            <div className={`nav-elements  ${onActive && 'active'}`}>
              <ul>
                <div className="main-cont-list-show">
                  <li className="nav-list-contents">BUY COURSES</li>
                  <li className="nav-list-contents">BUY BOOKS</li>
                  <li className="nav-list-contents">PROGRAMS</li>
                  <li className="nav-list-contents">FREE RESOURCES</li>
                </div>
                <div className="ul-listMobile-cont-show">
                  <IoMdContact className="mobile-log-in-logo" />
                  <p className="mobile-log-in-para">LOGIN/SIGN</p>

                  <div className="additional-details-list-cont-mobile">
                    <hr className="mobile-log-in-hr" />
                    <p className="nav-list-contents">
                      <AiFillRead className="nav-side-mob-logo-p" />
                      BUY COURSES
                    </p>
                    <p className="nav-list-contents">
                      <BsBookHalf className="nav-side-mob-logo-p" />
                      BUY BOOKS
                    </p>
                    <p className="nav-list-contents">
                      <BsCaretRightFill className="nav-side-mob-logo-p" />
                      PROGRAMS
                      <p className="nav-list-contents">
                        <IoMdSchool className="nav-side-mob-logo-p" />
                        SCHOLAR SHIPS
                      </p>
                    </p>
                    <p className="nav-list-contents">
                      <MdOndemandVideo className="nav-side-mob-logo-p" />
                      FREE RESOURCES
                    </p>
                  </div>
                </div>
              </ul>
            </div>
            <div>
              <HiShoppingCart className="cart-logo" />
            </div>
            <div className="nav-login-menu nav-lodin-menu-flex">
              <p className="nav-login-para">
                <HiUserCircle className="nav-login-logo" />
                Log In/Sign Up
              </p>
            </div>
          </div>
        </nav>
        <Brochure />
        <Choose />
        <LearnACCA />
        <Placement />
        <KickOff />
      </>
    )
  }
}

export default Navbar
