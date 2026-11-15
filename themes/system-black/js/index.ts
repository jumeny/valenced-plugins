/// <reference types="@valenced/themes-api" />

import { lazyColors } from '../../../shared/theme-kit'
import type { Look, Palette, Tone } from '../../../shared/theme-kit'

// System Black keeps Discord's normal hue colours, but collapses neutral
// surfaces to the original #000000 / #08080A palette.
const tone: Tone = {
  greys: [
    ['#000000', '#000000'], ['#2c2d32', '#000000'],
    ['#323339', '#000000'], ['#393a41', '#08080A'],
    ['#41434a', '#08080A'], ['#595a63', '#1e1f22'],
    ['#81828a', '#77777d'], ['#97979f', '#999aa1'],
    ['#abacb2', '#b5b5b5'], ['#c5c6ca', '#d0d0d0'],
    ['#efeff1', '#efeff1'], ['#f3f3f4', '#f3f3f4'],
    ['#fbfbfb', '#fbfbfb'], ['#ffffff', '#ffffff'],
  ],
  hues: {
    red: '#d22d39', orange: '#fe6e0d', yellow: '#faaa00',
    green: '#23a55a', teal: '#4cb5bf', blue: '#0074e3',
    blurple: '#5865f2', purple: '#a056f2', pink: '#ff4cd2',
  },
}

const black: Palette = {
  rail: '#000000', floor: '#000000', panel: '#000000',
  page: '#08080A', card: '#08080A', popup: '#08080A',
  input: '#08080A', control: '#08080A', pressed: '#1e1f22',
  heading: '#ffffff', strong: '#f3f3f4', text: '#dcddde',
  subtle: '#b5b5b5', muted: '#999aa1', faint: '#77777d',
  divider: '#ffffff14', border: '#ffffff1f', borderStrong: '#ffffff29',
  accent: '#5865f2', accentPress: '#4752c4', onAccent: '#ffffff',
  accentSoft: '#5865f23d', accentText: '#a0a9fa', brand: '#5865f2',
  rowIcon: '#b5b5b5', selection: '#1e1f22',
  link: '#00a8fc', mentionText: '#ffffff', mentionPill: '#5865f23d',
  mentionBg: '#5865f21a', replyBg: '#ffffff0a', keyword: '#faaa0033',
  code: '#08080A', codeText: '#dcddde', spoiler: '#1e1f22',
  spoilerRevealed: '#232428', positive: '#23a55a', warning: '#faaa00',
  danger: '#d22d39', dangerFill: '#d22d39', scrim: '#000000cc',
}

const dark: Look = {
  palette: black,
  extra: {
    // Keep the legacy composer and control edges understated.
    MOBILE_CHATINPUT_BORDER_DEFAULT: '#ffffff14',
    MOBILE_CHATINPUT_BORDER_ACTIVE: '#ffffff29',
    CONTROL_PRIMARY_BORDER_DEFAULT: '#ffffff14',
    CONTROL_SECONDARY_BORDER_DEFAULT: '#ffffff14',
    CONTROL_SECONDARY_BORDER_ACTIVE: '#ffffff29',
    INPUT_BORDER_DEFAULT: '#ffffff1f',
    BORDER_FOCUS: '#ffffff29',
  },
}

export default plugin({
  preInit({ themes }) {
    themes.registerGroup('mylloon', {
      name: 'Mylloon',
      description: "Mylloon's original pure-black Discord theme.",
    })
    themes.registerTheme('mylloon', 'system-black', {
      name: 'System Black',
      description: "Mylloon's legacy black palette, adapted for current Discord surfaces and controls.",
      getColors: lazyColors(tone, {
        dark,
        darker: dark,
        midnight: dark,
        light: dark,
      }),
    })
  },
})
