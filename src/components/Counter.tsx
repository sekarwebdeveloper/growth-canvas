import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
}

const Counter = ({ end, suffix = "", label }: CounterProps) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    ScrollTrigger.create({
      trigger: ref.current,
      start: "top 80%",
      onEnter: () => {
        if (animated.current) return;
        animated.current = true;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: end,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => setValue(Math.round(obj.val)),
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-accent md:text-5xl">
        {value}{suffix}
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export default Counter;
