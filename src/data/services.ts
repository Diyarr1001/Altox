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
    icon: string; // We'll map this string to a Lucide icon component in the UI
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
        icon: 'Activity'
    },
    {
        slug: 'genetic-toxicology-mutagenicity',
        title: 'Genetic Toxicology / Mutagenicity',
        description: 'In vitro and in vivo assays assessing the potential of compounds to induce genetic damage.',
        fullDescription: 'Genetic toxicology is a critical early milestone in the safety assessment pipeline. Altox Labs offers a complete battery of GLP-compliant assays to evaluate mutagenic and clastogenic potential. Our protocols are designed to detect chromosomal damage, gene mutations, and DNA strand breaks using both sophisticated in vitro cell cultures and highly predictive in vivo mammalian models.',
        features: ['Bacterial Reverse Mutation (Ames Test) - OECD 471', 'In Vitro Mammalian Chromosomal Aberration - OECD 473', 'In Vitro Mammalian Cell Micronucleus - OECD 487', 'In Vivo Mammalian Erythrocyte Micronucleus - OECD 474'],
        applications: ['Early Phase Screening', 'Impurity Qualification', 'Regulatory Core Batteries'],
        image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1974&auto=format&fit=crop',
        icon: 'Dna'
    },
    {
        slug: 'endocrine-disruptor-assays',
        title: 'Endocrine Disruptor Assays',
        description: 'Specialized testing focusing on the interaction of chemicals with the endocrine system.',
        fullDescription: 'With changing global regulatory landscapes regarding Endocrine Disrupting Chemicals (EDCs), Altox provides robust screening arrays targeting estrogen, androgen, and thyroid hormonal pathways. Our tiered approach fulfills EPA EDSP (Endocrine Disruptor Screening Program) and standardized OECD conceptual framework protocols, evaluating both mechanism of action and adverse apical outcomes.',
        features: ['Uterotrophic Bioassay (OECD 440)', 'Hershberger Bioassay (OECD 441)', 'In Vitro Estrogen/Androgen Receptor Binding', 'Steroidogenesis Assays'],
        applications: ['Agrochemical Evaluations', 'Industrial Chemical REACH Compliance', 'Consumer Product Safety'],
        image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop',
        icon: 'Target'
    },
    {
        slug: 'in-vitro-toxicology',
        title: 'In Vitro Toxicology',
        description: 'Alternative testing methods minimizing animal use via 3D reconstructed tissues and cellular models.',
        fullDescription: 'Altox Labs is committed to the 3Rs (Replacement, Reduction, Refinement) by offering an expansive array of validated non-animal testing methods. Utilizing 3D Reconstructed Human Epidermis (RhE) and Human Corneal Epithelium (RhCE) models, we provide highly predictive, mechanistically relevant data for local tolerance and cytotoxicity.',
        features: ['In Vitro Skin Corrosion (OECD 431) & Irritation (OECD 439)', 'In Vitro Eye Irritation (OECD 492)', 'Cytotoxicity (Neutral Red Uptake - NRU)', 'Skin Sensitization (DPRA, KeratinoSens)'],
        applications: ['Cosmetics Testing (EU Animal Ban Compliant)', 'Medical Device Biocompatibility', 'Occupational Hazard Labeling'],
        image: 'https://images.unsplash.com/photo-1574345330896-180b5eacc5e4?q=80&w=1969&auto=format&fit=crop',
        icon: 'TestTube'
    },
    {
        slug: 'safety-pharmacology',
        title: 'Safety Pharmacology',
        description: 'Evaluating potential undesirable pharmacodynamic effects on primary physiological functions.',
        fullDescription: 'Compliant with ICH S7A and S7B paradigms, our Safety Pharmacology studies investigate the acute effects of new chemical entities on vital organ systems prior to first-in-human clinical trials. We utilize advanced telemetry and non-invasive physiological monitoring to capture high-fidelity, continuous data.',
        features: ['Cardiovascular Telemetry (ECG, Blood Pressure)', 'Central Nervous System (Irwin/FOB Assessments)', 'Respiratory Function (Plethysmography)', 'hERG Assays (GLP & non-GLP)'],
        applications: ['Small & Large Molecule INDs', 'Dose-ranging Support', 'QT Prolongation Risk Assessment'],
        image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1931&auto=format&fit=crop',
        icon: 'Activity'
    },
    {
        slug: 'dmpk',
        title: 'DMPK',
        description: 'Drug Metabolism and Pharmacokinetics evaluating absorption, distribution, metabolism, and excretion in biological systems.',
        fullDescription: 'Understanding the ADME profile is crucial for candidate selection and dosing rationale. Our DMPK department integrates in vivo bioanalysis with in vitro metabolic stability profiling to map out systemic exposure, clearance rates, half-lives, and metabolite generation across various test species.',
        features: ['In Vivo PK Profiling (Rodent, Canine, Swine)', 'Metabolic Stability (Microsomes, Hepatocytes)', 'Plasma Protein Binding', 'Tissue Distribution Studies'],
        applications: ['Lead Optimization', 'Toxicokinetic (TK) Support for Tox Studies', 'First-in-Human Dose Prediction'],
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop',
        icon: 'Cross'
    },
    {
        slug: 'ecotoxicology',
        title: 'Ecotoxicology',
        description: 'Aquatic and terrestrial toxicity testing on indicator species for robust environmental risk assessment.',
        fullDescription: 'Assessing the ecological impact of chemicals is paramount for global registrations. Altox maintains specialized environmental control chambers simulating aquatic and terrestrial habitats. We evaluate acute and chronic lethality, growth inhibition, and reproductive disruption in universally accepted biomarker species.',
        features: ['Fish Acute Toxicity (OECD 203) & Early-Life Stage (OECD 210)', 'Daphnia Immobilisation (OECD 202) & Reproduction (OECD 211)', 'Algal Growth Inhibition (OECD 201)', 'Earthworm Acute (OECD 207) & Reproduction (OECD 222)'],
        applications: ['Agrochemical Environmental Fate Arrays', 'Pharmaceutical Environmental Risk Assessments (ERAs)', 'Industrial Chemical REACH'],
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop',
        icon: 'Sprout'
    },
    {
        slug: 'environmental-fate',
        title: 'Environmental Fate',
        description: 'Tracking the degradation, mobility, and persistence of chemicals in soil, water, and air matrices.',
        fullDescription: 'Environmental fate studies definitively map the lifecycle of a compound once released into the environment. We utilize radiolabeled (14C) and non-radiolabeled techniques to monitor hydrolysis, photolysis, and biodegradation pathways, providing crucial data for determining persistence and bioaccumulation hazards.',
        features: ['Aerobic and Anaerobic Transformation in Soil/Water', 'Hydrolysis as a Function of pH (OECD 111)', 'Aqueous Photolysis', 'Adsorption/Desorption Profiling (OECD 106)'],
        applications: ['EPA and EFSA Agrochemical Dossiers', 'PBT (Persistent, Bioaccumulative, Toxic) Assessments', 'Wastewater Treatment Modeling'],
        image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop',
        icon: 'Leaf'
    },
    {
        slug: 'metabolism-studies',
        title: 'Metabolism Studies',
        description: 'Deep-dive isotopic tracking of xenobiotic biotransformation in plants, animals, and soil.',
        fullDescription: 'Metabolism studies elucidate the exact chemical breakdown pathways of a parent compound into its metabolites. Primarily utilized for agrochemicals (crop, livestock, soil) and pharmaceuticals, this highly specialized division uses high-resolution mass spectrometry coupled with radiometric detectors to identify and quantify every molecular fraction.',
        features: ['Nature of the Residue in Crops and Livestock', 'Metabolite ID & Characterization using LC-MS/MS and NMR', 'Mass Balance Studies', 'Comparative In Vitro/In Vivo Metabolism'],
        applications: ['Maximum Residue Limit (MRL) Establishment', 'Dietary Risk Assessments', 'Identification of Toxic Metabolites'],
        image: 'https://images.unsplash.com/photo-1532187643603-c15568efbbd3?q=80&w=2070&auto=format&fit=crop',
        icon: 'Zap'
    },
    {
        slug: 'bio-analytical-testing',
        title: 'Bio-analytical Testing',
        description: 'Quantitative measurement of active ingredients, metabolites, and biomarkers in complex biological matrices.',
        fullDescription: 'The foundation of TK, PK, and clinical pathology lies in precise bioanalysis. Operating under strict GLP, our mass spectrometry core develops, validates, and executes highly sensitive quantitative assays for small and large molecules extracted from plasma, urine, tissues, and environmental matrices.',
        features: ['Method Development and Validation (FDA/EMA Guidelines)', 'High-throughput LC-MS/MS Sample Analysis', 'ELISA and Immunoassays for Biologics', 'Biomarker Quantification'],
        applications: ['Toxicokinetic Phase Support', 'Clinical Trial Bioanalysis Phase I-III', 'Environmental Residue Quantification'],
        image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop',
        icon: 'Crosshair'
    },
    {
        slug: 'analytical-chemistry',
        title: 'Analytical Chemistry',
        description: 'Physicochemical characterization, batch analysis, and stability testing of raw technical items and formulated products.',
        fullDescription: 'Before any biological testing begins, the test item must be definitively characterized. Our Analytical Chemistry division ensures the purity, stability, and homogeneity of the dosing formulations, alongside full 5-batch analyses and physicochemical property determinations essential for global chemical registrations.',
        features: ['5-Batch Analysis (Impurity Profiling)', 'Physicochemical Properties (Log Kow, Vapor Pressure, Melting Point)', 'Dosing Formulation Homogeneity & Stability', 'Storage Stability Profiling'],
        applications: ['Certificate of Analysis (CoA) Generation', 'Dose Verification for Tox Studies', 'Product Registration Data Requirements'],
        image: 'https://images.unsplash.com/photo-1614935151651-0bea6508abb0?q=80&w=2070&auto=format&fit=crop',
        icon: 'Beaker' // We'll map to TestTube or similar if Beaker isn't imported, or we can use TestTube
    },
    {
        slug: 'livestock-operator-exposure',
        title: 'Livestock/Operator Exposure',
        description: 'Simulated and field-level assessments determining the exposure risk to agricultural operators and livestock.',
        fullDescription: 'Crucial for the registration of crop protection agents, we evaluate the real-world exposure risks to both the spray operators applying the chemical and the livestock consuming the treated crops. We utilize both predictive modeling and empirical field studies (using passive dosimetry) to establish safety margins.',
        features: ['Operator Exposure Level (OEL) Determination', 'Dermal and Inhalation Worker Exposure Studies', 'Livestock Feeding Studies (Transfer Factor calculations)', 'Re-entry Interval (REI) Estimations'],
        applications: ['Agrochemical Label Safety Instructions', 'Occupational Health Risk Assessments', 'Dietary Burden Calculations'],
        image: 'https://images.unsplash.com/photo-1592659762303-90081d34b277?q=80&w=1973&auto=format&fit=crop',
        icon: 'Cross'
    },
    {
        slug: 'efficacy-household-pesticides',
        title: 'Efficacy - Household Pesticides',
        description: 'Performance testing of public health and household pest control products against target vectors.',
        fullDescription: 'We conduct rigorous, controlled efficacy trials against urban and public health pests (mosquitoes, cockroaches, flies, ants) to satisfy WHO and regional registration guidelines. Our entomology team evaluates knock-down times, mortality rates, and residual efficacy of aerosols, coils, liquid vaporizers, and baits.',
        features: ['Peet-Grady Chamber Assays', 'Direct Spray and Residual Substrate Testing', 'Spatial Repellency Trials', 'Bait Efficacy and Resistance Monitoring'],
        applications: ['Public Health Product Claims Substantiation', 'WHO Prequalification Support', 'Consumer Product Formulation Optimization'],
        image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?q=80&w=2070&auto=format&fit=crop',
        icon: 'ShieldCheck'
    }
];
