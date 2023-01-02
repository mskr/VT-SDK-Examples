var mapContainer = document.createElement('div')
document.body.append(mapContainer)

vt.map(mapContainer, {
    host: 'https://example.virtual-twins.com', // change me to a real online host
    isIFrame: true,
    iframeSrc: '/embed.html',
})

vt.setView({ lat: 51.5711, long: 8.1069 })
