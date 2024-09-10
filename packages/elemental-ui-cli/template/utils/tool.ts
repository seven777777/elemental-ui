const camelizeRE = /-(\w)/g;

export function camelize(str: string): string {
    return str.replace(camelizeRE, (_, c) => c.toUpperCase());
}

export const prefix = 'et';

export function createNamespace(name: string) {
    name = `${prefix}-${name}`;
    return [name, camelize(`-${name}`)];
}
