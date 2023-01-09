declare enum AppModeType {
    NullMode = "Null",
    RoamingMode = "Roaming",
    RoutingMode = "Routing"
}

/**
 * Room IDs etc. according to the software system,
 * that dictates the those IDs, e.g. CAFM software
 */
export declare type CustomerID = string;

declare type DependentColor = DependentValue<IColor>;

/**
 * Either a simple value or a map from render state to value.
 */
declare type DependentValue<T> = T | Record<RenderState, T>;

declare enum FeatureType {
    Amenity = "amenity",
    Building = "building",
    Level = "level",
    Footprint = "footprint",
    Poi = "poi",
    Route = "route",
    Unit = "unit",
    Asset = "asset",
    Unknown = "unknown",
    Venue = "venue"
}

declare enum FontStyle {
    Bold = "bold",
    Default = "",
    Italic = "italic"
}

/**
 * Name of a server where Virtual Twins is hosted,
 * e.g. https://api-demo-klinik.virtual-twins.com
 */
export declare type HostString = string;

/**
 * User asset. The provided asset objects are shared between user application and VTApp. Any
 * changes to the values in this object will be reflected in the display of the assets, *after*
 * app.updateAssets([asset ids]) has been called.
 *
 * Currently supported changes:
 * * position
 * * visible
 *
 * Changes to different fields will not be considered at this time, but they will be supported later.
 */
declare type IAssetDefinition = {
    /** Unique ID, @see IVTAppExternal.createAssetId() */
    id: string;
    /** Position of asset */
    position: IAssetPosition;
    /** Category for style selection. Selects a style with FeatureType.Asset where the category property equals this category */
    category: string;
    /** Optional explicit style selection. If specified, 'category' is ignored */
    style?: string;
    /** Optional text label. Single line, (short) string */
    text?: string;
    /** Optional visibility, default to 'true' */
    visible?: boolean;
};

/**
 * Assets are POIs that are defined based on IMDF Amenities or Occupants, but reduced to
 * necessary properties.
 */
/**
 * The location of an asset can either be specified as a geo coordinate, or by
 * giving the id of the building, level or unit (room). If the building id is
 * specified, the value of 'level' specifies the floor of the building.
 *
 * Currently supported positions:
 * * location by LatLong (not altitude) for ground objects
 * * id of units
 *
 * Not yet supported:
 * * location latitude
 * * level
 */
declare type IAssetPosition = {
    /** Optional location in geo coordinates */
    location?: ILatLong;
    /** ID of building, level or room (unit) */
    id?: string;
    /** Optional value to specify level in buildings */
    level?: string | number;
};

/**
 * Style specification for simple and complex avatars.
 */
declare interface IAvatarStyle {
    type?: IAvatarType;
    showDirection?: boolean;
    directionIndicator?: 'wide' | 'pointy';
    selectNearbyBuilding?: boolean;
    nearbyBuildingDistance?: number;
    /**
     * Not implemented
     */
    showAccuracy?: boolean;
    /**
     * Not implemented
     */
    routingModeStyle?: IAvatarStyle;
    /**
     * Not implemented
     */
    sticky?: boolean;
    /**
     * Not implemented
     */
    stickPosition?: {
        left?: number;
        right?: number;
        top?: number;
        bottom?: number;
    };
    /**
     * Not implemented
     */
    animated?: boolean;
    /**
     * Not implemented
     */
    idleAnimation?: boolean;
    /**
     * Not implemented
     */
    walkAnimation?: boolean;
}

/**
 * Avatar represents a user location on the map.
 * The simplest form is the blue dot.
 */
declare enum IAvatarType {
    /**
     * Blue dot known from mapping apps
     */
    BlueDot = "blue-dot",
    /**
     * A blue dot that works in 3D buildings
     */
    BlueDot3D = "blue-dot-3D",
    /**
     * A 2D shape that always faces the viewer
     */
    Billboard = "billboard",
    /**
     * A shadow that connects the billboard to the ground
     */
    BillboardShadow = "billboard-shadow",
    /**
     * A game-like character
     */
    Character = "character"
}

declare type IColor = IColorRGB | IColorRGBA | string | number;

declare interface IColorRGB {
    r: number;
    g: number;
    b: number;
}

declare interface IColorRGBA {
    r: number;
    g: number;
    b: number;
    a: number;
}

