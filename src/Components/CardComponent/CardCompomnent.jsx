import React from 'react'
import "./CardComp.css"
import ico from '../images/ico.png';
import maths from '../images/maths.png';
import icon10 from '../images/icon10.png';
import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';

const CardCompomnent = (props) => {
    const [diploma, setDiploma] = useState('');
    const [studyYear, setStudyYear] = useState('');
    const [subject, setSubject] = useState('');

    return (
        <>
            {props.helper === "step1" ?
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
                                    <section className='row'>
                                        <div className='col'>
                                            <input type="radio" id="control_01" name="select" value="1" />
                                            <label for="control_01">
                                                <h6 style={{ marginTop: '5% ' }}>IGCSE</h6 >
                                            </label>
                                        </div>
                                        <div className='col'>
                                            <input type="radio" id="control_02" name="select" value="2" />
                                            <label for="control_02">
                                                <h6 style={{ marginTop: '5% ' }}>American</h6 >
                                            </label>
                                        </div>
                                        <div className='col'>
                                            <input type="radio" id="control_03" name="select" value="3" />
                                            <label for="control_03">
                                                <h6 style={{ marginTop: '5% ' }} >National</h6 >
                                            </label>
                                        </div>
                                    </section>
                                    <div class="row justify-content-center">
                                        <div class="col">
                                            <p class="text-muted">Select the Diploma you are enrolled in</p>
                                        </div>
                                    </div>
                                    <div class="row justify-content-between">
                                        <div class="col-auto">
                                        </div>
                                        <div class="col-auto">
                                            <button type="button" class="btn btn-primary" onClick={props.handleChange}>Continue <span class="ml-2"><i class="fa fa-angle-right" aria-hidden="true"></i></span> </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : ""}
            {props.helper === "step2" ?
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-9">
                            <div class="card text-center justify-content-center shaodw-lg  card-1 border-0 bg-white px-sm-2">
                                <div class="card-body show  ">
                                    <div class="row">
                                        <div class="col">
                                            <h5><b>Study year</b></h5>
                                            <p> Which grade are you in ?  </p>
                                        </div>
                                    </div>
                                    <section className='row'>
                                        <div className='col'>
                                            <input type="radio" id="control_01" name="select" value="1" />
                                            <label for="control_01">
                                                <h6 style={{ marginTop: '5% ' }}>IGCSE</h6 >
                                            </label>
                                        </div>
                                        <div className='col'>
                                            <input type="radio" id="control_02" name="select" value="2" />
                                            <label for="control_02">
                                                <h6 style={{ marginTop: '5% ' }}>American</h6 >
                                            </label>
                                        </div>
                                        <div className='col'>
                                            <input type="radio" id="control_03" name="select" value="3" />
                                            <label for="control_03">
                                                <h6 style={{ marginTop: '5% ' }} >National</h6 >
                                            </label>
                                        </div>
                                    </section>
                                    <div class="row justify-content-center">
                                        <div class="col">
                                            <p class="text-muted">Select the Diploma you are enrolled in</p>
                                        </div>
                                    </div>
                                    <div class="row justify-content-between">
                                        <div class="col-auto">
                                            <button type="button" class="btn btn-outline-secondary" onClick={props.handleChangeBack}> <span class="mr-2"><i class="fa fa-angle-left" aria-hidden="true"></i></span> Back</button>
                                        </div>
                                        <div class="col-auto">
                                            <button type="button" class="btn btn-primary" onClick={props.handleChange}>Continue <span class="ml-2"><i class="fa fa-angle-right" aria-hidden="true"></i></span> </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : ""}
            {props.helper === "step3" ?
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-9">
                            <div class="card text-center justify-content-center shaodw-lg  card-1 border-0 bg-white px-sm-2">
                                <div class="card-body show  ">
                                    <div class="row">
                                        <div class="col">
                                            <h5><b>Subject</b></h5>
                                            <p> What are you studying ay hagaa?  </p>
                                        </div>
                                    </div>
                                    <section className='row'>
                                        <div className='col'>
                                            <input type="radio" id="control_01" name="select" value="1" />
                                            <label for="control_01">
                                                <h6 style={{ marginTop: '5% ' }}>Subejct 1</h6 >
                                            </label>
                                        </div>
                                        <div className='col'>
                                            <input type="radio" id="control_02" name="select" value="2" />
                                            <label for="control_02">
                                                <h6 style={{ marginTop: '5% ' }}>Subejct 2</h6 >
                                            </label>
                                        </div>
                                        <div className='col'>
                                            <input type="radio" id="control_03" name="select" value="3" />
                                            <label for="control_03">
                                                <h6 style={{ marginTop: '5% ' }} >Subejct 3</h6 >
                                            </label>
                                        </div>
                                    </section>
                                    <div class="row justify-content-center">
                                        <div class="col">
                                            <p class="text-muted">Select the Diploma you are enrolled in</p>
                                        </div>
                                    </div>
                                    <div class="row justify-content-between">
                                        <div class="col-auto">
                                            <button type="button" class="btn btn-outline-secondary" onClick={props.handleChangeBack}> <span class="mr-2"><i class="fa fa-angle-left" aria-hidden="true"></i></span> Back</button>
                                        </div>
                                        <div class="col-auto">
                                            <button type="button" class="btn btn-primary" onClick={props.handleChange}>Continue <span class="ml-2"><i class="fa fa-angle-right" aria-hidden="true"></i></span> </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : ""}
            {props.helper === "step4" ?
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-9">
                            <div class="card text-center justify-content-center shaodw-lg  card-1 border-0 bg-white px-sm-2">
                                <div class="card-body show  ">
                                    <div class="row">
                                        <div class="col">
                                            <h5><b>Instructor</b></h5>
                                            <p> Select which instructor  </p>
                                        </div>
                                    </div>
                                    <section className='row'>
                                        <div className='col'>
                                            <input type="radio" id="control_01" name="select" value="1" />
                                            <label for="control_01">
                                                <h6 style={{ marginTop: '5% ' }}>Instructor 1</h6 >
                                            </label>
                                        </div>
                                        <div className='col'>
                                            <input type="radio" id="control_02" name="select" value="2" />
                                            <label for="control_02">
                                                <h6 style={{ marginTop: '5% ' }}>Instructor 2</h6 >
                                            </label>
                                        </div>
                                        <div className='col'>
                                            <input type="radio" id="control_03" name="select" value="3" />
                                            <label for="control_03">
                                                <h6 style={{ marginTop: '5% ' }} >Instructor 3</h6 >
                                            </label>
                                        </div>
                                    </section>
                                    <div class="row justify-content-center">
                                        <div class="col">
                                            <p class="text-muted">Select the Diploma you are enrolled in</p>
                                        </div>
                                    </div>
                                    <div class="row justify-content-between">
                                        <div class="col-auto">
                                            <button type="button" class="btn btn-outline-secondary" onClick={props.handleChangeBack}> <span class="mr-2"><i class="fa fa-angle-left" aria-hidden="true"></i></span> Back</button>
                                        </div>
                                        <div class="col-auto">
                                            <button type="button" class="btn btn-primary" onClick={props.handleChange}>Continue <span class="ml-2"><i class="fa fa-angle-right" aria-hidden="true"></i></span> </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : ""}
        </>


    )
}

export default CardCompomnent