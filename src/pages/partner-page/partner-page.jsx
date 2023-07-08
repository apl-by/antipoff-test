import HeaderContentPartner from '../../components/header-content-partner/header-content-partner';
import Header from '../../components/header/header';
import { ReactComponent as PhoneIcon } from '../../assets/icons/phone-icon.svg';
import { ReactComponent as EmailIcon } from '../../assets/icons/email-icon.svg';
import styles from './partner-page.module.scss';

const text = `Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя самые современные аналитические инструменты.
В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно".
Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других бизнес-проектов.`;

const PartnerPage = () => {
  const paragraphs = text.trim().split('\n');
  return (
    <>
      <Header>
        <HeaderContentPartner />
      </Header>
      <main className={styles.main}>
        <section className={styles.partner}>
          <div className={styles.partner__about}>
            {paragraphs.map((par, ind) => (
              <p key={ind}>{par}</p>
            ))}
          </div>

          <div className={styles.partner__contacts}>
            <div className={styles.partner__contact}>
              <PhoneIcon />
              <span>+7 (954) 333-44-55</span>
            </div>
            <div className={styles.partner__contact}>
              <EmailIcon />
              <span>sykfafkar@gmail.com</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PartnerPage;
