const NumberInput = ({ detail }) => {
    return (
        <div className='form-group'>
            <label htmlFor={ detail.Name }>
                { detail.Label }
            </label>
            { (detail.Required || false) ? <span className="form-required"></span> : null }
            <span className="form-warning"></span>
            <input 
                className='form-input form-number'
                type='number'
                name={ detail.Name || "" }
                id={ detail.Name || "" }
                placeholder={ detail.Placeholder || ""}
                defaultValue={ detail.DefaultValue || "" }
            />
        </div>
    );
};

export default NumberInput;