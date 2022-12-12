import {ReactNode} from "react";

export default function Paragraph(props) {
  return <div className={`paragraph${props.offset ? " offset" : ""}`}>
    {props.children}
  </div>
}