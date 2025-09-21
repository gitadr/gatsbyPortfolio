import React, { useEffect, useRef, useState } from "react";

const transparentPixel =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

const LazyAnimatedImage = ({ src, alt, className, width, height }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const node = imageRef.current;
    if (!node) {
      return () => {};
    }

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return () => {};
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  const aspectRatio = width && height ? `${width} / ${height}` : undefined;

  return (
    <img
      ref={imageRef}
      className={className}
      src={isVisible ? src : transparentPixel}
      alt={alt}
      loading="lazy"
      decoding="async"
      style={{ width: "100%", height: "auto", aspectRatio }}
    />
  );
};

export default LazyAnimatedImage;
