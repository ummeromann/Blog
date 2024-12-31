import HomePage from "@/components/homepage";
import MindFul from "./mindful/page";
import Health from "./health/page";
import Growth from "./growth/page";
import Nature from "./nature/page";
import Self from "./self-care/page";
import Relationships from "./relationship/page";

export default function Home() {
  return (
    <div>
      <HomePage/>
      <MindFul/>
      <Health/>
      <Growth/>
      <Nature/>
      <Self/>
      <Relationships/>
    </div>
  );
}
