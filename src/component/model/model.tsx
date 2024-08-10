import React, { useEffect } from "react";
import { FiXCircle  } from "react-icons/fi";

const Modal = ({ isOpen, onClose, children }: any) => {
	useEffect(() => {
		const handleKeyDown = (e: any) => {
			if (e.key === "Escape" && isOpen) {
				onClose();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div onClick={onClose} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0, 0, 0, 0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 999999999999999 }}>
			<div onClick={(e) => e.stopPropagation()} style={{ background: "white", height: 'auto', width: '50%', margin: "auto", padding: "2%", border: "1px solid #000", borderRadius: "10px", boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)", position: 'relative'}}>
                <button onClick={onClose} style={{padding: '0px', border: 'none', fontSize: '22px', background: 'transparent', top: '-3px', position: 'absolute', right: '5px'}}><FiXCircle ></FiXCircle></button>
				{children}
			</div>
		</div>
	);
};

export default Modal;