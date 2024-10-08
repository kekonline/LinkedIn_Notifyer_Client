
interface ImportMetaEnv {
    readonly VITE_SERVER_URL: string; // Add other custom env variables if needed
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
