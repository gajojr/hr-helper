interface FormTarget extends EventTarget {
	fullName: { value: string };
	linkedin: { value: string };
	github: { value: string };
	email: { value: string };
	pdfFile: { files: FileList };
}

export interface IFormEvent extends React.FormEvent<HTMLFormElement> {
	target: FormTarget;
}
