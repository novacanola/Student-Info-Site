import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        sand: '#EAE9E3',   // soft beige background
        leaf: '#5B7B65',   // main sage green
        forest: '#2F4A3A', // dark green for titles
        mint: '#E4EDE6',   // light green tint
        ink: '#1F2421'     // near-black for text and buttons
      },
      fontFamily: {
        body: ['"DM Sans"', 'sans-serif']
      }
    }
  }
}