import styles from "../styles/Home.module.css";

import { useInView } from "react-intersection-observer";
import { FaRocket } from "react-icons/fa";

export default function Home() {
  const { ref: rocketRef, inView: RocketisVisible } = useInView();
  console.log(RocketisVisible);

  return (
    <>
      <div className="red-box">Purple Box</div>
      <div className="black-box">Black Box</div>
      <div className="cyan-box">Cyan Box</div>
      <div className="gray-box">Gray Box</div>

      <br />

      <div className="mt-64 red-box">Red Box</div>
      <div className="black-box">Black Box</div>

      <div className="cyan-box">
        <h2 ref={rocketRef}>
          <span
            className={`${styles.rocket} ${
              RocketisVisible ? styles.animateRocket : ""
            }`}
          >
            <FaRocket />
          </span>
        </h2>
      </div>

      <div className="gray-box">
        <h2>Gray Box with Ref</h2>
      </div>
    </>
  );
}
