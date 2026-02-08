import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiMessageCircle } from 'react-icons/fi';
import './Contact.css';

const faqs = [
  {
    q: '检测报告一般多久可以出具？',
    a: '常规项目在完成现场检测后 3-5 个工作日可出具报告，复杂项目会在沟通后给出明确时间节点。',
  },
  {
    q: '可以提供上门检测服务吗？',
    a: '可以。我们支持唐山及周边地区上门检测，并根据设备类型和数量安排专业工程师团队。',
  },
  {
    q: '如何确认需要做哪些检测项目？',
    a: '可先通过电话或在线留言提供设备信息，我们会按法规要求和设备状态给出检测建议。',
  },
];

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="page-banner">
        <div className="container">
          <h1>联系我们</h1>
          <p>欢迎咨询特种设备检测服务 · 我们将第一时间响应</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-cards">
            <article className="contact-card">
              <FiPhone />
              <h3>服务热线</h3>
              <p>0315-5913128 / 5913198</p>
              <span>工作日 08:00-17:30</span>
            </article>
            <article className="contact-card">
              <FiMail />
              <h3>邮箱咨询</h3>
              <p>hatj@tshangao.com.cn</p>
              <span>24小时内回复</span>
            </article>
            <article className="contact-card">
              <FiMapPin />
              <h3>公司地址</h3>
              <p>河北省唐山市路北区环城路与唐丰北路交叉路口杭奥特检办公楼，06300</p>
              <span>欢迎预约来访</span>
            </article>
            <article className="contact-card">
              <FiClock />
              <h3>服务时间</h3>
              <p>周一至周五 08:00-17:30</p>
              <span>节假日支持应急响应</span>
            </article>
          </div>

          <div className="contact-form-wrap">
            <h2>
              <FiMessageCircle /> 在线咨询
            </h2>
            <p>先做预览版本，暂不接入后端。你后续给我字段我可以再对接提交接口。</p>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-grid">
                <label>
                  联系人
                  <input type="text" placeholder="请输入姓名" />
                </label>
                <label>
                  联系电话
                  <input type="tel" placeholder="请输入手机号/座机" />
                </label>
                <label>
                  公司名称
                  <input type="text" placeholder="请输入公司名称" />
                </label>
                <label>
                  设备类型
                  <select defaultValue="">
                    <option value="" disabled>
                      请选择
                    </option>
                    <option>锅炉</option>
                    <option>压力容器</option>
                    <option>压力管道</option>
                    <option>电梯</option>
                    <option>起重机械</option>
                    <option>其他</option>
                  </select>
                </label>
              </div>
              <label>
                需求说明
                <textarea rows="6" placeholder="请描述设备数量、使用情况、计划检测时间等信息" />
              </label>
              <button type="submit" className="btn btn-primary">
                提交咨询 <FiSend />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="section-title">
            <h2>常见问题</h2>
            <p>你可以先看这些高频问题，后续我再按你实际业务补齐</p>
          </div>
          <div className="faq-list">
            {faqs.map((item, i) => (
              <article key={i} className="faq-item">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
