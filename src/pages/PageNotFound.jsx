import { BiErrorCircle } from "react-icons/bi";
import Button from "../components/ui/Button";

export default function PageNotFound() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center mt-20">
      <BiErrorCircle className="text-8xl" />
      <p className="text-lg font-bold">Page not found</p>
      <Button variation="secondary" />
    </div>
  );
}
