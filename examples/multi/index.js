const A = document.createElement('div')
A.style.height = '50%'
document.body.append(A)

const B = document.createElement('div')
B.style.height = '50%'
document.body.append(B)

const a = new VT.Map(A, {
    host: 'https://api-demo-klinik.virtual-twins.com/',
    select: true,
    selectionId: 'cd7dc679-07dc-4c32-9008-345ae0547ebf',
})

const b = new VT.Map(B, {
    host: 'https://api-demo-klinik.virtual-twins.com/',
    select: true,
    selectionId: 'dff136c2-29b7-4500-8ca0-6a01c68851fd',
})
