"use client";

import { UseContext } from "@/app/store/store";
import { useContext } from "react";

export default function PortFolio() {
    const context = useContext(UseContext);
    const { openFolder, setOpenFolder } = context;

    return (
        <div className="portFolioFolder">
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
                        Portfolio
                    </div>
                </div>
                <div>search icon</div>
            </div>
            <div className="body">
                {/* parameter URL 걸어서 Dynamic Routing할거임 */}
                <div className="folderUnit">
                    <div className="folder">폴더임</div>
                    <div className="title">이름임</div>
                </div>
                <div className="folderUnit">
                    <div className="folder">폴더임</div>
                    <div className="title">이름임</div>
                </div>
                <div className="folderUnit">
                    <div className="folder">폴더임</div>
                    <div className="title">이름임</div>
                </div>
            </div>
            <div className="foot"></div>
        </div>
    );
}
