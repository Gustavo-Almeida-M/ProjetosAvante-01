import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import useAuth  from "../hooks/useAuth";

const Private = ({Item}) => {
    const signed = useAuth();
    return signed ? <Item />: <SignIn />;
}

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/home" element={<Private Item={Home} />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="*" element={<SignIn />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}

export default RoutesApp;