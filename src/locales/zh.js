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
    tech: '技术',
    satnet: '聪网',
    eco: '生态',
    roadmap: '路线',
    docs: '文档'
  },

  // ==================== 角色导航 ====================
  roles: {
    explorer: '浏览器',
    developer: '开发者',
    user: '用户'
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
    info: '欢迎来到SAT20Labs，共建去中心化的未来',
    product: '产品',
    developers: '开发者',
    services: '服务',
    home: '首页',
    tech: '技术',
    satnet: '聪网',
    community: '社区',
    whitepaper: '白皮书',
    docs: '文档',
    api: 'API',
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
    hero: {//hero组件
      mainTitle: '一聪一世界',
      subTitle: 'BTC原生资产发行与流通',
      features: [
        {
          text: '无需分割，',
          accent: '100%非托管！'
        },
        {
          text: '我们的',
          accent: '"部分订单簿"',
          suffix: '允许用户自由挂单任意数量。'
        },
        {
          text: '不再有复杂的分割，只需',
          accent: '随时交易。'
        }
      ],
      description: 'SAT20Labs为比特币生态提供资产发行和流通基础设施。核心技术是SAT20协议和创新的SatoshiNet。SatoshiNet基于闪电通道和比特币平行网络，支持Ordinals、Runes、OrdX、BRC20等多种协议资产，通过网络提供超低手续费和秒级确认。\n\n通过SAT20协议，用户可以轻松发行和流通BTC原生资产，享受无缝兼容和即时交易体验。',
      downloadWhitepaper: '下载白皮书',
      tryTestnet: '体验测试网'
    },
    features: {//核心功能组件
      title: '核心特性',
      items: [
        {
          title: '聪本位资产',
          description: '资产绑定聪，不可销毁、自由流动'
        },
        {
          title: '原生二层网络',
          description: '基于闪电通道+BTC平行网络SatoshiNet'
        },
        {
          title: '全资产兼容',
          description: '支持Ordinals、OrdX、Runes、BRC20等协议'
        },
        {
          title: '智能合约支持',
          description: '模板化合约及图灵完备脚本（OP_CAT）'
        },
        {
          title: '超低费用',
          description: '10聪/交易，秒级确认'
        }
      ]
    },
    satoshinet: {//聪网组件
      title: "聪网",
      subtitle: "新一代区块链基础设施",
      description: "SAT20的底层网络基础设施",
      architecture: {
        title: "技术架构",
        description: "聪网采用创新的多层架构设计",
        feature1: "原生比特币网络集成",
        feature2: "闪电网络二层扩展",
        feature3: "安全多资产支持",
        feature4: "去中心化基础设施",
        layers: {
          title: "网络层次",
          items: [
            {
              name: "共识层",
              description: "基于比特币网络，继承其安全性"
            },
            {
              name: "网络层",
              description: "P2P网络通信和数据同步"
            },
            {
              name: "协议层",
              description: "资产发行和交易规则"
            },
            {
              name: "应用层",
              description: "DApp开发接口和工具"
            }
          ]
        }
      },
      compatibility: {
        title: "兼容协议",
        protocols: ["Ordinals", "BRC20", "Runes", "OrdX"]
      },
      assetTypes: {
        title: "支持的资产类型",
        types: {
          ft: {
            title: 'Fungible Token',
            description: '同质化通证，可互换资产',
            imgurl: '/images/assetstype/ft.png'
          },
          nft: {
            title: 'Non-Fungible Token',
            description: '非同质化通证，独特资产',
            imgurl: '/images/assetstype/nft.png'
          },
          sft: {
            title: 'Semi-Fungible Token',
            description: '半同质化通证，批量资产',
            imgurl: '/images/assetstype/sft.png'
          },
          did: {
            title: 'Decentralized Identity',
            description: '去中心化身份标识',
            imgurl: '/images/assetstype/did.png'
          }
        }
      }
    },
    ecosystem: {//生态系统组件
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
            title: 'Dapps与GameFi',
            description: '基于区块链的应用、游戏和元宇宙'
          }
        ]
      },
      partners: {//合作伙伴组件
        title: '合作伙伴',
        items: [
          {
            title: '应用开发者',
            description: '提供开发者资助计划和黑客松活动'
          },
          {
            title: '基础设施',
            description: '索引器和节点服务提供商'
          },
          {
            title: '战略合作伙伴',
            description: '生态应用集成和钱包集成'
          }
        ]
      },
    },
    developers: {//开发者中心组件
      title: '开发者中心',
      subtitle: '构建下一代区块链应用',
      description: '使用SAT20协议开发创新应用和服务',
      buttons: {
        startDev: '开始开发',
        viewDocs: '查看文档'
      }
    },
    partners: {//合作伙伴组件
      title: '合作伙伴',
      description: '与行业领先的企业和组织携手共建比特币生态',
      items: [],
      sat20market: '领先的比特币原生资产交易平台',
      btcname: '去中心化比特币域名服务',
      morego: '创新的SocialFi,GameFi应用',
      unisat: '流行的比特币钱包和铭文平台',
      okx: '全球领先的数字资产交易所',
      magiceden: '领先的NFT市场和生态系统'
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
        dev: '开发门槛'
      },
      traditional: {
        asset: 'UTXO为单位',
        contract: '非图灵完备',
        speed: '10分钟确认',
        cost: '手续费0.5%+',
        dev: '需定制侧链'
      },
      innovation: {
        asset: '聪级精准度',
        contract: 'OP_CAT增强型图灵完备',
        speed: '秒级闪电通道',
        cost: '原子交换，低手续费',
        dev: '主网原生兼容'
      },
      improvement: {
        asset: 'BTC的1亿倍精细化',
        contract: '支持复杂智能合约',
        speed: '600倍加速',
        cost: '超低成本',
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
        { title: 'SAT20协议V2.0版本发布', link: '/news/sat20-v2' },
        { title: '生态发展基金启动', link: '/news/eco-fund' },
        { title: '聪网及Dex将上线', link: '/news/bridge-launch' }
      ],
      resources: '资源下载',
      resourceList: [
        { title: 'SAT20技术白皮书', link: '/docs/whitepaper' },
        { title: '开发者工具包', link: '/docs/devkit' },
        { title: '生态路线图', link: '/docs/roadmap' }
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
    title: '技术路线图',
    subtitle: 'SAT20技术路线图',
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
        title: 'ORDX协议开发完成',
        items: [
          'ORDX协议规范定稿',
          '完成核心功能开发',
          '测试网部署验证',
          'ORDX协议上线主网'
        ]
      },
      phase2: {
        date: '2024 Q4',
        title: '逐步开源',
        items: [
          '索引器模块开源',
          '钱包模块开源',
          '开发者文档发布',
          '社区贡献指南'
        ]
      },
      phase3: {
        date: '2025 Q1',
        title: 'STP流通协议上线',
        items: [
          'STP协议正式发布',
          '动态通道容量调整功能',
          '流动性池协议集成',
          '多链互操作支持'
        ]
      },
      phase4: {
        date: '2025 Q2',
        title: 'SatoshiNet主网启动',
        items: [
          'SatoshiNet主网上线',
          'SatSwap/DEX启动',
          '生态应用部署',
          '社区治理开启'
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
          url: '/docs/api_reference',
          icon: 'book',
          submenu: [
            {
              title: '基础信息',
              url: '/docs/api_reference#basic-info'
            },
            {
              title: '认证与安全',
              url: '/docs/api_reference#authentication'
            },
            {
              title: '地址接口',
              url: '/docs/api_reference#address-api',
              submenu: [
                {
                  title: '获取UTXO资产详情',
                  url: '/docs/api_reference#endpoint-assets'
                },
                {
                  title: '获取地址铸造历史',
                  url: '/docs/api_reference#endpoint-history'
                },
                {
                  title: '获取地址余额摘要',
                  url: '/docs/api_reference#endpoint-summary'
                },
                {
                  title: '获取地址UTXO列表',
                  url: '/docs/api_reference#endpoint-utxolist'
                }
              ]
            },
            {
              title: '区块链接口',
              url: '/docs/api_reference#blockchain-api',
              submenu: [
                {
                  title: '获取当前区块高度',
                  url: '/docs/api_reference#endpoint-bestheight'
                },
                {
                  title: '获取区块哈希',
                  url: '/docs/api_reference#endpoint-blockhash'
                },
                {
                  title: '获取原始区块数据',
                  url: '/docs/api_reference#endpoint-block'
                },
                {
                  title: '发送原始交易',
                  url: '/docs/api_reference#endpoint-sendtx'
                },
                {
                  title: '获取交易详情',
                  url: '/docs/api_reference#endpoint-tx'
                }
              ]
            },
            {
              title: '错误处理',
              url: '/docs/api_reference#error-handling'
            },
            {
              title: '最佳实践',
              url: '/docs/api_reference#best-practices'
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
          url: '/docs/getting_started'
        },
        {
          title: 'API参考',
          description: '详细的API文档',
          icon: 'api',
          url: '/docs/api_reference'
        },
        {
          title: '最佳实践',
          description: '开发建议和示例',
          icon: 'star',
          url: '/docs/best-practices'
        },
        {
          title: '教程',
          description: '深入的开发教程',
          icon: 'graduation-cap',
          url: '/docs/tutorials'
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
          url: '/docs/indexer'
        },
        {
          title: 'SDK',
          description: '全功能开发工具包',
          icon: 'sdk',
          url: '/docs/sdk'
        },
        {
          title: 'CLI工具',
          description: '命令行开发工具',
          icon: 'terminal',
          url: '/docs/cli'
        },
        {
          title: '合约模板',
          description: '智能合约开发模板',
          icon: 'contract',
          url: '/docs/contract-templates'
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
      whitepaper: '白皮书',
      getting_started: '快速开始',
      api_reference: 'API 文档',
      contributing: '贡献指南'
    },
    whitepaper: {
      title: 'SAT20白皮书',
      content: `
# SAT20白皮书
<a id="whitepaper-overview"></a>
## 简介

SAT20是一种基于比特币的原生资产发行和流通协议，旨在为比特币生态提供一个安全、可扩展和高效的资产管理解决方案。

<a id="whitepaper-core-features"></a>
## 核心特性

*   聪本位资产：SAT20支持聪级别的资产发行和管理，实现了比特币原生资产的高效流通。
*   原生二层网络：SAT20基于闪电网络和BTC平行网络构建，实现了高性能和低延迟的交易处理。
*   全资产兼容：SAT20支持多种资产协议，包括Ordinals、OrdX、Runes和BRC20等。
*   智能合约支持：SAT20支持模板化智能合约和图灵完备脚本，实现了高灵活性的资产管理。

<a id="whitepaper-architecture"></a>
## 技术架构

SAT20的技术架构包括以下几个层次：

*   基础层：比特币网络作为底层基础设施。
*   协议层：SAT20核心协议和智能合约。
*   应用层：去中心化应用生态系统。

<a id="whitepaper-applications"></a>
## 应用场景

SAT20的应用场景包括：

*   DeFi应用：去中心化金融服务，包括借贷、交易和质押等。
*   NFT市场：数字艺术品和收藏品的发行和交易平台。
*   区块链游戏：基于区块链的游戏资产和虚拟世界。

<a id="whitepaper-conclusion"></a>
## 总结

SAT20是一种基于比特币的原生资产发行和流通协议，具有安全、可扩展和高效的特点。它支持聪级别的资产发行和管理，实现了比特币原生资产的高效流通。SAT20的技术架构包括基础层、协议层和应用层，支持多种资产协议和智能合约。其应用场景包括DeFi应用、NFT市场和区块链游戏等。
`
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