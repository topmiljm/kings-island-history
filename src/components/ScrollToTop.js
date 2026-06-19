import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();
    const navigationType = useNavigationType();

    // Map of pathname -> last scroll position, persists across renders
    const scrollPositions = useRef(new Map());

    // Track the path we're navigating away from, so we can save its
    // scroll position before the new page takes over.
    const prevPathname = useRef(pathname);

    useEffect(() => {
        const positions = scrollPositions.current;

        return () => {
            positions.set(prevPathname.current, window.scrollY);
        };
    }, [pathname]);

    useEffect(() => {
        prevPathname.current = pathname;

        if (navigationType === "POP") {
            // Back/forward navigation: restore previous scroll position if we have one
            const savedY = scrollPositions.current.get(pathname);
            if (savedY !== undefined) {
                // Wait a tick so the new page's content has rendered/has height
                requestAnimationFrame(() => {
                    window.scrollTo(0, savedY);
                });
                return;
            }
        }

        // Regular link clicks (PUSH) or no saved position: start at the top
        window.scrollTo(0, 0);
    }, [pathname, navigationType]);

    return null;
}
