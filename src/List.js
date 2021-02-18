import React from "react";
import MyCard from "./Card.js";




function List(props) {

    return props.list.map((item, i) => {

        return <MyCard value={item} click={(event) => props.onItemClick(event, i)} key={item + i} />;

    });

}
export default List;