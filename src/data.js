// Site content. Wording mirrors the CV (SwissApp/_pipe_body.tex) exactly.

export const asset = (p) => import.meta.env.BASE_URL + p;

export const profile = {
  name: "Umair Javaid Manj",
  role: "Spinal pain · EEG · Machine learning",
  location: "Auckland, NZ",
  email: "umairjavaidmanj@gmail.com",
  phone: "+64 20 4483186",
  orcid: "https://orcid.org/0009-0008-7085-3662",
  cv: asset("Umair_Manj_CV.pdf"),
};

export const skills = {
  "Neurophysiology & Signals": ["EEG preprocessing (ICA, ASR, GEDAI)", "ERP and time frequency analysis", "source localisation", "functional connectivity (wPLI, dPLI) and graph theory", "hyperscanning", "IMU analysis", "vibrotactile stimulation"],
  "EEG Toolboxes": ["MNE-Python", "autoreject", "EEGLAB (ICLabel, ROIconnect)", "FieldTrip", "BrainNet Viewer"],
  "Machine Learning": ["PyTorch", "scikit-learn", "SHAP", "subject level evaluation", "leakage and confounding checks"],
  "Statistics": ["linear mixed models (lme4, lmerTest, emmeans)", "cluster permutation tests", "power analysis (G*Power)"],
  "Programming": ["Python (NumPy, SciPy, pandas, NetworkX)", "R", "MATLAB", "C++"],
  "Training": ["Statistics Foundations 1 to 3 (LinkedIn Learning)"],
  "Research Practice": ["Participant data governance", "systematic review", "scientific writing"],
};

export const experience = [
  {
    role: "Doctoral Researcher",
    org: "Auckland University of Technology, Health & Artificial Intelligence, Auckland",
    date: "Oct 2025 to Present",
    points: [
      "Developing an AI based biomarker of chronic low back pain from cortical responses to paraspinal stimulation.",
      "Extending fMRI mapping of the back (Cole et al., 2022; Dörig et al., 2026) into the EEG dimension, adding millisecond timing and oscillatory dynamics, and comparing painful with healthy spinal segments within the same person.",
      "Designing a case control EEG study combining source imaging, representational similarity analysis and subject level machine learning.",
      "Led the first pilot and identified an analysis artefact behind an apparent decoding effect.",
    ],
  },
  {
    role: "Data & AI Governance Analyst",
    org: "New Zealand College of Chiropractic, Auckland",
    date: "Aug 2026 to Present",
    points: [
      "Analyse EEG hyperscanning of chiropractor and patient: inter brain and within brain connectivity (wPLI, dPLI) and source level network analysis.",
      "Apply graph theory to resting state EEG networks in a randomised chiropractic trial of adults and children, with linear mixed models.",
      "Model longitudinal clinical outcomes (immune response, DASS-21, PROMIS-25) with mixed effects models in R.",
      "Manage private participant data and consent records.",
    ],
  },
  {
    role: "Program Manager",
    org: "National University of Sciences and Technology, Islamabad",
    date: "Sep 2024 to Oct 2025",
    points: ["Led a national AI training program."],
  },
  {
    role: "Instructor",
    org: "AI Lounge, Islamabad",
    date: "May 2023 to Jul 2024",
    points: ["Supervised 18 student AI projects; awarded Best Instructor."],
  },
  {
    role: "Research Associate",
    org: "COGNET Lab, SEECS, National University of Sciences and Technology, Islamabad",
    date: "Aug 2021 to Apr 2023",
    points: [
      "Researched the robustness of deep learning and computer vision models to adversarial inputs.",
      "Mentored junior research assistants (Research Assistant until Nov 2022).",
    ],
  },
];

export const education = [
  { degree: "PhD", org: "Auckland University of Technology, Health & Artificial Intelligence, Auckland, New Zealand", date: "Oct 2025 to Present" },
  { degree: "MS", org: "National University of Sciences and Technology, Computational Science & Engineering, Islamabad", date: "2017 to 2021" },
  { degree: "BE", org: "National University of Sciences and Technology, Computer Engineering, Islamabad", date: "2012 to 2016" },
];

// `cite` is the text before the italic venue, `after` the text after it.
export const publications = [
  {
    cite: "Akhter, M. N., Ali, H., Niazi, I. K., Manj, U. J., & Taylor, D. (2026). Application of machine learning techniques in the measurement of ground reaction force (GRF) waveforms using inertial measurement unit (IMU) sensors: a systematic literature review.",
    venue: "Medical Engineering & Physics",
    after: ".",
    doi: "https://doi.org/10.1088/1873-4030/aeae3c",
  },
  {
    cite: "Rizvi, D. Q., Majeed, M., Manj, U. J., & Haq, M. I. U. (2025). Sleep disorder prediction with PSO-optimized machine and deep learning models.",
    venue: "ICODT2",
    after: ", pp. 1 to 6.",
    doi: "https://doi.org/10.1109/icodt269104.2025.11360691",
  },
  {
    cite: "Haq, M. I. U., Ahmad, Z., Manj, U. J., Akhter, M. N., Arfeen, Z. A., & Qamar, S. D. (2026). Bio-inspired soft robotic gripper with variable stiffness using magneto-rheological control.",
    venue: "ICRAI",
    after: ", pp. 1 to 6.",
    doi: "https://doi.org/10.1109/icrai70912.2026.11551972",
  },
  {
    cite: "Haq, M. I. U., Manj, U. J., Paracha, S. Q., Imam, Y., Rizvi, D. Q., & Farooqi, A. R. (2026). Neuro-symbolic AI-driven secure communication framework for autonomous cyber-physical systems.",
    venue: "APAN 2026",
    after: ", pp. 1 to 6.",
    doi: "https://doi.org/10.1109/apan70967.2026.11709696",
  },
  {
    cite: "Akhter, M. N., Manj, U. J., Ali, H., Niazi, I. K., & Taylor, D. Deep learning-based kinetics and center of pressure estimation during sit-to-walk transitions from a single sacrum-mounted IMU.",
    venue: "IEEE Transactions on Biomedical Engineering",
    after: " (under review).",
  },
  {
    cite: "Akhter, M. N., Ali, H., Niazi, I. K., Manj, U. J., & Taylor, D. Predicting ground reaction force during sit to walk: towards kinetically instrumenting the Timed Up and Go test.",
    venue: "Medical & Biological Engineering & Computing",
    after: " (under review).",
  },
  {
    cite: "Manj, U. J., Rizvi, S. D. Q., Niazi, I. K., Akhter, M. N., & Ali, H. Gated feature fusion and age confounding in plantar thermography for diabetes screening.",
    venue: "Biomedical Physics & Engineering Express",
    after: " (under review).",
  },
  {
    cite: "Manj, U. J., Qamar, D., Rashid, M. A., Perwaiz, N., & Niazi, I. K. Speaker leakage and subject level accuracy in voice biomarkers for Parkinson's disease.",
    venue: "Machine Learning: Health",
    after: " (under review).",
  },
];
