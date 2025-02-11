
    export type RemoteKeys = 'federation_provider/header';
    type PackageType<T> = T extends 'federation_provider/header' ? typeof import('federation_provider/header') :any;