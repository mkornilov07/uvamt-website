import Link from "next/link"

export default function Home() {
  return (
    <><p>Very cool math competition. Appy below:</p>
    <Link href = "apply"><button className="bg-blue-500 rounded py-3 px-4 cursor-pointer hover:bg-blue-700">Apply</button></Link></>
  );
}
