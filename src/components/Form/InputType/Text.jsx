/**
 * Text input commponent. Used by Input core component.
 * 
 * @type 
 * @returns {React.ReactElement} The text input.
 */

const TextInput = ({ detail }) => {
    return (
        <div className='form-group'>
            <label htmlFor={ detail.Name } className="form-title">
                { detail.Label }
            </label>
            { (detail.Required || false) ? <span className="form-required"></span> : null}
            <span className="form-warning"></span>
            <input 
                className='form-input form-text'
                type='text'
                name={ detail.Name || "" }
                id={ detail.Name || "" }
                placeholder={ detail.Placeholder || ""}
                defaultValue={ detail.DefaultValue || "" }
                required={ detail.Required || false }
                maxLength={ detail.MaxLength || 256 }
                disabled={ detail.Disabled || false }
            />
        </div>
    );
};

export default TextInput;