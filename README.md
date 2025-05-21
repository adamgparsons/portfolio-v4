# Adam Parsons Portfolio

This is my personal portfolio website, available at [adamparsons.me](https://www.adamparsons.me), showcasing my work, articles, and professional experience.

## Project Overview

This portfolio is built as a modern, responsive web application using Next.js and React. It features:

- A clean, minimalist design
- Blog/article functionality using MDX
- Responsive layout for all device sizes
- TypeScript for type safety
- Styled Components for styling

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (v14.1.0)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (v5)
- **UI Library**: [React](https://reactjs.org/) (v18)
- **Styling**: [Styled Components](https://styled-components.com/) (v6.1.8)
- **Content**: [MDX](https://mdxjs.com/) for writing articles with JSX
- **Deployment**: [Vercel](https://vercel.com/) (inferred from Next.js usage)

## Project Structure

- `/src/components` - Reusable UI components
- `/src/styles` - Global styles and theming
- `/pages` - Next.js pages and routing
- `/articles` - MDX content for blog posts
- `/public` - Static assets
- `/types` - TypeScript type definitions

## Getting Started

### Prerequisites

- Node.js (v14 or later recommended)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/adamgparsons/portfolio-v4.git
   cd portfolio-v4
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

### Adding New Articles

1. Create a new MDX file in the `/articles` directory
2. Add frontmatter and content
3. The article will automatically be added to the articles list

### Styling

This project uses Styled Components for styling. Global theme variables are defined in `/src/styles/theme.ts`.

### Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

## Deployment

This project is configured for easy deployment on Vercel. Simply connect your GitHub repository to Vercel for automatic deployments on push.

For other hosting platforms:

1. Build the project: `npm run build`
2. Start the production server: `npm run start`

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Adam Parsons - [adam@adamparsons.me](mailto:adam@adamparsons.me)

Project Link: [https://github.com/adamgparsons/portfolio-v4](https://github.com/adamgparsons/portfolio-v4)

