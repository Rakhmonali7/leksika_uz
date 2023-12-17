import AuthModal from "./Modals/Auth";
import EnUzModal from "./Modals/EnUz";
import EnUzEditModal from "./Modals/EnUzEdit";
import EnUzEditStackModal from "./Modals/EnUzEditStack";
import UzEnModal from "./Modals/UzEn";
import UzEnEditModal from "./Modals/UzEnEdit";
import UzEnEditStackModal from "./Modals/UzEnEditStack";

const ModalVisibility = () => {
  return (
    <>
      <AuthModal />
      <EnUzModal />
      <UzEnModal />
      <EnUzEditModal />
      <UzEnEditModal />
      <EnUzEditStackModal />
      <UzEnEditStackModal />
    </>
  );
};

export default ModalVisibility;
