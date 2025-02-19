import Image from "next/image";
import VenueDashboard from "./VenueDashboard";
import EventDetailView from "./EventDetailView";
import EventPlannerDashboard from "./EventPlannerDashboard";

export default function Home() {
  return (
    <>
 <VenueDashboard/>

 <EventDetailView></EventDetailView>
 <EventPlannerDashboard></EventPlannerDashboard>
 </>
);
}
