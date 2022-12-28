import './index.css'

import {BsBookHalf} from 'react-icons/bs'
import {MdAlarmOn} from 'react-icons/md'
import {GrPersonalComputer} from 'react-icons/gr'
import {BiCalendarCheck} from 'react-icons/bi'

const Choose = () => (
  <div className="cho-main-cont">
    <h1 className="cho-main-hd">Why Choose Us?</h1>
    <hr className="cho-hr" />
    <div className="cho-all-card-cont">
      <div className="cho-cont-child">
        <img
          src="https://res.cloudinary.com/dvpzl3ogh/image/upload/v1672159505/ca_concept_nqnbru.png"
          alt="expertLogo"
          className="chos-img-expert"
        />
        <h1 className="chos-card-hd">Expert Faculty</h1>
        <p className="chos-card-para">
          Our Faculty are subject matter expertise with practical
          experience.They belive in StudentFirst principle
        </p>
      </div>
      <div className="cho-cont-child">
        <img
          src="https://res.cloudinary.com/dvpzl3ogh/image/upload/v1672159513/ca_top_faculties_gghzdi.png"
          alt="expertLogo"
          className="chos-img-expert"
        />
        <h1 className="chos-card-hd">Complete Success Package</h1>
        <p className="chos-card-para">
          Leading Exam Prep Destination with Video classes, Live sessions, Doubt
          resolution Forums, E-notes from Kaplan, MCQs, Practice tests,
          Webinars.
        </p>
      </div>
      <div className="cho-cont-child">
        <img
          src="https://res.cloudinary.com/dvpzl3ogh/image/upload/v1672159522/ca_unlimited_views_ahnykz.png"
          alt="expertLogo"
          className="chos-img-expert"
        />
        <h1 className="chos-card-hd">Placements</h1>
        <p className="chos-card-para">
          Resume building workshops, mock interviews and placement drives will
          help you impress the top employers and get the dream job.
        </p>
      </div>
    </div>
    <div className="all-levbels-main-cont">
      <div className="all-level-mob-cont">
        <div className="all-level-child-cont">
          <h1 className="all-level-hd">Levels</h1>
          <p className="all-level-para">
            <span className="all-level-icon">
              <BsBookHalf />
            </span>
            Three (13 papers)
          </p>
        </div>
        <div className="all-level-child-cont">
          <h1 className="all-level-hd">Duration</h1>
          <p className="all-level-para">
            <span>
              <MdAlarmOn />
            </span>
            6-30 months
          </p>
        </div>
      </div>
      <div className="all-level-mob-cont">
        <div className="all-level-child-cont">
          <h1 className="all-level-hd">Exams</h1>
          <p className="all-level-para">
            <span className="all-level-icon">
              <GrPersonalComputer />
            </span>
            quarterly(Online)
          </p>
        </div>
        <div className="all-level-child-cont">
          <h1 className="all-level-hd">Exemptions</h1>
          <p className="all-level-para">
            <span className="all-level-icon">
              <BiCalendarCheck />
            </span>
            Upto 9 papers
          </p>
        </div>
      </div>
    </div>
  </div>
)
export default Choose
