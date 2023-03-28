const Button = ({ detail }) => {
    return (
        <div className='form-group'>
            <label htmlFor={ detail.Name }>
                { detail.Label }
            </label>
            { (detail.Required || false) ? <span className="form-required"></span> : null }
            <input 
                className='button'
                type='button'
                name={ detail.Name || "" }
                id={ detail.Name || "" }
                placeholder={ detail.Placeholder || ""}
                defaultValue={ detail.DefaultValue || "" }
            />
        </div>
    );
};

export default Button;