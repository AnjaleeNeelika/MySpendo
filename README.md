# MySpendo

A modern, comprehensive platform designed to streamline personal finance management, expense tracking, and income organization. Built with Next.js, Supabase, and Tailwind CSS.

## 🚀 Features

- **Dashboard Overview**: Real-time financial insights with charts and statistics.
- **Transaction Management**: Track income and expenses with complete CRUD operations.
- **Category Management**: Organize transactions into custom categories.
- **User Accounts**: Secure user authentication and profile management.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.
- **Modern UI**: Built with Shadcn UI and Radix UI components for a premium look and feel.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Database & Authentication**: [Supabase](https://supabase.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Hooks
- **Form Handling**: React Hook Form

## 🏁 Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- A Supabase account and project

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd MySpendo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `app/`: Next.js App Router pages and API routes.
  - `dashboard/`: Main dashboard and analytics pages.
  - `transactions/`: Transaction management (income/expense tracking).
  - `categories/`: Category management.
- `components/`: Reusable UI components (buttons, dialogs, tables, etc.).
- `lib/`: Utility functions and shared configurations (Supabase client, etc.).
- `types/`: TypeScript type definitions.
- `public/`: Static assets.

<!-- ## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details. -->