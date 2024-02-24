import Link from "next/link";
import DeleteBtn from "./DeleteBtn";
import { HiPencilAlt } from "react-icons/hi";

export default function TodoList() {
  return (
    <>
        <div className="p-4 border border-slate-300 my-3 flex
        justify-between gap-5 items-start">
          <div>
            <h2 className="font-bold text-2xl">todo</h2>
          </div>
          <div className="flex gap-2">
            <DeleteBtn />
            <Link href={"/update/1"}>
            <HiPencilAlt size={24} color="black" />

            </Link>
          </div>
        </div>
    </>
  );
}
