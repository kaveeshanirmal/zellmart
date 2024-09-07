import React, { useState, useEffect } from "react";

export default function WelcomeMessage() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <h1>
            Good{" "}
            {time.getHours() < 12
                ? "Morning"
                : time.getHours() < 17
                ? "Afternoon"
                : "Evening"}
            !
        </h1>
    );
}
