# IM3 Travel eSIM Marketplace PWA

Installable, static Vercel-ready prototype for the AIX Phase III Thailand local eSIM journey. It is responsive for iPhone Safari and Android browsers.

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

Home → Thailand plans → operator filter → choose plan → traveller details → payment → operator fulfilment → iPhone/Android native-install handoff → QR/manual fallback → activation dashboard → receipt.

The page is an illustrative mockup. It does not connect to IM3 Shop, AIS, a payment provider, or an eSIM provisioning API.
