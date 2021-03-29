import { GetJWTTokenRequest } from '../gen/proto/users_pb';

export default class MyUser {
    constructor(first, last) {
        this.userFirstName = first;
        this.userLastName = last;
        this.numPosts = 6;
    }
    getNumPosts() {
        return this.numPosts;
    }
    getUserFirstName() {
        return this.userFirstName;
    }
    getUserLastName() {
        return this.userFirstName;
    }
}