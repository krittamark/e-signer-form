export const emeeting = {
	Name: "E-Meeting",
	Description: "",
	Action: "/",
	Method: "post",
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
			Label: "ระบบที่ได้รับการรับรอง",
			Description: "",
			Type: "Text",
			Required: true,
			MaxLength: 140,
			Placeholder: "ชื่อของคอร์สที่รองรับ",
		},
		{
			Name: "receiverName",
			Label: "หน่วยงานผู้ได้รับการรับรอง",
			Description: "",
			Type: "Text",
			MaxLength: 256,
			Placeholder: "ชื่อบุคคลผู้รับใบรับรอง",
			Required: true,
		},
		{
			Name: "receiverId",
			Label: "เลขทะเบียนนิติบุคคล",
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
			Name: "certificateContextFirstIssueDateTime",
			Label: "วันที่ออกหนังสือรับรองครั้งแรก",
			MaxLength: 35,
			Description: "",
			Type: "DateTime",
			Required: true,
		},
		{
			Name: "certificateContextIssueDateTime",
			Label: "วันที่ออกหนังสือรับรองครั้งล่าสุด",
			MaxLength: 35,
			Description: "",
			Type: "Date",
			Required: true,
		},
		{
			Name: "certificateContextExpireDateTime",
			Label: "วันที่หนังสือรับรองหมดอายุ",
			MaxLength: 35,
			Description: "",
			Type: "Date",
			Required: true,
		},
		{
			Name: "issuerAddressLineOne",
			Label: "ที่อยู่",
			MaxLength: 140,
			Description: "",
			Type: "Text",
			Required: true,
		},
		{
			Name: "issuerAddressLineTwo",
			Label: " ",
			MaxLength: 140,
			Description: "",
			Type: "Text",
			Required: false,
		},
		{
			Name: "issuerAddressLineThree",
			Label: "",
			MaxLength: 140,
			Description: "",
			Type: "Text",
			Required: false,
		},
		{
			Name: "issuerAddressLineFour",
			Label: "",
			MaxLength: 140,
			Description: "",
			Type: "Text",
			Required: false,
		},
		{
			Name: "issuerAddressLineFive",
			Label: "",
			MaxLength: 140,
			Description: "",
			Type: "Text",
			Required: false,
		},
		{
			Name: "certifiedBorder",
			Label: "ขอบข่ายการรับรอง",
			Description: "",
			Type: "Radio",
			items: [
				{
					Label: "การรักษาความปลอดภัยด้านสารสนเทศ การประชุมผ่านสื่ออิเล็กทรอนิกส์ ในเรื่องทั่วไป",
					Value: "option1",
				},
				{
					Label: "การรักษาความปลอดภัยด้านสารสนเทศ การประชุมผ่านสื่ออิเล็กทรอนิกส์ ในเรื่องลับ",
					Value: "option2",
				},
				{
					Label: "การรักษาความปลอดภัยด้านสารสนเทศ การประชุมผ่านสื่ออิเล็กทรอนิส์ ในเรื่องลับ ซึ่งระบบการควบคุมการประชุมติดตั้งและให้บริการอยู่ในราชอาณาจักร",
					Value: "option3",
				},
			],
			Required: true,
		},
		{
			Name: "issuerAddressLineFive",
			Label: "URL QR code",
			MaxLength: 140,
			Description: "",
			Type: "Text",
			Required: true,
		},
	],
	ActionButtons: [
		{
			Type: "Primary",
			Content: "บันทึกข้อมูล",
			Disabled: false,
		},
	],
};