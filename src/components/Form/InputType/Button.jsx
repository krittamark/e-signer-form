const ButtonInput = ({ detail }) => {
    return (
        <div className='form-group'>
            <label htmlFor={ detail.Name } className="form-title">
                { detail.Label }
            </label>
            { (detail.Required || false) ? <span className="form-required"></span> : null }
            <span className="form-warning"></span>
            <input 
                className='button'
                type='button'
                name={ detail.Name || "" }
                id={ detail.Name || "" }
                placeholder={ detail.Placeholder || ""}
                defaultValue={ detail.DefaultValue || "" }
                required={ detail.Required || false }
                disabled={ detail.Disabled || false }
            />
        </div>
    );
};

export default ButtonInput;