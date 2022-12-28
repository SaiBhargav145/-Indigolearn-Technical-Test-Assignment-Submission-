import {Modal, Button} from 'react-bootstrap'
import {Component} from 'react'
import './index.css'
import {FcApproval} from 'react-icons/fc'

class ModalDialog extends Component {
  state = {
    initial: false,
    phnInput: '',
    mailInput: '',
    optionId: '',
    optionLevel: '',
  }

  onChangePhn = event => {
    this.setState({phnInput: event.target.value})
  }

  onChangeMail = event => {
    this.setState({mailInput: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  onChangeOptionLevel = event => {
    this.setState({optionLevel: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({
      initial: !prevState.initial,
      phnInput: '',
      mailInput: '',
      optionId: '',
      optionLevel: '',
    }))
  }

  render() {
    const {initial, phnInput, mailInput, optionId, optionLevel} = this.state
    console.log(initial)
    return (
      <div>
        <div className="details-main-cont">
          <h1 className="details-main-hd">
            Aspiring to be an ACCA?Get in touch with us!
          </h1>
          <div className="details-sec-cont">
            <div className="de-ip-cont">
              <input
                type="text"
                placeholder="Phone Number*"
                className="de-input de-place-holer-text"
                onChange={this.onChangePhn}
                value={phnInput}
              />
            </div>
            <div className="de-ip-cont">
              <input
                type="email"
                placeholder="Email ID"
                className="de-input de-place-holer-text"
                onChange={this.onChangeMail}
                value={mailInput}
              />
            </div>
            <div className="de-ip-cont">
              <select
                id="Qualification"
                name="Qualification"
                placeholder="Current Qualification"
                className="de-input de-place-holer-text"
                onChange={this.onChangeOptionId}
                value={optionId}
              >
                <option
                  value=""
                  disabled
                  selected
                  hidden
                  className="initial-select de-place-holer-text"
                >
                  Current Qualification
                </option>
                <option value="CA">CA</option>
                <option value="Bcom">Bcom</option>
                <option value="CMA">CMA</option>
                <option value="CS">CS</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="de-ip-cont">
              <select
                id="Qualification-Intrest"
                name="Qualification-Intrest"
                placeholder="Current Qualification"
                className="de-input de-place-holer-text"
                value={optionLevel}
                onChange={this.onChangeOptionLevel}
              >
                <option
                  value=""
                  disabled
                  selected
                  hidden
                  className="initial-select de-place-holer-text"
                >
                  Intrested In
                </option>
                <option value="ACCA Level I">ACCA Level I</option>
                <option value="ACCA Level II">ACCA Level II</option>
                <option value="ACCA Level III">ACCA Level III </option>
              </select>
            </div>
          </div>

          <>
            <Button onClick={this.onClickButton} className="Succ-Button">
              Request Call Back
            </Button>
            <Modal show={initial} className="model-cont">
              <Modal.Header closeButton onClick={this.onClickButton}>
                <Modal.Title className="Success-hd">
                  Your Response Has Been Recorded
                </Modal.Title>
                <FcApproval className="success-logo" />
              </Modal.Header>
              <Modal.Body className="res-hd-succ">
                One Of Our Executive Will Reach Out To You
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={this.onClickButton}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        </div>
      </div>
    )
  }
}

export default ModalDialog
