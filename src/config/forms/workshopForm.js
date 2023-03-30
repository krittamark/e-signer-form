export const workshopForm = {
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
};