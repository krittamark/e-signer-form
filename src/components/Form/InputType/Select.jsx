const SelectInput = ({ detail }) => {

    const optionLists = detail.Items.map((item, index) => {
        return  (
            <option key={index} value={ item.Value || ""}>{ item.Label }</option>
        );
    });


    return (
        <div className='form-group'>
            <label htmlFor={ detail.Name } className="form-title">
                { detail.Label }
            </label>
            { (detail.Required || false) ? <span className="form-required"></span> : null }
            <span className="form-warning"></span>
            <select
                name={ detail.Name }
                id={ detail.Name || "" }
                className='form-input form-select'
                required={ detail.Required || false }
                disabled={ detail.Disabled || false }
            >
                { optionLists }
            </select>
        </div>
    );
};

export default SelectInput;