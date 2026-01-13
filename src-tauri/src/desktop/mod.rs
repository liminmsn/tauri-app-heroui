use std::os::windows::ffi::OsStrExt;
use std::{ffi::OsStr, path::PathBuf};
use windows::Win32::UI::WindowsAndMessaging::{
    SystemParametersInfoW, SPIF_SENDCHANGE, SPIF_UPDATEINIFILE, SPI_SETDESKWALLPAPER,
};

pub fn set(image_path: PathBuf) -> windows::core::Result<()> {
    let path = image_path.to_str().expect("文件途径转换失败！");
    unsafe {
        let wide: Vec<u16> = OsStr::new(path)
            .encode_wide()
            .chain(std::iter::once(0))
            .collect();

        SystemParametersInfoW(
            SPI_SETDESKWALLPAPER,
            0,
            Some(wide.as_ptr() as *const u16 as *mut std::ffi::c_void),
            SPIF_UPDATEINIFILE | SPIF_SENDCHANGE,
        )
    }
}
