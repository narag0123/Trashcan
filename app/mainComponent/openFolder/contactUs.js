"use client";
import { UseContext } from "@/app/store/store";
import EditorComp from "./editor";

import React, {
    useContext,
    useState,
    useRef,
    useEffect,
} from "react";

export default function ContactUs() {
    const context = useContext(UseContext);
    const { openFolder, setOpenFolder } = context;
    const [toggleColor, setToggleColor] = useState(false);
    const toggleBoxRef = useRef(null); // 토글 박스 레퍼런스
    const [color, setColor] = useState("#545454");

    const textareaRef = useRef(null);
    const handleChange = (selectedColor) => {
        setColor(selectedColor.hex); // 선택한 컬러값을 저장합니다.
    };

    // 외부 클릭 이벤트 핸들러
    const handleOutsideClick = (e) => {
        if (
            toggleBoxRef.current &&
            !toggleBoxRef.current.contains(e.target)
        ) {
            setToggleColor(false);
        }
    };

    // 텍스트 선택 핸들러
    useEffect(() => {
        document.addEventListener(
            "mousedown",
            handleOutsideClick
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                handleOutsideClick
            );
        };
    }, []);

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
                {/* <div className="head-bottom">
                    <div className="tool-font flex">
                        <select className="fontSize">
                            <option value={12}>12</option>
                            <option value={14}>14</option>
                            <option value={16}>16</option>
                        </select>
                        <select className="fontFamily">
                            <option
                                value={"굴림"}
                                className="font-style"
                            >
                                굴림
                            </option>
                        </select>
                        <div
                            ref={toggleBoxRef}
                            className="colorPicker"
                            onClick={() => {
                                setToggleColor(true);
                            }}
                            style={{
                                background: color,
                            }}
                        >
                            {toggleColor && (
                                <BlockPicker
                                    className="chromePicker"
                                    color={color}
                                    onChange={handleChange}
                                />
                            )}
                        </div>
                    </div>
                    <div className="flex tool-font-style">
                        <div
                            style={{
                                fontStyle: "normal",
                                cursor: "pointer",
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
                </div> */}
            </div>
            <div className="body">
                <div className="send-info">
                    <div className="unit-input flex">
                        <div>TO:</div>
                        <p>우리@email.com</p>
                    </div>
                    <div className="unit-input flex">
                        <div>FROM:</div>
                        <input placeholder="example@email.com" />
                    </div>
                    <div className="unit-input flex">
                        <div>Number:</div>
                        <input placeholder="핸드폰번호" />
                    </div>
                    <div className="unit-input flex">
                        <div>Subject:</div>
                        <input placeholder="웹페이지 제작해 주세요" />
                    </div>
                </div>

                <div className="send-body">
                    <hr />
                    <div className="input-body">
                        <EditorComp />
                    </div>
                </div>
            </div>
        </div>
    );
}
