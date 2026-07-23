import React from "react";
import Image from "next/image";
import dartIcon from "@/public/svgs/dart.svg";
import flutterIcon from "@/public/svgs/flutter.svg";
import javaIcon from "@/public/svgs/java.svg";
import pythonIcon from "@/public/svgs/python.svg";

const remoteIcons = [
  { alt: "React Icon", slug: "react" },
  { alt: "TypeScript Icon", slug: "ts" },
  { alt: "Docker Icon", slug: "docker" },
  { alt: "Node.js Icon", slug: "nodejs" },
  { alt: "FastAPI Icon", slug: "fastapi" },
  { alt: "PostgreSQL Icon", slug: "postgres" },
  { alt: "C# Icon", slug: "cs" },
  { alt: "MongoDB Icon", slug: "mongodb" },
  { alt: "MySQL Icon", slug: "mysql" },
  { alt: "Firebase Icon", slug: "firebase" },
];

export default function TechIcons() {
  return (
    <>
      <Image
        alt="Dart Icon"
        src={dartIcon}
        width={100}
        height={100}
        className="w-max-w w-full"
      />
      <Image
        alt="Flutter Icon"
        src={flutterIcon}
        width={100}
        height={100}
        className="w-max-w w-full"
      />
      <Image
        alt="Java Icon"
        src={javaIcon}
        width={100}
        height={100}
        className="w-max-w w-full"
      />
      <Image
        alt="Python Icon"
        src={pythonIcon}
        width={100}
        height={100}
        className="w-max-w w-full"
      />
      {remoteIcons.map(({ alt, slug }) => (
        <Image
          key={slug}
          alt={alt}
          src={`https://skillicons.dev/icons?i=${slug}`}
          width={100}
          height={100}
          className="w-max-w w-full"
          unoptimized
        />
      ))}
    </>
  );
}
