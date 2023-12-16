import AuthModal from "./Modals/Auth";
import EnUzModal from "./Modals/EnUz";
import EnUzEditModal from "./Modals/EnUzEdit";
import UzEnModal from "./Modals/UzEn";
import UzEnEditModal from "./Modals/UzEnEdit";

const ModalVisibility = () => {
  return (
    <>
      <AuthModal />
      <EnUzModal />
      <UzEnModal />
      <EnUzEditModal />
      <UzEnEditModal />
    </>
  );
};

export default ModalVisibility;
