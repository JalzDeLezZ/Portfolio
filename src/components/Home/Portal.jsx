import { useContext } from "react";
import ReactDOM from "react-dom";
import { AllContext } from "../../Context/store";
import './styles/Portal.scss';

const Portal = ({ children }) => {
  const {xDispatch} = useContext(AllContext);
  return ReactDOM.createPortal(
    <div className="PortalBackground" onClick={() => {xDispatch({type: "TOGGLE"})}}>{children}</div>,
    document.getElementById("portal")
  );
};
export { Portal };