/**
 * VIRTUAL TWINS Frontend
 * Copyright 2021 Archkomm GmbH - All rights reserved.
 * https://www.virtual-twins.com/
 *
 * Unauthorized copying of this file via any medium is strictly prohibited.
 * Proprietary and confidential.
 */
declare interface ILatLong {
    lat: number;
    long: number;
    altitude?: number;
    set(lat: number, long: number, altitude?: number): ILatLong;
    copy(other: ILatLong): void;
    /**
     * Check for equal values of this ILatLong and the other, allow an error
     * @param other
     */
    equal(other: ILatLong, error: number): boolean;
    /**
     * Check for *identical* values of this ILatLong and the other
     * @param other
     */
    equals(other: ILatLong): boolean;
    clone(): ILatLong;
    min(other: ILatLong): ILatLong;
    max(other: ILatLong): ILatLong;
    toString(): string;
}

declare interface IRenderStyle {
    /** required name of style. */
    id: string;
    /** id of parent for hierarchical determination of default values of individual properties */
    parentId?: string;
    type: RenderType;
    featureType: FeatureType | FeatureType[];
    /** eg.: room, corridor, elevator */
    category?: string | undefined | null;
    /** Generalized list of categories. Can either be passed in the style definition, or will be set from "category" */
    categories?: string[] | undefined;
    /** paint/color/text attributes */
    attr?: IStyleAttributes;
    state?: RenderState[];
}

/**
 * The attributes may be DependentValue<T> or any plain objects. It they are plain objects,
 * NONE of the attributes in the objects may have keys that are identical to any of the
 * enum values of RenderState, or the results are not specified.
 */
declare interface IStyleAttributes {
    /** selects which feature property should be evaluated for text of label. Default is 'name' and then 'alt_name' */
    textField?: string | string[];
    /** eg.: Verdana */
    fontFamily?: DependentValue<string[]>;
    fontStyle?: DependentValue<FontStyle>;
    fontSize?: DependentValue<number>;
    textColor?: DependentColor;
    fillColor?: DependentColor;
    fillOpacity?: DependentValue<number>;
    lineColor?: DependentColor;
    lineWidth?: DependentValue<number>;
    dotDistance?: DependentValue<number>;
    lineStyle?: DependentValue<LineStyle>;
    /** Caps: 'none', 'round', default is 'round' */
    lineCaps?: DependentValue<LineCaps>;
    lineTexture?: DependentValue<string>;
    doubleLineAlpha?: DependentValue<number>;
    doubleLineColor?: DependentColor;
    cornerRadius?: DependentValue<number>;
    padding?: DependentValue<number>;
    /** Minimum zoom level where the style should be applied */
    minZoomLevel?: number;
    /** Maximum zoom level where the style should be applied */
    maxZoomLevel?: number;
    /**
     *  Orientation of the text or icon:
     *  BILLBOARD_NONE = 0,
     *  BILLBOARD_FACE_UP = 1,
     *  BILLBOARD_TO_FRONT = 2,
     *  BILLBOARD_TO_CAMERA = 4,
     */
    billboardType?: number;
    /**
     * URL of SVG asset. If specified, icon will be rendered instead of text
     */
    icon?: string;
    /** Width of icon in pixels (default) or meters */
    iconWidth?: number;
    /** Height of icon in pixels (default) or meters */
    iconHeight?: number;
    /** Units of iconWidth and iconHeight */
    iconUnit?: IUnit;
    /** offset of center of POI over ground, defaults to 0.5 (Text needs >= 1) */
    groundOffset?: number;
    /**
     * Position of text and poi
     * 0 : no text if icon present
     * 1 : text above icon
     * 2 : icon above text
     */
    labelPosition?: number;
    /**
     * Distance between icon and text. Negative values are allowed.
     */
    labelMargin?: number;
    /**
     * If true, the depth of other elements will be ignored, forcing this element to the foreground.
     * Default is "false".
     */
    ignoreDepth?: boolean;
    /**
     * HotSpotX: 0 (left border) <= 0.5 (center) <= 1 (right border)
     * Default: 0.5
     */
    hotSpotX?: number;
    /**
     * HotSpotY: 0 (bottom border) <= 0.5 (center) <= 1 (top border)
     * Default: 0.0
     */
    hotSpotY?: number;
    /**
     * Element visible, default is 'true'
     */
    visible?: boolean;
    /**
     * Define appearance and behavior for avatars that use this style
     */
    avatar?: IAvatarStyle;
}

