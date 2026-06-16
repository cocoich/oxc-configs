import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: { lint: 'oxlint.config.ts', fmt: 'oxfmt.config.ts' },
  exports: true,
  dts: true,
  deps: {
    neverBundle: ['oxlint', 'oxfmt'],
  },
})
