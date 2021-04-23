const messages = [
    `Weather is not as big as we thought: Colin DeCarlo.`,
    `Lighting Talks next Friday. Don't forget to submit your talk!`,
    `Laravel Forge now has support for Laravel Octane.`,
    `Taylor opens PR for Laravel 8. Offers gracefull fallback when rotating app keys.`,
    `Cypress introduces new "Component Test Runner" alpha in v7.0.`,
    `TypeScript 4.3 introduces new "override" keyword.`,
    `Laravel 8.5.16 adds fix to ignore SQLite files on parallel testing.`,
    `Do you have news worth sharing? DM me.`
]

const content = document.getElementById('content')

const textNode = document.createTextNode(messages.sort(() => 0.5 - Math.random()).join('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'))
content.appendChild(textNode)