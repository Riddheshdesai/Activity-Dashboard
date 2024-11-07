import DashboardInsights from "../components/DashboardInsights";
import ApexChart from "../components/TreeMap";
import { useQuery } from "@tanstack/react-query";
import { fetchActivityData } from "../apis/activityDashboard";
import Loader from "../components/Loader";
import { useMemo } from "react";

function Dashboard() {
  const { data, isLoading } = useQuery({
    queryKey: ["activityData"],
    queryFn: fetchActivityData,
  });

  const heatMapData = useMemo(() => {
    if (!data) return false;
    const areaTime = data?.areaTime || false;
    const heatMapModifiedData =
      (areaTime &&
        Object.keys(data?.areaTime).map((areaName) => ({
          x: areaName,
          y: areaTime[areaName],
        }))) ||
      [];
    // data?.activityLog.length > 0 &&
    // data.activityLog.map((activityLog) => ({
    //   x: activityLog.area,
    //   y: activityLog.durationMinutes,
    // }));
    return heatMapModifiedData || [];
  }, [data]);

  if (isLoading) return <Loader />;
  return (
    <div className="px-4 sm:px-6  lg:px-8">
      <DashboardInsights data={data} />
      {heatMapData && <ApexChart data={heatMapData} />}
    </div>
  );
}

export default Dashboard;
