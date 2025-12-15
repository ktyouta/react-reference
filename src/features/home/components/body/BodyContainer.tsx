import { useBody } from "../../hooks/useBody";
import { Body } from "./Body";

export const BodyContainer = () => {

    const props = useBody();

    return (
        <Body
            {...props}
        />
    );
};