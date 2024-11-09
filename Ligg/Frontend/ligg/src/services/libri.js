const BASE_URL ='http://localhost:3005/api/v1',
HEADERS = {"Content-Type":"application/json"};

const libri={
    getAll: async() => {
        return fetch(BASE_URL + '/libro' ,{
            headers:HEADERS
        }).then(res => res.json())
        .then(data => data)
    },
    getAllPerCat: async(reqParams) => {
        return fetch(BASE_URL + '/libro/'+ reqParams ,{
            headers:HEADERS
        }).then(res => res.json())
        .then(data => data)
    },
    getAllPrest: async() => {
        return fetch(BASE_URL + '/prestito/' ,{
            headers:HEADERS
        }).then(res => res.json())
        .then(data => data)
    },
    getAllUtenti: async() => {
        return fetch(BASE_URL + '/libro/nokpt/utenti' ,{
            headers:HEADERS
        }).then(res => res.json())
        .then(data => data)
    },
    getOne: async(reqParams) =>{
        return fetch(BASE_URL + '/prestito/utente/'+reqParams ,{
            headers:HEADERS
        }).then(res => res.json())
        .then(data => data)
    },
    getLibro:async(reqParams) =>{
        return fetch(BASE_URL + '/libro/singolo/'+reqParams ,{
            headers:HEADERS
        }).then(res => res.json())
        .then(data => data)
},
approvaPrest: async(reqParams) =>{
    return fetch(BASE_URL + '/prestito/approva/'+reqParams,{
        method:'put',
        headers:HEADERS
    }).then(res => res.json())
    .then(data => data)
},
NoApprPrestito: async(reqParams) =>{
    return fetch(BASE_URL + '/prestito/Noapprova/'+reqParams,{
        method:'put',
        headers:HEADERS
    }).then(res => res.json())
    .then(data => data)
},
getPrestUt:async(reqParams) =>{
    return fetch(BASE_URL + '/prestito/prestUt/'+reqParams ,{
        headers:HEADERS
    }).then(res => res.json())
    .then(data => data)
    },
getLibriPrestati:async() =>{
    return fetch(BASE_URL + '/prestito/prestiti/',{
        headers:HEADERS
    }).then(res => res.json())
    .then(data => data)
    },
getRichPUt:async(reqParams) =>{
    return fetch(BASE_URL + '/prestito/RichPUt/'+reqParams ,{
        headers:HEADERS
    }).then(res => res.json())
    .then(data => data)
    }
}

export default libri;