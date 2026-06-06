import { useState } from 'react';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiMessageCircle } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';
import './Contact.css';

const content = {
  zh: {
    bannerTitle: '联系我们',
    bannerSubtitle: '欢迎咨询特种设备检测服务 · 我们将第一时间响应',
    cards: [
      {
        icon: <FiPhone />,
        title: '服务热线',
        items: [
          { label: '前台业务室', value: '03157295555', href: 'tel:03157295555' },
          { label: '公司办公室', value: '03158607777', href: 'tel:03158607777' },
          { label: '主管经理', value: '13582928866', href: 'tel:13582928866' },
          { label: '人事部', value: '15536993625', href: 'tel:15536993625' },
        ],
        note: '工作日 08:00-17:30',
      },
      { icon: <FiMail />, title: '邮箱咨询', value: 'hatj@tshangao.com.cn', note: '24小时内回复' },
      { icon: <FiMapPin />, title: '公司地址', value: '河北省唐山市路北区环城路与唐丰北路交叉路口杭奥特检办公楼，063000', note: '欢迎预约来访' },
      { icon: <FiClock />, title: '服务时间', value: '周一至周五 08:00-17:30', note: '节假日支持应急响应' },
    ],
    formTitle: '在线咨询',
    formIntro: '欢迎填写留言信息，我们会尽快与你联系。',
    labels: {
      name: '联系人',
      phone: '联系电话',
      company: '公司名称',
      type: '设备类型',
      detail: '需求说明',
    },
    placeholders: {
      name: '请输入姓名',
      phone: '请输入手机号/座机',
      company: '请输入公司名称',
      detail: '请描述设备数量、使用情况、计划检测时间等信息',
    },
    selectPlaceholder: '请选择',
    types: ['锅炉', '压力容器', '压力管道', '电梯', '起重机械', '其他'],
    submit: '提交咨询',
    submitting: '提交中...',
    success: '留言提交成功，我们已收到你的咨询信息。',
    error: '留言提交失败，请稍后再试，或直接电话联系 03157295555。',
    faqTitle: '常见问题',
    faqSubtitle: '你可以先查看这些高频问题，快速了解常见咨询内容。',
    faqs: [
      { q: '检测报告一般多久可以出具？', a: '常规项目在完成现场检测后 3-5 个工作日可出具报告，复杂项目会在沟通后给出明确时间节点。' },
      { q: '可以提供上门检测服务吗？', a: '可以。我们支持唐山及周边地区上门检测，并根据设备类型和数量安排专业工程师团队。' },
      { q: '如何确认需要做哪些检测项目？', a: '可先通过电话或在线留言提供设备信息，我们会按法规要求和设备状态给出检测建议。' },
    ],
  },
  en: {
    bannerTitle: 'Contact',
    bannerSubtitle: 'Contact us for special equipment inspection services and we will respond as soon as possible',
    cards: [
      {
        icon: <FiPhone />,
        title: 'Hotline',
        items: [
          { label: 'Front Desk / Business Office', value: '03157295555', href: 'tel:03157295555' },
          { label: 'Company Office', value: '03158607777', href: 'tel:03158607777' },
          { label: 'Supervising Manager', value: '13582928866', href: 'tel:13582928866' },
          { label: 'HR Department', value: '15536993625', href: 'tel:15536993625' },
        ],
        note: 'Weekdays 08:00-17:30',
      },
      { icon: <FiMail />, title: 'Email', value: 'hatj@tshangao.com.cn', note: 'Reply within 24 hours' },
      { icon: <FiMapPin />, title: 'Address', value: 'Hangao Inspection Office Building, East of the intersection of Huancheng Road and Tangfeng North Road, Lubei District, Tangshan, Hebei, 063000', note: 'Visits available by appointment' },
      { icon: <FiClock />, title: 'Working Hours', value: 'Monday to Friday 08:00-17:30', note: 'Emergency response can be arranged on holidays' },
    ],
    formTitle: 'Online Inquiry',
    formIntro: 'Leave your request and our team will contact you shortly.',
    labels: {
      name: 'Contact Person',
      phone: 'Phone Number',
      company: 'Company Name',
      type: 'Equipment Type',
      detail: 'Requirement Details',
    },
    placeholders: {
      name: 'Enter your name',
      phone: 'Enter mobile or landline number',
      company: 'Enter company name',
      detail: 'Describe equipment quantity, current condition and planned inspection time',
    },
    selectPlaceholder: 'Please select',
    types: ['Boiler', 'Pressure Vessel', 'Pressure Piping', 'Elevator', 'Lifting Machinery', 'Other'],
    submit: 'Submit Inquiry',
    submitting: 'Submitting...',
    success: 'Your inquiry has been submitted successfully. We will contact you soon.',
    error: 'Submission failed. Please try again later or call 03157295555 directly.',
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'These common questions may help you quickly understand our service process.',
    faqs: [
      { q: 'How long does it take to issue an inspection report?', a: 'For routine projects, reports are typically issued within 3-5 working days after on-site inspection. Complex projects will be confirmed separately.' },
      { q: 'Do you provide on-site inspection services?', a: 'Yes. We can arrange on-site inspection services in Tangshan and nearby areas based on equipment type and project scale.' },
      { q: 'How do I know which inspection items are required?', a: 'You can first provide equipment information by phone or online inquiry, and we will advise on the required inspection items according to regulations and equipment condition.' },
    ],
  },
};

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const { lang } = useLanguage();
  const copy = content[lang];

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') || ''),
      phone: String(formData.get('phone') || ''),
      companyName: String(formData.get('companyName') || ''),
      equipmentType: String(formData.get('equipmentType') || ''),
      detail: String(formData.get('detail') || ''),
      language: lang,
      pageUrl: window.location.href,
      website: String(formData.get('website') || ''),
    };

    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '';
      const response = await fetch(`${apiBaseUrl}/api/inquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Inquiry submission failed');
      }

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="contact-page">
      <section className="page-banner">
        <div className="container">
          <h1>{copy.bannerTitle}</h1>
          <p>{copy.bannerSubtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-cards">
            {copy.cards.map((card) => (
              <article key={card.title} className="contact-card">
                {card.icon}
                <h3>{card.title}</h3>
                {card.items ? (
                  <div className="contact-phone-list">
                    {card.items.map((item) => (
                      <a key={item.value} href={item.href}>
                        {item.label}: {item.value}
                      </a>
                    ))}
                  </div>
                ) : (
                  <p>{card.value}</p>
                )}
                <span>{card.note}</span>
              </article>
            ))}
          </div>

          <div className="contact-form-wrap">
            <h2>
              <FiMessageCircle /> {copy.formTitle}
            </h2>
            <p>{copy.formIntro}</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="form-honeypot" aria-hidden="true">
                Website
                <input name="website" tabIndex="-1" autoComplete="off" />
              </label>
              <div className="form-grid">
                <label>
                  {copy.labels.name}
                  <input name="name" type="text" placeholder={copy.placeholders.name} required />
                </label>
                <label>
                  {copy.labels.phone}
                  <input name="phone" type="tel" placeholder={copy.placeholders.phone} required />
                </label>
                <label>
                  {copy.labels.company}
                  <input name="companyName" type="text" placeholder={copy.placeholders.company} required />
                </label>
                <label>
                  {copy.labels.type}
                  <select name="equipmentType" defaultValue="" required>
                    <option value="" disabled>
                      {copy.selectPlaceholder}
                    </option>
                    {copy.types.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label>
                {copy.labels.detail}
                <textarea name="detail" rows="6" placeholder={copy.placeholders.detail} required />
              </label>
              <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
                {status === 'submitting' ? copy.submitting : copy.submit} <FiSend />
              </button>
              {status === 'success' && (
                <p className="form-success" role="status">
                  {copy.success}
                </p>
              )}
              {status === 'error' && (
                <p className="form-error" role="alert">
                  {copy.error}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="section-title">
            <h2>{copy.faqTitle}</h2>
            <p>{copy.faqSubtitle}</p>
          </div>
          <div className="faq-list">
            {copy.faqs.map((item) => (
              <article key={item.q} className="faq-item">
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
