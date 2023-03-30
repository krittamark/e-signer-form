import PropTypes from 'prop-types';

const SupportedInputTypes = ['Text', 'Number', 'File', 'Button', 'Checkbox'];

const InputPropType = {
	Name: PropTypes.string.isRequired,
	Label: PropTypes.string.isRequired,
	Type: PropTypes.oneOf(SupportedInputTypes).isRequired,
	Required: PropTypes.bool.isRequired,
	MaxLength: PropTypes.number,
	Placeholder: PropTypes.string,
	Accept: PropTypes.string,
	defaultValue: PropTypes.any
}

const TextInputType = {
	Name: PropTypes.string.isRequired,
	Label: PropTypes.string.isRequired,
	MaxLength: PropTypes.number,
	Placeholder: PropTypes.string,
	Required: PropTypes.bool,
}

const NumberInput = {
	Name: PropTypes.string.isRequired,
	Label: PropTypes.string.isRequired,
	MaxLength: PropTypes.number,
	Placeholder: PropTypes.string,
	Required: PropTypes.bool,
}



export {
	InputPropType,
	TextInputType,
	NumberInput
}