---
title: "Anomaly Detection for Electricity Consumption Time Series"
excerpt: "Built a controlled anomaly-injection framework (NNG-Mix-style Type 2/3/4) to create ground truth where none existed, then benchmarked IQR, LOF, Isolation Forest and Modified Z-Score against it under known anomaly regimes."
collection: portfolio
section: internships
order: 2
monogram: "EI"
summary: "Injects **known anomalies** into smart-meter time series to manufacture ground truth, then benchmarks IQR, LOF, Isolation Forest and Modified Z-Score — measuring **which classical detectors actually fire**, and where."
summary: "Injected known anomalies into smart-meter data to build ground truth, then measured which classical detectors actually find them."
tech: ["Python", "Time Series", "scikit-learn", "Kalman Filtering"]
meta: "ML Research Intern · Energy Informatics Lab, IISc · May–Jul 2025"
links:
  code: "https://github.com/AshwinKM103/Anomaly_Injection_IISc"
---

Real smart-meter data rarely comes with labelled faults, so detectors get compared on datasets
where nobody knows the right answer. The fix was to manufacture ground truth: a controlled
injection framework, following the **NNG-Mix** formulation, that plants Type 2, 3 and 4 anomalies
into electricity-consumption series at known positions and magnitudes.

With labels available by construction, I built a reproducible benchmarking pipeline over
**IQR**, **Local Outlier Factor**, **Isolation Forest** and **Modified Z-Score**, preceded by
Kalman filtering and seasonal decomposition to separate genuine anomalies from load seasonality.
That setup makes detector sensitivity measurable per anomaly type and severity, rather than
reported as a single aggregate score — showing where each classical method breaks down.
