var mapContainer = document.createElement('div')
mapContainer.style.height = '100%'
document.body.append(mapContainer)

// http://127.0.0.1:8080?s=cd7dc679-07dc-4c32-9008-345ae0547ebf
vt.map(mapContainer, {
    host: 'https://api-demo-klinik.virtual-twins.com/',
    deeplinkCamera: 'URLSearchParams',
})
