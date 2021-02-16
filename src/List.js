import React from "react";
import Card from "./Card.js";

function printItem(text) {
    return <Card value={text} />;
}

function List() {
    const list = ["one", "two", "three"];
    return list.map(printItem);
}
export default List;