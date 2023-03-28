import TextInput from './InputType/Text';
import NumberInput from './InputType/Number';
import '../../utils/styles/Input.css';

const Input = ({ detail }) => {
    let formInput;

    switch (detail.Type) {
        case "Number":
            formInput = <NumberInput detail={detail} />
            break;

        case "File":
            formInput = <TextInput detail={detail} />
            break;

        case "DateTime":
            formInput = <TextInput detail={detail} />
            break;

        case "Text":
            formInput = <TextInput detail={detail} />
            break;
            
        default:
            formInput = <TextInput detail={detail} />
            break;
    }

    return formInput;
};

export default Input;


//cubic-bezier(0.645, 0.045, 0.355, 1)
//cubic-bezier(0.4, 0, 0.25, 1) 1.05T 800, 300, 400ms
// BG #f5f5f7