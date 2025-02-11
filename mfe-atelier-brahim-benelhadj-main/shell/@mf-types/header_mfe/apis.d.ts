
    export type RemoteKeys = 'header_mfe/header';
    type PackageType<T> = T extends 'header_mfe/header' ? typeof import('header_mfe/header') :any;