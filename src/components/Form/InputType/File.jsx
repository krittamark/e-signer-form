const Button = ({ detail }) => {
    return (
        <div className='form-group'>
            <label htmlFor={ detail.Name } className="form-title">
                { detail.Label }
            </label>
            { (detail.Required || false) ? <span className="form-required"></span> : null }
            <span className="form-warning"></span>
            <input 
                className='form-input form-file'
                type='file'
                name={ detail.Name || "" }
                id={ detail.Name || "" }
                accept={ detail.Accept || "" }
                required={ detail.Required || false }
                disabled={ detail.Disabled || false }
            />
        </div>
    );
};

export default Button;