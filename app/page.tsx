"use client";
import React, { useEffect, useState } from 'react';

export default function EnhancedDAppPlanner() {
  const [dappType, setDappType] = useState('DEX')
  const [chain, setChain] = useState('Ethereum')
  const [model, setModel] = useState('B2C')
  const [targetAudience, setTargetAudience] = useState('general')
  const [budget, setBudget] = useState('medium')
  const [timeline, setTimeline] = useState('6-12 months')
  const [team, setTeam] = useState('small')
  const [customPrompt, setCustomPrompt] = useState('')
  const [aiPrompt, setAiPrompt] = useState('')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)
  const [dark, setDark] = useState(false)
  const [showToast, setShowToast] = useState('')

  type SelectOption = {
    label: string
    value: string
  }

  const dappOptions: SelectOption[] = [
    { label: '🔄 DEX (Decentralized Exchange)', value: 'DEX' },
    { label: '🎨 NFT Marketplace', value: 'NFT Marketplace' },
    { label: '🏛️ DAO (Decentralized Autonomous Organization)', value: 'DAO' },
    { label: '🎮 Gaming DApp', value: 'Gaming DApp' },
    { label: '💰 DeFi Protocol', value: 'DeFi Protocol' },
    { label: '🌐 Social Network', value: 'Social Network' },
    { label: '🔗 Infrastructure Protocol', value: 'Infrastructure' },
    { label: '📊 Analytics Platform', value: 'Analytics' }
  ]

  const chainOptions: SelectOption[] = [
    { label: '⟠ Ethereum', value: 'Ethereum' },
    { label: '🔷 Polygon', value: 'Polygon' },
    { label: '🟡 BNB Chain', value: 'BNB Chain' },
    { label: '🔺 Arbitrum', value: 'Arbitrum' },
    { label: '🔴 Optimism', value: 'Optimism' },
    { label: '🌊 Solana', value: 'Solana' },
    { label: '💎 Avalanche', value: 'Avalanche' },
    { label: '🌙 Cosmos', value: 'Cosmos' }
  ]

  const modelOptions: SelectOption[] = [
    { label: '👥 B2C (Business to Consumer)', value: 'B2C' },
    { label: '🏢 B2B (Business to Business)', value: 'B2B' },
    { label: '🤝 P2P (Peer to Peer)', value: 'P2P' },
    { label: '🌍 Community Driven', value: 'Community' },
    { label: '🏛️ Protocol/Infrastructure', value: 'Protocol' }
  ]

  const audienceOptions: SelectOption[] = [
    { label: '🌐 General Crypto Users', value: 'general' },
    { label: '🔧 DeFi Power Users', value: 'defi-natives' },
    { label: '🎨 NFT Collectors/Creators', value: 'nft-enthusiasts' },
    { label: '🏢 Institutional Investors', value: 'institutions' },
    { label: '🆕 Crypto Newcomers', value: 'newcomers' },
    { label: '🎮 Gaming Community', value: 'gamers' }
  ]

  const budgetOptions: SelectOption[] = [
    { label: '💰 Low ($50K - $200K)', value: 'low' },
    { label: '💰💰 Medium ($200K - $1M)', value: 'medium' },
    { label: '💰💰💰 High ($1M - $5M)', value: 'high' },
    { label: '💰💰💰💰 Enterprise ($5M+)', value: 'enterprise' }
  ]

  const timelineOptions: SelectOption[] = [
    { label: '⚡ Fast Track (3-6 months)', value: '3-6 months' },
    { label: '🎯 Standard (6-12 months)', value: '6-12 months' },
    { label: '🏗️ Extended (12-24 months)', value: '12-24 months' },
    { label: '🌱 Long-term (24+ months)', value: '24+ months' }
  ]

  const teamOptions: SelectOption[] = [
    { label: '👤 Solo/Freelance (1-2 people)', value: 'solo' },
    { label: '👥 Small Team (3-8 people)', value: 'small' },
    { label: '👥👥 Medium Team (8-20 people)', value: 'medium' },
    { label: '🏢 Large Team (20+ people)', value: 'large' }
  ]

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(''), 3000)
      return () => clearTimeout(timer)
    }
  }, [showToast])

  const showNotification = (message: string) => {
    setShowToast(message)
  }

  type DappType = 'DEX' | 'NFT Marketplace' | 'DAO' | 'Gaming DApp' | 'DeFi Protocol' | 'Social Network' | 'Infrastructure' | 'Analytics';

  type Config = {
    dappType: DappType;
    chain: string;
    model: string;
    targetAudience: string;
    budget: string;
    timeline: string;
    team: string;
  };

  const marketSizes: Record<DappType, { tam: string; sam: string; som: string }> = {
    'DEX': { tam: '$50B', sam: '$12B', som: '$120M' },
    'NFT Marketplace': { tam: '$15B', sam: '$4B', som: '$40M' },
    'DAO': { tam: '$8B', sam: '$2B', som: '$20M' },
    'Gaming DApp': { tam: '$25B', sam: '$6B', som: '$60M' },
    'DeFi Protocol': { tam: '$80B', sam: '$20B', som: '$200M' },
    'Social Network': { tam: '$12B', sam: '$3B', som: '$30M' },
    'Infrastructure': { tam: '$100B', sam: '$25B', som: '$250M' },
    'Analytics': { tam: '$5B', sam: '$1B', som: '$10M' }
  }

  const competitors: Record<DappType, string[]> = {
    'DEX': ['Uniswap (market leader)', 'SushiSwap (community-driven)', 'PancakeSwap (BSC focus)', 'Curve (stablecoin specialist)'],
    'NFT Marketplace': ['OpenSea (market leader)', 'LooksRare (token rewards)', 'Magic Eden (Solana focus)', 'Foundation (curated)'],
    'DAO': ['Aragon (comprehensive tooling)', 'DAOhaus (Moloch framework)', 'Snapshot (gasless voting)', 'Colony (reputation-based)'],
    'Gaming DApp': ['Axie Infinity (play-to-earn)', 'The Sandbox (metaverse)', 'Decentraland (virtual world)', 'Immutable X (NFT gaming)'],
    'DeFi Protocol': ['Aave (lending)', 'Compound (lending)', 'MakerDAO (stablecoin)', 'Yearn (yield farming)'],
    'Social Network': ['Lens Protocol (decentralized)', 'Farcaster (protocol)', 'Mirror (publishing)', 'Rally (creator tokens)'],
    'Infrastructure': ['The Graph', 'Chainlink', 'Infura', 'Alchemy'],
    'Analytics': ['Dune Analytics', 'Nansen', 'Token Terminal', 'Glassnode']
  }

  const generateEnhancedPlan = (config: Config) => {
    const currentMarket = marketSizes[config.dappType] || marketSizes['DEX']
    const currentCompetitors = competitors[config.dappType] || competitors['DEX']

    return `# ${config.dappType} Strategic Development Plan
## Comprehensive Analysis & Implementation Roadmap

### 📊 Executive Summary
This strategic analysis outlines the development of a next-generation ${config.dappType} on ${config.chain} using a ${config.model} business model. Targeting ${config.targetAudience} users with a ${config.budget} budget over a ${config.timeline} timeline using a ${config.team} team structure.

**Key Success Factors**: Superior UX, innovative tokenomics, strong community focus, and strategic differentiation in an increasingly competitive market.

---

## 🎯 Market Intelligence & Competitive Analysis

### Market Opportunity Assessment
- **Total Addressable Market (TAM)**: ${currentMarket.tam} globally
- **Serviceable Addressable Market (SAM)**: ${currentMarket.sam} on ${config.chain}
- **Serviceable Obtainable Market (SOM)**: ${currentMarket.som} realistic 3-year target
- **Market Growth Rate**: 45-65% YoY in ${config.dappType} vertical

### Competitive Landscape Analysis
**Major Competitors:**
${currentCompetitors.map((comp: string) => `- ${comp}`).join('\n')}

**Market Gaps & Opportunities:**
- Underserved ${config.targetAudience} segment
- Limited ${config.model} focused solutions on ${config.chain}
- Poor mobile/cross-chain UX in existing solutions
- High barriers to entry for ${config.targetAudience} users

### Differentiation Strategy
- **Unique Value Proposition**: Seamless ${config.model} experience with enhanced UX
- **Innovation Focus**: AI-powered features + Cross-chain interoperability
- **Community-First Approach**: Governance from day 1, transparent development

---

## 👥 User Research & Target Personas

### Primary Persona: The ${config.targetAudience} ${config.dappType} User
**Demographics & Psychographics:**
- Age: ${config.targetAudience === 'newcomers' ? '18-35' : '25-45'}
- Experience Level: ${config.targetAudience === 'defi-natives' ? 'Expert' : config.targetAudience === 'newcomers' ? 'Beginner' : 'Intermediate'}
- Primary Motivation: ${config.targetAudience === 'institutions' ? 'Risk-adjusted returns' : 'Maximize yields & participate in governance'}

**Key Pain Points:**
- High transaction fees and complex interfaces
- Limited educational resources and support
- Fragmented cross-chain experience
- Security concerns and lack of insurance

**Success Metrics:**
- User acquisition cost: $${config.budget === 'low' ? '25-75' : config.budget === 'medium' ? '50-150' : '100-300'}
- Monthly active users growth: 25-40%
- Average session duration: 15-25 minutes

---

## 💰 Tokenomics & Economic Design

### Token Utility Framework
**Primary Functions:**
- **Governance**: Protocol parameter voting, treasury allocation decisions
- **Utility**: Fee discounts (10-50%), premium features access
- **Incentives**: Liquidity mining rewards, referral bonuses
- **Staking**: Revenue sharing from protocol fees (5-15% APY)

### Revenue Model
**Primary Revenue Streams:**
${config.model === 'B2C' ? `
- Transaction fees: 0.25-0.3% per trade
- Premium subscriptions: $15-50/month
- NFT marketplace fees: 2.5% (if applicable)` : ''}
${config.model === 'B2B' ? `
- Enterprise licensing: $2K-15K/month
- API access: Usage-based pricing
- White-label solutions: $75K-750K setup` : ''}
${config.model === 'P2P' ? `
- Peer-to-peer fees: 0.1-0.5% per transaction
- Escrow services: 1-2% of transaction value
- Dispute resolution: $50-500 per case` : ''}

**Financial Projections:**
- Month 6: $${config.budget === 'low' ? '5K' : config.budget === 'medium' ? '15K' : '50K'}/month
- Month 12: $${config.budget === 'low' ? '25K' : config.budget === 'medium' ? '75K' : '250K'}/month
- Month 24: $${config.budget === 'low' ? '100K' : config.budget === 'medium' ? '300K' : '1M'}/month

---

## 🚀 Development Roadmap

### Phase 1: MVP Development (Months 1-${config.timeline.includes('3-6') ? '3' : config.timeline.includes('6-12') ? '4' : '6'})
**Core Features:**
- Essential ${config.dappType} functionality
- Wallet integration (MetaMask, WalletConnect)
- Basic UI/UX with mobile responsiveness
- Smart contract deployment & initial audits

### Phase 2: Market Launch (Months ${config.timeline.includes('3-6') ? '4-6' : config.timeline.includes('6-12') ? '5-8' : '7-12'})
**Enhanced Features:**
- Advanced ${config.dappType} capabilities
- Cross-chain bridge integration
- Analytics dashboard & reporting
- Community governance launch

### Phase 3: Scale & Innovation (Months ${config.timeline.includes('3-6') ? '7-12' : config.timeline.includes('6-12') ? '9-12' : '13-24'})
**Advanced Features:**
- AI-powered recommendations
- Mobile app launch
- Institutional-grade features
- Additional blockchain integrations

---

## 📈 Go-to-Market Strategy

### Launch Strategy
**Pre-Launch:**
- Invite-only beta testing
- Partnership announcements
- Content marketing & thought leadership
- Community building (Discord, Telegram, Twitter)

**Launch Phase:**
- Public beta with incentivized testing
- Liquidity mining campaign
- Influencer partnerships & PR
- Conference presentations

### Community Building
- **Discord Community**: 24/7 support, AMA sessions
- **Ambassador Program**: Community leaders with rewards
- **Educational Content**: Tutorials, documentation
- **Developer Relations**: Hackathons, grants

---

## ⚠️ Risk Assessment

### Technical Risks
- Smart contract vulnerabilities
- Scalability limitations
- Oracle failures

### Market Risks
- Intense competition
- Regulatory changes
- Market downturns

### Mitigation Strategies
- Multiple security audits
- Layer 2 scaling solutions
- Regulatory compliance framework
- Conservative financial planning

---

## 💵 Budget Breakdown

**${config.budget === 'low' ? 'Low Budget ($50K-$200K)' : config.budget === 'medium' ? 'Medium Budget ($200K-$1M)' : config.budget === 'high' ? 'High Budget ($1M-$5M)' : 'Enterprise Budget ($5M+)'}:**

- Team Costs: ${config.budget === 'low' ? '60%' : '55%'}
- Infrastructure: ${config.budget === 'low' ? '15%' : '10%'}
- Marketing: ${config.budget === 'low' ? '15%' : '20%'}
- Legal & Compliance: ${config.budget === 'low' ? '5%' : '10%'}
- Reserve Fund: 5%

---

## 📊 Success Metrics

### Key Performance Indicators
- **Total Value Locked (TVL)**: Primary success metric
- **Daily Active Users (DAU)**: User engagement
- **Revenue Growth**: Month-over-month increase
- **Community Growth**: Social engagement metrics

### Financial KPIs
- Customer Acquisition Cost: $${config.budget === 'low' ? '25-75' : config.budget === 'medium' ? '50-150' : '100-300'}
- Lifetime Value: $${config.budget === 'low' ? '200-600' : config.budget === 'medium' ? '500-1500' : '1000-5000'}
- Monthly Recurring Revenue: 20%+ growth

---

## 🎯 Next Steps

### Immediate Actions (Weeks 1-4)
1. Assemble core team
2. Establish legal framework
3. Finalize technical architecture
4. Conduct market validation
5. Prepare funding materials

### Short-term Milestones (Months 1-3)
1. MVP development
2. Community launch
3. Strategic partnerships
4. Security audits
5. Beta testing program

---

## 📋 Conclusion

This comprehensive plan provides a roadmap for building a successful ${config.dappType} on ${config.chain}. Success depends on:

1. **User Experience Focus**: Simple, secure, intuitive
2. **Community-First Development**: Transparent and inclusive
3. **Technical Excellence**: Secure and scalable architecture
4. **Strategic Partnerships**: Ecosystem integration
5. **Financial Sustainability**: Diversified revenue streams

**Success Probability**: ${config.budget === 'low' ? '65%' : config.budget === 'medium' ? '75%' : config.budget === 'high' ? '85%' : '90%'}

With proper execution and favorable market conditions, this project has significant potential for success in the Web3 ecosystem.`
  }

  const generate = async () => {
    setLoading(true)
    try {
      const requestBody = {
        dappType,
        chain,
        model,
        targetAudience,
        budget,
        timeline,
        teamSize: team,
        complexity: 'full' // Use full complexity for comprehensive analysis
      }

      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setOutput(data.output)
      showNotification('AI-powered strategic plan generated successfully!')
    } catch (err: any) {
      console.error('Generation failed:', err)
      setOutput(`Error: ${err.message}\n\nPlease check your environment variables and try again.`)
      showNotification('Generation failed. Please check console for details.')
    } finally {
      setLoading(false)
    }
  }

  const clearOutput = () => {
    setOutput('')
    showNotification('Output cleared')
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output)
    showNotification('Copied to clipboard!')
  }

  const exportPlan = () => {
    const blob = new Blob([output], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${dappType}-${chain}-strategic-plan.md`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    showNotification('Plan exported as markdown file!')
  }

  const handleAIPrompt = async () => {
    if (!aiPrompt.trim()) {
      showNotification('Please enter a prompt first!');
      return;
    }
    
    setLoading(true);
    try {
      // For now, we'll use a simple approach to parse the prompt
      // In the future, this could be enhanced with a dedicated AI parsing endpoint
      const prompt = aiPrompt.toLowerCase();
      
      // Simple keyword-based parsing
      if (prompt.includes('dex') || prompt.includes('exchange')) {
        setDappType('DEX');
      } else if (prompt.includes('nft') || prompt.includes('marketplace')) {
        setDappType('NFT Marketplace');
      } else if (prompt.includes('dao') || prompt.includes('governance')) {
        setDappType('DAO');
      } else if (prompt.includes('game') || prompt.includes('gaming')) {
        setDappType('Gaming DApp');
      } else if (prompt.includes('defi') || prompt.includes('lending') || prompt.includes('yield')) {
        setDappType('DeFi Protocol');
      }
      
      if (prompt.includes('ethereum')) {
        setChain('Ethereum');
      } else if (prompt.includes('polygon')) {
        setChain('Polygon');
      } else if (prompt.includes('solana')) {
        setChain('Solana');
      } else if (prompt.includes('arbitrum')) {
        setChain('Arbitrum');
      }
      
      if (prompt.includes('b2b') || prompt.includes('business')) {
        setModel('B2B');
      } else if (prompt.includes('p2p') || prompt.includes('peer')) {
        setModel('P2P');
      } else if (prompt.includes('community')) {
        setModel('Community');
      }
      
      showNotification('Form filled based on your prompt!');
    } catch (err) {
      console.error('AI prompt parsing failed:', err);
      showNotification('Failed to parse prompt. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${dark ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-slate-900 dark:to-black">
        {/* Toast Notification */}
        {showToast && (
          <div className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl px-6 py-4 transform transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">{showToast}</p>
            </div>
          </div>
        )}

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <div className="flex justify-between items-center w-full mb-6">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-2xl flex items-center justify-center text-3xl shadow-2xl">
                      🧠
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center text-xs">
                      ✨
                    </div>
                  </div>
                  <div className="text-left">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                      DApp Strategic Planner
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                      AI-powered Web3 development strategy & planning platform
                    </p>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-md font-medium">
                        Strategic Analysis
                      </span>
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs rounded-md font-medium">
                        Market Intelligence
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">🌞</span>
                    <button
                      onClick={() => setDark(!dark)}
                      className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                        dark ? 'bg-indigo-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-lg ${
                          dark ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                    <span className="text-sm text-gray-600 dark:text-gray-400">🌙</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* Configuration Panel */}
              <div className="xl:col-span-1">
                <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-8">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      Project Configuration
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Configure your DApp strategy parameters
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* AI Prompt */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        AI Prompt
                      </label>
                      <textarea
                        value={aiPrompt}
                        onChange={(e) => setAiPrompt(e.target.value)}
                        placeholder="Describe your DApp idea or requirements in natural language..."
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 resize-none"
                      />
                      <button
                        onClick={handleAIPrompt}
                        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition duration-300"
                        disabled={loading}
                      >
                        {loading ? "Processing..." : "AI Fill Form"}
                      </button>
                    </div>

                    {/* DApp Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        DApp Type
                      </label>
                      <select
                        value={dappType}
                        onChange={(e) => setDappType(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      >
                        {dappOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Blockchain */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Blockchain
                      </label>
                      <select
                        value={chain}
                        onChange={(e) => setChain(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      >
                        {chainOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Business Model */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Business Model
                      </label>
                      <select
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      >
                        {modelOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Target Audience */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Target Audience
                      </label>
                      <select
                        value={targetAudience}
                        onChange={(e) => setTargetAudience(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      >
                        {audienceOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Budget Range
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      >
                        {budgetOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Development Timeline
                      </label>
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      >
                        {timelineOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Team Size */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Team Size
                      </label>
                      <select
                        value={team}
                        onChange={(e) => setTeam(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      >
                        {teamOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Custom Prompt */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Additional Requirements (Optional)
                      </label>
                      <textarea
                        value={customPrompt}
                        onChange={(e) => setCustomPrompt(e.target.value)}
                        placeholder="Add any specific requirements or context..."
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 resize-none"
                      />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3 pt-4">
                      <button
                        onClick={generate}
                        disabled={loading}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 disabled:opacity-50"
                      >
                        {loading ? 'Generating...' : 'Generate Strategic Plan'}
                      </button>

                      <button
                        onClick={clearOutput}
                        className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold py-3 px-6 rounded-lg shadow transition duration-300"
                      >
                        Clear Output
                      </button>

                      <button
                        onClick={copyToClipboard}
                        disabled={!output}
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow transition duration-300 disabled:opacity-50"
                      >
                        Copy to Clipboard
                      </button>

                      <button
                        onClick={exportPlan}
                        disabled={!output}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow transition duration-300 disabled:opacity-50"
                      >
                        Export as Markdown
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Output Panel */}
              <div className="xl:col-span-2">
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-2xl p-8 overflow-auto max-h-[calc(100vh-180px)] whitespace-pre-wrap">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Generated Strategic Plan</h2>
                  {output ? (
                    <pre className="text-sm text-gray-800 dark:text-gray-100">{output}</pre>
                  ) : (
                    <p className="text-gray-500 dark:text-gray-400">No plan generated yet. Select parameters and click "Generate Strategic Plan".</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 

      <section className="bg-gray-950 text-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why Builders Love It</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">🚀 Validate Ideas Fast</h3>
            <p className="text-gray-400">Turn a one-liner into a full roadmap and tech stack. Ideal for hackathons or startups.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🛠 Align Your Team</h3>
            <p className="text-gray-400">Clearly define team roles, scope, and milestones. No more vague plans.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">📄 Pitch-Ready Output</h3>
            <p className="text-gray-400">Use the markdown output for grant apps, pitch decks, or GitHub readmes.</p>
          </div>
        </div>
      </section>

      <section className="bg-indigo-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Generate Your DApp Plan Today</h2>
        <p className="text-lg mb-6">Export to PDF, copy to Notion, or share with your team in one click.</p>
        <button className="bg-white text-indigo-700 px-6 py-3 font-semibold rounded-xl shadow-lg hover:bg-gray-100">
          Get Started Now →
        </button>
      </section>
    </div>
  )
}