import { useState } from "react"
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
            <h1 style={{ "color": color }}>Color Generator 🌈</h1>
            <form className="form-color" onSubmit={handleColor}>
                <input type="text" placeholder="#f0f0f0" onChange={e => setColor(e.target.value)} />
                <button type="submit" value="generated">Generate</button>
            </form>
            {error ? <p style={{"color":"red"}}>This color doesn't exist, check it please!</p> : null}
            <br />
        </div>
    )
}

export default FormColor