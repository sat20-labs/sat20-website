<template>
  <div class="homepage">
    <div class="announcement">
      <div class="wrap">
        <b>{{ copy.announcement.badge }}</b>
        <span>{{ copy.announcement.text }}</span>
        <a href="#participate">{{ copy.announcement.link }}</a>
      </div>
    </div>

    <nav class="nav" :class="{ open: isMenuOpen }" id="nav">
      <div class="wrap navin">
        <a class="logo" href="#top">
          <span class="logo-mark">S</span>
          <span><em>SAT20</em> / SatoshiNet</span>
        </a>

        <div class="links" id="navLinks">
          <a v-for="item in copy.nav" :key="item.href" :href="item.href" @click="closeMenu">{{ item.label }}</a>
        </div>

        <div class="tools">
          <button
            v-for="lang in languages"
            :key="lang.key"
            class="lang-btn"
            :class="{ active: locale === lang.key }"
            @click="switchLang(lang.key)"
          >
            {{ lang.label }}
          </button>
          <a class="btn small docs-btn" :href="copy.docsUrl" target="_blank" rel="noreferrer">Docs</a>
          <a class="btn small primary" href="#join">{{ copy.navCta }}</a>
          <button class="menu-btn" aria-label="Open navigation" @click="isMenuOpen = !isMenuOpen">☰</button>
        </div>
      </div>
    </nav>

    <header class="hero" id="top">
      <div class="wrap hero-grid">
        <div>
          <div class="eyebrow">{{ copy.hero.eyebrow }}</div>
          <h1>
            {{ copy.hero.titlePrefix }}
            <span class="accent">{{ copy.hero.titleAccent }}</span>
            {{ copy.hero.titleSuffix }}
          </h1>
          <p class="lead">{{ copy.hero.lead }}</p>
          <div class="actions">
            <a class="btn primary" href="#join">{{ copy.hero.actions.join }}</a>
            <a class="btn" href="#stack">{{ copy.hero.actions.build }}</a>
            <a class="btn cyan" href="#gas">{{ copy.hero.actions.runNode }}</a>
            <a class="btn" href="https://sat20.org/pwa/?install=1" target="_blank" rel="noreferrer">{{ copy.hero.actions.wallet }}</a>
          </div>
          <div class="chips">
            <span v-for="chip in copy.hero.chips" :key="chip" class="chip">{{ chip }}</span>
          </div>
        </div>

        <div class="stack-panel" aria-label="SatoshiNet architecture">
          <div class="panel-head">
            <span>{{ copy.hero.panelTitle }}</span>
            <span class="live-dot">{{ copy.hero.panelStatus }}</span>
          </div>
          <div class="flow-stack">
            <template v-for="(node, index) in copy.hero.flow" :key="node.title">
              <div class="flow-node" :class="node.theme">
                <div>
                  <strong>{{ node.title }}</strong><br>
                  <span>{{ node.desc }}</span>
                </div>
                <span>{{ node.tag }}</span>
              </div>
              <div v-if="index < copy.hero.flow.length - 1" class="connector"></div>
            </template>
          </div>
          <div class="app-grid">
            <div v-for="app in copy.hero.apps" :key="app" class="app-pill">{{ app }}</div>
          </div>
          <div class="panel-note">{{ copy.hero.panelNote }}</div>
        </div>
      </div>
    </header>

    <section class="section" id="network">
      <div class="wrap reveal">
        <div class="kicker">{{ copy.network.kicker }}</div>
        <h2>{{ copy.network.title }}</h2>
        <p class="lead">{{ copy.network.lead }}</p>
        <div class="grid4">
          <div v-for="card in copy.network.cards" :key="card.num" class="card principle-card">
            <div class="icon">{{ card.icon }}</div>
            <span class="num">{{ card.num }}</span>
            <h3>{{ card.title }}</h3>
            <p>{{ card.desc }}</p>
          </div>
        </div>
        <div class="quote-band">{{ copy.network.quote }}</div>
      </div>
    </section>

    <section class="section alt" id="status">
      <div class="wrap reveal">
        <div class="kicker">{{ copy.status.kicker }}</div>
        <h2>{{ copy.status.title }}</h2>
        <p class="lead">{{ copy.status.lead }}</p>
        <div class="status-board">
          <div class="status-card">
            <span class="status impl">IMPLEMENTED</span>
            <h3>{{ copy.status.mainTitle }}</h3>
            <div class="tag-list">
              <span v-for="item in copy.status.implemented" :key="item">{{ item }}</span>
            </div>
          </div>
          <div class="status-side">
            <div class="status-card">
              <span class="status test">TESTNET</span>
              <h3>{{ copy.status.testnetTitle }}</h3>
              <div class="tag-list">
                <span v-for="item in copy.status.testnet" :key="item">{{ item }}</span>
              </div>
            </div>
            <div class="status-card">
              <span class="status dev">IN DEVELOPMENT</span>
              <h3>{{ copy.status.devTitle }}</h3>
              <div class="tag-list">
                <span v-for="item in copy.status.developing" :key="item">{{ item }}</span>
              </div>
            </div>
            <div class="status-card">
              <span class="status design">DESIGN IN PROGRESS</span>
              <h3>{{ copy.status.designTitle }}</h3>
              <div class="tag-list">
                <span v-for="item in copy.status.designing" :key="item">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="actions">
          <a class="btn primary" :href="copy.docsUrl" target="_blank" rel="noreferrer">{{ copy.status.actions.docs }}</a>
          <a class="btn" href="https://github.com/sat20-labs" target="_blank" rel="noreferrer">{{ copy.status.actions.github }}</a>
          <a class="btn" href="https://mempool.sat20.org" target="_blank" rel="noreferrer">{{ copy.status.actions.explorer }}</a>
        </div>
      </div>
    </section>

    <section class="section" id="stack">
      <div class="wrap reveal">
        <div class="kicker">{{ copy.stack.kicker }}</div>
        <h2>{{ copy.stack.title }}</h2>
        <p class="lead">{{ copy.stack.lead }}</p>
        <div class="stack-grid">
          <div v-for="card in copy.stack.cards" :key="card.title" class="card stack-card">
            <div class="icon">{{ card.icon }}</div>
            <h3>{{ card.title }}</h3>
            <p>{{ card.desc }}</p>
            <div class="meta"><span>{{ card.meta }}</span><span>{{ card.state }}</span></div>
          </div>
        </div>
        <div class="deploy-steps">
          <div v-for="step in copy.stack.steps" :key="step.no" class="step">
            <b>{{ step.no }}</b>
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
          </div>
        </div>
        <div class="actions">
          <a class="btn primary" href="#join">{{ copy.stack.actions.join }}</a>
          <a class="btn" href="https://ordx.market" target="_blank" rel="noreferrer">{{ copy.stack.actions.ecosystem }}</a>
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="wrap reveal">
        <div class="kicker">{{ copy.open.kicker }}</div>
        <h2>{{ copy.open.title }}</h2>
        <div class="open-grid">
          <div class="big-statement">
            <h3>{{ copy.open.statementTitle }}</h3>
            <p>{{ copy.open.statementText }}</p>
            <a class="btn cyan" :href="copy.docsUrl" target="_blank" rel="noreferrer">{{ copy.open.statementCta }}</a>
          </div>
          <div class="check-list">
            <div v-for="item in copy.open.checks" :key="item.text" class="check">
              <i>{{ item.icon }}</i>
              <span>{{ item.text }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap reveal">
        <div class="kicker">{{ copy.path.kicker }}</div>
        <h2>{{ copy.path.title }}</h2>
        <p class="lead">{{ copy.path.lead }}</p>
        <div class="architecture">
          <div v-for="layer in copy.path.layers" :key="layer.label" class="layer">
            <div class="label">{{ layer.label }}</div>
            <h3>{{ layer.title }}</h3>
            <p>{{ layer.desc }}</p>
            <div class="proof">{{ layer.proof }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section alt" id="security">
      <div class="wrap reveal">
        <div class="kicker">{{ copy.security.kicker }}</div>
        <h2>{{ copy.security.title }}</h2>
        <div class="security-layout">
          <div class="security-quote">
            {{ copy.security.quote }}
            <small>{{ copy.security.quoteMeta }}</small>
          </div>
          <div class="evidence">
            <div v-for="item in copy.security.evidence" :key="item" class="evidence-row">
              <b>✓</b>
              <span>{{ item }}</span>
            </div>
          </div>
        </div>
        <div class="actions">
          <a class="btn cyan" :href="copy.docsUrl" target="_blank" rel="noreferrer">{{ copy.security.cta }}</a>
        </div>
      </div>
    </section>

    <section class="section" id="participate">
      <div class="wrap reveal">
        <div class="kicker">{{ copy.roles.kicker }}</div>
        <h2>{{ copy.roles.title }}</h2>
        <p class="lead">{{ copy.roles.lead }}</p>
        <div class="roles-wrap">
          <div class="role-tabs" role="tablist">
            <button
              v-for="role in copy.roles.tabs"
              :key="role.key"
              class="role-tab"
              :class="{ active: activeRole === role.key }"
              @click="activeRole = role.key"
            >
              {{ role.label }}
            </button>
          </div>
          <div class="role-panel">
            <div>
              <span class="status impl">{{ activeRoleData.status }}</span>
              <h3>{{ activeRoleData.title }}</h3>
              <p>{{ activeRoleData.text }}</p>
              <div class="actions">
                <a class="btn primary" href="#join">{{ activeRoleData.cta }}</a>
              </div>
            </div>
            <div class="role-benefits">
              <div v-for="benefit in activeRoleData.benefits" :key="benefit" class="role-benefit">{{ benefit }}</div>
            </div>
          </div>
        </div>
        <div class="flywheel">
          <div class="flywheel-row">
            <template v-for="(item, index) in copy.roles.flywheel" :key="`${item.type}-${index}`">
              <div v-if="item.type === 'node'" class="wheel-node" :class="{ hot: item.hot }">{{ item.text }}</div>
              <div v-else class="wheel-arrow">→</div>
            </template>
          </div>
        </div>
      </div>
    </section>

    <section class="section alt" id="gas">
      <div class="wrap reveal">
        <div class="kicker">{{ copy.gas.kicker }}</div>
        <h2>{{ copy.gas.title }}</h2>
        <p class="lead">{{ copy.gas.lead }}</p>
        <div class="economy-grid">
          <div class="economy-flow">
            <span class="status design">DESIGN IN PROGRESS</span>
            <h3>{{ copy.gas.flowTitle }}</h3>
            <div v-for="(line, index) in copy.gas.flowLines" :key="index" class="fee-line">
              <div class="fee-box"><strong>{{ line.left.title }}</strong><br>{{ line.left.desc }}</div>
              <div class="fee-arrow">→</div>
              <div class="fee-box"><strong>{{ line.right.title }}</strong><br>{{ line.right.desc }}</div>
            </div>
            <div class="node-cards">
              <div v-for="node in copy.gas.nodes" :key="node.title" class="node-card">
                <h4>{{ node.title }}</h4>
                <p>{{ node.desc }}</p>
              </div>
            </div>
          </div>
          <div class="economy-rules">
            <div v-for="rule in copy.gas.rules" :key="rule.title" class="rule" :class="{ warn: rule.warn }">
              <strong>{{ rule.title }}</strong>{{ rule.desc }}
            </div>
          </div>
        </div>
        <div class="actions">
          <a class="btn primary" href="#join">{{ copy.gas.actions.test }}</a>
          <a class="btn" :href="copy.docsUrl" target="_blank" rel="noreferrer">{{ copy.gas.actions.docs }}</a>
        </div>
      </div>
    </section>

    <section class="section" id="ai">
      <div class="wrap reveal">
        <div class="kicker">{{ copy.ai.kicker }}</div>
        <h2>{{ copy.ai.title }}</h2>
        <p class="lead">{{ copy.ai.lead }}</p>
        <div class="agent-grid">
          <div v-for="card in copy.ai.cards" :key="card.title" class="card agent-card">
            <span class="status" :class="card.statusClass">{{ card.status }}</span>
            <h3>{{ card.title }}</h3>
            <ul>
              <li v-for="item in card.items" :key="item">{{ item }}</li>
            </ul>
            <a class="btn small" :class="{ cyan: card.cyan }" :href="card.href" :target="card.external ? '_blank' : null" :rel="card.external ? 'noreferrer' : null">{{ card.cta }}</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="wrap reveal">
        <div class="kicker">{{ copy.support.kicker }}</div>
        <h2>{{ copy.support.title }}</h2>
        <div class="sustain-grid">
          <div class="sustain-copy">
            <span class="status plan">FOUNDATION · PLANNED</span>
            <h3>{{ copy.support.copyTitle }}</h3>
            <p>{{ copy.support.copy1 }}</p>
            <p>{{ copy.support.copy2 }}</p>
          </div>
          <div class="sponsor-grid">
            <div v-for="item in copy.support.items" :key="item.title" class="sponsor">
              <h4>{{ item.title }}</h4>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
        <div class="actions">
          <a class="btn primary" href="#join">{{ copy.support.actions.sponsor }}</a>
          <a class="btn" href="#join">{{ copy.support.actions.deploy }}</a>
        </div>
      </div>
    </section>

    <section class="section" id="roadmap">
      <div class="wrap reveal">
        <div class="kicker">{{ copy.roadmap.kicker }}</div>
        <h2>{{ copy.roadmap.title }}</h2>
        <p class="lead">{{ copy.roadmap.lead }}</p>
        <div class="roadmap">
          <div v-for="card in copy.roadmap.cards" :key="card.title" class="card road-card">
            <span class="status" :class="card.statusClass">{{ card.status }}</span>
            <h3>{{ card.title }}</h3>
            <ul>
              <li v-for="item in card.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="cta" id="join">
      <div class="wrap">
        <div class="ctabox reveal">
          <div class="kicker">{{ copy.join.kicker }}</div>
          <h2>{{ copy.join.title }}</h2>
          <p>{{ copy.join.lead }}</p>
          <div class="cta-actions">
            <a class="btn primary" href="https://x.com/SAT20Labs" target="_blank" rel="noreferrer">{{ copy.join.actions.contact }}</a>
            <a class="btn" :href="copy.docsUrl" target="_blank" rel="noreferrer">{{ copy.join.actions.dev }}</a>
            <a class="btn" href="https://sat20.org/pwa/?install=1" target="_blank" rel="noreferrer">{{ copy.join.actions.wallet }}</a>
            <a class="btn cyan" href="https://github.com/sat20-labs" target="_blank" rel="noreferrer">{{ copy.join.actions.code }}</a>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="wrap">
        <div class="foot-top">
          <div>
            <a class="logo" href="#top">
              <span class="logo-mark">S</span>
              <span><em>SAT20</em> / SatoshiNet</span>
            </a>
            <p class="foot-brand">{{ copy.footer.brand }}</p>
          </div>
          <div v-for="col in copy.footer.columns" :key="col.title">
            <div class="foot-title">{{ col.title }}</div>
            <div class="foot-links">
              <a v-for="link in col.links" :key="link.label" :href="link.href" :target="link.external ? '_blank' : null" :rel="link.external ? 'noreferrer' : null">{{ link.label }}</a>
            </div>
          </div>
        </div>
        <div class="foot-note">{{ copy.footer.note }}</div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const isMenuOpen = ref(false);
const activeRole = ref('community');

const languages = [
  { key: 'zh', label: '中' },
  { key: 'en', label: 'EN' }
];

const closeMenu = () => {
  isMenuOpen.value = false;
};

const switchLang = async (lang) => {
  localStorage.setItem('language', lang);
  locale.value = lang;
  await nextTick();
};

const zh = {
  docsUrl: 'https://docs.sat20.org',
  announcement: { badge: '正在共建', text: '聪网招募首批社区伙伴、独立节点运营者与 EVM 开发者。', link: '查看参与方式' },
  nav: [
    { href: '#network', label: '网络' },
    { href: '#stack', label: 'Community Stack' },
    { href: '#participate', label: '建设者' },
    { href: '#gas', label: '节点与 GAS' },
    { href: '#security', label: '安全' },
    { href: '#ai', label: 'AI Agent' },
    { href: '#roadmap', label: '路线图' }
  ],
  navCta: '参与建设',
  hero: {
    eyebrow: 'OPEN BITCOIN-NATIVE EXECUTION NETWORK',
    titlePrefix: '让每一个 BTC 社区，',
    titleAccent: '建设、拥有并运行',
    titleSuffix: '自己的金融基础设施',
    lead: 'Bitcoin 提供资产来源与最终结算，聪网提供可验证的资产事实、用户可退出的跨层机制和开放的可编程执行环境。社区可以独立运行自己的节点、DEX、DAO、钱包、Indexer 与 Explorer。',
    actions: { join: '参与建设', build: '为我的社区搭建', runNode: '运行节点', wallet: '打开钱包' },
    chips: ['Assets from Bitcoin L1', 'Verifiable Asset Facts', 'User Exit Paths', 'Community-Owned Infrastructure'],
    panelTitle: 'NETWORK ARCHITECTURE',
    panelStatus: 'OPEN SYSTEM',
    flow: [
      { title: 'Bitcoin L1', desc: 'Assets · UTXO · Final Settlement', tag: 'ROOT', theme: 'orange' },
      { title: 'Indexer', desc: 'Verifiable Asset Facts', tag: 'FACTS', theme: 'cyan' },
      { title: 'STP', desc: 'Channels · Commitments · Exit', tag: 'CONTROL', theme: 'cyan' },
      { title: 'SatoshiNet', desc: 'UTXO · Contracts · Execution', tag: 'EXECUTE', theme: 'orange' }
    ],
    apps: ['DEX', 'DAO', 'Wallet', 'Explorer', 'Nodes', 'AI Agent'],
    panelNote: '钱包掌握私钥和授权；Agent 读取证据、调用工具并解释风险。'
  },
  network: {
    kicker: 'WHY SATOSHINET',
    title: '让执行扩展，但不让用户重新回到托管体系',
    lead: 'Bitcoin L1 适合承担资产、最终结算和争议边界。真正的挑战，是在把高频交易与复杂应用迁移到扩展层时，仍然保留可验证的资产事实、用户控制与退出路径。',
    cards: [
      { icon: '₿', num: '01 · ASSETS', title: '资产来自 Bitcoin', desc: 'BTC、Ordinals、Runes、BRC20、ORDX 等资产入口来自 BTC L1，而不是凭空生成一套与 Bitcoin 无关的应用资产。' },
      { icon: 'F', num: '02 · FACTS', title: '事实可以复核', desc: 'Indexer 将交易、UTXO、确认、重组和协议事件表达为可追溯资产状态，为钱包、节点和 Agent 提供证据。' },
      { icon: '↩', num: '03 · CONTROL', title: '用户保留保护路径', desc: 'STP 通过承诺交易、强制关闭、CSV 清扫和旧状态惩罚处理 Core Node 离线、失败或作恶等异常情况。' },
      { icon: '{ }', num: '04 · EXECUTION', title: '应用独立执行', desc: 'SatoshiNet 承担交易、智能合约、DAO、DEX 和 Agent 自动化，让 Bitcoin L1 保持稳健和简洁。' }
    ],
    quote: '聪网不是要替代 Bitcoin，而是让 Bitcoin 原生资产获得一个更适合应用的执行环境。'
  },
  status: {
    kicker: 'BUILDING, NOT PROMISING',
    title: '从真实实现开始，而不是从叙事开始',
    lead: '每项能力都应链接到代码、文档、Demo、Explorer 或测试证据。核心实现完成不等于生产成熟，官网用统一状态避免夸大。',
    mainTitle: '核心实现已完成',
    implemented: ['SatoshiNet Core', 'Indexer', 'Explorer', '钱包插件', 'PWA / 移动钱包', 'Wallet SDK', 'Launchpad', 'AMM', '限价单', 'Transcend', 'DAO', 'DEX 后台'],
    testnetTitle: '可复核流程',
    testnet: ['STP 通道生命周期', '承诺交易', '惩罚覆盖', 'Agent Wallet Skill', '安全快照'],
    devTitle: '当前重点',
    developing: ['EVM Runtime', 'Solidity / ABI', 'UTXO 资产接口', 'Community Builder Agent'],
    designTitle: '经济与治理',
    designing: ['GAS 质押', '节点准入', '长期安全模型', '未来基金会'],
    actions: { docs: '查看完整文档', github: '查看 GitHub', explorer: '打开 Explorer' }
  },
  stack: {
    kicker: 'COMMUNITY-OWNED INFRASTRUCTURE',
    title: '不只是一个 DEX，而是一整套社区可自主运行的金融系统',
    lead: '社区可以选择模块、自主部署，并保留自己的品牌、用户关系、运营规则和应用收入。SAT20 Labs 的目标不是制造长期依赖，而是降低独立建设的门槛。',
    cards: [
      { icon: '⇄', title: '社区 DEX', desc: 'Launchpad、AMM、限价单、Transcend，以及社区品牌的交易前端和后台。', meta: 'TRADING', state: 'Implemented' },
      { icon: '◎', title: 'DAO 与社区基金', desc: '成员 UID、推荐关系、捐献、空投、审核、排行榜和链上资金规则。', meta: 'GOVERNANCE', state: 'Implemented' },
      { icon: 'W', title: '钱包与用户入口', desc: '钱包插件、移动端 / PWA 钱包、Wallet SDK 和社区定制入口。', meta: 'EXPERIENCE', state: 'Implemented' },
      { icon: 'I', title: 'Indexer 与 Explorer', desc: '独立查询并追溯资产、交易、通道、合约状态和 L1 / L2 证据。', meta: 'DATA', state: 'Implemented' },
      { icon: 'N', title: '节点与执行环境', desc: '运行 Mining Node 或 Core Node，为出块、合约执行和 STP 服务提供基础设施。', meta: 'NETWORK', state: 'Expanding' },
      { icon: 'AI', title: 'AI Agent', desc: '验证安全状态，并逐步通过对话生成 DEX、DAO、Indexer 与 Explorer 的部署方案。', meta: 'INTERFACE', state: 'Building' }
    ],
    steps: [
      { no: '01', title: '描述需求', desc: '说明社区、资产、用户、治理和流动性目标。' },
      { no: '02', title: '选择模块', desc: '组合节点、DEX、DAO、钱包、Indexer 和 Explorer。' },
      { no: '03', title: '测试与验证', desc: '完成测试网部署、合约配置和安全检查。' },
      { no: '04', title: '独立运营', desc: '社区自主运行基础设施并持续扩展应用。' }
    ],
    actions: { join: '申请社区共建', ecosystem: '查看现有生态' }
  },
  open: {
    kicker: 'AN OPEN NETWORK, NOT A CLOSED PLATFORM',
    title: '当协议团队不在线，社区仍然应该能够运行',
    statementTitle: '聪网的目标不是让所有社区依赖 SAT20 Labs。',
    statementText: '真正开放的网络，应允许第三方独立运行节点、Indexer、Explorer、钱包和应用；关键协议、接口和测试证据持续公开；用户保护路径不应永久依赖单一团队在线配合。',
    statementCta: '查看协议与证据',
    checks: [
      { icon: '✓', text: '第三方可以运行 Mining Node、Core Node、Indexer 与 Explorer' },
      { icon: '✓', text: '钱包、DEX、DAO 与 Agent 可以由不同团队开发' },
      { icon: '✓', text: '外部社区可以拥有自己的品牌、运营规则和用户入口' },
      { icon: '✓', text: '协议状态、版本和验证路径应公开可复核' },
      { icon: '↗', text: '节点、外部应用和独立贡献者统计正在建立' }
    ]
  },
  path: {
    kicker: 'FROM BITCOIN FACTS TO PROGRAMMABLE EXECUTION',
    title: '一条完整的资产、控制与执行路径',
    lead: '不同层承担不同责任。聪网的可信度来自职责清晰、证据可追溯和异常路径可执行，而不是把所有安全笼统归因于 Bitcoin。',
    layers: [
      { label: '01 · ROOT', title: 'Bitcoin L1', desc: '提供 UTXO、资产入口、通道资金、最终链上结算和争议边界。', proof: 'Evidence: txid · vout · confirmations' },
      { label: '02 · FACTS', title: 'Indexer', desc: '解析 BTC L1 交易、协议资产、mempool、确认与 reorg，为应用提供可复核事实。', proof: 'Evidence: asset state · protocol events' },
      { label: '03 · CONTROL', title: 'STP', desc: '通过私人通道、承诺交易、撤销、CSV、强制关闭和惩罚路径控制跨层资产。', proof: 'Evidence: commitments · punish coverage' },
      { label: '04 · EXECUTION', title: 'SatoshiNet', desc: '以增强型 UTXO 表达多资产，承载模板合约、EVM、DEX、DAO 和 Agent 合约。', proof: 'Evidence: blocks · Result TX · state root' }
    ]
  },
  security: {
    kicker: 'VERIFY, DO NOT ASSUME',
    title: '安全不是一个余额数字，而是一组可以验证的退出证据',
    quote: '用户应该知道资产位于哪里，并能判断在 Core Node 离线、失败或作恶时可以采取什么行动。',
    quoteMeta: 'Asset safety model',
    evidence: [
      'BTC L1 Channel Point 存在且可查询',
      '最新承诺交易可用，承诺高度单调前进',
      '用户与 Core Node 余额与承诺状态一致',
      '已撤销旧状态存在惩罚交易覆盖',
      '强制关闭和 CSV 后清扫路径可构造',
      '关键价值操作由钱包明确授权'
    ],
    cta: '阅读资产安全模型'
  },
  roles: {
    kicker: 'BUILD, OPERATE, CREATE VALUE',
    title: '不是依靠口号激励建设，而是让每个参与者提供真实服务',
    lead: '选择你的角色，了解你可以建设什么、为什么值得参与，以及价值来自哪里。',
    tabs: [
      { key: 'community', label: 'BTC 社区' },
      { key: 'developer', label: '开发者' },
      { key: 'mining', label: 'Mining Node' },
      { key: 'core', label: 'Core Node' },
      { key: 'infra', label: '基础设施' },
      { key: 'liquidity', label: '流动性伙伴' }
    ],
    flywheel: [
      { type: 'node', text: '社区部署应用', hot: true }, { type: 'arrow' },
      { type: 'node', text: '真实交易' }, { type: 'arrow' },
      { type: 'node', text: '消耗 GAS', hot: true }, { type: 'arrow' },
      { type: 'node', text: '节点获得费用' }, { type: 'arrow' },
      { type: 'node', text: '更多独立节点' }, { type: 'arrow' },
      { type: 'node', text: '更多应用与用户', hot: true }
    ],
    data: {
      community: { status: 'BUILD & OWN', title: 'BTC 社区：拥有自己的基础设施', text: '部署自己的 DEX、DAO、钱包、Indexer 和 Explorer，保留品牌、用户关系、治理规则与应用入口，同时接入聪网共享的资产和执行环境。', benefits: ['社区品牌与用户入口', '应用层服务费用', '自主治理与基金规则', '可选择共享流动性'], cta: '申请社区共建' },
      developer: { status: 'BUILD APPS', title: '开发者：在 BTC 原生资产之上构建应用', text: '使用模板合约、EVM 路线、Wallet SDK、Indexer 和聪网原生资产接口，开发交易、支付、DAO、游戏、Agent 与新的金融应用。', benefits: ['EVM 与 Solidity 路线', 'BTC 原生多资产接口', '客户项目与应用收入', 'Builder Grant 与生态支持'], cta: '开始开发' },
      mining: { status: 'OPERATE', title: 'Mining Node：提供出块与合约执行', text: '计划质押 GAS，参与聪网出块、交易排序和合约执行，并根据实际打包的交易与合约调用获得 GAS 费用。节点承担在线和协议行为责任。', benefits: ['真实网络服务费用', '参与开放节点网络', '可验证运行状态', '无固定 APY 承诺'], cta: '参与节点测试' },
      core: { status: 'STP SERVICE', title: 'Core Node：提供跨层通道与网络服务', text: '计划承担更高质押和在线要求，运行或配置 L1 Indexer，与钱包建立 STP 通道，并维护可验证的通道状态和安全材料。', benefits: ['STP 服务能力', '更高安全责任', '协议服务费用', '透明质押与处罚规则'], cta: '申请 Core Node' },
      infra: { status: 'INFRASTRUCTURE', title: '基础设施团队：让网络更独立、更可靠', text: '独立运行 Indexer、Explorer、RPC、监控和托管服务，通过公共品赞助、API、SLA、定制索引与长期运维合同形成可持续服务。', benefits: ['API 与 SLA 收入', '托管和定制服务', '公共基础设施赞助', '提升网络去中心化'], cta: '运行基础设施' },
      liquidity: { status: 'MARKET', title: '流动性伙伴：连接社区市场与资产需求', text: '为 AMM、限价单和社区市场提供流动性，获取应用协议明确产生的费用，同时承担市场、智能合约与流动性风险。', benefits: ['AMM 与限价单市场', '跨社区流动性路由', '应用协议费用', '风险透明而非收益承诺'], cta: '成为流动性伙伴' }
    }
  },
  gas: {
    kicker: 'NETWORK RESOURCE & SECURITY ASSET',
    title: 'GAS 连接网络使用、节点服务与长期安全',
    lead: 'GAS 是协议原生的资源和安全资产，不是官网的投资主角。完整经济规则仍需技术模拟、公开讨论、治理设计和法律审查。',
    flowTitle: '当前费用与节点路径',
    flowLines: [
      { left: { title: '用户 / 合约', desc: '支付交易与执行 GAS' }, right: { title: '出块节点', desc: '获得全部协议 GAS 费用' } },
      { left: { title: 'BTC L1 GAS', desc: '固定总量，协议发行' }, right: { title: 'Transcend', desc: '进入聪网参与使用与质押' } }
    ],
    nodes: [
      { title: 'Mining Node', desc: '计划质押 GAS，提供出块、排序和合约执行，获得实际网络费用。' },
      { title: 'Core Node', desc: '计划承担更高质押与在线要求，提供 STP 服务和跨层协调。' }
    ],
    rules: [
      { title: '固定总量', desc: 'GAS 计划来自 BTC L1，并按公开规则通过 Transcend 进入聪网。' },
      { title: '费用不销毁', desc: '当前设计为交易和合约 GAS 费用全部归实际出块节点。' },
      { title: '服务，而非固定理财', desc: '节点费用来自实际网络工作，不承诺固定 APY、价格或回购。' },
      { title: '不是股权', desc: 'GAS 不代表 SAT20 Labs 或未来基金会的股权、利润权或赎回权。' },
      { title: '尚未最终化', desc: '完整分配、锁定、质押、处罚、节点准入与基金会 Treasury 规则发布前，均不应被描述为最终投资安排。', warn: true }
    ],
    actions: { test: '参与节点测试', docs: '阅读 GAS 文档' }
  },
  ai: {
    kicker: 'AI AS AN INTERFACE, NOT A CUSTODIAN',
    title: '让复杂协议变成可对话、可验证、可授权的操作',
    lead: 'AI 是聪网的使用界面和自动化层，而不是资产托管人。钱包保存密钥和授权，Agent 读取证据、生成建议并调用工具。',
    cards: [
      { status: 'TESTNET', statusClass: 'test', title: 'Agent Wallet', items: ['查询钱包、通道与 Indexer 证据', '检查承诺交易和惩罚覆盖', '通过 Wallet Adapter 发起操作', '不保存私钥和助记词'], cta: '查看安全规范', href: 'https://docs.sat20.org', external: true, cyan: true },
      { status: 'IN DEVELOPMENT', statusClass: 'dev', title: 'Community Builder Agent', items: ['对话收集社区建设需求', '生成 DEX / DAO 架构与参数', '生成节点、Indexer 和 Explorer 配置', '管理员确认并由钱包签名部署'], cta: '加入首批共建', href: '#join' },
      { status: 'PLANNED', statusClass: 'plan', title: 'Community Operator Agent', items: ['基金池和捐献报告', '空投候选与异常分析', 'DEX 流动性和交易分析', '治理提案和运营提醒'], cta: '提出应用需求', href: '#join' }
    ]
  },
  support: {
    kicker: 'SUSTAIN OPEN-SOURCE DEVELOPMENT',
    title: '长期协议开发需要透明、可持续的支持结构',
    copyTitle: '协议团队、未来基金会和 GAS 必须清晰分离',
    copy1: '聪网当前由协议开发团队持续建设。未来计划成立独立非营利基金会，负责公共协议、开源资助、安全审计、生态 Grant 和透明治理。基金会尚未成立，官网不应以其名义接收资金或承诺 GAS 权益。',
    copy2: '支持协议开发不等同于购买 GAS，也不承诺支持方获得网络利润或价格收益。',
    items: [
      { title: '赞助公开里程碑', desc: 'EVM Runtime、安全审计、Wallet SDK、Agent 和开发者工具。' },
      { title: 'Community Stack 服务', desc: '付费部署、钱包集成、节点、Indexer、Explorer 与长期运维。' },
      { title: 'Grant 与捐赠', desc: '支持明确公共品，并公开用途、预算、交付物和进度。' },
      { title: '运行公共基础设施', desc: '直接贡献服务器、节点、Indexer、Explorer、RPC 或安全研究。' }
    ],
    actions: { sponsor: '赞助一个里程碑', deploy: '申请付费部署' }
  },
  roadmap: {
    kicker: 'OPEN ROADMAP',
    title: '技术、网络、生态和治理同时向前',
    lead: '路线图不是价格承诺，也不是固定日期表。完成状态必须对应公开代码、文档、交易、测试记录或外部部署。',
    cards: [
      { status: 'NOW', statusClass: 'impl', title: '可编程执行与首批社区', items: ['EVM Runtime 与 UTXO 原生资产接口', 'Solidity、ABI、Event 与开发工具', 'Community Stack 标准部署流程', '外部社区 DEX / DAO 试点', '协议开发可持续资金方案'] },
      { status: 'NEXT', statusClass: 'test', title: 'Agent、节点与共享流动性', items: ['Community Builder Agent', '钱包和社区通信机制', '更多独立 Mining / Core Node', '安全审计和故障演练', '跨社区流动性路由与聚合'] },
      { status: 'LATER', statusClass: 'plan', title: '开放治理与多团队维护', items: ['更开放的节点准入', '完整 GAS 质押与处罚模型', '非营利基金会和 Treasury Policy', 'SIP 协议改进流程', '多团队共同维护协议和客户端'] }
    ]
  },
  join: {
    kicker: 'JOIN SATOSHINET',
    title: '聪网不是由一个团队独自完成的产品，而是一条需要共同建设的开放网络',
    lead: '带着你的社区、资产、开发能力、节点资源、流动性或公共品预算加入聪网。你可以自主运行基础设施，也可以与协议团队共同完成第一套部署。',
    actions: { contact: '联系 SAT20 Labs', dev: '开始开发', wallet: '打开钱包', code: '贡献代码' }
  },
  footer: {
    brand: 'An open Bitcoin-native execution network where communities build, own and operate their own financial infrastructure.',
    columns: [
      { title: 'NETWORK', links: [{ label: '技术架构', href: '#network' }, { label: '安全模型', href: '#security' }, { label: '节点与 GAS', href: '#gas' }, { label: 'Explorer', href: 'https://mempool.sat20.org', external: true }] },
      { title: 'BUILD', links: [{ label: 'Community Stack', href: '#stack' }, { label: '建设者', href: '#participate' }, { label: 'AI Agent', href: '#ai' }, { label: 'GitHub', href: 'https://github.com/sat20-labs', external: true }] },
      { title: 'CONNECT', links: [{ label: 'Docs', href: 'https://docs.sat20.org', external: true }, { label: 'DEX', href: 'https://ordx.market', external: true }, { label: 'Wallet', href: 'https://sat20.org/pwa/?install=1', external: true }, { label: 'X / Twitter', href: 'https://x.com/SAT20Labs', external: true }] }
    ],
    note: 'SAT20 / SatoshiNet 处于持续开发阶段。不同组件可能处于 Implemented、Testnet、In Development、Design in Progress、Planned 或 Experimental 状态。本页面为官网 V3 内容与交互原型，不构成资产销售、投资建议、收益承诺或法律意见。GAS、节点质押、基金会和治理规则以未来正式发布的协议、法律文件和链上规则为准。'
  }
};

const en = {
  docsUrl: 'https://docs.sat20.org/english',
  announcement: { badge: 'BUILDING NOW', text: 'SatoshiNet is recruiting first-wave community partners, independent node operators, and EVM developers.', link: 'See how to participate' },
  nav: [
    { href: '#network', label: 'Network' },
    { href: '#stack', label: 'Community Stack' },
    { href: '#participate', label: 'Builders' },
    { href: '#gas', label: 'Nodes & GAS' },
    { href: '#security', label: 'Security' },
    { href: '#ai', label: 'AI Agent' },
    { href: '#roadmap', label: 'Roadmap' }
  ],
  navCta: 'Join the Build',
  hero: {
    eyebrow: 'OPEN BITCOIN-NATIVE EXECUTION NETWORK',
    titlePrefix: 'Let every BTC community ',
    titleAccent: 'build, own, and operate',
    titleSuffix: ' its own financial infrastructure',
    lead: 'Bitcoin provides asset origin and final settlement. SatoshiNet provides verifiable asset facts, user-controlled cross-layer exits, and an open programmable execution environment. Communities can independently run their own nodes, DEXs, DAOs, wallets, indexers, and explorers.',
    actions: { join: 'Join the Build', build: 'Build for My Community', runNode: 'Run a Node', wallet: 'Open Wallet' },
    chips: ['Assets from Bitcoin L1', 'Verifiable Asset Facts', 'User Exit Paths', 'Community-Owned Infrastructure'],
    panelTitle: 'NETWORK ARCHITECTURE',
    panelStatus: 'OPEN SYSTEM',
    flow: [
      { title: 'Bitcoin L1', desc: 'Assets · UTXO · Final Settlement', tag: 'ROOT', theme: 'orange' },
      { title: 'Indexer', desc: 'Verifiable Asset Facts', tag: 'FACTS', theme: 'cyan' },
      { title: 'STP', desc: 'Channels · Commitments · Exit', tag: 'CONTROL', theme: 'cyan' },
      { title: 'SatoshiNet', desc: 'UTXO · Contracts · Execution', tag: 'EXECUTE', theme: 'orange' }
    ],
    apps: ['DEX', 'DAO', 'Wallet', 'Explorer', 'Nodes', 'AI Agent'],
    panelNote: 'The wallet holds keys and authorization; the agent reads evidence, calls tools, and explains risk.'
  },
  network: {
    kicker: 'WHY SATOSHINET',
    title: 'Scale execution without sending users back into a custodial model',
    lead: 'Bitcoin L1 is best suited for asset origin, final settlement, and dispute boundaries. The real challenge is moving high-frequency trading and complex applications into an extension layer while preserving verifiable facts, user control, and exit paths.',
    cards: [
      { icon: '₿', num: '01 · ASSETS', title: 'Assets come from Bitcoin', desc: 'BTC, Ordinals, Runes, BRC20, ORDX, and similar assets enter from BTC L1 instead of being recreated as an unrelated application token set.' },
      { icon: 'F', num: '02 · FACTS', title: 'Facts can be verified', desc: 'The indexer expresses transactions, UTXOs, confirmations, reorgs, and protocol events as traceable asset state for wallets, nodes, and agents.' },
      { icon: '↩', num: '03 · CONTROL', title: 'Users keep protection paths', desc: 'STP uses commitments, force-close, CSV sweep, and punishment for revoked states to handle offline, failed, or malicious core nodes.' },
      { icon: '{ }', num: '04 · EXECUTION', title: 'Applications execute independently', desc: 'SatoshiNet carries trading, smart contracts, DAOs, DEXs, and agent automation while keeping Bitcoin L1 conservative and stable.' }
    ],
    quote: 'SatoshiNet is not here to replace Bitcoin. It gives Bitcoin-native assets an execution environment that is better suited for applications.'
  },
  status: {
    kicker: 'BUILDING, NOT PROMISING',
    title: 'Start from real implementation, not from narrative',
    lead: 'Every capability should link to code, docs, demos, explorers, or test evidence. A core implementation is not the same thing as production maturity, so the homepage uses explicit states.',
    mainTitle: 'Core implementation already exists',
    implemented: ['SatoshiNet Core', 'Indexer', 'Explorer', 'Extension Wallet', 'PWA / Mobile Wallet', 'Wallet SDK', 'Launchpad', 'AMM', 'Limit Orders', 'Transcend', 'DAO', 'DEX Backend'],
    testnetTitle: 'Verifiable flows',
    testnet: ['STP channel lifecycle', 'Commitment transactions', 'Punish coverage', 'Agent Wallet Skill', 'Safety snapshots'],
    devTitle: 'Current focus',
    developing: ['EVM Runtime', 'Solidity / ABI', 'UTXO asset interfaces', 'Community Builder Agent'],
    designTitle: 'Economics and governance',
    designing: ['GAS staking', 'Node admission', 'Long-term safety model', 'Future foundation'],
    actions: { docs: 'Read Full Docs', github: 'View GitHub', explorer: 'Open Explorer' }
  },
  stack: {
    kicker: 'COMMUNITY-OWNED INFRASTRUCTURE',
    title: 'Not just one DEX, but a full financial system a community can operate itself',
    lead: 'Communities can choose modules, deploy independently, keep their own brand, user relationships, operating rules, and application revenue. The goal is not to create long-term dependency on SAT20 Labs, but to lower the cost of independent buildout.',
    cards: [
      { icon: '⇄', title: 'Community DEX', desc: 'Launchpad, AMM, limit order book, Transcend, plus community-branded trading frontends and backends.', meta: 'TRADING', state: 'Implemented' },
      { icon: '◎', title: 'DAO and community funds', desc: 'Member UID, referral graphs, donations, airdrops, review flows, rankings, and on-chain treasury rules.', meta: 'GOVERNANCE', state: 'Implemented' },
      { icon: 'W', title: 'Wallet and user entry', desc: 'Browser wallet, mobile / PWA wallet, Wallet SDK, and custom community entry surfaces.', meta: 'EXPERIENCE', state: 'Implemented' },
      { icon: 'I', title: 'Indexer and explorer', desc: 'Independent inspection of assets, transactions, channels, contract state, and L1 / L2 evidence.', meta: 'DATA', state: 'Implemented' },
      { icon: 'N', title: 'Nodes and execution environment', desc: 'Run a Mining Node or Core Node to provide block production, contract execution, and STP services.', meta: 'NETWORK', state: 'Expanding' },
      { icon: 'AI', title: 'AI Agent', desc: 'Verify safety state and progressively generate deployment plans for DEX, DAO, indexer, and explorer through conversation.', meta: 'INTERFACE', state: 'Building' }
    ],
    steps: [
      { no: '01', title: 'Describe your needs', desc: 'Explain community, assets, users, governance, and liquidity goals.' },
      { no: '02', title: 'Choose modules', desc: 'Compose nodes, DEX, DAO, wallet, indexer, and explorer.' },
      { no: '03', title: 'Test and verify', desc: 'Complete testnet deployment, contract configuration, and safety checks.' },
      { no: '04', title: 'Operate independently', desc: 'Run infrastructure as your own and expand over time.' }
    ],
    actions: { join: 'Apply as a Community Partner', ecosystem: 'See Existing Ecosystem' }
  },
  open: {
    kicker: 'AN OPEN NETWORK, NOT A CLOSED PLATFORM',
    title: 'Communities should still be able to operate when the protocol team is offline',
    statementTitle: 'The goal is not to make every community depend on SAT20 Labs.',
    statementText: 'A genuinely open network should allow third parties to run nodes, indexers, explorers, wallets, and applications independently; keep protocols, interfaces, and test evidence public; and avoid making user protection permanently depend on a single online operator.',
    statementCta: 'View Protocols and Evidence',
    checks: [
      { icon: '✓', text: 'Third parties can run Mining Nodes, Core Nodes, indexers, and explorers' },
      { icon: '✓', text: 'Wallets, DEXs, DAOs, and agents can be built by different teams' },
      { icon: '✓', text: 'External communities can keep their own brand, rules, and user entry points' },
      { icon: '✓', text: 'Protocol state, versions, and verification paths should remain public and reviewable' },
      { icon: '↗', text: 'Independent node, application, and contributor statistics are being assembled' }
    ]
  },
  path: {
    kicker: 'FROM BITCOIN FACTS TO PROGRAMMABLE EXECUTION',
    title: 'One complete path for assets, control, and execution',
    lead: 'Different layers carry different responsibilities. Trust comes from explicit responsibility boundaries, traceable evidence, and executable failure paths, not from vaguely attributing everything to Bitcoin.',
    layers: [
      { label: '01 · ROOT', title: 'Bitcoin L1', desc: 'Provides UTXOs, asset entry, channel funding, final settlement, and dispute boundaries.', proof: 'Evidence: txid · vout · confirmations' },
      { label: '02 · FACTS', title: 'Indexer', desc: 'Parses BTC L1 transactions, protocol assets, mempool state, confirmations, and reorgs into reviewable facts.', proof: 'Evidence: asset state · protocol events' },
      { label: '03 · CONTROL', title: 'STP', desc: 'Controls cross-layer assets through private channels, commitments, revocation, CSV, force-close, and punishment paths.', proof: 'Evidence: commitments · punish coverage' },
      { label: '04 · EXECUTION', title: 'SatoshiNet', desc: 'Represents multi-asset state in an enhanced UTXO model and hosts template contracts, EVM, DEXs, DAOs, and agent contracts.', proof: 'Evidence: blocks · Result TX · state root' }
    ]
  },
  security: {
    kicker: 'VERIFY, DO NOT ASSUME',
    title: 'Security is not one balance number. It is a set of verifiable exit proofs.',
    quote: 'Users should know where assets are and what they can do if a Core Node goes offline, fails, or behaves maliciously.',
    quoteMeta: 'Asset safety model',
    evidence: [
      'BTC L1 channel point exists and is queryable',
      'Latest commitment is available and commitment height moves monotonically',
      'Client and Core Node balances match commitment state',
      'Punishment coverage exists for revoked old states',
      'Force-close and post-CSV sweep paths can be constructed',
      'High-value operations require explicit wallet authorization'
    ],
    cta: 'Read the Asset Safety Model'
  },
  roles: {
    kicker: 'BUILD, OPERATE, CREATE VALUE',
    title: 'Not slogans, but real services each participant can provide',
    lead: 'Choose your role and understand what you can build, why it is worth joining, and where value comes from.',
    tabs: [
      { key: 'community', label: 'BTC Community' },
      { key: 'developer', label: 'Developer' },
      { key: 'mining', label: 'Mining Node' },
      { key: 'core', label: 'Core Node' },
      { key: 'infra', label: 'Infrastructure' },
      { key: 'liquidity', label: 'Liquidity Partner' }
    ],
    flywheel: [
      { type: 'node', text: 'Communities deploy apps', hot: true }, { type: 'arrow' },
      { type: 'node', text: 'Real transactions' }, { type: 'arrow' },
      { type: 'node', text: 'GAS is consumed', hot: true }, { type: 'arrow' },
      { type: 'node', text: 'Nodes earn fees' }, { type: 'arrow' },
      { type: 'node', text: 'More independent nodes' }, { type: 'arrow' },
      { type: 'node', text: 'More apps and users', hot: true }
    ],
    data: {
      community: { status: 'BUILD & OWN', title: 'BTC Community: own your infrastructure', text: 'Deploy your own DEX, DAO, wallet, indexer, and explorer while keeping your own brand, user relationships, governance rules, and application entry points, all while connecting to shared assets and execution.', benefits: ['Community brand and user entry', 'Application-layer service fees', 'Independent governance and treasury rules', 'Optional shared liquidity'], cta: 'Apply as a Community Partner' },
      developer: { status: 'BUILD APPS', title: 'Developers: build on Bitcoin-native assets', text: 'Use template contracts, the EVM path, Wallet SDK, indexer interfaces, and SatoshiNet-native asset APIs to build trading, payments, DAOs, games, agents, and new financial applications.', benefits: ['EVM and Solidity path', 'Bitcoin-native multi-asset interfaces', 'Client and app revenue', 'Builder grants and ecosystem support'], cta: 'Start Building' },
      mining: { status: 'OPERATE', title: 'Mining Node: provide block production and execution', text: 'Planned GAS staking allows nodes to participate in block production, transaction ordering, and contract execution, earning fees from real network work. Nodes carry online and protocol responsibility.', benefits: ['Real network service fees', 'Participation in an open node network', 'Verifiable operating state', 'No fixed APY promise'], cta: 'Join Node Testing' },
      core: { status: 'STP SERVICE', title: 'Core Node: provide cross-layer channel service', text: 'Core Nodes are expected to take on stronger staking and uptime requirements, run or connect to an L1 indexer, establish STP channels with wallets, and maintain verifiable channel state and safety material.', benefits: ['STP service capability', 'Higher safety responsibility', 'Protocol service fees', 'Transparent staking and slashing rules'], cta: 'Apply to Run a Core Node' },
      infra: { status: 'INFRASTRUCTURE', title: 'Infrastructure teams: make the network more independent and reliable', text: 'Run indexers, explorers, RPC, monitoring, and hosted services independently, and turn public-goods sponsorship, APIs, SLAs, custom indexing, and long-term operations into sustainable service businesses.', benefits: ['API and SLA revenue', 'Hosted and custom services', 'Public infrastructure sponsorship', 'More network decentralization'], cta: 'Run Infrastructure' },
      liquidity: { status: 'MARKET', title: 'Liquidity partners: connect market demand across communities', text: 'Provide liquidity for AMMs, limit books, and community markets. Earn clearly defined application fees while carrying market, contract, and liquidity risk.', benefits: ['AMM and order-book markets', 'Cross-community liquidity routing', 'Application protocol fees', 'Transparent risk instead of return promises'], cta: 'Become a Liquidity Partner' }
    }
  },
  gas: {
    kicker: 'NETWORK RESOURCE & SECURITY ASSET',
    title: 'GAS links network usage, node service, and long-term security',
    lead: 'GAS is a native resource and safety asset for the protocol, not the homepage’s investment headline. Full economic rules still need technical simulation, open discussion, governance design, and legal review.',
    flowTitle: 'Current fee and node paths',
    flowLines: [
      { left: { title: 'Users / contracts', desc: 'Pay transaction and execution GAS' }, right: { title: 'Block-producing nodes', desc: 'Receive all protocol GAS fees' } },
      { left: { title: 'BTC L1 GAS', desc: 'Fixed supply, issued by protocol' }, right: { title: 'Transcend', desc: 'Enters SatoshiNet for usage and staking' } }
    ],
    nodes: [
      { title: 'Mining Node', desc: 'Planned to stake GAS, provide block production, ordering, and execution, and earn actual network fees.' },
      { title: 'Core Node', desc: 'Planned to carry stronger staking and uptime requirements while offering STP and cross-layer coordination.' }
    ],
    rules: [
      { title: 'Fixed supply', desc: 'GAS is planned to originate on BTC L1 and enter SatoshiNet through public Transcend rules.' },
      { title: 'Fees are not burned', desc: 'The current design sends transaction and contract GAS fees entirely to actual block-producing nodes.' },
      { title: 'Service, not fixed yield', desc: 'Node revenue comes from real network work and does not imply fixed APY, price support, or buyback.' },
      { title: 'Not equity', desc: 'GAS does not represent equity, profit rights, or redemption rights in SAT20 Labs or any future foundation.' },
      { title: 'Not finalized', desc: 'Allocation, lockup, staking, slashing, node admission, and future treasury policy should not be described as final until formally released.', warn: true }
    ],
    actions: { test: 'Join Node Testing', docs: 'Read GAS Docs' }
  },
  ai: {
    kicker: 'AI AS AN INTERFACE, NOT A CUSTODIAN',
    title: 'Turn complex protocols into conversational, verifiable, authorized operations',
    lead: 'AI is the interface and automation layer for SatoshiNet, not the custodian. The wallet stores keys and authorization. The agent reads evidence, makes suggestions, and calls tools.',
    cards: [
      { status: 'TESTNET', statusClass: 'test', title: 'Agent Wallet', items: ['Query wallet, channel, and indexer evidence', 'Inspect commitments and punish coverage', 'Initiate actions through a wallet adapter', 'Never store private keys or seed phrases'], cta: 'View Safety Rules', href: 'https://docs.sat20.org/english', external: true, cyan: true },
      { status: 'IN DEVELOPMENT', statusClass: 'dev', title: 'Community Builder Agent', items: ['Gather community build requirements through dialogue', 'Generate DEX / DAO architecture and parameters', 'Produce node, indexer, and explorer configuration', 'Admins confirm and deploy through wallet signatures'], cta: 'Join the First Cohort', href: '#join' },
      { status: 'PLANNED', statusClass: 'plan', title: 'Community Operator Agent', items: ['Treasury and donation reports', 'Airdrop candidate and anomaly analysis', 'DEX liquidity and trading analysis', 'Governance proposal and operations reminders'], cta: 'Submit a Use Case', href: '#join' }
    ]
  },
  support: {
    kicker: 'SUSTAIN OPEN-SOURCE DEVELOPMENT',
    title: 'Long-term protocol development needs transparent, sustainable support',
    copyTitle: 'The protocol team, a future foundation, and GAS must remain clearly separated',
    copy1: 'SatoshiNet is currently being built by the protocol development team. A future independent non-profit foundation is planned to support public protocol work, open-source grants, security audits, ecosystem grants, and transparent governance. Until that exists, the website should not accept funds or imply GAS rights on its behalf.',
    copy2: 'Supporting protocol development is not the same as buying GAS and does not promise access to profits or price upside.',
    items: [
      { title: 'Sponsor public milestones', desc: 'EVM runtime, security audits, Wallet SDK, agents, and developer tooling.' },
      { title: 'Community Stack services', desc: 'Paid deployment, wallet integration, nodes, indexers, explorers, and long-term operations.' },
      { title: 'Grants and donations', desc: 'Support explicit public goods with public scope, budget, deliverables, and progress.' },
      { title: 'Run public infrastructure', desc: 'Directly contribute servers, nodes, indexers, explorers, RPC, or security research.' }
    ],
    actions: { sponsor: 'Sponsor a Milestone', deploy: 'Request Paid Deployment' }
  },
  roadmap: {
    kicker: 'OPEN ROADMAP',
    title: 'Technology, network, ecosystem, and governance move together',
    lead: 'The roadmap is not a price promise or a fixed date chart. Completion should map to public code, docs, transactions, test records, or external deployment.',
    cards: [
      { status: 'NOW', statusClass: 'impl', title: 'Programmable execution and first communities', items: ['EVM runtime and UTXO-native asset interfaces', 'Solidity, ABI, events, and developer tooling', 'Standard Community Stack deployment flow', 'External community DEX / DAO pilots', 'Sustainable protocol development funding paths'] },
      { status: 'NEXT', statusClass: 'test', title: 'Agents, nodes, and shared liquidity', items: ['Community Builder Agent', 'Wallet and community communication paths', 'More independent Mining / Core Nodes', 'Security audits and failure drills', 'Cross-community routing and aggregation'] },
      { status: 'LATER', statusClass: 'plan', title: 'Open governance and multi-team maintenance', items: ['More open node admission', 'Full GAS staking and slashing model', 'Non-profit foundation and treasury policy', 'SIP protocol improvement process', 'Protocol and client maintenance by multiple teams'] }
    ]
  },
  join: {
    kicker: 'JOIN SATOSHINET',
    title: 'SatoshiNet is not a product one team finishes alone. It is an open network built together.',
    lead: 'Bring your community, assets, developer capacity, node resources, liquidity, or public-goods budget. You can run infrastructure independently or build the first deployment together with the protocol team.',
    actions: { contact: 'Contact SAT20 Labs', dev: 'Start Building', wallet: 'Open Wallet', code: 'Contribute Code' }
  },
  footer: {
    brand: 'An open Bitcoin-native execution network where communities build, own, and operate their own financial infrastructure.',
    columns: [
      { title: 'NETWORK', links: [{ label: 'Architecture', href: '#network' }, { label: 'Security Model', href: '#security' }, { label: 'Nodes & GAS', href: '#gas' }, { label: 'Explorer', href: 'https://mempool.sat20.org', external: true }] },
      { title: 'BUILD', links: [{ label: 'Community Stack', href: '#stack' }, { label: 'Builders', href: '#participate' }, { label: 'AI Agent', href: '#ai' }, { label: 'GitHub', href: 'https://github.com/sat20-labs', external: true }] },
      { title: 'CONNECT', links: [{ label: 'Docs', href: 'https://docs.sat20.org/english', external: true }, { label: 'DEX', href: 'https://ordx.market', external: true }, { label: 'Wallet', href: 'https://sat20.org/pwa/?install=1', external: true }, { label: 'X / Twitter', href: 'https://x.com/SAT20Labs', external: true }] }
    ],
    note: 'SAT20 / SatoshiNet remains under active development. Different components may be in Implemented, Testnet, In Development, Design in Progress, Planned, or Experimental states. This page reflects a V3 homepage content prototype and does not constitute an asset sale, investment advice, return promise, or legal opinion. GAS, node staking, any future foundation, and governance rules depend on future formal protocol, legal, and on-chain releases.'
  }
};

const copy = computed(() => (locale.value === 'zh' ? zh : en));
const activeRoleData = computed(() => copy.value.roles.data[activeRole.value]);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
});
</script>

