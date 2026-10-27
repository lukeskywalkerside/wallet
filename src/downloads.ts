const RELEASES = 'https://szrpjxbkcgclaozplzyw.supabase.co/storage/v1/object/public/app-releases'

export const INSTALLERS = {
    windows: `${RELEASES}/windows/exodus-windows-x64.exe`,
    macAppleSilicon: `${RELEASES}/mac/EXODUS-3.3.9-mac-arm64.dmg`,
    macIntel: `${RELEASES}/mac/EXODUS-3.3.9-mac-x64.dmg`,
}

export const DESKTOP_DOWNLOAD_LINKS = [
    ['Download for Windows (64-bit)', INSTALLERS.windows],
    ['Download for Mac (Apple Silicon)', INSTALLERS.macAppleSilicon],
    ['Download for Mac (Intel)', INSTALLERS.macIntel],
]

