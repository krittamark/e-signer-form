const DateTimeInput = ({ detail }) => {
    return (
        <div className='form-group'>
            <label htmlFor={ detail.Name }>
                { detail.Label }
            </label>
            { (detail.Required || false) ? <span className="form-required"></span> : null }
            <span className="form-warning"></span>
            <input 
                className='form-input form-number'
                type='datetime-local'
                name={ detail.Name || "" }
                id={ detail.Name || "" }
                required={ detail.Required || false }
            />
        </div>
    );
};

export default DateTimeInput;