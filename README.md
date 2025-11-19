# CIV300 – Sustainable Commuting Interactive Website
<a id="top"></a>

This project is a course website for **CIV300 – Terrestrial Energy Systems**.  
It explores how our daily travel choices in Toronto affect **carbon emissions**,  
**urban heat island**, **human comfort**, and **energy efficiency**.

The live site is hosted on GitHub Pages:

> **https://edisonyuxi.github.io/CIV300_Project_Sustainability_Commuting/**

---

## Table of Contents

- [1. Project Overview](#project-overview)
- [2. Main Features](#main-features)
- [3. Concept Pages & Creative Components](#concept-pages)
  - [3.1 Urban Heat Island – Albedo & Surfaces (`uhi.html`)](#uhi)
  - [3.2 Human Comfort – Same Toronto Day, Different Commute (`comfort.html`)](#comfort)
  - [3.3 Air Composition & Pollution (`air_pollution.html`)](#air-composition)
  - [3.4 Combustion & Energy Efficiency (`energy_efficiency.html`)](#energy-efficiency)
- [4. Technologies Used](#technologies)
- [5. How to View / Run the Site Locally](#how-to-run)
- [6. References & Data Sources](#references)
- [7. Acknowledgements](#acknowledgements)

---

## 1. Project Overview <a id="project-overview"></a>

The website is a single-page style experience with four linked concept pages:

- An **interactive main page** where users build a commuting scenario and see
  estimated CO₂ emissions.
- A concept page on **Urban Heat Island (UHI)** and albedo.
- A concept page on **Human Comfort** during different commute modes.
- A concept page on **Air Composition & Pollution** from private vehicles.
- A concept page on **Combustion & Energy Efficiency** comparing ICE vehicles
  and electric transit.

Each concept page contains:
1. A short **information section** to connect with CIV300 course theory.
2. A **creative component** (infographic, poster, data visualisation, or video).
3. A short **reference list** with the main data / literature sources.

[Back to top](#top)

---

## 2. Main Features <a id="main-features"></a>

### 2.1 Interactive Scenario Builder (`index.html`)

On the main page, users can:

- Select a **round-trip commute distance** with a slider.
- Switch between **Public transit** and **Private car**.
- Choose specific modes (streetcar, train, bike, airplane, car).
- See:
  - Estimated **CO₂ emissions per day** (g CO₂/day).
  - A **progress bar** referenced to 3000 g/day.
  - An animated **“Earth mood” badge** that reacts to emissions.
  - A small **SVG bar chart** showing unit emissions (g CO₂/km) for each mode.

This turns otherwise abstract emissions numbers into something visual and
relatable for everyday commuting decisions.

[Back to top](#top)

---

## 3. Concept Pages & Creative Components <a id="concept-pages"></a>

### 3.1 Urban Heat Island – Albedo & Surfaces (`uhi.html`) <a id="uhi"></a>

- Explains how **low-albedo surfaces** (black asphalt, dark roofs) absorb
  solar radiation, heat up, and slowly release heat at night, intensifying the
  Urban Heat Island effect.
- Connects UHI to transportation by linking **car-dependent streets** with large
  paved areas versus **transit-oriented, greener streets**.

**Creative Component – Infographic**

- A poster titled **“How commuting choices shape the Urban Heat Island”**:
  - Left: a **Toronto surface temperature map** showing hotter car-dominated
    corridors vs cooler green neighbourhoods.
  - Middle: a **step-by-step UHI process** (low albedo → high surface temperature
    → low reflection → nighttime heat release → extra waste heat from engines).
  - Right: comparison of a **car-dominated corridor** with a **transit/bike-
    friendly corridor**, highlighting cooler streets and more trees when
    road/parking space is reduced.
- The SVG poster is embedded with a click-to-zoom modal for better readability.

[Back to top](#top)

---

### 3.2 Human Comfort – Same Toronto Day, Different Commute (`comfort.html`) <a id="comfort"></a>

- Summarises how **air temperature, humidity, wind, radiation, clothing and
  activity** combine into a “feels-like” temperature (e.g., heat index or UTCI).
- Provides a simplified apparent-temperature relationship used conceptually on
  the main page.

**Creative Component – Infographic**

- An infographic titled **“Same Toronto Day, Different Commute”** comparing:
  - **Car** – stable temperature with AC but poor air quality in traffic.
  - **Bus stop** – full exposure to sun, wind, humidity while waiting.
  - **Subway** – sheltered, air-conditioned platform and trains.
  - **Bike** – best air quality and freedom of movement, but more physical effort.
- Each panel shows a short comfort description plus a **temperature** and
  **comfort score**, emphasising that *comfort is not just air temperature* but
  also exposure and activity level.

[Back to top](#top)

---

### 3.3 Air Composition & Pollution (`air_pollution.html`) <a id="air-composition"></a>

- Describes how internal combustion vehicles emit **CO₂** as well as
  **NOₓ, PM₂.₅, CO, VOCs**, which contribute to smog and health impacts.

**Creative Component – Data Tables + Mini-Chart**

- A **per-vehicle CO₂ table** showing:
  - Fuel type (gasoline/diesel)
  - Fuel consumption (L/100 km)
  - Annual distance (km/year)
  - Emission factor (kg CO₂/L)
  - Calculated t CO₂ per vehicle per year.
- A **Toronto-wide CO₂ table** combining per-vehicle values with estimated
  vehicle counts, giving **total annual emissions** for each category.
- A small horizontal **mini-chart** visualising the relative share of emissions
  by category (e.g., gasoline SUVs vs cars vs motorcycles).

This page demonstrates how simple engineering models can scale up individual
vehicle behaviour to city-wide climate impacts.

[Back to top](#top)

---

### 3.4 Combustion & Energy Efficiency (`energy_efficiency.html`) <a id="energy-efficiency"></a>

- Reviews the idea of **energy efficiency**  
  \(\eta = \frac{\text{Useful Energy Out}}{\text{Energy In}}\)  
  and compares typical values:  
  - Internal combustion engine: ~20–35%  
  - Electric drivetrain: ~80–95%

**Creative Component – Short Animated Video**

- Embedded video (`CIV300.mp4`) explaining:
  - How fuel energy in private cars is mostly lost as **waste heat**.
  - How **electric public transit** (subways, streetcars, electric buses) uses
    energy more efficiently and, in Ontario, runs on a low-carbon grid.
- The video is displayed in a responsive video frame with standard controls.

[Back to top](#top)

---

## 4. Technologies Used <a id="technologies"></a>

- **HTML5** – structure for all pages.
- **CSS** (custom + shared `styles.css`, `effects.css`, `cursor.css`) for layout,
  responsive cards, dark-mode toggle, and simple visual effects.
- **Vanilla JavaScript** (inline in `index.html`) for:
  - Sliders, radio buttons, and checkboxes.
  - CO₂ emission calculations and progress bar.
  - Updating the “Earth mood” emoji and text.
  - Drawing the SVG bar chart of unit emissions.
- **Static assets**
  - `Human_Comfort.jpg` – human comfort infographic.
  - `CIV300 - PAS3 - Infographics.svg` – Urban Heat Island poster.
  - `CIV300.mp4` / `CIV300.mov` – energy-efficiency animation.

No external frameworks or build tools are required.

[Back to top](#top)

---

## 5. How to View / Run the Site Locally <a id="how-to-run"></a>

1. **Clone the repository**
   ```bash
   git clone https://github.com/edisonyuxi/CIV300_Project_Sustainability_Commuting.git
   cd CIV300_Project_Sustainability_Commuting

2. **Open locally (simplest)**

 - Double-click `index.html`, or

 - Right-click `index.html` → “Open with” → your browser.

[Back to top](#top)

## 6. References & Data Sources

Each concept page includes its own reference section with key academic and data sources (e.g., Mohajerani et al. on UHI and asphalt, Ontario grid carbon intensity, TTC energy use, thermal comfort guidelines, etc.). For full citation details, please see the bottom of each HTML page.

[Back to top](#top)

## 7. Acknowledgements

This project was created as part of CIV300 – Terrestrial Energy Systems to help communicate how everyday commuting choices affect:

- Greenhouse gas emissions  
- Local air quality  
- Urban heat island intensity  
- Human thermal comfort  
- Overall energy efficiency in cities

[Back to top](#top)
