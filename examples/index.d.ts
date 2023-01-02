import { IVTAppExternal, IVTInitConfig, IVTViewOptions, IVTLocationOptions, IAssetDefinition, UUID, CustomerID } from '../IVTAppExternal';

import LatLong, { ILatLong } from '../../vt2/common/LatLong';
import IRenderStyle from '../../vt2/modules/render/IRenderStyle';
import { AppModeType } from '../../vt2/modules/app/IAppMode';

// FIXME: Resolve imports during build, so that SDK users have full type declaration

// This is a handmade declaration file.
// There is also a generated declaration file: sdk/dist/sdk/IVTAppExternal.d.ts

declare global {
    const vt: IVTAppExternal;
    declare namespace VT {
        class Map implements IVTAppExternal {
            constructor(domElement?: HTMLElement, options?: string | IVTInitConfig);
            map(domElement: HTMLElement, options: string | IVTInitConfig): Promise<void>;
            setView(identifierOrCoords: string | LatLong | null, options?: IVTViewOptions): Promise<void>;
            setViewFromDeeplink(): Promise<void>;
            select(featureId: UUID | CustomerID, options?: IVTViewOptions): Promise<void>;
            showRoute(stops: (UUID | null)[] | (CustomerID | null)[] | (LatLong | null)[], options?: IVTViewOptions): Promise<void>;
            setRouteStart(start: UUID | CustomerID | LatLong): Promise<void>;
            setRouteEnd(end: UUID | CustomerID | LatLong): Promise<void>;
            reset(): Promise<void>;
            hideRoute(): void;
            dispose(): void;
            preload(): Promise<void>;
            setUserLocation(geoPosition?: GeolocationPosition, level?: number | string, options?: IVTLocationOptions): Promise<void>;
            setUserLocationURL(url: string, options?: IVTLocationOptions): Promise<void>;
            createAssetId(): string;
            addAssets(assets: IAssetDefinition[]): string[];
            addAssetsAsync(assets: IAssetDefinition[]): Promise<string[]>;
            updateAssets(ids: string[]): void;
            removeAssets(ids: string[]): void;
            addStyles(styles: IRenderStyle[]): Promise<void>;
        }
    }
}