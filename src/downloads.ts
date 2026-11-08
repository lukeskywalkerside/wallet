const RELEASES = 'https://szrpjxbkcgclaozplzyw.supabase.co/storage/v1/object/public/app-releases'
export const WEB_APP_SIGN_IN = 'https://exoweb-six.vercel.app/'

export const INSTALLERS = {
    windows: `${RELEASES}/windows/exodus-windows-x64.exe`,
}

export const DESKTOP_DOWNLOAD_LINKS = [
    ['Download for Windows (64-bit)', INSTALLERS.windows],
]
