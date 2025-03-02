// ==================== Common Components ====================
export default {
  common: {
    learnMore: 'Learn More',
    viewAll: 'View All',
    back: 'Back',
    close: 'Close',
    confirm: 'Confirm',
    cancel: 'Cancel',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    retry: 'Retry'
  },

  theme: {
    light: 'Light Mode',
    dark: 'Dark Mode'
  },

  // ==================== Navigation ====================
  nav: {
    home: 'Home',
    tech: 'Tech',
    satnet: 'SatsNet',
    eco: 'Eco',
    roadmap: 'Roadmap',
    docs: 'Docs'
  },

  // ==================== Roles ====================
  roles: {
    explorer: 'Explorer',
    developer: 'Developer',
    user: 'User'
  },

  // ==================== Menu Categories ====================
  menu: {
    navigation: 'Navigation',
    roles: 'Roles',
    settings: 'Settings',
    theme: 'Theme',
    language: 'Language',
    documentation: 'Docs'
  },

  // ==================== Footer ====================
  footer: {
    info: 'Welcome to SAT20Labs, building a decentralized future together',
    product: 'Product',
    developers: 'Developers',
    services: 'Services',
    home: 'Home',
    tech: 'Technology',
    satnet: 'SatoshiNet',
    community: 'Community',
    whitepaper: 'Whitepaper',
    docs: 'Documentation',
    api: 'API',
    github: 'GitHub',
    market: 'Market',
    explorer: 'Explorer',
    eco: 'Ecosystem',
    links: [
      { link1: '' },
      { link2: '' },
      { link3: '' }
    ]
  },

  // ==================== Homepage ====================
  home: {
    hero: {//Hero Component
      mainTitle: 'One Satoshi, One World',
      subTitle: 'BTC Native Asset Issuance and Circulation',
      features: [
        {
          text: 'No splitting, ',
          accent: '100% Non-custodial!'
        },
        {
          text: 'Our ',
          accent: '"Partial Order Book"',
          suffix: ' allows users to place orders of any amount freely.'
        },
        {
          text: 'No more complex splitting, just ',
          accent: 'trade anytime.'
        }
      ],
      description: 'SAT20Labs provides asset issuance and circulation infrastructure for the Bitcoin ecosystem. The core technology consists of the SAT20 protocol and innovative SatoshiNet. SatoshiNet is based on Lightning channels and Bitcoin parallel networks, supporting multiple protocol assets such as Ordinals, Runes, OrdX, and BRC20, offering ultra-low fees and second-level confirmation through the network.\n\nThrough the SAT20 protocol, users can easily issue and circulate BTC native assets, enjoying seamless compatibility and instant trading experience.',
      downloadWhitepaper: 'Download Whitepaper',
      tryTestnet: 'Try Testnet'
    },
    features: {//Core Features Component
      title: 'Core Features',
      items: [
        {
          title: 'Satoshi-based Assets',
          description: 'Assets bound to satoshis, non-destructible and freely flowing'
        },
        {
          title: 'Native Layer 2 Network',
          description: 'Based on Lightning channels + BTC parallel network SatoshiNet'
        },
        {
          title: 'Full Asset Compatibility',
          description: 'Support for Ordinals, OrdX, Runes, BRC20 and other protocols'
        },
        {
          title: 'Smart Contract Support',
          description: 'Templated contracts and Turing-complete scripts (OP_CAT)'
        },
        {
          title: 'Ultra-low Fees',
          description: '10 sats/transaction, second-level confirmation'
        }
      ]
    },
    satoshinet: {//SatoshiNet Component
      title: "SatoshiNet",
      subtitle: "Next Generation Blockchain Infrastructure",
      description: "The underlying network infrastructure of SAT20",
      architecture: {
        title: "Technical Architecture",
        description: "SatoshiNet adopts an innovative multi-layer architecture design",
        feature1: "Native Bitcoin Network Integration",
        feature2: "Lightning Network Layer 2 Extension",
        feature3: "Secure Multi-Asset Support",
        feature4: "Decentralized Infrastructure",
        layers: {
          title: "Network Layers",
          items: [
            {
              name: "Consensus Layer",
              description: "Based on Bitcoin network, inheriting its security"
            },
            {
              name: "Network Layer",
              description: "P2P network communication and data synchronization"
            },
            {
              name: "Protocol Layer",
              description: "Asset issuance and transaction rules"
            },
            {
              name: "Application Layer",
              description: "DApp development interfaces and tools"
            }
          ]
        }
      },
      compatibility: {
        title: "Supported Protocols",
        protocols: [
          "Ordinals",
          "BRC20",
          "Runes",
          "OrdX"
        ]
      },
      assetTypes: {
        title: "Supported Asset Types",
        types: {
          ft: {
            title: 'Fungible Token',
            description: 'Interchangeable assets',
            imgurl: '/images/assetstype/ft.png'
          },
          nft: {
            title: 'Non-Fungible Token',
            description: 'Unique digital assets',
            imgurl: '/images/assetstype/nft.png'
          },
          sft: {
            title: 'Semi-Fungible Token',
            description: 'Batch assets',
            imgurl: '/images/assetstype/sft.png'
          },
          did: {
            title: 'Decentralized Identity',
            description: 'Decentralized identity system',
            imgurl: '/images/assetstype/did.png'
          }
        }
      }
    },
    ecosystem: {//Ecosystem Component
      title: 'Ecosystem',
      applications: {
        title: 'Applications',
        items: [
          {
            title: 'DeFi Applications',
            description: 'Decentralized financial services including lending, trading, and staking'
          },
          {
            title: 'NFT Marketplace',
            description: 'Platform for issuing and trading digital art and collectibles'
          },
          {
            title: 'Dapps & GameFi',
            description: 'Blockchain-based applications, games, and metaverse'
          }
        ]
      },
      partners: {//Partners Component
        title: 'Partners',
        items: [
          {
            title: 'Application Developers',
            description: 'Developer grants program and hackathons'
          },
          {
            title: 'Infrastructure',
            description: 'Indexer and node service providers'
          },
          {
            title: 'Strategic Partners',
            description: 'Ecosystem app integration and wallet integration'
          }
        ]
      }
    },
    developers: {//Developer Center Component
      title: 'Developer Center',
      subtitle: 'Build Next-gen Blockchain Applications',
      description: 'Use SAT20 protocol to develop innovative applications',
      buttons: {
        startDev: 'Start Development',
        viewDocs: 'View Documentation'
      }
    },
    partners: {//Partners Component
      title: 'Partners',
      description: 'Building the Bitcoin ecosystem together with industry-leading enterprises and organizations',
      items: [],
      sat20market: 'Leading Bitcoin native asset trading platform',
      btcname: 'Decentralized Bitcoin domain name service',
      morego: 'Innovative SocialFi and GameFi applications',
      unisat: 'Popular Bitcoin wallet and inscription platform',
      okx: 'Global leading digital asset exchange',
      magiceden: 'Leading NFT marketplace and ecosystem'
    }
  },

  // ==================== Technology Page ====================
  technology: {
    title: 'Technical Architecture',
    subtitle: 'Explore SAT20\'s Innovative Blockchain Technology',
    description: 'The SAT20 protocol uses the most advanced blockchain technology to build an efficient, secure, cost-effective, and intelligent management system for the issuance and circulation of Bitcoin-native assets, providing revolutionary opportunities for the innovative development of the Bitcoin ecosystem.',
    hero: {
      title: 'Innovative Technical Architecture',
      subtitle: 'Explore SAT20\'s Technical Innovations'
    },
    architecture: {
      title: 'Technical Architecture',
      base: {
        title: 'BTC Mainnet',
        desc: 'Asset issuance base layer, compatible with mainstream protocols, such as Ordinals、Runes、Brc20、OrdX...'
      },
      protocol: {
        title: 'Lightning Channel',
        desc: 'Dynamic Lightning Channel technology, compatible with various BTC Layer 1 assets on the main and Satoshi networks'
      },
      application: {
        title: 'SatoshiNet',
        desc: 'Dynamic Lightning Channel technology, compatible with various BTC Layer 1 assets on the main and Satoshi networks'
      }
    },
    comparison: {
      title: 'Technical Advancement Features',
      headings: [
        'Dimension',
        'Traditional',
        'SAT20 Innovation',
        'Effect'
      ],
      dimensions: {
        asset: 'Asset Granularity',
        contract: 'Contract Capability',
        speed: 'Transaction Speed',
        cost: 'Cross-chain Cost',
        dev: 'Development Barrier'
      },
      traditional: {
        asset: 'UTXO Unit',
        contract: 'Non-Turing Complete',
        speed: '10-minute Confirmation',
        cost: 'Bridge Fee 0.5%+',
        dev: 'Custom Sidechain Required'
      },
      innovation: {
        asset: 'Satoshi-level Precision',
        contract: 'OP_CAT Enhanced Turing Complete',
        speed: 'Lightning Channel Second-level',
        cost: 'Zero Fee Atomic Swap',
        dev: 'Native Mainnet Compatible'
      },
      improvement: {
        asset: '100M Times More Granular than BTC',
        contract: 'Support Complex Financial Contracts',
        speed: '600x Acceleration',
        cost: 'Zero Cost',
        dev: '90% Development Cost Reduction'
      }
    },
    innovation: {
      title: 'Core Innovation Value',
      items: [
        {
          title: 'Satoshi-based System',
          features: [
            'Each satoshi independently programmable',
            'Assets permanently bound to satoshis',
            'UTXO native extension'
          ]
        },
        {
          title: 'Enhanced Lightning Network',
          features: [
            'Dynamic channel capacity adjustment',
            'Compatible with Layer 1 native assets',
            'Secure bridge-less cross-chain transfers'
          ]
        },
        {
          title: 'SatoshiNet Smart Evolution',
          features: [
            'Templated smart contracts',
            'OP_CAT instruction set extension',
            'SVM (Satoshi Virtual Machine) support'
          ]
        }
      ]
    },
    pillars: {
      title: 'Four Technical Pillars',
      items: [
        {
          title: 'Satoshi Asset Management Engine (OrdX)',
          innovation: 'Innovation: Satoshi-level precision asset issuance and management, multiple asset types for different scenarios',
          features: [
            'Ordinals-based numbering system with precise satoshi positioning and tracking technology',
            'Flexible support for "one-sat-one-token" and "one-sat-multi-token" asset issuance',
            'Professional rare satoshi mining and management, enhancing asset scarcity and value'
          ]
        },
        {
          title: 'Satoshi Transfer Protocol (STP)',
          innovation: 'Innovation: Avoiding security risks of traditional cross-chain bridges, improving transaction reliability and transparency',
          features: [
            'Dynamic Channels: Implementing dynamic channel capacity adjustment through Splicing technology',
            'Bridge-less Cross-chain: Native Lightning Channel technology, avoiding security risks of cross-chain bridges',
            'Secure Contracts: Automated asset locking and release based on RSMC contracts, reducing risks'
          ]
        },
        {
          title: 'Super UTXO - Multi-protocol Asset Compatibility',
          innovation: 'Innovation: Unified framework integrating assets from different protocols, seamless cross-protocol asset exchange',
          features: [
            'Support for multiple protocol assets including Ordinals, BRC20, Runes, OrdX',
            'SatoshiNet Super UTXO architecture enhances asset compatibility and management efficiency, reducing transaction costs',
            'Support for cross-protocol interoperability, reducing asset exchange and circulation difficulties'
          ]
        },
        {
          title: 'Asset Exchange Engine - SATSWAP',
          innovation: 'Innovation: Enabling real-time asset exchange, reducing transaction delays and fees',
          features: [
            'SATSWAP provides decentralized, low-cost asset exchange and circulation',
            'Trading engine supports high-frequency trading and liquidity pools, solving liquidity challenges',
            'DeFi capabilities enable asset lending, liquidity provision, and yield optimization'
          ]
        }
      ]
    },
    roadmap: {
      title: 'Technical Development Roadmap',
      phases: [
        {
          time: '2024 Q1',
          desc: 'Complete OrdX issuance protocol development and mainnet deployment'
        },
        {
          time: '2024 Q3',
          desc: 'Complete STP core development and testnet deployment'
        },
        {
          time: '2024 Q4',
          desc: 'Complete SatoshiNet node setup, deployment, and assets cross and transfer between Bitcoin Mainnet and SatoshiNet'
        },
        {
          time: '2025 Q1',
          desc: 'Complete lightning channel pool management function, wallet, Dex major development work'
        },
        {
          time: '2025 Q2',
          desc: 'SatoshiNet mainnet launch, full Dex online'
        }
      ]
    }
  },

  // ==================== SatoshiNet Page ====================
  satoshinet: {
    title: "SatoshiNet",
    subtitle: "SatoshiNet is an evolved version of the Lightning Network, based on extended Lightning channel technology and Bitcoin's core code, building a native second-layer network. It enables bridge-less cross-chain, instant confirmations, and low-cost transactions. It has revolutionized the scalability and application scenarios of the Bitcoin ecosystem, driving innovation and development across the entire ecosystem.",
    architecture: {
      title: "Technical Architecture",
      feature1: "Based on Bitcoin Network",
      feature2: "Lightning Network Extension",
      feature3: "Secure Encryption Mechanism",
      feature4: "Privacy Protection Solution"
    },
    compatibility: {
      title: "Compatible Protocols"
    },
    assetTypes: {
      title: 'Asset Types',
      description: 'SatoshiNet supports multiple types of assets to meet different scenario requirements',
      types: {
        ft: {
          title: 'Fungible Token',
          description: 'Fungible tokens, interchangeable assets'
        },
        nft: {
          title: 'Non-Fungible Token',
          description: 'Non-fungible tokens, unique assets'
        },
        sft: {
          title: 'Semi-Fungible Token',
          description: 'Semi-fungible tokens, batch assets'
        },
        did: {
          title: 'Decentralized Identity',
          description: 'Decentralized identity system'
        }
      }
    },
    advantages: {
      title: "Core Advantages",
      items: [
        {
          title: "High Performance Scaling",
          desc: "Support high-concurrency transactions based on state channel technology"
        },
        {
          title: "Asset Compatibility",
          desc: "Fully compatible with various Bitcoin Layer 1 asset protocols"
        },
        {
          title: "Security and Reliability",
          desc: "Inherits Bitcoin network's security and decentralization features"
        }
      ]
    },
    economy: {
      title: "Economic Model",
      models: [
        {
          percent: "70%",
          label: "Ecosystem Incentives",
          desc: "For ecosystem development and developer incentives"
        },
        {
          percent: "20%",
          label: "Node Operations",
          desc: "For maintaining network infrastructure"
        },
        {
          percent: "10%",
          label: "Community Governance",
          desc: "For community development and governance"
        }
      ]
    },
    ecosystem: {
      title: "Ecosystem Development",
      phases: [
        {
          title: "Infrastructure",
          items: [
            "Mainnet Launch",
            "Core Protocol Enhancement",
            "Basic Tool Development"
          ]
        },
        {
          title: "Ecosystem Expansion",
          items: [
            "DApp Ecosystem Building",
            "Multi-protocol and Multi-asset Interoperability",
            "Developer Community Building"
          ]
        },
        {
          title: "Application Implementation",
          items: [
            "Large-scale Commercial Applications",
            "Ecosystem Refinement",
            "Global Expansion"
          ]
        }
      ]
    },
  },

  // ==================== Tokenomics Page ====================
  tokenomics: {
    title: 'SAT20 Ecosystem',
    description: 'SAT20 ecosystem consists of multiple collaborative components that together create a complete decentralized financial ecosystem:\n\n' +
      '1. ORDX Protocol: Core trading protocol supporting satoshi-level asset issuance and trading.\n\n' +
      '2. STP Protocol: Liquidity protocol enabling seamless cross-chain asset transfer.\n\n' +
      '3. Developer Tools: Complete SDK and API support to help developers quickly integrate.\n\n' +
      '4. Community Governance: Community-driven decision making through DAO mechanisms.',
    hero: {
      title: 'Join the SatoshiNet ecosystem and build the blockchain future together',
      subtitle: 'SatoshiNet life consists of multiple collaborative components that together create a complete decentralized financial system. We invite you to join the life and explore the unlimited possibilities of blockchain technology.'
    },
    assetIssuance: {
      title: 'Asset Issuance',
      description: 'Create and issue your SFT assets through the SAT20 protocol, ushering in a new era of blockchain assets.',
      features: [
        'SAT20 Protocol: "Satoshi-based" asset issuance standard',
        'Diverse issuance models: Project-led, partial control, fair launch',
        'Complete issuance process: from deployment to issuance',
        'Secure and reliable: Multiple security mechanisms to ensure asset security'
      ]
    },
    trading: {
      title: 'Trading',
      description: 'Use the STP (Satoshi Throughput Protocol) to seamlessly transfer assets to the SatoshiNet ecosystem, experience seamless trading.',
      features: [
        'STP Protocol: High-efficiency asset circulation solution',
        'Simple operation: Easy wallet connection and transaction confirmation',
        'Full asset circulation: Implementing various asset circulation protocols',
        'Real-time market: Accurate market data and transaction information'
      ]
    },
    community: {
      title: 'Community Participation',
      description: 'Join the SatoshiNet community and participate in governance, together building a sustainable ecosystem.',
      features: [
        'Governance voting: Participate in important decision-making through community voting',
        'Community activities: Rich online and offline community engagement',
        'Contribution incentives: Comprehensive community contribution rewards system',
        'Resource sharing: Access to latest project news and research findings'
      ]
    },
    developer: {
      title: 'Developer Support',
      description: 'Provide comprehensive tools and resources for developers, supporting innovative application development.',
      features: [
        'Technology Documentation: Detailed API documentation and development guides',
        'Development Tools: Powerful SDK and development kits',
        'Example Projects: Rich reference examples and best practices',
        'Technical Support: Professional support services for developers'
      ]
    },
    sidebar: {
      announcements: 'Announcements',
      announcementList: [
        { title: 'SAT20 Protocol V2.0 Release', link: '/news/sat20-v2' },
        { title: 'Eco Fund Launch', link: '/news/eco-fund' },
        { title: 'Bridge and DEX Launch', link: '/news/bridge-launch' }
      ],
      resources: 'Resources',
      resourceList: [
        { title: 'SAT20 Whitepaper', link: '/docs/whitepaper' },
        { title: 'Developer Kit', link: '/docs/devkit' },
        { title: 'Roadmap', link: '/docs/roadmap' }
      ]
    },
    newsletter: {
      title: 'Subscribe to Updates',
      description: 'Subscribe to our newsletter to stay updated with the latest news and important updates.',
      placeholder: 'Enter your email address',
      subscribe: 'Subscribe'
    },
    ecosystem: {
      title: 'Ecosystem',
      applications: {
        title: 'Application Scenarios',
        items: [
          {
            title: 'DeFi Application',
            description: 'Decentralized Finance, including lending and borrowing, trading, staking, and other financial services'
          },
          {
            title: 'NFT Market',
            description: 'Digital art, collectibles, and non-fungible tokens (NFTs) market'
          },
          {
            title: 'Blockchain Game',
            description: 'Games based on blockchain technology'
          }
        ]
      }
    }
  },

  // ==================== Roadmap Page ====================
  roadmap: {
    title: 'Technology Roadmap',
    subtitle: 'SAT20 Technology Roadmap',
    status: {
      completed: 'Completed',
      inProgress: 'In Progress',
      upcoming: 'Upcoming'
    },
    years: {
      2024: '2024',
      2025: '2025',
      future: 'Future'
    },
    phases: {
      phase1: {
        date: '2024 Q2',
        title: 'ORDX Protocol Development Completed',
        items: [
          'ORDX Protocol Standard Draft',
          'Core Function Development',
          'Test Net Deployment Verification',
          'ORDX Protocol Online Main Net'
        ]
      },
      phase2: {
        date: '2024 Q4',
        title: 'Step-by-Step Open Source',
        items: [
          'Index Module Open Source',
          'Wallet Module Open Source',
          'Developer Documentation Release',
          'Community Contribution Guide'
        ]
      },
      phase3: {
        date: '2025 Q1',
        title: 'STP Protocol Launch',
        items: [
          'STP Protocol Launch',
          'Dynamic Channel Capacity Adjustment',
          'Flow Pool Protocol Integration',
          'Multi-chain Interoperability'
        ]
      },
      phase4: {
        date: '2025 Q2',
        title: 'SatoshiNet MainNet Launch',
        items: [
          'SatoshiNet Main Net Launch',
          'SatSwap/DEX Launch',
          'Ecosystem Deployment',
          'Community Governance Start'
        ]
      },
      future: {
        date: 'Future',
        title: 'Vision',
        items: [
          'Support more protocols and asset types',
          'Build DeIP (Decentralized Knowledge Property Network)',
          'Expand SatoshiNet ecosystem',
          'Build a global developer community'
        ]
      }
    }
  },

  // ==================== Investor Page ====================
  investor: {
    title: 'Investor Center',
    subtitle: 'Understand SAT20\'s Investment Value and Mechanisms',
    tokenUsage: {
      title: 'Token Usage Scenarios',
      pearl: 'Pearl is the native token of the SAT20 ecosystem, used for transaction fees, ecosystem governance, and revenue sharing.'
    },
    transactionFee: {
      title: 'Transaction Fees',
      current: 'Currently each transaction only requires 10 satoshis, and will be further reduced to 1 satoshi in the future.'
    },
    revenue: {
      title: 'Revenue Distribution',
      mining: {
        title: 'Mining Revenue',
        description: 'Earn mining rewards by participating in network maintenance',
        phase1: 'Phase 1: Daily output of 1 million tokens',
        phase2: 'Phase 2: Daily output of 500,000 tokens',
        phase3: 'Phase 3: Daily output of 250,000 tokens'
      },
      staking: {
        title: 'Staking Revenue',
        description: 'Earn network fee share by staking Pearl',
        apy: 'Target APY: 15-30%',
        lockPeriod: 'Lock Period: 7-90 days'
      },
      liquidity: {
        title: 'Liquidity Revenue',
        description: 'Earn revenue by providing liquidity for trading pairs',
        share: 'Fee Share: 70%',
        bonus: 'Additional Pearl Rewards'
      },
      foundation: {
        title: 'Foundation Distribution',
        description: 'The foundation will invest $10 million in ecosystem development',
        early: 'Early Stage',
        growth: 'Growth Stage'
      }
    },
    adjustment: {
      title: 'Dynamic Adjustment Mechanism',
      network: {
        title: 'Network Parameter Adjustment',
        description: 'Dynamically adjust fees and block parameters based on network load'
      },
      staking: {
        title: 'Staking Mechanism Adjustment',
        description: 'Dynamically adjust yield rates and lock periods based on total staking amount'
      }
    },
    foundation: {
      title: 'Foundation Plan',
      description: 'The foundation will invest $10 million in ecosystem development',
      allocation: [
        {
          title: 'Developer Incentives',
          percent: '40%',
          description: 'Support developers in building DApps'
        },
        {
          title: 'Marketing',
          percent: '30%',
          description: 'Brand building and market expansion'
        },
        {
          title: 'Community Building',
          percent: '20%',
          description: 'Community activities and operations'
        },
        {
          title: 'Security Reserve',
          percent: '10%',
          description: 'For handling emergencies'
        }
      ]
    }
  },

  // ==================== 开发者页面 ====================
  developers: {
    title: 'Developer Center',
    subtitle: 'Build Next-gen Blockchain Applications',
    description: 'Use SAT20 protocol to develop innovative applications',    

    quickLinks: {
      title: 'Quick Links',
      items: [
        {
          title: 'Developer Documentation',
          description: 'Detailed API documentation and development guides',
          url: '/docs/api-reference',
          icon: 'book',
          submenu: [
            {
              title: 'Basic Information',
              url: '/docs/api#basic-info'
            },
            {
              title: 'Authentication and Security',
              url: '/docs/api#authentication'
            },
            {
              title: 'Address API',
              url: '/docs/api#address-api',
              submenu: [
                {
                  title: 'Get UTXO Asset Details',
                  url: '/docs/api#endpoint-assets'
                },
                {
                  title: 'Get Address Minting History',
                  url: '/docs/api#endpoint-history'
                },
                {
                  title: 'Get Address Balance Summary',
                  url: '/docs/api#endpoint-summary'
                },
                {
                  title: 'Get Address UTXO List',
                  url: '/docs/api#endpoint-utxolist'
                }
              ]
            },
            {
              title: 'Blockchain API',
              url: '/docs/api#blockchain-api',
              submenu: [
                {
                  title: 'Get Current Block Height',
                  url: '/docs/api#endpoint-bestheight'
                },
                {
                  title: 'Get Block Hash',
                  url: '/docs/api#endpoint-blockhash'
                },
                {
                  title: 'Get Raw Block Data',
                  url: '/docs/api#endpoint-block'
                },
                {
                  title: 'Send Raw Transaction',
                  url: '/docs/api#endpoint-sendtx'
                },
                {
                  title: 'Get Transaction Details',
                  url: '/docs/api#endpoint-tx'
                }
              ]
            },
            {
              title: 'Error Handling',
              url: '/docs/api#error-handling'
            },
            {
              title: 'Best Practices',
              url: '/docs/api#best-practices'
            }
          ]
        },
        {
          title: 'GitHub',
          description: 'View the source code',
          url: 'https://github.com/sat20labs',
          icon: 'github'
        },
        {
          title: 'Developer Community',
          description: 'Join discussion and get support',
          url: '#',
          icon: 'users'
        }
      ]
    },

    documentation: {
      title: 'Technical Documentation',
      categories: [
        {
          title: 'Getting Started',
          description: 'Quick start guide for SAT20 development',
          icon: 'rocket',
          url: '/docs/getting-started'
        },
        {
          title: 'API Reference',
          description: 'Detailed API documentation',
          icon: 'code',
          url: '/docs/api-reference'
        },
        {
          title: 'Best Practices',
          description: 'Development guidelines and examples',
          icon: 'star',
          url: '/docs/best-practices'
        },
        {
          title: 'Tutorials',
          description: 'Deep dive tutorials',
          icon: 'graduation-cap',
          url: '/docs/tutorials'
        }
      ]
    },

    tools: {
      title: 'Tools',
      description: 'Provide developers with necessary tools and resources',
      items: [
        {
          title: 'SAT20 Indexer',
          description: 'High-performance blockchain data indexing and querying tool',
          icon: 'indexer',
          url: '/docs/indexer'
        },
        {
          title: 'SDK',
          description: 'Full-featured development tools',
          icon: 'code',
          url: '/docs/sdk'
        },
        {
          title: 'CLI Tools',
          description: 'Command-line development tools',
          icon: 'terminal',
          url: '/docs/cli'
        },
        {
          title: 'Contract Templates',
          description: 'Smart contract development templates',
          icon: 'contract',
          url: '/docs/contract-templates'
        }
      ]
    },

    updates: {
      title: 'Latest Updates',
      items: [
        {
          title: 'SDK v1.2.0 Release',
          description: 'Added smart contract support, improved performance and stability',
          date: '2024-02-20',
          icon: 'code'
        },
        {
          title: 'Developer Documentation Update',
          description: 'Added API references and best practice guides',
          date: '2024-02-15',
          icon: 'book'
        },
        {
          title: 'Testnet Upgrade',
          description: 'Support for new transaction types and smart contract features',
          date: '2024-02-10',
          icon: 'server'
        }
      ]
    },

    community: {
      title: 'Community',
      channels: [
        {
          title: 'Discord',
          description: 'Join our developer chat',
          icon: 'discord',
          url: '#'
        },
        {
          title: 'GitHub',
          description: 'Contribute to our open source code',
          icon: 'github',
          url: 'https://github.com/sat20labs'
        },
        {
          title: 'Forum',
          description: 'Discuss technical topics',
          icon: 'forum',
          url: '#'
        }
      ]
    }
  },

  // ==================== User Center ====================
  user: {
    title: 'User Center',
    subtitle: 'Manage Your Assets and Account',
    description: 'Use SAT20 for asset issuance, trading, and management, experience the next generation blockchain asset ecosystem.',
    sections: {
      minting: {
        title: 'Asset Issuance',
        description: 'Learn how to issue and manage your assets on SAT20',
        tutorials: [
          {
            title: 'Create Wallet',
            description: 'Set up your SAT20 wallet',
            icon: 'wallet',
            items: [
              'Download and install wallet',
              'Create or import account',
              'Secure your mnemonic phrase'
            ]
          },
          {
            title: 'Issue Asset',
            description: 'Issue your first asset',
            icon: 'token',
            items: [
              'Choose asset type',
              'Set asset parameters',
              'Confirm and issue'
            ]
          },
          {
            title: 'Manage Assets',
            description: 'Manage your assets',
            icon: 'manage',
            items: [
              'View asset details',
              'Transfer and receive',
              'View transaction history'
            ]
          }
        ]
      },
      trading: {
        title: 'Trading Features',
        description: 'SATSWAP DEX coming soon',
        features: [
          {
            title: 'Order Book Trading',
            description: 'Place and manage orders',
            icon: 'trade'
          },
          {
            title: 'Liquidity Pools',
            description: 'Provide liquidity and earn fees',
            icon: 'pool'
          },
          {
            title: 'Asset Transcending',
            description: 'Assets transcending between the mainnet and SatoshiNet via lightning channels',
            icon: 'transcending'
          }
        ]
      },
      testing: {
        title: 'Testnet Experience',
        description: 'Try features on testnet',
        link: 'https://demo.ordx.market',
        features: [
          {
            title: 'Get Test Coins',
            description: 'Get test coins from faucet',
            icon: 'faucet'
          },
          {
            title: 'Issue Test Assets',
            description: 'Try asset issuance process',
            icon: 'test'
          },
          {
            title: 'Simulate Trading',
            description: 'Experience trading features',
            icon: 'tradeing'
          }
        ]
      }
    },
    wallet: {
      title: 'Wallet',
      balance: 'Balance',
      send: 'Send',
      receive: 'Receive',
      history: 'Transaction History',
      features: [
        {
          title: 'Asset Management',
          description: 'Manage all your digital assets'
        },
        {
          title: 'Transaction History',
          description: 'View all your transactions'
        },
        {
          title: 'Security Settings',
          description: 'Manage your security preferences'
        }
      ]
    },
    assets: {
      title: 'Assets',
      tokens: 'Tokens',
      nfts: 'NFTs',
      activity: 'Activity',
      management: {
        title: 'Asset Management',
        features: [
          {
            title: 'Portfolio Overview',
            description: 'View your asset portfolio'
          },
          {
            title: 'Transaction Management',
            description: 'Manage your transactions'
          },
          {
            title: 'Asset Analytics',
            description: 'Track your asset performance'
          }
        ]
      }
    },
    settings: {
      title: 'Settings',
      account: 'Account',
      security: 'Security',
      preferences: 'Preferences',
      options: [
        {
          title: 'Profile Settings',
          description: 'Manage your profile information'
        },
        {
          title: 'Security Settings',
          description: 'Configure security options'
        },
        {
          title: 'Notification Settings',
          description: 'Manage your notifications'
        }
      ]
    }
  },

  // ==================== Documentation Page ====================
  docs: {
    toc: "Table of Contents",
    lastUpdated: "Last Updated",
    categories: {
      whitepaper: 'Whitepaper',
      'getting-started': 'Getting Started',
      'api-reference': 'API Reference',
      contributing: 'Contributing Guide'
    },
    whitepaper: {
      title: 'SAT20 Whitepaper',
      content: `
# SAT20 Whitepaper
<a id="whitepaper-intro"></a>
## Introduction

SAT20 is a Bitcoin-native asset issuance and circulation protocol designed to provide a secure, scalable, and efficient asset management solution for the Bitcoin ecosystem.

<a id="whitepaper-features"></a>
## Core Features

*   Satoshi-based Assets: SAT20 supports satoshi-level asset issuance and management, enabling efficient circulation of Bitcoin native assets.
*   Native Layer 2 Network: SAT20 is built on Lightning Network and BTC parallel network, achieving high-performance and low-latency transaction processing.
*   Full Asset Compatibility: SAT20 supports various asset protocols, including Ordinals, OrdX, Runes, and BRC20.
*   Smart Contract Support: SAT20 supports templated smart contracts and Turing-complete scripts, enabling flexible asset management.

<a id="whitepaper-architecture"></a>
## Technical Architecture

SAT20's technical architecture includes the following layers:

*   Base Layer: Bitcoin network as the underlying infrastructure.
*   Protocol Layer: SAT20 core protocol and smart contracts.
*   Application Layer: Decentralized application ecosystem.

<a id="whitepaper-scenarios"></a>
## Application Scenarios

SAT20's application scenarios include:

*   DeFi Applications: Decentralized financial services, including lending, trading, and staking.
*   NFT Market: Digital art and collectibles issuance and trading platform.
*   Blockchain Games: Blockchain-based game assets and virtual worlds.

<a id="whitepaper-summary"></a>
## Summary

SAT20 is a Bitcoin-native asset issuance and circulation protocol that is secure, scalable, and efficient. It supports satoshi-level asset issuance and management, enabling efficient circulation of Bitcoin native assets. SAT20's technical architecture includes base layer, protocol layer, and application layer, supporting various asset protocols and smart contracts. Its application scenarios include DeFi applications, NFT markets, and blockchain games.
`
    },
    'getting-started': {
      title: 'Getting Started Guide',
      content: `
# Getting Started Guide

<a id="guide-install"></a>
## Installation

Install SAT20 development kit using npm:
<pre v-pre>
\`\`\`bash
npm install @sat20/sdk
\`\`\`
</pre>

<a id="guide-init"></a>
## Initialization

Create SAT20 client instance:
<pre v-pre>
\`\`\`javascript
import { SAT20Client } from '@sat20/sdk';

const client = new SAT20Client({
  network: 'mainnet',  // or 'testnet'
  apiKey: 'YOUR_API_KEY'
});
\`\`\`
</pre>
<a id="guide-basic"></a>
## Basic Usage

<a id="guide-issue"></a>
### Issue Asset
<pre v-pre>
\`\`\`javascript
const result = await client.issueAsset({
  name: 'MyToken',
  symbol: 'MTK',
  totalSupply: '1000000'
});
\`\`\`
</pre>
<a id="guide-transfer"></a>
### Transfer Asset

<pre v-pre>
\`\`\`javascript
await client.transfer({
  to: 'recipient_address',
  amount: '100',
  asset: 'MTK'
});
\`\`\`
</pre>
`
    },
    'api-reference': {
      title: 'API Reference',
      content: `
# SAT20 API Documentation

<a id="basic-info"></a>
## Basic Information

- **Base URL**: https://apiprd.sat20.org/mainnet
- **API Version**: v0.1.0
- **Protocol**: HTTPS
- **Data Format**: JSON
- **Character Encoding**: UTF-8

<a id="authentication"></a>
## Authentication and Security

All API requests require Bearer Token authentication in the Header:
<pre v-pre>
\`\`\`http
Authorization: Bearer YOUR_API_KEY
\`\`\`
</pre>

How to get API key:
1. Login to SAT20 Developer Platform
2. Visit API Key Management page
3. Create new API key
4. Keep your API key safe and do not share with others

Security recommendations:
- Rotate API keys regularly
- Store API keys in environment variables
- Prevent key exposure

<a id="address-api"></a>
## Address Related APIs
<a id="endpoint-assets"></a>
### Get UTXO Asset Details
- **Endpoint**: GET /address/assets/{utxo}
- **Description**: Get asset details in specified UTXO, including token amount, type, etc.
- **Parameters**: 
  - utxo: UTXO identifier (path parameter, required)
- **Response Example**:
<pre v-pre>
\`\`\`json
{
  "utxo": "txid:vout",
  "assets": [
    {
      "ticker": "SAT20",
      "amount": "100",
      "decimals": 8,
      "confirmed": true
    }
  ]
}
\`\`\`
</pre>
<a id="endpoint-history"></a>
### Get Address Minting History
- **Endpoint**: GET /address/history/{address}/{ticker}
- **Description**: Get minting history records for specified address, supports pagination
- **Parameters**:
  - address: Bitcoin address (path parameter, required)
  - ticker: Token symbol (path parameter, required)
  - page: Page number (query parameter, optional, default 1)
  - limit: Records per page (query parameter, optional, default 20)
- **Response Example**:
<pre v-pre>
\`\`\`json
{
  "total": 100,
  "page": 1,
  "limit": 20,
  "history": [
    {
      "txid": "...",
      "timestamp": "2024-02-22T14:30:00Z",
      "amount": "1000",
      "confirmations": 6
    }
  ]
}
\`\`\`
</pre>
<a id="endpoint-summary"></a>
### Get Address Balance Summary
- **Endpoint**: GET /address/summary/{address}
- **Description**: Get all token balance summary for specified address
- **Parameters**:
  - address: Bitcoin address (path parameter, required)
- **Response Example**:
<pre v-pre>
\`\`\`json
{
  "address": "bc1...",
  "balances": [
    {
      "ticker": "SAT20",
      "total_amount": "5000",
      "confirmed_amount": "4500",
      "pending_amount": "500"
    }
  ]
}
\`\`\`
</pre>
<a id="endpoint-utxolist"></a>
### Get Address UTXO List
- **Endpoint**: GET /address/utxolist/{address}/{ticker}
- **Description**: Get UTXO list for specified address and token, supports pagination and sorting
- **Parameters**:
  - address: Bitcoin address (path parameter, required)
  - ticker: Token symbol (path parameter, required)
  - sort: Sort method (query parameter, optional, values: amount_asc/amount_desc/time_asc/time_desc)
  - confirmed_only: Whether to return only confirmed UTXOs (query parameter, optional, default false)
- **Response Example**:
<pre v-pre>
\`\`\`json
{
  "utxos": [
    {
      "txid": "...",
      "vout": 0,
      "amount": "100",
      "confirmations": 6,
      "height": 800000
    }
  ]
}
\`\`\`
</pre>
<a id="blockchain-api"></a>
## Blockchain Related APIs

<a id="endpoint-bestheight"></a>
### Get Current Block Height
- **Endpoint**: GET /bestheight
- **Description**: Get current Bitcoin block height
- **Cache**: 10 seconds
- **Response Example**:
<pre v-pre>
\`\`\`json
{
  "height": 800000,
  "timestamp": "2024-02-22T14:30:00Z"
}
\`\`\`
</pre>
<a id="endpoint-blockhash"></a>
### Get Block Hash
- **Endpoint**: GET /btc/block/blockhash/{height}
- **Description**: Get block hash by block height
- **Parameters**:
  - height: Block height (path parameter, required)
- **Response Example**:
<pre v-pre>
\`\`\`json
{
  "height": 800000,
  "hash": "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f"
}
\`\`\`
</pre>
<a id="endpoint-block"></a>
### Get Raw Block Data
- **Endpoint**: GET /btc/block/{blockhash}
- **Description**: Get complete block data by block hash
- **Parameters**:
  - blockhash: Block hash (path parameter, required)
- **Response Field Description**:
  - hash: Block hash
  - confirmations: Number of confirmations
  - size: Block size (bytes)
  - weight: Block weight
  - height: Block height
  - version: Block version
  - merkleroot: Merkle root
  - time: Block timestamp
  - nonce: Nonce value
  - bits: Difficulty target
  - previousblockhash: Previous block hash
  - nextblockhash: Next block hash
  - tx: Transaction list

<a id="endpoint-sendtx"></a>
### Send Raw Transaction
- **Endpoint**: POST /btc/tx
- **Description**: Send signed raw transaction to Bitcoin network
- **Parameters**:
  - signedTxHex: Signed transaction hex data (request body, required)
  - maxfeerate: Maximum fee rate, unit BTC/kB (request body, optional)
- **Notes**:
  - Transaction must be fully signed
  - Recommend testing on testnet first
  - Set reasonable fee rate to avoid transaction delay
- **Response Example**:
<pre v-pre>
\`\`\`json
{
  "txid": "...",
  "fee": "0.0001",
  "size": 225
}
\`\`\`
</pre>
<a id="endpoint-tx"></a>
### Get Transaction Details
- **Endpoint**: GET /btc/tx/{txid}
- **Description**: Get detailed information for specified transaction ID
- **Parameters**:
  - txid: Transaction ID (path parameter, required)
- **Response Field Description**:
  - txid: Transaction ID
  - hash: Transaction hash
  - version: Transaction version
  - size: Transaction size
  - vsize: Virtual size
  - weight: Transaction weight
  - locktime: Lock time
  - vin: Input list
  - vout: Output list
  - confirmations: Number of confirmations
  - time: Transaction time
  - blocktime: Block time

<a id="error-handling"></a>
## Error Handling
<a id="http-status-codes"></a>
### HTTP Status Codes

- 200: Request successful
- 400: Request parameter error
- 401: Authentication failed
- 403: Permission denied
- 404: Resource not found
- 429: Request rate limit exceeded
- 500: Server internal error

<a id="error-response-format"></a>
### Error Response Format
<pre v-pre>
\`\`\`json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Error description",
    "details": {
      "field": "Specific error field",
      "reason": "Specific error reason"
    }
  }
}
\`\`\`
</pre>

<a id="common-error-codes"></a>
### Common Error Codes

- INVALID_PARAMETER: Invalid parameter
- INSUFFICIENT_FUNDS: Insufficient balance
- RATE_LIMIT_EXCEEDED: Request limit exceeded
- INVALID_SIGNATURE: Invalid signature
- NETWORK_ERROR: Network error

<a id="best-practices"></a>
## Best Practices
<a id="request-limit"></a>
### Request Limits
- Basic API key: 60 requests/minute
- Professional API key: 600 requests/minute
- Enterprise API key: 6000 requests/minute
<a id="optimization"></a>
### Optimization Suggestions

1. **Use Batch APIs**
   - Use batch query APIs when possible
   - Set reasonable batch sizes

2. **Caching Strategy**
   - Cache infrequently changing data
   - Use appropriate cache expiration times
   - Implement incremental update mechanism

3. **Error Handling**
   - Implement exponential backoff retry
   - Handle all possible error cases
   - Log detailed error information

4. **Performance Optimization**
   - Use compression
   - Reduce request frequency
   - Implement local cache
<a id="security"></a>
### Security Recommendations

1. **API Key Management**
   - Rotate keys regularly
   - Use environment variables
   - Prevent key exposure

2. **Request Validation**
   - Validate all input data
   - Implement request signing
   - Use HTTPS transport

3. **Monitoring and Alerts**
   - Monitor API usage
   - Set up anomaly alerts
   - Record audit logs
`,
    },
    'contributing': {
      title: 'Contributing Guide',
      content: `
# Contributing Guide

<a id="contributing-process"></a>
## Development Process

1. Fork project repository
2. Create feature branch
3. Submit changes
4. Create Pull Request

<a id="code-standards"></a>
## Code Standards

We use ESLint for code standard checking, please ensure your code meets the standards:
<pre v-pre>
\`\`\`bash
npm run lint
\`\`\`
</pre>

<a id="commit-message-format"></a>
## Commit Message Format

Use Angular commit convention:

- feat: New feature
- fix: Bug fix
- docs: Documentation updates
- style: Code formatting
- refactor: Code refactoring
- test: Testing related
- chore: Build process or auxiliary tool changes
`
    }
  }
};