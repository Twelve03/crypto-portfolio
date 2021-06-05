import { BsPlus, BsX } from "react-icons/bs";

const ToggleBtn = ({ showSearchBar, onToggle }) => {
  return (
    <div className="toggle-btn" onClick={onToggle}>
      {showSearchBar ? (
        <BsX className="btn-sign" />
      ) : (
        <BsPlus className="btn-sign" />
      )}
    </div>
  );
};

export default ToggleBtn;
