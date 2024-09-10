//@flow
import React from "react";

import Tabularium from "./tabularium/tabularium.jsx";
import Glyph from "./portal-glyph/glyph.jsx";
import { Route, Routes, Navigate } from "react-router-dom";

export default function App(): React$Node {
    return <Routes>
        <Route path="/" element={<div>ddtools-app</div>}></Route>
        <Route path="/tabularium" element={<Tabularium />}></Route>
        <Route path="/glyph" element={<Glyph />}></Route>
    </Routes>;
}
