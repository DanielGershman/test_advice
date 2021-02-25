import React, { useState } from "react";
import xmlData from "./docs/xml";
const parseString = require("xml2js").parseString;
let resultMy;
parseString(xmlData, function (err, result) {
    resultMy = result;
    console.log(resultMy.calls.call[0]);
});
const ShibutzInfo = () => {
    const [rememberMeState, setRememberMeState] = useState(false);
    let rememberMeChecked = rememberMeState ? "checked" : "";
    const onClick = () => setRememberMeState(true);
    const handleRememberMe = (event) => {
        console.log("ok");
        setRememberMeState(!rememberMeState);
        rememberMeChecked = rememberMeState;
    };

    return (
        <div>
            <div style={{ padding: 5, display: "flex", justifyContent: "flex-end", flexDirection: "row" }}>
                <p style={{ margin: 2 }}>קבע שיבוץ לטחנאי</p>
                <input type="checkbox" name="kvaShibutz" id="kvaShibutz" style={{ marginTop: 8 }} onChange={handleRememberMe} value={rememberMeState} name="rememberMe" checked={rememberMeChecked} />

                <p style={{ margin: 2 }}>{resultMy.calls.call[0].create_date[0]}</p>
                <p style={{ margin: 2 }}>תאריך פתיחת קריאה</p>
            </div>
            {rememberMeState ? <Results /> : null}
        </div>
    );
};

const Results = () => (
    <div style={{ padding: 5, display: "flex", justifyContent: "flex-end", flexDirection: "row" }}>
        <p style={{ margin: 2, width: 100, borderWidth: 1.5, border: "dotted", display: "flex", justifyContent: "flex-end", flexDirection: "row", paddingRight: 5 }}>{resultMy.calls.call[0].schedule_time_to[0]}</p>

        <p style={{ margin: 2, width: 100, borderWidth: 1.5, border: "dotted", display: "flex", justifyContent: "flex-end", flexDirection: "row", paddingRight: 5 }}>{resultMy.calls.call[0].schedule_time_from[0]}</p>
        <input type="date" name="date" id="date" style={{ margin: 2, width: 150, borderWidth: 1.5, border: "dotted", display: "flex", justifyContent: "flex-end", flexDirection: "row", paddingRight: 5 }} />
        <p style={{ margin: 2 }}>בתאריך</p>
        <select style={{ margin: 2, marginLeft: 10, width: 100 }}>
            <option value="0">tech1</option>
            <option value={resultMy.calls.call[0].technician_id[0]}>tech2</option>
        </select>
        <p style={{ margin: 2, marginLeft: 110 }}>טכנאי</p>
    </div>
);

export default ShibutzInfo;
