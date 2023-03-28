import * as forms from '../config/form.js';
import Input from '../components/Form/Input';
import Button from '../components/Form/Button';

let formList = [];
for (let key in forms) {
	formList.push({
		form: key, 
		name: forms[key].Name
	});
};

const Form = ({ formId }) => {

	let formInfo = forms[formId];

	const inputElements = formInfo.Inputs.map((input, index) => {
		return <Input detail={input} key={index} />
	});

	const actionButtonElements = formInfo.ActionButtons.map((button, index) => {
		return <Button content={button.Content} key={index} />
	});

	return (
		<section className="">
			<div className="container">
				<form action={formInfo.Action} method={formInfo.Method}>
					{inputElements}
					{actionButtonElements}
				</form>
			</div>
		</section>
	);
};

export default Form;