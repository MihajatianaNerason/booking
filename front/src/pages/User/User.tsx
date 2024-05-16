import CardUser from "./CardUser";
import NavUser from "./NavUser";
import image1 from "../../img/1.jpg";
import image2 from "../../img/2.jpg";
import image3 from "../../img/3.jpg";
import Anchor from "./Anchor";

export default function User() {
  return (
    <>
      <NavUser />
      <div className="h-full flex flex-wrap justify-around items-center">
        <CardUser imgProps={image1} />
        <CardUser imgProps={image2} />
        <CardUser imgProps={image3} />
        <CardUser imgProps={image1} />
        <CardUser imgProps={image3} />
        <CardUser imgProps={image2} />
        <CardUser imgProps={image1} />
        <CardUser imgProps={image2} />
        <CardUser imgProps={image3} />
      </div>
      <Anchor />
    </>
  );
}
