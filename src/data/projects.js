const projects = [
  {
    id: 'stratum',
    name: 'STRATUM',
    tagline: 'Digital archaeology and cultural heritage management.',
    description: `STRATUM is a team-built application designed for archaeology and cultural heritage documentation. Built for both competitions and real-world institutional use, it provides tools for managing archaeological data in environments where internet connectivity may be limited or unavailable.`,
    highlights: [
      'First place at a regional competition',
      'Letter of recognition from the Ministry of Culture',
      'Interest from archaeologists and national institutions',
      'Supports local server deployment for offline environments',
    ],
    status: 'Active',
    tags: ['Full Stack', 'Archaeology', 'Offline-First'],
    link: null,
  },
  {
    id: 'quickbot',
    name: 'QuickBot CLI',
    tagline: 'A macOS CLI tool with a plugin system.',
    description: `QuickBot is a macOS command-line tool I built with full community plugin support. It's designed to be extensible, letting anyone create and share plugins. Currently in early beta, so expect some rough edges.`,
    highlights: [
      'Plugin system with community support',
      'macOS native CLI tool',
      'Installer script hosted on GitHub',
      'Early beta, actively developed',
    ],
    status: 'Beta',
    tags: ['CLI', 'macOS', 'Plugins'],
    link: 'https://github.com/levinismynameirl/quickbot-installer',
    installCommand: 'curl -fsSL https://raw.githubusercontent.com/levinismynameirl/QuickBot-Installer/main/install.sh | bash',
  },
]

export default projects
