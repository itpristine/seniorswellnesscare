import nodemailer from 'nodemailer';
import { FormSubmissionData, FORM_ROUTES } from './types';

/**
 * Masks an Insurance / MBI number for email notifications to protect privacy and security.
 * Only the first two digits/characters and last two digits/characters remain visible.
 * All characters in between are masked with asterisks.
 * Example: 12********78
 * The complete number is never exposed in the email.
 */
export function maskInsuranceNumberForEmail(val?: string | null): string {
  if (!val) return 'N/A';
  const trimmed = val.trim();
  if (!trimmed || trimmed.toUpperCase() === 'N/A') return 'N/A';

  if (trimmed.length <= 4) {
    if (trimmed.length <= 2) {
      return '**';
    }
    return `${trimmed[0]}${'*'.repeat(trimmed.length - 2)}${trimmed[trimmed.length - 1]}`;
  }

  const firstTwo = trimmed.slice(0, 2);
  const lastTwo = trimmed.slice(-2);
  const maskedMiddle = '*'.repeat(trimmed.length - 4);

  return `${firstTwo}${maskedMiddle}${lastTwo}`;
}

/**
 * Builds HTML table rows for key-value pairs.
 */
function buildHtmlRows(fields: { label: string; value: string | undefined | null }[]): string {
  return fields
    .map(
      (f) => `
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 10px 14px; font-weight: 600; color: #1e293b; background-color: #f8fafc; width: 35%; font-size: 13px;">
          ${f.label}
        </td>
        <td style="padding: 10px 14px; color: #0f172a; font-size: 13px; word-break: break-word;">
          ${f.value || '<span style="color:#94a3b8; font-style:italic;">None</span>'}
        </td>
      </tr>
    `
    )
    .join('');
}

/**
 * Generates rich HTML email content matching all submitted fields, verbatim consent statement, and IP address.
 */
