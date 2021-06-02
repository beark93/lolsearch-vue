import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();

function getSummorByName(userName) {
    const url = '/api/summoner/' + userName; 
    
    return axios.post(url)
    .then((res) => {
        return res.data;
    })
    .catch(() => {
        return {
            result : "err",
            msg : "서버와의 연결에 실패하였습니다. 잠시 후 다시 시도해주세요."
        };
    }); 
}

export { getSummorByName }; 