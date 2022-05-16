import React from "react";

export default function Parts() {
    const [winners, setWinners] = React.useState([]);
    const [names, setNames] = React.useState('');
    const [number, setNumber] = React.useState(0);

    function handleSubmit(event){
        event.preventDefault();
        const new_parts = names.split("\n");
        setWinners(pick(number, new_parts));
    };

    function handleChange(event){
        event.preventDefault();
        setNames(event.target.value)
    };

    function handleChangeNumber(event){
        event.preventDefault();
        setNumber(event.target.value);
    };

    function pick(n, parts){
        // Shuffle array
        const prueba = {'Elena':0, 'Juan': 0, 'Emiliano': 0};
        const shuffled = parts.sort(() => 0.5 - Math.random());

        // Get sub-array of first n elements after shuffle
        let selected = shuffled.slice(0, n);

        return selected;
    };

    return (
        <div>
            
            <form onSubmit = {handleSubmit}>
                <textarea className="form-control" rows="4" placeholder="Participantes" onChange = {handleChange}></textarea>
                <input type="number" className = "form-control" placeholder = '0' onChange = {handleChangeNumber}/>
                <button className = "button-31" type="submit" value="Submit">GO</button>
            </form>

            <div className="card">
                <h3>SORTEADO(S)</h3>
                {winners.map((name) => (
                    <p key = "win" className="font-names">{name}</p>
                ))}
            </div>     
        </div>
    );
}

//<button class="button-31" role="button">Button 31</button>