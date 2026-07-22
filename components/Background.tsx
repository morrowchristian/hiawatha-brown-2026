// components/Background.tsx
export default function Background() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <img
        src="https://visitclevelandtn.com/wp-content/uploads/2017/02/charm-downtown-cleveland.jpg"
        alt="Downtown Cleveland, TN"
        className="w-full h-full object-cover object-[30%_18%] md:object-[38%_18%] brightness-[0.75] contrast-[1.05] fixed transition-transform duration-1000 scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent pointer-events-none" />
    </div>
  );
}
