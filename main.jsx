import { createRoot } from "react-dom/client";
import { App } from "./src/App.jsx";
import { FilterProvider } from "./src/context/FilterContext.jsx"

createRoot(document.getElementById('app')).render(
    <FilterProvider>
        <App />
    </FilterProvider>
)