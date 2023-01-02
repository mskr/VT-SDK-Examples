[vt2](../README.md) / IVTAppExternal

# Interface: IVTAppExternal

Interface for JS API - Complete

## Hierarchy

- `IVTAppExternalSelection`

- `IVTAppExternalRouting`

- `IVTAppExternalLocation`

- `IVTAppExternalAssets`

  ↳ **`IVTAppExternal`**

## Table of contents

### Properties

- [targetIFrame](IVTAppExternal.md#targetiframe)
- [targetOrigin](IVTAppExternal.md#targetorigin)

### Methods

- [addAssets](IVTAppExternal.md#addassets)
- [addAssetsAsync](IVTAppExternal.md#addassetsasync)
- [addStyles](IVTAppExternal.md#addstyles)
- [createAssetId](IVTAppExternal.md#createassetid)
- [dispose](IVTAppExternal.md#dispose)
- [hideRoute](IVTAppExternal.md#hideroute)
- [map](IVTAppExternal.md#map)
- [preload](IVTAppExternal.md#preload)
- [removeAssets](IVTAppExternal.md#removeassets)
- [reset](IVTAppExternal.md#reset)
- [select](IVTAppExternal.md#select)
- [setRouteEnd](IVTAppExternal.md#setrouteend)
- [setRouteStart](IVTAppExternal.md#setroutestart)
- [setUserLocation](IVTAppExternal.md#setuserlocation)
- [setUserLocationURL](IVTAppExternal.md#setuserlocationurl)
- [setView](IVTAppExternal.md#setview)
- [setViewFromDeeplink](IVTAppExternal.md#setviewfromdeeplink)
- [showRoute](IVTAppExternal.md#showroute)
- [updateAssets](IVTAppExternal.md#updateassets)

## Properties

### targetIFrame

• `Optional` **targetIFrame**: ``null`` \| `HTMLIFrameElement`

Set this property to the iframe with the VT that you want to control.
Null means this document itself contains the VT.

#### Defined in

IVTAppExternal.ts:329

___

### targetOrigin

• `Optional` **targetOrigin**: ``null`` \| `string`

VT embed origin.
To control a VT in an iframe, set its origin (protocol, host(, port)) here.
This is necessary for secure cross-origin communication.

#### Defined in

IVTAppExternal.ts:336

## Methods

### addAssets

▸ **addAssets**(`assets`): `string`[]

Add assets to map

#### Parameters

| Name | Type |
| :------ | :------ |
| `assets` | `IAssetDefinition`[] |

#### Returns

`string`[]

#### Inherited from

IVTAppExternalAssets.addAssets

#### Defined in

IVTAppExternal.ts:294

___

### addAssetsAsync

▸ **addAssetsAsync**(`assets`): `Promise`<`string`[]\>

Add assets to map

#### Parameters

| Name | Type |
| :------ | :------ |
| `assets` | `IAssetDefinition`[] |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

IVTAppExternalAssets.addAssetsAsync

#### Defined in

IVTAppExternal.ts:300

___

### addStyles

▸ **addStyles**(`styles`): `Promise`<`void`\>

Add additional styles for asset categories if needed

#### Parameters

| Name | Type |
| :------ | :------ |
| `styles` | `IRenderStyle`[] |

#### Returns

`Promise`<`void`\>

#### Inherited from

IVTAppExternalAssets.addStyles

#### Defined in

IVTAppExternal.ts:318

___

### createAssetId

▸ **createAssetId**(): `string`

Create an ID for an asset, uses uuid()

#### Returns

`string`

#### Inherited from

IVTAppExternalAssets.createAssetId

#### Defined in

IVTAppExternal.ts:288

___

### dispose

▸ **dispose**(): `void`

Destroy VT map

#### Returns

`void`

#### Defined in

IVTAppExternal.ts:360

___

### hideRoute

▸ **hideRoute**(): `void`

Leave routing mode

#### Returns

`void`

#### Inherited from

IVTAppExternalRouting.hideRoute

#### Defined in

IVTAppExternal.ts:252

___

### map

▸ **map**(`domElement`, `options?`): `Promise`<`void`\>

Display VT map

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domElement` | `Element` | container for render canvas |
| `options?` | `string` \| [`IVTInitConfig`](../README.md#ivtinitconfig) | setup custom map view options, at least a host string |

#### Returns

`Promise`<`void`\>

#### Defined in

IVTAppExternal.ts:343

___

### preload

▸ **preload**(): `Promise`<`void`\>

Preloads all building data after map was initialized with map()
May be used to preload data when WLAN is active to save bandwidth on mobile devices
TODO discuss feature

#### Returns

`Promise`<`void`\>

#### Defined in

IVTAppExternal.ts:350

___

### removeAssets

▸ **removeAssets**(`ids`): `void`

Remove assets by ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string`[] |

#### Returns

`void`

#### Inherited from

IVTAppExternalAssets.removeAssets

#### Defined in

IVTAppExternal.ts:312

___

### reset

▸ **reset**(): `Promise`<`void`\>

Reset VT map to default

#### Returns

`Promise`<`void`\>

#### Defined in

IVTAppExternal.ts:355

___

### select

▸ **select**(`featureId`, `options?`): `Promise`<`void`\>

Select feature on VT map

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `featureId` | `string` | references feature from VT backend |
| `options?` | [`IVTViewOptions`](../README.md#ivtviewoptions) |  |

#### Returns

`Promise`<`void`\>

#### Inherited from

IVTAppExternalSelection.select

#### Defined in

IVTAppExternal.ts:210

___

### setRouteEnd

▸ **setRouteEnd**(`end`): `Promise`<`void`\>

Enter routing mode with end position

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `end` | `string` \| `LatLong` | feature or geo coordinate |

#### Returns

`Promise`<`void`\>

#### Inherited from

IVTAppExternalRouting.setRouteEnd

#### Defined in

IVTAppExternal.ts:247

___

### setRouteStart

▸ **setRouteStart**(`start`): `Promise`<`void`\>

Enter routing mode with start position

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `string` \| `LatLong` | feature or geo coordinate |

#### Returns

`Promise`<`void`\>

#### Inherited from

IVTAppExternalRouting.setRouteStart

#### Defined in

IVTAppExternal.ts:241

___

### setUserLocation

▸ **setUserLocation**(`geoPosition?`, `level?`, `options?`): `Promise`<`void`\>

Show user location (blue circle) on map

**`See`**

https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPosition

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geoPosition?` | `GeolocationPosition` | object of type GeolocationPosition |
| `level?` | `string` \| `number` | - |
| `options?` | [`IVTLocationOptions`](../README.md#ivtlocationoptions) | - |

#### Returns

`Promise`<`void`\>

#### Inherited from

IVTAppExternalLocation.setUserLocation

#### Defined in

IVTAppExternal.ts:275

___

### setUserLocationURL

▸ **setUserLocationURL**(`url`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options?` | [`IVTLocationOptions`](../README.md#ivtlocationoptions) |

#### Returns

`Promise`<`void`\>

#### Inherited from

IVTAppExternalLocation.setUserLocationURL

#### Defined in

IVTAppExternal.ts:276

___

### setView

▸ **setView**(`identifierOrCoords`, `options?`): `Promise`<`void`\>

Show feature on VT map

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifierOrCoords` | ``null`` \| `string` \| `LatLong` \| `LatLong`[] |
| `options?` | [`IVTViewOptions`](../README.md#ivtviewoptions) |

#### Returns

`Promise`<`void`\>

#### Inherited from

IVTAppExternalSelection.setView

#### Defined in

IVTAppExternal.ts:217

___

### setViewFromDeeplink

▸ **setViewFromDeeplink**(): `Promise`<`void`\>

Takes the URL from the browser address bar and follows it if it contains a deeplink.
Works also inside iframes, in which case it looks one level up the window hierarchy.
NOTE: If deeplinks contain routes, selections will be ignored.

#### Returns

`Promise`<`void`\>

#### Inherited from

IVTAppExternalSelection.setViewFromDeeplink

#### Defined in

IVTAppExternal.ts:224

___

### showRoute

▸ **showRoute**(`stops`, `options?`): `Promise`<`void`\>

Show route on VT map

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stops` | (``null`` \| `string`)[] \| (``null`` \| `LatLong`)[] | list of at least 2 feature IDs or geo coordinates |
| `options?` | [`IVTViewOptions`](../README.md#ivtviewoptions) | - |

#### Returns

`Promise`<`void`\>

#### Inherited from

IVTAppExternalRouting.showRoute

#### Defined in

IVTAppExternal.ts:235

___

### updateAssets

▸ **updateAssets**(`ids`): `void`

update assets by ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string`[] |

#### Returns

`void`

#### Inherited from

IVTAppExternalAssets.updateAssets

#### Defined in

IVTAppExternal.ts:306
