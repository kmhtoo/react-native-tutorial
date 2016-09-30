import {config} from '../constants';

export class api {
  static getUser(accessToken) {
    return fetch(config.host + '/user?accessToken=' + accessToken)
      .then(res => res.json());
  }
  static getFriends(accessToken) {
    return fetch(config.host + '/friends?accessToken=' + accessToken)
      .then(res => res.json());
  }
}
