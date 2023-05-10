"use client";
import { UseContext } from "@/app/store/store";
import React, { useContext } from "react";

export default function ContactUs() {
    const context = useContext(UseContext);
    const { openFolder, setOpenFolder } = context;
    return (
        <div className="ContactUsFolder">
            <div className="head">
                <div className="head-top">
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
                            Contact Us
                        </div>
                    </div>
                    <div>기타버튼</div>
                </div>
                <div className="head-bottom">
                    <div className="tool-font flex">
                        <select className="fontSize">
                            <option value={12}>12</option>
                            <option value={14}>14</option>
                            <option value={16}>16</option>
                        </select>
                        <select className="fontFamily">
                            <option value={"굴림"}>
                                굴림
                            </option>
                        </select>
                        <div
                            className="colorPicker"
                            style={{
                                width: 30,
                                height: 24,
                                background: "#000000",
                            }}
                        ></div>
                    </div>
                    <div className="flex tool-font-style">
                        <div
                            style={{
                                fontStyle: "normal",
                            }}
                        >
                            B
                        </div>
                        <div
                            style={{
                                fontStyle: "italic",
                            }}
                        >
                            I
                        </div>
                        <div
                            style={{
                                textDecoration: "underline",
                            }}
                        >
                            U
                        </div>
                        <div
                            style={{
                                textDecoration:
                                    "line-through",
                            }}
                        >
                            S
                        </div>
                    </div>
                </div>
            </div>
            <div className="body"></div>
        </div>
    );
}
