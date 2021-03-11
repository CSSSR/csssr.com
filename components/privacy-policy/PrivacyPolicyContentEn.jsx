import React from 'react'
import { L10nConsumer } from '../../utils/l10nProvider'
import styled from '@emotion/styled'
import common_styles_for_policy_pages from './PrivacyPolicy.styles'
import { MsBrowserConsumer } from '../../utils/msBrowserProvider'
import Grid from '../ui-kit/core-design/Grid'

const PrivacyPolicyContentEn = ({ className, l10n: { translations } }) => (
  <Grid className={className} as="article">
    <header className="header">
      <h1
        className="title font_h1-regular"
        dangerouslySetInnerHTML={{ __html: translations.privacyPolicy.title }}
      />
      <p className="date font_subhead-regular">{translations.privacyPolicy.date}</p>
    </header>

    <div className="content">
      <p className="description font_p16-regular">
        CSSSR is&nbsp;a&nbsp;software development company that creates interfaces and
        web-applications (see &ldquo;Who We&nbsp;Are&rdquo;). We&nbsp;are concerned about privacy
        issues and want you to&nbsp;be&nbsp;familiar with how we&nbsp;collect, use, and share
        information and how you can exercise the privacy rights available to&nbsp;you. This Privacy
        Policy describes how we&nbsp;collect and use information when visitors interact with
        or&nbsp;use any of&nbsp;the CSSSR Properties (such as&nbsp;our &ldquo;Website&rdquo;).
      </p>

      <p className="description font_p16-regular">
        If&nbsp;you are resident in&nbsp;the European Economic Area and want to&nbsp;find out more
        about your data protection rights, please see &ldquo;Your Data Protection Rights&rdquo;.
      </p>

      <p className="description font_p16-regular">
        If&nbsp;you have any questions, you may contact&nbsp;us (see &ldquo;Contacting Us&rdquo;).
      </p>

      <p className="description font_p16-regular">
        A&nbsp;reference to&nbsp;&ldquo;CSSSR&rdquo;, &ldquo;we&rdquo; or&nbsp;&ldquo;our&rdquo;
        means Company Name Ltd.
      </p>

      <p className="description font_p16-regular">
        CSSSR also collects information from individuals when they visit, use, or&nbsp;interact
        with: (i) www.csssr.com and other websites operated by&nbsp;us, including our software
        applications (the &ldquo;Apps&rdquo;); (ii) our social media pages (our &ldquo;Social Media
        Pages&rdquo;).
      </p>

      <section>
        <h3 className="font_h2-regular">What information do&nbsp;we&nbsp;collect?</h3>

        <h4 className="font_h3-regular">Information that individuals provide voluntarily</h4>
        <p className="font_p16-regular text">
          Certain parts of&nbsp;the CSSSR Properties may ask visitors to&nbsp;provide personal
          information voluntarily: for example, we&nbsp;may collect personal information when
          a&nbsp;visitor sends email message, expresses an&nbsp;interest in&nbsp;obtaining
          additional information about CSSSR or&nbsp;our products and services, subscribes
          to&nbsp;our marketing newsletters, or&nbsp;otherwise contacts&nbsp;us.
        </p>
        <p className="font_p16-regular text">
          The personal information we&nbsp;collect may include contact information (such
          as&nbsp;name, address, telephone number, or&nbsp;email address) and contact preferences.
          It&nbsp;may also include professional information, such as&nbsp;job title, department
          or&nbsp;job role, and the nature of&nbsp;an&nbsp;individual&rsquo;s request
          or&nbsp;communication. We&nbsp;also collect information that visitors choose
          to&nbsp;provide to&nbsp;us when completing any &lsquo;free text&rsquo; boxes in&nbsp;our
          forms (for example, for event sign-up, product feedback, or&nbsp;survey requests). Please
          do&nbsp;not post any information that you do&nbsp;not want to&nbsp;reveal to&nbsp;the
          public at&nbsp;large.
        </p>

        <h4 className="font_h3-regular">Information we&nbsp;collect automatically</h4>
        <p className="font_p16-regular text">
          When an&nbsp;individual uses CSSSR Properties, we&nbsp;may automatically collect certain
          information from the individual&rsquo;s device. In&nbsp;some countries, including
          countries in&nbsp;the&nbsp;EU, this information may be&nbsp;considered as&nbsp;personal
          data under applicable data protection laws.
        </p>
        <p className="font_p16-regular text">
          Specifically, the information we&nbsp;collect automatically may include&nbsp;IP address,
          operating system type and version, browser type and version, cookie&nbsp;ID,
          an&nbsp;individual&rsquo;s activities on&nbsp;the CSSSR Properties, and other information
          about the individual&rsquo;s system and connection and how the individual interacts with
          the CSSSR Properties and other websites. We&nbsp;and our third-party partners may collect
          this information as&nbsp;a&nbsp;part of&nbsp;log files and through the use of&nbsp;cookies
          or&nbsp;other tracking technologies, as&nbsp;explained further under the heading
          &ldquo;Cookies and Similar Tracking Technology&rdquo;.
        </p>
      </section>

      <section>
        <h3 className="font_h2-regular">How do&nbsp;we&nbsp;use your information?</h3>
        <p className="font_p16-regular text">
          Information collected from CSSSR Properties may be&nbsp;disclosed:
        </p>
        <ul className="have-square-bullets">
          <li className="font_p16-regular list-item_en">
            To&nbsp;send administrative information. For example, to&nbsp;send information regarding
            our services and changes to&nbsp;our terms, conditions, and policies.
          </li>
          <li className="font_p16-regular list-item_en">
            To&nbsp;engage in&nbsp;and process transactions. For example, we&nbsp;may use personal
            information to&nbsp;process your transactions and for billing purposes.
          </li>
          <li className="font_p16-regular list-item_en">
            Interest-based advertising and analytics. We&nbsp;may partner with certain third parties
            to&nbsp;collect information on&nbsp;the CSSSR Properties to&nbsp;engage
            in&nbsp;analysis, auditing, research, and reporting, as&nbsp;well
            as&nbsp;to&nbsp;deliver advertising that we&nbsp;believe may interest you based
            on&nbsp;your activity on&nbsp;the CSSSR Properties and other websites over time. These
            third parties may set and access cookies on&nbsp;your computer or&nbsp;other device and
            may also use pixel tags, web logs, web beacons, or&nbsp;other similar technologies.
          </li>
          <li className="font_p16-regular list-item_en">
            To&nbsp;select content and improve quality. We&nbsp;may use information to&nbsp;help
            improve the CSSSR Properties and to&nbsp;ensure that content on&nbsp;the CSSSR
            Properties is&nbsp;presented in&nbsp;the most effective manner for your device.
          </li>
          <li className="font_p16-regular list-item_en">
            For legal purposes. We&nbsp;may use information as&nbsp;we&nbsp;believe
            to&nbsp;be&nbsp;necessary or&nbsp;appropriate: (a) under applicable law, including laws
            outside your country of&nbsp;residence; (b) to&nbsp;comply with subpoenas, warrants,
            or&nbsp;other legal processes; &copy;&nbsp;to&nbsp;respond to&nbsp;requests from public
            and government authorities including public and government authorities outside your
            country of&nbsp;residence; (d) to&nbsp;enforce our terms and conditions; (e)
            to&nbsp;protect our operations or&nbsp;those of&nbsp;any of&nbsp;our affiliates; (f)
            to&nbsp;protect our rights, privacy, safety or&nbsp;property, and/or that of&nbsp;our
            affiliates, you or&nbsp;others; and (g) to&nbsp;allow&nbsp;us to&nbsp;pursue available
            remedies or&nbsp;limit the damages that we&nbsp;may sustain.
          </li>
          <li className="font_p16-regular list-item_en">
            For our business purposes. We&nbsp;may use information for our business purposes, such
            as&nbsp;data analysis, audits, identifying usage trends, determining the effectiveness
            of&nbsp;our promotional campaigns, and to&nbsp;evaluate and improve our products,
            services, marketing, and client relationships.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="font_h2-regular">Cookies and similar tracking technologies</h3>
        <p className="font_p16-regular text">
          We&nbsp;may use cookies and similar tracking technologies on&nbsp;the CSSSR Properties
          to&nbsp;collect and use information about you. For further information about the types
          of&nbsp;cookies and other tracking technologies we&nbsp;use, why, and how you can control
          cookies, please see our Website Cookie Policy.
        </p>
      </section>

      <section>
        <h3 className="font_h2-regular">Use of&nbsp;CSSSR properties by&nbsp;minors</h3>
        <p className="font_p16-regular text">
          The CSSSR Properties are not intended for nor directed to&nbsp;individuals that are deemed
          to&nbsp;be&nbsp;children under applicable data protection or&nbsp;privacy laws, and
          we&nbsp;request that such individuals do&nbsp;not provide information through any
          of&nbsp;the CSSSR Properties.
        </p>
      </section>

      <section>
        <h3 className="font_h2-regular">How do&nbsp;we&nbsp;share your information?</h3>
        <p className="font_p16-regular text">
          Information collected from CSSSR Properties may be&nbsp;disclosed:
        </p>
        <ul className="have-square-bullets">
          <li className="font_p16-regular list-item_en">
            To&nbsp;our vendors, consultants, and other service providers: We&nbsp;may share your
            information with our third-party service providers, vendors, contractors, or&nbsp;agents
            who perform functions required for the operation of&nbsp;the business. Examples include:
            to&nbsp;provide data storage and processing services, lead management, campaign
            management, technical support for our Platform and CSSSR Properties and fraud
            prevention.
          </li>
          <li className="font_p16-regular list-item_en">
            To&nbsp;website advertising partners: As&nbsp;noted above, we&nbsp;may partner with
            certain third parties to&nbsp;collect information on&nbsp;the CSSSR Properties
            to&nbsp;engage in&nbsp;analysis, auditing, research, and reporting, as&nbsp;well
            as&nbsp;to&nbsp;deliver advertising that we&nbsp;believe may interest you based
            on&nbsp;your activity on&nbsp;the CSSSR Properties and other websites over time.
            We&nbsp;may share information with them for this purpose.
          </li>
          <li className="font_p16-regular list-item_en">
            For business transfers: We&nbsp;may share your information with a&nbsp;third party
            in&nbsp;the event of&nbsp;any reorganization, merger, sale, joint venture, assignment,
            transfer, or&nbsp;other disposition of&nbsp;all or&nbsp;any portion of&nbsp;our
            business, assets or&nbsp;sock (including in&nbsp;connection with any bankruptcy
            or&nbsp;similar proceedings).
          </li>
          <li className="font_p16-regular list-item_en">
            For legal purposes: We&nbsp;may share your information as&nbsp;we&nbsp;believe
            to&nbsp;be&nbsp;necessary or&nbsp;appropriate: (a) under applicable law, including laws
            outside your country of&nbsp;residence; (b) to&nbsp;comply with subpoenas, warrants,
            or&nbsp;other legal processes; &copy;&nbsp;to&nbsp;respond to&nbsp;requests from public
            and government authorities including public and government authorities outside your
            country of&nbsp;residence; (d) to&nbsp;enforce our terms and conditions; (e)
            to&nbsp;protect our operations; (f) to&nbsp;protect our rights, privacy, safety
            or&nbsp;property, and/or that of&nbsp;our affiliates, you or&nbsp;others; and (g)
            to&nbsp;allow&nbsp;us to&nbsp;pursue available remedies or&nbsp;limit the damages that
            we&nbsp;may sustain.
          </li>
          <li className="font_p16-regular list-item_en">
            With consent: We&nbsp;may disclose an&nbsp;individual&rsquo;s information to&nbsp;any
            other person with the individual&rsquo;s consent to&nbsp;such disclosure.
          </li>
          <li className="font_p16-regular list-item_en">
            On&nbsp;message boards or&nbsp;other public webpages: Individuals may choose
            to&nbsp;share information on&nbsp;message boards, chats, profile pages and blogs and
            other services that allow visitors to&nbsp;post information and materials (including,
            without limitation, our Social Media Pages). Please note that any information posted
            or&nbsp;disclosed through these services and forums will become public information, and
            may be&nbsp;available to&nbsp;users of&nbsp;the CSSSR Properties and to&nbsp;the general
            public. We&nbsp;urge you to&nbsp;be&nbsp;very careful when deciding to&nbsp;disclose
            your personal information, or&nbsp;any other information, on&nbsp;the CSSSR Properties.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="font_h2-regular">Your data protection rights</h3>
        <p className="font_p16-regular text">You have the following data protection rights:</p>
        <ul className="have-square-bullets">
          <li className="font_p16-regular list-item_en">
            You have the right to&nbsp;request access to&nbsp;or&nbsp;that we&nbsp;change, update,
            or&nbsp;delete your personal information at&nbsp;any time.
          </li>
          <li className="font_p16-regular list-item_en">
            If&nbsp;we&nbsp;have collected and process your personal information with your consent,
            then you can withdraw your consent at&nbsp;any time. Withdrawing your consent will not
            affect the lawfulness of&nbsp;any processing we&nbsp;conducted prior to&nbsp;your
            withdrawal, nor will it&nbsp;affect processing of&nbsp;your personal information
            conducted in&nbsp;reliance on&nbsp;lawful processing grounds other than consent.
          </li>
          <li className="font_p16-regular list-item_en">
            The right to&nbsp;opt out of&nbsp;receiving marketing newsletters from&nbsp;us.
          </li>
        </ul>

        <p className="font_p16-regular text">
          If&nbsp;you are a&nbsp;resident of&nbsp;the European Economic Area (EEA), you also have
          the following rights:
        </p>
        <ul className="have-square-bullets">
          <li className="font_p16-regular list-item_en">
            The right to&nbsp;object to&nbsp;processing of&nbsp;your personal information, restrict
            processing of&nbsp;your personal information, or&nbsp;request portability of&nbsp;your
            personal information. To&nbsp;exercise these rights email{' '}
            <a
              href="mailto:privacy@csssr.com"
              className="font_link-list_16"
              data-testid="PrivacyPolicy:link"
            >
              privacy@csssr.com
            </a>
            ;
          </li>
          <li className="font_p16-regular list-item_en">
            The right to&nbsp;complain to&nbsp;a&nbsp;data protection authority about our collection
            and use of&nbsp;your personal information. For more information, please contact your
            local data protection authority.
          </li>
        </ul>
        <p className="font_p16-regular text">
          Please note that because most of&nbsp;the information we&nbsp;store can only identify
          a&nbsp;particular browser or&nbsp;device, and cannot directly identify you personally, you
          may need to&nbsp;provide&nbsp;us with some additional information to&nbsp;enable&nbsp;us
          to&nbsp;identify the personal information we&nbsp;hold about you and ensure that
          we&nbsp;accurately fulfil your request and do&nbsp;not infringe on&nbsp;the privacy rights
          of&nbsp;other individuals.
        </p>
        <p className="font_p16-regular text">
          You can exercise your rights at&nbsp;any time by&nbsp;contacting&nbsp;us at&nbsp;
          <a
            href="mailto:privacy@csssr.com"
            className="font_link-list_16"
            data-testid="PrivacyPolicy:link"
          >
            privacy@csssr.com
          </a>
          .
        </p>
      </section>

      <section>
        <h3 className="font_h2-regular">
          Legal basis for precessing personal information (EEA END users and visitors only)
        </h3>
        <p className="font_p16-regular text">
          If&nbsp;you are a&nbsp;resident of&nbsp;the EEA, our legal basis for collecting and using
          personal information described above will depend on&nbsp;the personal information
          concerned and the specific context in&nbsp;which we&nbsp;collect&nbsp;it. However,
          we&nbsp;normally rely on&nbsp;our legitimate interests to&nbsp;collect personal
          information from you, except where such interests are overridden by&nbsp;your data
          protection interests or&nbsp;fundamental rights and freedoms. Where we&nbsp;rely
          on&nbsp;our legitimate interests to&nbsp;process your personal information, they include
          the interests described in&nbsp;the sections above with the heading &ldquo;How
          Do&nbsp;We&nbsp;Use Your Information&rdquo; for the CSSSR Properties.
        </p>
        <p className="font_p16-regular text">
          In&nbsp;some cases, we&nbsp;may rely on&nbsp;your consent or&nbsp;have a&nbsp;legal
          obligation to&nbsp;collect personal information from you or&nbsp;may otherwise need the
          personal information to&nbsp;protect your vital interests or&nbsp;those of&nbsp;another
          person. If&nbsp;we&nbsp;rely on&nbsp;consent to&nbsp;collect and/or process your personal
          information, we&nbsp;will obtain such consent in&nbsp;compliance with applicable laws.
        </p>
        <p className="font_p16-regular text">
          If&nbsp;you have questions about or&nbsp;need further information concerning the legal
          basis on&nbsp;which we&nbsp;collect and use your personal information, please
          contact&nbsp;us using the contact details provided under the
          &ldquo;Contacting&nbsp;Us&rdquo; heading below.
        </p>
      </section>

      <section>
        <h3 className="font_h2-regular">Third parties</h3>
        <p className="font_p16-regular text">
          This Policy does not address, and we&nbsp;are not responsible for the privacy,
          information, or&nbsp;other practices of&nbsp;any third parties (including, without
          limitation, our vendors) operating any site or&nbsp;service to&nbsp;which the CSSSR
          Properties contain a&nbsp;link. The inclusion of&nbsp;a&nbsp;link through the Online
          Property does not imply endorsement of&nbsp;the linked site or&nbsp;service by&nbsp;us.
        </p>
        <p className="font_p16-regular text">
          Please note that we&nbsp;are not responsible for the collection, usage and disclosure
          policies and practices (including the data security practices) of&nbsp;other
          organizations, such as&nbsp;Facebook, Apple, Google, Microsoft, RIM&nbsp;or any other app
          developer, app provider, social media platform provider, operating system provider,
          wireless service provider or&nbsp;device manufacturer, including any personal information
          you disclose to&nbsp;other organizations through or&nbsp;in&nbsp;connection with the CSSSR
          Properties.
        </p>
        <p className="font_p16-regular text">
          You should always read the privacy policy of&nbsp;any website you access or&nbsp;social
          network page through which you share information carefully in&nbsp;order
          to&nbsp;understand their specific privacy and information usage practices.
        </p>
      </section>

      <section>
        <h3 className="font_h2-regular">
          How do&nbsp;we&nbsp;keep your personal information secure?
        </h3>
        <p className="font_p16-regular text">
          We&nbsp;use reasonable organizational, technical, administrative, and physical safeguards
          to&nbsp;protect the personal information we&nbsp;collect and process. The measures
          we&nbsp;use are designed to&nbsp;provide a&nbsp;level of&nbsp;security appropriate
          to&nbsp;the risk of&nbsp;processing your personal information and to&nbsp;help ensure that
          your data is&nbsp;safe and secure. However, no&nbsp;electronic transmission over the
          Internet or&nbsp;information storage technology can be&nbsp;guaranteed
          to&nbsp;be&nbsp;100% secure. If&nbsp;you have a&nbsp;reason to&nbsp;believe that your
          interaction with&nbsp;us is&nbsp;no&nbsp;longer secure, please immediately notify&nbsp;us
          of&nbsp;the problem by&nbsp;contacting&nbsp;us in&nbsp;accordance with the
          &ldquo;Contacting&nbsp;Us&rdquo; section below.
        </p>
      </section>

      <section>
        <h3 className="font_h2-regular">Retention of&nbsp;your information</h3>
        <p className="font_p16-regular text">
          We&nbsp;will retain personal information for the period necessary to&nbsp;fulfill the
          purposes outlined in&nbsp;this Policy and where we&nbsp;have ongoing legitimate business
          needs to&nbsp;do&nbsp;so (for example, to&nbsp;comply with applicable legal, tax
          or&nbsp;accounting requirements, to&nbsp;enforce our agreements or&nbsp;comply with our
          legal obligations) unless a&nbsp;longer retention period is&nbsp;required
          or&nbsp;permitted by&nbsp;law.
        </p>
        <p className="font_p16-regular text">
          We&nbsp;use precise geolocation for our specific website to&nbsp;which the geolocation
          relates, after which the geolocation information is&nbsp;aggregated with other geolocation
          data for use by&nbsp;us for analytical purposes.
        </p>
        <p className="font_p16-regular text">
          If&nbsp;we&nbsp;are required to&nbsp;retain information to&nbsp;comply with a&nbsp;legal
          or&nbsp;audit obligation, we&nbsp;may store End User information for longer periods.
        </p>
      </section>

      <section>
        <h3 className="font_h2-regular">International data transfers</h3>
        <p className="font_p16-regular text">
          The CSSSR Properties are provided, supported, and hosted in&nbsp;Russian Federation.
          If&nbsp;you are using these from outside Russian Federation, be&nbsp;aware that your
          information may be&nbsp;transferred&nbsp;to, stored, and processed by&nbsp;us in&nbsp;our
          facilities and by&nbsp;those third parties with whom we&nbsp;may share your personal
          information, in&nbsp;Russian Federation.
        </p>
        <p className="font_p16-regular text">
          However, we&nbsp;have taken appropriate safeguards to&nbsp;ensure that your personal
          information will remain protected in&nbsp;accordance with this Policy.
          We&nbsp;specifically implement the European Commission&rsquo;s Standard Contractual
          Clauses for transfers of&nbsp;personal information between our group companies, which
          require all group companies to&nbsp;protect personal information they process from the EEA
          in&nbsp;accordance with European Union data protection law. Our Standard Contractual
          Clauses can be&nbsp;provided upon request. We&nbsp;have implemented similar appropriate
          safeguards with our third-party service providers and partners and further details can
          be&nbsp;provided upon request.
        </p>
      </section>

      <section>
        <h3 className="font_h2-regular">Sensitive information</h3>
        <p className="font_p16-regular text">
          We&nbsp;ask that you not send&nbsp;us, and you not disclose, any sensitive personal
          information (e.g., social security numbers, information related to&nbsp;racial
          or&nbsp;ethnic origin, political opinions, religion or&nbsp;other beliefs, health,
          criminal background, or&nbsp;trade union membership) on&nbsp;or&nbsp;through the CSSSR
          Properties or&nbsp;otherwise to&nbsp;us.
        </p>
      </section>

      <section>
        <h3 className="font_h2-regular">Updates to&nbsp;this policy</h3>
        <p className="font_p16-regular text">
          We&nbsp;will review and update this Policy periodically and will note the date of&nbsp;its
          most recent revision at&nbsp;the top of&nbsp;this Policy. If&nbsp;we&nbsp;make material
          changes to&nbsp;this Policy, we&nbsp;will post the revised Policy on&nbsp;our website and
          may take additional measures to&nbsp;inform you about such changes if&nbsp;required
          by&nbsp;applicable data protection laws. We&nbsp;encourage you to&nbsp;review this Policy
          frequently to&nbsp;be&nbsp;informed of&nbsp;how CSSSR is&nbsp;protecting your information.
        </p>
      </section>

      <section>
        <h3 className="font_h2-regular">Contacting&nbsp;us</h3>
        <p className="font_p16-regular text">
          If&nbsp;you have any questions about this Policy or&nbsp;CSSSR&rsquo;s privacy practices,
          please contact&nbsp;us by&nbsp;email at&nbsp;
          <a
            href="mailto:privacy@csssr.com"
            className="font_link-list_16"
            data-testid="PrivacyPolicy:link"
          >
            privacy@csssr.com
          </a>
          , or&nbsp;by&nbsp;mail using the details provided below.
        </p>
        <p className="font_p16-regular text">
          Please note that email communications are not always secure, so&nbsp;please do&nbsp;not
          include sensitive information in&nbsp;your emails to&nbsp;us. Company Name Ltd, ul.
          Letnikovskaya, d.&nbsp;2, c&nbsp;3., a/ya No&nbsp;33&nbsp;Moscow, Russia, 115114
        </p>
        <p className="font_p16-regular text">
          To&nbsp;comply with our obligations under&nbsp;EU data protection legislation,
          we&nbsp;have appointed a&nbsp;Data Protection Officer (DPO). Our DPO is&nbsp;contactable
          at&nbsp;
          <a
            href="mailto:privacy@csssr.com"
            className="font_link-list_16"
            data-testid="PrivacyPolicy:link"
          >
            privacy@csssr.com
          </a>{' '}
          or&nbsp;by&nbsp;mail using the details provided above.
        </p>
        <p className="font_p16-regular text">
          Who is&nbsp;the controller of&nbsp;my&nbsp;data? For the purposes of&nbsp;EU data
          protection legislation, Company Name Ltd is&nbsp;the controller of&nbsp;your personal
          information.
        </p>
      </section>
    </div>
  </Grid>
)

export default L10nConsumer(
  MsBrowserConsumer(styled(PrivacyPolicyContentEn)`
    ${common_styles_for_policy_pages}
  `),
)
