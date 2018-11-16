import React, { Component } from 'react';
import { storage, Button } from 'quant-ui';
class Detail extends Component {
    state = {
        obj: { a: 1, b: 2 },
    }
    click1 = (e) => {
        storage.set("aaa", 123)
    }
    click2 = (e) => {

    }
    render() {
        return (
            <div>
                <h1>Usage</h1>

                localStorage
                <br />
                storage.set(key,val)
                <br />
                <br />
                storage.get(key, def)
                <br />
                <br />
                sessionStorage<br />
                storage.session.set(key, val)<br />
                <br />
                storage.session.get(key, val)<br />

                <h1>API</h1>
                set(key, val)<br />
                set storage with key and val<br />
                <br />
                get(key, def)<br />
                get storage with key, return def if not find<br />
                <br />
                remove(key)<br />
                remove storage with key<br />
                <br />
                has(key)<br />
                determine storage has the key<br />
                <br />
                clear()<br />
                clear all storages<br />
                <br />
                getAll()<br />
                get all the storages<br />
                <br />
                forEach(callback)<br />
                forEach the storages and call the callback function with each storage<br />



            </div>
        );
    }
}
export default Detail;
