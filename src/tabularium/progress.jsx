//@flow
import React, { useState, useEffect } from "react";

function ProgressBar(): React$Node {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentSecond = new Date().getSeconds();
            setProgress((currentSecond / 60) * 100);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div
            style={{
                width: "100%",
                height: "20px",
                backgroundColor: "#f3f3f3",
                borderRadius: "10px",
            }}
        >
            <div
                style={{
                    height: "100%",
                    width: `${progress}%`,
                    backgroundColor: "black",
                    borderRadius: "inherit",
                    transition: "width .1s ease-in-out",
                }}
            />
        </div>
    );
}

export default ProgressBar;
