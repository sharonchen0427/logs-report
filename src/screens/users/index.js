import {useEffect} from "react";
import {withMobileDialog} from "@material-ui/core";

const axios = require('axios');

/**
 https://jsonplaceholder.typicode.com/
 */

function Users() {

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(jsonData => console.log(jsonData))

        const response = axios.get('https://jsonplaceholder.typicode.com/users');
        response.then(res => console.log(res.data))
    }, [])

    return (
        <div>

        </div>
    );

}

export default Users;