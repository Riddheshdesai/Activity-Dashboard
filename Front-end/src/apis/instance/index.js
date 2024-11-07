import axios from "axios";
import { ACTIVITY_DASHBOARD_URL } from "../../../constants/api.constant";

const activityDashboardApi = axios.create({
  baseURL: ACTIVITY_DASHBOARD_URL,
});

export { activityDashboardApi };
