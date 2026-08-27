import crypto from 'crypto';
import { FormSubmissionData, FORM_ROUTES } from './types';

/**
 * Generates an OAuth2 access token for Google Service Account using Node's native crypto.
 */
async function getGoogleServiceAccountAccessToken(
  clientEmail: string,
  privateKey: string
): Promise<string> {
  const normalizedKey = privateKey.replace(/\\n/g, '\n');
  const now = Math.floor(Date.now() / 1000);
  const expiry = now + 3600;

  const header = {
    alg: 'RS256',
    typ: 'JWT',
  };

  const claimSet = {
    iss: clientEmail,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    exp: expiry,
    iat: now,
  };

  const encodeBase64Url = (obj: object) =>
    Buffer.from(JSON.stringify(obj))
      .toString('base64')
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');

  const unsignedToken = `${encodeBase64Url(header)}.${encodeBase64Url(claimSet)}`;

  const signer = crypto.createSign('RSA-SHA256');
  signer.update(unsignedToken);
  signer.end();
  const signature = signer
    .sign(normalizedKey, 'base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  const jwt = `${unsignedToken}.${signature}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Google Auth Token failed (${res.status}): ${errorText}`);
  }

  const data = await res.json();
  return data.access_token;
}

/**
 * Returns the spreadsheet ID and tab name for a given form type.
 */
function getSpreadsheetConfig(formType: 'genetic_testing' | 'dme' | 'medical_alert') {
  if (formType === 'genetic_testing') {
    return {
      spreadsheetId:
        process.env.GOOGLE_SHEET_ID_GENETIC_TESTING ||
        process.env.GOOGLE_SHEET_ID_GENETICTESTING ||
        process.env.GOOGLE_SPREADSHEET_ID ||
        '',
      tabName:
        process.env.GOOGLE_SHEET_TAB_GENETIC_TESTING ||
        FORM_ROUTES.genetic_testing.sheetName,
      webhookUrl:
        process.env.GOOGLE_SHEET_WEBHOOK_GENETIC_TESTING ||
        process.env.GOOGLE_SCRIPT_URL_GENETIC_TESTING ||
        process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
        '',
    };
  }

  if (formType === 'dme') {
    return {
      spreadsheetId:
        process.env.GOOGLE_SHEET_ID_DME ||
        process.env.GOOGLE_SPREADSHEET_ID ||
        '',
      tabName:
        process.env.GOOGLE_SHEET_TAB_DME ||
        FORM_ROUTES.dme.sheetName,
      webhookUrl:
        process.env.GOOGLE_SHEET_WEBHOOK_DME ||
        process.env.GOOGLE_SCRIPT_URL_DME ||
        process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
        '',
    };
  }

  // Medical Alert
  return {
    spreadsheetId:
      process.env.GOOGLE_SHEET_ID_MEDICAL_ALERT ||
      process.env.GOOGLE_SHEET_ID_MEDICALALERT ||
      process.env.GOOGLE_SPREADSHEET_ID ||
      '',
    tabName:
      process.env.GOOGLE_SHEET_TAB_MEDICAL_ALERT ||
      FORM_ROUTES.medical_alert.sheetName,
    webhookUrl:
      process.env.GOOGLE_SHEET_WEBHOOK_MEDICAL_ALERT ||
      process.env.GOOGLE_SCRIPT_URL_MEDICAL_ALERT ||
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      '',
  };
}

/**
 * Formats row values with IP address strictly placed in the last column.
 */
