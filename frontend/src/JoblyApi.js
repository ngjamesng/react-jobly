import axios from "axios";

class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    paramsOrData._token = localStorage.getItem('_token');

    // // for now, hardcode token for "testing"
      // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc" +
      // "3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU1MzcwMzE1M30." +
      // "COmFETEsTxN_VfIlgIKw0bYJLkvbRQNgO1XCSE8NZ0U"

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3000/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData
      })).data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
    }

    catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // COMPANY ROUTES *******************************
  static async getCompanies(data) {
    let res = await this.request(`companies`, data);
    return res.companies;
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async postCompany(data) {
    let res = await this.request(`companies`, data, "post")
    return res.company;
  }

  static async patchCompany(handle, data) {
    let res = await this.request(`companies/${handle}`, data, "patch")
    return res.company;
  }

  static async deleteCompany(handle, data) {
    let res = await this.request(`companies/${handle}`, data, "delete")
    return res.message;
  }


  // JOB ROUTES *******************************
  static async getJobs(data) {
    let res = await this.request(`jobs`, data);
    return res.jobs;
  }

  static async getJob(id) {
    let res = await this.request(`jobs/${id}`);
    return res.job;
  }

  static async postJob(data) {
    let res = await this.request(`jobs`, data, "post");
    return res.job;
  }

  static async patchJob(id, data) {
    let res = await this.request(`jobs/${id}`, data, "patch");
    return res.job;
  }

  static async deleteJob(id, data) {
    let res = await this.request(`jobs/${id}`, data, "delete");
    return res.message;
  }


  // USER ROUTES *******************************
  static async getUsers() {
    let res = await this.request(`users`);
    return res.users;
  }

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async signUp(data) {
    let res = await this.request(`users`, data, "post");
    return res.token;
  }

  static async patchUser(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }

  static async deleteUser(username, data) {
    let res = await this.request(`users/${username}`, data, "delete");
    return res.message;
  }



  // AUTH ROUTES *******************************
  static async login(data) {
    let res = await this.request(`login`, data, "post");
    return res.token;
  }

}

export default JoblyApi