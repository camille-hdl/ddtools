//@flow
import React from "react";
const GreekAlphabet = [
    "Α",
    "Β",
    "Γ",
    "Δ",
    "Ε",
    "Ζ",
    "Η",
    "Θ",
    "Ι",
    "Κ",
    "Λ",
    "Μ",
    " ",
    "Ν",
    "Ξ",
    "Ο",
    "Π",
    "Ρ",
    "Σ",
    "Τ",
    "Υ",
    "Φ",
    "Χ",
    "Ψ",
    "Ω",
];
const Numbers = Array(11)
    .fill(0)
    .map((_, index) => index);

function GridComponent(props): React$Node {
    const { code } = props;
    const firstTwoLetters = code.substring(0, 2);
    return (
        <div className="archive-grid">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        {GreekAlphabet.map((greekLetter, columnIndex) => {
                            return <th key={columnIndex}>{greekLetter}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {Numbers.map((number, rowIndex) => (
                        <tr key={number}>
                            {rowIndex === 5 ? (
                                <td colSpan={GreekAlphabet.length + 2} style={{ height: "30px", textAlign: "center" }}>
                                    📜
                                </td>
                            ) : (
                                <>
                                    <th
                                        style={{
                                            width: "30px",
                                            height: "30px",
                                            textAlign: "center",
                                        }}
                                    >
                                        {rowIndex < 5 ? number : number - 1}
                                    </th>
                                    {GreekAlphabet.map((greekLetter, columnIndex) => {
                                        if (greekLetter === " ") {
                                            return (
                                                <td key={greekLetter} style={{ width: "30px", height: "30px" }}></td>
                                            );
                                        }

                                        const cellId = `${greekLetter}${rowIndex < 5 ? number : number - 1}`;
                                        const isSelected = cellId === firstTwoLetters;
                                        return (
                                            <td
                                                key={greekLetter}
                                                style={{
                                                    backgroundColor: isSelected ? "yellow" : "white",
                                                    width: "30px",
                                                    height: "30px",
                                                    textAlign: "center",
                                                    border: "1px solid black",
                                                }}
                                            >
                                                {isSelected ? "📘" : ""}
                                            </td>
                                        );
                                    })}
                                    <th
                                        style={{
                                            width: "30px",
                                            height: "30px",
                                            textAlign: "center",
                                        }}
                                    >
                                        {rowIndex < 5 ? number : number - 1}
                                    </th>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
                <thead>
                    <tr>
                        <th></th>
                        {GreekAlphabet.map((greekLetter, columnIndex) => {
                            return <th key={columnIndex}>{greekLetter}</th>;
                        })}
                    </tr>
                </thead>
            </table>
        </div>
    );
}

export default GridComponent;
