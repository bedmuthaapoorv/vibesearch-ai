import { MetadataRoute } from "next";

export default function manifest() : MetadataRoute.Manifest{
    return {
        "theme_color": "#090909",
        "background_color": "#f7f5f4",
        "display": "fullscreen",
        "scope": "/",
        "start_url": "/",
        "name": "VIBE search",
        "short_name": "VIBE",
        "icons": [
            {
                "src": "/icon-192x192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "/icon-256x256.png",
                "sizes": "256x256",
                "type": "image/png"
            },
            {
                "src": "/icon-384x384.png",
                "sizes": "384x384",
                "type": "image/png"
            },
            {
                "src": "/icon-512x512.png",
                "sizes": "512x512",
                "type": "image/png"
            },
            {
                "src": "maskable.png",
                "sizes": "48x48",
                "type": "image/x-icon",
                "purpose": "maskable"
            }
        ]
    }
}