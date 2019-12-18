import {dbJson} from "./db";

export function doLogin(loginData) {
    const userName = loginData.hasOwnProperty('userName') ? loginData['userName'] : '';
    const password = loginData.hasOwnProperty('password') ? loginData['password'] : '';

    dbJson.forEach((eachRow) => {
        if (userName === eachRow['name'] && password === eachRow['password']) {
            window.location.href = '/profile';
        }
    });

    return 'Incorrect username or password';
}