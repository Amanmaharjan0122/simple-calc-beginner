import {add, sub, div, mult} from "./Calc";


function App() {
    return (
        <ul>
        <li>{add(20,50)}</li>
        <li>{sub(20,20)}</li>
        <li>{div(40,4)}</li>
        <li>{mult(20,90)}</li>

    </ul>
    )
    
}

export default App;