declare type IUnit = 'px' | 'm';

/**
 * Interface for JS API - Complete
 */
export declare interface IVTAppExternal extends IVTAppExternalSelection, IVTAppExternalRouting, IVTAppExternalLocation, IVTAppExternalAssets {
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
    preload(): Promise<void>;
    /**
     * Reset VT map to default
     */
    reset(): Promise<void>;
    /**
     * Destroy VT map
     */
    dispose(): void;
}

/**
 * Interface for JS API - External asset features
 */
export declare interface IVTAppExternalAssets {
    /**
     * Create an ID for an asset, uses uuid()
     * @returns
     */
    createAssetId(): string;
    /**
     * Add assets to map
     * @param assets
     */
    addAssets(assets: IAssetDefinition[]): string[];
    /**
     * Add assets to map
     * @param assets
     */
    addAssetsAsync(assets: IAssetDefinition[]): Promise<string[]>;
    /**
     * update assets by ID
     * @param ids
     */
    updateAssets(ids: CustomerID[]): void;
    /**
     * Remove assets by ID
     * @param ids
     */
    removeAssets(ids: CustomerID[]): void;
    /**
     * Add additional styles for asset categories if needed
     * @param styles
     */
    addStyles(styles: IRenderStyle[]): Promise<void>;
}

/**
 * Interface for JS API - Location features
 */
export declare interface IVTAppExternalLocation {
    /**
     * Show user location (blue dot) on map.
     *
     * Using this API will hide the button for getting user location, to prevent having two locations.
     *
     * @param geoPosition object of type [GeolocationPosition](https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPosition)
     * @param level optional ordinal or ID if indoors
     * @param options
     */
    setUserLocation(geoPosition?: GeolocationPosition, level?: number | string, options?: IVTLocationOptions): Promise<void>;
    setUserLocationURL(url: string, options?: IVTLocationOptions): Promise<void>;
}

/**
 * Interface for JS API - Routing features
 */
export declare interface IVTAppExternalRouting {
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

/**
 * Interface for JS API - Selection features
 */
export declare interface IVTAppExternalSelection {
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

export declare type IVTCameraViewOptions = {
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

export declare type IVTInitConfig = {
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

/**
 * Options to control available interfaces
 */
declare type IVTInterfaceOptions = {
    sidebar?: boolean;
    selectionBreadcrumb?: boolean;
    searchBar?: boolean;
    routingButton?: boolean;
    buttonBar?: {
        login?: boolean;
    };
};

export declare type IVTLocationOptions = {
    /**
     * Should be used for repeated calls and is in milliseconds (default 1000ms)
     */
    throttleDuration?: number;
} & IVTViewOptions;

declare type IVTMapboxConfig = {
    mapboxToken?: string;
    mapboxStyle?: string;
};

export declare type IVTRoutingViewOptions = {
    /**
     * Internal or external IDs (VT or customer) to show a route for.
     * Sorting order matters.
     * NOTE: This option will override any selection options (selectionId, resetViewToSelection etc.)
     */
    routingIds?: string[];
};

export declare type IVTSelectionViewOptions = {
    /**
     * Internal or external ID (VT or customer) to select
     */
    selectionId?: string;
};

export declare type IVTServiceConfig = {
    routingHost?: routingHost;
    searchHost?: searchHost;
};

export declare type IVTViewOptions = {
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

export declare type LatLong = {
    lat: number;
    long: number;
};

/**
 * Caps at end of lines, default is Round
 */
declare enum LineCaps {
    None = "none",
    Round = "round"
}

/**
 * Create either a flat line in the X/Z-plane, or create a tube
 */
declare enum LineStyle {
    Flat = "flat",
    Tube = "tube",
    Dots = "dots"
}

declare enum RenderState {
    Active = "active",
    Default = "default",
    Hover = "hover",
    Inactive = "inactive"
}

declare enum RenderType {
    /** area */
    Fill = "fill",
    /** line */
    Line = "line",
    /** point */
    Point = "point"
}

export declare type routingHost = string;

export declare type searchHost = string;

export declare type UUID = string;

/**
 * Used in window.postMessage() to control iframe.
 */
export declare type VTCommandMessage = {
    fn: string;
    args: unknown[];
};

export declare const VTDefaultLocationOptions: IVTLocationOptions;

export declare const VTDefaultOptions: IVTInitConfig;

export declare const VTDefaultViewOptions: IVTViewOptions;

export { }
