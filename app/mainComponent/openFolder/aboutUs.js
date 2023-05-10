import { UseContext } from "@/app/store/store";
import React, { useContext } from "react";

export default function AboutUs() {
    const context = useContext(UseContext);
    const { openFolder, setOpenFolder } = context;
    const dos = {
        green: {
            color: "#0EF018",
            fontFamily: "DOSMyungjo",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "18px",
        },
        white: {
            color: "#ffffff",
            fontFamily: "Apple SD Gothic Neo",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "18px",
        },
    };

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
            <div className="body flex-col">
                <p style={dos.green}>
                    Lorem/ipsum/dolor{">"}sit amet/
                </p>
                <p style={dos.green} className="my-[25px]">
                    consectetur
                </p>
                <p style={dos.green}>
                    adipiscing elit: sed do eiusmod tempor
                    incididunt ut
                </p>
                <div className="flex">
                    <p
                        style={dos.green}
                        className="w-[160px] h-[70px] flex justify-center"
                    >
                        ?
                    </p>
                    <p style={dos.white}>
                        안녕하세요. JEKI입니다.
                        <br /> 어떠한 고객의 소리도 귀담아
                        듣고 최상의 퀄리티를 제공할 수 있는
                        <br />
                        마케터, 개발자, 디자이너가 모두
                        준비된 웹 개발팀입니다.
                    </p>
                </div>
                <p style={dos.green}>labore et dolore :</p>
                <div className="flex my-[25px]">
                    <p
                        style={dos.green}
                        className="w-[160px] h-[70px] flex justify-center"
                    >
                        {" "}
                        Ut {"<"} enim
                    </p>
                    <p style={dos.white}>
                        한 번에 오직 한 건만 주문받아
                        작업하여 최고의 웹페이지를 만드는
                        것에 집중합니다.
                        <br />
                        고객의 요구사항에 최대한 부합하는
                        독자적인 커스텀형 웹페이지를
                        제작해드리므로,
                        <br /> 자유도가 높은 나만의
                        웹페이지를 확인할 수 있습니다.
                        <br />
                        (제작 방식 : react, Javascript,
                        firebase)
                    </p>
                </div>
                <p style={dos.green}>
                    dolore/magna/aliqua/ad/minim{"｜"}venia
                </p>
                <div className="flex my-[25px]">
                    <p
                        style={dos.green}
                        className="w-[160px] h-[70px] flex justify-center"
                    ></p>
                    <p style={dos.white}>
                        무엇이든 편하게 물어보세요.
                        <br /> 소중하게 듣겠습니다.
                    </p>
                </div>
                <p style={dos.green}>end</p>
            </div>
        </div>
    );
}
