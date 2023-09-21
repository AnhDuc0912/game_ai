import Home from "../pages/Home";
import Game from "../pages/Game";
import LayoutNothing from "../layouts/LayoutNothing";
import DefaultLayout from "../layouts/DefaultLayout";

const publicRoutes = [
    {path: '/pathFinderVisualizer', component: Home, layout: LayoutNothing},
    {path: '/game', component: Game, layout: DefaultLayout}
]

export {publicRoutes}