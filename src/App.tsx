import GlobalStyle from "./styles/GlobalStyle.ts";
import { RouterProvider } from "react-router";
import AppRouter from "./router/AppRouter.tsx";
import MainLayout from "./layouts/MainLayout.tsx";

function App() {
    return (
        <>
            <GlobalStyle />
            <MainLayout />
                <RouterProvider router={AppRouter()} />
        </>
    );
}

export default App;
