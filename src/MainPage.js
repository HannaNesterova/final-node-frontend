import { useEffect, useState } from 'react';
import './App.css';
import MyResolutions from './MyResolutions';
import { getAllResolutions, addText, editResolution, deleteResolution } from './FetchResolution';

function MainPage(){
    const [myResolution, setResolution] = useState([]);
    const [name, setName] = useState('');
    const [editing, setEditing] = useState(false);
    const [resolutionId, setResolutionId] = useState('');

    useEffect(() => {
        getAllResolutions(setResolution)
    },[])

    const updatingInInput = (_id, name) => {
        setEditing(true);
        setName(name);
        setResolutionId(_id)
    }

    return(
        <div className="input-box">
            <h1>My resolutions for this year</h1>
            <p>You can make several decisions to change your life for the better! </p>
                <input className="input"
                type="text"
                placeholder="Add your text..."
                value={name}
                onChange={(e) => setName(e.target.value)}/>
                <button
                disabled={!name}
                 onClick={editing ? () => editResolution(resolutionId, name, setName, setResolution, setEditing) 
                    :
                    () => addText(name, setName, setResolution)}>
                        {editing ? 'EDIT' : 'ADD'}
                    </button>

                {myResolution.map((item, index) => 
                <MyResolutions key={index} 
                    text={item.name}
                    updatingInInput={() => updatingInInput(item._id, item.name)}
                    deleteResolution={() => deleteResolution(item._id, setResolution)}/>
                )}
        </div>
    )
}

export default MainPage;