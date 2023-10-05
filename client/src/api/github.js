import axiosClient from "./axiosClient";

const github = {
    getInformation: (userName) => axiosClient.get(`/login/${userName}`),
}

export default github;