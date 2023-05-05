"use client";
import React, { useContext } from "react";
import { UseContext } from "../store/store";
import PortFolio from "./openFolder/portfolio";
import AboutUs from "./openFolder/aboutUs";
import ContactUs from "./openFolder/contactUs";

export default function ClientComponent() {
    const context = useContext(UseContext);
    const { openFolder, setOpenFolder } = context;

    const openFolderHandler = (e) => {
        if (e === "AboutUs") {
            return <AboutUs />;
        } else if (e === "PortFolio") {
            return <PortFolio />;
        } else if (e === "ContactUs") {
            return <ContactUs />;
        } else {
            return null;
        }
    };

    return (
        <div
            className="openFolderContainer"
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
        >
            {openFolderHandler(openFolder)}
        </div>
    );
}
