import { createRoot } from "react-dom/client";
import "../src/index.css"
import Apps from "../src/App"
import Nav from "../src/Navbar"
const root = createRoot(document.getElementById("root"))

root.render(

<>
<Nav></Nav>
<Apps/>
</>

)