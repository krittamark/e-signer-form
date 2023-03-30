const workshopForm = {
	Name: "WorkshopForm",
	Description: "",
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
			Description: "",
			Required: true,
			Accept: "application/pdf",
		},
		{
			Name: "certificateContextName",
			Label: "คอร์สที่รับรอง",
			Description: "",
			Type: "Text",
			Required: true,
			MaxLength: 35,
			Placeholder: "ชื่อของคอร์สที่รองรับ",
		},
		{
			Name: "receiverName",
			Label: "บุคคลผู้รับใบรับรอง",
			Description: "",
			Type: "Text",
			Placeholder: "ชื่อบุคคลผู้รับใบรับรอง",
			Required: true,
		},
		{
			Name: "receiverId",
			Label: "เลขบัตรประจำตัวประชาชน",
			MaxLength: 35,
			Description: "",
			Type: "Text",
			Placeholder: "เลขบัตรประจำตัวประชาชนของผู้รับใบรับรอง",
			Required: false,
		},
		{
			Name: "certificateContextId",
			Label: "เลขที่หนังสือรับรอง",
			MaxLength: 35,
			Description: "",
			Type: "Text",
			Placeholder: "เลขที่หนังสืออ้างอิง",
			Required: true,
		},
		{
			Name: "certificateContextIssueDateTime",
			Label: "วันที่ออกหนังสือรับรองครั้งล่าสุด",
			MaxLength: 35,
			Description: "",
			Type: "DateTime",
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
	Description: "",
	Action: "/",
	Method: "get",
	Inputs: [
		{
			Name: "Test",
			Label: "คำตอบหลายตัวเลือก",
			Type: "Checkbox",
			Description: "",
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
			Description: "",
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
			Description: "",
			Type: "Date",
			Placeholder: "DateTimeInput-certificateContextIssueDateTime",
			Required: true,
		},
		{
			Name: "aa",
			Label: "ss",
			MaxLength: 35,
			Description: "",
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
	Description: "",
	Action: "/",
	Method: "post",
	Inputs: [
		{
			Name: "Test",
			Label: "ทดสอบการกรอกข้อมูล",
			MaxLength: 35,
			Description: "",
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