import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-full my-auto flex items-center justify-center flex-col">
      <h1 className="text-green text-[clamp(100px,25vw,200px)] leading-none ">
        404
      </h1>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </main>
  );
}
