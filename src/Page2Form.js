import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

import Page3Middle from './Page3Middle';

function Page2Form() {
    const [selectedValue, setSelectedValue] = useState(' ');
    const [dialingCode, setDialingCode] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const style = {
        paddingTop: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    };

    const commonInputStyle = {
        margin: '5px',
        padding: '15px',
        width: '300px',
        height: '25px',
        border: '1px solid #ccccb3',
        borderRadius: '10px',
        fontSize: '20px',
    };

    const checkboxStyle = {
        height: '17px',
        width: '17px',
        backgroundColor: 'lightblue',
        cursor: 'pointer',
    };

    const selectStyle = {
        ...commonInputStyle,
        width: '330px',
        height: '55px',
        marginBottom: '10px',
        fontSize: '17px',
    };

    const style3 = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
        marginLeft: '-130px',
    };

    const style4 = {
        paddingTop: '2px',
        paddingLeft: '5px',
    };

    useEffect(() => {
        const countryCodes = {
            India: '+91 -',
            Pakistan: '+92 -',
            UK: '+44 -',
            US: '+1 -',
            // Add more countries as needed
        };

        setDialingCode(countryCodes[selectedValue.value] || '');
    }, [selectedValue]);

    const handleSelectChange = (newValue) => {
        setSelectedValue(newValue);
        validateForm();
    };

    const handleInputChange = (e) => {
        setDialingCode(e.target.value);
        validateForm();
    };

    const validateForm = () => {
        const isSelectFilled = selectedValue && selectedValue.value !== '';
        const isInputFilled = dialingCode && dialingCode.trim() !== '';
        setIsFormValid(isSelectFilled && isInputFilled);
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

    return (
        <div style={style}>
            <Select
                options={[
                    { value: 'India', label: 'India' },
                    { value: 'Pakistan', label: 'Pakistan' },
                    { value: 'UK', label: 'UK' },
                    { value: 'US', label: 'US' },
                ]}
                styles={{
                    ...selectStyle,
                    control: (provided) => ({
                        ...provided,
                        width: '330px',
                        height: '55px',
                        borderRadius: '10px',
                        marginBottom: '10px',
                    }),
                }}
                placeholder="Select Country"
                value={selectedValue}
                onChange={handleSelectChange}
            />
            <input
                style={commonInputStyle}
                placeholder=""
                value={dialingCode}
                onChange={handleInputChange}
            />
            <div style={style3}>
                <input type="checkbox" id="myCheckbox" style={checkboxStyle} />
                <label style={style4} htmlFor="myCheckbox">
                    Keep me signed in
                </label>
            </div>

            <Link
    to={{
        pathname: "/Page3",
        state: { dialingCode: dialingCode },
    }}
>
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
</Link> 

        </div>
    );
}

export default Page2Form;
