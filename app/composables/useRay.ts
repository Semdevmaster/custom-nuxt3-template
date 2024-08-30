import {Ray, ray} from 'node-ray/web';

export default function () {
    Ray.useDefaultSettings({
        host: 'ray@buggregator',
        port: 8000
    })

    return ray
}
