import { useEffect, useState } from "react";

type PerformanceMode = {
    reducedMotion: boolean;
    lowPower: boolean;
};

const getNavigatorConnection = () => {
    if (typeof navigator === "undefined") return undefined;
    const nav = navigator as any;
    return nav.connection || nav.mozConnection || nav.webkitConnection;
};

export function usePerformanceMode(): PerformanceMode {
    const [reducedMotion, setReducedMotion] = useState(false);
    const [lowPower, setLowPower] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        const updateReducedMotion = () => setReducedMotion(media.matches);
        updateReducedMotion();

        if (media.addEventListener) {
            media.addEventListener("change", updateReducedMotion);
        } else {
            media.addListener(updateReducedMotion);
        }

        const updateLowPower = () => {
            const nav = navigator as any;
            const connection = getNavigatorConnection();
            const saveData = Boolean(connection?.saveData);
            const effectiveType = connection?.effectiveType as string | undefined;
            const isSlowNetwork = effectiveType === "slow-2g" || effectiveType === "2g";
            const deviceMemory = Number(nav.deviceMemory ?? 8);
            const hardwareConcurrency = Number(nav.hardwareConcurrency ?? 8);
            const lowMemoryDevice = deviceMemory > 0 && deviceMemory <= 4;
            const lowCpuDevice = hardwareConcurrency > 0 && hardwareConcurrency <= 4;

            setLowPower(Boolean(saveData || isSlowNetwork || lowMemoryDevice || lowCpuDevice));
        };

        updateLowPower();

        const connection = getNavigatorConnection();
        if (connection?.addEventListener) {
            connection.addEventListener("change", updateLowPower);
        } else if (connection?.addListener) {
            connection.addListener(updateLowPower);
        }

        return () => {
            if (media.removeEventListener) {
                media.removeEventListener("change", updateReducedMotion);
            } else {
                media.removeListener(updateReducedMotion);
            }
            if (connection?.removeEventListener) {
                connection.removeEventListener("change", updateLowPower);
            } else if (connection?.removeListener) {
                connection.removeListener(updateLowPower);
            }
        };
    }, []);

    return { reducedMotion, lowPower };
}
