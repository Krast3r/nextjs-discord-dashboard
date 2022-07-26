import React from "react";
import type { NextPage } from "next";
import { FaDiscord } from "react-icons/fa";
import style from "../utils/styles/home.module.scss";

const Home: NextPage = () => {
    const handleLogin = () => {
        window.location.href = "http://localhost:3001/api/auth/discord";
    };
    return (
        <div className="page aligned-center">
            <div>
                <button className={style.button} onClick={handleLogin}>
                    <FaDiscord size={50} color="#7289DA" />
                    <span>Login with Discord</span>
                </button>
            </div>
        </div>
    );
}

export default Home;