import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-[#712ebf] to-[#b38be8] flex justify-center items-center">
      <Image
        src="/coming_soon.png"
        alt="Coming Soon Placeholder"
        className="w-full h-full object-contain"
        fill
        priority
      />
    </div>
  );
}
