/**
 * Google Apps Script Webhook for seniors wellness care
 * 
 * Instructions:
 * 1. Open your Google Sheet(s):
 *    - Genetic Testing Google Sheet
 *    - DME Google Sheet
 *    - Medical Alert Google Sheet
 * 2. In each Sheet (or a single master Sheet with tabs "Genetic Testing", "DME", "Medical Alert"):
 *    Go to: Extensions -> Apps Script
 * 3. Paste this script and click "Save".
 * 4. Click "Deploy" -> "New deployment" -> Select type: "Web app"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 * 5. Copy the Web App URL and add it to your `.env.local`:
 *    - GOOGLE_SHEET_WEBHOOK_GENETIC_TESTING=https://script.google.com/macros/s/.../exec
 *    - GOOGLE_SHEET_WEBHOOK_DME=https://script.google.com/macros/s/.../exec
 *    - GOOGLE_SHEET_WEBHOOK_MEDICAL_ALERT=https://script.google.com/macros/s/.../exec
 */

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetName = payload.sheetName || 'Sheet1';
    var sheet = ss.getSheetByName(sheetName) || ss.getActiveSheet();

    // If headers provided and sheet is empty, insert header row
    if (payload.headers && payload.headers.length > 0 && sheet.getLastRow() === 0) {
      sheet.appendRow(payload.headers);
      var headerRange = sheet.getRange(1, 1, 1, payload.headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#0D9488');
      headerRange.setFontColor('#FFFFFF');
    }

    // Append submission row (IP address is automatically the last column)
    if (payload.row && Array.isArray(payload.row)) {
      sheet.appendRow(payload.row);
    }

    return ContentService.createTextOutput(
      JSON.stringify({ result: 'success', rowCount: sheet.getLastRow() })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: 'error', message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
