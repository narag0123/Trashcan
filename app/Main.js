import styles from "./page.module.scss";

// ASSETS
import portfolio from "../public/main/portfolio.png";
import aboutUs from "../public/main/aboutus.png";
import contactUs from "../public/main/contactUs.png";

import Unit from "./mainComponent/unit";
import ClientComponent from "./mainComponent/clientComponent";

export default function Main() {
    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 20,
        duration: 0.5,
    };

    return (
        <div className={styles.main}>
            <div className={styles.mainContainer}>
                {/* ABOUT US */}

                <Unit
                    imageURL={aboutUs}
                    name={"AboutUs"}
                    styles={styles}
                />

                {/* PORTFOLIO */}
                <Unit
                    imageURL={portfolio}
                    name={"PortFolio"}
                    styles={styles}
                />

                {/* CONTACT US */}
                <Unit
                    imageURL={contactUs}
                    name={"ContactUs"}
                    styles={styles}
                />
            </div>

            <div>
                <ClientComponent />
            </div>
            <div
                className={`${styles.foot} ${styles.wrapper}`}
            >
                Copyright 2023. Trashcan. All rights
                reserved.
            </div>
        </div>
    );
}
