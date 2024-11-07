import { useMemo } from "react";

function DashboardInsights({ data }) {
  const insightsData = useMemo(() => {
    if (!data) return false;
    return {
      mostActiveAreaName: data?.mostActiveArea?.area,
      leastActiveAreaName: data?.leastActiveArea?.area,
      mostActiveAreaTimeSpend: data?.mostActiveArea?.totalTimeSpent,
      leastActiveAreaTimeSpend: data?.leastActiveArea?.totalTimeSpent,
      peakTime: data?.peakTime,
    };
  }, [data]);
  return (
    insightsData && (
      <div className="max-w-screen-xl  py-6 sm:py-4">
        <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-1 lg:grid-cols-3">
          <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Most Active Area : {insightsData?.mostActiveAreaName}
            </dt>

            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
              {insightsData?.mostActiveAreaTimeSpend} min
            </dd>
          </div>
          <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Least Active Area : {insightsData?.leastActiveAreaName}
            </dt>

            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
              {insightsData?.leastActiveAreaTimeSpend} min
            </dd>
          </div>
          <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Peak Activity Time
            </dt>

            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
              {insightsData?.peakTime} min
            </dd>
          </div>
        </dl>
      </div>
    )
  );
}

export default DashboardInsights;
