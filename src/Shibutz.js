import React from "react";

const Shibutz = ({ title }) => {
    return (
        <div style={{ marginTop: 2, padding: 5, borderColor: "black", borderStyle: "dotted", borderLeft: "2px", borderRight: 2 }}>
            <div style={{ backgroundColor: "purple" }}>
                <p style={{ margin: 2 }}>{title}</p>
            </div>
        </div>
    );
};

export default Shibutz;
