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
			Required: true,
			Accept: "application/pdf",
		},
		{
			Name: "certificateContextName",
			Label: "คอร์สที่รับรอง",
			Type: "Text",
			Required: true,
			MaxLength: 35,
			Placeholder: "TextInput-certificateContextName",
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
			Label: "คำตอบหลายตัวเลือก",
			Type: "Checkbox",
			Required: true,
			items: [
				{
					Label: "ตัวเลือก1",
					Value: "option1",
				},
				{
					Label: "ตัวเลือก2",
					Value: "option2",
				},
			]
		},
		{
			Name: "asd",
			Label: "คำตอบหลายตัวเลือก",
			Type: "Radio",
			Required: true,
			items: [
				{
					Label: "ตัวเลือก1",
					Value: "option1",
				},
				{
					Label: "ตัวเลือก2",
					Value: "option2",
				},
			]
		},
		{
			Name: "certificateContextIssueDateTime",
			Label: "ff",
			MaxLength: 35,
			Type: "Date",
			Placeholder: "DateTimeInput-certificateContextIssueDateTime",
			Required: true,
		},
		{
			Name: "aa",
			Label: "ss",
			MaxLength: 35,
			Type: "Time",
			Placeholder: "DateTimeInput-certificateContextIssueDateTime",
			Required: true,
		}
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

const HelloForm = {
	Name: "สวัสกี",
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
	testForm,
	HelloForm
}