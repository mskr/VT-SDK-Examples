var mapContainer = document.createElement('div')
mapContainer.style.height = '100%'
document.body.append(mapContainer)

vt.map(mapContainer, 'https://api-demo-klinik.virtual-twins.com/').then(() => {
    vt.setView('5a9084e7-17b2-40f9-b0cf-638cc7c53209', {
        select: true,
        resetViewToSelection: true,
        cameraDistanceThreshold: 0,
    })
})
