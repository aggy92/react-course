import React from 'react';
import {useLocation} from "react-router-dom";
import {HeaderWrapper} from "./styled-components";

export const Header = () => {
    const {pathname} = useLocation();
    console.log(pathname);
    const title = pathname && pathname.includes("pokemon") ? "Details" : "List";
    return <HeaderWrapper>{title}</HeaderWrapper>
};