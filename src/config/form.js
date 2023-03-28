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
			Name: "masterFile",
			Label: "ไฟล์",
			Type: "File",
			Accept: "application/pdf",
			Required: true,
		},
		{
			Name: "certificateContextName",
			Label: "คอร์สที่รับรอง",
			MaxLength: 35,
			Type: "Text",
			Placeholder: "TextInput-certificateContextName",
			Required: true,
		},
		{
			Name: "receiverName",
			Label: "บุคคลผู้รับใบรับรอง",
			Type: "Text",
			Placeholder: "TextInput-receiverName",
			Required: true,
		},
		{
			Name: "receiverId",
			Label: "เลขบัตรประจำตัวประชาชน",
			MaxLength: 35,
			Type: "Text",
			Placeholder: "NumberInput-receiverId",
			Required: false,
		},
		{
			Name: "certificateContextId",
			Label: "เลขที่หนังสือรับรอง",
			MaxLength: 35,
			Type: "Text",
			Placeholder: "NumberInput-certificateContextId",
			Required: true,
		},
		{
			Name: "certificateContextIssueDateTime",
			Label: "วันที่ออกหนังสือรับรองครั้งล่าสุด",
			MaxLength: 35,
			Type: "DateTime",
			Placeholder: "DateTimeInput-certificateContextIssueDateTime",
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