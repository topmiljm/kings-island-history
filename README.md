## Live Demo

**https://kingsislandcoasters.vercel.app**

# Kings Island Coaster History

A comprehensive React application documenting the complete history of every roller coaster at **Kings Island**. The application combines historical data, interactive navigation, and a relational JSON database to create a digital archive of Kings Island's roller coaster history from 1972 to the present.

## Features

* Complete database of every Kings Island roller coaster
* Individual detail page for every coaster
* Search and filter coasters by name, status, manufacturer, material, and ride type
* Interactive historical timeline
* Decade-by-decade coaster history
* Historical records and achievements
* Manufacturer directory
* Park area history
* Historical name changes
* Embedded POV videos for each coaster
* Mobile-friendly responsive design
* Client-side routing with React Router

## Database Structure

The application is powered by a relational JSON database.

### coasters.json

Stores detailed information for every roller coaster including:

* Opening and closing dates
* Ride classifications
* Technical specifications
* Area history
* Name history
* Manufacturer relationships
* Timeline events
* Notes and references

### areas.json

Contains every current and former themed area including:

* Area descriptions
* Opening and closing years
* Historical changes

### manufacturers.json

Information for every manufacturer represented at Kings Island.

### records.json

Historical park, regional, and world records held by Kings Island roller coasters.

### timeline-events.json

Major park events including:

* Roller coaster openings/closings
* Area additions
* Area renames
* Historical milestones
* Other significant events

### decades.json

Groups roller coasters by decade, allowing visitors to explore the evolution of Kings Island's coaster lineup throughout the park's history.

### videos.json

Stores official and fan-recorded POV videos that are displayed on each coaster's detail page.

## Built With

* React
* React Router
* JavaScript (ES6+)
* CSS3
* Vite
* JSON relational database
* Vercel

## Project Structure

```text
src/
├── components/
├── data/
│   ├── areas.json
│   ├── coasters.json
│   ├── decades.json
│   ├── manufacturers.json
│   ├── records.json
│   ├── timeline-events.json
│   └── videos.json
├── pages/
│   ├── Home.jsx
│   ├── Coasters.jsx
│   ├── CoasterDetail.jsx
│   ├── Timeline.jsx
│   ├── Decades.jsx
│   └── Records.jsx
├── router/
├── App.jsx
└── main.jsx
```

## Planned Enhancements

* Interactive visual timeline
* Historical park maps from past years
* Coaster images/ off-ride videos/ coaster logos
* Statistics dashboard
* Manufacturer detail pages
* Area detail pages
* Record history visualization
* Coaster comparison tool
* Historical image galleries
* Advanced filtering and sorting
* Dark mode

## Installation

Clone the repository:

```bash
git clone https://github.com/topmiljm/kings-island-history.git
```

Navigate into the project:

```bash
cd kings-island-history
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## What This Project Demonstrates

* React application architecture
* React Router and dynamic routing
* Component-based UI development
* Responsive web design
* Relational data modeling using JSON
* Searching, filtering, and sorting
* Historical data organization
* Client-side data relationships
* Deploying production applications with Vercel

## Data Sources

Historical information compiled from public resources including:

* Roller Coaster DataBase (RCDB)
* Kings Island historical documentation
* Manufacturer specifications
* Publicly available historical records

## License

This project was created for educational and portfolio purposes. Kings Island and all associated attraction names are trademarks of their respective owners.
