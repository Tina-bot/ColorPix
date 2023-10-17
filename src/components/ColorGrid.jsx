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
}

const ColorGrid = ({ ListColors }) => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 4fr))', gap: '12px' }}>
            {ListColors.map((color, index) => (
                <span key={index}>
                    <button
                        style={{
                            backgroundColor: `#${color.hex}`,
                            width: '100%',
                            height: '80px',
                            display: 'flex',
                            flexDirection: 'row-reverse',
                            alignItems: 'flex-end',
                            border: '2px solid',
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
