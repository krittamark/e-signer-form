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

	if (!!!formInfo) {
		return <div>Null</div>;
	}

	const inputElements = formInfo.Inputs.map((input, index) => {
		return <Input detail={input} key={index} />
	});

	const actionButtonElements = formInfo.ActionButtons.map((button, index) => {
		return <Button detail={button} key={index} />
	});

	return (
		<section className="">
			<div className="container">
				<h1>{formInfo.Name || null}</h1>
				<div>
					{ formInfo.Description }
				</div>
				<form action={formInfo.Action} method={formInfo.Method} encType="multipart/form-data">
					{inputElements}
					<div className="action-group">
						{actionButtonElements}
					</div>
				</form>
			</div>
		</section>
	);
};

export default Form;