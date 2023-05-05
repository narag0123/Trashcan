import styles from "./page.module.scss";
import Main from "./Main";

export default function Home() {
    return (
        <div
            className="home"
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div className="wrapper">
                <Main />
            </div>
        </div>
    );
}