export function formatRowForSheet(data: FormSubmissionData): {
  headers: string[];
  row: string[];
} {
  const timestamp = data.meta.submittedAt;
  const ipAddress = data.meta.ipAddress;

  if (data.formType === 'genetic_testing') {
    const isFullWizard = Boolean(data.streetAddress || data.conditions);
    if (isFullWizard) {
      return {
        headers: [
          'Submission Timestamp',
          'First Name',
          'Last Name',
          'Email',
          'Phone',
          'State',
          'Date of Birth',
          'Insurance Type',
          'Insurance / MBI Number',
          'Gender',
          'Health Conditions',
          'Daily Meds Count',
          'Adverse Reactions',
          'Street Address',
          'Suite',
          'City',
          'ZIP Code',
          'Caregiver Applying',
          'Consent Statement',
          'Consent Status',
          'IP Address',
        ],
        row: [
          timestamp,
          data.firstName,
          data.lastName,
          data.email || 'N/A',
          data.phone,
          data.state,
          data.dateOfBirth,
          data.primaryInsuranceType || 'N/A',
          data.primaryInsuranceNumber || 'N/A',
          data.gender || 'N/A',
          data.conditions?.join(', ') || 'None reported',
          data.dailyMedsCount || 'N/A',
          data.adverseReactions ? 'Yes' : 'No',
          data.streetAddress || 'N/A',
          data.suite || '',
          data.city || 'N/A',
          data.zipCode || 'N/A',
          data.isCaregiverApplying ? 'Yes' : 'No',
          data.consentStatement,
          data.consentStatus,
          ipAddress, // Last column
        ],
      };
    }

    return {
      headers: [
        'Submission Timestamp',
        'First Name',
        'Last Name',
        'Email',
        'Phone',
        'State',
        'Date of Birth',
        'Primary Insurance',
        'Insurance / MBI Number',
        'Consent Statement',
        'Consent Status',
        'IP Address',
      ],
      row: [
        timestamp,
        data.firstName,
        data.lastName,
        data.email || 'N/A',
        data.phone,
        data.state,
        data.dateOfBirth,
        data.primaryInsuranceType || 'N/A',
        data.primaryInsuranceNumber || 'N/A',
        data.consentStatement,
        data.consentStatus,
        ipAddress, // Last column
      ],
    };
  }

  if (data.formType === 'dme') {
    return {
      headers: [
        'Submission Timestamp',
        'First Name',
        'Last Name',
        'Email',
        'Phone',
        'State',
        'Date of Birth',
        'Primary Insurance',
        'Insurance / MBI Number',
        'Consent Statement',
        'Consent Status',
        'IP Address',
      ],
      row: [
        timestamp,
        data.firstName,
        data.lastName,
        data.email || 'N/A',
        data.phone,
        data.state,
        data.dateOfBirth,
        data.primaryInsuranceType || 'N/A',
        data.primaryInsuranceNumber || 'N/A',
        data.consentStatement,
        data.consentStatus,
        ipAddress, // Last column
      ],
    };
  }

  if (data.formType === 'medical_alert') {
    return {
      headers: [
        'Submission Timestamp',
        'First Name',
        'Last Name',
        'Email',
        'Phone',
        'State',
        'Date of Birth',
        'Consent Statement',
        'Consent Status',
        'IP Address',
      ],
      row: [
        timestamp,
        data.firstName,
        data.lastName,
        data.email,
        data.phone,
        data.state,
        data.dateOfBirth,
        data.consentStatement,
        data.consentStatus,
        ipAddress, // Last column
      ],
    };
  }

  // Contact form has no sheet
  return { headers: [], row: [] };
}

/**
 * Appends the submitted patient record to the respective Google Sheet.
 */
export async function appendToGoogleSheet(data: FormSubmissionData): Promise<{
  success: boolean;
  method?: string;
  message?: string;
}> {
  if (data.formType === 'contact') {
    // Contact form does not need a Google Sheet per requirement
    return { success: true, message: 'Contact form skipped Google Sheets.' };
  }

  const { spreadsheetId, tabName, webhookUrl } = getSpreadsheetConfig(data.formType);
  const { headers, row } = formatRowForSheet(data);

  // 1. Try Google Apps Script / Webhook if URL provided
  if (webhookUrl) {
    try {
      const webhookRes = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: data.formType,
          sheetName: tabName,
          headers,
          row,
          data,
        }),
      });

      if (webhookRes.ok) {
        return {
          success: true,
          method: 'webhook',
          message: `Appended row to ${tabName} sheet via webhook.`,
        };
      }
      console.warn(`[Google Sheets Webhook Warning] ${webhookRes.statusText}`);
    } catch (err: any) {
      console.warn(`[Google Sheets Webhook Error]`, err.message);
    }
  }

  // 2. Try Google Sheets API v4 using Service Account if credentials provided
  const serviceAccountEmail =
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (serviceAccountEmail && privateKey && spreadsheetId) {
    try {
      const accessToken = await getGoogleServiceAccountAccessToken(
        serviceAccountEmail,
        privateKey
      );

      const range = `${tabName}!A1`;

      // Check if header row exists, if sheet is empty prepend headers
      let rowsToInsert: string[][] = [row];
      try {
        const checkUrl = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(
          spreadsheetId
        )}/values/${encodeURIComponent(`${tabName}!A1:Z1`)}`;

        const checkRes = await fetch(checkUrl, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        if (checkRes.ok) {
          const checkData = await checkRes.json();
          if (!checkData.values || checkData.values.length === 0 || !checkData.values[0] || checkData.values[0].length === 0) {
            rowsToInsert = [headers, row];
          }
        }
      } catch {
        // Fallback to inserting data row directly
      }

      const appendUrl = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(
        spreadsheetId
      )}/values/${encodeURIComponent(range)}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

      const appendRes = await fetch(appendUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: rowsToInsert,
        }),
      });

      if (appendRes.ok) {
        return {
          success: true,
          method: 'google_sheets_api_v4',
          message: `Appended row to Google Sheet (${spreadsheetId} / ${tabName}).`,
        };
      }

      const errText = await appendRes.text();
      console.error(`[Google Sheets API Error] ${appendRes.status}: ${errText}`);
    } catch (err: any) {
      console.error(`[Google Sheets Service Account Error]`, err.message);
    }
  }

  // 3. Fallback: Log row for visibility in development/testing
  console.info(
    `[Google Sheets Sync - Pending Setup] Form: ${data.formType} | Sheet: ${tabName} | Last Column IP: ${data.meta.ipAddress}`
  );
  console.info(`[Google Sheets Row Data]:`, JSON.stringify(row));

  return {
    success: true,
    method: 'mock_logged',
    message: `Logged sheet record for ${data.formType}. Configure GOOGLE_SHEET_* in .env.local to enable live syncing.`,
  };
}
