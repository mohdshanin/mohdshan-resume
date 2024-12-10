import { HiMiniArrowDownTray } from "react-icons/hi2";
import MohdShanPDF from '../assets/mohdshan-resume.pdf'

export default function Button() {
    const onButtonClick = () => {
        const pdfUrl = MohdShanPDF;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "mohdshan-resume.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <button onClick={onButtonClick}>
            <HiMiniArrowDownTray />
        </button>
    );
};