import Homepage from "./components/Homepage"
import About from "./components/About"
import Contagion from "./components/Contagion"
import Symptomps from "./components/Symptomps"

export const routes = [
    {path : '/', component : Homepage},
    {path : '/about', component : About},
    {path : '/contagion', component : Contagion},
    {path : '/symptomps', component : Symptomps}
]