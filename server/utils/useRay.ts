import {Ray, ray} from 'node-ray';

export async function useRay() {
    Ray.useDefaultSettings({
        host: 'ray@buggregator',
        port: 8000
    })
    await Ray.initSettings()
    return ray
}
