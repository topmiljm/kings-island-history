import { useEffect } from "react";

export default function VideoModal({ video, onClose }) {
    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === "Escape") onClose();
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    if (!video) return null;

    return (
        <div className="video-modal-overlay" onClick={onClose}>
            <div
                className="video-modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="video-modal-close"
                    onClick={onClose}
                    aria-label="Close video"
                >
                    ×
                </button>
                <div className="video-modal-frame">
                    <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
}
