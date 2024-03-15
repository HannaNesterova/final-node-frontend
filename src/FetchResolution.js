import axios from 'axios';

const localhost = 'https://final-node-backend.onrender.com';

const getAllResolutions = (setResolution) => {
    axios.get(localhost)
    .then(({data}) => { 
        console.log(data)
        setResolution(data)
    })
}

const addText = (name, setName, setResolution) =>{
    axios.post(`${localhost}/saveResolution`, { name })
    .then(({data}) => {
        console.log(data)
        setName('')
        getAllResolutions(setResolution)
    })
}

const editResolution = (resolutionId, name, setName, setResolution, setEditing) => {
    axios.post(`${localhost}/editResolution`, { name, _id: resolutionId})
    .then(({data}) => {
        console.log(data)
        setName('')
        setEditing(false)
        getAllResolutions(setResolution)
    })
}

const deleteResolution = (_id, setResolution) => {
    axios.post(`${localhost}/deleteResolution`, {_id})
    .then(({data}) => {
        console.log(data)
        getAllResolutions(setResolution)
    })
}


export {getAllResolutions, addText, editResolution, deleteResolution}