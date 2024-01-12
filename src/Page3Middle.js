 
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

function Page3Middle(props) {
    const [dialingCode, setDialingCode] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const handleInputChange = (e) => {
        setDialingCode(e.target.value);
        validateForm();
    };

    const validateForm = () => {
        const isInputFilled = dialingCode && dialingCode.trim() !== '';
        setIsFormValid(isInputFilled);
    };

    const style = {
        paddingLeft: '20px',
        paddingTop: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const style2 = {
        padding: '20px',
        height: '20px',
        padding: '15px',
        width: '280px',
        border: '1px solid #ccccb3',
        borderRadius: '10px',
        fontSize: '20px',
        marginTop: '20px'
    };

    const style3 = {
        padding: '20px',
        height: '0px',
        width: '20px',
        marginLeft: '-10px',
        marginTop: '-39px',
    };

    const style4 = {
        height: '30px',
        width: '200px',
        paddingBottom: '20px',
        fontSize: '25px',
    };

    const style5 = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    const style6 = {
        color: isFormValid ? '#ffffff' : 'white',
        backgroundColor: isFormValid ? '#007acc' : '#1aa3ff',
        border: 'none',
        paddingLeft: '25px',
        paddingRight: '25px',
        borderRadius: '10px',
        fontSize: '19px',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'background 0.1s ease',
        marginTop: '35px',
        width: '330px',
        height: '50px',
    };
    const style7 = {
        fontSize: '15px',
        color: 'grey'
    }

    return (
        <>
            <div style={style}>
                <div style={style5}
                ><span style={style4}>{"+91 7588947364"}</span>
                    <span>
                        <div style={style3}>
                            <FontAwesomeIcon icon={faPencilAlt} style={{ color: 'grey' }} />
                        </div>
                    </span>
                </div>


            </div>
            <span style={style7}>{"We have sent you a message in Telegram with code"}</span>
            <input style={style2} onChange={handleInputChange} placeholder="OTP" />
            <button
                onClick={() => console.log('Dialing Code before navigating:', dialingCode)}
                style={{
                    ...style6,
                    cursor: isFormValid ? 'pointer' : 'not-allowed',
                    backgroundColor: isFormValid ? '#1aa3ff' : '#cccccc',
                }}
                className=""
                disabled={!isFormValid}
            >
                NEXT
            </button>
        </>
    );
}

export default Page3Middle;
