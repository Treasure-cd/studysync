interface SizeType {
  size?: "large" | "medium" | "small"
}

const Loader = ({ size = "small" }: SizeType) => {

  const sizeStyle = size === "small"? "h-6 w-6": size === "medium"? "h-8 w-8": "h-10 w-10";


  return (
    <div className={`${sizeStyle} rounded-full border-4 border-solid border-loaderborder border-b-blue-700 animate-spin inline-block`} />
  )
}

export default Loader