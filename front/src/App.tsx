import { Button } from "./components/ui/button";

export default function App() {
  return (
    <>
      <Button>Hello default</Button>
      <Button variant={"secondary"}>Hello Secondary</Button>
      <Button variant={"destructive"}>Hello destructive</Button>
      <Button variant={"link"}>Hello ghost</Button>
    </>
  );
}
