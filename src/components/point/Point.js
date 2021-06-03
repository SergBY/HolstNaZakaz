import './Point.css';
import { checkPropTypes } from "prop-types";

function Point (props) {
  return (
    <div className="point">
      <div className="point__dot"></div>
      <p>{props.text}</p>
    </div>
  )
}

export default Point;