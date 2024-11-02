import dynamic from "next/dynamic";
const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <h1>Interactive Map</h1>
      <Map />
    </div>
  )
}
