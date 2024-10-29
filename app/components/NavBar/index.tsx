import { NavBarActionType } from "../../types";

type NavBarProps = {
  navBarAction: NavBarActionType[];
  handleSelectModal: (modal: NavBarActionType) => void;
};

const NavBar: React.FC<NavBarProps> = ({ handleSelectModal, navBarAction }) => {
  return (
    <header className="w-full absolute z-10 text-center">
      {navBarAction.map((action, index) => (
        <a
          key={index}
          className="menu-button cursor-pointer"
          onClick={() => handleSelectModal(action)}
        >
          <span>{action.name}</span>
        </a>
      ))}
    </header>
  );
};

export default NavBar;
