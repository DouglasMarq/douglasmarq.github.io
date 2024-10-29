import { useCallback, useMemo, useState } from "react";
import { NavBarActionType } from "../types";
import { NavBarAction } from "../constants/actionTypes";

const useRootLayout = () => {
  const modals = useMemo(() => {
    const modals = NavBarAction.filter((action) => action.type === "modal");

    return modals.reduce((acc, modal) => {
      return {
        ...acc,
        [modal.name]: modal.children,
      };
    }, {});
  }, []);

  const [currentModalOpen, setCurrentModalOpen] = useState<
    NavBarActionType["children"] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setCurrentModalOpen(null);
  }, []);

  const handleSelectModal = useCallback((modal: NavBarActionType) => {
    if (modal?.url) return window.open(modal.url, "_blank");
    setIsModalOpen(true);
    setCurrentModalOpen(modals[modal.name]);
  }, []);

  return {
    isModalOpen,
    currentModalOpen,
    handleSelectModal,
    handleCloseModal,
  };
};

export default useRootLayout;
