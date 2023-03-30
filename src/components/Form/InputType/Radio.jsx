const RadioInput = ({ detail }) => {

    const radioLists = detail.items.map((item, index) => {
        return  (
            <div key={index}>
                <input 
                    className='form-checkbox'
                    type='radio'
                    name={ detail.Name || "" }
                    id={ `${detail.Name}-${item.Value}` || "" }
                    value={ item.Value || ""}
                />
                <label htmlFor={ `${detail.Name}-${item.Value}` } >
                    { item.Label }
                </label>
            </div>
        );
    });


    return (
        <div className='form-group'>
            <label htmlFor={ detail.Name } className="form-title">
                { detail.Label }
            </label>
            { (detail.Required || false) ? <span className="form-required"></span> : null }
            <span className="form-warning"></span>
            { radioLists }
        </div>
    );
};

export default RadioInput;