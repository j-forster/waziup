export var config = {
    toURL: (path: string) => path,
    toProxyURL: (name: string, path: string) => `apps/${name}/${path}`
}