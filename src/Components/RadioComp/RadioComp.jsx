import React from 'react'
import "./RadioComp.scss"
const RadioComp = () => {
    return (
        <>

            <section>
                <div>
                    <input type="radio" id="control_01" name="select" value="1" />
                    <label for="control_01">
                        <h3 style={{ marginTop: '5% ' }}>IGCSE</h3 >
                        <p>Select </p>
                    </label>
                </div>
                <div>
                    <input type="radio" id="control_02" name="select" value="2" />
                    <label for="control_02">
                        <h3 style={{ marginTop: '5% ' }}>American</h3 >
                        <p>Select </p>
                    </label>
                </div>
                <div>
                    <input type="radio" id="control_03" name="select" value="3" />
                    <label for="control_03">
                        <h3 style={{ marginTop: '5% ' }} >National</h3 >
                        <p>Select </p>
                    </label>
                </div>
            </section>
        </>
    )
}

export default RadioComp