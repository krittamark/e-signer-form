const workshopForm = {
	Name: "WorkshopForm",
	Action: "/",
	Method: "post",
	FileUpload: {
		Enable: false,
		Name: "",
		Path: "",
	},
	Inputs: [
		{
			Name: "File",
			Label: "ไฟล์",
			Type: "File",
			Placeholder: "ssss",
			Required: true,
		},
		{
			Name: "CourseName",
			Label: "คอร์สที่รับรอง",
			MaxLength: 35,
			Type: "Text",
			Placeholder: "TextInput-CourseName",
			Required: true,
		},
		{
			Name: "AgreementReceiverName",
			Label: "บุคคลผู้รับใบรับรอง",
			Type: "Text",
			Placeholder: "TextInput-AgreementReceiverName",
			Required: true,
		},
		{
			Name: "AgreementReceiverID",
			Label: "เลขบัตรประจำตัวประชาชน",
			MaxLength: 35,
			Type: "Number",
			Placeholder: "NumberInput-AgreementReceiverID",
			Required: false,
		},
		{
			Name: "CertifiedDetail",
			Label: "เลขที่หนังสือรับรอง",
			MaxLength: 35,
			Type: "Number",
			Placeholder: "NumberInput-CertifiedDetail",
			Required: true,
		},
		{
			Name: "CertificateContextIssueDateTime",
			Label: "วันที่ออกหนังสือรับรองครั้งล่าสุด",
			MaxLength: 35,
			Type: "DateTime",
			Placeholder: "DateTimeInput-CertificateContextIssueDateTime",
			Required: true,
		},
		{
			Name: "CertificateContextIssueDateTime",
			Label: "ขอบเขตที่รับรอง",
			MaxLength: 35,
			Type: "Text",
			Placeholder: "TextInput-CertificateContextIssueDateTime",
			DefaultValue: "การเข้าร่วมอบรม",
			Required: true,
		}
	],
	ActionButtons: [
		{
			Type: "Primary",
			Content: "บันทึกข้อมูล",
			Disabled: false,
		},
	],
}

const testForm = {
	Name: "ฟอร์มทดสอบ",
	Action: "/",
	Method: "get",
	Inputs: [
		{
			Name: "Test",
			Label: "ทดสอบการกรอกข้อมูล",
			MaxLength: 35,
			Type: "Text",
			Placeholder: "Test",
			Required: true,
		},
	],
	ActionButtons: [
		{
			Type: "Primary",
			Content: "ทดสอบปุ่ม",
			Disabled: false,
		},
		{
			Type: "Primary",
			Content: "ff",
			Disabled: false,
		},
	],
};

export {
	workshopForm,
	testForm
}