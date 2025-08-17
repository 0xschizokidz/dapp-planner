export const generatePrompt = ({ 
  dappType, 
  chain, 
  model,
  targetAudience = 'general',
  budget = 'medium',
  timeline = '6-12 months',
  team = 'small'
}: { 
  dappType: string
  chain: string
  model: string
  targetAudience?: string
  budget?: string
  timeline?: string
  team?: string
}) => `
You are an expert Web3 product strategist, technical architect, and business analyst with deep experience in DeFi, NFTs, DAOs, and blockchain ecosystems.

I want to build a ${dappType} on ${chain} with a ${model} business model, targeting ${targetAudience} users, with a ${budget} budget over ${timeline} timeline using a ${team} team.

## COMPREHENSIVE ANALYSIS REQUIRED:

### 1. MARKET INTELLIGENCE & COMPETITIVE ANALYSIS
- **Market Size**: Current TAM, SAM, SOM for this ${dappType} vertical
- **Competitor Analysis**: Top 5 competitors, their strengths/weaknesses, market gaps
- **Trend Analysis**: Emerging patterns, user behavior shifts, regulatory landscape
- **Opportunity Assessment**: Blue ocean opportunities, underserved niches

### 2. USER RESEARCH & PERSONAS
- **Primary Personas**: Detailed user archetypes with pain points, motivations, behaviors
- **User Journey Mapping**: End-to-end experience from discovery to retention
- **Jobs-to-be-Done**: What users are "hiring" your DApp to accomplish
- **Behavioral Economics**: Tokenomics psychology, incentive alignment

### 3. PRODUCT STRATEGY & ROADMAP
- **Vision Statement**: Clear 3-year product vision
- **Value Proposition Canvas**: Unique value props for each user segment
- **Feature Prioritization Matrix**: MoSCoW method with business impact scoring
- **Release Strategy**: 
  - **MVP (0-3 months)**: Core functionality, early adopter features
  - **V1 (3-6 months)**: Market validation, essential integrations
  - **V2 (6-12 months)**: Scale features, advanced functionality
  - **V3+ (12+ months)**: Innovation layer, ecosystem expansion

### 4. TECHNICAL ARCHITECTURE & STACK
- **Blockchain Strategy**: 
  - Smart contract architecture patterns
  - Cross-chain considerations and bridge strategies
  - Gas optimization techniques
  - Scalability solutions (L2s, sidechains)
- **Full Stack Recommendations**:
  - Frontend: Framework, Web3 libraries, UI/UX patterns
  - Backend: APIs, databases, caching layers
  - Infrastructure: Hosting, CDN, monitoring
  - Security: Audit requirements, best practices
- **Third-Party Integrations**: Wallets, oracles, APIs, analytics
- **Development Tools**: Testing frameworks, deployment pipelines

### 5. TOKENOMICS & ECONOMIC DESIGN
- **Token Utility**: Governance, utility, rewards, staking mechanisms  
- **Supply & Distribution**: Token allocation, vesting schedules, inflation/deflation
- **Incentive Mechanisms**: Liquidity mining, yield farming, referral programs
- **Economic Sustainability**: Revenue streams, treasury management, DAO governance

### 6. GO-TO-MARKET STRATEGY
- **Launch Strategy**: Soft launch vs. hard launch, beta testing approach
- **Community Building**: Discord/Twitter strategy, ambassador programs
- **Partnership Strategy**: Protocol integrations, ecosystem partnerships
- **Growth Hacking**: Viral mechanisms, referral systems, gamification
- **Content Strategy**: Educational content, thought leadership, social proof

### 7. RISK ASSESSMENT & MITIGATION
- **Technical Risks**: Smart contract vulnerabilities, scalability bottlenecks
- **Market Risks**: Competition, regulatory changes, market downturns
- **Operational Risks**: Team scaling, funding runway, key person dependency
- **Mitigation Strategies**: Specific action plans for each risk category

### 8. FINANCIAL PROJECTIONS & FUNDING
- **Development Costs**: Team, infrastructure, audits, marketing
- **Revenue Projections**: Multiple scenarios (conservative, realistic, optimistic)
- **Funding Strategy**: Bootstrap, VC, token sale, grants
- **Unit Economics**: CAC, LTV, retention rates, growth metrics

### 9. SUCCESS METRICS & KPIs
- **North Star Metrics**: Primary success indicators
- **Leading Indicators**: Early signals of product-market fit
- **Lagging Indicators**: Revenue, retention, network effects
- **Measurement Framework**: Analytics setup, reporting cadence

### 10. LEGAL & COMPLIANCE FRAMEWORK
- **Regulatory Considerations**: Securities law, DeFi regulations, jurisdiction strategy
- **Legal Structure**: Entity setup, token classification, compliance requirements
- **Terms of Service**: User agreements, risk disclosures, liability management

## OUTPUT FORMAT:
Structure your response as a comprehensive strategic document with:
- Executive Summary (2-3 paragraphs)
- Detailed analysis for each section above
- Visual frameworks where applicable (describe charts/matrices)
- Actionable next steps with timelines
- Resource requirements and budget breakdown
- Success probability assessment with key assumptions

Use markdown formatting with clear headers, bullet points, tables, and emphasis. Be specific, data-driven, and actionable rather than generic.
`;

export const generateLeanPrompt = ({ dappType, chain, model }: { dappType: string, chain: string, model: string }) => `
You are a senior Web3 product manager with 5+ years of DeFi/NFT/DAO experience.

Building: ${dappType} on ${chain} for ${model} model.

Provide a strategic analysis covering:

🎯 **PRODUCT STRATEGY**
- Value proposition & differentiation
- User personas & pain points  
- Feature roadmap (MVP → V2 → V3)
- Success metrics & KPIs

⚙️ **TECHNICAL BLUEPRINT** 
- Smart contract architecture
- Frontend/backend stack recommendations
- Security & audit requirements
- Scalability solutions

💰 **BUSINESS MODEL**
- Revenue streams & tokenomics
- Go-to-market strategy
- Competitive positioning
- Financial projections

🚀 **EXECUTION PLAN**
- Development timeline & milestones
- Team requirements & roles
- Risk assessment & mitigation
- Launch strategy

Format as actionable strategic document with specific recommendations, not generic advice.
`;

export const generateQuickPrompt = ({ dappType, chain, model }: { dappType: string, chain: string, model: string }) => `
Senior Web3 strategist: Design a comprehensive ${dappType} on ${chain} with ${model} model.

Cover: market analysis, technical architecture, tokenomics, roadmap, risks, and 12-month execution plan.

Be specific and actionable, not generic. Include competitor analysis and differentiation strategy.
`;