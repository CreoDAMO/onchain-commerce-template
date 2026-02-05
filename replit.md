# Onchain Commerce Template

## Overview
An Onchain Commerce Template built with OnchainKit for creating cryptocurrency-based online stores. The application enables crypto payments using USDC on the Base network.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Blockchain**: Coinbase OnchainKit, wagmi, viem
- **Language**: TypeScript
- **Testing**: Vitest

## Project Structure
```
src/
├── app/           # Next.js app router pages and API routes
├── components/    # React components (store, cart, navbar, etc.)
├── hooks/         # Custom React hooks
├── images/        # Product images
├── svg/           # SVG icons
├── config.ts      # Environment configuration
├── wagmi.ts       # Wagmi (wallet) configuration
└── types.ts       # TypeScript types
```

## Running the Application
The application runs on port 5000 using npm:
```bash
npm run dev -- --port 5000 --hostname 0.0.0.0
```

## Environment Variables
The following environment variables are needed:
- `NEXT_PUBLIC_ONCHAINKIT_API_KEY` - API key from Coinbase Developer Portal
- `COINBASE_COMMERCE_API_KEY` - API key from Coinbase Commerce
- `NEXT_PUBLIC_ENVIRONMENT` - Environment setting (localhost/production)

## Key Components
- **OnchainStore**: Main store component with product listings
- **OnchainStoreCart**: Shopping cart with checkout functionality
- **OnchainProviders**: Wallet and blockchain connection providers
- **Navbar**: Navigation with wallet connection

## Recent Changes
- Configured for Replit environment with port 5000
- Added next.config.js with cache control headers
- Set NEXT_PUBLIC_ENVIRONMENT to localhost

## Notes
- Checkout is disabled by default for demo purposes
- Uses wagmi for wallet connections
- Supports Base network for USDC payments
