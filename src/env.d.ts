// Tipos das variáveis de ambiente (as do arquivo .env). Só as que começam com PUBLIC_
// chegam ao navegador; as demais ficam só no build.
interface ImportMetaEnv {
  readonly PUBLIC_WEB3FORMS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
