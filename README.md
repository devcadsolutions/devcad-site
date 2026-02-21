# DevCAD Solutions

This is a modern, professional, high-conversion marketing website for DevCAD Solutions, built with Next.js, TypeScript, and Tailwind CSS. It was bootstrapped with Firebase Studio.

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

This project uses Genkit for AI-powered FAQ generation. You'll need to configure a Google AI API key.

1.  Copy the `.env.local.example` file to a new file named `.env.local`:
    ```bash
    cp .env.local.example .env.local
    ```
2.  Open `.env.local` and add your Google AI API key:
    ```
    GOOGLE_GENAI_API_KEY="your-google-ai-api-key"
    ```

### 3. Run the Development Server

To run the main Next.js application:

```bash
npm run dev
```

The site will be available at [http://localhost:9002](http://localhost:9002).

To run the Genkit AI flows (for FAQ generation):

```bash
npm run genkit:watch
```

This runs the Genkit development server, allowing the Next.js app to call the AI functions.

## Building for Production

To create a production-ready build of the application:

```bash
npm run build
```

The output will be generated in the `.next` directory, ready for deployment.

## Deployment to Firebase Hosting

This project is configured for easy deployment to Firebase Hosting directly from Firebase Studio.

1.  Open the Firebase Studio panel in your IDE.
2.  Navigate to the "Hosting" section.
3.  Click "Deploy to Hosting".
4.  Follow the prompts to authenticate, select or create a Firebase project, and choose your deployment target (production or a preview channel).
5.  Firebase Studio will automatically handle the build process and deploy your site.

## Customization Checklist

To make this website your own, you need to update the following placeholder content:

-   **`src/config/site.ts`**:
    -   `name`: Your company name.
    -   `url`: Your website's domain.
    -   `ogImage`: URL for your OpenGraph preview image.
    -   `description`: Your site's meta description for SEO.
    -   `links.email`: Your public contact email address.

-   **`src/components/Logo.tsx`**:
    -   Replace the default SVG with your own company logo.

-   **Content & Copy**:
    -   Review and edit all text content in the `src/app` and `src/components/sections` directories to match your brand's voice and offerings.

-   **`src/lib/placeholder-images.json`**:
    -   Replace the placeholder image data with real data from your projects. Update `imageUrl` to point to your own images and ensure `imageHint` is relevant for AI-powered image search if you use that feature. The current setup uses `picsum.photos` for placeholders.

-   **`src/app/actions.ts`**:
    -   In the `submitContactForm` function, replace the `console.log` statement with your desired backend integration (e.g., sending an email via an API, or writing to a Firestore collection).

-   **`public/` directory**:
    -   Add your `favicon.ico` and other site icons.
    -   Add your `og.jpg` image for social sharing.
