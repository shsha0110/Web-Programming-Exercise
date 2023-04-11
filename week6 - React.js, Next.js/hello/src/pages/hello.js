import React from "react";
import World from "./world";

export default function Hello() {
    return (
        <>
            <h1>
                Hello,
                <World name="yoo" />
            </h1>

            <img src="cat.jpeg" alt="cat" />
        </>
    )
}