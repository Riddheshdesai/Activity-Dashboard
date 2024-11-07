# Customer Activity Dashboard Prototype

![Customer Activity Dashboard](https://github.com/Riddheshdesai/Activity-Dashboard/blob/develop/Activity-Dashboard-Demo.jpg)

## Overview

The **Customer Activity Dashboard Prototype** is an interactive web application designed to visualize customer activity data across different areas of a hotel. The dashboard provides insights into activity levels, including the most and least active hotel areas, and optionally, peak activity times if such data is available.

This project is divided into two parts:
1. **Backend API**: A RESTful API built using **Express.js**.
2. **Frontend Dashboard**: A React-based dashboard using **Vite**, **Tailwind CSS**, and **ApexCharts** for visualization.

### Key Features:
- **Backend API**: A REST API to handle and process customer activity data.
- **Frontend Visualization**: Displays data as a heatmap/grid to show customer activity levels.
- **Data Insights**: Displays the most and least active areas, with optional peak activity times.
- **UI/UX Design**: Focus on an intuitive, clean dashboard interface.

---

## Specifications

### 1. Backend API Design
The backend provides an endpoint to handle and process customer activity data:
- **API Endpoint**: `/api/customer-activity`
- **Request**: Accepts a JSON payload containing customer activity data across various hotel areas.
- **Response**: Returns processed data to be used for frontend visualization.

### 2. Frontend Visualization
- **Heatmap/Grid Display**: The frontend uses a heatmap or grid layout to represent varying levels of activity across hotel areas.
- **Tooltips**: Hovering over each area reveals specific activity data, like the number of visitors.

### 3. Data Processing and Insights
The backend processes the customer activity data and the frontend displays insights such as:
- **Most and Least Active Areas**: Displays the areas with the highest and lowest levels of activity.
- **Peak Activity Times**: Optionally displays peak times based on activity data.

### 4. UI/UX Design
The dashboard is designed to be simple and easy to understand, focusing on usability over elaborate UI design. It includes:
- A heatmap/grid layout showing hotel areas.
- Tooltips that display detailed data for each area.
- Insights on the most and least active areas.

---

## Technology Stack

### Frontend:
- **React**: JavaScript library for building the user interface.
- **Vite**: A build tool for faster development and bundling with React.
- **Tailwind CSS**: Utility-first CSS framework for custom styles and responsive designs.
- **vite-plugin-pages**: Dynamic routing based on the folder structure.
- **TanStack Query (React Query)**: Used for fetching and caching API data.
- **ApexCharts**: For data visualization in the form of a heatmap.

### Backend:
- **Express.js**: Web framework for Node.js to build the API and process data.

---

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Riddheshdesai/Activity-Dashboard.git
   ```

2. Navigate to the project directory for Front-End Project Setup:

   ```bash
   cd Front-end
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```
3. Running the Application :

   ```bash
   npm run dev
   ```
4. Navigate to the project directory for Front-End Project Setup:

   ```bash
   cd Backend
   ```

5. Install the dependencies:

   ```bash
   npm install
   ```

3. Running the Server :

   ```bash
   node server.js
   ```

Your application will be available at `http://localhost:5173`.
