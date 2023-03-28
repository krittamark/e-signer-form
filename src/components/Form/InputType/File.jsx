const Button = ({ detail }) => {
    return (
        <div className='form-group'>
            <label htmlFor={ detail.Name }>
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
            />
        </div>
    );
};

export default Button;