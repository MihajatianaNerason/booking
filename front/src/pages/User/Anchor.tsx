import arrow from "../../img/up.svg";

export default function Anchor() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="w-[50px] h-[50px] rounded-full flex justify-center items-center fixed bottom-4 right-6"
      id="ancre"
    >
      <a href="#" onClick={scrollToTop}>
        <img src={arrow} alt="arrow up" width={25} />
      </a>
    </div>
  );
}
