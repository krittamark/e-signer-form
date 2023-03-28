const Button = ({ detail }) => {
    return (
        <div className='form-group'>
            <label htmlFor={ detail.Name }>
                { detail.Label }
            </label>
            { (detail.Required || false) ? <span className="form-required"></span> : null }
            <input 
                className='form-input formfile'
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