import ModalLib from "react-modal";

type ModalProps = {
  isModalOpen: boolean;
  handleCloseModal: () => void;
  currentModalOpen: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  currentModalOpen,
  handleCloseModal,
  isModalOpen,
}) => {
  return (
    <>
      <ModalLib
        isOpen={isModalOpen}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            zIndex: 1000,
          },
          content: {
            minWidth: "270px",
            maxWidth: "400px",
            maxHeight: "80%",
            backgroundColor: "#fff",
            overflowX: "hidden",
            overflowY: "auto",
            margin: "auto",
          },
        }}
        onRequestClose={() => handleCloseModal()}
      >
        <div className="flex justify-center md:items-center">
          {currentModalOpen}
        </div>
      </ModalLib>
    </>
  );
};

export default Modal;
