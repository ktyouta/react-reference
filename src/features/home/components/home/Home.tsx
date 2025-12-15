import React, { ReactNode } from 'react';
import '../../../../App.css';

type Props = {
    children: ReactNode
}

export const Home = (props: Props) => {

    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
};