# DApp Planner

A Next.js application that generates comprehensive DApp (Decentralized Application) development plans using AI. The application supports both local development with Ollama and cloud deployment with OpenAI.

## Features

- 🚀 Generate DApp development plans with AI
- 🔧 Support for multiple blockchain networks
- 📊 Three complexity levels: Quick, Lean, and Full analysis
- 🌐 Cloud-ready with OpenAI integration
- 🐳 Docker support for local development
- ⚡ Optimized for Vercel deployment

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS, NextUI
- **AI Integration**: Ollama (local) / OpenAI (cloud)
- **TypeScript**: Full type safety
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- OpenAI API key (for cloud deployment) or Ollama (for local development)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd dapp-planner
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and choose one of the AI services:
   
   **Option A: OpenAI (Recommended for production)**
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   OPENAI_MODEL=gpt-3.5-turbo
   ```
   
   **Option B: Ollama (Local development only)**
   ```env
   OLLAMA_MODEL=llama3.2:3b
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Docker Development (Optional)

If you prefer using Docker with Ollama:

1. **Start with Docker Compose**
   ```bash
   docker-compose up -d
   ```

2. **Access the application**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/dapp-planner.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Next.js project

3. **Configure Environment Variables**
   In your Vercel project dashboard:
   - Go to Settings → Environment Variables
   - Add the following variables:
     ```
     OPENAI_API_KEY=your_openai_api_key_here
     OPENAI_MODEL=gpt-3.5-turbo
     ```

4. **Deploy**
   - Click "Deploy"
   - Your app will be live at `https://your-project-name.vercel.app`

### Alternative: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Set environment variables**
   ```bash
   vercel env add OPENAI_API_KEY
   vercel env add OPENAI_MODEL
   ```

## Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|----------|
| `OPENAI_API_KEY` | OpenAI API key for cloud deployment | Yes (for Vercel) | - |
| `OPENAI_MODEL` | OpenAI model to use | No | `gpt-3.5-turbo` |
| `OLLAMA_MODEL` | Ollama model for local development | Yes (for local) | - |

## API Endpoints

### POST `/api/generate`

Generates a DApp development plan.

**Request Body:**
```json
{
  "dappType": "DeFi",
  "chain": "Ethereum",
  "model": "ERC-20",
  "complexity": "lean",
  "targetAudience": "Retail investors",
  "budget": "$50,000",
  "timeline": "3 months",
  "teamSize": "5 developers"
}
```

**Response:**
```json
{
  "output": "Generated DApp development plan..."
}
```

## Project Structure

```
├── app/
│   ├── api/generate/          # API route for AI generation
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/               # React components
├── lib/
│   └── prompts.ts           # AI prompt templates
├── public/                  # Static assets
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore rules
├── docker-compose.yml      # Docker configuration
├── Dockerfile              # Docker image definition
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind CSS configuration
└── vercel.json             # Vercel deployment configuration
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

If you encounter any issues or have questions, please open an issue on GitHub.