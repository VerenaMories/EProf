import React from 'react'
import "./CardComp.css"
import ico from '../images/ico.png';
import maths from '../images/maths.png';
import icon10 from '../images/icon10.png';
import { Col, Row } from 'react-bootstrap';
import RadioComp from '../RadioComp/RadioComp';
const CardCompomnent = () => {

    return (
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9">
                    <div class="card text-center justify-content-center shaodw-lg  card-1 border-0 bg-white px-sm-2">
                        <div class="card-body show  ">
                            <div class="row">
                                <div class="col">
                                    <h5><b>Diploma</b></h5>
                                    <p> What are you studying ay hagaa?  </p>
                                </div>
                            </div>
                            <Row>
                                <RadioComp />
                            </Row>
                            <div class="row justify-content-center">
                                <div class="col">
                                    <p class="text-muted">Select the Diploma you are enrolled in</p>
                                </div>
                            </div>
                            <div class="row justify-content-between">
                                <div class="col-auto">
                                    <button type="button" class="btn btn-outline-secondary"> <span class="mr-2"><i class="fa fa-angle-left" aria-hidden="true"></i></span> Back</button>
                                </div>
                                <div class="col-auto">
                                    <button type="button" class="btn btn-primary">Continue <span class="ml-2"><i class="fa fa-angle-right" aria-hidden="true"></i></span> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default CardCompomnent