export function generateEmailHtml(data: FormSubmissionData): string {
  const routeConfig = FORM_ROUTES[data.formType];
  const timestamp = data.meta.submittedAt;
  const ipAddress = data.meta.ipAddress;

  let fields: { label: string; value: string | undefined | null }[] = [];
  let title = routeConfig.subjectTitle;
  let consentBlock = '';

  if (data.formType === 'genetic_testing') {
    title = 'Genetic Testing & Preventive Genomics Intake';
    fields = [
      { label: 'Form Category', value: 'Genetic Testing (CGx / PGx / NDGx / PIAx / CVMCGx / PRGx / MDGx / TEGx / OVGx)' },
      { label: 'First Name', value: data.firstName },
      { label: 'Last Name', value: data.lastName },
      { label: 'Full Name', value: `${data.firstName} ${data.lastName}` },
      { label: 'Phone Number', value: data.phone },
      { label: 'Email Address', value: data.email || 'Not Provided (Optional)' },
      { label: 'State of Residence', value: data.state },
      { label: 'Date of Birth', value: data.dateOfBirth },
      { label: 'Primary Insurance Type', value: data.primaryInsuranceType || 'N/A' },
      { label: 'Insurance / MBI Number', value: maskInsuranceNumberForEmail(data.primaryInsuranceNumber) },
    ];

    consentBlock = `
      <div style="margin-top: 20px; padding: 14px; background-color: #f1f5f9; border-radius: 8px; border-left: 4px solid #0d9488;">
        <h4 style="margin: 0 0 8px 0; color: #0f172a; font-size: 13px; font-weight: 700; text-transform: uppercase;">
          Express Written Consent & Authorization
        </h4>
        <p style="margin: 0 0 8px 0; color: #334155; font-size: 12px; line-height: 1.5;">
          ${data.consentStatement}
        </p>
        <p style="margin: 0; color: #0f172a; font-size: 13px; font-weight: 700;">
          Consent Status: <span style="color: #0d9488;">${data.consentStatus}</span>
        </p>
      </div>
    `;
  } else if (data.formType === 'dme') {
    title = 'Durable Medical Equipment (DME) Intake Submission';
    fields = [
      { label: 'Form Category', value: 'Durable Medical Equipment (DME)' },
      { label: 'First Name', value: data.firstName },
      { label: 'Last Name', value: data.lastName },
      { label: 'Full Name', value: `${data.firstName} ${data.lastName}` },
      { label: 'Phone Number', value: data.phone },
      { label: 'Email Address', value: data.email || 'Not Provided (Optional)' },
      { label: 'State of Residence', value: data.state },
      { label: 'Date of Birth', value: data.dateOfBirth },
      { label: 'Primary Insurance Type', value: data.primaryInsuranceType || 'N/A' },
      { label: 'Insurance / MBI Number', value: maskInsuranceNumberForEmail(data.primaryInsuranceNumber) },
    ];

    consentBlock = `
      <div style="margin-top: 20px; padding: 14px; background-color: #f1f5f9; border-radius: 8px; border-left: 4px solid #d97706;">
        <h4 style="margin: 0 0 8px 0; color: #0f172a; font-size: 13px; font-weight: 700; text-transform: uppercase;">
          Express Written Consent & Authorization
        </h4>
        <p style="margin: 0 0 8px 0; color: #334155; font-size: 12px; line-height: 1.5;">
          ${data.consentStatement}
        </p>
        <p style="margin: 0; color: #0f172a; font-size: 13px; font-weight: 700;">
          Consent Status: <span style="color: #d97706;">${data.consentStatus}</span>
        </p>
      </div>
    `;
  } else if (data.formType === 'medical_alert') {
    title = '24/7 Medical Alert System Quote Request';
    fields = [
      { label: 'Form Category', value: '24/7 Medical Alert Safety System' },
      { label: 'First Name', value: data.firstName },
      { label: 'Last Name', value: data.lastName },
      { label: 'Full Name', value: `${data.firstName} ${data.lastName}` },
      { label: 'Email Address', value: data.email },
      { label: 'Phone Number', value: data.phone },
      { label: 'State of Residence', value: data.state },
      { label: 'Date of Birth', value: data.dateOfBirth },
    ];

    consentBlock = `
      <div style="margin-top: 20px; padding: 14px; background-color: #f1f5f9; border-radius: 8px; border-left: 4px solid #e11d48;">
        <h4 style="margin: 0 0 8px 0; color: #0f172a; font-size: 13px; font-weight: 700; text-transform: uppercase;">
          Express Written Consent & Authorization
        </h4>
        <p style="margin: 0 0 8px 0; color: #334155; font-size: 12px; line-height: 1.5;">
          ${data.consentStatement}
        </p>
        <p style="margin: 0; color: #0f172a; font-size: 13px; font-weight: 700;">
          Consent Status: <span style="color: #e11d48;">${data.consentStatus}</span>
        </p>
      </div>
    `;
  } else {
    // Contact form
    title = 'Patient & Provider Concierge Inquiry';
    fields = [
      { label: 'Form Category', value: 'Contact Us / General Inquiry' },
      { label: 'Full Name', value: data.name },
      { label: 'Email Address', value: data.email },
      { label: 'Phone Number', value: data.phone },
      { label: 'Inquiry Topic', value: data.topic },
      { label: 'Message Content', value: data.message },
    ];
  }

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
      </head>
      <body style="margin:0; padding:0; background-color:#f8fafc; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#0f172a;">
        <div style="max-width: 640px; margin: 20px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid #e2e8f0;">
          
          <!-- Header Banner -->
          <div style="background-color: #0d1b2a; padding: 24px 30px; text-align: center;">
            <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 700; letter-spacing: -0.5px;">
              seniors wellness care
            </h1>
            <p style="margin: 4px 0 0 0; color: #0d9488; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
              ${title}
            </p>
          </div>

          <!-- Body Content -->
          <div style="padding: 28px 30px;">
            <p style="margin: 0 0 16px 0; font-size: 14px; color: #475569;">
              A new submission was received on <strong>${timestamp}</strong>. All details submitted by the patient are recorded below:
            </p>

            <!-- Table of Fields -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
              <tbody>
                ${buildHtmlRows(fields)}
                <!-- Submitter IP Address in email -->
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 10px 14px; font-weight: 700; color: #0d9488; background-color: #f0fdfa; width: 35%; font-size: 13px;">
                    Submitter IP Address
                  </td>
                  <td style="padding: 10px 14px; font-family: monospace; font-weight: 600; color: #0d9488; font-size: 13px; background-color: #f0fdfa;">
                    ${ipAddress}
                  </td>
                </tr>
              </tbody>
            </table>

            ${consentBlock}

            <!-- Footer Meta -->
            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #64748b; text-align: center;">
              <p style="margin: 0 0 4px 0;">This is an automated notification from the seniors wellness care platform.</p>
              <p style="margin: 0;">Sent to: <strong>${routeConfig.recipientEmail}</strong> | Sent from: <strong>${routeConfig.senderEmail}</strong></p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

/**
 * Generates plain text email version.
 */
export function generateEmailText(data: FormSubmissionData): string {
  const routeConfig = FORM_ROUTES[data.formType];
  const timestamp = data.meta.submittedAt;
  const ipAddress = data.meta.ipAddress;

  const lines: string[] = [
    `=== seniors wellness care - ${routeConfig.subjectTitle.toUpperCase()} ===`,
    `Timestamp: ${timestamp}`,
    `Recipient: ${routeConfig.recipientEmail}`,
    `Sender: ${routeConfig.senderEmail}`,
    `Submitter IP Address: ${ipAddress}`,
    `----------------------------------------------------`,
  ];

  if (data.formType === 'genetic_testing' || data.formType === 'dme') {
    lines.push(`First Name: ${data.firstName}`);
    lines.push(`Last Name: ${data.lastName}`);
    lines.push(`Email: ${data.email || 'None'}`);
    lines.push(`Phone: ${data.phone}`);
    lines.push(`State: ${data.state}`);
    lines.push(`Date of Birth: ${data.dateOfBirth}`);
    lines.push(`Insurance Type: ${data.primaryInsuranceType || 'N/A'}`);
    lines.push(`Insurance / MBI Number: ${maskInsuranceNumberForEmail(data.primaryInsuranceNumber)}`);
    lines.push(``);
    lines.push(`Consent Statement: ${data.consentStatement}`);
    lines.push(`Consent Status: ${data.consentStatus}`);
  } else if (data.formType === 'medical_alert') {
    lines.push(`First Name: ${data.firstName}`);
    lines.push(`Last Name: ${data.lastName}`);
    lines.push(`Email: ${data.email}`);
    lines.push(`Phone: ${data.phone}`);
    lines.push(`State: ${data.state}`);
    lines.push(`Date of Birth: ${data.dateOfBirth}`);
    lines.push(``);
    lines.push(`Consent Statement: ${data.consentStatement}`);
    lines.push(`Consent Status: ${data.consentStatus}`);
  } else {
    // Contact
    lines.push(`Full Name: ${data.name}`);
    lines.push(`Email: ${data.email}`);
    lines.push(`Phone: ${data.phone}`);
    lines.push(`Inquiry Topic: ${data.topic}`);
    lines.push(`Message:\n${data.message}`);
  }

  lines.push(``);
  lines.push(`Submitter IP Address: ${ipAddress}`);
  lines.push(`----------------------------------------------------`);

  return lines.join('\n');
}

/**
 * Sends submission email to the specified recipient using SMTP or configured service.
 */
export async function sendSubmissionEmail(data: FormSubmissionData): Promise<{
  success: boolean;
  method?: string;
  message?: string;
}> {
  const routeConfig = FORM_ROUTES[data.formType];
  const formEnvKey = `EMAIL_TO_${data.formType.toUpperCase()}`;
  const recipient =
    process.env[formEnvKey] ||
    process.env.EMAIL_TO ||
    routeConfig.recipientEmail;
  const sender = process.env.EMAIL_FROM || `seniors wellness care <${routeConfig.senderEmail}>`;

  let subjectName = '';
  if (data.formType === 'contact') {
    subjectName = data.name;
  } else {
    subjectName = `${data.firstName} ${data.lastName}`;
  }

  const subject = `[NEW] ${routeConfig.subjectTitle} - ${subjectName} (${data.meta.ipAddress})`;
  const htmlContent = generateEmailHtml(data);
  const textContent = generateEmailText(data);

  // 1. Check for Resend API Key
  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: sender,
          to: [recipient],
          reply_to: 'email' in data && data.email ? data.email : undefined,
          subject,
          html: htmlContent,
          text: textContent,
        }),
      });

      if (res.ok) {
        return {
          success: true,
          method: 'resend',
          message: `Email sent to ${recipient} via Resend.`,
        };
      }
      console.warn(`[Resend Email Warning] ${res.statusText}`);
    } catch (err: any) {
      console.warn(`[Resend Email Error]`, err.message);
    }
  }

  // 2. Check for SMTP Credentials (nodemailer)
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASSWORD || process.env.SMTP_PASS;

  if (smtpHost && smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465 || process.env.SMTP_SECURE === 'true',
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: sender,
        to: recipient,
        replyTo: 'email' in data && data.email ? data.email : undefined,
        subject,
        html: htmlContent,
        text: textContent,
      });

      return {
        success: true,
        method: 'smtp',
        message: `Email sent to ${recipient} via SMTP (${smtpHost}).`,
      };
    } catch (err: any) {
      console.error(`[SMTP Email Error]`, err.message);
    }
  }

  // 3. Fallback: Log email details for local testing / visibility
  console.info(`[Email Dispatch - Ready/Pending Credentials]`);
  console.info(`  From: ${sender}`);
  console.info(`  To: ${recipient}`);
  console.info(`  Subject: ${subject}`);
  console.info(`  IP: ${data.meta.ipAddress}`);

  return {
    success: true,
    method: 'mock_logged',
    message: `Logged email to ${recipient}. Configure SMTP_* or RESEND_API_KEY in .env.local to send live emails.`,
  };
}
