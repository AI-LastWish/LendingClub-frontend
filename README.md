
# LendingClub Frontend

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). The application visualizes insights and trends in LendingClub loan data, featuring dynamic visualizations such as histograms, bar charts, and line plots.

## Getting Started

### Prerequisites

To run this project locally, ensure you have the following installed:
- Node.js (v16 or later)
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/lendingclub-frontend.git
   cd lendingclub-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Running the Development Server

Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

You can start editing the page by modifying `src/app/page.tsx`. The app will auto-update as you make changes.

### Build for Production

To build the application for production:
```bash
npm run build
```

This will create an optimized build in the `.next` folder.

### Deployment

The easiest way to deploy the application is via [Vercel](https://vercel.com). Follow the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for detailed instructions.

---

## Methodology

This application visualizes insights derived from LendingClub loan data. The workflow includes:

1. **Data Analysis**:
   - Loan data was analyzed to identify loan default trends and distributions.
   - Trends such as yearly default rates, loan amounts, and borrower attributes were extracted and prepared for visualization.

2. **Visualizations**:
   - **Histograms**: Display loan amount distributions.
   - **Line Charts**: Show yearly default trends.
   - **Bar Charts**: Illustrate loan counts across categories.
   - **Heatmaps**: Represent correlations between borrower features.

3. **Interactivity**:
   - Users can interact with visualizations by applying filters to analyze specific timeframes or categories.

---

## Results and Insights

### Key Findings
1. **Default Trends**:
   - Significant increases in loan defaults were observed during economic downturns, such as in 2008.
   - A decline in defaults was noted post-2015, correlating with improved lending practices.

2. **Loan Distribution**:
   - Loan amounts ranged from $500 to $35,000, with an average of $11,035.
   - 50% of loans were below $9,600.

3. **Actionable Insights**:
   - Focused risk assessments during economic downturns could mitigate losses.
   - Additional borrower attributes (e.g., credit score) should be factored into risk models.

---

## Learn More

To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs): Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn): An interactive Next.js tutorial.

Check out the [Next.js GitHub repository](https://github.com/vercel/next.js) for feedback and contributions.

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new). Follow the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for detailed instructions.

---

## Contribution Guidelines

We welcome contributions to improve this project! To contribute:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Description of your changes"
   ```
4. Push the branch and open a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
