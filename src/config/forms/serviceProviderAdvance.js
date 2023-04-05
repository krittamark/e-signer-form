export const serviceProviderAdvance = {
	Name: "Service Provider (Advance)",
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
			Label: "ระบบที่รับรอง",
			Description: "",
			Type: "Text",
			Required: true,
			MaxLength: 35,
			Placeholder: "ชื่อของคอร์สที่รองรับ",
		},
		{
			Name: "receiverName",
			Label: "หน่วยงานผู้รับใบรับรอง",
			Description: "",
			MaxLength: 256,
			Type: "Text",
			Placeholder: "ชื่อบุคคลผู้รับใบรับรอง",
			Required: true,
		},
		{
			Name: "receiverId",
			Label: "เลขทะเบียนนิติบุคคลผู้รับใบรับรอง",
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
			Description: "",
			Type: "Date",
			Required: true,
		},
		{
			Name: "certificateContextIssueDateTime",
			Label: "วันที่ออกหนังสือรับรองครั้งล่าสุด",
			Description: "",
			Type: "Date",
			Required: true,
		},
		{
			Name: "certificateContextExpireDateTime",
			Label: "วันที่หนังสือรับรองหมดอายุ",
			Description: "",
			Type: "Date",
			Required: true,
		},
		{
			Name: "issuerAddressLineOne",
			Label: "ที่อยู่หน่วยงานผู้รับใบรับรอง",
			MaxLength: 140,
			Description: "",
			Type: "Text",
			Required: true,
		},
		{
			Name: "issuerAddressLineTwo",
			Label: "",
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
			Name: "contentTypeCode",
			Label: "ขอบเขตกระบวนการที่รับรอง",
			MaxLength: 140,
			Description: "",
			DefaultValue: "การจัดทำ นำส่ง เก็บรักษาข้อมูลที่เกี่ยวข้องกับใบกำกับภาษีอิเล็กทรอนิกส์หรือใบรับอิเล็กทรอนิกส์",
			Type: "Text",
			Required: false,
		},
		{
			Name: "urlQrCode",
			Label: "ลิงก์คิวอาร์โค้ด",
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