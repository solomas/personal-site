---
title: "A scenario model for Amsterdam neighbourhood property values"
summary: "A working model that projects 10-year property value ranges across 71 Amsterdam postcode zones, built on open public data. Scenarios, not forecasts."
date: 2026-04-01
status: live
tags: ["housing", "modelling", "amsterdam", "open-data"]
featured: true
links: []
---

A working scenario model for the Amsterdam housing market, covering 71 PC4 postcode zones across the city. The model takes structural neighbourhood data, current macro conditions, and a set of feedback mechanisms, and produces a ten-year range of plausible property value trajectories under four scenarios: baseline, boom, stress and policy.

The build sits on open public data only. ECB rates, CBS structural fields per neighbourhood, DNB mortgage production, NVM market indicators, Amsterdam municipal data on rents, building permits and new housing plans, Inside Airbnb listings. No proprietary feeds, no scraped commercial sources. The constraint is deliberate. It keeps the methodology reproducible and the sourcing auditable.

The interesting part is what the model is honest about. The neighbourhood comparison is a structural ranking, not a live market scan. Live transaction prices and rents sit at city level, not per zone, because that data is not available openly. The model produces scenario ranges, not point forecasts. Each neighbourhood card surfaces these limitations rather than hiding them. The feedback loops the model uses, credit amplification, rental buffer collapse, construction freeze, landlord exit through uitponden, are named mechanisms with documented data anchors, separated from calibration choices that are flagged explicitly.

The work runs across two repos. A Python data pipeline that fetches and merges sources on weekly, monthly, quarterly and annual cadences. A React front end with Supabase as the database and auth layer, deployed on Vercel. Map view, scenario controls, PDF export, English and Dutch.

This is the project that mixes most of what I like working on in one place. Housing as a system. Honest scenario modelling. Open data as a constraint and a feature. Building something that could plausibly become useful to others rather than only to me. It is being prepared for paid release later this year, with the current version live and usable at [amsterdam-property-model.vercel.app](https://amsterdam-property-model.vercel.app/). The product name will change before launch.
