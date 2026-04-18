import { FiAward, FiFileText, FiStar, FiShield } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';
import './Qualifications.css';

const content = {
  zh: {
    bannerTitle: '资质荣誉',
    bannerSubtitle: '权威资质认证 · 行业荣誉见证实力',
    certificationsTitle: '资质证书',
    certificationsSubtitle: '国家级资质认证，检测结果权威可靠',
    issuer: '颁发机构：',
    scope: '业务范围：',
    level: '资质等级：',
    honorsTitle: '荣誉奖项',
    honorsSubtitle: '多年来获得各级政府和行业组织的认可与表彰',
    equipmentTitle: '检测设备',
    equipmentSubtitle: '国际先进的检测设备，为精准检测提供硬件保障',
    tableHeaders: ['设备名称', '品牌/型号', '用途'],
  },
  en: {
    bannerTitle: 'Qualifications',
    bannerSubtitle: 'Authoritative certifications and industry recognition demonstrating capability',
    certificationsTitle: 'Certificates',
    certificationsSubtitle: 'National-level qualifications supporting reliable inspection results',
    issuer: 'Issued by:',
    scope: 'Scope:',
    level: 'Level:',
    honorsTitle: 'Honors',
    honorsSubtitle: 'Recognition received from government and industry organizations over the years',
    equipmentTitle: 'Inspection Equipment',
    equipmentSubtitle: 'Advanced equipment supporting accurate and reliable inspection work',
    tableHeaders: ['Equipment', 'Brand / Model', 'Application'],
  },
};

const certifications = {
  zh: [
    { icon: <FiShield size={32} />, title: '特种设备检验检测机构核准证', issuer: '国家市场监督管理总局', scope: '锅炉、压力容器、压力管道、电梯、起重机械检验检测', level: 'A级' },
    { icon: <FiFileText size={32} />, title: '无损检测机构资质证书', issuer: '中国特种设备检验协会', scope: 'RT、UT、MT、PT等无损检测', level: '综合甲级' },
    { icon: <FiAward size={32} />, title: 'ISO 9001质量管理体系认证', issuer: '中国质量认证中心', scope: '特种设备检验检测服务质量管理', level: '通过认证' },
    { icon: <FiFileText size={32} />, title: '安全阀校验机构资质', issuer: '河北省市场监督管理局', scope: '各类安全阀在线及离线校验', level: '核准资质' },
    { icon: <FiAward size={32} />, title: 'CMA计量认证证书', issuer: '河北省市场监督管理局', scope: '检验检测机构资质认定', level: '通过认证' },
    { icon: <FiShield size={32} />, title: 'ISO 17025实验室认可', issuer: '中国合格评定国家认可委员会', scope: '理化检测实验室能力认可', level: '通过认可' },
  ],
  en: [
    { icon: <FiShield size={32} />, title: 'Special Equipment Inspection Approval', issuer: 'State Administration for Market Regulation', scope: 'Boilers, pressure vessels, pressure piping, elevators and lifting machinery', level: 'Class A' },
    { icon: <FiFileText size={32} />, title: 'NDT Organization Qualification', issuer: 'China Special Equipment Inspection Association', scope: 'RT, UT, MT, PT and other NDT methods', level: 'Comprehensive Grade A' },
    { icon: <FiAward size={32} />, title: 'ISO 9001 Quality Management Certification', issuer: 'China Quality Certification Centre', scope: 'Quality management for special equipment inspection services', level: 'Certified' },
    { icon: <FiFileText size={32} />, title: 'Safety Valve Calibration Qualification', issuer: 'Hebei Administration for Market Regulation', scope: 'Online and offline calibration of various safety valves', level: 'Approved' },
    { icon: <FiAward size={32} />, title: 'CMA Metrology Certification', issuer: 'Hebei Administration for Market Regulation', scope: 'Qualification recognition for inspection and testing institutions', level: 'Certified' },
    { icon: <FiShield size={32} />, title: 'ISO 17025 Laboratory Accreditation', issuer: 'CNAS', scope: 'Laboratory competence for physical and chemical testing', level: 'Accredited' },
  ],
};

const honors = {
  zh: [
    { year: '2023', title: '河北省特种设备检测行业先进单位' },
    { year: '2022', title: '唐山市质量信用AAA级企业' },
    { year: '2022', title: '全国特种设备安全工作先进集体' },
    { year: '2021', title: '河北省守合同重信用企业' },
    { year: '2021', title: '唐山市安全生产先进单位' },
    { year: '2020', title: '河北省特种设备检验检测技术竞赛一等奖' },
    { year: '2020', title: '唐山市科技进步三等奖' },
    { year: '2019', title: '中国特种设备检验协会优秀会员单位' },
    { year: '2019', title: '河北省质量技术监督系统先进集体' },
    { year: '2018', title: '唐山市"十佳"检验检测机构' },
  ],
  en: [
    { year: '2023', title: 'Advanced Unit in Hebei Special Equipment Inspection Industry' },
    { year: '2022', title: 'AAA Enterprise for Quality Credit in Tangshan' },
    { year: '2022', title: 'National Advanced Collective in Special Equipment Safety' },
    { year: '2021', title: 'Hebei Contract-Honoring Enterprise' },
    { year: '2021', title: 'Tangshan Advanced Unit in Work Safety' },
    { year: '2020', title: 'First Prize in Hebei Special Equipment Inspection Skills Competition' },
    { year: '2020', title: 'Third Prize of Tangshan Science and Technology Progress' },
    { year: '2019', title: 'Outstanding Member Unit of China Special Equipment Inspection Association' },
    { year: '2019', title: 'Advanced Collective of Hebei Quality Supervision System' },
    { year: '2018', title: 'Top Ten Inspection and Testing Institution in Tangshan' },
  ],
};

