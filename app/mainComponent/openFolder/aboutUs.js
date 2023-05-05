import { UseContext } from "@/app/store/store";
import React, { useContext } from "react";

export default function AboutUs() {
    const context = useContext(UseContext);
    const { openFolder, setOpenFolder } = context;
    return (
        <div className="aboutUsFolder">
            <div className="head">
                <div className="left">
                    <div className="icon_indicator">
                        <div
                            className="red"
                            onClick={() => {
                                setOpenFolder("close");
                            }}
                        ></div>
                        <div className="orange"></div>
                        <div className="green"></div>
                    </div>
                    <div className="divider"></div>
                    <div className="font-portfolio">
                        About Us
                    </div>
                </div>
            </div>
            <div className="body"></div>
        </div>
    );
}
