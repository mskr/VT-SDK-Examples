/**
 * VIRTUAL TWINS Frontend
 * Copyright 2022 Archkomm GmbH - All rights reserved.
 * https://www.virtual-twins.com/
 *
 * Unauthorized copying of this file via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

// This file is intended as reference documentation of the JS API.

import LatLong from '../vt2/common/LatLong';
import IRenderStyle from '../vt2/modules/render/IRenderStyle';
import { AppModeType } from '../vt2/modules/app/IAppMode';
import { IAssetDefinition } from '@vt2/modules/data/poi/IAsset';
import { IVTInterfaceOptions } from '@vt2/modules/app/stores/appStore';

export type UUID = string;

export type CustomerID = string;

export type HostString = string;
export type searchHost = string;
export type routingHost = string;

export type IVTServiceConfig = {
    routingHost?: routingHost;
    searchHost?: searchHost;
};

type IVTMapboxConfig = {
    mapboxToken?: string;
    mapboxStyle?: string;
}

export type IVTCameraViewOptions = {
    /**
     * String starting with @ as in:
     * https://earth.google.com/web/@51.43451906,6.98870865,108.54804037a,765.63815555d,35y,0h,0t,0r
     */
    googleEarthCameraString?: string;
    /**
     * Force bearing/heading
     */
    cameraBearing?: number;
    /**
     * Force pitch/tilt
     */
    cameraPitch?: number;
    /**
     * Animates the camera. Affects the time until setView resolves.
     */
    isAnimated?: boolean;
    /**
     * Duration in seconds for if animations are enabled
     */
    animationDuration?: number;
    /**
     * Choose how camera appears in deeplink
     */
    deeplinkCamera?: 'default' | 'URLSearchParams' | 'none';
    /**
     * Camera will move when exceeding this distance.
     * Default depends on feature/point being viewed/selected. A lookup table will be published soon.
     */
    cameraDistanceThreshold?: number;
};

export type IVTSelectionViewOptions = {
    /**
     * Internal or external ID (VT or customer) to select
     */
    selectionId?: string;
};

export type IVTRoutingViewOptions = {
    /**
     * Internal or external IDs (VT or customer) to show a route for.
     * Sorting order matters.
     * NOTE: This option will override any selection options (selectionId, resetViewToSelection etc.)
     */
    routingIds?: string[];
};

export type IVTViewOptions = {
    /**
     * Use intuitive 3D view instead of a 2D version that loads faster?
     * Default: true
     */
    is3D?: boolean;
    /**
     * Override the zoom level that would be chosen according to viewed feature
     */
    zoomLevel?: number;
    /**
     * Select the object that is viewed.
     * Default is false when passed to setView().
     * Ignored when passed to select().
     */
    select?: boolean;
    /**
     * Always force the view to the default view of the selected feature.
     * Default is false, so that camera parameters in the URL take precedence.
     */
    resetViewToSelection?: boolean;
    /**
     * Force the view to fit the given route, if any.
     */
    resetViewToRoute?: boolean;
    /**
     * Available modes:
     * Roaming (default),
     * Routing.
     */
    mode?: AppModeType;
} & IVTRoutingViewOptions & IVTSelectionViewOptions & IVTCameraViewOptions;

export type IVTInitConfig = {
    /**
     * VT host that exposes the VT REST API
     */
    host: HostString;

    /**
     * Be able to move the map?
     * A static image will be produced otherwise.
     * Default: true
     * NOT IMPLEMENTED YET!
     */
    isInteractive?: boolean;

    /**
     * Width of the map
     */
    width?: number;

    /**
     * CSS unit of width, e.g. '%' or 'px'
     */
    widthUnit?: string;

    /**
     * Height of the map
     */
    height?: number;

    /**
     * CSS unit of height, e.g. '%' or 'px
     */
    heightUnit?: string;

    /**
     * Set true to create a VT map in an iframe.
     * Will create an iframe for you, if context is not already `<iframe>`.
     * Prevents URL parameters leaking into parent frame.
     */
    isIFrame?: boolean;

    /**
     * When iframe is created, it will have this src.
     * If a file is referenced, it must exist on the given host and be HTML.
     * Default: /embed.html
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-src
     */
    iframeSrc?: string;

    /**
     * See the VT Styling Documentation
     */
    styles?: IRenderStyle[];
    interface?: IVTInterfaceOptions;
} & IVTServiceConfig & IVTMapboxConfig & IVTViewOptions;

export const VTDefaultOptions: IVTInitConfig = {
    host: 'https://example.virtual-twins.com',
    isInteractive: true,
    isIFrame: false,
    iframeSrc: '/embed.html',
    mode: AppModeType.RoamingMode,
    interface: {
        sidebar: true,
        selectionBreadcrumb: true,
        searchBar: true,
        routingButton: true,
        buttonBar: {
            login: true
        }
    }
};

