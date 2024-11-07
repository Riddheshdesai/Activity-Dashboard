import { activityDashboardApi } from "./instance";

export async function fetchActivityData() {
  const response = await activityDashboardApi.get("/api/customer-activity"); // Replace with your API endpoint
  return response.data;
}
