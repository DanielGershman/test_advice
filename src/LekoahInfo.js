import React from "react";
import xmlData from "./docs/xml";
const parseString = require("xml2js").parseString;

const LekoahInfo = () => {
    let resultMy;
    parseString(xmlData, function (err, result) {
        resultMy = result;
    });
    return (
        <div>
            <div style={{ padding: 5, display: "flex", justifyContent: "flex-end", flexDirection: "row" }}>
                <p style={{ margin: 2 }}>{resultMy.calls.call[0].customer[0].name[0]}</p>
                <p style={{ margin: 2 }}>שם לקוח</p>
            </div>
            <div style={{ padding: 5, display: "flex", justifyContent: "flex-end", flexDirection: "row" }}>
                <p style={{ margin: 2 }}>{resultMy.calls.call[0].customer[0].address[0]}</p>
                <p style={{ margin: 2, marginLeft: 20 }}>כתובת</p>
            </div>
            <div style={{ padding: 5, display: "flex", justifyContent: "flex-end", flexDirection: "row" }}>
                <p style={{ margin: 2 }}>{resultMy.calls.call[0].customer[0].phone[0]}</p>
                <p style={{ margin: 2, marginLeft: 28 }}>טלפון</p>
            </div>
        </div>
    );
};

export default LekoahInfo;
