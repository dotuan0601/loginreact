import React, {useState, useEffect} from 'react';
import {doLogin} from "../action";

function Login() {
    const [formState, setFormState] = useState({
        userName: '',
        password: ''
    });
    const [errMsg, setErrMsg] = useState('');

    const handleOnChange = (e) => {
        switch (e.target.name) {
            case 'username':
                setFormState({...formState, userName: e.target.value});
                break;
            case 'password':
                setFormState({...formState, password: e.target.value});
                break;
            default:
                break;
        }
    };

    const handleLogin = () => {
        let errorMsg = '';
        Object.keys(formState).forEach((k) => {
            if (!formState['' + k]) {
                errorMsg = k + ' is required!';
            }
        });
        if (errorMsg) {
            setErrMsg(errorMsg);
        }
        else {
            setErrMsg('');
            const resLogin = doLogin(formState);
            console.log(resLogin);
            if (resLogin) {
                setErrMsg(resLogin);
            }
        }
    };

    return (
        <>
            <div className="main-container has-footer">
                <form onSubmit={handleLogin}>
                    <div className="row">
                        <span style={{"color": "red"}}>{errMsg}</span>
                    </div>
                    <div className="row">
                        <label htmlFor="username" className="form-group">Username</label>
                        <input type="text" name="username" onChange={handleOnChange}/>
                    </div>
                    <div className="row">
                        <label htmlFor="password" className="form-group">Password</label>
                        <input type="password" name="password" onChange={handleOnChange}/>
                    </div>
                    <div className="row">
                        <button type="button" onClick={handleLogin}>Login now</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login