// @flow
import React, { useState } from "react";

type Props = {};

const Glyph = (props: Props): React$Node => {
    const [opacities, setOpacities] = useState<number[]>([0, 0, 0]); // Initial opacity for each image
    const [blur, setBlur] = useState<number>(16);
    const [visibleSlider, setVisibleSlider] = useState<number>(Math.floor(Math.random() * 3)); // Randomly select a visible slider

    // Function to handle slider change
    const handleSliderChange = (index: number, value: number) => {
        const newOpacities = [...opacities];

        // Update the opacity for the selected image
        newOpacities[index] = value;

        // Reduce the opacity of the other images
        newOpacities.forEach((_, i) => {
            if (i !== index) {
                if (newOpacities[i] > 0.2) {
                    newOpacities[i] = newOpacities[i] - value;
                    if (newOpacities[i] < 0.2) {
                        newOpacities[i] = 0.2;
                    }
                }
            }
        });

        setOpacities(newOpacities);
    };

    // Function to handle the slider interaction finish (on mouseup)
    const handleSliderFinish = () => {
        // After interaction, hide the current slider and show a random other slider
        setVisibleSlider((prev) => {
            let newSlider;
            do {
                newSlider = Math.floor(Math.random() * 4);
            } while (newSlider === prev); // Ensure a different slider appears
            return newSlider;
        });
    };

    return (
        <div style={{ position: "relative", width: "1000px", height: "1000px" }}>
            {/* Display the 3 images stacked on top of each other */}
            <img
                src="images/glyphr.png"
                alt="Red Glyph"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1000px",
                    height: "1000px",
                    filter: `blur(${blur}px)`,
                    opacity: opacities[0],
                }}
            />
            <img
                src="images/glyphb.png"
                alt="Blue Glyph"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1000px",
                    height: "1000px",
                    opacity: opacities[1],
                    filter: `blur(${blur}px)`,
                }}
            />
            <img
                src="images/glyphg.png"
                alt="Green Glyph"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1000px",
                    height: "1000px",
                    opacity: opacities[2],
                    filter: `blur(${blur}px)`,
                }}
            />

            {/* Render only the currently visible slider */}
            {visibleSlider === 0 && (
                <div style={{ position: "absolute", bottom: "20px", width: "100%" }}>
                    <input
                        className="slider-red"
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={opacities[0]}
                        onChange={(e) => handleSliderChange(0, parseFloat(e.target.value))}
                        onMouseUp={handleSliderFinish}
                    />
                </div>
            )}
            {visibleSlider === 1 && (
                <div style={{ position: "absolute", bottom: "20px", width: "100%" }}>
                    <input
                        className="slider-blue"
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={opacities[1]}
                        onChange={(e) => handleSliderChange(1, parseFloat(e.target.value))}
                        onMouseUp={handleSliderFinish}
                    />
                </div>
            )}
            {visibleSlider === 2 && (
                <div style={{ position: "absolute", bottom: "20px", width: "100%" }}>
                    <input
                        className="slider-green"
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={opacities[2]}
                        onChange={(e) => handleSliderChange(2, parseFloat(e.target.value))}
                        onMouseUp={handleSliderFinish}
                    />
                </div>
            )}
            {visibleSlider === 3 && (
                <div style={{ position: "absolute", bottom: "20px", width: "100%" }}>
                    <input
                        className="slider-blur"
                        type="range"
                        min="4"
                        max="16"
                        step="1"
                        value={blur}
                        onChange={(e) => setBlur(parseInt(e.target.value))}
                        onMouseUp={handleSliderFinish}
                        style={{
                            color: "green",
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default Glyph;