export const VTDefaultViewOptions: IVTViewOptions = {
    is3D: true,
    resetViewToSelection: false,
};

/**
 * Used in window.postMessage() to control iframe.
 */
export type VTCommandMessage = { fn: string, args: unknown[] };

/**
 * Interface for JS API - Selection features
 */
interface IVTAppExternalSelection {
    /**
     * Select feature on VT map
     * @param featureId references feature from VT backend
     * @param options
     */
    select(featureId: UUID | CustomerID, options?: IVTViewOptions): Promise<void>;

    /**
     * Show feature on VT map
     * @param featureId references feature from VT backend
     * @param options
     */
    setView(identifierOrCoords: UUID | CustomerID | LatLong | LatLong[] | null, options?: IVTViewOptions): Promise<void>;

    /**
     * Takes the URL from the browser address bar and follows it if it contains a deeplink.
     * Works also inside iframes, in which case it looks one level up the window hierarchy.
     * NOTE: If deeplinks contain routes, selections will be ignored.
     */
    setViewFromDeeplink(): Promise<void>;
}

/**
 * Interface for JS API - Routing features
 */
interface IVTAppExternalRouting {
    /**
     * Show route on VT map
     * @param stops list of at least 2 feature IDs or geo coordinates
     */
    showRoute(stops: (UUID | null)[] | (CustomerID | null)[] | (LatLong | null)[], options?: IVTViewOptions): Promise<void>;

    /**
     * Enter routing mode with start position
     * @param start feature or geo coordinate
     */
    setRouteStart(start: UUID | CustomerID | LatLong): Promise<void>;

    /**
     * Enter routing mode with end position
     * @param end feature or geo coordinate
     */
    setRouteEnd(end: UUID | CustomerID | LatLong): Promise<void>;

    /**
     * Leave routing mode
     */
    hideRoute(): void;
}

export type IVTLocationOptions = {
    /**
     * Should be used for repeated calls and is in milliseconds (default 1000ms)
     */
    throttleDuration?: number;
};

export const VTDefaultLocationOptions: IVTLocationOptions = {
    throttleDuration: 1000,
};

/**
 * Interface for JS API - Location features
 */
interface IVTAppExternalLocation {
    /**
     * Show user location (blue circle) on map
     * @param geoPosition object of type GeolocationPosition
     * @see https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPosition
     */
    setUserLocation(geoPosition?: GeolocationPosition, level?: number | string, options?: IVTLocationOptions): Promise<void>;
    setUserLocationURL(url: string, options?: IVTLocationOptions): Promise<void>;
}

/**
 * Interface for JS API - External asset features
 */
interface IVTAppExternalAssets {

    /**
     * Create an ID for an asset, uses uuid()
     * @returns
     */
    createAssetId(): string;

    /**
     * Add assets to map
     * @param assets
     */
    addAssets(assets: IAssetDefinition[]): string[]

    /**
     * Add assets to map
     * @param assets
     */
    addAssetsAsync(assets: IAssetDefinition[]): Promise<string[]>

    /**
     * update assets by ID
     * @param ids
     */
    updateAssets(ids: CustomerID[]): void

    /**
     * Remove assets by ID
     * @param ids
     */
    removeAssets(ids: CustomerID[]): void

    /**
     * Add additional styles for asset categories if needed
     * @param styles
     */
    addStyles(styles: IRenderStyle[]): Promise<void>
}

/**
 * Interface for JS API - Complete
 */
export interface IVTAppExternal extends IVTAppExternalSelection, IVTAppExternalRouting, IVTAppExternalLocation, IVTAppExternalAssets {
    /**
     * Set this property to the iframe with the VT that you want to control.
     * Null means this document itself contains the VT.
     */
    targetIFrame?: HTMLIFrameElement | null;

    /**
     * VT embed origin.
     * To control a VT in an iframe, set its origin (protocol, host(, port)) here.
     * This is necessary for secure cross-origin communication.
     */
    targetOrigin?: string | null;

    /**
     * Display VT map
     * @param domElement - container for render canvas
     * @param [options] - setup custom map view options, at least a host string
     */
    map(domElement: Element, options: HostString | IVTInitConfig): Promise<void>;

    /**
     * Preloads all building data after map was initialized with map()
     * May be used to preload data when WLAN is active to save bandwidth on mobile devices
     * TODO discuss feature
     */
    preload(): Promise<void>

    /**
     * Reset VT map to default
     */
    reset(): Promise<void>;

    /**
     * Destroy VT map
     */
    dispose(): void;
}
