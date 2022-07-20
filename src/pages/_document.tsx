import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class ExtendedDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link 
                        rel="stylesheet"
                        href="https://fonts.googleapi.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
                    />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}

export default ExtendedDocument;