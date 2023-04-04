import '../../utils/styles/Button.css';

const Button = ({ content, type, action }) => {
    return (
        <div className='form-group'>
            <button className='button primary' type={action}>
                { content }
            </button>
        </div>
    );
};

export default Button;


//cubic-bezier(0.645, 0.045, 0.355, 1)
//cubic-bezier(0.4, 0, 0.25, 1) 1.05T 800, 300, 400ms
// BG #f5f5f7