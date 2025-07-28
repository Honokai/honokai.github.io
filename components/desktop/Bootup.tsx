import { useEffect, useState } from "react";
import Spinner from "../../src/assets/spinner-dark-grey.svg?react";

export default function Bootup() {
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    console.log("render bootup", initializing);
    setTimeout(() => {
      if (initializing) {
        setInitializing(!initializing);
      }
    }, 3000);
  }, []);

  return (
    <div className={`${initializing ? "initial-boot" : "d-none"}`}>
      <Spinner className="spinner" />
    </div>
  );
}
