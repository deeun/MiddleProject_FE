import baseURL from '.'; //.으로 지정하면 index.js import 한다는 의미
//일반적으로 .은 현재 경로를 의미, index.js가 기본 파일로 인식되기 떄문

//api 요청에 대한 코드

//Get Todos API
export const getOurAPI = (data) => fetch(`${baseURL}/api/v1/ours`,{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    // body : JSON.stringify(data)
});

//Post Todos API
export const postOurAPI = (data) => fetch(`${baseURL}/api/v1/ours`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body : JSON.stringify(data)
});


// DELETE Todos API
export const deleteOurAPI = (id) => fetch(`${baseURL}/api/v1/ours/${id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
});

