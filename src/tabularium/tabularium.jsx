//@flow
import React, { useEffect, useState } from "react";
import SHA256 from "crypto-js/sha256";
import greekUtils from "greek-utils";
import TextTransition, { presets } from "react-text-transition";
import GridComponent from "./grid.jsx";
import ProgressBar from "./progress.jsx";

export default function Tabularium(): React$Node {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    // encode the input based on the current time
    const encode = (input) => {
        if (!input) {
            return "";
        }
        const now = new Date();
        const minute = now.getMinutes();
        const encodedString = SHA256(input.toLocaleLowerCase() + minute).toString();
        const letters = encodedString.match(/[a-zA-Z]/g);
        const numbers = encodedString.match(/[0-9]/g);
        return `${greekUtils.toGreek(letters[0]).toUpperCase()}${numbers[0]}${greekUtils
            .toGreek(letters[2])
            .toUpperCase()}${numbers[2]}`;
    };

    // called whenever the input changes
    useEffect(() => {
        setOutput(encode(input));
    }, [input]);

    // called every minute to re-encode the input
    useEffect(() => {
        const timerId = setInterval(() => {
            setOutput(encode(input));
        }, 1000); // 60 * 1000 milliseconds = 1 minute

        // clean up the interval on unmount
        return () => clearInterval(timerId);
    }, [input]);

    return (
        <div className="tabularium">
            <div>
                <input value={input} onChange={(event) => setInput(event.target.value)} />
                <p className="encodedText">
                    <TextTransition inline={true} springConfig={presets.molasses}>
                        {output}
                    </TextTransition>
                    {output ? <ProgressBar /> : null}
                </p>
                <div className="grid-container">
                    <GridComponent code={output} />
                </div>
            </div>
        </div>
    );
}
