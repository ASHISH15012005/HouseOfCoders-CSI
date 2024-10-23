import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect";

export function GoogleGeminiEffectDemo() {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
    const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
    const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
    const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
    const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

    return (
        (<div
            className="h-[300vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative p-10 overflow-clip"
            ref={ref}>
            <GoogleGeminiEffect
                title={"CSI SRM KTR Presents: Code, Collaborate, Conquer!"}
                description={"This is your chance to challenge yourself and showcase your talents on a grand stage!"}
                pathLengths={[
                    pathLengthFirst,
                    pathLengthSecond,
                    pathLengthThird,
                    pathLengthFourth,
                    pathLengthFifth,
                ]} />
        </div>)
    );
}
