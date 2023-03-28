import { useNavigate, React } from "../../../utils/Imports";

const BackButton = ({ link }) => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="btn btn-sm btn-secondary"
        onClick={() => {
          navigate(link);
        }}
      >
        Back
      </button>
    </div>
  );
};

export default BackButton;
