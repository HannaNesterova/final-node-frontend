import { AiTwotoneHeart } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function MyResolutions({text, deleteResolution, updatingInInput}){
    return(
        <div className={'users_text'}>
            <p> <AiTwotoneHeart /> {text}</p>
            <FaEdit onClick={updatingInInput} className="button_edit"/>
            <MdDelete onClick={deleteResolution} className="button_edit"/>
        </div>
    )
}

export default MyResolutions;