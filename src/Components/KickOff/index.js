import './index.css'
import ModalDialog from '../DetailsCard'

const KickOff = () => (
  <div className="kick-main-cont">
    <div className="kick-cont-sec">
      <h1 className="kick-hd">
        Kick off your ACCA Prep journey with IndigoLearn
      </h1>
      <p className="kick-para">
        Sign-in and get instant acccess to our FREE Courses
      </p>
      <div className="kick-mob-details-cont">
        <ModalDialog />
      </div>
      <div className="kick-mobile-cont">
        <div className="kick-bro-cont">
          <p className="kick-sil-para">SILVER LEARNING PARTNER</p>
          <p className="kick-acca">ACCA</p>
        </div>
      </div>
    </div>
    <div className="kick-details-cont">
      <ModalDialog />
    </div>
  </div>
)

export default KickOff
