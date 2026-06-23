// ==================== 公共组件 ====================
export default {
  common: {
    learnMore: '更多详情',
    viewAll: '查看全部',
    back: '返回',
    close: '关闭',
    confirm: '确认',
    cancel: '取消',
    loading: '加载中...',
    error: '出错了',
    success: '成功',
    retry: '重试'
  },

  theme: {
    light: '浅色模式',
    dark: '深色模式'
  },

  // ==================== 导航菜单 ====================
  nav: {
    home: '首页',
    network: '网络',
    stack: '体系',
    community: '参与者',
    builders: '开发者',
    roadmap: '路线图',
    docs: '文档'
  },

  // ==================== 角色导航 ====================
  roles: {
    wallet: '钱包',
    explorer: '浏览器',
    github: 'GitHub'
  },

  // ==================== 菜单分类 ====================
  menu: {
    navigation: '导航',
    roles: '角色',
    settings: '设置',
    theme: '主题',
    language: '语言',
    documentation: '文档'
  },

  // ==================== 底部 ====================
  footer: {
    info: 'SAT20 围绕统一索引、STP 通道、聪网执行层、自托管钱包与面向 AI 的接口，构建开放的比特币原生基础设施。',
    product: '入口',
    developers: '协议',
    services: '服务',
    home: '首页',
    tech: '技术',
    satnet: '聪网',
    community: '社区',
    whitepaper: '文档总览',
    docs: '文档',
    api: 'API',
    wallet: '钱包',
    stp: 'STP 白皮书',
    github: 'GitHub',
    market: '市场',
    explorer: '浏览器',
    eco: '生态',
    links:
      [
        { link1: '链接1' },
        { link2: '链接2' },
        { link3: '链接3' }
      ]
  },

  // ==================== 首页 ====================
  home: {
    hero: {
      mainTitle: '开放的比特币原生执行网络',
      subTitle: '让比特币原生资产在 Bitcoin 与 SatoshiNet 之间流动，同时资产控制权始终留在用户手里。',
      features: [],
      description: 'SatoshiNet 将 STP 通道、统一索引、执行基础设施与自托管钱包接口组合成一套开放网络。社区、运营者、开发者与 AI Agent 可以自己验证退出路径、检查状态，并在不依赖封闭平台托管的前提下使用这套网络。',
      downloadWhitepaper: '阅读文档',
      tryTestnet: '体验测试网',
      downloadWallet: '安装扩展钱包',
      downloadWalletSub: 'Chrome 应用商店',
      installPwaWallet: '安装 PWA 钱包',
    },
    features: {
      title: '这套网络为什么重要',
      items: [
        {
          title: '比特币原生控制权',
          description: '客户端自己持有钱包密钥、通道状态、承诺交易历史与退出路径。'
        },
        {
          title: '统一资产入口',
          description: '通过同一套索引语义观察 Ordinals、ORDX、BRC-20、Runes 与相关 UTXO 状态。'
        },
        {
          title: '开放的 Core Node 接入',
          description: '钱包与社区通过 STP 连接 Core Node，而不是依赖一个专有桥接账户。'
        },
        {
          title: '可执行的网络层',
          description: '资产进入网络后，可以继续由聪网节点、合约与 GAS 驱动的执行层协同行动。'
        },
        {
          title: '面向 AI 的操作接口',
          description: '钱包 API 与 skills 可以把余额、承诺交易、通道恢复与资产流转暴露给用户控制的 Agent。'
        }
      ]
    },
    satoshinet: {
      title: "社区可拥有的网络体系",
      subtitle: "四层结构把比特币原生资产变成一套开放执行网络。",
      description: "这套网络从设计上就应该被社区运行、验证与扩展，而不是被隐藏在单一服务之后。",
      architecture: {
        title: "技术架构",
        description: "聪网采用创新的多层架构设计",
        feature1: "L1 Indexer：统一表达比特币原生资产与链上来源",
        feature2: "STP 通道：负责进入、退出、lock、unlock 与 splicing",
        feature3: "Core Node 与合约：负责聪网内部执行与结算",
        feature4: "钱包与 Agent 接口：让人和 AI 在同一套安全模型下操作",
        layers: {
          title: "网络层次",
          items: [
            {
              name: "资产层",
              description: "索引 UTXO、资产余额、协议元数据，以及面向 Bitcoin 的来源关系。"
            },
            {
              name: "通道层",
              description: "通过 STP 让资产可验证地进入和退出网络，并保留可恢复的通道状态。"
            },
            {
              name: "执行层",
              description: "在资产进入聪网后，由 Core Node、合约与网络规则继续执行。"
            },
            {
              name: "接口层",
              description: "通过钱包、浏览器、文档和 skills 暴露给人类用户与 AI Agent。"
            }
          ]
        }
      },
      compatibility: {
        title: "支持的比特币原生协议",
        protocols: ["Ordinals", "ORDX", "BRC20", "Runes"]
      },
      assetTypes: {
        title: "网络对外暴露的核心对象",
        types: {
          ft: {
            title: '同质化资产',
            description: '包括 Runes、BRC-20、ORDX FT 以及其他以余额为中心的资产视图。',
            imgurl: '/images/assetstype/ft.png'
          },
          nft: {
            title: 'Ordinal 资产',
            description: '以 UTXO 所有权为核心的 Ordinal 与铭文类资产。',
            imgurl: '/images/assetstype/nft.png'
          },
          sft: {
            title: '通道状态',
            description: '包括 open、splice、expand、lock、unlock 与可恢复的通道位置。',
            imgurl: '/images/assetstype/sft.png'
          },
          did: {
            title: '执行状态',
            description: '资产进入聪网后形成的 L2 余额、合约状态与节点索引结果。',
            imgurl: '/images/assetstype/did.png'
          }
        }
      }
    },
    ecosystem: {
      title: '谁可以加入这套网络',
      applications: {
        title: '社区栈',
        items: [
          {
            title: '比特币社区',
            description: '把已有资产、用户与运营信任，带进一套可验证的执行环境。'
          },
          {
            title: '钱包与交易平台',
            description: '通过统一索引与钱包模型支持比特币原生资产，而不是维护多套孤立适配器。'
          },
          {
            title: '开发者与节点运营者',
            description: '在同一套网络语义之上运行节点、索引器、合约与应用。'
          }
        ]
      },
      partners: {
        title: '参与方式',
        items: [
          {
            title: '运行核心基础设施',
            description: '部署 Core Node 与 L1/L2 Indexer，服务自己的用户与应用。'
          },
          {
            title: '构建合约与 Agent 流程',
            description: '围绕钱包、协议和执行层接口，构建真正可操作的网络动作。'
          },
          {
            title: '支持网络增长',
            description: '贡献钱包、流动性、研究、教育、集成与运维工具。'
          }
        ]
      }
    },
    developers: {
      title: '开发者与 AI Agent',
      subtitle: '让开发者和 Agent 使用同一套可见、可验证的控制面。',
      description: 'SAT20 Wallet、公开文档和可安装 skills 的目标，是让 Agent 可以检查余额、管理通道、验证承诺交易，并在用户密钥控制下移动资产，而不是依赖隐藏托管。',
      buttons: {
        startDev: '阅读文档',
        viewDocs: '打开 GitHub'
      },
      codeFileName: 'agent-wallet.ts',
      codeSnippet: `const wallet = await sat20.wallet.connect({
  mode: 'pwa',
  network: 'mainnet'
});

const summary = await wallet.summary();
const channel = await wallet.channelStatus();
const commitments = await wallet.exportCommitments();

console.log({
  l1: summary.l1,
  l2: summary.l2,
  channel: channel.status,
  commitments: commitments.latestHeight
});`
    },
    partners: {
      title: '开放入口',
      description: '通过公开文档、自托管钱包界面与实时浏览器进入这套网络。',
      items: [],
      docs: '为开发者、运营者与社区成员提供协议、架构与接入参考。',
      wallet: '安装 PWA 钱包，在同一个客户端界面管理 Bitcoin 与聪网资产。',
      explorer: '检查 L1/L2 交易、资产状态与公开网络数据。',
      visit: '打开'
    }
  },

  // ==================== 技术页面 ====================
  technology: {
    title: '技术架构',
    subtitle: '探索SAT20的创新区块链技术',
    description: 'SAT20协议采用最先进的区块链技术，构建了一个高效、安全、经济且智能化的比特币原生资产发行和流通的管理体系，为比特币生态的创新发展提供了革命性的机会。',
    hero: {
      title: '创新技术架构',
      subtitle: '探索SAT20的技术创新'
    },
    architecture: {
      title: '分层架构',
      base: {
        title: 'BTC Mainnet',
        desc: '资产发行基础层，兼容主流协议，如Ordinals、Runes、Brc20、OrdX...'
      },
      protocol: {
        title: 'Lightning Channel',
        desc: '动态闪电通道技术，兼容各种BTC生态资产在主网和聪网之间安全的自由穿越'
      },
      application: {
        title: 'SatoshiNet',
        desc: '创新的闪电网络架构：DEX/SWAP、DeFi、GameFi、SocialFi、Metaverse...'
      }
    },
    comparison: {
      title: '技术先进性特点',
      headings: [
        '维度', 
        '传统方案', 
        'SAT20创新', 
        '提升效果'
      ],
      dimensions: {
        asset: '资产粒度',
        contract: '合约能力',
        speed: '交易速度',
        cost: '跨链成本',
        gasfee: 'gas类型',
        dev: '开发门槛'
      },
      traditional: {
        asset: 'UTXO为单位',
        contract: '非图灵完备',
        speed: '10分钟确认',
        cost: '手续费0.5%+',
        gasfee: '非BTC',
        dev: '需定制侧链'
      },
      innovation: {
        asset: '聪级精准度',
        contract: 'OP_CAT增强型图灵完备',
        speed: '秒级闪电通道',
        cost: '原子交换，低手续费',
        gasfee: 'BTC',
        dev: '主网原生兼容'
      },
      improvement: {
        asset: 'BTC的1亿倍精细化',
        contract: '支持复杂智能合约',
        speed: '600倍加速',
        cost: '超低成本',
        gasfee: '共享BTC共识',
        dev: '省90%开发成本'
      }
    },
    innovation: {
      title: '核心创新价值',
      items: [
        {
          title: '聪本位体系',
          features: [
            '每个聪独立可编程',
            '资产与聪永久绑定',
            'UTXO原生扩展'
          ]
        },
        {
          title: '进化版闪电网络',
          features: [
            '可动态调整通道容量',
            '兼容一层发行的原生资产',
            '实现资产安全的无桥跨链'
          ]
        },
        {
          title: '聪网的智能进化',
          features: [
            '模版化智能合约',
            'OP_CAT指令集扩展',
            'SVM聪虚拟机支持'
          ]
        }
      ]
    },
    pillars: {
      title: '四大技术支柱',
      items: [
        {
          title: '聪资产发行管理引擎（OrdX）',
          innovation: '创新点：聪级精度的资产发行与管理，多资产类型满足不同场景',
          features: [
            '基于Ordinals序数编号，精准的聪定位与追踪技术',
            '支持灵活的"一聪一币"和"一聪多币"资产发行',
            '专业化稀有聪资产的挖掘与管理，提升资产稀缺性和价值'
          ]
        },
        {
          title: '聪穿越技术（STP协议）',
          innovation: '创新点：避免传统跨链桥的安全隐患，提升交易的可靠性和透明度',
          features: [
            '动态通道：通过Splicing技术实现动态通道容量调整',
            '无桥跨链：原生闪电通道技术，避免跨链桥的安全隐患',
            '安全合约：基于RSMC合约自动执行资产锁定与释放，降低风险'
          ]
        },
        {
          title: '超级UTXO - 多协议资产兼容',
          innovation: '创新点：统一框架整合不同协议资产，无缝跨协议资产交换',
          features: [
            '支持Ordinals、BRC20、Runes、OrdX等多协议资产',
            '聪网超级UTXO架构提升资产兼容性与管理效率，降低交易成本',
            '支持跨协议互操作，降低了资产交换和流通难度'            
          ]
        },
        {
          title: '资产交换引擎 - SATSWAP',
          innovation: '创新点：实现资产的实时交换，减少交易延迟和手续费',
          features: [
            'SATSWAP提供去中心化、低成本的资产交换与流通',
            '交易引擎支持高频交易与流动性池，解决流动性难题',
            '金融（DeFi）可实现资产的借贷、流动性提供与收益优化'
          ]
        }
      ]
    },
    roadmap: {
      title: '技术演进路线',
      phases: [
        {
          time: '2024 Q1',
          desc: '完成资产发行协议OrdX的开发与主网部署'
        },
        {
          time: '2024 Q3',
          desc: '完成流通协议STP的核心开发工作与测试网部署'
        },
        {
          time: '2024 Q4',
          desc: '完成SatoshiNet的节点搭建、部署以及OrdX,Runes资产的穿越、转移'
        },
        {
          time: '2025 Q1',
          desc: '完成闪电通道池子管理、钱包，Dex的大部分开发工作'
        },
        {
          time: '2025 Q2',
          desc: 'SatoshiNet主网启动，Dex的完整上线'
        }
      ]
    }
  },

  // ==================== 聪网页面 ====================
  satoshinet: {
    title: "聪网",
    subtitle: "聪网是基于扩展闪电通道技术和比特币核心代码的进化版闪电网络，构建了一个原生二层网络，实现了无桥跨链、秒级确认和低成本交易。它革命性地提升了比特币生态的可扩展性和应用场景，推动了整个生态的创新与发展",
    architecture: {
      title: "技术架构",
      feature1: "基于比特币网络",
      feature2: "闪电网络扩展",
      feature3: "安全加密机制",
      feature4: "隐私保护方案"
    },
    compatibility: {
      title: "兼容协议"
    },
    assetTypes: {
      title: '资产类型',
      description: '聪网支持多种类型的资产，满足不同场景需求',
      types: {
        ft: {
          title: 'Fungible Token',
          description: '同质化代币，可互换资产'
        },
        nft: {
          title: 'Non-Fungible Token',
          description: '非同质化代币，独特资产'
        },
        sft: {
          title: 'Semi-Fungible Token',
          description: '半同质化代币，兼具共性与独特性'
        },
        did: {
          title: 'Decentralized Identity',
          description: '去中心化身份标识'
        }
      }
    },
    advantages: {
      title: "核心优势",
      items: [
        {
          title: "高性能扩展",
          desc: "基于状态通道技术，支持高并发交易"
        },
        {
          title: "资产兼容",
          desc: "完全兼容比特币一层各类资产协议"
        },
        {
          title: "安全可靠",
          desc: "继承比特币网络的安全性和去中心化特性"
        }
      ]
    },
    economy: {
      title: "经济模型",
      models: [
        {
          percent: "70%",
          label: "生态激励",
          desc: "用于生态建设和开发者激励"
        },
        {
          percent: "20%",
          label: "节点运营",
          desc: "用于维护网络基础设施"
        },
        {
          percent: "10%",
          label: "社区治理",
          desc: "用于社区发展和治理"
        }
      ]
    },
    ecosystem: {
      title: "生态发展",
      phases: [
        {
          title: "基础设施",
          items: [
            "主网上线",
            "核心协议完善",
            "基础工具开发"
          ]
        },
        {
          title: "生态扩展",
          items: [
            "DApp生态建设",
            "多协议、多资产互操作",
            "开发者社区建设"
          ]
        },
        {
          title: "应用落地",
          items: [
            "大规模商业应用",
            "生态系统完善",
            "全球化布局"
          ]
        }
      ]
    }
  },

  // ==================== 生态页面 ====================
  tokenomics: {
    title: 'SAT20生态系统',
    description: 'SAT20生态系统由多个相互协作的组件构成，共同打造一个完整的去中心化金融生态：\n\n' +
      '1. ORDX协议：核心交易协议，支持聪级别资产的发行和交易。\n\n' +
      '2. STP协议：流通性协议，实现跨链资产的无缝转移。\n\n' +
      '3. 开发者工具：完整的SDK和API支持，助力开发者快速接入。\n\n' +
      '4. 社区治理：通过DAO机制实现社区驱动的决策。',
    hero: {
      title: '加入聪网生态，共建区块链未来',
      subtitle: '聪网生态致力于构建一个开放、创新、共赢的区块链生态系统。我们邀请您参与生态建设，共同探索区块链技术的无限可能。'
    },
    assetIssuance: {
      title: '资产发行',
      description: '通过SAT20协议创建和发布您的SFT资产，开启区块链资产新纪元。',
      features: [
        'SAT20协议：基于"聪本位"的资产发行标准',
        '多样化发行模式：项目方主导、部分控盘、公平发射',
        '完整发行流程：从部署到发行的全程指导',
        '安全可靠：多重安全机制保障资产安全'
      ]
    },
    trading: {
      title: '参与交易',
      description: '使用STP（聪穿越协议）进行资产穿越到聪网流通，体验流畅的交易体验。',
      features: [
        'STP协议：高效的资产流通解决方案',
        '简单操作：便捷的钱包连接和交易确认',
        '全资产流通：实现主流协议的各种资产流通',
        '实时行情：准确的市场数据和交易信息'
      ]
    },
    community: {
      title: '社区参与',
      description: '加入SatoshiNet社区，参与生态治理，共同推动项目发展。',
      features: [
        '治理投票：参与重要决策的社区投票',
        '社区活动：丰富的线上线下交流活动',
        '贡献激励：完善的社区贡献奖励机制',
        '资源共享：获取最新项目资讯和研究成果'
      ]
    },
    developer: {
      title: '开发者支持',
      description: '为开发者提供完善的工具和资源支持，助力创新应用开发。',
      features: [
        '技术文档：详尽的API文档和开发指南',
        '开发工具：功能强大的SDK和开发套件',
        '示例项目：丰富的参考示例和最佳实践',
        '技术支持：专业的技术团队支持服务'
      ]
    },
    sidebar: {
      announcements: '最新公告',
      announcementList: [
        { title: 'SAT20协议V2.0版本发布', link: '/#/news/sat20-v2' },
        { title: '生态发展基金启动', link: '/#/news/eco-fund' },
        { title: '聪网及Dex将上线', link: '/#/news/bridge-launch' }
      ],
      resources: '资源下载',
      resourceList: [
        { title: 'SAT20技术白皮书', link: '/#/docs/whitepaper' },
        { title: '开发者工具包', link: '/#/docs/devkit' },
        { title: '生态路线图', link: '/#/docs/roadmap' }
      ]
    },
    newsletter: {
      title: '订阅更新',
      description: '订阅我们的新闻简报，及时获取最新动态和重要更新。',
      placeholder: '请输入您的邮箱地址',
      subscribe: '订阅'
    },
    ecosystem: {
      title: '生态系统',
      applications: {
        title: '应用场景',
        items: [
          {
            title: 'DeFi应用',
            description: '去中心化金融服务，包括借贷、交易、质押等'
          },
          {
            title: 'NFT市场',
            description: '数字艺术品、收藏品的发行和交易平台'
          },
          {
            title: '区块链游戏',
            description: '基于区块链的游戏资产和虚拟世界'
          }
        ]
      }
    }
  },

  // ==================== 路线图页面 ====================
  roadmap: {
    title: '路线图',
    subtitle: '从比特币原生资产接入，到开放执行网络基础设施',
    description: 'SAT20 正在形成一套完整网络栈：统一索引、STP 通道、可执行的 Core Node、自托管钱包界面，以及面向 Agent 的操作接口。',
    status: {
      completed: '已完成',
      inProgress: '进行中',
      upcoming: '即将开始'
    },
    years: {
      2024: '2024年',
      2025: '2025年',
      future: '未来愿景'
    },
    phases: {
      phase1: {
        date: '2024 Q2',
        title: '资产语义与基础设施底座',
        items: [
          '逐步明确 ORDX 与比特币原生资产语义',
          '建立 L1 索引与钱包基础能力',
          '稳定资产可见性与来源追踪模型',
          '形成主网运行所需的底层假设'
        ]
      },
      phase2: {
        date: '2024 Q4',
        title: '开放文档与工具体系',
        items: [
          '核心仓库逐步开源',
          '重构文档结构与对外术语',
          '让钱包与节点工作流更可检查',
          '为外部开发者准备稳定的参与路径'
        ]
      },
      phase3: {
        date: '2025 Q1',
        title: 'STP 与 Core Node 接入',
        items: [
          '对外明确 STP 通道生命周期与恢复能力',
          '稳定 open、close、splice、lock、unlock 等流程',
          '形成第三方客户端接入 Core Node 的方式',
          '让自托管安全证据可以被 Agent 理解与验证'
        ]
      },
      phase4: {
        date: '2025 Q2',
        title: '执行层、合约与 GAS',
        items: [
          '围绕 Core Node 完善聪网执行层',
          '把合约路径与 GAS 语义逐步公开化',
          '让钱包、浏览器与 skills 汇聚到统一网络视图',
          '支持更多社区端到端拥有自己的整套基础设施'
        ]
      },
      future: {
        date: '未来',
        title: '愿景目标',
        items: [
          '支持更多协议及资产类型的流通',
          '构建DeIP（去中心化知识产权网络）',
          '扩展聪网生态系统',
          '建立全球开发者社区'
        ]
      }
    }
  },


  // ==================== 投资者页面 ====================
  investor: {
    title: '投资者中心',
    subtitle: '了解SAT20的投资价值与机制',
    tokenUsage: {
      title: '代币使用场景',
      pearl: 'Pearl是SAT20生态的原生代币，用于支付交易手续费、参与生态治理、获取收益分成等。'
    },
    transactionFee: {
      title: '交易手续费',
      current: '当前每笔交易仅需10聪，未来将进一步降至1聪。'
    },
    revenue: {
      title: '收益分配',
      mining: {
        title: '挖矿收益',
        description: '参与网络维护获得挖矿奖励',
        phase1: '第一阶段：日产出100万枚',
        phase2: '第二阶段：日产出50万枚',
        phase3: '第三阶段：日产出25万枚'
      },
      staking: {
        title: '质押收益',
        description: '质押Pearl获得网络手续费分成',
        apy: '目标年化：15-30%',
        lockPeriod: '锁定期：7-90天'
      },
      liquidity: {
        title: '流动性收益',
        description: '为交易对提供流动性获得收益',
        share: '手续费分成：70%',
        bonus: '额外Pearl奖励'
      },
      foundation: {
        title: '基金会分配',
        description: '基金会将投入1000万美元用于生态建设',
        early: '早期阶段',
        growth: '成长阶段'
      }
    },
    adjustment: {
      title: '动态调节机制',
      network: {
        title: '网络参数调节',
        description: '根据网络负载动态调整手续费和区块参数'
      },
      staking: {
        title: '质押机制调节',
        description: '根据质押总量动态调整收益率和锁定期'
      }
    },
    foundation: {
      title: '基金会计划',
      description: '基金会将投入1000万美元用于生态建设',
      allocation: [
        {
          title: '开发者激励',
          percent: '40%',
          description: '支持开发者构建DApp'
        },
        {
          title: '市场推广',
          percent: '30%',
          description: '品牌建设与市场拓展'
        },
        {
          title: '社区建设',
          percent: '20%',
          description: '社区活动与运营'
        },
        {
          title: '安全储备',
          percent: '10%',
          description: '用于应对突发情况'
        }
      ]
    }
  },

  // ==================== 开发者页面 ====================
  developers: {
    title: '开发者中心',
    subtitle: '构建去中心化的比特币原生资产生态',
    description: '加入SAT20开发者社区，使用我们的开发工具和SDK，构建下一代比特币原生资产应用。',
   
    quickLinks: {
      title: '快速入口',
      items: [
        {
          title: '开发者文档',
          description: '详尽的API文档和开发指南',
          url: '/#/docs/api_reference',
          icon: 'book',
          submenu: [
            {
              title: '基础信息',
              url: '/#/docs/api_reference#basic-info'
            },
            {
              title: '认证与安全',
              url: '/#/docs/api_reference#authentication'
            },
            {
              title: '地址接口',
              url: '/#/docs/api_reference#address-api',
              submenu: [
                {
                  title: '获取UTXO资产详情',
                  url: '/#/docs/api_reference#endpoint-assets'
                },
                {
                  title: '获取地址铸造历史',
                  url: '/#/docs/api_reference#endpoint-history'
                },
                {
                  title: '获取地址余额摘要',
                  url: '/#/docs/api_reference#endpoint-summary'
                },
                {
                  title: '获取地址UTXO列表',
                  url: '/#/docs/api_reference#endpoint-utxolist'
                }
              ]
            },
            {
              title: '区块链接口',
              url: '/#/docs/api_reference#blockchain-api',
              submenu: [
                {
                  title: '获取当前区块高度',
                  url: '/#/docs/api_reference#endpoint-bestheight'
                },
                {
                  title: '获取区块哈希',
                  url: '/#/docs/api_reference#endpoint-blockhash'
                },
                {
                  title: '获取原始区块数据',
                  url: '/#/docs/api_reference#endpoint-block'
                },
                {
                  title: '发送原始交易',
                  url: '/#/docs/api_reference#endpoint-sendtx'
                },
                {
                  title: '获取交易详情',
                  url: '/#/docs/api_reference#endpoint-tx'
                }
              ]
            },
            {
              title: '错误处理',
              url: '/#/docs/api_reference#error-handling'
            },
            {
              title: '最佳实践',
              url: '/#/docs/api_reference#best-practices'
            }
          ]
        },
        {
          title: 'GitHub',
          description: '查看源代码和示例项目',
          url: 'https://github.com/sat20labs',
          icon: 'github'
        },
        {
          title: '开发者社区',
          description: '加入讨论，获取支持',
          url: '#',
          icon: 'users'
        }
      ]
    },

    documentation: {
      title: '技术文档',
      categories: [
        {
          title: '入门指南',
          description: '快速上手SAT20开发',
          icon: 'rocket',
          url: '/#/docs/getting_started'
        },
        {
          title: 'API参考',
          description: '详细的API文档',
          icon: 'api',
          url: '/#/docs/api_reference'
        },
        {
          title: '最佳实践',
          description: '开发建议和示例',
          icon: 'star',
          url: '/#/docs/best-practices'
        },
        {
          title: '教程',
          description: '深入的开发教程',
          icon: 'graduation-cap',
          url: '/#/docs/tutorials'
        }
      ]
    },

    tools: {
      title: '开发工具',
      description: '提供开发者必备的工具和资源',
      items: [
        {
          title: 'SAT20 索引器',
          description: '高性能区块链数据索引和查询工具',
          icon: 'indexer',
          url: '/#/docs/indexer'
        },
        {
          title: 'SDK',
          description: '全功能开发工具包',
          icon: 'sdk',
          url: '/#/docs/sdk'
        },
        {
          title: 'CLI工具',
          description: '命令行开发工具',
          icon: 'terminal',
          url: '/#/docs/cli'
        },
        {
          title: '合约模板',
          description: '智能合约开发模板',
          icon: 'contract',
          url: '/#/docs/contract-templates'
        }
      ]
    },

    updates: {
      title: '最新动态',
      items: [
        {
          title: 'SDK v1.2.0 发布',
          description: '新增智能合约支持，优化性能和稳定性',
          date: '2024-02-20',
          icon: 'code'
        },
        {
          title: '开发者文档更新',
          description: '新增API参考和最佳实践指南',
          date: '2024-02-15',
          icon: 'book'
        },
        {
          title: '测试网升级',
          description: '支持新的交易类型和智能合约功能',
          date: '2024-02-10',
          icon: 'server'
        }
      ]
    },

    community: {
      title: '开发者社区',
      channels: [
        {
          title: 'Discord',
          description: '加入开发者讨论',
          icon: 'discord',
          url: '#'
        },
        {
          title: 'GitHub',
          description: '贡献代码',
          icon: 'github',
          url: 'https://github.com/sat20labs'
        },
        {
          title: '论坛',
          description: '技术交流与支持',
          icon: 'forum',
          url: '#'
        }
      ]
    }
  },

  // ==================== 用户中心 ====================
  user: {
    title: '用户中心',
    subtitle: '探索SAT20的功能与服务',
    description: '使用SAT20进行资产发行、交易和管理，体验下一代区块链资产生态',
    sections: {
      minting: {
        title: '资产发行',
        description: '了解如何在SAT20上发行和管理您的资产',
        tutorials: [
          {
            title: '创建钱包',
            description: '设置您的SAT20钱包 ',
            icon: 'wallet',
            items: [
              '下载并安装钱包',
              '创建或导入账户',
              '保管好您的助记词'
            ]
          },
          {
            title: '发行资产',
            description: '发行您的第一个资产',
            icon: 'token',
            items: [
              '选择资产类型',
              '设置资产参数',
              '确认并发行'
            ]
          },
          {
            title: '管理资产',
            description: '管理您的资产',
            icon: 'manage',
            items: [
              '查看资产详情',
              '转账和接收',
              '查看交易历史'
            ]
          }
        ]
      },
      trading: {
        title: '交易功能',
        description: 'SATSWAP即将上线，敬请期待',
        features: [
          {
            title: '订单本交易',
            description: '创建和管理订单',
            icon: 'trade'
          },
          {
            title: '流动性池',
            description: '提供流动性和赚取费用',
            icon: 'pool'
          },
          {
            title: '资产穿越',
            description: '资产通过闪电通道穿越主网与聪网',
            icon: 'transcending'
          }
        ]
      },
      testing: {
        title: '测试网体验',
        description: '在测试网上尝试新功能',
        link: 'https://demo.ordx.market',
        features: [
          {
            title: '获取测试币',
            description: '从水龙头获取测试币',
            icon: 'faucet'
          },
          {
            title: '发行测试资产',
            description: '尝试资产发行流程',
            icon: 'test'
          },
          {
            title: '模拟交易',
            description: '体验交易功能',
            icon: 'tradeing'
          }
        ]
      }
    }
  },

  // ==================== 文档页面 ====================
  docs: {
    toc: "目录导航",
    lastUpdated: "最后更新",
    categories: {
      getting_started: '快速开始',
      api_reference: 'API 文档',
      contributing: '贡献指南',
      whitepaper: '白皮书'
    },
    getting_started: {
      title: '快速开始指南',
      content: `
# 快速开始指南
<a id="guide-install"></a>
## 安装

使用npm安装SAT20开发套件：

\`\`\`bash
npm install @sat20\sdk
\`\`\`


<a id="guide-init"></a>
## 初始化

创建SAT20客户端实例：

\`\`\`javascript
import { SAT20Client } from '@sat20\/sdk';

const client = new SAT20Client({
  network: 'mainnet',  // 或 'testnet'
  apiKey: 'YOUR_API_KEY'
});
\`\`\`

<a id="guide-basic"></a>
## 基本用法

### 发行资产

\`\`\`javascript
const result = await client.issueAsset({
  name: 'MyToken',
  symbol: 'MTK',
  totalSupply: '1000000'
});
\`\`\`

<a id="guide-transfer"></a>
### 转账资产

\`\`\`javascript
await client.transfer({
  to: 'recipient_address',
  amount: '100',
  asset: 'MTK'
});
\`\`\`

`
    },
    api_reference: {
      title: 'API Reference',
      content: `
# SAT20 API Documentation

<a id="basic-info"></a>
## 基础信息

- **基础URL**: https://apiprd.sat20.org/mainnet
- **API版本**: v0.1.0
- **协议**: HTTPS
- **数据格式**: JSON
- **字符编码**: UTF-8

<a id="authentication"></a>
## 认证与安全

所有API请求都需要在Header中包含Bearer Token进行认证：

\`\`\`http
Authorization: Bearer YOUR_API_KEY
\`\`\`

如何获取API密钥：
1. 登录SAT20开发者平台
2. 访问API密钥管理页面
3. 创建新的API密钥
4. 妥善保管您的API密钥，不要泄露给他人

安全建议：
- 定期轮换API密钥
- 使用环境变量存储API密钥
- 避免密钥泄露

<a id="address-api"></a>
## 地址相关接口

<a id="endpoint-assets"></a>
### 获取UTXO中的资产详情
- **端点**: GET \/address\/assets\/\{utxo\}
- **描述**: 获取指定UTXO中的资产详情，包括代币数量、类型等信息
- **参数**: 
  - utxo: UTXO标识符（路径参数，必需）
- **响应示例**:

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

<a id="endpoint-history"></a>
### 获取地址铸造历史
- **端点**: GET \/address\/history\/\{address\}\/\{ticker\}
- **描述**: 获取指定地址的铸造历史记录，支持分页查询
- **参数**:
  - address: 比特币地址（路径参数，必需）
  - ticker: 代币符号（路径参数，必需）
  - page: 页码（查询参数，可选，默认1）
  - limit: 每页记录数（查询参数，可选，默认20）
- **响应示例**:

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

<a id="endpoint-summary"></a>
### 获取地址余额摘要
- **端点**: GET \/address\/summary\/\{address\}
- **描述**: 获取指定地址的所有代币余额摘要
- **参数**:
  - address: 比特币地址（路径参数，必需）
- **响应示例**:

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

<a id="endpoint-utxolist"></a>
### 获取地址UTXO列表
- **端点**: GET \/address\/utxolist\/\{address\}\/\{ticker\}
- **描述**: 获取指定地址和代币的UTXO列表，支持分页和排序
- **参数**:
  - address: 比特币地址（路径参数，必需）
  - ticker: 代币符号（路径参数，必需）
  - sort: 排序方式（查询参数，可选，值：amount_asc/amount_desc/time_asc/time_desc）
  - confirmed_only: 是否只返回已确认的UTXO（查询参数，可选，默认false）
- **响应示例**:

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

<a id="blockchain-api"></a>
## 区块链相关接口

<a id="endpoint-bestheight"></a>
### 获取当前区块高度
- **端点**: GET \/bestheight
- **描述**: 获取当前比特币区块高度
- **缓存**: 10秒
- **响应示例**:

\`\`\`json
{
  "height": 800000,
  "timestamp": "2024-02-22T14:30:00Z"
}
\`\`\`

<a id="endpoint-blockhash"></a>
### 获取区块哈希
- **端点**: GET \/btc\/block\/blockhash\/\{height\}
- **描述**: 根据区块高度获取区块哈希
- **参数**:
  - height: 区块高度（路径参数，必需）
- **响应示例**:

\`\`\`json
{
  "height": 800000,
  "hash": "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f"
}
\`\`\`

<a id="endpoint-block"></a>
### 获取原始区块数据
- **端点**: GET \/btc\/block\/\{blockhash\}
- **描述**: 根据区块哈希获取完整的区块数据
- **参数**:
  - blockhash: 区块哈希（路径参数，必需）
- **响应字段说明**:
  - hash: 区块哈希
  - confirmations: 确认数
  - size: 区块大小（字节）
  - weight: 区块权重
  - height: 区块高度
  - version: 区块版本
  - merkleroot: Merkle根
  - time: 区块时间戳
  - nonce: Nonce值
  - bits: 难度目标
  - difficulty: 难度值
  - previousblockhash: 前一区块哈希
  - nextblockhash: 下一区块哈希
  - tx: 交易列表

<a id="endpoint-sendtx"></a>
### 发送原始交易
- **端点**: POST \/btc\/tx
- **描述**: 发送已签名的原始交易到比特币网络
- **参数**:
  - signedTxHex: 已签名的交易十六进制数据（请求体，必需）
  - maxfeerate: 最大费率，单位BTC\/kB（请求体，可选）
- **注意事项**:
  - 交易必须完整签名
  - 建议先在测试网络验证
  - 设置合理的费率以避免交易延迟
- **响应示例**:

\`\`\`json
{
  "txid": "...",
  "fee": "0.0001",
  "size": 225
}
\`\`\`

<a id="endpoint-tx"></a>
### 获取交易详情
- **端点**: GET \/btc\/tx\/\{txid\}
- **描述**: 获取指定交易ID的详细信息
- **参数**:
  - txid: 交易ID（路径参数，必需）
- **响应字段说明**:
  - txid: 交易ID
  - hash: 交易哈希
  - version: 交易版本
  - size: 交易大小
  - vsize: 虚拟大小
  - weight: 交易权重
  - locktime: 锁定时间
  - vin: 输入列表
  - vout: 输出列表
  - confirmations: 确认数
  - time: 交易时间
  - blocktime: 区块时间

<a id="error-handling"></a>
## 错误处理
<a id="http-status-codes"></a>
### HTTP状态码

- 200: 请求成功
- 400: 请求参数错误
- 401: 认证失败
- 403: 权限不足
- 404: 资源不存在
- 429: 请求频率超限
- 500: 服务器内部错误

<a id="error-response-format"></a>
### 错误响应格式

\`\`\`json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "错误描述信息",
    "details": {
      "field": "具体错误字段",
      "reason": "具体错误原因"
    }
  }
}
\`\`\`

<a id="error-codes"></a>
### 常见错误码

- INVALID_PARAMETER: 参数无效
- INSUFFICIENT_FUNDS: 余额不足
- RATE_LIMIT_EXCEEDED: 超出请求限制
- INVALID_SIGNATURE: 签名无效
- NETWORK_ERROR: 网络错误

<a id="best-practices"></a>
## 最佳实践
<a id="request-limit"></a>
### 请求限制
- 基础版API密钥: 60次\/分钟
- 专业版API密钥: 600次\/分钟
- 企业版API密钥: 6000次\/分钟

<a id="optimization"></a>
### 优化建议

1. **使用批量接口**
   - 尽可能使用批量查询接口
   - 合理设置批量大小

2. **缓存策略**
   - 缓存不经常变化的数据
   - 使用合适的缓存过期时间
   - 实现增量更新机制

3. **错误处理**
   - 实现指数退避重试
   - 处理所有可能的错误情况
   - 记录详细的错误日志

4. **性能优化**
   - 使用压缩传输
   - 减少请求频率
   - 实现本地缓存
<a id="security"></a>
### 安全建议

1. **API密钥管理**
   - 定期轮换密钥
   - 使用环境变量
   - 避免密钥泄露

2. **请求验证**
   - 验证所有输入数据
   - 实现请求签名
   - 使用HTTPS传输

3. **监控告警**
   - 监控API使用情况
   - 设置异常告警
   - 记录审计日志
`,
    },
    contributing: {
      title: '贡献指南',
      content: `
# 贡献指南

<a id="contributing-process"></a>
## 开发流程

1. Fork 项目仓库
2. 创建特性分支
3. 提交变更
4. 发起Pull Request

<a id="code-standards"></a>
## 代码规范

我们使用ESLint进行代码规范检查，请确保你的代码符合规范：

\`\`\`bash
npm run lint
\`\`\`

<a id="commit-message-format"></a>
## 提交消息格式

使用Angular提交规范：

- feat: 新特性
- fix: 修复bug
- docs: 文档更新
- style: 代码格式
- refactor: 重构
- test: 测试相关
- chore: 构建过程或辅助工具的变动
`
    }
  }
};
