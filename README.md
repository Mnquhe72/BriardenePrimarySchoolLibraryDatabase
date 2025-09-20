# School Library Management App

A simple, mobile-first web application designed to help under-resourced schools manage their library inventory and lending process. This app empowers teachers and librarians to easily catalog books, track loans to classes, and monitor reading circulation among learners, aiming to support and encourage school reading drives.

## Technology Stack

This project uses a modern, cost-effective, and easy-to-manage technology stack:

- **Frontend:** **React** (with TypeScript) for a dynamic user interface.
- **Styling:** **SCSS** for organized and maintainable styles.
- **Backend:** **Google Apps Script** for serverless functions that connect directly to the database.
- **Database:** **Google Sheets** for a simple, visual, and free database solution.
- **Deployment:** **Netlify** for professional, reliable, and free frontend hosting.

---

## Getting Started

To set up and run this project, you need to configure both the backend (Google Sheets) and the frontend (the React app).

### Backend Setup

The entire backend is managed within your Google Workspace account.

1.  **Create the Google Sheet:**

    - Create a new Google Sheets file named **`School Library Database`**.
    - Inside this file, create the following five tabs:
      - `Library_Inventory`
      - `Checkout_Ledger`
      - `User_Accounts`
      - `Class_Lists`
      - `Reading_Log`
    - Set up the specific columns for each sheet as previously designed.

2.  **Populate User Accounts:**

    - In the **`User_Accounts`** tab, add the list of authorized users.
    - Make sure each user has a full email in the `UserID (Email)` column and a correctly spelled role (`Librarian` or `Teacher`) in the `Role` column.

3.  **Create the Google Apps Script:**

    - In your Google Sheet, go to **`Extensions`** \> **`Apps Script`**.
    - Delete any default code in the `Code.gs` file and paste in the complete backend script code (the final version with `doPost` and `doOptions` for CORS handling).

4.  **Deploy the Script:**

    - In the Apps Script editor, click **`Deploy`** \> **`New deployment`**.
    - Set the type to **Web app**.
    - Under **"Who has access,"** select **`Anyone`**.
    - Click **`Deploy`**.
    - **Copy the generated Web app URL.** This is crucial for the next steps.

### Frontend Setup

1.  **Download the Code:**

    - Download the project code as a ZIP file and unzip it into a folder on your computer.

2.  **Install Dependencies:**

    - You will need **Node.js** installed on your computer to run the following commands.
    - Open a terminal or command prompt, navigate into the project folder, and run this command to install all the necessary software packages:
      ```bash
      npm install
      ```

3.  **Connect to the Backend:**

    - In your code editor, open the file: `src/pages/Login.tsx`.
    - Find the line `const scriptURL = '...';`.
    - Paste your unique **Web app URL** from the backend setup inside the quotes.

4.  **Run the App Locally:**

    - In your terminal, run the following command to start the local development server:
      ```bash
      npm run dev
      ```
    - Your app will now be running and accessible in your web browser at a local address (usually `http://localhost:5173`).
