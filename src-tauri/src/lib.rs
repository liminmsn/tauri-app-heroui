mod desktop;
mod file_down;

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
async fn set_desktop(url: &str) -> Result<(), String> {
    let image_path = file_down::down_file(url.to_string())
        .await
        .map_err(|e| e.to_string())?;
    desktop::set(image_path).map_err(|e| e.to_string())?;
    Ok(())
}

#[tauri::command]
async fn down_img(url: &str) -> Result<String, String> {
    match file_down::down_file(String::from(url)).await {
        Ok(path) => Ok(format!("{}", path.display())),
        Err(_) => Err(format!("下载失败")),
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_http::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, down_img, set_desktop])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
