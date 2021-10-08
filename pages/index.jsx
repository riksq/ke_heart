import Head from "next/head";
import styles from "../styles/Home.module.css";
import TagManager from "react-gtm-module";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home(props) {
    const router = useRouter();
    const { query } = router;
    const gtm = query.gtm;
    const bluecss = {
        margin: 10,
        border: "0px",
        color: "White",
        backgroundColor: "red",
        width: "70%",
        height: "40px",
    };
    const redcss = {
        margin: 10,
        border: "0px",
        color: "black",
        backgroundColor: "skyblue",
        width: "70%",
        height: "40px",
    };

    const redirect = async (some) => {
        if (some) {
            const fetchResp = await fetch("/api/hello");
            const fJson = await fetchResp.json();
            if (fJson.ok) {
                window.location.href = fJson.url;
            } else {
                alert("Try again");
            }
        } else {
            alert("Try again");
        }
    };

    useEffect(() => {
       // alert(gtm);
        // TagManager.initialize({ gtmId: "GTM-PTZV39P" });
        // TagManager.initialize({ gtmId: "GTM-59WP5XJ" });
       TagManager.initialize({ gtmId: "GTM-TZ9R22F" });
       // if (gtm) {
          //  TagManager.initialize({ gtmId: gtm });
       // }
    }, [gtm]);
    return (
        <div className={styles.container}>
            <Head>
                <title>Answer the question</title>
                <meta name="description" content="Answer the question" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div>
                    <h2>
                        <img
                            src="data:image/jpeg;base64,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"
                            width="17px"
                            height="20px"
                        />{" "}
                        You have blood pressure problems
                    </h2>
                </div>
                <div>
                    <h3>Answer YES or NO</h3>
                 
                    <div>
                        <button
                            onClick={() => {
                                redirect(true);
                            }}
                            style={bluecss}
                        >
                            YES
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                redirect(true);
                            }}
                            style={redcss}
                        >
                            NO
                        </button>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>All rights reserved</footer>
        </div>
    );
}
