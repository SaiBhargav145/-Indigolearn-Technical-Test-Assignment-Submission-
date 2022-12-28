import {AiFillSmile} from 'react-icons/ai'
import {BsBookHalf} from 'react-icons/bs'
import {ImPlay} from 'react-icons/im'
import {MdGroup} from 'react-icons/md'
import Modeldialog from '../DetailsCard'

import './index.css'

const Brochure = () => (
  <div className="Br-main-Cont br-main-cont-display">
    <div className="br-cont-1-details">
      <h1 className="br-hd">Become ACCA in 18 months</h1>
      <p className="br-para">
        Acquire globally recognized accountancy qualification.ACCA (also called
        as Global CA).and get placed in top MNCs & Bis Begin ACCA prep with 1FIN
        now.
      </p>
      <div className="br-mobile-view-model">
        <Modeldialog />
      </div>
      <div className="all-cards-cont">
        <div className="br-card-main-cont">
          <div className="br-sec-cont">
            <p>
              <AiFillSmile className="br-c-icon" />
              <span className="br-cont-para">Registered Users</span>
            </p>
          </div>
          <p className="br-cont-number">248,755</p>
        </div>
        <div className="br-card-main-cont">
          <div className="br-sec-cont">
            <p>
              <BsBookHalf className="br-c-icon" />
              <span className="br-cont-para"> Courses Enrolled</span>
            </p>
          </div>
          <p className="br-cont-number">65,147</p>
        </div>
        <div className="br-card-main-cont">
          <div className="br-sec-cont">
            <p>
              <ImPlay className="br-c-icon" />
              <span className="br-cont-para">Minutes Watched</span>
            </p>
          </div>
          <p className="br-cont-number">2,088,021,687</p>
        </div>
        <div className="br-card-main-cont">
          <div className="br-sec-cont">
            <p>
              <MdGroup className="br-c-icon" />
              <span className="br-cont-para">Faculty</span>
            </p>
          </div>
          <p className="br-cont-number">8 Experts</p>
        </div>
      </div>
      <div className="br-Btn-main-cont">
        <div className="br-dwn-bttn">
          <button type="button" className="br-btn1">
            Download Brochure
          </button>
        </div>
        <div className="br-ler-cont">
          <p className="bc-sil-para">SILVER LEARNING PARTNER</p>
          <p className="bc-acca">ACCA</p>
        </div>
      </div>
    </div>
    <div className="br-all-screen-view">
      <Modeldialog />
    </div>
  </div>
)

export default Brochure
