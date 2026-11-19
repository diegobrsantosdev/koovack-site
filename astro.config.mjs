// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://koovackarquitetura.com.br',
  server: {
    // Escuta em todas as interfaces de rede: permite abrir o site no celular
    // (mesmo Wi-Fi) durante o desenvolvimento. Não afeta o site publicado.
    host: true,
  },
});
