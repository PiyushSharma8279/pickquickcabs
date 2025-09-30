import React, { useEffect, useState, useRef } from "react";
import { FaTachometerAlt, FaUsers, FaTaxi, FaSmile } from "react-icons/fa";

const stats = [
  { icon: <FaTachometerAlt className="text-yellow-500 text-4xl mb-4" />, value: 8700, label: "KM Driven" },
  { icon: <FaUsers className="text-yellow-500 text-4xl mb-4" />, value: 4978, label: "People Dropped" },
  { icon: <FaTaxi className="text-yellow-500 text-4xl mb-4" />, value: 800, label: "Taxis & Drivers" },
  { icon: <FaSmile className="text-yellow-500 text-4xl mb-4" />, value: 2480, label: "Happy People" },
];

function Counter({ target, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return; // run only when start is true

    let startVal = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 20));

    const timer = setInterval(() => {
      startVal += step;
      if (startVal >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(startVal);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [target, start]);

  return <span>{count}</span>;
}

function NumbersSpeak() {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.3 } // trigger when 30% of section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="bg-gray-100 py-16 px-6">
      <div className="text-center mb-12">
        <p className="text-gray-600">Our fun facts</p>
        <h2 className="text-4xl sm:text-5xl font-bold">Numbers speak</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-8"
          >
            {item.icon}
            <h3 className="text-4xl font-bold">
              <Counter target={item.value} start={startCount} />
            </h3>
            <p className="text-gray-600 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NumbersSpeak;
