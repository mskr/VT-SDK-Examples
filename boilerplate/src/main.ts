import './style.css'
import typescriptLogo from './typescript.svg'
import vtLogo from './vt.svg'
import vt from '../cool_modules/virtualtwins'

vt.map(document.querySelector<HTMLDivElement>('#app'),
  'https://api-demo-klinik.virtual-twins.com')

document.querySelector<HTMLDivElement>('#intro')!.innerHTML = `
  <div>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <a href="https://www.virtual-twins.com/" target="_blank">
      <img src="${vtLogo}" class="logo vanilla" alt="Virtual Twins logo" />
    </a>
    <h1>Vite + TypeScript + VirtualTwins</h1>
  </div>
`
