import Image from "next/image";

const Logo = (props: any) => {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      {/* customized logo  */}
      <Image
        className="rounded-[50%] object-cover"
        height={50}
        width={50}
        src="https://media.tenor.com/Gox0-B97R4gAAAAC/pikachu-smile.gif"
        alt="logo"
      />
      {/* default logo   */}
      <>{renderDefault(props)}</>
    </div>
  );
};

export default Logo;
