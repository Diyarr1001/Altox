// src/data/services.ts
import { ReactNode } from 'react';
import { ShieldCheck, Cross, Dna, Activity, Eye, Sprout, TestTube, Crosshair, Droplet, ArrowRight, Zap, Target, Leaf } from 'lucide-react';

export interface ServiceDetail {
    slug: string;
    title: string;
    description: string;
    fullDescription: string;
    features: string[];
    applications: string[];
    image: string;
    icon: string;
    // New fields for richer content
    detailedSections?: {
        title: string;
        content: string;
        image?: string;
    }[];
    methodology?: {
        step: string;
        description: string;
    }[];
    regulatoryStandards?: string[];
    videoUrl?: string;
    gallery?: string[];
    specifications?: Record<string, string>;
}

export const servicesData: ServiceDetail[] = [
    {
        slug: 'general-and-reproduction-toxicology',
        title: 'General and Reproduction Toxicology',
        description: 'Comprehensive evaluations for acute, sub-chronic, chronic toxicity, and DART in mammalian models.',
        fullDescription: 'Our General and Reproduction Toxicology programs provide the foundational safety data required for regulatory submissions worldwide. We conduct acute to chronic repeated-dose studies in rodent and non-rodent models, precisely aligned with OECD, FDA, and EMA guidelines. Furthermore, our Developmental and Reproductive Toxicology (DART) segments assess potential adverse effects on fertility, embryonic development, and multi-generational reproductive health.',
        features: ['Acute, Sub-acute (14-28 day), Sub-chronic (90 day), Chronic (180+ day) Studies', 'Segment I, II, & III DART Studies', 'Teratology and Fetal Pathology', 'Rodent, Canine, and Porcine Capabilities'],
        applications: ['Pharmaceutical IND/NDA Submissions', 'Agrochemical Registrations', 'Medical Device Systemic Toxicity'],
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop',
        icon: 'Activity',
        detailedSections: [
            {
                title: 'General Toxicology Expertise',
                content: 'Our core toxicology services include systemic toxicity evaluations across multiple species and routes of administration. We specialize in identifying target organ toxicity and establishing dose-response relationships critical for human risk assessment.',
                image: 'https://images.unsplash.com/photo-1579154238328-3e284989626c?q=80&w=2070&auto=format&fit=crop'
            },
            {
                title: 'DART & Multi-generational Studies',
                content: 'Developmental and Reproductive Toxicology (DART) is a cornerstone of our reproduction assays. We evaluate every phase of the reproductive cycle, from gametogenesis through weaning, ensuring comprehensive safety profiles for pharmaceuticals and chemicals.',
                image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=2070&auto=format&fit=crop'
            }
        ],
        methodology: [
            { step: 'Study Design', description: 'Collaborative protocol development based on intended use and regulatory guidelines.' },
            { step: 'In-Life Phase', description: 'Continuous monitoring and data collection in our state-of-the-art AAALAC-compliant vivarium.' },
            { step: 'Pathology & Analysis', description: 'Comprehensive clinical chemistry, hematology, and histopathological evaluation by board-certified pathologists.' },
            { step: 'Reporting', description: 'Detailed, audit-ready GLP reports for global regulatory submission.' }
        ],
        regulatoryStandards: ['OECD TG 401, 407, 408, 451', 'FDA Redbook 2000', 'EMA/CPMP/SWP/2145/00'],
        specifications: {
            'Compliance': 'GLP (Good Laboratory Practice)',
            'Standard Species': 'Rodent, Canine, Swine',
            'Typical Duration': '28 days to 2 years'
        },
        gallery: [
            'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2070&auto=format&fit=crop'
        ]
    },
    {
        slug: 'genetic-toxicology-mutagenicity',
        title: 'Genetic Toxicology / Mutagenicity',
        description: 'In vitro and in vivo assays assessing the potential of compounds to induce genetic damage.',
        fullDescription: 'Genetic toxicology is a critical early milestone in the safety assessment pipeline. Altox Labs offers a complete battery of GLP-compliant assays to evaluate mutagenic and clastogenic potential. Our protocols are designed to detect chromosomal damage, gene mutations, and DNA strand breaks using both sophisticated in vitro cell cultures and highly predictive in vivo mammalian models.',
        features: ['Bacterial Reverse Mutation (Ames Test) - OECD 471', 'In Vitro Mammalian Chromosomal Aberration - OECD 473', 'In Vitro Mammalian Cell Micronucleus - OECD 487', 'In Vivo Mammalian Erythrocyte Micronucleus - OECD 474'],
        applications: ['Early Phase Screening', 'Impurity Qualification', 'Regulatory Core Batteries'],
        image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1974&auto=format&fit=crop',
        icon: 'Dna',
        detailedSections: [
            {
                title: 'Bacterial Mutagenicity (Ames Test)',
                content: 'Our Ames assay utilize multiple Salmonella typhimuruim and E. coli strains to detect point mutations. We offer both plate incorporation and pre-incubation methods with metabolic activation (S9 mix).',
                image: 'https://images.unsplash.com/photo-1583912267550-d44d7a125e71?q=80&w=2070&auto=format&fit=crop'
            },
            {
                title: 'Cytogenetics & Clastogenicity',
                content: 'We evaluate chromosomal damage using both in vitro (human lymphocytes or CHO cells) and in vivo (mammalian bone marrow) systems. Our micronucleus and aberration assays are key to identifying genotoxic risks.',
                image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2070&auto=format&fit=crop'
            }
        ],
        methodology: [
            { step: 'Strain/Cell Selection', description: 'Selecting appropriate biological systems based on OECD and ICH S2(R1) guidelines.' },
            { step: 'Treatment & Culture', description: 'Exposure of test systems to varying concentrations of the test item with/without metabolic activation.' },
            { step: 'Scoring & Analysis', description: 'Manual and automated scoring of colonies, aberrations, or micronuclei by expert genetic toxicologists.' },
            { step: 'Result Interpretation', description: 'Statistical evaluation and synthesis of data to determine genotoxic potential.' }
        ],
        regulatoryStandards: ['OECD 471, 473, 487, 474', 'ICH S2(R1)', 'FDA Redbook'],
        specifications: {
            'Compliance': 'GLP',
            'Systems': 'Bacterial (Ames), Mammalian Cell Lines, Primary Lymphocytes',
            'Timeline': '4 - 8 weeks'
        },
        gallery: [
            'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1574345330896-180b5eacc5e4?q=80&w=1969&auto=format&fit=crop'
        ]
    },
    {
        slug: 'endocrine-disruptor-assays',
        title: 'Endocrine Disruptor Assays',
        description: 'Specialized testing focusing on the interaction of chemicals with the endocrine system.',
        fullDescription: 'With changing global regulatory landscapes regarding Endocrine Disrupting Chemicals (EDCs), Altox provides robust screening arrays targeting estrogen, androgen, and thyroid hormonal pathways. Our tiered approach fulfills EPA EDSP (Endocrine Disruptor Screening Program) and standardized OECD conceptual framework protocols, evaluating both mechanism of action and adverse apical outcomes.',
        features: ['Uterotrophic Bioassay (OECD 440)', 'Hershberger Bioassay (OECD 441)', 'In Vitro Estrogen/Androgen Receptor Binding', 'Steroidogenesis Assays'],
        applications: ['Agrochemical Evaluations', 'Industrial Chemical REACH Compliance', 'Consumer Product Safety'],
        image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop',
        icon: 'Target',
        detailedSections: [
            {
                title: 'Hormonal Pathway Screening',
                content: 'We utilize a battery of in vitro and in vivo assays to detect interference with the estrogen and androgen systems. This includes receptor binding assays and transcriptional activation assays.',
                image: 'https://images.unsplash.com/photo-1579154238328-3e284989626c?q=80&w=2070&auto=format&fit=crop'
            }
        ],
        methodology: [
            { step: 'Tier 1 Screening', description: 'Initial battery of assays to identify potential endocrine activity.' },
            { step: 'Dose-Response Testing', description: 'Characterizing the potency and nature of the interaction.' },
            { step: 'Apical Outcome Assessment', description: 'Evaluating the biological relevance and adverse effects in whole-organism models.' }
        ],
        regulatoryStandards: ['OECD 440, 441', 'EPA EDSP Tier 1'],
        specifications: {
            'Compliance': 'GLP',
            'Focus': 'Estrogen, Androgen, Thyroid (EAT)',
            'Timeline': '8 - 12 weeks'
        }
    },
    {
        slug: 'in-vitro-toxicology',
        title: 'In Vitro Toxicology',
        description: 'Alternative testing methods minimizing animal use via 3D reconstructed tissues and cellular models.',
        fullDescription: 'Altox Labs is committed to the 3Rs (Replacement, Reduction, Refinement) by offering an expansive array of validated non-animal testing methods. Utilizing 3D Reconstructed Human Epidermis (RhE) and Human Corneal Epithelium (RhCE) models, we provide highly predictive, mechanistically relevant data for local tolerance and cytotoxicity.',
        features: ['In Vitro Skin Corrosion (OECD 431) & Irritation (OECD 439)', 'In Vitro Eye Irritation (OECD 492)', 'Cytotoxicity (Neutral Red Uptake - NRU)', 'Skin Sensitization (DPRA, KeratinoSens)'],
        applications: ['Cosmetics Testing (EU Animal Ban Compliant)', 'Medical Device Biocompatibility', 'Occupational Hazard Labeling'],
        image: 'https://images.unsplash.com/photo-1574345330896-180b5eacc5e4?q=80&w=1969&auto=format&fit=crop',
        icon: 'TestTube',
        detailedSections: [
            {
                title: '3D Reconstructed Human Tissues',
                content: 'We utilize cutting-edge RhE and RhCE models from leading providers (e.g., EpiSkin, MatTek) to perform irritation and corrosion studies. These models provide a high degree of correlation with human clinical data.',
                image: 'https://images.unsplash.com/photo-1532187643603-c15568efbbd3?q=80&w=2070&auto=format&fit=crop'
            },
            {
                title: 'Screening & Alternative Methods',
                content: 'From DPRA for skin sensitization to NRU for basal cytotoxicity, our non-animal focus ensures ethical compliance while maintaining scientific rigor. We offer customized screening batteries for early-stage candidate selection.',
                image: 'https://images.unsplash.com/photo-1579154238328-3e284989626c?q=80&w=2070&auto=format&fit=crop'
            }
        ],
        methodology: [
            { step: 'Model Preparation', description: 'Sourcing and equilibrating 3D tissue models or cell lines under standardized conditions.' },
            { step: 'Exposure Phase', description: 'Precise application of test items for specific durations (topical or systemic).' },
            { step: 'Endpoint Measurement', description: 'Assessing cell viability (MTT/WST-1), biomarker release (IL-1α), or structural changes.' },
            { step: 'Prediction Modeling', description: 'Applying validated prediction models to categorize the test item according to UN GHS standards.' }
        ],
        regulatoryStandards: ['OECD 431, 439, 492, 442C, 442D', 'ISO 10993-5 (Medical Devices)'],
        specifications: {
            'Compliance': 'GLP & ISO',
            'Main Models': 'EpiSkin™, EpiDerm™, EpiOcular™',
            '3R Commitment': 'Replacement & Reduction focused'
        },
        gallery: [
            'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=2070&auto=format&fit=crop'
        ]
    },
    {
        slug: 'safety-pharmacology',
        title: 'Safety Pharmacology',
        description: 'Evaluating potential undesirable pharmacodynamic effects on primary physiological functions.',
        fullDescription: 'Compliant with ICH S7A and S7B paradigms, our Safety Pharmacology studies investigate the acute effects of new chemical entities on vital organ systems prior to first-in-human clinical trials. We utilize advanced telemetry and non-invasive physiological monitoring to capture high-fidelity, continuous data.',
        features: ['Cardiovascular Telemetry (ECG, Blood Pressure)', 'Central Nervous System (Irwin/FOB Assessments)', 'Respiratory Function (Plethysmography)', 'hERG Assays (GLP & non-GLP)'],
        applications: ['Small & Large Molecule INDs', 'Dose-ranging Support', 'QT Prolongation Risk Assessment'],
        image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1931&auto=format&fit=crop',
        icon: 'Activity',
        methodology: [
            { step: 'Surgical Implantation', description: 'For cardiovascular telemetry, specialized surgeons implant transmitters in rodent or non-rodent models.' },
            { step: 'Dosing & Monitoring', description: 'Administering the test item and recording physiological parameters in real-time.' },
            { step: 'Data Integration', description: 'Correlation of pharmacodynamic effects with systemic exposure (PK/TK).' }
        ],
        specifications: {
            'Compliance': 'GLP',
            'Organ Systems': 'CV, CNS, Respiratory',
            'Data Format': 'Continuous Telemetry'
        },
        regulatoryStandards: ['ICH S7A', 'ICH S7B']
    },
    {
        slug: 'dmpk',
        title: 'DMPK',
        description: 'Drug Metabolism and Pharmacokinetics evaluating absorption, distribution, metabolism, and excretion in biological systems.',
        fullDescription: 'Understanding the ADME profile is crucial for candidate selection and dosing rationale. Our DMPK department integrates in vivo bioanalysis with in vitro metabolic stability profiling to map out systemic exposure, clearance rates, half-lives, and metabolite generation across various test species.',
        features: ['In Vivo PK Profiling (Rodent, Canine, Swine)', 'Metabolic Stability (Microsomes, Hepatocytes)', 'Plasma Protein Binding', 'Tissue Distribution Studies'],
        applications: ['Lead Optimization', 'Toxicokinetic (TK) Support for Tox Studies', 'First-in-Human Dose Prediction'],
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop',
        icon: 'Cross',
        detailedSections: [
            {
                title: 'Advanced Bioanalytical Core',
                content: 'Our DMPK studies are supported by a high-resolution LC-MS/MS laboratory, enabling ultra-low detection limits and definitive metabolite identification.',
                image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop'
            }
        ],
        methodology: [
            { step: 'In Vivo Administration', description: 'IV, Oral, or SC dosing in selected species.' },
            { step: 'Serial Sampling', description: 'Precise blood/tissue collection at defined time points.' },
            { step: 'Bioanalysis', description: 'Quantification of parent compound and metabolites using validated methods.' },
            { step: 'PK Modeling', description: 'Non-compartmental and compartmental analysis to derive exposure parameters.' }
        ],
        specifications: {
            'Compliance': 'GLP & Non-GLP',
            'Platforms': 'LC-MS/MS, Radio-HPLC',
            'Turnaround': 'Project dependent'
        }
    },
    {
        slug: 'ecotoxicology',
        title: 'Ecotoxicology',
        description: 'Aquatic and terrestrial toxicity testing on indicator species for robust environmental risk assessment.',
        fullDescription: 'Assessing the ecological impact of chemicals is paramount for global registrations. Altox maintains specialized environmental control chambers simulating aquatic and terrestrial habitats. We evaluate acute and chronic lethality, growth inhibition, and reproductive disruption in universally accepted biomarker species.',
        features: ['Fish Acute Toxicity (OECD 203) & Early-Life Stage (OECD 210)', 'Daphnia Immobilisation (OECD 202) & Reproduction (OECD 211)', 'Algal Growth Inhibition (OECD 201)', 'Earthworm Acute (OECD 207) & Reproduction (OECD 222)'],
        applications: ['Agrochemical Environmental Fate Arrays', 'Pharmaceutical Environmental Risk Assessments (ERAs)', 'Industrial Chemical REACH'],
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop',
        icon: 'Sprout',
        methodology: [
            { step: 'Species Culturing', description: 'Maintaining healthy, standardized populations of Daphnia, Algae, and Fish.' },
            { step: 'Dose Calculation', description: 'Determining concentration ranges based on range-finding studies.' },
            { step: 'Apical endpoint monitoring', description: 'Daily tracking of survival, growth, and reproductive output.' }
        ],
        specifications: {
            'Compliance': 'GLP',
            'Trophic Levels': 'Primary Producers, Herbivores, Predators',
            'Regulatory': 'OECD, EPA OCSPP'
        }
    },
    {
        slug: 'environmental-fate',
        title: 'Environmental Fate',
        description: 'Tracking the degradation, mobility, and persistence of chemicals in soil, water, and air matrices.',
        fullDescription: 'Environmental fate studies definitively map the lifecycle of a compound once released into the environment. We utilize radiolabeled (14C) and non-radiolabeled techniques to monitor hydrolysis, photolysis, and biodegradation pathways, providing crucial data for determining persistence and bioaccumulation hazards.',
        features: ['Aerobic and Anaerobic Transformation in Soil/Water', 'Hydrolysis as a Function of pH (OECD 111)', 'Aqueous Photolysis', 'Adsorption/Desorption Profiling (OECD 106)'],
        applications: ['EPA and EFSA Agrochemical Dossiers', 'PBT (Persistent, Bioaccumulative, Toxic) Assessments', 'Wastewater Treatment Modeling'],
        image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop',
        icon: 'Leaf',
        methodology: [
            { step: 'Isotopic Synthesis', description: 'Procuring or synthesizing radiolabeled test materials.' },
            { step: 'Matrix Fortification', description: 'Applying the compound to standardized soil or water systems.' },
            { step: 'Long-term Incubation', description: 'Monitoring degradation over 30, 60, or 120 days.' },
            { step: 'Mass Balance', description: 'Accounting for all radioactivity, including volatile components (CO2).' }
        ],
        specifications: {
            'Compliance': 'GLP',
            'Matrices': 'Soil, Sediment, Water, Air',
            'Analytics': 'LSC, Radio-HPLC/TLC'
        }
    },
    {
        slug: 'metabolism-studies',
        title: 'Metabolism Studies',
        description: 'Deep-dive isotopic tracking of xenobiotic biotransformation in plants, animals, and soil.',
        fullDescription: 'Metabolism studies elucidate the exact chemical breakdown pathways of a parent compound into its metabolites. Primarily utilized for agrochemicals (crop, livestock, soil) and pharmaceuticals, this highly specialized division uses high-resolution mass spectrometry coupled with radiometric detectors to identify and quantify every molecular fraction.',
        features: ['Nature of the Residue in Crops and Livestock', 'Metabolite ID & Characterization using LC-MS/MS and NMR', 'Mass Balance Studies', 'Comparative In Vitro/In Vivo Metabolism'],
        applications: ['Maximum Residue Limit (MRL) Establishment', 'Dietary Risk Assessments', 'Identification of Toxic Metabolites'],
        image: 'https://images.unsplash.com/photo-1532187643603-c15568efbbd3?q=80&w=2070&auto=format&fit=crop',
        icon: 'Zap',
        methodology: [
            { step: 'Synthesis Support', description: 'Radiolabeling the test molecule (typically 14C or 3H).' },
            { step: 'Dosing & Incubation', description: 'Application to soil, plant surfaces, or livestock feeding.' },
            { step: 'Metabolite Profiling', description: 'Extraction and quantification of metabolites from complex matrices.' }
        ],
        specifications: {
            'Technology': 'Radiometric LC-MS/MS, NMR',
            'Sectors': 'Agrochemicals, Pharmaceuticals',
            'Guideline': 'OECD 301, 302 series'
        }
    },
    {
        slug: 'bio-analytical-testing',
        title: 'Bio-analytical Testing',
        description: 'Quantitative measurement of active ingredients, metabolites, and biomarkers in complex biological matrices.',
        fullDescription: 'The foundation of TK, PK, and clinical pathology lies in precise bioanalysis. Operating under strict GLP, our mass spectrometry core develops, validates, and executes highly sensitive quantitative assays for small and large molecules extracted from plasma, urine, tissues, and environmental matrices.',
        features: ['Method Development and Validation (FDA/EMA Guidelines)', 'High-throughput LC-MS/MS Sample Analysis', 'ELISA and Immunoassays for Biologics', 'Biomarker Quantification'],
        applications: ['Toxicokinetic Phase Support', 'Clinical Trial Bioanalysis Phase I-III', 'Environmental Residue Quantification'],
        image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop',
        icon: 'Crosshair',
        methodology: [
            { step: 'Method Validation', description: 'Rigorous assessment of precision, accuracy, and stability.' },
            { step: 'Sample Processing', description: 'Automated extraction and preparation for high-resolution analysis.' },
            { step: 'Data Quantification', description: 'Utilizing state-of-the-art software for peak integration and concentration mapping.' }
        ],
        specifications: {
            'Core Technology': 'Triple Quadrupole LC-MS/MS',
            'Sensitivity': 'pg/mL range capabilities',
            'Submission Ready': 'FDA & EMA e-Reporting'
        },
        regulatoryStandards: ['FDA Bioanalytical Method Validation Guidance']
    },
    {
        slug: 'analytical-chemistry',
        title: 'Analytical Chemistry',
        description: 'Physicochemical characterization, batch analysis, and stability testing of raw technical items and formulated products.',
        fullDescription: 'Before any biological testing begins, the test item must be definitively characterized. Our Analytical Chemistry division ensures the purity, stability, and homogeneity of the dosing formulations, alongside full 5-batch analyses and physicochemical property determinations essential for global chemical registrations.',
        features: ['5-Batch Analysis (Impurity Profiling)', 'Physicochemical Properties (Log Kow, Vapor Pressure, Melting Point)', 'Dosing Formulation Homogeneity & Stability', 'Storage Stability Profiling'],
        applications: ['Certificate of Analysis (CoA) Generation', 'Dose Verification for Tox Studies', 'Product Registration Data Requirements'],
        image: 'https://images.unsplash.com/photo-1614935151651-0bea6508abb0?q=80&w=2070&auto=format&fit=crop',
        icon: 'Beaker',
        methodology: [
            { step: 'System Suitability', description: 'Ensuring analytical instruments meet required sensitivity and precision.' },
            { step: 'Purity Assessment', description: 'Identifying and quantifying the active ingredient and impurities.' },
            { step: 'Stability Trials', description: 'Testing the substance under varying temperature and humidity conditions.' }
        ],
        specifications: {
            'Compliance': 'GLP',
            'Equipment': 'GC-FID/ECD, HPLC-UV/FLD',
            'ISO': 'ISO 17025 accredited methods'
        }
    },
    {
        slug: 'livestock-operator-exposure',
        title: 'Livestock/Operator Exposure',
        description: 'Simulated and field-level assessments determining the exposure risk to agricultural operators and livestock.',
        fullDescription: 'Crucial for the registration of crop protection agents, we evaluate the real-world exposure risks to both the spray operators applying the chemical and the livestock consuming the treated crops. We utilize both predictive modeling and empirical field studies (using passive dosimetry) to establish safety margins.',
        features: ['Operator Exposure Level (OEL) Determination', 'Dermal and Inhalation Worker Exposure Studies', 'Livestock Feeding Studies (Transfer Factor calculations)', 'Re-entry Interval (REI) Estimations'],
        applications: ['Agrochemical Label Safety Instructions', 'Occupational Health Risk Assessments', 'Dietary Burden Calculations'],
        image: 'https://images.unsplash.com/photo-1592659762303-90081d34b277?q=80&w=1973&auto=format&fit=crop',
        icon: 'Cross',
        methodology: [
            { step: 'Field Trial Setup', description: 'Coordinating with farms for simulated application studies.' },
            { step: 'Dosimetry Collection', description: 'Using patches, hand washes, and air samplers to capture exposure.' },
            { step: 'Risk Synthesis', description: 'Applying EFSA/EPA models to derive final safety recommendations.' }
        ],
        specifications: {
            'Study Type': 'Human & Animal Exposure',
            'Guidelines': 'OECD 705, 706',
            'Focus': 'Occupational & Public Health'
        }
    },
    {
        slug: 'efficacy-household-pesticides',
        title: 'Efficacy - Household Pesticides',
        description: 'Performance testing of public health and household pest control products against target vectors.',
        fullDescription: 'We conduct rigorous, controlled efficacy trials against urban and public health pests (mosquitoes, cockroaches, flies, ants) to satisfy WHO and regional registration guidelines. Our entomology team evaluates knock-down times, mortality rates, and residual efficacy of aerosols, coils, liquid vaporizers, and baits.',
        features: ['Peet-Grady Chamber Assays', 'Direct Spray and Residual Substrate Testing', 'Spatial Repellency Trials', 'Bait Efficacy and Resistance Monitoring'],
        applications: ['Public Health Product Claims Substantiation', 'WHO Prequalification Support', 'Consumer Product Formulation Optimization'],
        image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?q=80&w=2070&auto=format&fit=crop',
        icon: 'ShieldCheck',
        methodology: [
            { step: 'Strain Maintenance', description: 'Rearing susceptible and resistant insect strains.' },
            { step: 'Chamber Testing', description: 'Executing Peet-Grady or similar closed-room exposure studies.' },
            { step: 'Residual Analysis', description: 'Testing surfaces over weeks/months for persistent efficacy.' }
        ],
        specifications: {
            'Pests': 'Target Vectors (WHO listed)',
            'Methods': 'WHO, US EPA, CIBRC',
            'Verification': 'Video-tracked behavior analysis'
        }
    }
];
