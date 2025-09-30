import Image from "next/image";
import Link from "next/link";
export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 self-center font-medium">
      <div className="h-10 w-10 rounded bg-accent flex items-center justify-center overflow-hidden">
        <Image
          src="/eevee.png"
          alt="Eevee"
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      <span className="font-bold text-lg">Eevee</span>
    </Link>
  );
}
