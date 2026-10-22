// Content for the pain research portfolio. Every fact comes from the CV and
// the earlier research page. Voice: plain first person, short lines.

export const asset = (p) => import.meta.env.BASE_URL + p;

export const profile = {
  name: "Umair Javaid Manj",
  role: "Spinal pain · EEG · Machine learning",
  location: "Auckland, New Zealand",
  email: "umairjavaidmanj@gmail.com",
  phone: "+64 20 4483186",
  orcid: "https://orcid.org/0009-0008-7085-3662",
  linkedin: "https://linkedin.com/in/umairjm",
  cv: asset("Umair_Manj_CV.pdf"),
};

export const methods = {
  "Neurophysiology & signals": ["EEG signal analysis", "IMU signal analysis", "Vibrotactile stimulation protocols", "Spectral analysis", "Time frequency analysis"],
  "Machine learning & statistics": ["PyTorch", "scikit-learn", "Subject level evaluation", "Leakage and confounding checks", "SHAP", "G*Power"],
  Programming: ["Python", "C++", "Bash", "PowerShell"],
  "Research practice": ["Participant data governance", "Privacy Act 2020", "Systematic review", "Scientific writing"],
};

export const experience = [
  {
    role: "Doctoral Researcher",
    org: "Auckland University of Technology, Health & Artificial Intelligence",
    date: "Oct 2025 to present",
    blurb:
      "Building an AI based biomarker for chronic low back pain from cortical responses. I translated the Zurich paraspinal vibration fMRI paradigm to 64 channel EEG, designed a case control study, ran Pilot 1 and produced the two minute protocol animation on this page.",
  },
  {
    role: "Data & AI Governance Analyst",
    org: "Centre for Chiropractic Research, New Zealand College of Chiropractic",
    date: "Aug 2026 to present",
    blurb:
      "I collect and analyse data for the Centre's chiropractic research studies and manage participant data and consent records under the Privacy Act 2020 and ethics approvals.",
  },
  {
    role: "Program Manager",
    org: "Coding, Robotics & AI Learning Project, NUST, Islamabad",
    date: "Sept 2024 to Oct 2025",
    blurb: "Ran a national training program, coordinating 80 instructors.",
  },
  {
    role: "Instructor",
    org: "HISDP, AI Lounge & Murabbi, NUST, Islamabad",
    date: "May 2023 to July 2024",
    blurb: "Supervised 18 student term projects and was awarded Best Instructor.",
  },
  {
    role: "Research Associate",
    org: "COGNET Lab, SEECS, NUST, Islamabad",
    date: "Dec 2022 to Apr 2023",
    blurb: "Worked on deep learning models under adversarial attack and mentored junior researchers.",
  },
  {
    role: "Research Assistant",
    org: "COGNET Lab, SEECS, NUST, Islamabad",
    date: "Aug 2021 to Nov 2022",
    blurb: "Built an end to end auditable system combining cryptography and computer vision.",
  },
];

export const education = [
  { degree: "PhD", org: "Auckland University of Technology, Health & Artificial Intelligence", date: "Oct 2025 to present" },
  {
    degree: "MS",
    org: "National University of Sciences & Technology (NUST), Computational Science & Engineering",
    date: "2017 to 2021",
    note: "Thesis: energy optimisation in data centres using fuzzy inference systems.",
  },
  {
    degree: "BE",
    org: "National University of Sciences & Technology (NUST), Computer Engineering",
    date: "2012 to 2016",
    note: "Thesis: NATO narrowband waveform on a software defined radio (digital signal processing, convolutional encoding).",
  },
];

// From the CV publication list. `doi` only where one exists. Cited titles keep
// their original hyphenation.
export const publications = [
  {
    cite:
      "Akhter, M. N., Ali, H., Niazi, I. K., Manj, U. J., & Taylor, D. (2026). Application of machine learning techniques in the measurement of ground reaction force (GRF) waveforms using inertial measurement unit (IMU) sensors: a systematic literature review.",
    venue: "Medical Engineering & Physics.",
    doi: "https://doi.org/10.1088/1873-4030/aeae3c",
    status: "Published",
  },
  {
    cite:
      "Rizvi, D. Q., Majeed, M., Manj, U. J., & Haq, M. I. U. (2025). Sleep disorder prediction with PSO-optimized machine and deep learning models.",
    venue: "ICODT2, pp. 1 to 6.",
    doi: "https://doi.org/10.1109/icodt269104.2025.11360691",
    status: "Published",
  },
  {
    cite:
      "Akhter, M. N., Manj, U. J., Ali, H., Niazi, I. K., & Taylor, D. Deep learning-based kinetics and center of pressure estimation during sit-to-walk transitions from a single sacrum-mounted IMU.",
    venue: "IEEE Transactions on Biomedical Engineering.",
    status: "Under review",
  },
  {
    cite:
      "Akhter, M. N., Ali, H., Niazi, I. K., Manj, U. J., & Taylor, D. Predicting ground reaction force during sit to walk: towards kinetically instrumenting the Timed Up and Go test.",
    venue: "Medical & Biological Engineering & Computing.",
    status: "Under review",
  },
  {
    cite:
      "Manj, U. J., Rizvi, S. D. Q., Niazi, I. K., Akhter, M. N., & Ali, H. Gated feature fusion and age confounding in plantar thermography for diabetes screening.",
    venue: "Biomedical Physics & Engineering Express.",
    status: "Under review",
  },
  {
    cite:
      "Manj, U. J., Qamar, D., Rashid, M. A., Perwaiz, N., & Niazi, I. K. Speaker leakage and subject level accuracy in voice biomarkers for Parkinson's disease.",
    venue: "Machine Learning: Health.",
    status: "Under review",
  },
];

export const protocolSteps = [
  "The participant lies prone on a plinth with an EEG cap in place.",
  "The painful segment and a healthy segment are marked on the skin.",
  "Tactor pairs sit 3 cm either side of the midline at each marked level, with a further pair on the calf.",
  "The painful pair and the healthy pair vibrate in turn.",
  "The cortical response to each is recorded over the sensory cortex and compared within the person.",
];

export const pilot = [
  {
    num: "92 to 99%",
    title: "Withdrawn",
    blurb:
      "My first pass decoded vibration on versus off at this accuracy. The hold window was 8.5 s against 3 s comparison windows, and the shorter windows biased the log power estimate. Duration matched, the effect was zero. The decoder was reading window length.",
  },
  {
    num: "1.39",
    title: "No steady state response",
    blurb:
      "Highest signal to noise ratio over the posterior central electrodes, against a feasibility criterion of 2.0. The vibrator left no trace in the EEG at the frequency used.",
  },
  {
    num: "3",
    title: "Fixes for the next recording",
    blurb:
      "Measure the drive frequency before the session with an accelerometer, choose a frequency the scalp can follow, and write the trigger into the EEG file.",
  },
];
