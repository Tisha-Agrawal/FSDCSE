import React, { useState } from 'react';
import cat from './cat.jpeg';

function Imagemanipulation() {
    const [height, setHeight] = useState(100);
    const [width, setWidth] = useState(100);
    const [rotation, setRotation] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState('#ff0009');
    const [innerBackgroundColor, setInnerBackgroundColor] = useState('#ffffff');

    const enhanceHeight = () => {
        setHeight((prevHeight) => prevHeight + 20);
    };

    const enhanceWidth = () => {
        setWidth((prevWidth) => prevWidth + 20);
    };

    const rotateImage = () => {
        setRotation((prevRotation) => prevRotation + 90);
    };

    
    const changeBackground = () => {
        const randomColor =` rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        setBackgroundColor(randomColor);
    };
    
    const changeInnerBackground = () => {
        const randomColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        setInnerBackgroundColor(randomColor);
    };
    

    return (
        <div
            style={{
                border: '2px solid green',
                height: '400px',
                width: '500px',
                margin: '0 auto',
                backgroundColor: backgroundColor,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
            }}
        >
            <div
                style={{
                    border: '1px solid black',
                    height: '200px',
                    width: '200px',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: innerBackgroundColor,
                }}
            >
                <img
                    src={cat}
                    height={height}
                    width={width}
                    alt="cat"
                    
                />
            </div>
            <div>
                <button onClick={changeBackground}>Change Outer Background</button>
                <button onClick={changeInnerBackground}>Change Inner Background</button>
                <button onClick={enhanceHeight}>Enhance Height</button>
                <button onClick={enhanceWidth}>Enhance Width</button>
                <button onClick={rotateImage}>Rotate</button>
            </div>
        </div>
    );
}

export default Imagemanipulation;