<style scoped>
.homepage {
  --bg:#07090d;--bg2:#0a0d12;--panel:#10151c;--panel2:#141b24;--panel3:#0d1218;
  --text:#f4f7fb;--muted:#9aa8b8;--muted2:#6f7d8d;--line:#25303c;--line2:#344252;
  --orange:#f7931a;--orange2:#ffb04a;--cyan:#57d8cb;--cyan2:#1f7c76;--gold:#f2c66f;
  --green:#8fdfab;--red:#ff8f8f;--max:1180px;--radius:20px;
  background:
    radial-gradient(circle at 78% -12%,rgba(247,147,26,.17),transparent 31%),
    radial-gradient(circle at -8% 30%,rgba(36,147,137,.14),transparent 28%),
    linear-gradient(180deg,var(--bg),var(--bg2) 48%,var(--bg));
  color:var(--text);
}

.wrap{width:min(var(--max),calc(100% - 42px));margin-inline:auto}
.announcement{border-bottom:1px solid rgba(255,255,255,.07);background:#0d1117;color:#cdd5de;font-size:13px}
.announcement .wrap{min-height:38px;display:flex;align-items:center;justify-content:center;gap:10px;text-align:center}
.announcement b{color:var(--orange2)}
.announcement a{color:#fff;text-decoration:underline;text-underline-offset:4px}
.nav{position:sticky;top:0;z-index:60;background:rgba(7,9,13,.84);backdrop-filter:blur(18px);border-bottom:1px solid rgba(255,255,255,.08)}
.navin{height:72px;display:flex;align-items:center;gap:24px}
.logo{display:flex;align-items:center;gap:10px;font-weight:860;letter-spacing:.01em;white-space:nowrap}
.logo-mark{width:30px;height:30px;border-radius:9px;background:linear-gradient(145deg,var(--orange),var(--orange2));display:grid;place-items:center;color:#181006;font-weight:950;box-shadow:0 8px 25px rgba(247,147,26,.25)}
.logo span{color:#dfe6ee}.logo em{font-style:normal;color:var(--orange2)}
.links{margin-left:auto;display:flex;align-items:center;gap:20px;color:#bbc5d0;font-size:13px}
.links a:hover{color:#fff}
.tools{display:flex;align-items:center;gap:9px}
.menu-btn{display:none;border:1px solid var(--line);background:var(--panel);color:#fff;border-radius:11px;padding:9px 11px}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:11px 16px;border-radius:12px;border:1px solid var(--line);font-size:13px;font-weight:760;transition:.2s ease;background:rgba(255,255,255,.018);color:#e9eef4}
.btn:hover{transform:translateY(-1px);border-color:#4a596a;background:rgba(255,255,255,.035)}
.btn.primary{border:0;color:#171006;background:linear-gradient(135deg,var(--orange),var(--orange2));box-shadow:0 12px 35px rgba(247,147,26,.22)}
.btn.cyan{border-color:#28645f;color:#dffdfa;background:rgba(50,181,170,.08)}
.btn.small{padding:8px 12px;border-radius:10px;font-size:12px}
.lang-btn{border:1px solid var(--line);background:var(--panel);color:#cbd4de;border-radius:10px;padding:8px 10px;font-size:12px;font-weight:760;cursor:pointer}
.lang-btn.active{border-color:#765322;background:linear-gradient(135deg,var(--orange),var(--orange2));color:#171006}
.hero{padding:92px 0 76px;position:relative}
.hero:before{content:"";position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:54px 54px;mask-image:linear-gradient(to bottom,black,transparent 75%)}
.hero-grid{position:relative;display:grid;grid-template-columns:1.08fr .92fr;gap:46px;align-items:center}
.eyebrow,.kicker{font-size:11px;font-weight:850;letter-spacing:.18em;text-transform:uppercase;color:var(--orange2)}
.hero h1{font-size:clamp(48px,6.5vw,78px);line-height:1.035;letter-spacing:-.05em;margin:18px 0 23px;max-width:800px}
.hero h1 .accent{color:var(--orange2)}
.hero .lead,.section .lead,.ctabox p{font-size:clamp(17px,1.8vw,20px);color:#b7c1cd;max-width:790px;margin:0}
.actions,.cta-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:30px}
.chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:31px}
.chip,.status{display:inline-flex;align-items:center;gap:7px;border:1px solid var(--line);background:rgba(255,255,255,.018);color:#aab5c1;border-radius:999px;padding:7px 10px;font-size:11px;font-weight:720}
.chip:before{content:"";width:6px;height:6px;border-radius:50%;background:var(--cyan)}
.stack-panel{position:relative;padding:24px;border-radius:26px;border:1px solid #2b3744;background:linear-gradient(145deg,rgba(20,27,36,.94),rgba(10,14,20,.95));box-shadow:0 30px 80px rgba(0,0,0,.38)}
.stack-panel:before{content:"";position:absolute;inset:-1px;border-radius:26px;padding:1px;background:linear-gradient(135deg,rgba(247,147,26,.55),transparent 35%,rgba(87,216,203,.35));-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none}
.panel-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;color:#cbd4de;font-size:12px}
.live-dot{display:inline-flex;gap:7px;align-items:center;color:var(--green)}.live-dot:before{content:"";width:7px;height:7px;border-radius:50%;background:var(--green);box-shadow:0 0 0 5px rgba(143,223,171,.08)}
.flow-stack{display:grid;gap:10px}
.flow-node{position:relative;padding:14px 15px;border:1px solid var(--line);border-radius:14px;background:#111820;display:flex;justify-content:space-between;align-items:center;gap:12px}
.flow-node strong{font-size:14px}.flow-node span{font-size:11px;color:var(--muted)}
.flow-node.orange{border-color:#58401d;background:linear-gradient(90deg,rgba(247,147,26,.09),#111820)}
.flow-node.cyan{border-color:#235e59;background:linear-gradient(90deg,rgba(87,216,203,.08),#111820)}
.connector{height:13px;width:1px;background:linear-gradient(var(--line2),transparent);margin:auto}
.app-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px}
.app-pill{padding:10px 8px;border-radius:11px;border:1px solid var(--line);background:#0c1117;text-align:center;font-size:11px;color:#bcc6d1}
.panel-note{margin-top:16px;padding:12px 14px;border-radius:12px;background:rgba(247,147,26,.065);border:1px solid rgba(247,147,26,.24);color:#d7c3a4;font-size:11px}
.section{padding:88px 0;border-top:1px solid rgba(255,255,255,.065)}
.section.alt{background:rgba(255,255,255,.012)}
.section h2{font-size:clamp(34px,4.5vw,54px);line-height:1.12;letter-spacing:-.04em;margin:11px 0 17px;max-width:920px}
.grid4,.architecture{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:38px}
.stack-grid,.agent-grid,.roadmap{display:grid;grid-template-columns:repeat(3,1fr);gap:15px;margin-top:38px}
.grid2,.open-grid,.economy-grid,.sustain-grid,.security-layout,.status-board{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:38px}
.card{position:relative;padding:24px;border:1px solid var(--line);border-radius:var(--radius);background:linear-gradient(145deg,rgba(255,255,255,.037),rgba(255,255,255,.012));overflow:hidden}
.card:hover{border-color:#3a4858}
.card .num{color:var(--orange2);font-size:11px;font-weight:850;letter-spacing:.12em}
.card h3{font-size:20px;line-height:1.25;margin:10px 0 9px}
.card p{color:var(--muted);font-size:14px;margin:0}
.card .icon{width:38px;height:38px;border-radius:12px;display:grid;place-items:center;background:rgba(247,147,26,.09);border:1px solid rgba(247,147,26,.22);color:var(--orange2);font-weight:900;margin-bottom:17px}
.principle-card{min-height:220px}
.principle-card:after{content:"";position:absolute;width:110px;height:110px;border-radius:50%;right:-50px;bottom:-55px;background:radial-gradient(circle,rgba(247,147,26,.13),transparent 68%)}
.quote-band{margin-top:34px;padding:23px 26px;border-left:3px solid var(--orange);background:linear-gradient(90deg,rgba(247,147,26,.08),transparent);border-radius:0 16px 16px 0;color:#dbe2ea;font-size:20px}
.status-card{padding:25px;border:1px solid var(--line);border-radius:20px;background:var(--panel)}
.status-card h3{margin:10px 0 14px;font-size:21px}
.status.impl{color:var(--green);border-color:#315d41}.status.test{color:var(--cyan);border-color:#285c58}.status.dev{color:var(--orange2);border-color:#65491e}.status.design{color:var(--gold);border-color:#665630}.status.plan{color:#b3b9ff;border-color:#45476e}
.tag-list{display:flex;flex-wrap:wrap;gap:8px}
.tag-list span{font-size:12px;color:#c0cad5;padding:8px 10px;border-radius:10px;background:#171e27;border:1px solid #293544}
.status-side{display:grid;gap:17px}
.stack-card{min-height:216px}
.stack-card .meta{display:flex;justify-content:space-between;align-items:center;font-size:11px;color:var(--muted2);margin-top:20px}
.deploy-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin-top:45px}
.step{position:relative;padding:27px 21px;border-top:1px solid var(--line2)}
.step:before{content:"";position:absolute;top:-5px;left:21px;width:10px;height:10px;border-radius:50%;background:var(--orange);box-shadow:0 0 0 6px rgba(247,147,26,.08)}
.step b{font-size:28px;color:#3d4957}.step h3{font-size:17px;margin:8px 0}.step p{font-size:13px;color:var(--muted);margin:0}
.big-statement{padding:34px;border:1px solid #28504d;border-radius:24px;background:radial-gradient(circle at 90% 0,rgba(87,216,203,.12),transparent 35%),linear-gradient(145deg,#10191b,#10151c)}
.big-statement h3{font-size:30px;line-height:1.2;margin:0 0 16px;letter-spacing:-.03em}.big-statement p{color:#aebbc7}
.check-list,.economy-rules{display:grid;gap:10px}
.check{display:flex;gap:12px;padding:15px 16px;border-radius:14px;border:1px solid var(--line);background:var(--panel)}
.check i{font-style:normal;color:var(--cyan);font-weight:900}.check span{font-size:13px;color:#c1cad4}
.layer{padding:24px;border-radius:20px;border:1px solid var(--line);background:var(--panel);min-height:245px}
.layer .label{font-size:10px;color:var(--orange2);font-weight:850;letter-spacing:.14em}.layer h3{font-size:21px;margin:10px 0}.layer p{font-size:13px;color:var(--muted)}
.layer .proof{margin-top:20px;padding-top:13px;border-top:1px solid var(--line);font-size:11px;color:#7f8e9f}
.security-quote{padding:35px;border:1px solid #2b5b56;border-radius:24px;background:linear-gradient(135deg,#101b1d,#10151c);font-size:25px;line-height:1.38;letter-spacing:-.02em}
.security-quote small{display:block;font-size:12px;color:var(--cyan);margin-top:20px;letter-spacing:.08em;text-transform:uppercase}
.evidence{padding:24px;border:1px solid var(--line);border-radius:24px;background:var(--panel)}
.evidence-row{display:grid;grid-template-columns:22px 1fr;gap:10px;padding:11px 0;border-bottom:1px solid var(--line);font-size:13px;color:#c5ced8}.evidence-row:last-child{border-bottom:0}.evidence-row b{color:var(--green)}
.role-tabs{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:17px}
.role-tab{cursor:pointer;border:1px solid var(--line);background:var(--panel);color:#aeb9c5;border-radius:999px;padding:9px 13px;font-size:12px;font-weight:750}
.role-tab.active{border-color:#765322;color:#171006;background:linear-gradient(135deg,var(--orange),var(--orange2))}
.role-panel{display:grid;grid-template-columns:.82fr 1.18fr;gap:20px;padding:29px;border:1px solid var(--line);border-radius:24px;background:linear-gradient(145deg,#111820,#0d1218)}
.role-panel h3{font-size:29px;margin:0 0 11px}.role-panel p{color:var(--muted)}
.role-benefits{display:grid;grid-template-columns:1fr 1fr;gap:10px}.role-benefit{padding:14px;border-radius:13px;border:1px solid var(--line);background:#11171e;font-size:12px;color:#c1cbd5}
.flywheel{margin-top:38px;padding:28px;border:1px solid var(--line);border-radius:24px;background:var(--panel3);overflow:auto}
.flywheel-row{min-width:920px;display:grid;grid-template-columns:repeat(11,1fr);align-items:center;gap:9px;text-align:center}.wheel-node{padding:15px 10px;border-radius:13px;border:1px solid var(--line);background:#141b23;font-size:12px;font-weight:750}.wheel-arrow{color:#586677;font-size:20px}.wheel-node.hot{border-color:#64491f;background:rgba(247,147,26,.07)}
.economy-flow{padding:28px;border-radius:24px;border:1px solid #5a461f;background:radial-gradient(circle at 90% 0,rgba(242,198,111,.13),transparent 35%),var(--panel)}
.economy-flow h3{font-size:25px;margin:0 0 20px}.fee-line{display:grid;grid-template-columns:1fr 28px 1fr;gap:10px;align-items:center;margin:12px 0}.fee-box{padding:15px;border:1px solid var(--line);border-radius:13px;background:#111820;font-size:12px}.fee-arrow{text-align:center;color:var(--gold)}
.node-cards{display:grid;grid-template-columns:1fr 1fr;gap:13px;margin-top:17px}.node-card{padding:17px;border-radius:15px;border:1px solid var(--line);background:#0e141b}.node-card h4{margin:0 0 7px}.node-card p{font-size:12px;color:var(--muted);margin:0}
.rule{padding:16px 17px;border:1px solid var(--line);border-radius:14px;background:var(--panel);font-size:13px;color:#c4cdd7}.rule strong{display:block;color:#fff;margin-bottom:4px}.rule.warn{border-color:#665630;background:rgba(242,198,111,.055)}
.agent-card{min-height:270px}.agent-card ul,.road-card ul{padding-left:18px;color:var(--muted);font-size:13px}.agent-card li,.road-card li{margin-bottom:7px}
.sustain-grid{grid-template-columns:.9fr 1.1fr}
.sustain-copy{padding:32px;border:1px solid #544322;border-radius:24px;background:radial-gradient(circle at 0 100%,rgba(247,147,26,.10),transparent 35%),var(--panel)}.sustain-copy h3{font-size:28px;margin:0 0 14px}.sustain-copy p{color:var(--muted)}
.sponsor-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.sponsor{padding:17px;border-radius:14px;border:1px solid var(--line);background:var(--panel)}.sponsor h4{margin:0 0 5px}.sponsor p{font-size:12px;color:var(--muted);margin:0}
.road-card{min-height:330px}.road-card h3{font-size:23px}
.cta{padding:92px 0}
.ctabox{position:relative;padding:55px;border-radius:28px;border:1px solid #654b20;background:radial-gradient(circle at 92% 0,rgba(247,147,26,.25),transparent 35%),radial-gradient(circle at 0 100%,rgba(87,216,203,.10),transparent 31%),linear-gradient(145deg,#16130f,#10161d);overflow:hidden}
.ctabox h2{font-size:clamp(38px,5vw,62px);line-height:1.06;letter-spacing:-.045em;max-width:900px;margin:10px 0 18px}
.footer{padding:48px 0 35px;border-top:1px solid var(--line);background:#080b0f}.foot-top{display:grid;grid-template-columns:1.3fr repeat(3,.7fr);gap:30px}.foot-title{font-size:12px;color:#d7dee6;font-weight:800;margin-bottom:11px}.foot-links{display:grid;gap:7px;color:var(--muted);font-size:12px}.foot-links a:hover{color:#fff}.foot-note{margin-top:34px;padding-top:22px;border-top:1px solid var(--line);color:#697787;font-size:11px;max-width:1000px}
.foot-brand{color:var(--muted);font-size:13px;max-width:360px;margin-top:12px}
.reveal{opacity:0;transform:translateY(16px);transition:opacity .6s ease,transform .6s ease}.reveal.visible{opacity:1;transform:none}

@media(max-width:1020px){
  .links{display:none}
  .tools{margin-left:auto}
  .menu-btn{display:inline-flex}
  .hero-grid,.status-board,.open-grid,.security-layout,.economy-grid,.sustain-grid{grid-template-columns:1fr}
  .hero-grid{gap:36px}.grid4,.architecture{grid-template-columns:1fr 1fr}.stack-grid,.agent-grid,.roadmap{grid-template-columns:1fr 1fr}.role-panel{grid-template-columns:1fr}.foot-top{grid-template-columns:1fr 1fr}.stack-panel{max-width:700px}
  .nav.open .links{display:flex;position:absolute;left:21px;right:21px;top:72px;flex-direction:column;align-items:stretch;gap:0;padding:12px;border:1px solid var(--line);border-radius:16px;background:#0d1218}
  .nav.open .links a{padding:11px 12px;border-bottom:1px solid var(--line)}
  .nav.open .links a:last-child{border:0}
}

@media(max-width:700px){
  .wrap{width:min(var(--max),calc(100% - 24px))}
  .announcement .wrap{padding:8px 0}
  .tools .docs-btn{display:none}
  .hero{padding:68px 0 58px}
  .hero h1{font-size:43px}
  .grid4,.stack-grid,.architecture,.agent-grid,.roadmap,.node-cards,.sponsor-grid,.role-benefits{grid-template-columns:1fr}
  .deploy-steps{grid-template-columns:1fr 1fr}
  .section{padding:68px 0}
  .section h2{font-size:36px}
  .ctabox{padding:35px 24px}
  .foot-top{grid-template-columns:1fr}
  .stack-panel{padding:18px}
  .app-grid{grid-template-columns:1fr 1fr}
  .status-card{padding:21px}
  .role-panel{padding:22px}
}

@media(max-width:460px){
  .deploy-steps{grid-template-columns:1fr}
  .logo>span:not(.logo-mark){display:none}
  .btn{width:100%}
  .actions .btn,.cta-actions .btn{width:100%}
  .menu-btn{width:auto}
  .tools .primary{display:none}
}
</style>
