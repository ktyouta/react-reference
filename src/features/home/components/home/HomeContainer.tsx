import { useHome } from "../../hooks/useHome";
import { Home } from "./Home";

export const HomeContainer = () => {

    const props = useHome();

    return (
        <Home
            {...props}
        />
    );
};