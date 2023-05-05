"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext, useState } from "react";
import { UseContext } from "../store/store";

export default function Unit({ imageURL, name, styles }) {
    const context = useContext(UseContext);
    const { openFolder, setOpenFolder } = context;

    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 20,
        duration: 0.5,
    };

    const unitName = (e) => {
        if (e === "AboutUs") {
            return {
                title: "About Us",
                content: [
                    "혹시",
                    "우리가",
                    "궁금할까봐",
                    "준비했습니다",
                ],
            };
        } else if (e === "PortFolio") {
            return {
                title: "Portfolio",
                content: [
                    "오직",
                    "하나뿐인",
                    "홈페이지를",
                    "만들어드립니다",
                ],
            };
        } else if (e === "ContactUs") {
            return {
                title: "Contact Us",
                content: [
                    "정말",
                    "편하게",
                    "언제든지",
                    "노크해 주세요",
                ],
            };
        }
    };

    // console.log(unitName(name).content);

    return (
        <motion.div
            className={styles.unit}
            whileHover={{
                scale: 1.5,
            }}
            transition={spring}
            onClick={() => {
                setOpenFolder(name);
                // console.log(name);
                console.log(openFolder);
            }}
        >
            <div
                className={`${styles.text_top} ${styles.textAligns}`}
            >
                <p className={styles.lgTitle}>
                    {/* 좌측 상단 타이틀 */}
                    {unitName(name).title}
                </p>
                <div>
                    <p>홈페이지 제작해</p>
                    <p
                        style={{
                            lineHeight: "8px",
                            writingMode: "vertical-rl",
                        }}
                    >
                        드립니다
                    </p>
                </div>
            </div>
            <Image src={imageURL} alt="이미지" />
            <div
                className={`${styles.text_bot} ${styles.textAligns}`}
            >
                <div>
                    <p
                        style={{
                            fontFamily: "Noto Sans",
                            fontStyle: "normal",
                            fontWeight: 400,
                            color: "#181818",
                            // letterSpacing: "-2px",
                            lineHeight: "10px",
                            writingMode: "vertical-lr",
                        }}
                    >
                        홈페이지
                    </p>
                    <p>제작해 드립니다</p>
                </div>
                <div className={styles.cornerRight}>
                    {/* 우측 아래 설명 */}
                    {unitName(name).content.map((e) => (
                        <p key={e}>{e}</p>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
