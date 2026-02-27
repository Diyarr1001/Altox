// src/data/molecules.ts
export interface MoleculeDetail {
    slug: string;
    title: string;
    description: string;
    fullDescription: string;
    capabilities: string[];
    regulatoryPathways: string[];
    image: string;
    iconText: string;
}

export const moleculesData: MoleculeDetail[] = [
    {
        slug: 'pharmaceuticals',
        title: 'Pharmaceuticals',
        description: 'Specialized IND-enabling toxicology packages tailored for small molecule drugs (NCEs).',
        fullDescription: 'For New Chemical Entities (NCEs), speed to clinic without compromising safety data integrity is vital. Altox Labs offers customized, end-to-end IND/NDA enabling packages. We integrate DMPK, safety pharmacology, genetic toxicology, and general repeated-dose toxicity in rodents and non-rodents into seamless, parallel timelines to accelerate your Phase 1 transition.',
        capabilities: ['Complete IND-enabling Toxicology Arrays', 'Maximum Tolerated Dose (MTD) & Dose Range Finding (DRF)', 'Customized Toxicokinetic (TK) Modeling', 'Impurities/Degradant Qualification via ICH Q3A/B'],
        regulatoryPathways: ['FDA (CDER)', 'EMA', 'CDSCO (India)', 'PMDA (Japan)'],
        image: 'https://images.unsplash.com/photo-1614850715649-1d0106293cb1?q=80&w=2070&auto=format&fit=crop',
        iconText: 'Pharma'
    },
    {
        slug: 'biologics',
        title: 'Biologics',
        description: 'Advanced assessments designed specifically for large molecules and monoclonal antibodies.',
        fullDescription: 'Biopharmaceuticals require inherently different safety assessment strategies compared to small molecules. Following ICH S6(R1) principles, we focus on the pharmacological relevance of the test species (cross-reactivity), immunogenicity (Anti-Drug Antibodies - ADA), and exaggerated pharmacodynamics rather than traditional off-target toxicity.',
        capabilities: ['Tissue Cross-Reactivity (TCR) Screening', 'Immunogenicity (ADA) and Neutralizing Antibody (NAb) Assays', 'Non-human Primate (NHP) or Specialized Surrogate Models', 'Cytokine Release Syndrome (CRS) In Vitro Assays'],
        regulatoryPathways: ['FDA (CBER)', 'EMA', 'ICH S6(R1) Global Directives'],
        image: 'https://images.unsplash.com/photo-1618015359908-058e0a138c29?q=80&w=2070&auto=format&fit=crop',
        iconText: 'Bio'
    },
    {
        slug: 'vaccines',
        title: 'Vaccines',
        description: 'Preclinical safety and immunogenicity evaluations for prophylactic and therapeutic vaccines.',
        fullDescription: 'Vaccines present unique regulatory challenges requiring evaluation of local reactogenicity, systemic toxicity, and robust humoral/cellular immune responses. We specialize in repeat-dose toxicity studies incorporating specific vaccine administration routes (IM, SC, Intranasal) alongside deep bioanalytical monitoring of antibody titers.',
        capabilities: ['Repeat-Dose Toxicity per WHO/FDA Guidelines', 'Local Tolerance & Reactogenicity Scoring', 'Adjuvant Toxicity Profiling', 'ELISPOT and Flow Cytometry Immune Profiling'],
        regulatoryPathways: ['WHO Guidelines for Nonclinical Evaluation', 'FDA CBER', 'EMA'],
        image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop',
        iconText: 'Vax'
    },
    {
        slug: 'nucleic-acid-therapies',
        title: 'Nucleic Acid Therapies',
        description: 'Navigating the unique toxicological nuances of oligonucleotides, siRNA, and mRNA platforms.',
        fullDescription: 'The rapid emergence of RNA-based therapeutics necessitates highly tailored safety studies mapping immune stimulation (toll-like receptor activation), off-target hybridization, and lipid nanoparticle (LNP) vehicle toxicity. Altox has assembled niche expertise to evaluate these rapidly degrading, highly specific modalities.',
        capabilities: ['LNP and Delivery Vehicle Accumulation Toxicity', 'Pro-inflammatory Cytokine Panels', 'Off-Target Hybridization Analysis mapping', 'Enhanced Biodistribution Analytics using LC-MS/MS or qPCR'],
        regulatoryPathways: ['FDA Guidance on Oligonucleotide Therapeutics', 'EMA'],
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop',
        iconText: 'RNA'
    },
    {
        slug: 'crop-protection-agents',
        title: 'Crop Protection Agents',
        description: 'End-to-end 6-pack to chronic packages including ecotox for agrochemical registrations.',
        fullDescription: 'Agrochemicals require the most expansive and globally harmonized safety datasets. We provide the complete spectrum from acute "6-pack" hazard classification to multi-generational reproduction, long-term carcinogenicity, environmental fate, and pollinator (bee) safety profiles to satisfy complex global agricultural mandates.',
        capabilities: ['Acute 6-Pack Hazard Classification', 'Ecotoxicology (Aquatic, Avian, APIs, Earthworms)', 'Crop Residue and Metabolism Studies', 'Physical-Chemical Property 5-Batch Characterization'],
        regulatoryPathways: ['US EPA (FIFRA)', 'European Commission (EFSA)', 'CIB&RC (India)'],
        image: 'https://images.unsplash.com/photo-1628189675276-879e614da66d?q=80&w=2070&auto=format&fit=crop',
        iconText: 'Agri'
    },
    {
        slug: 'industrial-chemicals',
        title: 'Industrial Chemicals',
        description: 'Toxicology and physicochemical profiling ensuring compliance with global REACH frameworks.',
        fullDescription: 'The manufacture, import, and use of industrial and specialty chemicals (including dyes, solvents, and polymers) are governed by strict tonnage-based registration rules. Altox generates the necessary toxicological, ecotoxicological, and physical hazard endpoints to secure global market access and ensure worker safety.',
        capabilities: ['Tiered Testing Strategies minimizing Animal Use (In Vitro first)', 'Skin and Eye Irritation / Corrosion', 'Skin Sensitization (LLNA & In Vitro)', 'Aquatic Toxicity and Ready Biodegradability'],
        regulatoryPathways: ['EU REACH', 'UK REACH', 'K-REACH (Korea)', 'TSCA (US)'],
        image: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=2070&auto=format&fit=crop',
        iconText: 'Chem'
    },
    {
        slug: 'cosmeceuticals',
        title: 'Cosmeceuticals',
        description: 'Cruelty-free, 100% in-vitro 3D tissue models validating the safety of personal care ingredients.',
        fullDescription: 'With blanket global bans on animal testing for cosmetics, the safety paradigm relies exclusively on predictive alternative methods. We deploy state-of-the-art 3D reconstructed human tissues (RhE, RhCE) and advanced cellular assays to validate the non-irritating, non-sensitizing, and photo-safe properties of novel active ingredients.',
        capabilities: ['OECD In Vitro Skin Irritation/Corrosion', 'Bovine Corneal Opacity and Permeability (BCOP)', 'In Vitro Skin Sensitization Arrays', 'In Vitro Phototoxicity (3T3 NRU)'],
        regulatoryPathways: ['EU Cosmetics Regulation', 'FDA MoCRA Act', 'Cosmetics Directive (India)'],
        image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1974&auto=format&fit=crop',
        iconText: 'Cosm'
    },
    {
        slug: 'nutraceutical-dietary-supplements',
        title: 'Nutraceutical / Dietary Supplements',
        description: 'Generally Recognized As Safe (GRAS) toxicological profiling for novel food ingredients.',
        fullDescription: 'The explosion of functional foods and dietary supplements requires rigorous demonstration of safety, particularly for novel botanical extracts and synthesized vitamins. We perform structured sub-chronic repeated dose studies and genotoxicity arrays to establish No-Observed-Adverse-Effect-Levels (NOAEL) for human dietary risk calculation.',
        capabilities: ['FDA GRAS (Generally Recognized As Safe) Notification Packages', '90-Day Sub-Chronic Oral Toxicity in Rodents', 'Ames and Chromosomal Aberration Genotox', 'Heavy Metal & Pesticide Residue Screening'],
        regulatoryPathways: ['FDA (GRAS)', 'EFSA (Novel Foods)', 'FSSAI (India)'],
        image: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=2076&auto=format&fit=crop',
        iconText: 'Nutra'
    },
    {
        slug: 'biopesticide',
        title: 'Biopesticide',
        description: 'Tiered toxicity and pathogenicity evaluations for microbial and botanical pest control agents.',
        fullDescription: 'Biopesticides (microbials, biochemicals, and PIPs) present unique safety concerns requiring differentiation between classical toxicity and actual human/environmental infection or pathogenicity. Our protocols specifically test for clearance, persistence, and infectivity in mammalian models.',
        capabilities: ['Acute Oral, Dermal, Pulmonary Toxicity/Pathogenicity', 'Clearance Modeling', 'Non-Target Organism Ecotoxicity (Beneficial Insects)', 'Batch Analysis for Contaminants'],
        regulatoryPathways: ['EPA Biopesticides Registration Branch', 'EFSA'],
        image: 'https://images.unsplash.com/photo-1628189675276-879e614da66d?q=80&w=2070&auto=format&fit=crop',
        iconText: 'BioP'
    },
    {
        slug: 'biostimulants',
        title: 'Biostimulants',
        description: 'Safety validations for agricultural compounds designed to enhance crop vigor and yields.',
        fullDescription: 'As the agricultural market shifts towards sustainable yield enhancers, biostimulants face new regulatory scrutiny. Although often exhibiting low inherent toxicity, formal verification of safety to operators and the environment remains mandatory. We supply accelerated hazard assessments to validate these claims.',
        capabilities: ['Acute 6-Pack Evaluations', 'Soil and Aquatic Safety Screens', 'Phytotoxicity Testing', 'Residue Analysis'],
        regulatoryPathways: ['EU Fertilising Products Regulation', 'US State-level Approvals'],
        image: 'https://images.unsplash.com/photo-1530836369250-ef71a3f5e4bf?q=80&w=2070&auto=format&fit=crop',
        iconText: 'BioS'
    },
    {
        slug: 'biocide',
        title: 'Biocide',
        description: 'Stringent efficacy and toxicity portfolios for disinfectants, preservatives, and vector controls.',
        fullDescription: 'Chemicals intended to destroy or deter harmful organisms must prove not only their devastating efficacy against the target, but absolute safety for human exposure during application and residual contact. Altox handles the dual-track testing of both microbiological efficacy and mammalian toxicology.',
        capabilities: ['Efficacy Testing (Bactericidal, Virucidal, Fungicidal)', 'Dermal and Inhalation Risk Assessments', 'Environmental Fate and Marine Ecotox', 'Sensitization Profiling'],
        regulatoryPathways: ['EU Biocidal Products Regulation (BPR)', 'EPA Antimicrobials Division'],
        image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?q=80&w=2070&auto=format&fit=crop',
        iconText: 'Bioc'
    }
];
