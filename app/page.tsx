
import { Tooltip } from "./src";

export default function Home() {
  return (
    <main className=" min-h-screen pt-24 items-center  p-4">
      <Tooltip content={<span>This is a <strong>tooltip</strong><img src="https://camo.githubusercontent.com/ad8154086d54cbf488965d9a1d93e167e2196907bd7957320ae5c3f9bb948e17/687474703a2f2f692e696d6775722e636f6d2f77554a70636a592e6a7067" alt="" /></span>} location="top" tooltipStyle="bg-red-200 rounded-full">
        <button>Hover over me</button>
      </Tooltip>vcxvxvx c
      <div>dfdsf</div>
      <div>dfdsf</div>
      <div>dfdsf</div>
    </main>
  );
}
