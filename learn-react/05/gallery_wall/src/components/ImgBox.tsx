type ImgProps = React.ComponentPropsWithoutRef<"img">;
import { useState } from "react";

export default function ImgBox(props: ImgProps & { caption?: string }) {
  // 에러 이미지 리소스가 필요하면 아래 리소스를 사용하세요
  const ERROR_IMG_SRC =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";
  const { src, alt, caption } = props;
  const [didError, setDidError] = useState(false);
  const handleError = () => {
    setDidError(true);
  };
  return (
    <>
      <figure
        className={`
                  group bg-background rounded-lg overflow-hidden shadow-sm transition-all duration-300 relative                 
                  col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-2
                `}
        style={{
          borderWidth: "0.5px",
        }}
      >
        <section className="relative overflow-hidden h-full">
          <img
            src={didError ? ERROR_IMG_SRC : src}
            alt={"Snow-capped mountains against a blue sky"}
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110`}
            onError={handleError}
          />
          <section className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></section>
          <figcaption
            className={`
                        absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent 
                        text-white transform translate-y-full group-hover:translate-y-0 
                        transition-transform duration-300 p-3 sm:p-3 md:p-4
                      `}
          >
            <h3 className="mb-1">{caption ? caption : "none"}</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              {alt ? alt : "none"}
            </p>
          </figcaption>
        </section>
      </figure>
    </>
  );
}
