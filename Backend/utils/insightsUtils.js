const calculateInsights = (data) => {
    const areaTime = data.reduce((acc, entry) => {
      if (!acc[entry.area]) {
        acc[entry.area] = 0;
      }
      acc[entry.area] += entry.durationMinutes;
      return acc;
    }, {});
  
    const totalTime = Object.values(areaTime).reduce((acc, time) => acc + time, 0);
  
    const mostActiveArea = Object.keys(areaTime).reduce((prev, current) =>
      areaTime[prev] > areaTime[current] ? prev : current
    );
    const leastActiveArea = Object.keys(areaTime).reduce((prev, current) =>
      areaTime[prev] < areaTime[current] ? prev : current
    );
  
    const mostActiveAreaData = {
      area: mostActiveArea,
      totalTimeSpent: areaTime[mostActiveArea],
      percentage: ((areaTime[mostActiveArea] / totalTime) * 100).toFixed(2),
    };
  
    const leastActiveAreaData = {
      area: leastActiveArea,
      totalTimeSpent: areaTime[leastActiveArea],
      percentage: ((areaTime[leastActiveArea] / totalTime) * 100).toFixed(2),
    };
  
    const peakTime = (data) => {
      const times = data.map(entry => new Date(entry.startTimestamp).getHours());
      const mostCommonTime = times.reduce(
        (acc, time) => {
          acc[time] = (acc[time] || 0) + 1;
          return acc;
        },
        {}
      );
      const peakTime = Object.keys(mostCommonTime).reduce((prev, curr) =>
        mostCommonTime[prev] > mostCommonTime[curr] ? prev : curr
      );
      return peakTime;
    };
  
    const peakTimeData = peakTime(data);
  
    return {
      activityLog: data,
      areaTime: areaTime,
      mostActiveArea: mostActiveAreaData,
      leastActiveArea: leastActiveAreaData,
      peakTime: `${peakTimeData}:00`,
    };
  };
  
  module.exports = { calculateInsights };
  