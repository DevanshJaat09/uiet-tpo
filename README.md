# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


function doPost(e) {
  var sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1OAeH260Z0aXk4DvdK2SP2NPZiBqL_b4upYBSm1bkRxk/edit?gid=0#gid=0").getSheetByName("Sheet1");
  sheet.appendRow([
    new Date(),
    e.parameter.name,
    e.parameter.number,
    e.parameter.email,
    e.parameter.city,
    e.parameter.qualifications,
    e.parameter.exam,
    e.parameter["interested course"],
    e.parameter.message
  ]);
  return ContentService.createTextOutput("Form submitted successfully");
}