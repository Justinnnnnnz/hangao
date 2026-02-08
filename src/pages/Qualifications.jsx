import { FiAward, FiFileText, FiStar, FiShield } from 'react-icons/fi';
import './Qualifications.css';

const certifications = [
  {
    icon: <FiShield size={32} />,
    title: '特种设备检验检测机构核准证',
    issuer: '国家市场监督管理总局',
    scope: '锅炉、压力容器、压力管道、电梯、起重机械检验检测',
    level: 'A级',
  },
  {
    icon: <FiFileText size={32} />,
    title: '无损检测机构资质证书',
    issuer: '中国特种设备检验协会',
    scope: 'RT、UT、MT、PT等无损检测',
    level: '综合甲级',
  },
  {
    icon: <FiAward size={32} />,
    title: 'ISO 9001质量管理体系认证',
    issuer: '中国质量认证中心',
    scope: '特种设备检验检测服务质量管理',
    level: '通过认证',
  },
  {
    icon: <FiFileText size={32} />,
    title: '安全阀校验机构资质',
    issuer: '河北省市场监督管理局',
    scope: '各类安全阀在线及离线校验',
    level: '核准资质',
  },
  {
    icon: <FiAward size={32} />,
    title: 'CMA计量认证证书',
    issuer: '河北省市场监督管理局',
    scope: '检验检测机构资质认定',
    level: '通过认证',
  },
  {
    icon: <FiShield size={32} />,
    title: 'ISO 17025实验室认可',
    issuer: '中国合格评定国家认可委员会',
    scope: '理化检测实验室能力认可',
    level: '通过认可',
  },
];

const honors = [
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
];

const equipment = [
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
];

export default function Qualifications() {
  return (
    <div className="qual-page">
      <section className="page-banner">
        <div className="container">
          <h1>资质荣誉</h1>
          <p>权威资质认证 · 行业荣誉见证实力</p>
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>资质证书</h2>
            <p>国家级资质认证，检测结果权威可靠</p>
          </div>
          <div className="cert-grid">
            {certifications.map((cert, i) => (
              <div key={i} className="cert-card">
                <div className="cert-icon">{cert.icon}</div>
                <h3>{cert.title}</h3>
                <div className="cert-info">
                  <div className="cert-row">
                    <span className="cert-label">颁发机构：</span>
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="cert-row">
                    <span className="cert-label">业务范围：</span>
                    <span>{cert.scope}</span>
                  </div>
                  <div className="cert-row">
                    <span className="cert-label">资质等级：</span>
                    <span className="cert-level">{cert.level}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honors */}
      <section className="section honors-section">
        <div className="container">
          <div className="section-title">
            <h2>荣誉奖项</h2>
            <p>多年来获得各级政府和行业组织的认可与表彰</p>
          </div>
          <div className="honors-grid">
            {honors.map((h, i) => (
              <div key={i} className="honor-item">
                <FiStar className="honor-icon" />
                <div>
                  <span className="honor-year">{h.year}</span>
                  <span className="honor-title">{h.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>检测设备</h2>
            <p>国际先进的检测设备，为精准检测提供硬件保障</p>
          </div>
          <div className="equip-table-wrap">
            <table className="equip-table">
              <thead>
                <tr>
                  <th>设备名称</th>
                  <th>品牌/型号</th>
                  <th>用途</th>
                </tr>
              </thead>
              <tbody>
                {equipment.map((e, i) => (
                  <tr key={i}>
                    <td>{e.name}</td>
                    <td>{e.brand}</td>
                    <td>{e.use}</td>
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
