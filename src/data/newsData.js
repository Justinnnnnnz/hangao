export const newsTabs = {
  zh: [
    { key: 'all', label: '全部' },
    { key: 'company', label: '公司新闻' },
    { key: 'industry', label: '行业动态' },
    { key: 'tech', label: '技术分享' },
  ],
  en: [
    { key: 'all', label: 'All' },
    { key: 'company', label: 'Company News' },
    { key: 'industry', label: 'Industry Updates' },
    { key: 'tech', label: 'Technical Insight' },
  ],
};

export const newsPageCopy = {
  zh: {
    title: '新闻动态',
    subtitle: '了解杭奥最新动态 · 关注行业前沿资讯',
    readMore: '阅读全文',
    backToList: '返回新闻列表',
    referencesTitle: '参考资料',
  },
  en: {
    title: 'News',
    subtitle: 'Latest updates from Hangao and selected industry information',
    readMore: 'Read More',
    backToList: 'Back to News',
    referencesTitle: 'References',
  },
};

export const newsData = {
  zh: [
    {
      id: 1,
      slug: 'pressure-gauge-verification-traceability',
      category: '技术分享',
      tag: 'tech',
      title: '压力表检定中的量值溯源、校准周期与现场使用控制',
      date: '2025-03-28',
      summary:
        '压力表检定不仅是读数核对，更关系到量值溯源链、环境稳定性、量程选取以及在役仪表漂移控制。本文结合 NIST 压力校准服务信息，梳理压力表检定中最容易被忽视的几个关键点。',
      content: [
        '从计量视角看，压力表检定首先要解决的是“测量值能否追溯到稳定标准”的问题。NIST 的压力/真空校准项目表明，压力标准和传递标准覆盖从低压到高压的宽范围，重点在于控制不确定度并维持国家基准的一致性。对企业而言，这意味着现场工作压力表、工艺控制表和标准表之间不能只看“是否能对上”，还要看校准链是否清晰、标准器是否在有效期内以及使用条件是否匹配。',
        '第二个关键问题是校准周期。很多单位习惯按年度统一送检，但实际更合理的做法应当结合使用频率、介质工况、振动冲击、超压记录以及历史漂移数据分级管理。高频使用、长期受脉动压力影响、安装位置温度波动较大的仪表，往往需要比普通工况更短的复检周期。对于安全联锁、限压保护和关键工艺控制点上的压力表，还应建立失准后的应急替换机制。',
        '第三个关键问题是现场使用控制。量程选择过大，会使正常工况落在刻度低段，降低分辨力；量程选择过小，又容易因瞬时超压造成弹性元件永久变形。实际应用中，应同步核查安装位置、缓冲装置、引压管状态、隔离膜片或冷凝圈配置，以及是否存在介质堵塞、脉冲和温漂影响。检定合格只是开始，后续的在役状态管理同样重要。',
      ],
      highlights: [
        '校准的核心不是“能读数”，而是量值可追溯、结果有明确不确定度边界。',
        '检定周期应基于风险和历史漂移数据分级确定，不能一刀切。',
        '现场安装、量程选择和脉动压力控制，直接影响压力表后续稳定性。',
      ],
      references: [
        {
          label: 'NIST Pressure/Vacuum Calibrations',
          url: 'https://www.nist.gov/programs-projects/pressurevacuum-calibrations',
        },
        {
          label: 'NIST Optomechanical Pressure Sensing',
          url: 'https://www.nist.gov/programs-projects/optomechanical-pressure-sensing',
        },
      ],
    },
    {
      id: 2,
      slug: 'scba-cylinder-service-life-requalification',
      category: '技术分享',
      tag: 'tech',
      title: '呼吸器复合气瓶的使用寿命、复检周期与报废判断要点',
      date: '2025-02-16',
      summary:
        '呼吸器复合气瓶在轻量化方面优势明显，但使用寿命和复检周期必须严格受控。本文结合 Luxfer 官方资料，整理 15 年寿命、5 年复检和特殊许可延寿场景下的管理要点。',
      content: [
        '复合气瓶在消防、工业抢险和受限空间作业中应用广泛，其最大优势是同等容量下显著减轻重量。Luxfer 的 SCBA 碳纤维复合气瓶资料明确指出，标准碳纤维全缠绕型号通常采用 5 年复检周期，常规服务寿命为 15 年。这意味着企业在建账时不能只记录采购日期，更要单独记录制造日期、上次复检日期和下次强制复检日期。',
        '第二个容易忽视的问题是“15 年”并不等于所有复合气瓶都可一概延长使用。Luxfer 对部分 30 年寿命型号和 DOT 特别许可项目给出了更严格的条件，包括抽样、阶段测试和特殊许可管理要求。也就是说，延寿不是靠现场经验判断，而是必须建立在原制造设计、监管许可和规定测试的基础上。对普通在役复合气瓶而言，超设计寿命继续使用会显著放大风险。',
        '在现场管理层面，呼吸器气瓶除了按周期送检，还要关注瓶体表面割伤、纤维裸露、鼓包、热损伤、接口螺纹状态及阀门匹配情况。尤其是在频繁装卸、运输摩擦和高温暴露场景下，外观异常往往先于性能异常出现。检验记录、追溯标签和使用台账三者必须一致，否则后续复检和报废决策很容易失控。',
      ],
      highlights: [
        '标准碳纤维复合 SCBA 气瓶常见规则是 5 年复检、15 年寿命。',
        '延寿必须依赖制造商设计和监管许可，不能用经验代替。',
        '外观损伤、标签追溯和阀门匹配情况是日常检查重点。',
      ],
      references: [
        {
          label: 'Luxfer LCX Carbon Composite SCBA Cylinders',
          url: 'https://www.luxfercylinders.com/product/lcx-composite-scba-cylinders/',
        },
        {
          label: 'Luxfer LCX-30Y Carbon Composite SCBA Cylinders',
          url: 'https://www.luxfercylinders.com/product/lcx-30y-carbon-composite-scba-cylinders/',
        },
        {
          label: 'Luxfer 30 Year Life Carbon Cylinder Requalification',
          url: 'https://www.luxfercylinders.com/support-item/sp14232/',
        },
      ],
    },
    {
      id: 3,
      slug: 'written-scheme-of-examination-pressure-systems',
      category: '技术分享',
      tag: 'tech',
      title: '压力系统书面检验方案（WSE）应当覆盖什么，不能替代什么',
      date: '2025-01-12',
      summary:
        '书面检验方案不是例行维护台账，也不是简单复制模板。本文依据英国 HSE 对压力系统 WSE 的说明，梳理其覆盖对象、频次设定和与日常维护之间的边界。',
      content: [
        'HSE 关于压力系统书面检验方案的公开指南反复强调，在压力系统投入运行前，应当建立适用的书面检验方案，并按方案实施法定检查。方案至少要覆盖保护装置、压力容器，以及一旦失效会造成危险的管道和附属部件。对企业来说，这意味着方案不能只写“容器本体”，还应关注安全阀、压力表、联锁保护和关键连接段。',
        'WSE 的核心价值在于把“检查什么、多久检查一次、用什么方法检查、检查前需要哪些隔离和准备措施”提前明确下来。它的编制逻辑应基于工作介质、设计边界、历史失效机制、腐蚀环境和运行工况，而不是照搬其他装置模板。对高温、脉动载荷、腐蚀性介质或频繁启停系统，检验频次和项目通常都要更保守。',
        '尤其需要强调的是，HSE 明确指出：按书面检验方案执行的法定检查，不是日常维护的替代品。企业仍然需要做好例行巡检、泄漏点排查、仪表校验、阀门维护和异常工况记录。把 WSE 当成“只要做了这次检查，平时维护就可以放松”的理解，本身就是典型管理误区。',
      ],
      highlights: [
        'WSE 必须在符合要求的压力系统投入运行前建立。',
        '方案范围不仅包括容器，还包括保护装置及危险失效段管道。',
        '法定检查不能替代例行维护，二者职责边界必须清楚。',
      ],
      references: [
        {
          label: 'HSE Written schemes of examination',
          url: 'https://www.hse.gov.uk/pubns/indg178.htm',
        },
        {
          label: 'HSE Introduction to pressure equipment',
          url: 'https://www.hse.gov.uk/pressure-systems/about.htm',
        },
        {
          label: 'HSE Pressure Systems Safety Regulations 2000',
          url: 'https://www.hse.gov.uk/pressure-systems/pssr.htm',
        },
      ],
    },
    {
      id: 4,
      slug: 'safety-valve-set-pressure-overpressure-blowdown',
      category: '技术分享',
      tag: 'tech',
      title: '安全阀整定压力、超压、回座压差与背压的现场理解',
      date: '2024-11-18',
      summary:
        '安全阀的校验不应只盯“起跳压力”，还要同时理解超压、回座压差、密封性和背压影响。本文结合 Spirax Sarco 与 LESER 官方资料，梳理现场最常见的几个概念混淆。',
      content: [
        '在安全阀现场校验中，最常见的误区是把整定压力当成唯一指标。Spirax Sarco 的安全阀教程指出，安全阀的本质任务是防止系统内部压力超过允许边界，因此不仅要看阀门何时开始开启，还要看其是否具备足够排放能力，使受保护设备内部压力不超过允许累积压力。换句话说，“起跳了”并不自动等于“保护能力就够了”。',
        '第二个容易混淆的概念是超压和回座压差。Spirax 的资料说明，安全阀从初始开启到达到额定排量之间通常需要一个额外压力升高，这就是超压；而 LESER 对 blowdown 的定义则强调，阀门从整定压力回落到重新密封的这段差值，就是回座压差。现场判读校验结果时，如果只记下开启点而不关注回座过程，往往会遗漏密封面损伤、阀瓣动作迟滞或背压影响等问题。',
        '第三个关键点是安装和工况条件。安全阀前后的管道布置、背压变化、排放介质状态以及振动与污染物，都会影响阀门密封性和重复动作稳定性。对 LNG、蒸汽或压缩气体系统而言，整定校验、密封试验和在役巡检应看成一个整体，而不是孤立执行的三个动作。',
      ],
      highlights: [
        '安全阀校验不仅看起跳点，还要看排量能力和回座行为。',
        '超压与回座压差是两个不同概念，现场记录不能混用。',
        '背压、管道布置和介质状态会直接影响动作稳定性和密封性。',
      ],
      references: [
        {
          label: 'Spirax Sarco Safety Valves',
          url: 'https://www.spiraxsarco.com/learn-about-steam/safety-valves/safety-valves',
        },
        {
          label: 'Spirax Sarco Safety Valve Installation',
          url: 'https://www.spiraxsarco.com/learn-about-steam/safety-valves/safety-valve-installation',
        },
        {
          label: 'LESER Spring Loaded Safety Valve Tutorial',
          url: 'https://cms2.leser.com/en/support-and-tools/safety-valve-tutorial/spring-loaded-safety-valve-1/',
        },
      ],
    },
    {
      id: 5,
      slug: 'pressure-vessel-common-defects-periodic-inspection',
      category: '技术分享',
      tag: 'tech',
      title: '压力容器定期检验中常见缺陷、失效机理与处置边界',
      date: '2024-09-06',
      summary:
        '压力容器的常见缺陷并不只包括“腐蚀减薄”，还涉及焊缝几何、疲劳、过热、脆性断裂和蠕变等多类机制。本文结合 HSE 关于压力设备失效模式与焊接失效案例研究，整理定期检验的关注重点。',
      content: [
        'HSE 关于压力设备设计和失效模式的资料指出，压力容器面临的风险不止来自单一腐蚀，还包括过压、过热、机械与热疲劳、脆性断裂、蠕变以及制造与装配缺陷等。实际定期检验中，如果只关注壁厚减薄而忽略焊缝几何不良、局部应力集中和低温脆化风险，就很容易在“表面看起来正常”的设备上漏掉真正高风险问题。',
        'HSE 对历史焊接失效案例的研究还进一步表明，安全关键焊缝问题往往与缺陷本身和管理缺陷同时存在。常见的质量问题包括裂纹类缺陷、体积型缺陷、焊缝尺寸不足，以及检测覆盖率不足、焊工监督不到位和制造可焊性考虑不足等。对定期检验而言，容器焊缝的外观复核、历史返修记录审查、既往 NDT 数据对比和重点部位复查，应当作为一套组合动作，而不是彼此割裂。',
        '在处置边界上，检验发现缺陷后不能简单用“能用先用”处理。应根据缺陷类型、尺寸、位置、介质危险性、运行温度和剩余寿命评估结果，决定是继续监测、限期修复还是立即停用。对低温工况、交变载荷或含腐蚀介质设备，缺陷处置必须更加保守。',
      ],
      highlights: [
        '压力容器风险不止是腐蚀减薄，还包括疲劳、脆断、蠕变和焊接质量问题。',
        '焊缝缺陷与管理缺陷常常同时出现，历史数据复核很重要。',
        '缺陷处置应结合位置、尺寸、介质和剩余寿命综合判断。',
      ],
      references: [
        {
          label: 'HSE Design Codes - Plant Failure Modes',
          url: 'https://www.hse.gov.uk/comah/sragtech/techmeasplant.htm',
        },
        {
          label: 'HSE RR1215 When welding goes wrong',
          url: 'https://www.hse.gov.uk/Research/rrhtm/rr1215.htm',
        },
        {
          label: 'HSE Introduction to pressure equipment',
          url: 'https://www.hse.gov.uk/pressure-systems/about.htm',
        },
      ],
    },
    {
      id: 6,
      slug: 'tofd-weld-inspection-pressure-piping',
      category: '技术分享',
      tag: 'tech',
      title: 'TOFD 检测技术在压力管道焊缝检测中的应用边界与优势',
      date: '2024-07-22',
      summary:
        'TOFD 在焊缝高度定量方面优势明显，但并非对所有区域都单独适用。本文结合 TWI 与 Evident 的公开资料，总结其在压力管道焊缝检测中的适用场景和组合检测思路。',
      content: [
        'TWI 关于 TOFD 的技术资料指出，这项技术最初在 20 世纪 70 年代为英国核工业发展，用于更准确地测量平面型缺陷高度。它的核心优势不在于“替代一切超声”，而在于对裂纹、未熔合等埋藏型平面缺陷的高度评定通常更准确，因此特别适合用于焊缝完整性评价。',
        'Evident 的 TOFD 应用资料则进一步说明，在焊缝根部腐蚀、冲蚀以及热影响区金属损失场景中，TOFD 对复杂轮廓测量有明显价值，因为常规脉冲反射法在几何形状复杂或残余厚度不规则时会变得更难解释。对压力管道检验来说，这意味着 TOFD 很适合作为焊缝快速筛查和定量评估工具，尤其适合长焊缝和记录化扫描场景。',
        '但现场应用也要认识到 TOFD 的边界。Evident 和 TWI 都强调，TOFD 常与脉冲回波或相控阵配合使用，以覆盖根部、盖面和定位信息不足等问题。换言之，TOFD 的工程价值更多来自“组合检测方案”，而不是把它孤立地当作万能技术。工艺选择时应根据壁厚、焊缝形式、可达性和验收标准综合确定。',
      ],
      highlights: [
        'TOFD 的强项是埋藏型平面缺陷的高度定量。',
        '在焊根腐蚀、冲蚀和复杂轮廓场景下，TOFD 具有明显优势。',
        'TOFD 常需与脉冲回波或相控阵配合，形成组合检测方案。',
      ],
      references: [
        {
          label: 'TWI Structural Integrity with TOFD Ultrasonic Inspection',
          url: 'https://www.twi-global.com/technical-knowledge/published-papers/structural-integrity-with-time-of-flight-diffraction-tofd-ultrasonic-inspection-july-2005',
        },
        {
          label: 'Evident Introduction to TOFD for Weld Inspection',
          url: 'https://ims.evidentscientific.com/en/applications/introduction-to-time-of-flight-diffraction-for-weld-inspection/',
        },
        {
          label: 'Evident TOFD for Weld Root Corrosion and Erosion',
          url: 'https://ims.evidentscientific.com/en/applications/tofd-for-weld-root-corrosion-and-erosion',
        },
      ],
    },
    {
      id: 7,
      slug: 'gas-cylinder-traceability-review-meeting',
      category: '公司新闻',
      tag: 'company',
      title: '路北区市场监督管理局气瓶质量安全追溯体系建设“回头看”工作会在我公司召开并圆满结束',
      date: '2021-04-29',
      summary:
        '为贯彻落实路北区市场监督管理局气瓶质量安全追溯体系建设，积极推进气瓶质量安全工作，4月29日上午召开路北区市场监督管理局气瓶质量安全追溯体系建设“回头看”工作会。',
      content: [
        '路北区何局长与张科长就我区气瓶质量安全有关要求、排查整治工作开展情况、目前存在的问题和下一步安排做了系统总结，并提出了具体工作要求。',
        '会议指出：以全面落实气瓶充装单位、检测单位追溯管理责任为基础，以提升气瓶质量安全与公共安全为目标，统一追溯标注，强化全市不同信息化充装管理和检验管理系统信息互动共享，提高监管效能，实现全市气瓶来源可查、流向可追、责任可究。',
        '我公司贯彻落实会议精神，加强工作管理，切实落实唐山市气瓶质量安全追溯体系建设“回头看”工作的会议精神，为客户提供更系统、更安全、更优质的服务。',
      ],
    },
    {
      id: 8,
      slug: 'qualification-renewal-review',
      category: '公司新闻',
      tag: 'company',
      title: '杭奥检测顺利通过特种设备检验检测机构核准换证审查',
      date: '2024-01-15',
      summary:
        '近日，国家市场监督管理总局特种设备检验检测机构核准审查组对我公司进行了换证审查。经过文件审查、现场考核和人员考试等环节，我公司顺利通过审查。',
      content: [
        '本次审查围绕质量管理体系运行、人员持证能力、设备配置、原始记录管理和报告出具流程等关键环节开展。',
        '审查组对我公司在检验检测程序控制、岗位职责落实和技术档案管理方面的规范化工作给予了肯定。',
        '后续公司将继续完善质量体系和技术能力建设，保持检验检测工作的稳定性、规范性和可追溯性。',
      ],
    },
    {
      id: 9,
      slug: 'samr-updated-special-equipment-measures',
      category: '行业动态',
      tag: 'industry',
      title: '市场监管总局发布新版《特种设备安全监督检查办法》',
      date: '2024-01-08',
      summary:
        '市场监管总局发布新版特种设备安全监督检查办法，对使用登记、定期检验、日常维护保养和监督检查程序提出了更明确要求。',
      content: [
        '新版办法进一步强化了设备使用单位主体责任、维护保养要求以及监督检查闭环处置流程。',
        '对检验检测机构而言，这意味着检验记录、风险提示和整改跟踪要更加规范，信息传递也要更加及时。',
        '对于企业用户，及时完成定期检验、建立设备台账和落实日常点检，仍是降低风险的基础工作。',
      ],
    },
    {
      id: 10,
      slug: 'special-equipment-safety-training-2023',
      category: '公司新闻',
      tag: 'company',
      title: '我公司成功举办2023年度特种设备安全技术培训',
      date: '2023-12-20',
      summary:
        '为提升企业特种设备安全管理水平，我公司成功举办了为期三天的特种设备安全技术培训班，来自唐山及周边地区多家企业的安全管理人员参加了此次培训。',
      content: [
        '培训围绕气瓶安全管理、安全阀校验要求、压力表检定、设备日常巡检以及常见风险识别等主题展开。',
        '参训人员结合各自行业场景，就检验周期、运行台账、异常处置和第三方检测衔接等问题进行了交流。',
        '公司后续将持续开展面向企业用户的一线安全培训与技术交流活动，帮助客户提升设备管理水平。',
      ],
    },
  ],
  en: [
    {
      id: 1,
      slug: 'pressure-gauge-verification-traceability',
      category: 'Technical Insight',
      tag: 'tech',
      title: 'Pressure Gauge Verification: Traceability, Calibration Intervals and Field Control',
      date: '2025-03-28',
      summary:
        'Pressure gauge verification is not only about comparing readings. It also depends on traceability, environmental stability, range selection and drift control in service. This article summarizes the key issues with reference to official NIST calibration information.',
      content: [
        'From a metrology perspective, the first question in pressure gauge verification is whether the measurement result can be traced back to a stable and recognized standard. NIST’s pressure and vacuum calibration program shows that national standards and transfer standards cover a very wide pressure range while placing strong emphasis on uncertainty control and consistency. For industrial users, this means that field gauges, process gauges and shop standards should not only “match,” but should also be linked by a clear calibration chain.',
        'The second issue is calibration interval. Many plants still apply a uniform annual interval, but a more defensible approach is to grade instruments by risk, usage frequency, pressure pulsation, temperature variation and historical drift. Instruments used at critical control points or for protective functions usually deserve a shorter interval than general-purpose indicators.',
        'The third issue is field application control. Oversized ranges reduce effective resolution in the normal operating band, while undersized ranges increase the likelihood of permanent deformation after pressure spikes. Good verification practice therefore also includes reviewing installation position, snubbers, impulse lines, isolation devices and evidence of blockage, pulsation or thermal drift. A gauge passing verification today still needs proper in-service management tomorrow.',
      ],
      highlights: [
        'Calibration is about traceable measurement, not just matching readings.',
        'Intervals should be risk-based rather than fixed by habit.',
        'Range selection, installation and pulsation control strongly affect long-term stability.',
      ],
      references: [
        {
          label: 'NIST Pressure/Vacuum Calibrations',
          url: 'https://www.nist.gov/programs-projects/pressurevacuum-calibrations',
        },
        {
          label: 'NIST Optomechanical Pressure Sensing',
          url: 'https://www.nist.gov/programs-projects/optomechanical-pressure-sensing',
        },
      ],
    },
    {
      id: 2,
      slug: 'scba-cylinder-service-life-requalification',
      category: 'Technical Insight',
      tag: 'tech',
      title: 'SCBA Composite Cylinders: Service Life, Requalification and Retirement Control',
      date: '2025-02-16',
      summary:
        'Composite SCBA cylinders provide major weight savings, but their service life and requalification cycle must be tightly controlled. This article summarizes key management points based on official Luxfer information.',
      content: [
        'Composite cylinders are widely used in firefighting, emergency response and industrial breathing apparatus because they significantly reduce weight. Official Luxfer product information indicates that common carbon-wrapped SCBA cylinders typically follow a five-year requalification interval and a standard 15-year service life. In practice, asset management should therefore record not only the purchase date, but also the manufacturing date, the most recent requalification date and the next mandatory due date.',
        'A frequent misunderstanding is that every composite cylinder can simply be used beyond 15 years. Luxfer’s information on 30-year service-life products and special-permit programs shows that life extension depends on the original design, regulatory approval and additional mandated testing. In other words, service-life extension is a controlled engineering decision, not a field judgment.',
        'Day-to-day inspection should also focus on surface cuts, exposed fiber, bulging, heat damage, thread condition and valve compatibility. In many cases, external damage or traceability problems appear before obvious performance issues. Cylinder labels, requalification records and equipment ledgers must stay aligned if retirement decisions are to remain under control.',
      ],
      highlights: [
        'Typical carbon-wrapped SCBA cylinders follow a 5-year requalification cycle and 15-year life.',
        'Life extension depends on design approval and regulated testing, not habit.',
        'Surface condition, traceability and valve compatibility are key field checks.',
      ],
      references: [
        {
          label: 'Luxfer LCX Carbon Composite SCBA Cylinders',
          url: 'https://www.luxfercylinders.com/product/lcx-composite-scba-cylinders/',
        },
        {
          label: 'Luxfer LCX-30Y Carbon Composite SCBA Cylinders',
          url: 'https://www.luxfercylinders.com/product/lcx-30y-carbon-composite-scba-cylinders/',
        },
        {
          label: 'Luxfer 30 Year Life Carbon Cylinder Requalification',
          url: 'https://www.luxfercylinders.com/support-item/sp14232/',
        },
      ],
    },
    {
      id: 3,
      slug: 'written-scheme-of-examination-pressure-systems',
      category: 'Technical Insight',
      tag: 'tech',
      title: 'What a Written Scheme of Examination Should Cover for Pressure Systems',
      date: '2025-01-12',
      summary:
        'A written scheme of examination is not a routine maintenance checklist. Based on HSE guidance, this article explains what it should cover, how frequency should be determined and why it cannot replace day-to-day maintenance.',
      content: [
        'HSE guidance on written schemes of examination stresses that an appropriate scheme must be in place before a pressure system is operated and that examinations must be carried out in accordance with it. The scheme should cover protective devices, pressure vessels and any sections of pipework whose failure could be dangerous. For operators, this means the scope should not stop at the vessel shell alone.',
        'The real value of a written scheme is that it defines in advance what should be examined, how often, by which method and under what preparation conditions. Its logic should be based on fluid characteristics, safe operating limits, historical damage mechanisms and service conditions, rather than copied from another plant.',
        'HSE also makes clear that a statutory examination performed under a written scheme is not a substitute for routine maintenance. Users still need routine inspection, leak checks, gauge verification, valve maintenance and incident recording. Treating the written scheme as a replacement for everyday maintenance is a management error.',
      ],
      highlights: [
        'A suitable written scheme should exist before operation of most qualifying systems.',
        'The scope includes protective devices and dangerous failure sections, not only vessels.',
        'Statutory examination and routine maintenance serve different purposes.',
      ],
      references: [
        {
          label: 'HSE Written schemes of examination',
          url: 'https://www.hse.gov.uk/pubns/indg178.htm',
        },
        {
          label: 'HSE Introduction to pressure equipment',
          url: 'https://www.hse.gov.uk/pressure-systems/about.htm',
        },
        {
          label: 'HSE Pressure Systems Safety Regulations 2000',
          url: 'https://www.hse.gov.uk/pressure-systems/pssr.htm',
        },
      ],
    },
    {
      id: 4,
      slug: 'safety-valve-set-pressure-overpressure-blowdown',
      category: 'Technical Insight',
      tag: 'tech',
      title: 'Set Pressure, Overpressure, Blowdown and Backpressure in Safety Valve Work',
      date: '2024-11-18',
      summary:
        'Safety valve work should not focus only on the opening point. This article uses official Spirax Sarco and LESER information to summarize the field meaning of set pressure, overpressure, blowdown and installation effects.',
      content: [
        'In field verification work, one of the most common misunderstandings is to treat set pressure as the only key indicator. Spirax Sarco explains that the function of a safety valve is to prevent pressure within protected equipment from rising above acceptable limits. This means that it is not enough to see the valve start to lift; the valve must also provide enough relieving capacity for the actual fault condition.',
        'Another common source of confusion is the difference between overpressure and blowdown. Spirax explains that a further rise above set pressure is usually required before a safety valve reaches rated discharge. LESER defines blowdown as the difference between set pressure and reseating pressure, usually expressed as a percentage of set pressure. In practical calibration work, recording only the opening point and ignoring reseating behavior can conceal instability, seat damage or backpressure effects.',
        'Installation and operating conditions also matter. Inlet losses, discharge backpressure, fluid state, contamination and vibration all affect repeatability and seat tightness. For LNG, steam or compressed-gas service, set-pressure testing, leakage checks and in-service inspection should be treated as one integrated reliability task rather than separate isolated steps.',
      ],
      highlights: [
        'Safety valve verification should consider both opening and relieving behavior.',
        'Overpressure and blowdown are different concepts and should not be mixed.',
        'Backpressure and piping conditions can change stability and seat tightness.',
      ],
      references: [
        {
          label: 'Spirax Sarco Safety Valves',
          url: 'https://www.spiraxsarco.com/learn-about-steam/safety-valves/safety-valves',
        },
        {
          label: 'Spirax Sarco Safety Valve Installation',
          url: 'https://www.spiraxsarco.com/learn-about-steam/safety-valves/safety-valve-installation',
        },
        {
          label: 'LESER Spring Loaded Safety Valve Tutorial',
          url: 'https://cms2.leser.com/en/support-and-tools/safety-valve-tutorial/spring-loaded-safety-valve-1/',
        },
      ],
    },
    {
      id: 5,
      slug: 'pressure-vessel-common-defects-periodic-inspection',
      category: 'Technical Insight',
      tag: 'tech',
      title: 'Common Defects, Failure Mechanisms and Action Boundaries in Pressure Vessel Inspection',
      date: '2024-09-06',
      summary:
        'Pressure vessel risk is not limited to wall thinning. This article draws on HSE information on plant failure modes and welding failure studies to summarize what periodic inspections should pay attention to.',
      content: [
        'HSE material on plant design and failure modes shows that pressure vessels face much more than simple corrosion loss. Important deterioration and failure mechanisms include overpressure, overheating, mechanical and thermal fatigue, brittle fracture, creep and fabrication-related problems. A periodic inspection strategy that focuses only on thickness loss can therefore miss critical risks.',
        'HSE’s research into historic welding failures also shows that weld defects and management weaknesses often appear together. Frequently observed issues include crack-like flaws, volumetric flaws, undersized weld geometry, inadequate supervision and insufficient inspection coverage. In practice, vessel inspection should combine visual review, record review, comparison with earlier NDT data and focused re-examination of critical weld regions.',
        'Once a defect is found, the correct action boundary cannot be reduced to “keep running if possible.” The decision should consider defect type, size, location, process fluid, operating temperature and the remaining life assessment. For low-temperature service, cyclic loading or corrosive duty, the response threshold should be more conservative.',
      ],
      highlights: [
        'Pressure vessel risk includes fatigue, brittle fracture, creep and weld quality issues.',
        'Weld defects and management weaknesses often coexist and should be reviewed together.',
        'Disposition decisions should be based on defect type, duty and remaining life, not convenience.',
      ],
      references: [
        {
          label: 'HSE Design Codes - Plant Failure Modes',
          url: 'https://www.hse.gov.uk/comah/sragtech/techmeasplant.htm',
        },
        {
          label: 'HSE RR1215 When welding goes wrong',
          url: 'https://www.hse.gov.uk/Research/rrhtm/rr1215.htm',
        },
        {
          label: 'HSE Introduction to pressure equipment',
          url: 'https://www.hse.gov.uk/pressure-systems/about.htm',
        },
      ],
    },
    {
      id: 6,
      slug: 'tofd-weld-inspection-pressure-piping',
      category: 'Technical Insight',
      tag: 'tech',
      title: 'Application Boundaries and Advantages of TOFD in Pressure Piping Weld Inspection',
      date: '2024-07-22',
      summary:
        'TOFD is highly effective for sizing embedded planar flaws, but it is not a standalone solution for every weld region. Based on TWI and Evident material, this article summarizes where TOFD adds value in pressure piping inspection.',
      content: [
        'TWI explains that TOFD was originally developed in the UK nuclear sector during the 1970s and has become widely recognized for its ability to size the height of embedded planar flaws. Its engineering value lies not in replacing every ultrasonic technique, but in providing stronger flaw-height assessment for defects such as cracks and lack of fusion.',
        'Evident’s application material shows that TOFD is particularly useful for weld-root corrosion, erosion and heat-affected-zone metal loss where geometry is irregular and conventional pulse-echo methods can become difficult to interpret. For pressure piping, this makes TOFD a strong option for screening and quantitative assessment of long welds where a recorded scan is desirable.',
        'At the same time, both TWI and Evident indicate that TOFD often works best as part of a combined inspection approach. Pulse-echo or phased array techniques are often needed to complement root, cap and position information. In practice, TOFD should therefore be selected as part of a coordinated inspection strategy based on thickness, weld geometry, access and code requirements.',
      ],
      highlights: [
        'TOFD is especially strong at sizing embedded planar flaws in welds.',
        'It is useful in weld-root corrosion and erosion scenarios with difficult geometry.',
        'TOFD usually works best alongside pulse-echo or phased array methods.',
      ],
      references: [
        {
          label: 'TWI Structural Integrity with TOFD Ultrasonic Inspection',
          url: 'https://www.twi-global.com/technical-knowledge/published-papers/structural-integrity-with-time-of-flight-diffraction-tofd-ultrasonic-inspection-july-2005',
        },
        {
          label: 'Evident Introduction to TOFD for Weld Inspection',
          url: 'https://ims.evidentscientific.com/en/applications/introduction-to-time-of-flight-diffraction-for-weld-inspection/',
        },
        {
          label: 'Evident TOFD for Weld Root Corrosion and Erosion',
          url: 'https://ims.evidentscientific.com/en/applications/tofd-for-weld-root-corrosion-and-erosion',
        },
      ],
    },
    {
      id: 7,
      slug: 'gas-cylinder-traceability-review-meeting',
      category: 'Company News',
      tag: 'company',
      title: 'Review Meeting on Gas Cylinder Quality Traceability System Held at Hangao',
      date: '2021-04-29',
      summary:
        'To further implement the gas cylinder quality and safety traceability program of the Lubei District Market Supervision Administration, a special review meeting was held at Hangao on April 29.',
      content: [
        'Director He and Section Chief Zhang from Lubei District reviewed current requirements for gas cylinder quality and safety, summarized the progress of inspection and rectification work, identified existing issues and set out the next-stage tasks.',
        'The meeting emphasized that traceability responsibilities for cylinder filling entities and inspection institutions should be fully implemented, traceability identification should be unified, and information sharing among different filling and inspection management systems across the city should be strengthened, so that gas cylinders can be traced by source, destination and responsibility.',
        'Hangao will continue to implement the meeting requirements, strengthen internal management and support the “review and consolidation” work of Tangshan’s gas cylinder quality and safety traceability system, providing clients with safer, more systematic and higher-quality services.',
      ],
    },
    {
      id: 8,
      slug: 'qualification-renewal-review',
      category: 'Company News',
      tag: 'company',
      title: 'Hangao Passed the Renewal Review for Special Equipment Inspection Qualification',
      date: '2024-01-15',
      summary:
        'Hangao passed the renewal review for its special equipment inspection qualification after document review, on-site assessment and personnel examination.',
      content: [
        'The review focused on quality management system operation, personnel qualification, equipment readiness, original record control and report issuance procedures.',
        'The review team positively evaluated Hangao’s standardized execution in technical document control and inspection workflow management.',
        'The company will continue to strengthen its quality system and technical capability to support stable and traceable inspection services.',
      ],
    },
    {
      id: 9,
      slug: 'samr-updated-special-equipment-measures',
      category: 'Industry Updates',
      tag: 'industry',
      title: 'SAMR Released Updated Measures for Special Equipment Safety Inspection',
      date: '2024-01-08',
      summary:
        'China’s market regulator released updated measures for special equipment safety supervision, with clearer requirements for registration, periodic inspection, maintenance and inspection workflow.',
      content: [
        'The updated measures further reinforce operator responsibility, maintenance requirements and closed-loop handling of supervision findings.',
        'For inspection institutions, this means that inspection records, risk notices and follow-up on rectification need to become more standardized and timely.',
        'For equipment users, timely periodic inspection, complete asset records and disciplined routine checks remain the basic risk-control measures.',
      ],
    },
    {
      id: 10,
      slug: 'special-equipment-safety-training-2023',
      category: 'Company News',
      tag: 'company',
      title: 'Hangao Successfully Held the 2023 Special Equipment Safety Training Program',
      date: '2023-12-20',
      summary:
        'Hangao organized a three-day training program for special equipment safety personnel from Tangshan and nearby enterprises.',
      content: [
        'The training covered gas cylinder management, safety valve calibration, pressure gauge verification, routine equipment inspection and common risk identification.',
        'Participants discussed inspection intervals, operating records, abnormal condition handling and how to work more effectively with third-party inspection services.',
        'Hangao will continue to organize practical safety training and technical exchange activities for enterprise clients.',
      ],
    },
  ],
};

export function getNewsItems(lang) {
  return newsData[lang] || newsData.zh;
}

export function getNewsItemBySlug(lang, slug) {
  return getNewsItems(lang).find((item) => item.slug === slug);
}
