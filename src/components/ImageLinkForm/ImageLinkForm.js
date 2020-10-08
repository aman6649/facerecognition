import React  from 'react';
import './ImageLinkForm.css';
const ImageLinkForm =({onInputChange , onButtonSubmit}) => {
    return(
        <div >
            <p className='f3 '>
                {'This Magic Brain will detect faces in your picture'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                <input type='text' className='pa2 f4 w-70 center' onChange={onInputChange}/>
            <button className='grow w-30 f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onButtonSubmit}
            >Detect</button>
            </div>
        </div>
        </div>
    );
}

export default ImageLinkForm;