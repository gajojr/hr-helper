export type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
	data: ServerResponse;
};

export interface ServerResponse {
	data: {
		jsonOut: {
			candidate_pros: [];
			candidate_cons: [];
			candidate_score: number;
		};
	};
}
