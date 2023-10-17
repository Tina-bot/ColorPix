import { useState } from "react";
import Values from "values.js";

const FormColor = ({ setList }) => {
    const [color, setColor] = useState("pink");
    const [error, setError] = useState(false);

    const handleColor = (e) => {
        e.preventDefault();
        try {
            setError(false);
            let newColor = new Values(color).all(10);
            setList(newColor);
        } catch (e) {
            setError(true);
            console.log(e);
        }
    }

    return (
        <div>
            <h1 className="text-7xl font-bold border-5 border-white text-center m-6" style={{ color: color }}>Color Generator 🌈</h1>
            <form className="flex justify-center" onSubmit={handleColor}>
                <input className="text-black py-2 bg-gray-200 font-inherit text-inherit mr-6 mb-6 p-10 rounded-lg outline-none" type="text" placeholder="#f0f0f0" onChange={e => setColor(e.target.value)} />
                <button className="text-black py-2 bg-gray-200 font-inherit text-inherit mr-6 mb-6 p-10 rounded-lg outline-none" type="submit" value="generated">Generate</button>
            </form>
            {error ? <p className="text-red-500">This color doesn't exist, check it please!</p> : null}
            <br />
        </div>
    )
}

export default FormColor;
