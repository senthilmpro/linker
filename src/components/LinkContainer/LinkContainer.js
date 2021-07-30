import React, { useState } from 'react';
import LinkService from '../../services/link-service';
import './LinkContainer.css';

export default function LinkContainer(props) {

    const [creator, setCreator] = useState("tmp0x");
    const [count, setCount] = useState(4);

    const isNumber = (str) => {
        var pattern = /^\d+$/;
        return pattern.test(str);
    }

    const onCreatorChange = (e) => {
        let txt = e.target.value;
        txt = txt.trim();
        setCreator(txt);
    }

    const onCountChange = (e) => {
        let count = (e.target.value);
        if (!count || !isNumber(count)) {
            count = 0;
            setCount(count);
        } else {
            try {
                count = parseInt(count);
            } catch (err) {
                count = 4;
            }
            setCount(count);
        }

    }

    return (
        <div className='container'>
            <div className="LinkContainerBox">
                {
                    LinkService.generateLinks(count, creator).map(x => <div style={{ "padding": "5px" }}><a href={x.url} target="_blank" rel="noopener noreferrer">{x.title}</a></div>)
                }
            </div>
            <div className="EditSettings">
                <div>
                    <h3>SETTINGS</h3>
                </div>
                <div>
                    <div className="setting form-group row">
                        <label for="creator">Creator</label>
                        <div class="col-sm-2">
                            <input type="text" onChange={onCreatorChange} defaultValue="tmp0x" class="form-control"></input>
                        </div>
                    </div>
                    <div className="setting form-group row">
                        <label for="creator">Count</label>
                        <div class="col-sm-2">
                            <input type="text" onChange={onCountChange} defaultValue={4} class="form-control"></input>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}