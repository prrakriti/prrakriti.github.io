import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="flex">
      <Image
        src="/infinity-logo.svg"
        width={54}
        height={54}
        priority
        alt="Infinity Logo"
      />
      <Image
        src="/infinity-name.svg"
        width={192}
        height={54}
        priority
        alt="Infinity Logo"
      />
    </Link>
  );
};

export default Logo;
