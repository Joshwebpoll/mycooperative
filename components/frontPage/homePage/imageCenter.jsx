import Image from "next/image";
import React from "react";

const ImageCenter = () => {
  return (
    <section className="mx-auto lg:w-8/12 mt-[-40px]">
      <Image
        src="/images/dashboard.png"
        width={800}
        height={800}
        alt="dashboard"
        className="mix-blend-multiply"
      />
    </section>
  );
};

export default ImageCenter;