const equipment = {
  zh: [
    { name: 'X射线数字化检测系统', brand: '进口品牌', use: '焊缝射线检测、铸件检测' },
    { name: '相控阵超声检测仪', brand: 'Olympus', use: '焊缝超声检测、厚度测量' },
    { name: 'TOFD超声检测仪', brand: '进口品牌', use: '焊缝缺陷检测和尺寸评定' },
    { name: '磁粉探伤机', brand: '国产高端', use: '表面及近表面缺陷检测' },
    { name: '直读光谱仪', brand: 'SPECTRO', use: '金属材料化学成分分析' },
    { name: '万能材料试验机', brand: 'INSTRON', use: '金属材料拉伸、弯曲试验' },
    { name: '冲击试验机', brand: '国产高端', use: '金属材料冲击韧性试验' },
    { name: '金相显微镜', brand: 'ZEISS', use: '金属材料金相组织分析' },
    { name: '安全阀校验台', brand: '定制设备', use: '安全阀整定压力校验' },
    { name: '硬度计系列', brand: '多品牌', use: '材料硬度检测' },
    { name: '测厚仪系列', brand: 'Olympus', use: '设备壁厚测量' },
    { name: '电梯检测仪器', brand: '专业品牌', use: '电梯安全性能检测' },
  ],
  en: [
    { name: 'Digital X-ray Inspection System', brand: 'Imported Brand', use: 'Radiographic inspection of welds and castings' },
    { name: 'Phased Array Ultrasonic Instrument', brand: 'Olympus', use: 'Ultrasonic weld inspection and thickness measurement' },
    { name: 'TOFD Instrument', brand: 'Imported Brand', use: 'Weld defect detection and sizing' },
    { name: 'Magnetic Particle Tester', brand: 'Domestic High-end', use: 'Surface and near-surface defect inspection' },
    { name: 'Direct-reading Spectrometer', brand: 'SPECTRO', use: 'Chemical composition analysis of metallic materials' },
    { name: 'Universal Testing Machine', brand: 'INSTRON', use: 'Tensile and bending tests for metallic materials' },
    { name: 'Impact Testing Machine', brand: 'Domestic High-end', use: 'Impact toughness testing of metallic materials' },
    { name: 'Metallographic Microscope', brand: 'ZEISS', use: 'Metallographic structure analysis' },
    { name: 'Safety Valve Calibration Bench', brand: 'Custom Equipment', use: 'Set pressure calibration for safety valves' },
    { name: 'Hardness Testers', brand: 'Multiple Brands', use: 'Material hardness testing' },
    { name: 'Thickness Measurement Instruments', brand: 'Olympus', use: 'Wall thickness measurement' },
    { name: 'Elevator Inspection Instruments', brand: 'Specialized Brand', use: 'Elevator safety performance inspection' },
  ],
};

export default function Qualifications() {
  const { lang } = useLanguage();
  const copy = content[lang];

  return (
    <div className="qual-page">
      <section className="page-banner">
        <div className="container">
          <h1>{copy.bannerTitle}</h1>
          <p>{copy.bannerSubtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>{copy.certificationsTitle}</h2>
            <p>{copy.certificationsSubtitle}</p>
          </div>
          <div className="cert-grid">
            {certifications[lang].map((cert) => (
              <div key={cert.title} className="cert-card">
                <div className="cert-icon">{cert.icon}</div>
                <h3>{cert.title}</h3>
                <div className="cert-info">
                  <div className="cert-row">
                    <span className="cert-label">{copy.issuer}</span>
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="cert-row">
                    <span className="cert-label">{copy.scope}</span>
                    <span>{cert.scope}</span>
                  </div>
                  <div className="cert-row">
                    <span className="cert-label">{copy.level}</span>
                    <span className="cert-level">{cert.level}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section honors-section">
        <div className="container">
          <div className="section-title">
            <h2>{copy.honorsTitle}</h2>
            <p>{copy.honorsSubtitle}</p>
          </div>
          <div className="honors-grid">
            {honors[lang].map((item) => (
              <div key={`${item.year}-${item.title}`} className="honor-item">
                <FiStar className="honor-icon" />
                <div>
                  <span className="honor-year">{item.year}</span>
                  <span className="honor-title">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>{copy.equipmentTitle}</h2>
            <p>{copy.equipmentSubtitle}</p>
          </div>
          <div className="equip-table-wrap">
            <table className="equip-table">
              <thead>
                <tr>
                  {copy.tableHeaders.map((header) => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {equipment[lang].map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.brand}</td>
                    <td>{item.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
