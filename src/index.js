import _ from "lodash";

const getHello = () => {
    console.log("Hello, Hexlet!");
    console.log(_.last(["one", "two"]));
}
export  {getHello};