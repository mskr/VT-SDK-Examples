var mapContainer = document.createElement('div')
mapContainer.style.height = '100%'
document.body.append(mapContainer)

vt.map(mapContainer, 'https://api-demo-klinik.virtual-twins.com/').then(() =>
    vt.setUserLocation(
        {
            coords: {
                longitude: 8.10814417898655,
                latitude: 51.57215611545016,
                accuracy: 1,
                altitude: 6,
                altitudeAccuracy: 1,
                heading: Math.PI / 4,
                speed: 1,
            },
            timestamp: Date.now(),
        },
        1
    )
)

async function setupRealLocation() {
    if (window.location.protocol !== 'https:') {
        console.warn(
            'Cannot setup geolocation because this is not a https context'
        )
        return
    }
    const info = document.createElement('div')
    info.style.position = 'fixed'
    info.style.width = '100%'
    info.style.height = '100%'
    info.style.zIndex = '999999'
    info.style.display = 'flex'
    info.style.flexDirection = 'column'
    info.style.justifyContent = 'center'
    info.style.textAlign = 'center'
    info.style.fontFamily = 'sans-serif'
    info.style.color = 'white'
    info.style.background = 'rgba(0, 0, 0, 0.8)'
    info.textContent = 'Your location will not be shared'
    document.body.append(info)
    let update = true
    const id = navigator.geolocation.watchPosition(
        async pos => {
            info.remove()
            if (update) {
                update = false
                await vt.setUserLocation(pos)
                update = true
            }
        },
        error => {
            info.textContent = 'Location permission denied. ' + error.message
            setTimeout(() => info.remove(), 3000)
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        }
    )
}
