# IM3 Travel eSIM Marketplace PWA

Installable, static Vercel-ready prototype for the AIX Phase III Thailand travel journey. It is responsive for iPhone Safari and Android browsers. AIX is represented here as a digital identity platform and intelligence-orchestration layer: it governs consent and permitted recommendations; it is not presented as an operator marketplace itself.

## Deploy to Vercel

1. Upload this whole folder to a new GitHub repository, or import it directly in Vercel.
2. Select **Other** as the framework preset.
3. Leave the build command empty and set the output directory to `.`.
4. Deploy.

There are no environment variables, build tools, Node dependencies, or build command.

## Install on iPhone

1. Open the deployed Vercel link in **Safari** on an iPhone.
2. Tap **Share**.
3. Select **Add to Home Screen**.
4. Open **IM3 Travel** from the home screen for a full-screen, app-like demo.

The PWA can demonstrate the iPhone eSIM journey and show an operator-issued QR/manual activation fallback. It cannot directly invoke Apple's native **Add eSIM** API; that needs an Apple-approved native carrier integration.

## Demo flow

Home → Thailand arrival → journey-specific consent → personalisation buffer → next-best IM3 roaming or local eSIM option → package / operator comparison → checkout → activation → dashboard and receipt.

The page is an illustrative mockup. It does not connect to IM3 Shop, AIS, a payment provider, or an eSIM provisioning API.
