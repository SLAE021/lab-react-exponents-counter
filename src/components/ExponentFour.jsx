const ExponentFour = () => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{props.counter}⁴</p>
    <p className="exponent-result">2 * 2 * 2 * 2 = <span className="total">16</span></p>
  </div>
);

export default ExponentFour;