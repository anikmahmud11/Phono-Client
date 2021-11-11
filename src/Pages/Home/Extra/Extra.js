import React from 'react';
import camera from '../../../image/extra1.PNG'
import processor from '../../../image/extra2.PNG'
import ram from '../../../image/extra3.PNG'
const Extra = () => {
    return (
        <div className="container">
            <div className="row row-cols-1">
                <div className="col text-center pt-3 ">
                    <h1 className="fw-bold pt-5 text-danger">WHAT MAKES THE ESSENTIAL DIFFERENT?</h1>
                    <h5 className="text-danger blockquote fw-light">EXPERIENCE HIGH PERFORMANCE AND SECURE</h5>
                </div>
                <div className="row text-center container">
                    <div className="row row-cols-1 row-cols-sm-3">
                        <div className="text-center container"><img className="pt-3" src={camera} alt="" />
                            <h6>DUAL CAMERA</h6>
                            <p className="text-muted">Tristique senectus et netus et malesuada ant reiet fames.</p>

                        </div>
                        <div className="text-center"><img src={processor} alt="" />
                            <h6>INTELLIGENT PROCESSING</h6>
                            <p className="text-muted">Consequat ac habit amet asse felis donec et odio pellentesque diam.
                            </p>
                        </div>
                        <div className="text-center"><img src={ram} alt="" />
                            <h6>8GB DDR5 RAM</h6>
                            <p className="text-muted">Dictum varius duis at consectetur lorem donec massa sap faucibus.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Extra;