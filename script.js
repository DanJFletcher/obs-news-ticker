const messages = [
    `NodeJS 16 officially released. See changelog for details.`,
    `Growth Session: "Intro to Flutter" from 3:30 to 5:00pm -- Host: Andrii Denysenko`,
    `Laravel Forge now has support for Laravel Octane`,
    `Growth Session: "TypeScript Exercisms" from 3:30 to 5:00pm -- Host: Manny Canarte`,
    `Vue 3.0 drops IE 11 support (RFC)`,
    `Growth Session: "Lets Update our Website" from 4:00 to 5:00pm -- Host: Opeyemi Afolayan`,
    `TypeScript announces 4.3 Beta`,
    `ng-conf starts today`,
    `Growth Session: "Help us write jest tests for Honorlock" from 4:00 to 5:00pm -- Host: Justin Bates`,
    `HARMAN's Ignite Store Developers Portal provides a hub for Android Automotive devs...`,
]

const marquee = document.createElement('marquee')
marquee.setAttribute('scrollamount', 10)
marquee.setAttribute('loop', 'infinite')

const textNode = document.createTextNode(messages.join('\u00A0\u00A0\u00A0\u00A0|\u00A0\u00A0\u00A0\u00A0'))
marquee.appendChild(textNode)

document.getElementsByTagName('body')[0].appendChild(marquee)