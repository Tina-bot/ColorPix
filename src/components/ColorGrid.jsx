import React from 'react';

const calculateInverseColor = (hexColor) => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);

    const invertedR = 255 - r;
    const invertedG = 255 - g;
    const invertedB = 255 - b;

    const invertedHexColor =
        '#' +
        invertedR.toString(16).padStart(2, '0') +
        invertedG.toString(16).padStart(2, '0') +
        invertedB.toString(16).padStart(2, '0');

    return invertedHexColor;
};

const handleColor = (color) => () => {
    const colorNew = `#${color}`;
    navigator.clipboard.writeText(colorNew);
};

const ColorGrid = ({ ListColors }) => {
    return (
        <div className="w-1/2 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-4">
            {ListColors.map((color, index) => (
                <span key={index}>
                    <button
                        className="w-full h-20 flex flex-row-reverse items-end border-2 border-solid border-black"
                        style={{
                            backgroundColor: `#${color.hex}`,
                            color: calculateInverseColor(`#${color.hex}`),
                        }}
                        onClick={handleColor(color.hex)}
                    >
                        #{color.hex}
                    </button>
                </span>
            ))}
        </div>
    );
};

export default ColorGrid;
