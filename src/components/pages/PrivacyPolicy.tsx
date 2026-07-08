import { useLanguage } from '../../context/LanguageContext';

export const PrivacyPolicy = () => {
  const { language } = useLanguage();

  if (language === 'ENG') {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-thryve-cream prose prose-invert">
        <h1>Privacy Policy – The Thryve Method</h1>
        <p>This privacy statement applies to all services of The Thryve Method. In this statement, we explain which personal data we collect, for what purposes, how we handle this data, and what rights you have as a data subject.</p>
        <p><strong>Version:</strong> 1.0<br/><strong>Date:</strong> 16-07-2025<br/><strong>Company name:</strong> The Thryve Method<br/><strong>Registered address:</strong> Generaal Eisenhowerplein 5 F041, 2288AE Rijswijk<br/><strong>Chamber of Commerce number:</strong> 74191187<br/><strong>Email address:</strong> info@thethryvemethod.com<br/><strong>Website:</strong> www.thethryvemethod.com</p>

        <h2>1. Who is responsible for your data?</h2>
        <p>The Thryve Method is the data controller within the meaning of the General Data Protection Regulation (GDPR). This means that we determine which personal data is processed, for what purpose, and in what way.</p>

        <h2>2. What personal data do we process?</h2>
        <p>The Thryve Method processes the following data, depending on your interaction with us:</p>
        <h3>Upon registration or sign-up:</h3>
        <ul>
          <li>First and last name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Address details (if applicable for invoicing)</li>
          <li>Company details (if B2B)</li>
          <li>Payment information</li>
        </ul>
        <h3>During coaching/trajectories:</h3>
        <ul>
          <li>Completed intake questionnaires</li>
          <li>Health-related data (optional and only with explicit consent)</li>
          <li>Notes on progress or behavior</li>
          <li>Insights from coaching conversations or assignments</li>
          <li>Evaluation forms and feedback</li>
        </ul>
        <h3>When visiting the website:</h3>
        <ul>
          <li>IP address</li>
          <li>Location data (approximate)</li>
          <li>Browser information</li>
          <li>Click behavior and session data</li>
          <li>Cookies (see cookie statement if applicable)</li>
        </ul>

        <h2>3. For what purpose do we process your data?</h2>
        <p>The Thryve Method processes your data solely for the following purposes:</p>
        <ul>
          <li>Entering into and executing a coaching agreement</li>
          <li>Preparing invoices and administrative processing</li>
          <li>Maintaining contact via email, phone, or messages</li>
          <li>Providing access to an online learning environment or coaching platform</li>
          <li>Analyzing usage and behavior on the website</li>
          <li>Improving our services and customer experience</li>
          <li>Complying with legal obligations (such as tax legislation)</li>
        </ul>

        <h2>4. Legal bases for processing</h2>
        <p>According to the GDPR, we may only process your data if there is a valid legal basis. We rely on the following bases:</p>
        <ul>
          <li>Performance of a contract – to provide our services to you</li>
          <li>Legal obligation – for example, for the tax retention obligation</li>
          <li>Legitimate interest – such as improving our services</li>
          <li>Consent – solely for optional data such as health information or marketing</li>
        </ul>
        <p>Consent can be withdrawn at any time.</p>

        <h2>5. Special categories of data</h2>
        <p>The Thryve Method does not in principle process special categories of personal data, unless you voluntarily provide them as part of coaching (such as information about health, lifestyle, or mental state). This data will only be processed:</p>
        <ul>
          <li>With explicit consent</li>
          <li>Within the confidential context of coaching</li>
          <li>No longer than strictly necessary</li>
        </ul>
        <p>You always have the right not to share this data.</p>

        <h2>6. How long do we retain your data?</h2>
        <p>We do not keep your data longer than necessary. This means:</p>
        <ul>
          <li>Administrative data: 7 years (required by the Tax Authorities)</li>
          <li>Coaching data: up to 2 years after completion of the program, unless you request earlier deletion</li>
          <li>Email correspondence and contact forms: up to 12 months after last contact</li>
          <li>Inactive newsletter subscribers: a maximum of 24 months</li>
        </ul>
        <p>After the retention periods have expired, data is securely deleted or anonymized.</p>

        <h2>7. Sharing data with third parties</h2>
        <p>We do not share your data with third parties unless it is necessary for the execution of our services or due to a legal obligation. For example, with:</p>
        <ul>
          <li>Accountant or bookkeeping office</li>
          <li>Payment service providers (e.g., Mollie, Stripe)</li>
          <li>Hosting providers and learning platforms (e.g., Huddle, Google Drive, Zoom)</li>
          <li>Email software or automation systems (e.g., MailerLite, Plug&Pay)</li>
        </ul>
        <p>We conclude processing agreements with these parties to safeguard your privacy.</p>
        <p>The data collected through the Performance Audit (including questionnaire answers and the resulting report) is used solely to generate your personalized results and to improve our services. This data is never sold to third parties.</p>

        <h2>8. Data outside the EU</h2>
        <p>Some tools we use (such as Google or Zoom) may store data on servers outside the European Economic Area (EEA). In such cases, we ensure that:</p>
        <ul>
          <li>There is an adequacy decision; or</li>
          <li>Appropriate additional safeguards have been implemented (e.g., standard contractual clauses from the European Commission)</li>
        </ul>

        <h2>9. Securing your data</h2>
        <p>The Thryve Method takes appropriate technical and organizational measures to protect your data against loss, unauthorized access, modification, or disclosure. Examples include:</p>
        <ul>
          <li>Secure SSL connections on the website</li>
          <li>Secure access to accounts, tools, and backups</li>
          <li>Limited access to personal data (only by the coach)</li>
        </ul>
        <p>In the event of a data breach, we will act in accordance with the data breach notification obligation of the Dutch Data Protection Authority.</p>

        <h2>10. Your rights</h2>
        <p>Under the GDPR, you have the following rights:</p>
        <ul>
          <li>Right of access: you may request to view your data</li>
          <li>Right to rectification: you may have incorrect data corrected</li>
          <li>Right to erasure (“right to be forgotten”)</li>
          <li>Right to restriction of processing</li>
          <li>Right to data portability</li>
          <li>Right to object to processing</li>
          <li>Right to withdraw consent</li>
          <li>Right to file a complaint with the Dutch Data Protection Authority</li>
        </ul>
        <p>Would you like to exercise any of these rights? Please contact us at info@thethryvemethod.com. We will respond within a maximum of 30 days.</p>

        <h2>11. Cookies</h2>
        <p>Our website uses functional and analytical cookies. If we use tracking cookies (for marketing or advertisements), we will ask for explicit consent via a cookie banner. See our cookie statement for more information.</p>

        <h2>12. Changes to this privacy statement</h2>
        <p>The Thryve Method reserves the right to change this privacy statement. We recommend checking this statement regularly. In case of significant changes, you will be notified via email or our website.</p>

        <h2>13. Contact</h2>
        <p>Do you have any questions, requests, or complaints about this privacy statement or your data? Please contact us at:</p>
        <p>The Thryve Method<br/>Email: info@thethryvemethod.com<br/>Website: www.thethryvemethod.com<br/>Chamber of Commerce: 74191187</p>
      </div>
    );
  }

  // Dutch (NL) version
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-thryve-cream prose prose-invert">
      <h1>Privacyverklaring – The Thryve Method</h1>
      <p>Deze privacyverklaring is van toepassing op alle diensten van The Thryve Method. In deze verklaring leggen wij uit welke persoonsgegevens wij verzamelen, voor welke doeleinden, hoe wij omgaan met deze gegevens, en welke rechten jij hebt als betrokkene.</p>
      <p><strong>Versie:</strong> 1.0<br/><strong>Datum:</strong> 16-7-2025<br/><strong>Bedrijfsnaam:</strong> The Thryve Method<br/><strong>Vestigingsadres:</strong> Generaal Eisenhowerplein 5 F041, 2288AE Rijswijk<br/><strong>KvK-nummer:</strong> 74191187<br/><strong>E-mailadres:</strong> info@thethryvemethod.com<br/><strong>Website:</strong> www.thethryvemethod.com</p>

      <h2>1. Wie is verantwoordelijk voor jouw gegevens?</h2>
      <p>The Thryve Method is verwerkingsverantwoordelijke in de zin van de Algemene Verordening Gegevensbescherming (AVG). Dit betekent dat wij bepalen welke persoonsgegevens worden verwerkt, met welk doel en op welke manier.</p>

      <h2>2. Welke persoonsgegevens verwerken wij?</h2>
      <p>The Thryve Method verwerkt de volgende gegevens, afhankelijk van jouw interactie met ons:</p>
      <h3>Bij aanmelding of inschrijving:</h3>
      <ul>
        <li>Voor- en achternaam</li>
        <li>E-mailadres</li>
        <li>Telefoonnummer</li>
        <li>Adresgegevens (indien van toepassing op facturatie)</li>
        <li>Bedrijfsgegevens (indien B2B)</li>
        <li>Betaalinformatie</li>
      </ul>
      <h3>Bij coaching/trajecten:</h3>
      <ul>
        <li>Ingevulde intakevragenlijsten</li>
        <li>Gezondheidsgerelateerde gegevens (optioneel en alleen met uitdrukkelijke toestemming)</li>
        <li>Notities over voortgang of gedrag</li>
        <li>Inzichten uit coachgesprekken of opdrachten</li>
        <li>Evaluatieformulieren en feedback</li>
      </ul>
      <h3>Bij websitebezoek:</h3>
      <ul>
        <li>IP-adres</li>
        <li>Locatiegegevens (benaderd)</li>
        <li>Browserinformatiestemming</li>
        <li>Klikgedrag en sessiegegevens</li>
        <li>Cookies (zie cookieverklaring indien van toepassing)</li>
      </ul>

      <h2>3. Met welk doel verwerken wij jouw gegevens?</h2>
      <p>The Thryve Method verwerkt jouw gegevens uitsluitend voor de volgende doelen:</p>
      <ul>
        <li>Het aangaan en uitvoeren van een coachingsovereenkomst</li>
        <li>Het opstellen van facturen en administratieve verwerking</li>
        <li>Contact onderhouden via e-mail, telefoon of berichten</li>
        <li>Toegang geven tot online leeromgeving of coachingplatform</li>
        <li>Analyseren van gebruik en gedrag op de website</li>
        <li>Verbetering van onze diensten en klantbeleving</li>
        <li>Voldoen aan wettelijke verplichtingen (zoals belastingwetgeving)</li>
      </ul>

      <h2>4. Grondslagen voor verwerking</h2>
      <p>Volgens de AVG mogen wij jouw gegevens alleen verwerken als daar een geldige grondslag voor is. Wij baseren ons op de volgende grondslagen:</p>
      <ul>
        <li>Uitvoering van een overeenkomst – om onze diensten aan jou te kunnen leveren</li>
        <li>Wettelijke verplichting – bijvoorbeeld voor de fiscale bewaarplicht</li>
        <li>Gerechtvaardigd belang – zoals het verbeteren van onze dienstverlening</li>
        <li>Toestemming – uitsluitend voor optionele gegevens, zoals gezondheidsinformatie of marketing</li>
      </ul>
      <p>Toestemming kan te allen tijde worden ingetrokken.</p>

      <h2>5. Gegevens van bijzondere aard</h2>
      <p>The Thryve Method verwerkt in principe géén bijzondere persoonsgegevens, tenzij jij deze vrijwillig verstrekt in het kader van coaching (zoals informatie over gezondheid, levensstijl, mentale staat). Deze gegevens worden alleen verwerkt:</p>
      <ul>
        <li>Met uitdrukkelijke toestemming</li>
        <li>Binnen het vertrouwelijke kader van coaching</li>
        <li>Niet langer dan strikt noodzakelijk</li>
      </ul>
      <p>Je hebt altijd het recht om deze gegevens niet te delen.</p>

      <h2>6. Hoe lang bewaren wij jouw gegevens?</h2>
      <p>Wij bewaren jouw gegevens niet langer dan noodzakelijk. Dit betekent:</p>
      <ul>
        <li>Administratieve gegevens: 7 jaar (verplicht volgens de Belastingdienst)</li>
        <li>Coachinggegevens: tot 2 jaar na afronding van het traject, tenzij je eerder verwijdering verzoekt</li>
        <li>E-mailverkeer en contactformulieren: tot 12 maanden na laatste contact</li>
        <li>Inactieve nieuwsbriefontvangers: maximaal 24 maanden</li>
      </ul>
      <p>Na afloop van de bewaartermijnen worden gegevens veilig verwijderd of geanonimiseerd.</p>

      <h2>7. Verstrekking aan derden</h2>
      <p>Wij delen jouw gegevens niet met derden, tenzij dat noodzakelijk is voor de uitvoering van onze dienstverlening of vanwege een wettelijke verplichting. Bijvoorbeeld met:</p>
      <ul>
        <li>Boekhouder of administratiekantoor</li>
        <li>Betaaldienstverleners (bijv. Mollie, Stripe)</li>
        <li>Hostingproviders en leeromgevingen (bijv. Huddle, Google Drive, Zoom)</li>
        <li>E-mailsoftware of automatiseringssystemen (bijv. MailerLite, Plug&Pay)</li>
      </ul>
      <p>Wij sluiten met deze partijen verwerkersovereenkomsten om jouw privacy te waarborgen.</p>
      <p>De gegevens die worden verzameld via de Performance Audit (waaronder vragenlijstantwoorden en het resulterende rapport) worden uitsluitend gebruikt om jouw persoonlijke resultaten te genereren en om onze dienstverlening te verbeteren. Deze gegevens worden nooit verkocht aan derden.</p>

      <h2>8. Gegevens buiten de EU</h2>
      <p>Sommige tools die wij gebruiken (zoals Google of Zoom) kunnen gegevens opslaan op servers buiten de Europese Economische Ruimte (EER). In die gevallen zorgen wij ervoor dat:</p>
      <ul>
        <li>Er sprake is van een adequaatheidsbesluit; of</li>
        <li>Er passende aanvullende waarborgen zijn getroffen (bijv. modelcontracten van de Europese Commissie)</li>
      </ul>

      <h2>9. Beveiliging van jouw gegevens</h2>
      <p>The Thryve Method neemt passende technische en organisatorische maatregelen om jouw gegevens te beschermen tegen verlies, ongeoorloofde toegang, wijziging of openbaarmaking. Denk aan:</p>
      <ul>
        <li>Beveiligde SSL-verbindingen op de website</li>
        <li>Beveiligde toegang tot accounts, tools en back-ups</li>
        <li>Beperkte toegang tot persoonsgegevens (alleen door de coach)</li>
      </ul>
      <p>Bij een datalek zullen wij handelen volgens de meldplicht datalekken van de Autoriteit Persoonsgegevens.</p>

      <h2>10. Jouw rechten</h2>
      <p>Je hebt volgens de AVG de volgende rechten:</p>
      <ul>
        <li>Recht op inzage: je mag je gegevens opvragen</li>
        <li>Recht op rectificatie: je mag onjuiste gegevens laten aanpassen</li>
        <li>Recht op verwijdering (“vergetelheid”)</li>
        <li>Recht op beperking van verwerking</li>
        <li>Recht op overdraagbaarheid</li>
        <li>Recht op bezwaar tegen verwerking</li>
        <li>Recht om toestemming in te trekken</li>
        <li>Recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens</li>
      </ul>
      <p>Wil je gebruikmaken van een van deze rechten? Neem dan contact met ons op via info@thethryvemethod.com. We reageren binnen uiterlijk 30 dagen.</p>

      <h2>11. Cookies</h2>
      <p>Onze website maakt gebruik van functionele en analytische cookies. Indien wij trackingcookies (voor marketing of advertenties) gebruiken, vragen wij hiervoor expliciete toestemming via een cookiebanner. Zie onze cookieverklaring voor meer informatie.</p>

      <h2>12. Wijzigingen in deze privacyverklaring</h2>
      <p>The Thryve Method behoudt zich het recht voor om deze privacyverklaring te wijzigen. Wij adviseren je om deze verklaring regelmatig te raadplegen. Bij wezenlijke wijzigingen wordt je per e-mail of via onze website op de hoogte gebracht.</p>

      <h2>13. Contact</h2>
      <p>Heb je vragen, verzoeken of klachten over deze privacyverklaring of jouw gegevens? Neem dan contact met ons op via:</p>
      <p>The Thryve Method<br/>E-mail: info@thethryvemethod.com<br/>Website: www.thethryvemethod.com<br/>KvK: 74191187</p>
    </div>
  );
};
