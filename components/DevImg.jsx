import Image from "next/image"

export default function DevImg({ containerStyles, imgSrc }) {
  return (
    <div className={`${containerStyles}`}>
      <Image width={420} height={350} src={imgSrc} priority alt="developer" />
    </div>
  )
}