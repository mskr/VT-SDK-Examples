# vt2

## Interfaces

- [IVTAppExternal](interfaces/IVTAppExternal.md)

## Type Aliases

### CustomerID

 **CustomerID**: `string`

#### Defined in

IVTAppExternal.ts:20

___

### HostString

 **HostString**: `string`

#### Defined in

IVTAppExternal.ts:22

___

### IVTCameraViewOptions

 **IVTCameraViewOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `animationDuration?` | `number` | Duration in seconds for if animations are enabled |
| `cameraBearing?` | `number` | Force bearing/heading |
| `cameraDistanceThreshold?` | `number` | Camera will move when exceeding this distance.  Default depends on feature/point being viewed/selected. A lookup table will be published soon. |
| `cameraPitch?` | `number` | Force pitch/tilt |
| `deeplinkCamera?` | ``"default"`` \| ``"URLSearchParams"`` \| ``"none"`` | Choose how camera appears in deeplink |
| `googleEarthCameraString?` | `string` | String starting with @ as in:  https://earth.google.com/web/@51.43451906,6.98870865,108.54804037a,765.63815555d,35y,0h,0t,0r |
| `isAnimated?` | `boolean` | Animates the camera. Affects the time until setView resolves. |

#### Defined in

IVTAppExternal.ts:36

___

### IVTInitConfig

 **IVTInitConfig**: { `height?`: `number` ; `heightUnit?`: `string` ; `host`: [`HostString`](README.md#hoststring) ; `iframeSrc?`: `string` ; `interface?`: `IVTInterfaceOptions` ; `isIFrame?`: `boolean` ; `isInteractive?`: `boolean` ; `styles?`: `IRenderStyle`[] ; `width?`: `number` ; `widthUnit?`: `string`  } & [`IVTServiceConfig`](README.md#ivtserviceconfig) & `IVTMapboxConfig` & [`IVTViewOptions`](README.md#ivtviewoptions)

#### Defined in

IVTAppExternal.ts:118

___

### IVTLocationOptions

 **IVTLocationOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `throttleDuration?` | `number` | Should be used for repeated calls and is in milliseconds (default 1000ms) |

#### Defined in

IVTAppExternal.ts:255

___

### IVTRoutingViewOptions

 **IVTRoutingViewOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `routingIds?` | `string`[] | Internal or external IDs (VT or customer) to show a route for.  Sorting order matters.  NOTE: This option will override any selection options (selectionId, resetViewToSelection etc.) |

#### Defined in

IVTAppExternal.ts:76

___

### IVTSelectionViewOptions

 **IVTSelectionViewOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectionId?` | `string` | Internal or external ID (VT or customer) to select |

#### Defined in

IVTAppExternal.ts:69

___

### IVTServiceConfig

 **IVTServiceConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `routingHost?` | [`routingHost`](README.md#routinghost) |
| `searchHost?` | [`searchHost`](README.md#searchhost) |

#### Defined in

IVTAppExternal.ts:26

___

### IVTViewOptions

 **IVTViewOptions**: { `is3D?`: `boolean` ; `mode?`: `AppModeType` ; `resetViewToRoute?`: `boolean` ; `resetViewToSelection?`: `boolean` ; `select?`: `boolean` ; `zoomLevel?`: `number`  } & [`IVTRoutingViewOptions`](README.md#ivtroutingviewoptions) & [`IVTSelectionViewOptions`](README.md#ivtselectionviewoptions) & [`IVTCameraViewOptions`](README.md#ivtcameraviewoptions)

#### Defined in

IVTAppExternal.ts:85

___

### UUID

 **UUID**: `string`

#### Defined in

IVTAppExternal.ts:18

___

### VTCommandMessage

 **VTCommandMessage**: `Object`

Used in window.postMessage() to control iframe.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `args` | `unknown`[] |
| `fn` | `string` |

#### Defined in

IVTAppExternal.ts:199

___

### routingHost

 **routingHost**: `string`

#### Defined in

IVTAppExternal.ts:24

___

### searchHost

 **searchHost**: `string`

#### Defined in

IVTAppExternal.ts:23

## Variables

### VTDefaultLocationOptions

 `Const` **VTDefaultLocationOptions**: [`IVTLocationOptions`](README.md#ivtlocationoptions)

#### Defined in

IVTAppExternal.ts:262

___

### VTDefaultOptions

 `Const` **VTDefaultOptions**: [`IVTInitConfig`](README.md#ivtinitconfig)

#### Defined in

IVTAppExternal.ts:174

___

### VTDefaultViewOptions

 `Const` **VTDefaultViewOptions**: [`IVTViewOptions`](README.md#ivtviewoptions)

#### Defined in

IVTAppExternal.ts:191
