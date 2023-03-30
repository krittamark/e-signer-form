const TimeInput = ({ detail }) => {
    return (
        <div className='form-group'>
            <label htmlFor={ detail.Name } className="form-title">
                { detail.Label }
            </label>
            { (detail.Required || false) ? <span className="form-required"></span> : null }
            <div className="form-description">{detail.Description}</div>
            <span className="form-warning"></span>
            <input 
                className='form-input'
                type='time'
                name={ detail.Name || "" }
                id={ detail.Name || "" }
                required={ detail.Required || false }
                defaultValue={ detail.DefaultValue || "" }
                disabled={ detail.Disabled || false }
            />
        </div>
    );
};

export default TimeInput;