import { BodyContainer } from "../body/BodyContainer";
import { FooterContainer } from "../footer/FooterContainer";
import { HeaderContainer } from "../header/HeaderContainer";
import { Home } from "./Home";

export const HomeContainer = () => {

    return (
        <Home>
            <HeaderContainer />
            <BodyContainer />
            <FooterContainer />
        </Home>
    );
};