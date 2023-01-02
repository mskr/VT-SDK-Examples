var mapContainer = document.createElement('div')
mapContainer.style.height = '100%'
document.body.append(mapContainer)

vt.map(mapContainer, 'https://api-demo-klinik.virtual-twins.com/').then(() =>
    vt.setView('cd7dc679-07dc-4c32-9008-345ae0547ebf')
)
