import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

interface ModalProps {
    message: string;
    message2: string;
    isOpen: boolean;
    onClose: () => void;
}

const CustomModal: React.FC<ModalProps> = ({ message, message2, isOpen, onClose }) => {
    const { onOpenChange } = useDisclosure();

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop='blur' isDismissable={false} hideCloseButton>
            <ModalContent>
                <ModalHeader className='flex flex-col gap-1'>Thank you for checking out my site!</ModalHeader>
                <ModalBody>
                    <p>{message}</p>
                    <p>{message2}</p>
                </ModalBody>
                <ModalFooter>
                    <Button color='primary' onPress={onClose}>
                        High Five ✋🏽
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default CustomModal;
