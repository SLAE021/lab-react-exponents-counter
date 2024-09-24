const ExponentSix = () => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{props.counter}⁶</p>
    <p className="exponent-result">2 * 2 * 2 * 2 * 2 * 2 = <span className="total">64</span></p>
  </div>
);

export default ExponentSix;