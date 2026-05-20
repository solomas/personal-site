---
title: "loelens: scenario modelling for cities, starting with Amsterdam"
summary: "A scenario model for property values across Dutch cities. The first city is Amsterdam, covering 71 PC4 postcode zones, built on open public data. Scenarios, not forecasts. More cities to follow."
date: 2026-04-01
status: live
tags: ["housing", "modelling", "amsterdam", "open-data", "loelens", "cities"]
featured: true
links: []
---

loelens is a scenario modelling tool for city property markets. The first city is Amsterdam, covering 71 PC4 postcode zones. The model takes structural neighbourhood data, current macro conditions, and a set of feedback mechanisms, and produces a ten-year range of plausible property value trajectories under four scenarios: baseline, boom, stress and policy. More Dutch cities will follow.

The build sits on open public data only. ECB rates, CBS structural fields per neighbourhood, DNB mortgage production, NVM market indicators, Amsterdam municipal data on rents, building permits and new housing plans, Inside Airbnb listings. No proprietary feeds, no scraped commercial sources. The constraint is deliberate. It keeps the methodology reproducible and the sourcing auditable, and it sets the template for adding the next city without changing the data contract.

The interesting part is what the model is honest about. The neighbourhood comparison is a structural ranking, not a live market scan. Live transaction prices and rents sit at city level, not per zone, because that data is not available openly. The model produces scenario ranges, not point forecasts. Each neighbourhood card surfaces these limitations rather than hiding them. The feedback loops the model uses, credit amplification, rental buffer collapse, construction freeze, landlord exit through uitponden, are named mechanisms with documented data anchors, separated from calibration choices that are flagged explicitly.

The work runs across two repos. A Python data pipeline that fetches and merges sources on weekly, monthly, quarterly and annual cadences. A React front end with Supabase as the database and auth layer, deployed on Vercel. Map view, scenario controls, PDF export, English and Dutch.

This is the project that mixes most of what I like working on in one place. Housing as a system. Honest scenario modelling. Open data as a constraint and a feature. Building something that could plausibly become useful to others rather than only to me. The Amsterdam model is live and usable at [loelens.com](https://loelens.com). A paid tier is in preparation.
