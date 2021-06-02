import { BsPlus, BsX } from "react-icons/bs";

const ToggleBtn = ({ showAddForm, onToggle }) => {
  return (
    <div className="toggle-btn" onClick={onToggle}>
      {showAddForm ? (
        <BsX className="btn-sign" />
      ) : (
        <BsPlus className="btn-sign" />
      )}
    </div>
  );
};

export default ToggleBtn;
