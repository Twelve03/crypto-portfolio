import { BsPlus, BsX } from "react-icons/bs";

const ToggleBtn = ({ showSearchBar, toggleSearch }) => {
  return (
    <div className="toggle-btn" onClick={toggleSearch}>
      {showSearchBar ? (
        <BsX className="btn-sign" />
      ) : (
        <BsPlus className="btn-sign" />
      )}
    </div>
  );
};

export default ToggleBtn;
