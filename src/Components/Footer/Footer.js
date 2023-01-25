import React from "react";
import {
    Box,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <h1 style={{ color: "black",
                fontSize: 16,
                textAlign: "center",
                margin: 0,}}>
                Made By
                <a
                    href="https://github.com/Rexicon226"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "purple",
                    textDecoration: "none",
                    fontSize: 16,
                    margin: 0,
                    }}> Sinon 🐱
                </a >
            </h1>
        </Box>
    );
};
export default Footer;