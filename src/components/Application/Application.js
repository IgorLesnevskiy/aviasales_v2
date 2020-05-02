import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import UpButton from "../UpButton";

import "./Application.scss";
import Page from "../Page";
import Floor from "../Floor";
import Logo from "../Logo";
import FilteredList from "../FilteredList";

library.add(fas);

const LOGO_PARAMS = {
    imageSrc: require("../../resources/images/logo.svg"),
    alt: "",
    title: "",
    url: "",
};

function Application() {
    return (
        <React.Fragment>
            <Page>
                <Floor
                    offsetTop={"large"}
                    offsetBottom={"large"}
                    contentAlign={"center"}
                >
                    <Logo {...LOGO_PARAMS} />
                </Floor>

                <Floor offsetTop={"none"} offsettBottom={"none"}>
                    <FilteredList />
                </Floor>
            </Page>

            <UpButton />
        </React.Fragment>
    );
}

export default Application;
