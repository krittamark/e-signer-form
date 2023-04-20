import DateInput from './InputType/Date';
import TimeInput from './InputType/Time';
import RadioInput from './InputType/Radio';
import CheckboxInput from './InputType/Checkbox';
import DateTimeInput from './InputType/DateTime';
import FileInput from './InputType/File';
import TextInput from './InputType/Text';
import NumberInput from './InputType/Number';
import SelectInput from './InputType/Select';
import { InputPropType } from './propTypes';
import '../../utils/styles/Input.css';


/**
 * Input core component called with 'Type' props
 * 
 * @returns {React.ReactElement} The input.
 */
const Input = ({ detail }) => {
    let formInput;

    switch (detail.Type) {
        case "Number":
            formInput = <NumberInput detail={detail} />
            break;

        case "File":
            formInput = <FileInput detail={detail} />
            break;

        case "DateTime":
            formInput = <DateTimeInput detail={detail} />
            break;

        case "Text":
            formInput = <TextInput detail={detail} />
            break;

        case "Checkbox":
            formInput = <CheckboxInput detail={detail} />
            break;

        case "Radio":
            formInput = <RadioInput detail={detail} />
            break;

        case "Time":
            formInput = <TimeInput detail={detail} />
            break;

        case "Date":
            formInput = <DateInput detail={detail} />
            break;

        case "Select":
            formInput = <SelectInput detail={detail} />
            break;
            
        default:
            formInput = <TextInput detail={detail} />
            break;
    }

    return formInput;
};

Input.propType = InputPropType; 

export default Input;


//cubic-bezier(0.645, 0.045, 0.355, 1)
//cubic-bezier(0.4, 0, 0.25, 1) 1.05T 800, 300, 400ms
// BG #f5f5f7