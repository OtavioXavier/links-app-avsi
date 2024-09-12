export type AuthModalProps = {
    visible: boolean;
	onClose: () => void;
	onSubmit: (valor: string) => void;
	name: string;
}