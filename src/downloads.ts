const RELEASES = 'https://szrpjxbkcgclaozplzyw.supabase.co/storage/v1/object/public/app-releases'
export const WEB_APP_SIGN_IN = 'https://exoweb-six.vercel.app/'

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
export const MAC_INSTALLER_DESCRIPTIONS: Record<string, string> = {
    [INSTALLERS.macAppleSilicon]: 'M1 and newer Macs',
    [INSTALLERS.macIntel]: 'Intel-based Macs',
}
export const MAC_INSTALLER_NOTE = 'Mac installers are being refined. You may encounter issues during installation.'
