import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileWord } from '@fortawesome/free-solid-svg-icons'
import { Label } from 'reactstrap';
import './Document.css'


library.add( faFileWord)

class Document extends Component {
    render() {
        return (
            <div>
               
                    {/* <button className="docbtn">
                    <Label>
                    <FontAwesomeIcon
                        icon="plus"
                    />
                    </Label>
                    </button> */}
<button className="docbtn">
                    <Label>
                    <FontAwesomeIcon
                        icon="file-word"
                        size="10x"
                    />
                    </Label>
                    </button>
            </div>
        );
    }
}

export default Document;