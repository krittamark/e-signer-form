export const serviceProviderBasic = {
	Name: "Service Provider (Basic)",
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
			Disabled: false
		},
		{
			Name: "certificateContextName",
			Label: "ระบบที่รับรอง",
			Description: "",
			Type: "Text",
			Required: true,
			MaxLength: 35,
			DefaultValue: "ระบบสารสรเทศของผู้ให้บริการ จัดทำเอกสารอิเล็กทรอนิกส์",
			Placeholder: "ชื่อของคอร์สที่รองรับ",
			Disabled: false
		},
		{
			Name: "receiverName",
			Label: "หน่วยงานผู้รับใบรับรอง",
			Description: "",
			Type: "Text",
			MaxLength: 256,
			Placeholder: "ชื่อบุคคลผู้รับใบรับรอง",
			Required: true,
			Disabled: false
		},
		{
			Name: "receiverId",
			Label: "เลขทะเบียนนิติบุคคลผู้รับใบรับรอง",
			MaxLength: 35,
			Description: "",
			Type: "Text",
			Placeholder: "เลขบัตรประจำตัวประชาชนของผู้รับใบรับรอง",
			Required: false,
			Disabled: false
		},
		{
			Name: "certificateContextId",
			Label: "เลขที่หนังสือรับรอง",
			MaxLength: 35,
			Description: "",
			Type: "Text",
			Placeholder: "เลขที่หนังสืออ้างอิง",
			Required: true,
			Disabled: false
		},
		{
			Name: "certificateContextFirstIssueDateTime",
			Label: "วันที่ออกหนังสือรับรองครั้งแรก",
			Description: "",
			Type: "Date",
			Required: true,
			Disabled: false
		},
		{
			Name: "certificateContextIssueDateTime",
			Label: "วันที่ออกหนังสือรับรองครั้งล่าสุด",
			Description: "",
			Type: "Date",
			Required: true,
			Disabled: false
		},
		{
			Name: "certificateContextExpireDateTime",
			Label: "วันที่หนังสือรับรองหมดอายุ",
			Description: "",
			Type: "Date",
			Required: true,
			Disabled: false
		},
		{
			Name: "issuerAddressLineOne",
			Label: "ที่อยู่หน่วยงานผู้รับใบรับรอง",
			MaxLength: 140,
			Description: "",
			Type: "Text",
			Required: true,
			Disabled: false
		},
		{
			Name: "issuerAddressLineTwo",
			Label: " ",
			MaxLength: 140,
			Description: "",
			Type: "Text",
			Required: false,
			Disabled: false
		},
		{
			Name: "issuerAddressLineThree",
			Label: "",
			MaxLength: 140,
			Description: "",
			Type: "Text",
			Required: false,
			Disabled: false
		},
		{
			Name: "issuerAddressLineFour",
			Label: "",
			MaxLength: 140,
			Description: "",
			Type: "Text",
			Required: false,
			Disabled: false
		},
		{
			Name: "issuerAddressLineFive",
			Label: "",
			MaxLength: 140,
			Description: "",
			Type: "Text",
			Required: false,
			Disabled: false
		},
		{
			Name: "issuerAddressLineFive",
			Label: "ขอบเขตกระบวนการที่รับรอง",
			MaxLength: 140,
			Description: "",
			DefaultValue: "การส่งข้อมูลที่เกี่ยวข้องกับใบกำกับภาษีอิเล็กทรอนิกส์หรือใบรับอิเล็กทรอนิกส์",
			Type: "Text",
			Required: false,
			Disabled: false
		},
		{
			Name: "issuerAddressLineFive",
			Label: "ลิงก์คิวอาร์โค้ด",
			MaxLength: 140,
			Description: "",
			Type: "Text",
			Required: true,
			Disabled: false
		},
	],
	ActionButtons: [
		{
			Type: "Primary",
			Action: "submit",
			Content: "บันทึกข้อมูล",
			Disabled: false,
		},
		{
			Type: "Secondary",
			Action: "reset",
			Content: "ยกเลิก",
			Disabled: false,
		},
	],
};