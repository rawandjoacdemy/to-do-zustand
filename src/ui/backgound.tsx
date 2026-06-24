import { DoodleCircle, DoodleFlower, DoodleHeart, DoodleStar } from "./doodles";

export default function Background(){
return<>
 <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(transparent, transparent 31px, #2c241612 31px, rgba(44,36,22,0.07) 32px)",
          backgroundSize: "100% 32px",
        }}
      />
      {/* vertical red line  */}
      <div className="absolute top-0 bottom-0 left-16 md:left-24 w-px bg-red-300/50 " />

      {/* background doodles */}
      <DoodleFlower className="absolute top-6 right-8 w-14 h-14 text-amber-400/50" />
      <DoodleStar className="absolute top-20 right-24 w-8 h-8 text-red-400/40" />
      <DoodleHeart className="absolute bottom-16 right-12 w-10 h-10 text-pink-400/40" />
      <DoodleCircle className="absolute bottom-32 left-4 w-14 h-14 text-amber-500/30" />
      <DoodleStar className="absolute top-1/2 right-6 w-6 h-6 text-amber-600/30" />

</>
}