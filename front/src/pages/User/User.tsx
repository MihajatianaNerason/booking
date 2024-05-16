import CardUser from "./CardUser";

export default function User() {
  return (
    <div className="h-full flex flex-wrap justify-around items-center">
      <CardUser />
      <CardUser />
      <CardUser />
      <CardUser />
    </div>
  );
}
